// Compiled by ClojureScript 0.0-2816 {:elide-asserts true, :static-fns true}
goog.provide('reagent.impl.template');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.component');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.batching');
goog.require('clojure.string');
goog.require('reagent.debug');
/**
* Regular expression that parses a CSS-style id and class
* from a tag name.
*/
reagent.impl.template.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;

/**
* @constructor
*/
reagent.impl.template.NativeWrapper = (function (comp){
this.comp = comp;
})

reagent.impl.template.NativeWrapper.cljs$lang$type = true;

reagent.impl.template.NativeWrapper.cljs$lang$ctorStr = "reagent.impl.template/NativeWrapper";

reagent.impl.template.NativeWrapper.cljs$lang$ctorPrWriter = (function (this__4170__auto__,writer__4171__auto__,opt__4172__auto__){
return cljs.core._write(writer__4171__auto__,"reagent.impl.template/NativeWrapper");
});

reagent.impl.template.__GT_NativeWrapper = (function __GT_NativeWrapper(comp){
return (new reagent.impl.template.NativeWrapper(comp));
});

reagent.impl.template.named_QMARK_ = (function named_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol));
});
reagent.impl.template.hiccup_tag_QMARK_ = (function hiccup_tag_QMARK_(x){
return (reagent.impl.template.named_QMARK_(x)) || (typeof x === 'string');
});
reagent.impl.template.valid_tag_QMARK_ = (function valid_tag_QMARK_(x){
return (reagent.impl.template.hiccup_tag_QMARK_(x)) || (cljs.core.ifn_QMARK_(x)) || ((x instanceof reagent.impl.template.NativeWrapper));
});
reagent.impl.template.prop_name_cache = {"charset": "charSet", "for": "htmlFor", "class": "className"};
reagent.impl.template.obj_get = (function obj_get(o,k){
if(cljs.core.truth_(o.hasOwnProperty(k))){
return (o[k]);
} else {
return null;
}
});
reagent.impl.template.cached_prop_name = (function cached_prop_name(k){
if(reagent.impl.template.named_QMARK_(k)){
var temp__4128__auto__ = reagent.impl.template.obj_get(reagent.impl.template.prop_name_cache,cljs.core.name(k));
if((temp__4128__auto__ == null)){
return (reagent.impl.template.prop_name_cache[cljs.core.name(k)] = reagent.impl.util.dash_to_camel(k));
} else {
var k_SINGLEQUOTE_ = temp__4128__auto__;
return k_SINGLEQUOTE_;
}
} else {
return k;
}
});
reagent.impl.template.convert_prop_value = (function convert_prop_value(x){
if((typeof x === 'string') || (typeof x === 'number') || (cljs.core.fn_QMARK_(x))){
return x;
} else {
if(reagent.impl.template.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv((function (o,k,v){
var G__24744 = o;
(G__24744[reagent.impl.template.cached_prop_name(k)] = convert_prop_value(v));

return G__24744;
}),{},x);
} else {
if(cljs.core.coll_QMARK_(x)){
return cljs.core.clj__GT_js(x);
} else {
if(cljs.core.ifn_QMARK_(x)){
return (function() { 
var G__24745__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(x,args);
};
var G__24745 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24746__i = 0, G__24746__a = new Array(arguments.length -  0);
while (G__24746__i < G__24746__a.length) {G__24746__a[G__24746__i] = arguments[G__24746__i + 0]; ++G__24746__i;}
  args = new cljs.core.IndexedSeq(G__24746__a,0);
} 
return G__24745__delegate.call(this,args);};
G__24745.cljs$lang$maxFixedArity = 0;
G__24745.cljs$lang$applyTo = (function (arglist__24747){
var args = cljs.core.seq(arglist__24747);
return G__24745__delegate(args);
});
G__24745.cljs$core$IFn$_invoke$arity$variadic = G__24745__delegate;
return G__24745;
})()
;
} else {
return cljs.core.clj__GT_js(x);

}
}
}
}
}
});
reagent.impl.template.set_id_class = (function set_id_class(props,id,class$){
var p = (((props == null))?{}:props);
if((cljs.core.some_QMARK_(id)) && (((p["id"]) == null))){
(p["id"] = id);
} else {
}

if(cljs.core.some_QMARK_(class$)){
var old_24748 = (p["className"]);
(p["className"] = ((cljs.core.some_QMARK_(old_24748))?[cljs.core.str(class$),cljs.core.str(" "),cljs.core.str(old_24748)].join(''):class$));
} else {
}

return p;
});
reagent.impl.template.convert_props = (function convert_props(props,id_class){
var id = (id_class["id"]);
var class$ = (id_class["className"]);
var no_id_class = ((id == null)) && ((class$ == null));
if((no_id_class) && (cljs.core.empty_QMARK_(props))){
return null;
} else {
var objprops = reagent.impl.template.convert_prop_value(props);
if(no_id_class){
return objprops;
} else {
return reagent.impl.template.set_id_class(objprops,id,class$);
}
}
});
reagent.impl.template.input_unmount = (function input_unmount(this$){
return (this$["cljsInputValue"] = null);
});
reagent.impl.template.input_set_value = (function input_set_value(this$){
var temp__4130__auto__ = (this$["cljsInputValue"]);
if((temp__4130__auto__ == null)){
return null;
} else {
var value = temp__4130__auto__;
(this$["cljsInputDirty"] = false);

var node = (this$["getDOMNode"])();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,(node["value"]))){
return (node["value"] = value);
} else {
return null;
}
}
});
reagent.impl.template.input_handle_change = (function input_handle_change(this$,on_change,e){
var res = (function (){var G__24750 = e;
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__24750) : on_change.call(null,G__24750));
})();
if(cljs.core.truth_((this$["cljsInputDirty"]))){
} else {
(this$["cljsInputDirty"] = true);

reagent.impl.batching.do_later(((function (res){
return (function (){
return reagent.impl.template.input_set_value(this$);
});})(res))
);
}

