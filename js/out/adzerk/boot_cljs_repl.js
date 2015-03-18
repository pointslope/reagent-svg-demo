// Compiled by ClojureScript 0.0-2816 {:elide-asserts true, :static-fns true}
goog.provide('adzerk.boot_cljs_repl');
goog.require('cljs.core');
goog.require('weasel.repl');
var repl_conn_26018 = null;
if(cljs.core.truth_((function (){var and__3571__auto__ = repl_conn_26018;
if(cljs.core.truth_(and__3571__auto__)){
return !(weasel.repl.alive_QMARK_());
} else {
return and__3571__auto__;
}
})())){
weasel.repl.connect(null);
} else {
}
