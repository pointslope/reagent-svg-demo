// Compiled by ClojureScript 0.0-2816 {:elide-asserts true, :static-fns true}
goog.provide('adzerk.boot_reload.client');
goog.require('cljs.core');
goog.require('adzerk.boot_reload.reload');
goog.require('goog.net.jsloader');
goog.require('adzerk.boot_reload.websocket');
goog.require('clojure.browser.net');
goog.require('clojure.browser.event');
goog.require('cljs.reader');
adzerk.boot_reload.client.ws_conn = (function (){var G__15031 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15031) : cljs.core.atom.call(null,G__15031));
})();
adzerk.boot_reload.client.alive_QMARK_ = (function alive_QMARK_(){
return !(((function (){var G__15033 = adzerk.boot_reload.client.ws_conn;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15033) : cljs.core.deref.call(null,G__15033));
})() == null));
});
adzerk.boot_reload.client.patch_goog_base_BANG_ = (function patch_goog_base_BANG_(){
goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = (function (file){
if(cljs.core.truth_(goog.inHtmlDocument_())){
var G__15035 = file;
return goog.net.jsloader.load(G__15035);
} else {
return null;
}
});
});
/**
* @param {...*} var_args
*/
adzerk.boot_reload.client.connect = (function() { 
var connect__delegate = function (url,p__15036){
var vec__15042 = p__15036;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15042,(0),null);
var conn = adzerk.boot_reload.websocket.websocket_connection.cljs$core$IFn$_invoke$arity$0();
adzerk.boot_reload.client.patch_goog_base_BANG_();

var G__15043_15047 = adzerk.boot_reload.client.ws_conn;
var G__15044_15048 = conn;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15043_15047,G__15044_15048) : cljs.core.reset_BANG_.call(null,G__15043_15047,G__15044_15048));

clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.constant$keyword$19,((function (conn,vec__15042,opts){
return (function (evt){
clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$2(conn,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([window.location.protocol], 0)));

return console.info("Reload websocket connected.");
});})(conn,vec__15042,opts))
);

clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.constant$keyword$20,((function (conn,vec__15042,opts){
return (function (evt){
var msg = cljs.reader.read_string(evt.message);
if(cljs.core.vector_QMARK_(msg)){
return adzerk.boot_reload.reload.reload(opts,msg);
} else {
return null;
}
});})(conn,vec__15042,opts))
);

clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.constant$keyword$21,((function (conn,vec__15042,opts){
return (function (evt){
var G__15045_15049 = adzerk.boot_reload.client.ws_conn;
var G__15046_15050 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15045_15049,G__15046_15050) : cljs.core.reset_BANG_.call(null,G__15045_15049,G__15046_15050));

return console.info("Reload websocket connection closed.");
});})(conn,vec__15042,opts))
);

clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.constant$keyword$22,((function (conn,vec__15042,opts){
return (function (evt){
return console.error("Reload websocket error:",evt);
});})(conn,vec__15042,opts))
);

return clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$2(conn,url);
};
var connect = function (url,var_args){
var p__15036 = null;
if (arguments.length > 1) {
var G__15051__i = 0, G__15051__a = new Array(arguments.length -  1);
while (G__15051__i < G__15051__a.length) {G__15051__a[G__15051__i] = arguments[G__15051__i + 1]; ++G__15051__i;}
  p__15036 = new cljs.core.IndexedSeq(G__15051__a,0);
} 
return connect__delegate.call(this,url,p__15036);};
connect.cljs$lang$maxFixedArity = 1;
connect.cljs$lang$applyTo = (function (arglist__15052){
var url = cljs.core.first(arglist__15052);
var p__15036 = cljs.core.rest(arglist__15052);
return connect__delegate(url,p__15036);
});
connect.cljs$core$IFn$_invoke$arity$variadic = connect__delegate;
return connect;
})()
;
