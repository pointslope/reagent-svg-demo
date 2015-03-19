(ns svg.components.history
  "A reusable history navigator component"
  (:require-macros [cljs.core.async.macros :as m :refer [go go-loop]])
  (:require [reagent.core :as r :refer [atom]]
            [pointslope.remit.events :refer [emit subscribe]]
            [cljs.core.async :as async :refer [timeout to-chan <! >!]]))

(def ^:dynamic *history-replay-fps* 16.6666666667)

;;; Event Handlers
(subscribe :navigate-history
           (fn [{{:keys [app-state historical-states current index]} :data}]
             (when-let [state (get @historical-states index)]
               (reset! current index)
               (reset! app-state state))
             true))

(subscribe :record-history
           (fn [{{:keys [app-state historical-states current]} :data}]
             (swap! historical-states conj @app-state)
             (swap! current inc)))

;;; Helper functions
(defn- play-history
  "Steps (:forward | :backward) through history 
  in the specified direction (default is :forward)"
  ([app-state states current]
   (play-history app-state states current :forward))
  
  ([app-state states current direction]
   (let [indices-chan (to-chan (cond->> @states
                                 true (count)
                                 true (inc)
                                 true (range 1)
                                 (= :reverse direction) (reverse)))]
     (go-loop []
       (when-let [index (<! indices-chan)]
         (emit :navigate-history {:app-state app-state
                                  :historical-states states 
                                  :current current
                                  :index index})
         (<! (timeout *history-replay-fps*))
         (recur))))))

;; --- public api ---

(defn make-history-recorder
  "Creates a function to record history"
  [history states-key current-key]
  (let [historical-states (r/cursor history [states-key])
        current-state (r/cursor history [current-key])]
    (fn [app-state]
      (emit :record-history {:app-state app-state
                             :historical-states historical-states
                             :current current-state}))))

(defn history-component
  "This history component requires an atom containing
  a history map to be passed into it. The map should
  store a vector of states under the key given by
  states-key and an integer index of the current state
  under the current-key. 

  When a user interacts with the history control, 
  a :navigate-history event will be fired with 
  the following keys:

  :states - a cursor over the state vector
  :current - a cursor to keep track of the current index
  :index - the new index requested"
  [app-state history states-key current-key]
  (let [states (r/cursor history [states-key])
        current (r/cursor history [current-key])]    
    (fn [app-state history states-key current-key]
      [:div {:class "history-component wrapper"}
       [:div {:class "form-group"}
        [:label {:for "history"} (str "History States [" @current "]")]
        [:input {:type "range"
                 :class "form-control"
                 :name "history"
                 :value @current
                 :min 0
                 :max (count @states)
                 :on-change (fn [e]
                              (let [index (->> e .-target .-value js/parseInt)]
                                (emit :navigate-history {:app-state app-state
                                                         :historical-states states 
                                                         :current current
                                                         :index index})))}]]
       
       [:div {:class "history-control history-play-backward"}
        [:button {:class "btn btn-default"
                  :on-click #(play-history app-state states current :reverse)}
         [:span {:class "glyphicon glyphicon-fast-backward"}]]]
       
       [:div {:class "history-control history-play-forward"}
        [:button {:class "btn btn-default"
                  :on-click #(play-history app-state states current :forward)}
         [:span {:class "glyphicon glyphicon-fast-forward"}]]]])))
