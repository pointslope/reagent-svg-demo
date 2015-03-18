// Compiled by ClojureScript 0.0-2816 {:elide-asserts true, :static-fns true}
goog.provide('reagent.impl.component');
goog.require('cljs.core');
goog.require('reagent.debug');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.util');
reagent.impl.component.state_atom = (function state_atom(this$){
var sa = (this$["cljsState"]);
if(!((sa == null))){
return sa;
} else {
return (this$["cljsState"] = reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(null));
}
});
reagent.impl.component.as_element = (function as_element(x){
var G__24574 = x;
return reagent.impl.template.as_element(G__24574);
});
reagent.impl.component.do_render = (function do_render(c){
var _STAR_current_component_STAR_24589 = reagent.impl.component._STAR_current_component_STAR_;
reagent.impl.component._STAR_current_component_STAR_ = c;

try{var f = (c["cljsRender"]);
var _ = null;
var p = (c["props"]);
var res = ((((c["reagentRender"]) == null))?(function (){var G__24590 = c;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24590) : f.call(null,G__24590));
})():(function (){var argv = (p["argv"]);
var n = cljs.core.count(argv);
var G__24591 = n;
switch (G__24591) {
case (1):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (2):
var G__24592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24592) : f.call(null,G__24592));

break;
case (3):
var G__24593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
var G__24594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24593,G__24594) : f.call(null,G__24593,G__24594));

break;
case (4):
var G__24595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
var G__24596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));
var G__24597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(3));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__24595,G__24596,G__24597) : f.call(null,G__24595,G__24596,G__24597));

break;
case (5):
var G__24598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
var G__24599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));
var G__24600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(3));
var G__24601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(4));
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__24598,G__24599,G__24600,G__24601) : f.call(null,G__24598,G__24599,G__24600,G__24601));

break;
default:
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(argv,(1)));

}
})());
if(cljs.core.vector_QMARK_(res)){
return reagent.impl.component.as_element(res);
} else {
if(cljs.core.ifn_QMARK_(res)){
(c["cljsRender"] = res);

return do_render(c);
} else {
return res;
}
}
}finally {reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR_24589;
}});
reagent.impl.component.static_fns = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$23,(function (){
var c = this;
if(cljs.core.not(reagent.impl.component._STAR_non_reactive_STAR_)){
return reagent.impl.batching.run_reactively(c,((function (c){
return (function (){
return reagent.impl.component.do_render(c);
});})(c))
);
} else {
return reagent.impl.component.do_render(c);
}
})], null);
reagent.impl.component.custom_wrapper = (function custom_wrapper(key,f){
var G__24618 = (((key instanceof cljs.core.Keyword))?key.fqn:null);
switch (G__24618) {
case "componentWillUnmount":
return ((function (G__24618){
return (function (){
var c = this;
reagent.impl.batching.dispose(c);

if((f == null)){
return null;
} else {
var G__24619 = c;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24619) : f.call(null,G__24619));
}
});
;})(G__24618))

break;
case "componentWillMount":
return ((function (G__24618){
return (function (){
var c = this;
(c["cljsMountOrder"] = reagent.impl.batching.next_mount_count());

if((f == null)){
return null;
} else {
var G__24620 = c;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24620) : f.call(null,G__24620));
}
});
;})(G__24618))

break;
case "componentDidUpdate":
return ((function (G__24618){
return (function (oldprops){
var c = this;
var G__24621 = c;
var G__24622 = (oldprops["argv"]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24621,G__24622) : f.call(null,G__24621,G__24622));
});
;})(G__24618))

break;
case "componentWillUpdate":
return ((function (G__24618){
return (function (nextprops){
var c = this;
var G__24623 = c;
var G__24624 = (nextprops["argv"]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24623,G__24624) : f.call(null,G__24623,G__24624));
});
;})(G__24618))

break;
case "shouldComponentUpdate":
return ((function (G__24618){
return (function (nextprops,nextstate){
var or__3583__auto__ = reagent.impl.util._STAR_always_update_STAR_;
if(cljs.core.truth_(or__3583__auto__)){
return or__3583__auto__;
} else {
var c = this;
var old_argv = (c["props"]["argv"]);
var new_argv = (nextprops["argv"]);
if((f == null)){
return ((old_argv == null)) || ((new_argv == null)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_argv,new_argv));
} else {
var G__24625 = c;
var G__24626 = old_argv;
var G__24627 = new_argv;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__24625,G__24626,G__24627) : f.call(null,G__24625,G__24626,G__24627));
}
}
});
;})(G__24618))

break;
case "componentWillReceiveProps":
return ((function (G__24618){
return (function (props){
var c = this;
var G__24628 = c;
var G__24629 = (props["argv"]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24628,G__24629) : f.call(null,G__24628,G__24629));
});
;})(G__24618))