return res;
});
reagent.impl.template.input_render_setup = (function input_render_setup(this$,jsprops){
if(cljs.core.truth_((function (){var and__3571__auto__ = (jsprops["hasOwnProperty"])("onChange");
if(cljs.core.truth_(and__3571__auto__)){
return (jsprops["hasOwnProperty"])("value");
} else {
return and__3571__auto__;
}
})())){
var v = (jsprops["value"]);
var value = (((v == null))?"":v);
var on_change = (jsprops["onChange"]);
(this$["cljsInputValue"] = value);

delete jsprops["value"];

var G__24753 = jsprops;
(G__24753["defaultValue"] = value);

(G__24753["onChange"] = ((function (G__24753,v,value,on_change){
return (function (p1__24751_SHARP_){
return reagent.impl.template.input_handle_change(this$,on_change,p1__24751_SHARP_);
});})(G__24753,v,value,on_change))
);

return G__24753;
} else {
return (this$["cljsInputValue"] = null);
}
});
reagent.impl.template.input_component_QMARK_ = (function input_component_QMARK_(x){
return ((x === "input")) || ((x === "textarea"));
});
reagent.impl.template.reagent_input_class = null;
reagent.impl.template.input_spec = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$34,"ReagentInput",cljs.core.constant$keyword$35,reagent.impl.template.input_set_value,cljs.core.constant$keyword$36,reagent.impl.template.input_unmount,cljs.core.constant$keyword$37,(function (argv,comp,jsprops,first_child){
var this$ = reagent.impl.component._STAR_current_component_STAR_;
reagent.impl.template.input_render_setup(this$,jsprops);

var G__24754 = argv;
var G__24755 = comp;
var G__24756 = jsprops;
var G__24757 = first_child;
return (reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4 ? reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4(G__24754,G__24755,G__24756,G__24757) : reagent.impl.template.make_element.call(null,G__24754,G__24755,G__24756,G__24757));
})], null);
reagent.impl.template.reagent_input = (function reagent_input(argv,comp,jsprops,first_child){
if((reagent.impl.template.reagent_input_class == null)){
reagent.impl.template.reagent_input_class = reagent.impl.component.create_class(reagent.impl.template.input_spec);
} else {
}

var G__24762 = argv;
var G__24763 = comp;
var G__24764 = jsprops;
var G__24765 = first_child;
return (reagent.impl.template.reagent_input_class.cljs$core$IFn$_invoke$arity$4 ? reagent.impl.template.reagent_input_class.cljs$core$IFn$_invoke$arity$4(G__24762,G__24763,G__24764,G__24765) : reagent.impl.template.reagent_input_class.call(null,G__24762,G__24763,G__24764,G__24765));
});
reagent.impl.template.parse_tag = (function parse_tag(hiccup_tag){
var vec__24767 = cljs.core.next(cljs.core.re_matches(reagent.impl.template.re_tag,cljs.core.name(hiccup_tag)));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24767,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24767,(1),null);
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24767,(2),null);
var class_SINGLEQUOTE_ = (cljs.core.truth_(class$)?clojure.string.replace(class$,/\./," "):null);

