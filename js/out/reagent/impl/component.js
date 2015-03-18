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
var G__25580 = x;
return reagent.impl.template.as_element(G__25580);
});
reagent.impl.component.do_render = (function do_render(c){
var _STAR_current_component_STAR_25595 = reagent.impl.component._STAR_current_component_STAR_;
reagent.impl.component._STAR_current_component_STAR_ = c;

try{var f = (c["cljsRender"]);
var _ = null;
var p = (c["props"]);
var res = ((((c["reagentRender"]) == null))?(function (){var G__25596 = c;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25596) : f.call(null,G__25596));
})():(function (){var argv = (p["argv"]);
var n = cljs.core.count(argv);
var G__25597 = n;
switch (G__25597) {
case (1):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (2):
var G__25598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25598) : f.call(null,G__25598));

break;
case (3):
var G__25599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
var G__25600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__25599,G__25600) : f.call(null,G__25599,G__25600));

break;
case (4):
var G__25601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
var G__25602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));
var G__25603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(3));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__25601,G__25602,G__25603) : f.call(null,G__25601,G__25602,G__25603));

break;
case (5):
var G__25604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
var G__25605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));
var G__25606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(3));
var G__25607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(4));
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__25604,G__25605,G__25606,G__25607) : f.call(null,G__25604,G__25605,G__25606,G__25607));

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
}finally {reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR_25595;
}});
reagent.impl.component.static_fns = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$29,(function (){
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
var G__25624 = (((key instanceof cljs.core.Keyword))?key.fqn:null);
switch (G__25624) {
case "componentWillUnmount":
return ((function (G__25624){
return (function (){
var c = this;
reagent.impl.batching.dispose(c);

if((f == null)){
return null;
} else {
var G__25625 = c;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25625) : f.call(null,G__25625));
}
});
;})(G__25624))

break;
case "componentWillMount":
return ((function (G__25624){
return (function (){
var c = this;
(c["cljsMountOrder"] = reagent.impl.batching.next_mount_count());

if((f == null)){
return null;
} else {
var G__25626 = c;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25626) : f.call(null,G__25626));
}
});
;})(G__25624))

break;
case "componentDidUpdate":
return ((function (G__25624){
return (function (oldprops){
var c = this;
var G__25627 = c;
var G__25628 = (oldprops["argv"]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__25627,G__25628) : f.call(null,G__25627,G__25628));
});
;})(G__25624))

break;
case "componentWillUpdate":
return ((function (G__25624){
return (function (nextprops){
var c = this;
var G__25629 = c;
var G__25630 = (nextprops["argv"]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__25629,G__25630) : f.call(null,G__25629,G__25630));
});
;})(G__25624))

break;
case "shouldComponentUpdate":
return ((function (G__25624){
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
var G__25631 = c;
var G__25632 = old_argv;
var G__25633 = new_argv;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__25631,G__25632,G__25633) : f.call(null,G__25631,G__25632,G__25633));
}
}
});
;})(G__25624))

break;
case "componentWillReceiveProps":
return ((function (G__25624){
return (function (props){
var c = this;
var G__25634 = c;
var G__25635 = (props["argv"]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__25634,G__25635) : f.call(null,G__25634,G__25635));
});
;})(G__25624))