break;
case "getInitialState":
return ((function (G__24618){
return (function (){
var c = this;
var G__24630 = reagent.impl.component.state_atom(c);
var G__24631 = (function (){var G__24632 = c;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24632) : f.call(null,G__24632));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24630,G__24631) : cljs.core.reset_BANG_.call(null,G__24630,G__24631));
});
;})(G__24618))

break;
case "getDefaultProps":
return null;

break;
default:
return null;

}
});
reagent.impl.component.default_wrapper = (function default_wrapper(f){
if(cljs.core.ifn_QMARK_(f)){
return (function() { 
var G__24634__delegate = function (args){
var c = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,c,args);
};
var G__24634 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24635__i = 0, G__24635__a = new Array(arguments.length -  0);
while (G__24635__i < G__24635__a.length) {G__24635__a[G__24635__i] = arguments[G__24635__i + 0]; ++G__24635__i;}
  args = new cljs.core.IndexedSeq(G__24635__a,0);
} 
return G__24634__delegate.call(this,args);};
G__24634.cljs$lang$maxFixedArity = 0;
G__24634.cljs$lang$applyTo = (function (arglist__24636){
var args = cljs.core.seq(arglist__24636);
return G__24634__delegate(args);
});
G__24634.cljs$core$IFn$_invoke$arity$variadic = G__24634__delegate;
return G__24634;
})()
;
} else {
return f;
}
});
reagent.impl.component.dont_wrap = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$24,null,cljs.core.constant$keyword$25,null,cljs.core.constant$keyword$23,null,cljs.core.constant$keyword$26,null], null), null);
reagent.impl.component.dont_bind = (function dont_bind(f){
if(cljs.core.fn_QMARK_(f)){
var G__24638 = f;
(G__24638["__reactDontBind"] = true);

return G__24638;
} else {
return f;
}
});
reagent.impl.component.get_wrapper = (function get_wrapper(key,f,name){
if(cljs.core.truth_((function (){var G__24640 = key;
return (reagent.impl.component.dont_wrap.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.component.dont_wrap.cljs$core$IFn$_invoke$arity$1(G__24640) : reagent.impl.component.dont_wrap.call(null,G__24640));
})())){
return reagent.impl.component.dont_bind(f);
} else {
var wrap = reagent.impl.component.custom_wrapper(key,f);
if(cljs.core.truth_((function (){var and__3571__auto__ = wrap;
if(cljs.core.truth_(and__3571__auto__)){
return f;
} else {
return and__3571__auto__;
}
})())){
} else {
}

var or__3583__auto__ = wrap;
if(cljs.core.truth_(or__3583__auto__)){
return or__3583__auto__;
} else {
return reagent.impl.component.default_wrapper(f);
}
}
});
reagent.impl.component.obligatory = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$27,null,cljs.core.constant$keyword$28,null,cljs.core.constant$keyword$29,null], null);
reagent.impl.component.dash_to_camel = reagent.impl.util.memoize_1(reagent.impl.util.dash_to_camel);
reagent.impl.component.camelify_map_keys = (function camelify_map_keys(fun_map){
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((function (){var G__24642 = k;
return (reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1(G__24642) : reagent.impl.component.dash_to_camel.call(null,G__24642));
})()),v);
}),cljs.core.PersistentArrayMap.EMPTY,fun_map);
});
reagent.impl.component.add_obligatory = (function add_obligatory(fun_map){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.impl.component.obligatory,fun_map], 0));
});
reagent.impl.component.add_render = (function add_render(fun_map,render_f,name){
var fm = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(fun_map,cljs.core.constant$keyword$24,render_f,cljs.core.array_seq([cljs.core.constant$keyword$23,cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(reagent.impl.component.static_fns)], 0));
return fm;

});
reagent.impl.component.fun_name = (function fun_name(f){
var or__3583__auto__ = (function (){var and__3571__auto__ = cljs.core.fn_QMARK_(f);
if(and__3571__auto__){
var or__3583__auto__ = (f["displayName"]);
if(cljs.core.truth_(or__3583__auto__)){
return or__3583__auto__;
} else {
return (f["name"]);
}
} else {
return and__3571__auto__;
}
})();
if(cljs.core.truth_(or__3583__auto__)){
return or__3583__auto__;
} else {
var or__3583__auto____$1 = (function (){var and__3571__auto__ = (function (){var G__24650 = f;
if(G__24650){
var bit__4257__auto__ = (G__24650.cljs$lang$protocol_mask$partition1$ & (4096));
if((bit__4257__auto__) || (G__24650.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
})();
if(and__3571__auto__){
return cljs.core.name(f);
} else {
return and__3571__auto__;
}
})();
if(cljs.core.truth_(or__3583__auto____$1)){
return or__3583__auto____$1;
} else {
var m = cljs.core.meta(f);
if(cljs.core.map_QMARK_(m)){
return cljs.core.constant$keyword$30.cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
}
}
});
reagent.impl.component.wrap_funs = (function wrap_funs(fmap){
var fun_map = (function (){var temp__4128__auto__ = cljs.core.constant$keyword$31.cljs$core$IFn$_invoke$arity$1(fmap);
if((temp__4128__auto__ == null)){
return fmap;
} else {
var cf = temp__4128__auto__;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fmap,cljs.core.constant$keyword$25,cf),cljs.core.constant$keyword$31);
}
})();
var render_fun = (function (){var or__3583__auto__ = cljs.core.constant$keyword$25.cljs$core$IFn$_invoke$arity$1(fun_map);
if(cljs.core.truth_(or__3583__auto__)){
return or__3583__auto__;
} else {
return cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(fun_map);
}
})();
var _ = null;
var name = [cljs.core.str((function (){var or__3583__auto__ = cljs.core.constant$keyword$32.cljs$core$IFn$_invoke$arity$1(fun_map);
if(cljs.core.truth_(or__3583__auto__)){
return or__3583__auto__;
} else {
return reagent.impl.component.fun_name(render_fun);
}
})())].join('');
var name_SINGLEQUOTE_ = ((cljs.core.empty_QMARK_(name))?[cljs.core.str(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("reagent"))].join(''):name);
var fmap__$1 = reagent.impl.component.add_render(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fun_map,cljs.core.constant$keyword$32,name_SINGLEQUOTE_),render_fun,name_SINGLEQUOTE_);
return cljs.core.reduce_kv(((function (fun_map,render_fun,_,name,name_SINGLEQUOTE_,fmap__$1){
return (function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,reagent.impl.component.get_wrapper(k,v,name_SINGLEQUOTE_));
});})(fun_map,render_fun,_,name,name_SINGLEQUOTE_,fmap__$1))
,cljs.core.PersistentArrayMap.EMPTY,fmap__$1);
});
reagent.impl.component.map_to_js = (function map_to_js(m){
return cljs.core.reduce_kv((function (o,k,v){
var G__24652 = o;
(G__24652[cljs.core.name(k)] = v);

return G__24652;
}),{},m);
});
reagent.impl.component.cljsify = (function cljsify(body){
return reagent.impl.component.map_to_js(reagent.impl.component.wrap_funs(reagent.impl.component.add_obligatory(reagent.impl.component.camelify_map_keys(body))));
});
reagent.impl.component.create_class = (function create_class(body){

var spec = reagent.impl.component.cljsify(body);
var res = (React["createClass"])(spec);
var f = ((function (spec,res){
return (function() { 
var G__24653__delegate = function (args){
return reagent.impl.component.as_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,res,args));
};
var G__24653 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24654__i = 0, G__24654__a = new Array(arguments.length -  0);
while (G__24654__i < G__24654__a.length) {G__24654__a[G__24654__i] = arguments[G__24654__i + 0]; ++G__24654__i;}
  args = new cljs.core.IndexedSeq(G__24654__a,0);
} 
return G__24653__delegate.call(this,args);};
G__24653.cljs$lang$maxFixedArity = 0;
G__24653.cljs$lang$applyTo = (function (arglist__24655){
var args = cljs.core.seq(arglist__24655);
return G__24653__delegate(args);
});
G__24653.cljs$core$IFn$_invoke$arity$variadic = G__24653__delegate;
return G__24653;
})()
;})(spec,res))
;
reagent.impl.util.cache_react_class(f,res);

