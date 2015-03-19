(ns pointslope.remit.middleware
  "This namespace contains reusable middleware
factories that can assist with event processing.")

;;; - handler design -
;;; remit event handlers are expected to be functions
;;; that take a single event map parameter and pull the
;;; data they need from its keys.
;;;
;;; See the pointslope.remit.events namespace for details.

;; - predefined middleware -

(defn event-map-middleware
  "A middleware function to assoc a given 
  key/value pair onto every event prior
  to delegating the call to the supplied
  event-handler function."
  [f key val]
  (fn [data]
    (f (assoc data key val))))