return {"className": class_SINGLEQUOTE_, "id": id, "name": tag};
});
reagent.impl.template.fn_to_class = (function fn_to_class(f){


var spec = cljs.core.meta(f);
var withrender = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.constant$keyword$37,f);
var res = reagent.impl.component.create_class(withrender);
var wrapf = reagent.impl.util.cached_react_class(res);
reagent.impl.util.cache_react_class(f,wrapf);

return wrapf;
});
reagent.impl.template.as_class = (function as_class(tag){
var temp__4128__auto__ = reagent.impl.util.cached_react_class(tag);
if((temp__4128__auto__ == null)){
return reagent.impl.template.fn_to_class(tag);
} else {
var cached_class = temp__4128__auto__;
return cached_class;
}
});
reagent.impl.template.get_key = (function get_key(x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,cljs.core.constant$keyword$38);
} else {
return null;
}
});
reagent.impl.template.key_from_vec = (function key_from_vec(v){
var temp__4128__auto__ = (function (){var G__24769 = cljs.core.meta(v);
var G__24769__$1 = (((G__24769 == null))?null:reagent.impl.template.get_key(G__24769));
return G__24769__$1;
})();
if((temp__4128__auto__ == null)){
return reagent.impl.template.get_key(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null));
} else {
var k = temp__4128__auto__;
return k;
}
});
reagent.impl.template.reag_element = (function reag_element(tag,v){
var c = reagent.impl.template.as_class(tag);
var jsprops = {"argv": v};
var G__24771_24772 = v;
var G__24771_24773__$1 = (((G__24771_24772 == null))?null:reagent.impl.template.key_from_vec(G__24771_24772));
var G__24771_24774__$2 = (((G__24771_24773__$1 == null))?null:(jsprops["key"] = G__24771_24773__$1));

return (React["createElement"])(c,jsprops);
});
reagent.impl.template.adapt_react_class = (function adapt_react_class(c){
return (new reagent.impl.template.NativeWrapper({"class": null, "id": null, "name": c}));
});
reagent.impl.template.tag_name_cache = {};
reagent.impl.template.cached_parse = (function cached_parse(x){
if(reagent.impl.template.hiccup_tag_QMARK_(x)){
var temp__4128__auto__ = reagent.impl.template.obj_get(reagent.impl.template.tag_name_cache,cljs.core.name(x));
if((temp__4128__auto__ == null)){
return (reagent.impl.template.tag_name_cache[cljs.core.name(x)] = reagent.impl.template.parse_tag(x));
} else {
var s = temp__4128__auto__;
return s;
}
} else {
if((x instanceof reagent.impl.template.NativeWrapper)){
return x.comp;
} else {
return null;
}
}
});
reagent.impl.template.native_element = (function native_element(tag,argv){
var temp__4126__auto__ = reagent.impl.template.cached_parse(tag);
if(cljs.core.truth_(temp__4126__auto__)){
var parsed = temp__4126__auto__;
var comp = (parsed["name"]);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,(1),null);
var hasprops = ((props == null)) || (cljs.core.map_QMARK_(props));
var jsprops = reagent.impl.template.convert_props(((hasprops)?props:null),parsed);
var first_child = ((hasprops)?(2):(1));
if(reagent.impl.template.input_component_QMARK_(comp)){
var G__24782 = cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.reagent_input,argv,comp,jsprops,first_child], null),cljs.core.meta(argv));
return (reagent.impl.template.as_element.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.as_element.cljs$core$IFn$_invoke$arity$1(G__24782) : reagent.impl.template.as_element.call(null,G__24782));
} else {
var p = (function (){var temp__4128__auto__ = (function (){var G__24783 = cljs.core.meta(argv);
var G__24783__$1 = (((G__24783 == null))?null:reagent.impl.template.get_key(G__24783));
return G__24783__$1;
})();
if((temp__4128__auto__ == null)){
return jsprops;
} else {
var key = temp__4128__auto__;
var G__24784 = (((jsprops == null))?{}:jsprops);
(G__24784["key"] = key);

return G__24784;
}
})();
var G__24785 = argv;
var G__24786 = comp;
var G__24787 = p;
var G__24788 = first_child;
return (reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4 ? reagent.impl.template.make_element.cljs$core$IFn$_invoke$arity$4(G__24785,G__24786,G__24787,G__24788) : reagent.impl.template.make_element.call(null,G__24785,G__24786,G__24787,G__24788));
}
} else {
return null;
}
});
reagent.impl.template.vec_to_elem = (function vec_to_elem(v){

var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(0));

var temp__4128__auto__ = reagent.impl.template.native_element(tag,v);
if((temp__4128__auto__ == null)){
return reagent.impl.template.reag_element(tag,v);
} else {
var ne = temp__4128__auto__;
return ne;
}
});
reagent.impl.template.as_element = (function as_element(x){
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.vector_QMARK_(x)){
return reagent.impl.template.vec_to_elem(x);
} else {
if(cljs.core.seq_QMARK_(x)){
var G__24792 = x;
return (reagent.impl.template.expand_seq.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.expand_seq.cljs$core$IFn$_invoke$arity$1(G__24792) : reagent.impl.template.expand_seq.call(null,G__24792));

} else {
return x;

}
}
}
});
reagent.impl.template.expand_seq = (function expand_seq(s){
var a = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(s);
var n__4470__auto___24793 = a.length;
var i_24794 = (0);
while(true){
if((i_24794 < n__4470__auto___24793)){
(a[i_24794] = reagent.impl.template.as_element((a[i_24794])));

var G__24795 = (i_24794 + (1));
i_24794 = G__24795;
continue;
} else {
}
break;
}

return a;
});
reagent.impl.template.expand_seq_dev = (function expand_seq_dev(s,o){
var a = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(s);
var n__4470__auto___24796 = a.length;
var i_24797 = (0);
while(true){
if((i_24797 < n__4470__auto___24796)){
var val_24798 = (a[i_24797]);
if((cljs.core.vector_QMARK_(val_24798)) && ((reagent.impl.template.key_from_vec(val_24798) == null))){
(o["no-key"] = true);
} else {
}

(a[i_24797] = reagent.impl.template.as_element(val_24798));

var G__24799 = (i_24797 + (1));
i_24797 = G__24799;
continue;
} else {
}
break;
}

return a;
});
reagent.impl.template.expand_seq_check = (function expand_seq_check(x){
var ctx = {};
var res = (((reagent.ratom._STAR_ratom_context_STAR_ == null))?reagent.impl.template.expand_seq_dev(x,ctx):reagent.ratom.capture_derefed(((function (ctx){
return (function (){
return reagent.impl.template.expand_seq_dev(x,ctx);
});})(ctx))
,ctx));
if(cljs.core.truth_(reagent.ratom.captured(ctx))){
} else {
}

if(cljs.core.truth_((ctx["no-key"]))){
} else {
}

return res;
});
reagent.impl.template.make_element = (function make_element(argv,comp,jsprops,first_child){
var G__24801 = (cljs.core.count(argv) - first_child);
switch (G__24801) {
case (0):
return (React["createElement"])(comp,jsprops);

break;
case (1):
return (React["createElement"])(comp,jsprops,reagent.impl.template.as_element(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,first_child)));

break;
default:
return (React["createElement"]).apply(null,cljs.core.reduce_kv(((function (G__24801){
return (function (a,k,v){
if((k >= first_child)){
a.push(reagent.impl.template.as_element(v));
} else {
}

return a;
});})(G__24801))
,[comp,jsprops],argv));

}
});