reagent.impl.util.cache_react_class(res,res);

return f;
});
reagent.impl.component.comp_name = (function comp_name(){
return "";

});
reagent.impl.component.shallow_obj_to_map = (function shallow_obj_to_map(o){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4339__auto__ = (function iter__24664(s__24665){
return (new cljs.core.LazySeq(null,(function (){
var s__24665__$1 = s__24665;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__24665__$1);
if(temp__4126__auto__){
var s__24665__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24665__$2)){
var c__4337__auto__ = cljs.core.chunk_first(s__24665__$2);
var size__4338__auto__ = cljs.core.count(c__4337__auto__);
var b__24667 = cljs.core.chunk_buffer(size__4338__auto__);
if((function (){var i__24666 = (0);
while(true){
if((i__24666 < size__4338__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4337__auto__,i__24666);
cljs.core.chunk_append(b__24667,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(o[k])], null));

var G__24670 = (i__24666 + (1));
i__24666 = G__24670;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24667),iter__24664(cljs.core.chunk_rest(s__24665__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24667),null);
}
} else {
var k = cljs.core.first(s__24665__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(o[k])], null),iter__24664(cljs.core.rest(s__24665__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4339__auto__(cljs.core.js_keys(o));
})());
});
reagent.impl.component.elem_counter = (0);
reagent.impl.component.reactify_component = (function reactify_component(comp){
return (React["createClass"])({"render": (function (){
var this$ = this;
return reagent.impl.component.as_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(reagent.impl.component.shallow_obj_to_map((this$["props"])),cljs.core.constant$keyword$33,reagent.impl.component.elem_counter = (reagent.impl.component.elem_counter + (1)))], null));
}), "displayName": "react-wrapper"});
});
