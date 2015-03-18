(ns svg.app
  (:require-macros [reagent.debug :refer [log prn]]
                   [cljs.core.async.macros :as m :refer [go go-loop]])
  (:require [reagent.core :as r :refer [atom]]
            [goog.string :as gstring]
            [goog.string.format]
            [goog.fx :as fx]
            [goog.fx.Dragger.EventType]
            [goog.events]
            [goog.events.EventType]
            [goog.math :as gmath]
            [cljs.core.async :as async :refer [timeout to-chan <! >!]]))

;; Data

(defonce app-db (atom {:x 360 :y 360 :radius 50 :fill "black" :clicks 0}))
(defonce history (atom {:states [] :current 0}))
(defonce event-handlers (atom {}))

;;; Utilities

(defn fire
  "Call all handlers for an event passing in the app-db"
  [key data]
  (doseq [handler (key @event-handlers)]
    (handler app-db data))
  {:event key :data data})

(defn listen
  "Register a function to listen for an event"
  [key func]
  (let [handlers (vec (get @event-handlers key))]
    (swap! event-handlers assoc key (conj handlers func))))

(defn- make-constraint
  "Creates a function that keeps a supplied number within the set bounds"
  [minimum maximum]
  (fn [num]
    (let [local-max (if (<= num maximum) num maximum)]
      (if (<= minimum local-max) local-max minimum))))

;;; Event Handlers

(listen :object-moved
        (fn [db [newX newY]]
          (swap! db assoc :x newX :y newY)
          (fire :state-changed @db)))

(listen :color-changed
        (fn [db color]
          (swap! db assoc :fill color)
          (fire :state-changed @db)))

(listen :point-earned
        (fn [db cursor]
          (swap! cursor inc)
          (fire :state-changed @db)))

(listen :dimension-changed
        (fn [db [cursor value]]
          (reset! cursor value)
          (fire :state-changed @db)))

(listen :state-changed
        (fn [db new-state]
          (let [states  @(r/cursor history [:states])
                counter @(r/cursor history [:count])
                next-index (inc counter)]
            (reset! history {:states (conj states new-state)
                             :count next-index
                             :current next-index}))))

(listen :history-navigated
        (fn [db index]
          (let [states (r/cursor history [:states])
                current (r/cursor history [:current])]
            (when-let [chosen (get @states index)]
              (reset! current index)
              (reset! db chosen))
            true)))

;;; Components

(defn play-history
  "Steps through history in an optionally specified dir.
  Default id :forward"
  ([history]
   (play-history history :forward))
  ([history dir]
   (let [indices-chan (to-chan (cond->> history
                                 true (count)
                                 true (inc)
                                 true (range 1)
                                (= :reverse dir) (reverse)))]
     (go-loop []
       (when-let [index (<! indices-chan)]
         (fire :history-navigated index)
         (<! (timeout 30))
         (recur))))))

(defn history-component
  [db]
  (let [h (r/cursor db [:states])
        current (r/cursor db [:current])]
    (fn [db]
      [:div {:class "wrapper"}
       [:button {:class "btn btn-default"
                 :onClick (fn [e]
                            (play-history @h :reverse))}
        [:span {:class "glyphicon glyphicon-fast-backward"}]]
       [:button {:class "btn btn-default"
                 :onClick (fn [e]
                            (play-history @h :forward))}
        [:span {:class "glyphicon glyphicon-fast-forward"}]]
       [:div {:class "form-group"}
        [:label {:for "history"} (str "History " @current)]
        [:input {:type "range"
                 :class "form-control"
                 :name "history"
                 :value @current
                 :min 0
                 :max (count @h)
                 :on-change (fn [e]
                              (fire :history-navigated
                                    (->> e .-target .-value js/parseInt)))}]]])))

(defn click-count-component
  [clicks]
  [:h2 "Clicks: " [:small @clicks]])

(defn circle-component
  [cx cy r fill score]
  (let [local-state {:x cx :y cy}]
    (r/set-state (r/current-component) local-state)
    (fn [cx cy r fill score]
      [:circle {:cx @cx :cy @cy
                :r @r :style {:fill @fill}
                :on-click (fn [e] (fire :point-earned score))}])))

(def draggable-circle-component
  (with-meta circle-component
    {:component-did-mount
     (fn [this]
       (let [node (r/dom-node this)
             canvas (-> node .-parentNode)
             x-constraint (->> canvas .-clientWidth (make-constraint 0))
             y-constraint (->> canvas .-clientHeight (make-constraint 0))]

         ;; get my component-local
         (goog.events/listen
          node
          goog.events.EventType/MOUSEDOWN
          (fn [e]
            (let [drag (fx/Dragger. node)
                  local-state (r/state this)]
              
              ;; Drag event handler
              (.addEventListener drag
               goog.fx.Dragger.EventType/DRAG
               (fn [b]
                 (let [dx (-> b .-dragger .-deltaX)
                       dy (-> b .-dragger .-deltaY)
                       x (x-constraint (+ dx @(:x local-state)))
                       y (y-constraint (+ dy @(:y local-state)))]
                   (fire :object-moved [x y]))))

              ;; Drag end
              (.addEventListener drag goog.fx.Dragger.EventType/END #(.dispose drag))

              ;; Initialize
              (.startDrag drag e))))))}))

(defn range-component
  [v min max title]
  [:div {:class "form-group"}
   [:label {:for title} title [:small " [ " @v " ] "]]
   [:input {:type "range"
            :class "form-control"
            :name title
            :key title
            :min min
            :max max
            :value @v
            :on-change (fn [e] (fire :dimension-changed [v (-> e .-target .-value)]))}]])

(defn select-component
  []
  (fn []
    (let [fill (r/cursor app-db [:fill])
          colors ["gray" "red" "orange" "yellow" "green" "blue"
                  "aqua" "indigo" "purple" "brown" "black"]]
      (do
        [:div {:class "form-group"}
         [:label {:for "Color"} "Color"]
         [:select {:name "Color"
                   :class "form-control"
                   :value @fill
                   :on-change (fn [e] (fire :color-changed (->> e .-target .-value)))}
          (for [c colors]
            [:option {:value c :key c} c])]]))))

(defn svg-component
  [circle]
  [:svg {:width "720"
         :height "720"
         :id "canvas"
         :style {:outline "1px solid black"}}
   circle])

(defn app-component
  []
  (let [x (r/cursor app-db [:x])
        y (r/cursor app-db [:y])
        radius (r/cursor app-db [:radius])
        fill (r/cursor app-db [:fill])
        clicks (r/cursor app-db [:clicks])
        circle [draggable-circle-component x y radius fill clicks]]
    (fn []
      [:div {:id "wrapper"}
       [:div {:id "controls" :class "col-md-3"}
        [history-component history]
        [click-count-component clicks]
        [range-component x 0 720 "CX"]
        [range-component y 0 720 "CY"]
        [range-component radius 1 100 "Size"]
        [select-component]]
       [:div {:class "col-md-9"}
        [svg-component circle]]])))

;; Run it all

(defn init
  []
  (r/render-component [app-component]
                      (.getElementById js/document "canvas")))
