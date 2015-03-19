(ns svg.app
  (:require-macros [reagent.debug :refer [log prn]]
                   [cljs.core.async.macros :as m :refer [go go-loop]])
  (:require [reagent.core :as r :refer [atom]]
            [pointslope.remit.events :as pse :refer [emit subscribe]]
            [pointslope.remit.middleware :as psm :refer [event-map-middleware]]
            [goog.string :as gstring]
            [goog.string.format]
            [goog.fx :as fx]
            [goog.fx.Dragger.EventType]
            [goog.events]
            [goog.events.EventType]
            [goog.math :as gmath]
            [cljs.core.async :as async :refer [timeout to-chan <! >!]]))

;;; Data

(defonce app-db (atom {:x 360 :y 360 :radius 50 :fill "black" :clicks 0}))
(defonce history (atom {:states [] :current 0}))
(defonce event-handlers (atom {}))

;;; Middleware Wrapper

(defn wrap-db
  "Wraps handlers in middleware that adds the app-db 
  to the event map under the :db key"
  [handler]
  (-> handler
     (event-map-middleware :db app-db)))

;;; Event Handlers

(subscribe :object-moved
           (wrap-db
            (fn [{db :db {x :x y :y} :data}]
              (swap! db assoc :x x :y y)
              (emit :state-changed))))

(subscribe :color-changed
           (wrap-db
            (fn [{db :db {color :color} :data}]
              (swap! db assoc :fill color)
              (emit :state-changed))))

(subscribe :point-earned
           (fn [{:keys [data]}]
             (swap! data inc)
             (emit :state-changed)))

(subscribe :dimension-changed
           (fn [{{cursor :cursor value :value} :data}]
             (reset! cursor value)
             (emit :state-changed)))

(subscribe :state-changed
           (wrap-db
            (fn [{:keys [db]}]
              (let [states  @(r/cursor history [:states])
                    counter @(r/cursor history [:count])
                    next-index (inc counter)]
                (reset! history {:states (conj states @db)
                                 :count next-index
                                 :current next-index})))))

(subscribe :history-navigated
           (wrap-db
            (fn [{:keys [db data]}]
              (let [states (r/cursor history [:states])
                    current (r/cursor history [:current])]
                (when-let [chosen (get @states data)]
                  (reset! current data)
                  (reset! db chosen))
                true))))

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
         (emit :history-navigated index)
         (<! (timeout 20))
         (recur))))))

(defn history-component
  [db]
  (let [h (r/cursor db [:states])
        current (r/cursor db [:current])]
    (fn [db]
      [:div {:class "wrapper row"}
       [:div {:class "form-group col-md-12"}
        [:label {:for "history"} (str "History States [" @current "]")]
        [:input {:type "range"
                 :class "form-control"
                 :name "history"
                 :value @current
                 :min 0
                 :max (count @h)
                 :on-change (fn [e]
                              (emit :history-navigated
                                    (->> e .-target .-value js/parseInt)))}]]
       [:div {:class "col-md-6"}
        [:button {:class "btn btn-default"
                  :onClick (fn [e]
                             (play-history @h :reverse))}
         [:span {:class "glyphicon glyphicon-fast-backward"}]]]
       [:div {:class "col-md-6 text-right"}
        [:button {:class "btn btn-default"
                  :onClick (fn [e]
                             (play-history @h :forward))}
         [:span {:class "glyphicon glyphicon-fast-forward"}]]]
       ])))

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
                :on-click (fn [e] (emit :point-earned score))}])))

(def draggable-circle-component
  (with-meta circle-component
    {:component-did-mount
     (fn [this]
       (let [node (r/dom-node this)
             canvas (-> node .-parentNode)
             x-constraint #(gmath/clamp % 0 (.-clientWidth canvas))
             y-constraint #(gmath/clamp % 0 (.-clientHeight canvas))]
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
                 (let [dx (-> b .-dragger .-deltaX (/ 20) (Math/round))
                       dy (-> b .-dragger .-deltaY (/ 20) (Math/round))
                       x (x-constraint (+ dx @(:x local-state)))
                       y (y-constraint (+ dy @(:y local-state)))]
                   (emit :object-moved {:x x :y y}))))

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
            :on-change (fn [e] (emit :dimension-changed
                                    {:cursor v :value (-> e .-target .-value)}))}]])

(defn select-component
  [fill]
  (fn [fill]
    (let [colors ["gray" "red" "orange" "yellow" "green" "blue"
                  "aqua" "indigo" "purple" "brown" "black"]]
      (do
        [:div {:class "form-group"}
         [:label {:for "Color"} "Color"]
         [:select {:name "Color"
                   :class "form-control"
                   :value @fill
                   :on-change (fn [e] (emit :color-changed
                                           {:color (->> e .-target .-value)}))}
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
        [click-count-component clicks]
        [range-component x 0 720 "CX"]
        [range-component y 0 720 "CY"]
        [range-component radius 1 100 "Size"]
        [select-component fill]
        [history-component history]]
       [:div {:class "col-md-9"}
        [svg-component circle]]])))

;; Run it all

(defn init
  []
  (r/render-component [app-component]
                      (.getElementById js/document "canvas")))