break;
case "getInitialState":
return ((function (G__25624){
return (function (){
var c = this;
var G__25636 = reagent.impl.component.state_atom(c);
var G__25637 = (function (){var G__25638 = c;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25638) : f.call(null,G__25638));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25636,G__25637) : cljs.core.reset_BANG_.call(null,G__25636,G__25637));
});
;})(G__25624))

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
var G__25640__delegate = function (args){
var c = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,c,args);
};
var G__25640 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25641__i = 0, G__25641__a = new Array(arguments.length -  0);
while (G__25641__i < G__25641__a.length) {G__25641__a[G__25641__i] = arguments[G__25641__i + 0]; ++G__25641__i;}
  args = new cljs.core.IndexedSeq(G__25641__a,0);
} 
return G__25640__delegate.call(this,args);};
G__25640.cljs$lang$maxFixedArity = 0;
G__25640.cljs$lang$applyTo = (function (arglist__25642){
var args = cljs.core.seq(arglist__25642);
return G__25640__delegate(args);
});
G__25640.cljs$core$IFn$_invoke$arity$variadic = G__25640__delegate;
return G__25640;
})()
;
} else {
return f;
}
});
reagent.impl.component.dont_wrap = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$30,null,cljs.core.constant$keyword$31,null,cljs.core.constant$keyword$29,null,cljs.core.constant$keyword$32,null], null), null);
reagent.impl.component.dont_bind = (function dont_bind(f){
if(cljs.core.fn_QMARK_(f)){
var G__25644 = f;
(G__25644["__reactDontBind"] = true);

return G__25644;
} else {
return f;
}
});
reagent.impl.component.get_wrapper = (function get_wrapper(key,f,name){
if(cljs.core.truth_((function (){var G__25646 = key;
return (reagent.impl.component.dont_wrap.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.component.dont_wrap.cljs$core$IFn$_invoke$arity$1(G__25646) : reagent.impl.component.dont_wrap.call(null,G__25646));
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
reagent.impl.component.obligatory = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$33,null,cljs.core.constant$keyword$34,null,cljs.core.constant$keyword$35,null], null);
reagent.impl.component.dash_to_camel = reagent.impl.util.memoize_1(reagent.impl.util.dash_to_camel);
reagent.impl.component.camelify_map_keys = (function camelify_map_keys(fun_map){
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((function (){var G__25648 = k;
return (reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1(G__25648) : reagent.impl.component.dash_to_camel.call(null,G__25648));
})()),v);
}),cljs.core.PersistentArrayMap.EMPTY,fun_map);
});
reagent.impl.component.add_obligatory = (function add_obligatory(fun_map){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.impl.component.obligatory,fun_map], 0));
});
reagent.impl.component.add_render = (function add_render(fun_map,render_f,name){
var fm = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(fun_map,cljs.core.constant$keyword$30,render_f,cljs.core.array_seq([cljs.core.constant$keyword$29,cljs.core.constant$keyword$29.cljs$core$IFn$_invoke$arity$1(reagent.impl.component.static_fns)], 0));
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
var or__3583__auto____$1 = (function (){var and__3571__auto__ = (function (){var G__25656 = f;
if(G__25656){
var bit__4257__auto__ = (G__25656.cljs$lang$protocol_mask$partition1$ & (4096));
if((bit__4257__auto__) || (G__25656.cljs$core$INamed$)){
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
return cljs.core.constant$keyword$36.cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
}
}
});
reagent.impl.component.wrap_funs = (function wrap_funs(fmap){
var fun_map = (function (){var temp__4128__auto__ = cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(fmap);
if((temp__4128__auto__ == null)){
return fmap;
} else {
var cf = temp__4128__auto__;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fmap,cljs.core.constant$keyword$31,cf),cljs.core.constant$keyword$37);
}
})();
var render_fun = (function (){var or__3583__auto__ = cljs.core.constant$keyword$31.cljs$core$IFn$_invoke$arity$1(fun_map);
if(cljs.core.truth_(or__3583__auto__)){
return or__3583__auto__;
} else {
return cljs.core.constant$keyword$29.cljs$core$IFn$_invoke$arity$1(fun_map);
}
})();
var _ = null;
var name = [cljs.core.str((function (){var or__3583__auto__ = cljs.core.constant$keyword$38.cljs$core$IFn$_invoke$arity$1(fun_map);
if(cljs.core.truth_(or__3583__auto__)){
return or__3583__auto__;
} else {
return reagent.impl.component.fun_name(render_fun);
}
})())].join('');
var name_SINGLEQUOTE_ = ((cljs.core.empty_QMARK_(name))?[cljs.core.str(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("reagent"))].join(''):name);
var fmap__$1 = reagent.impl.component.add_render(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fun_map,cljs.core.constant$keyword$38,name_SINGLEQUOTE_),render_fun,name_SINGLEQUOTE_);
return cljs.core.reduce_kv(((function (fun_map,render_fun,_,name,name_SINGLEQUOTE_,fmap__$1){
return (function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,reagent.impl.component.get_wrapper(k,v,name_SINGLEQUOTE_));
});})(fun_map,render_fun,_,name,name_SINGLEQUOTE_,fmap__$1))
,cljs.core.PersistentArrayMap.EMPTY,fmap__$1);
});
reagent.impl.component.map_to_js = (function map_to_js(m){
return cljs.core.reduce_kv((function (o,k,v){
var G__25658 = o;
(G__25658[cljs.core.name(k)] = v);

return G__25658;
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
var G__25659__delegate = function (args){
return reagent.impl.component.as_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,res,args));
};
var G__25659 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25660__i = 0, G__25660__a = new Array(arguments.length -  0);
while (G__25660__i < G__25660__a.length) {G__25660__a[G__25660__i] = arguments[G__25660__i + 0]; ++G__25660__i;}
  args = new cljs.core.IndexedSeq(G__25660__a,0);
} 
return G__25659__delegate.call(this,args);};
G__25659.cljs$lang$maxFixedArity = 0;
G__25659.cljs$lang$applyTo = (function (arglist__25661){
var args = cljs.core.seq(arglist__25661);
return G__25659__delegate(args);
});
G__25659.cljs$core$IFn$_invoke$arity$variadic = G__25659__delegate;
return G__25659;
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4339__auto__ = (function iter__25670(s__25671){
return (new cljs.core.LazySeq(null,(function (){
var s__25671__$1 = s__25671;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__25671__$1);
if(temp__4126__auto__){
var s__25671__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25671__$2)){
var c__4337__auto__ = cljs.core.chunk_first(s__25671__$2);
var size__4338__auto__ = cljs.core.count(c__4337__auto__);
var b__25673 = cljs.core.chunk_buffer(size__4338__auto__);
if((function (){var i__25672 = (0);
while(true){
if((i__25672 < size__4338__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4337__auto__,i__25672);
cljs.core.chunk_append(b__25673,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(o[k])], null));

var G__25676 = (i__25672 + (1));
i__25672 = G__25676;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25673),iter__25670(cljs.core.chunk_rest(s__25671__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25673),null);
}
} else {
var k = cljs.core.first(s__25671__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(o[k])], null),iter__25670(cljs.core.rest(s__25671__$2)));
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
return reagent.impl.component.as_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(reagent.impl.component.shallow_obj_to_map((this$["props"])),cljs.core.constant$keyword$39,reagent.impl.component.elem_counter = (reagent.impl.component.elem_counter + (1)))], null));
}), "displayName": "react-wrapper"});
});
