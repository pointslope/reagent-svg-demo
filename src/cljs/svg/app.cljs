(ns svg.app
  (:require [reagent.core :as r :refer [atom]]))

(defonce app-db (atom {:x 300 :y 100 :radius 10 :fill nil :clicks 0}))

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
                  :onClick (fn [e] (reset! h []))} "History Reset"]
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
                                  (from-history db h)
                                  )))
                 :onBlur (fn [e] (reset! active false))
                 }]]])))

(defn click-count-component
  [clicks]
  [:h2 "Clicks: " [:small @clicks]])

(defn circle-component [cx cy r fill score]
  [:circle {:cx @cx :cy @cy
            :r @r :style {:fill @fill}
            :onClick (fn [e] (swap! score inc))}])

(defn range-component [v min max title]
  [:div {:class "form-group"}
   [:label {:for title} title]
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
  (fn []
    (let [fill (r/cursor app-db [:fill])
          colors ["black" "pink" "magenta" "gold"
                  "orange" "purple" "brown" "red"]]
      (do
        (reset! fill (first colors))
        [:div {:class "form-group"}
         [:label {:for "Color"} "Color"]
         [:select {:name "Color"
                   :class "form-control"
                   :onChange (fn [e] (->> e
                                       (.-target)
                                       (.-value)
                                       (reset! fill)))}
          (for [c colors]
            [:option {:value c :key c} c])]]))))

(defn svg-component [circle]
  [:svg {:width "720" :height "720"}
   circle])

(defn app-component []
  (let [x (r/cursor app-db [:x])
        y (r/cursor app-db [:y])
        radius (r/cursor app-db [:radius])
        fill (r/cursor app-db [:fill])
        clicks (r/cursor app-db [:clicks])
        circle [circle-component x y radius fill clicks]]
    (fn []
      [:div {:id "wrapper"}
       [:div {:id "controls" :class "col-md-3"}
        [history-component app-db]
        [click-count-component clicks]
        [range-component x 300 700 "CX"]
        [range-component y 100 500 "CY"]
        [range-component radius 10 100 "Size"]
        [select-component]]
       [:div {:class "col-md-9"}
        [svg-component circle]]])))

(defn init []
  (r/render-component [app-component]
                      (.getElementById js/document "canvas")))
