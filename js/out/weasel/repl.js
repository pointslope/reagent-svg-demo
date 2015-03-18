// Compiled by ClojureScript 0.0-2816 {:elide-asserts true, :static-fns true}
goog.provide('weasel.repl');
goog.require('cljs.core');
goog.require('weasel.impls.websocket');
goog.require('cljs.reader');
goog.require('clojure.browser.net');
goog.require('clojure.browser.event');
weasel.repl.ws_connection = (function (){var G__26021 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26021) : cljs.core.atom.call(null,G__26021));
})();
weasel.repl.alive_QMARK_ = (function alive_QMARK_(){

return !(((function (){var G__26023 = weasel.repl.ws_connection;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26023) : cljs.core.deref.call(null,G__26023));
})() == null));
});
weasel.repl.process_message = (function (){var method_table__4480__auto__ = (function (){var G__26024 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26024) : cljs.core.atom.call(null,G__26024));
})();
var prefer_table__4481__auto__ = (function (){var G__26025 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26025) : cljs.core.atom.call(null,G__26025));
})();
var method_cache__4482__auto__ = (function (){var G__26026 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26026) : cljs.core.atom.call(null,G__26026));
})();
var cached_hierarchy__4483__auto__ = (function (){var G__26027 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26027) : cljs.core.atom.call(null,G__26027));
})();
var hierarchy__4484__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$107,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("weasel.repl","process-message"),cljs.core.constant$keyword$108,cljs.core.constant$keyword$7,hierarchy__4484__auto__,method_table__4480__auto__,prefer_table__4481__auto__,method_cache__4482__auto__,cached_hierarchy__4483__auto__));
})();
weasel.repl.process_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$22,(function (message){
return console.error([cljs.core.str("Websocket REPL error "),cljs.core.str(cljs.core.constant$keyword$87.cljs$core$IFn$_invoke$arity$1(message))].join(''));
}));
weasel.repl.process_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$109,(function (message){
var code = cljs.core.constant$keyword$110.cljs$core$IFn$_invoke$arity$1(message);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$108,cljs.core.constant$keyword$111,cljs.core.constant$keyword$88,(function (){try{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$112,cljs.core.constant$keyword$115,cljs.core.constant$keyword$88,[cljs.core.str(eval(code))].join('')], null);
}catch (e26028){if((e26028 instanceof Error)){
var e = e26028;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$112,cljs.core.constant$keyword$114,cljs.core.constant$keyword$88,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([e], 0)),cljs.core.constant$keyword$113,(cljs.core.truth_(e.hasOwnProperty("stack"))?e.stack:"No stacktrace available.")], null);
} else {
var e = e26028;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$112,cljs.core.constant$keyword$114,cljs.core.constant$keyword$88,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([e], 0)),cljs.core.constant$keyword$113,"No stacktrace available."], null);

}
}})()], null);
}));
/**
* @param {...*} var_args
*/
weasel.repl.repl_print = (function() { 
var repl_print__delegate = function (args){
var temp__4124__auto__ = (function (){var G__26031 = weasel.repl.ws_connection;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26031) : cljs.core.deref.call(null,G__26031));
})();
if(cljs.core.truth_(temp__4124__auto__)){
var conn = temp__4124__auto__;
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$2((function (){var G__26032 = weasel.repl.ws_connection;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__26032) : cljs.core.deref.call(null,G__26032));
})(),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$108,cljs.core.constant$keyword$116,cljs.core.constant$keyword$88,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,args)], null));
} else {
return null;
}
};
var repl_print = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26033__i = 0, G__26033__a = new Array(arguments.length -  0);
while (G__26033__i < G__26033__a.length) {G__26033__a[G__26033__i] = arguments[G__26033__i + 0]; ++G__26033__i;}
  args = new cljs.core.IndexedSeq(G__26033__a,0);
} 
return repl_print__delegate.call(this,args);};
repl_print.cljs$lang$maxFixedArity = 0;
repl_print.cljs$lang$applyTo = (function (arglist__26034){
var args = cljs.core.seq(arglist__26034);
return repl_print__delegate(args);
});
repl_print.cljs$core$IFn$_invoke$arity$variadic = repl_print__delegate;
return repl_print;
})()
;
/**
* @param {...*} var_args
*/
weasel.repl.console_print = (function() { 
var console_print__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
};
var console_print = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26035__i = 0, G__26035__a = new Array(arguments.length -  0);
while (G__26035__i < G__26035__a.length) {G__26035__a[G__26035__i] = arguments[G__26035__i + 0]; ++G__26035__i;}
  args = new cljs.core.IndexedSeq(G__26035__a,0);
} 
return console_print__delegate.call(this,args);};
console_print.cljs$lang$maxFixedArity = 0;
console_print.cljs$lang$applyTo = (function (arglist__26036){
var args = cljs.core.seq(arglist__26036);
return console_print__delegate(args);
});
console_print.cljs$core$IFn$_invoke$arity$variadic = console_print__delegate;
return console_print;
})()
;
weasel.repl.print_fns = new cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$117,weasel.repl.repl_print,cljs.core.constant$keyword$118,weasel.repl.console_print,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$117,null,cljs.core.constant$keyword$118,null], null), null),(function() { 
var G__26037__delegate = function (args){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(weasel.repl.console_print,args);

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(weasel.repl.repl_print,args);
};
var G__26037 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26038__i = 0, G__26038__a = new Array(arguments.length -  0);
while (G__26038__i < G__26038__a.length) {G__26038__a[G__26038__i] = arguments[G__26038__i + 0]; ++G__26038__i;}
  args = new cljs.core.IndexedSeq(G__26038__a,0);
} 
return G__26037__delegate.call(this,args);};
G__26037.cljs$lang$maxFixedArity = 0;
G__26037.cljs$lang$applyTo = (function (arglist__26039){
var args = cljs.core.seq(arglist__26039);
return G__26037__delegate(args);
});
G__26037.cljs$core$IFn$_invoke$arity$variadic = G__26037__delegate;
return G__26037;
})()
], true, false);
/**
* @param {...*} var_args
*/
weasel.repl.connect = (function() { 
var connect__delegate = function (repl_server_url,p__26040){
var map__26047 = p__26040;
var map__26047__$1 = ((cljs.core.seq_QMARK_(map__26047))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26047):map__26047);
var print = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26047__$1,cljs.core.constant$keyword$116,cljs.core.constant$keyword$117);
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26047__$1,cljs.core.constant$keyword$119);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26047__$1,cljs.core.constant$keyword$120);
var on_open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26047__$1,cljs.core.constant$keyword$121);
var verbose = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26047__$1,cljs.core.constant$keyword$122,true);
var repl_connection = weasel.impls.websocket.websocket_connection.cljs$core$IFn$_invoke$arity$0();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(weasel.repl.ws_connection,cljs.core.constantly(repl_connection));

clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.constant$keyword$19,((function (repl_connection,map__26047,map__26047__$1,print,on_close,on_error,on_open,verbose){
return (function (evt){
cljs.core.set_print_fn_BANG_(((cljs.core.fn_QMARK_(print))?print:cljs.core.get.cljs$core$IFn$_invoke$arity$2(weasel.repl.print_fns,print)));

clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$2(repl_connection,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$108,cljs.core.constant$keyword$123], null)], 0)));

if(cljs.core.truth_(verbose)){
console.info("Opened Websocket REPL connection");
} else {
}

if(cljs.core.fn_QMARK_(on_open)){
return (on_open.cljs$core$IFn$_invoke$arity$0 ? on_open.cljs$core$IFn$_invoke$arity$0() : on_open.call(null));
} else {
return null;
}
});})(repl_connection,map__26047,map__26047__$1,print,on_close,on_error,on_open,verbose))
);

clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.constant$keyword$20,((function (repl_connection,map__26047,map__26047__$1,print,on_close,on_error,on_open,verbose){
return (function (evt){
var map__26048 = cljs.reader.read_string(evt.message);
var map__26048__$1 = ((cljs.core.seq_QMARK_(map__26048))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26048):map__26048);
var message = map__26048__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26048__$1,cljs.core.constant$keyword$108);
var response = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__26049 = message;
return (weasel.repl.process_message.cljs$core$IFn$_invoke$arity$1 ? weasel.repl.process_message.cljs$core$IFn$_invoke$arity$1(G__26049) : weasel.repl.process_message.call(null,G__26049));
})()], 0));
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$2(repl_connection,response);
});})(repl_connection,map__26047,map__26047__$1,print,on_close,on_error,on_open,verbose))
);

clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.constant$keyword$21,((function (repl_connection,map__26047,map__26047__$1,print,on_close,on_error,on_open,verbose){
return (function (evt){
var G__26050_26053 = weasel.repl.ws_connection;
var G__26051_26054 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__26050_26053,G__26051_26054) : cljs.core.reset_BANG_.call(null,G__26050_26053,G__26051_26054));

if(cljs.core.truth_(verbose)){
console.info("Closed Websocket REPL connection");
} else {
}

if(cljs.core.fn_QMARK_(on_close)){
return (on_close.cljs$core$IFn$_invoke$arity$0 ? on_close.cljs$core$IFn$_invoke$arity$0() : on_close.call(null));
} else {
return null;
}
});})(repl_connection,map__26047,map__26047__$1,print,on_close,on_error,on_open,verbose))
);

clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.constant$keyword$22,((function (repl_connection,map__26047,map__26047__$1,print,on_close,on_error,on_open,verbose){
return (function (evt){
if(cljs.core.truth_(verbose)){
console.error("WebSocket error",evt);
} else {
}

if(cljs.core.fn_QMARK_(on_error)){
var G__26052 = evt;
return (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(G__26052) : on_error.call(null,G__26052));
} else {
return null;
}
});})(repl_connection,map__26047,map__26047__$1,print,on_close,on_error,on_open,verbose))
);

if(cljs.core.truth_(COMPILED)){
} else {
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (gntp,repl_connection,map__26047,map__26047__$1,print,on_close,on_error,on_open,verbose){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp,repl_connection,map__26047,map__26047__$1,print,on_close,on_error,on_open,verbose))
,cljs.core.js_keys(gntp)));
})();

goog.isProvided_ = ((function (repl_connection,map__26047,map__26047__$1,print,on_close,on_error,on_open,verbose){
return (function (_){
return false;
});})(repl_connection,map__26047,map__26047__$1,print,on_close,on_error,on_open,verbose))
;

goog.require = ((function (repl_connection,map__26047,map__26047__$1,print,on_close,on_error,on_open,verbose){
return (function (name,reload){
if(cljs.core.truth_((function (){var or__3583__auto__ = !(cljs.core.contains_QMARK_(cljs.core._STAR_loaded_libs_STAR_,name));
if(or__3583__auto__){
return or__3583__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__3583__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__3583__auto__)){
return or__3583__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return document.body.appendChild((function (){var script = document.createElement("script");
script.type = "text/javascript";

script.src = [cljs.core.str(goog.basePath),cljs.core.str((goog.dependencies_.nameToPath[name]))].join('');

return script;
})());
} else {
return null;
}
});})(repl_connection,map__26047,map__26047__$1,print,on_close,on_error,on_open,verbose))
;
}

return clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$2(repl_connection,repl_server_url);
};
var connect = function (repl_server_url,var_args){
var p__26040 = null;
if (arguments.length > 1) {
var G__26055__i = 0, G__26055__a = new Array(arguments.length -  1);
while (G__26055__i < G__26055__a.length) {G__26055__a[G__26055__i] = arguments[G__26055__i + 1]; ++G__26055__i;}
  p__26040 = new cljs.core.IndexedSeq(G__26055__a,0);
} 
return connect__delegate.call(this,repl_server_url,p__26040);};
connect.cljs$lang$maxFixedArity = 1;
connect.cljs$lang$applyTo = (function (arglist__26056){
var repl_server_url = cljs.core.first(arglist__26056);
var p__26040 = cljs.core.rest(arglist__26056);
return connect__delegate(repl_server_url,p__26040);
});
connect.cljs$core$IFn$_invoke$arity$variadic = connect__delegate;
return connect;
})()
;
