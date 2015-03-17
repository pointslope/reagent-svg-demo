(ns svg.app
  (:require-macros [reagent.debug :refer [log prn]])
  (:require [reagent.core :as r :refer [atom]]
            [goog.string :as gstring]
            [goog.string.format]
            [goog.fx :as fx]
            [goog.fx.Dragger.EventType]
            [goog.events]
            [goog.events.EventType]
            [goog.math :as gmath]))

(defonce app-db (atom {:x 360 :y 360 :radius 50 :fill nil :clicks 0}))

(defonce history (atom {:states []}))

(defn from-history
  [db h v]
  (let [i (js/parseInt v)
        state (get @h i)]
    (when state
      (reset! db state))))

(defn history-component [db]
  (let [h (r/cursor history [:states])
        active (atom nil)]
    (fn [db]
      (when-not @active
        (swap! h #(conj % @db)))
      [:div {:class "wrapper"}
       [:div {:class "form-group"}
        [:button {:class "btn btn-default"
                  :onClick (fn [e]
                             (reset! h [])
                             (.stopPropagation e))} "History Reset"]
        ]
       [:div {:class "form-group"}
        [:label {:for "history"} "History"]
        [:input {:type "range"
                 :class "form-control"
                 :name "history"
                 :min 0
                 :max (count @h)
                 :onChange (fn [e]
                             (when (> (count @h) 0)
                               (reset! active true)
                               (->> e
                                  (.-target)
                                  (.-value)
                                  (from-history db h))))
                 :onBlur (fn [e]
                           (do
                             (reset! active false)
                             (.stopPropagation e)))
                 }]]])))

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
                :onClick (fn [e] (swap! score inc))}])))

(defn make-constraint
  "Creates a function that keeps a supplied number within the set bounds"
  [minimum maximum]
  (fn [num]
    (let [local-max (if (<= num maximum) num maximum)]
      (if (<= minimum local-max) local-max minimum))))

(defn circle-dragged
  "Event handler for circle drags"
  [[newX newY]]
  (swap! app-db assoc :x newX :y newY))

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
                   (circle-dragged [x y]))))

              ;; Drag end
              (.addEventListener drag goog.fx.Dragger.EventType/END #(.dispose drag))

              ;; Initialize
              (.startDrag drag e))))))}))

(defn range-component [v min max title]
  [:div {:class "form-group"}
   [:label {:for title} title [:small " [ " @v " ] "]]
   [:input {:type "range"
            :class "form-control"
            :name title
            :key title
            :min min
            :max max
            :value @v
            :onChange (fn [e] (reset! v (-> e
                                          (.-target)
                                          (.-value))))}]])

(defn select-component []
  (let [fill (r/cursor app-db [:fill])
        colors ["black" "pink" "magenta" "gold"
                "orange" "purple" "brown" "red"]]
    (reset! fill (first colors))
    (fn []
      [:div {:class "form-group"}
       [:label {:for "Color"} "Color"]
       [:select {:name "Color"
                 :class "form-control"
                 :onChange (fn [e] (->> e
                                     (.-target)
                                     (.-value)
                                     (reset! fill)))}
        (for [c colors]
          [:option {:value c :key c} c])]])))

(defn svg-component [circle]
  [:svg {:width "720" :height "720" :id "canvas" :style {:outline "1px solid black"}}
   circle])

(defn app-component []
  (let [x (r/cursor app-db [:x])
        y (r/cursor app-db [:y])
        radius (r/cursor app-db [:radius])
        fill (r/cursor app-db [:fill])
        clicks (r/cursor app-db [:clicks])
        circle [draggable-circle-component x y radius fill clicks]]
    (fn []
      [:div {:id "wrapper"}
       [:div {:id "controls" :class "col-md-3"}
        [history-component app-db]
        [click-count-component clicks]
        [range-component x 0 720 "CX"]
        [range-component y 0 720 "CY"]
        [range-component radius 1 100 "Size"]
        [select-component]]
       [:div {:class "col-md-9"}
        [svg-component circle]]])))

(defn init []
  (r/render-component [app-component]
                      (.getElementById js/document "canvas")))
