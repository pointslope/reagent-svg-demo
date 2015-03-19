// Compiled by ClojureScript 0.0-2816 {:elide-asserts true, :static-fns true}
goog.provide('pointslope.remit.middleware');
goog.require('cljs.core');
/**
* A middleware function to assoc a given
* key/value pair onto every event prior
* to delegating the call to the supplied
* event-handler function.
*/
pointslope.remit.middleware.event_map_middleware = (function event_map_middleware(f,key,val){
return (function (data){
var G__25229 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,key,val);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25229) : f.call(null,G__25229));
});
});
