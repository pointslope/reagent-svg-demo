// Compiled by ClojureScript 0.0-2816 {:elide-asserts true, :static-fns true}
goog.provide('reagent.ratom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
if(typeof reagent.ratom.debug !== 'undefined'){
} else {
reagent.ratom.debug = false;
}
if(typeof reagent.ratom._running !== 'undefined'){
} else {
reagent.ratom._running = (function (){var G__25758 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25758) : cljs.core.atom.call(null,G__25758));
})();
}
reagent.ratom.running = (function running(){
var G__25760 = reagent.ratom._running;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25760) : cljs.core.deref.call(null,G__25760));
});
reagent.ratom.capture_derefed = (function capture_derefed(f,obj){
obj.cljsCaptured = null;

var _STAR_ratom_context_STAR_25762 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = obj;

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_25762;
}});
reagent.ratom.captured = (function captured(obj){
var c = obj.cljsCaptured;
obj.cljsCaptured = null;

return c;
});
reagent.ratom.notify_deref_watcher_BANG_ = (function notify_deref_watcher_BANG_(derefable){
var obj = reagent.ratom._STAR_ratom_context_STAR_;
if((obj == null)){
return null;
} else {
var captured = obj.cljsCaptured;
return obj.cljsCaptured = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((captured == null))?cljs.core.PersistentHashSet.EMPTY:captured),derefable);
}
});

reagent.ratom.IReactiveAtom = (function (){var obj25764 = {};
return obj25764;
})();


/**
* @constructor
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RAtom.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write(writer,"#<Atom: ");

cljs.core.pr_writer(self__.state,writer,opts);

return cljs.core._write(writer,">");
});

reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__25765 = this$__$1;
return goog.getUid(G__25765);
});

reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
}

var old_value = self__.state;
self__.state = new_value;

if((self__.watches == null)){
} else {
cljs.core._notify_watches(a__$1,old_value,new_value);
}

return new_value;
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__25766 = self__.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25766) : f.call(null,G__25766));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__25767 = self__.state;
var G__25768 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__25767,G__25768) : f.call(null,G__25767,G__25768));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__25769 = self__.state;
var G__25770 = x;
var G__25771 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__25769,G__25770,G__25771) : f.call(null,G__25769,G__25770,G__25771));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv(((function (this$__$1){
return (function (_,key,f){
var G__25772_25776 = key;
var G__25773_25777 = this$__$1;
var G__25774_25778 = oldval;
var G__25775_25779 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__25772_25776,G__25773_25777,G__25774_25778,G__25775_25779) : f.call(null,G__25772_25776,G__25773_25777,G__25774_25778,G__25775_25779));

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key,f);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key);
});

reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
reagent.ratom.notify_deref_watcher_BANG_(this$__$1);

return self__.state;
});

reagent.ratom.RAtom.cljs$lang$type = true;

reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";

reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4170__auto__,writer__4171__auto__,opt__4172__auto__){
return cljs.core._write(writer__4171__auto__,"reagent.ratom/RAtom");
});

reagent.ratom.__GT_RAtom = (function __GT_RAtom(state,meta,validator,watches){
return (new reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
* Like clojure.core/atom, except that it keeps track of derefs.
* @param {...*} var_args
*/
reagent.ratom.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new reagent.ratom.RAtom(x,null,null,null));
});
var atom__2 = (function() { 
var G__25783__delegate = function (x,p__25780){
var map__25782 = p__25780;
var map__25782__$1 = ((cljs.core.seq_QMARK_(map__25782))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25782):map__25782);
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25782__$1,cljs.core.constant$keyword$8);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25782__$1,cljs.core.constant$keyword$3);
return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__25783 = function (x,var_args){
var p__25780 = null;
if (arguments.length > 1) {
var G__25784__i = 0, G__25784__a = new Array(arguments.length -  1);
while (G__25784__i < G__25784__a.length) {G__25784__a[G__25784__i] = arguments[G__25784__i + 1]; ++G__25784__i;}
  p__25780 = new cljs.core.IndexedSeq(G__25784__a,0);
} 
return G__25783__delegate.call(this,x,p__25780);};
G__25783.cljs$lang$maxFixedArity = 1;
G__25783.cljs$lang$applyTo = (function (arglist__25785){
var x = cljs.core.first(arglist__25785);
var p__25780 = cljs.core.rest(arglist__25785);
return G__25783__delegate(x,p__25780);
});
G__25783.cljs$core$IFn$_invoke$arity$variadic = G__25783__delegate;
return G__25783;
})()
;
atom = function(x,var_args){
var p__25780 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
var G__25786 = null;
if (arguments.length > 1) {
var G__25787__i = 0, G__25787__a = new Array(arguments.length -  1);
while (G__25787__i < G__25787__a.length) {G__25787__a[G__25787__i] = arguments[G__25787__i + 1]; ++G__25787__i;}
G__25786 = new cljs.core.IndexedSeq(G__25787__a,0);
}
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, G__25786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;

/**
* @constructor
*/
reagent.ratom.RCursor = (function (ratom,path,reaction){
this.ratom = ratom;
this.path = path;
this.reaction = reaction;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RCursor.prototype._reaction = (function (){
var self__ = this;
var this$ = this;
if((self__.reaction == null)){
return self__.reaction = (((function (){var G__25794 = self__.ratom;
if(G__25794){
var bit__4264__auto__ = (G__25794.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4264__auto__) || (G__25794.cljs$core$IDeref$)){
return true;
} else {
if((!G__25794.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__25794);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__25794);
}
})())?(function (){var G__25795 = ((function (this$){
return (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__25798 = self__.ratom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25798) : cljs.core.deref.call(null,G__25798));
})(),self__.path);
});})(this$))
;
var G__25796 = cljs.core.constant$keyword$25;
var G__25797 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.path,cljs.core.PersistentVector.EMPTY))?((function (G__25795,G__25796,this$){
return (function (p1__25789_SHARP_,p2__25788_SHARP_){
var G__25799 = self__.ratom;
var G__25800 = p2__25788_SHARP_;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25799,G__25800) : cljs.core.reset_BANG_.call(null,G__25799,G__25800));
});})(G__25795,G__25796,this$))
:((function (G__25795,G__25796,this$){
return (function (p1__25791_SHARP_,p2__25790_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.ratom,cljs.core.assoc_in,self__.path,p2__25790_SHARP_);
});})(G__25795,G__25796,this$))
);
return (reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__25795,G__25796,G__25797) : reagent.ratom.make_reaction.call(null,G__25795,G__25796,G__25797));
})():(function (){var G__25801 = ((function (this$){
return (function (){
var G__25804 = self__.path;
return (self__.ratom.cljs$core$IFn$_invoke$arity$1 ? self__.ratom.cljs$core$IFn$_invoke$arity$1(G__25804) : self__.ratom.call(null,G__25804));
});})(this$))
;
var G__25802 = cljs.core.constant$keyword$25;
var G__25803 = ((function (G__25801,G__25802,this$){
return (function (p1__25793_SHARP_,p2__25792_SHARP_){
var G__25805 = self__.path;
var G__25806 = p2__25792_SHARP_;
return (self__.ratom.cljs$core$IFn$_invoke$arity$2 ? self__.ratom.cljs$core$IFn$_invoke$arity$2(G__25805,G__25806) : self__.ratom.call(null,G__25805,G__25806));
});})(G__25801,G__25802,this$))
;
return (reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__25801,G__25802,G__25803) : reagent.ratom.make_reaction.call(null,G__25801,G__25802,G__25803));
})());
} else {
return self__.reaction;
}
});

reagent.ratom.RCursor.prototype._peek = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR_25807 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref(this$._reaction());
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_25807;
}});

reagent.ratom.RCursor.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write(writer,[cljs.core.str("#<Cursor: "),cljs.core.str(self__.path),cljs.core.str(" ")].join(''));

cljs.core.pr_writer(a__$1._peek(),writer,opts);

return cljs.core._write(writer,">");
});

reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.ratom,self__.path], null));
});

reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return ((other instanceof reagent.ratom.RCursor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.path,other.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.ratom,other.ratom));
});

reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_(this$__$1._reaction(),new_value);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$2(a__$1._reaction(),f);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$3(a__$1._reaction(),f,x);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$4(a__$1._reaction(),f,x,y);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$5(a__$1._reaction(),f,x,y,more);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core._notify_watches(this$__$1._reaction(),oldval,newval);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return cljs.core._add_watch(this$__$1._reaction(),key,f);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return cljs.core._remove_watch(this$__$1._reaction(),key);
});

reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._deref(this$__$1._reaction());
});

reagent.ratom.RCursor.cljs$lang$type = true;

reagent.ratom.RCursor.cljs$lang$ctorStr = "reagent.ratom/RCursor";

reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__4170__auto__,writer__4171__auto__,opt__4172__auto__){
return cljs.core._write(writer__4171__auto__,"reagent.ratom/RCursor");
});

reagent.ratom.__GT_RCursor = (function __GT_RCursor(ratom,path,reaction){
return (new reagent.ratom.RCursor(ratom,path,reaction));
});

reagent.ratom.cursor = (function cursor(src,path){
if((function (){var G__25809 = path;
if(G__25809){
var bit__4264__auto__ = (G__25809.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4264__auto__) || (G__25809.cljs$core$IDeref$)){
return true;
} else {
if((!G__25809.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__25809);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__25809);
}
})()){


return (new reagent.ratom.RCursor(path,src,null));
} else {

return (new reagent.ratom.RCursor(src,path,null));
}
});

reagent.ratom.IDisposable = (function (){var obj25811 = {};
return obj25811;
})();

reagent.ratom.dispose_BANG_ = (function dispose_BANG_(this$){
if((function (){var and__3571__auto__ = this$;
if(and__3571__auto__){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else {
return and__3571__auto__;
}
})()){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__4227__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3583__auto__ = (reagent.ratom.dispose_BANG_[(function (){var G__25815 = x__4227__auto__;
return goog.typeOf(G__25815);
})()]);
if(or__3583__auto__){
return or__3583__auto__;
} else {
var or__3583__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);
if(or__3583__auto____$1){
return or__3583__auto____$1;
} else {
throw cljs.core.missing_protocol("IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IRunnable = (function (){var obj25817 = {};
return obj25817;
})();

reagent.ratom.run = (function run(this$){
if((function (){var and__3571__auto__ = this$;
if(and__3571__auto__){
return this$.reagent$ratom$IRunnable$run$arity$1;
} else {
return and__3571__auto__;
}
})()){
return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__4227__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3583__auto__ = (reagent.ratom.run[(function (){var G__25821 = x__4227__auto__;
return goog.typeOf(G__25821);
})()]);
if(or__3583__auto__){
return or__3583__auto__;
} else {
var or__3583__auto____$1 = (reagent.ratom.run["_"]);
if(or__3583__auto____$1){
return or__3583__auto____$1;
} else {
throw cljs.core.missing_protocol("IRunnable.run",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IComputedImpl = (function (){var obj25823 = {};
return obj25823;
})();

reagent.ratom._update_watching = (function _update_watching(this$,derefed){
if((function (){var and__3571__auto__ = this$;
if(and__3571__auto__){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else {
return and__3571__auto__;
}
})()){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else {
var x__4227__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3583__auto__ = (reagent.ratom._update_watching[(function (){var G__25827 = x__4227__auto__;
return goog.typeOf(G__25827);
})()]);
if(or__3583__auto__){
return or__3583__auto__;
} else {
var or__3583__auto____$1 = (reagent.ratom._update_watching["_"]);
if(or__3583__auto____$1){
return or__3583__auto____$1;
} else {
throw cljs.core.missing_protocol("IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});

reagent.ratom._handle_change = (function _handle_change(k,sender,oldval,newval){
if((function (){var and__3571__auto__ = k;
if(and__3571__auto__){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4;
} else {
return and__3571__auto__;
}
})()){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else {
var x__4227__auto__ = (((k == null))?null:k);
return (function (){var or__3583__auto__ = (reagent.ratom._handle_change[(function (){var G__25831 = x__4227__auto__;
return goog.typeOf(G__25831);
})()]);
if(or__3583__auto__){
return or__3583__auto__;
} else {
var or__3583__auto____$1 = (reagent.ratom._handle_change["_"]);
if(or__3583__auto____$1){
return or__3583__auto____$1;
} else {
throw cljs.core.missing_protocol("IComputedImpl.-handle-change",k);
}
}
})().call(null,k,sender,oldval,newval);
}
});

reagent.ratom._peek_at = (function _peek_at(this$){
if((function (){var and__3571__auto__ = this$;
if(and__3571__auto__){
return this$.reagent$ratom$IComputedImpl$_peek_at$arity$1;
} else {
return and__3571__auto__;
}
})()){
return this$.reagent$ratom$IComputedImpl$_peek_at$arity$1(this$);
} else {
var x__4227__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3583__auto__ = (reagent.ratom._peek_at[(function (){var G__25835 = x__4227__auto__;
return goog.typeOf(G__25835);
})()]);
if(or__3583__auto__){
return or__3583__auto__;
} else {
var or__3583__auto____$1 = (reagent.ratom._peek_at["_"]);
if(or__3583__auto____$1){
return or__3583__auto____$1;
} else {
throw cljs.core.missing_protocol("IComputedImpl.-peek-at",this$);
}
}
})().call(null,this$);
}
});


/**
* @constructor
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.active_QMARK_ = active_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.on_set = on_set;
this.on_dispose = on_dispose;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__3571__auto__ = self__.active_QMARK_;
if(cljs.core.truth_(and__3571__auto__)){
return (cljs.core.not(self__.dirty_QMARK_)) && (!((oldval === newval)));
} else {
return and__3571__auto__;
}
})())){
self__.dirty_QMARK_ = true;

return (function (){var or__3583__auto__ = self__.auto_run;
if(cljs.core.truth_(or__3583__auto__)){
return or__3583__auto__;
} else {
return reagent.ratom.run;
}
})().call(null,this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_update_watching$arity$2 = (function (this$,derefed){
var self__ = this;
var this$__$1 = this;
var seq__25836_25862 = cljs.core.seq(derefed);
var chunk__25837_25863 = null;
var count__25838_25864 = (0);
var i__25839_25865 = (0);
while(true){
if((i__25839_25865 < count__25838_25864)){
var w_25866 = chunk__25837_25863.cljs$core$IIndexed$_nth$arity$2(null,i__25839_25865);
if(cljs.core.contains_QMARK_(self__.watching,w_25866)){
} else {
cljs.core.add_watch(w_25866,this$__$1,reagent.ratom._handle_change);
}

var G__25867 = seq__25836_25862;
var G__25868 = chunk__25837_25863;
var G__25869 = count__25838_25864;
var G__25870 = (i__25839_25865 + (1));
seq__25836_25862 = G__25867;
chunk__25837_25863 = G__25868;
count__25838_25864 = G__25869;
i__25839_25865 = G__25870;
continue;
} else {
var temp__4126__auto___25871 = cljs.core.seq(seq__25836_25862);
if(temp__4126__auto___25871){
var seq__25836_25872__$1 = temp__4126__auto___25871;
if(cljs.core.chunked_seq_QMARK_(seq__25836_25872__$1)){
var c__4370__auto___25873 = cljs.core.chunk_first(seq__25836_25872__$1);
var G__25874 = cljs.core.chunk_rest(seq__25836_25872__$1);
var G__25875 = c__4370__auto___25873;
var G__25876 = cljs.core.count(c__4370__auto___25873);
var G__25877 = (0);
seq__25836_25862 = G__25874;
chunk__25837_25863 = G__25875;
count__25838_25864 = G__25876;
i__25839_25865 = G__25877;
continue;
} else {
var w_25878 = cljs.core.first(seq__25836_25872__$1);
if(cljs.core.contains_QMARK_(self__.watching,w_25878)){
} else {
cljs.core.add_watch(w_25878,this$__$1,reagent.ratom._handle_change);
}

var G__25879 = cljs.core.next(seq__25836_25872__$1);
var G__25880 = null;
var G__25881 = (0);
var G__25882 = (0);
seq__25836_25862 = G__25879;
chunk__25837_25863 = G__25880;
count__25838_25864 = G__25881;
i__25839_25865 = G__25882;
continue;
}
} else {
}
}
break;
}

var seq__25840_25883 = cljs.core.seq(self__.watching);
var chunk__25841_25884 = null;
var count__25842_25885 = (0);
var i__25843_25886 = (0);
while(true){
if((i__25843_25886 < count__25842_25885)){
var w_25887 = chunk__25841_25884.cljs$core$IIndexed$_nth$arity$2(null,i__25843_25886);
if(cljs.core.contains_QMARK_(derefed,w_25887)){
} else {
cljs.core.remove_watch(w_25887,this$__$1);
}

var G__25888 = seq__25840_25883;
var G__25889 = chunk__25841_25884;
var G__25890 = count__25842_25885;
var G__25891 = (i__25843_25886 + (1));
seq__25840_25883 = G__25888;
chunk__25841_25884 = G__25889;
count__25842_25885 = G__25890;
i__25843_25886 = G__25891;
continue;
} else {
var temp__4126__auto___25892 = cljs.core.seq(seq__25840_25883);
if(temp__4126__auto___25892){
var seq__25840_25893__$1 = temp__4126__auto___25892;
if(cljs.core.chunked_seq_QMARK_(seq__25840_25893__$1)){
var c__4370__auto___25894 = cljs.core.chunk_first(seq__25840_25893__$1);
var G__25895 = cljs.core.chunk_rest(seq__25840_25893__$1);
var G__25896 = c__4370__auto___25894;
var G__25897 = cljs.core.count(c__4370__auto___25894);
var G__25898 = (0);
seq__25840_25883 = G__25895;
chunk__25841_25884 = G__25896;
count__25842_25885 = G__25897;
i__25843_25886 = G__25898;
continue;
} else {
var w_25899 = cljs.core.first(seq__25840_25893__$1);
if(cljs.core.contains_QMARK_(derefed,w_25899)){
} else {
cljs.core.remove_watch(w_25899,this$__$1);
}

var G__25900 = cljs.core.next(seq__25840_25893__$1);
var G__25901 = null;
var G__25902 = (0);
var G__25903 = (0);
seq__25840_25883 = G__25900;
chunk__25841_25884 = G__25901;
count__25842_25885 = G__25902;
i__25843_25886 = G__25903;
continue;
}
} else {
}
}
break;
}

return self__.watching = derefed;
});

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_peek_at$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.not(self__.dirty_QMARK_)){
return self__.state;
} else {
var _STAR_ratom_context_STAR_25844 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref(this$__$1);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_25844;
}}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write(writer,[cljs.core.str("#<Reaction "),cljs.core.str(cljs.core.hash(this$__$1)),cljs.core.str(": ")].join(''));

cljs.core.pr_writer(self__.state,writer,opts);

return cljs.core._write(writer,">");
});

reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__25845 = this$__$1;
return goog.getUid(G__25845);
});

reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__25846_25904 = cljs.core.seq(self__.watching);
var chunk__25847_25905 = null;
var count__25848_25906 = (0);
var i__25849_25907 = (0);
while(true){
if((i__25849_25907 < count__25848_25906)){
var w_25908 = chunk__25847_25905.cljs$core$IIndexed$_nth$arity$2(null,i__25849_25907);
cljs.core.remove_watch(w_25908,this$__$1);

var G__25909 = seq__25846_25904;
var G__25910 = chunk__25847_25905;
var G__25911 = count__25848_25906;
var G__25912 = (i__25849_25907 + (1));
seq__25846_25904 = G__25909;
chunk__25847_25905 = G__25910;
count__25848_25906 = G__25911;
i__25849_25907 = G__25912;
continue;
} else {
var temp__4126__auto___25913 = cljs.core.seq(seq__25846_25904);
if(temp__4126__auto___25913){
var seq__25846_25914__$1 = temp__4126__auto___25913;
if(cljs.core.chunked_seq_QMARK_(seq__25846_25914__$1)){
var c__4370__auto___25915 = cljs.core.chunk_first(seq__25846_25914__$1);
var G__25916 = cljs.core.chunk_rest(seq__25846_25914__$1);
var G__25917 = c__4370__auto___25915;
var G__25918 = cljs.core.count(c__4370__auto___25915);
var G__25919 = (0);
seq__25846_25904 = G__25916;
chunk__25847_25905 = G__25917;
count__25848_25906 = G__25918;
i__25849_25907 = G__25919;
continue;
} else {
var w_25920 = cljs.core.first(seq__25846_25914__$1);
cljs.core.remove_watch(w_25920,this$__$1);

var G__25921 = cljs.core.next(seq__25846_25914__$1);
var G__25922 = null;
var G__25923 = (0);
var G__25924 = (0);
seq__25846_25904 = G__25921;
chunk__25847_25905 = G__25922;
count__25848_25906 = G__25923;
i__25849_25907 = G__25924;
continue;
}
} else {
}
}
break;
}

self__.watching = null;

self__.state = null;

self__.dirty_QMARK_ = true;

if(cljs.core.truth_(self__.active_QMARK_)){
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.dec);
} else {
}

self__.active_QMARK_ = false;
} else {
}

if(cljs.core.truth_(self__.on_dispose)){
return (self__.on_dispose.cljs$core$IFn$_invoke$arity$0 ? self__.on_dispose.cljs$core$IFn$_invoke$arity$0() : self__.on_dispose.call(null));
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,newval){
var self__ = this;
var a__$1 = this;
var oldval = self__.state;
self__.state = newval;

if(cljs.core.truth_(self__.on_set)){
self__.dirty_QMARK_ = true;

var G__25850_25925 = oldval;
var G__25851_25926 = newval;
(self__.on_set.cljs$core$IFn$_invoke$arity$2 ? self__.on_set.cljs$core$IFn$_invoke$arity$2(G__25850_25925,G__25851_25926) : self__.on_set.call(null,G__25850_25925,G__25851_25926));
} else {
}

cljs.core._notify_watches(a__$1,oldval,newval);

return newval;
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__25852 = reagent.ratom._peek_at(a__$1);
return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__25852) : f__$1.call(null,G__25852));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__25853 = reagent.ratom._peek_at(a__$1);
var G__25854 = x;
return (f__$1.cljs$core$IFn$_invoke$arity$2 ? f__$1.cljs$core$IFn$_invoke$arity$2(G__25853,G__25854) : f__$1.call(null,G__25853,G__25854));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__25855 = reagent.ratom._peek_at(a__$1);
var G__25856 = x;
var G__25857 = y;
return (f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(G__25855,G__25856,G__25857) : f__$1.call(null,G__25855,G__25856,G__25857));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f__$1,reagent.ratom._peek_at(a__$1),x,y,more));
});

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var res = reagent.ratom.capture_derefed(self__.f,this$__$1);
var derefed = reagent.ratom.captured(this$__$1);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(derefed,self__.watching)){
reagent.ratom._update_watching(this$__$1,derefed);
} else {
}

if(cljs.core.truth_(self__.active_QMARK_)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.inc);
} else {
}

self__.active_QMARK_ = true;
}

self__.dirty_QMARK_ = false;

self__.state = res;

cljs.core._notify_watches(this$__$1,oldstate,self__.state);

return res;
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv(((function (this$__$1){
return (function (_,key,f__$1){
var G__25858_25927 = key;
var G__25859_25928 = this$__$1;
var G__25860_25929 = oldval;
var G__25861_25930 = newval;
(f__$1.cljs$core$IFn$_invoke$arity$4 ? f__$1.cljs$core$IFn$_invoke$arity$4(G__25858_25927,G__25859_25928,G__25860_25929,G__25861_25930) : f__$1.call(null,G__25858_25927,G__25859_25928,G__25860_25929,G__25861_25930));

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,k,wf);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
self__.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,k);

if((cljs.core.empty_QMARK_(self__.watches)) && (cljs.core.not(self__.auto_run))){
return reagent.ratom.dispose_BANG_(this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var or__3583__auto__ = self__.auto_run;
if(cljs.core.truth_(or__3583__auto__)){
return or__3583__auto__;
} else {
return cljs.core.some_QMARK_(reagent.ratom._STAR_ratom_context_STAR_);
}
})())){
reagent.ratom.notify_deref_watcher_BANG_(this$__$1);

if(cljs.core.truth_(self__.dirty_QMARK_)){
return reagent.ratom.run(this$__$1);
} else {
return self__.state;
}
} else {
if(cljs.core.truth_(self__.dirty_QMARK_)){
var oldstate_25931 = self__.state;
self__.state = (function (){return (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
})();

if((oldstate_25931 === self__.state)){
} else {
cljs.core._notify_watches(this$__$1,oldstate_25931,self__.state);
}
} else {
}

return self__.state;
}
});

reagent.ratom.Reaction.cljs$lang$type = true;

reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";

reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4170__auto__,writer__4171__auto__,opt__4172__auto__){
return cljs.core._write(writer__4171__auto__,"reagent.ratom/Reaction");
});

reagent.ratom.__GT_Reaction = (function __GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});

/**
* @param {...*} var_args
*/
reagent.ratom.make_reaction = (function() { 
var make_reaction__delegate = function (f,p__25932){
var map__25934 = p__25932;
var map__25934__$1 = ((cljs.core.seq_QMARK_(map__25934))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25934):map__25934);
var derefed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25934__$1,cljs.core.constant$keyword$26);
var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25934__$1,cljs.core.constant$keyword$27);
var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25934__$1,cljs.core.constant$keyword$25);
var auto_run = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25934__$1,cljs.core.constant$keyword$28);
var runner = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(auto_run,true))?reagent.ratom.run:auto_run);
var active = !((derefed == null));
var dirty = !(active);
var reaction = (new reagent.ratom.Reaction(f,null,dirty,active,null,null,runner,on_set,on_dispose));
if((derefed == null)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.inc);
} else {
}

reaction.reagent$ratom$IComputedImpl$_update_watching$arity$2(null,derefed);
}

return reaction;
};
var make_reaction = function (f,var_args){
var p__25932 = null;
if (arguments.length > 1) {
var G__25935__i = 0, G__25935__a = new Array(arguments.length -  1);
while (G__25935__i < G__25935__a.length) {G__25935__a[G__25935__i] = arguments[G__25935__i + 1]; ++G__25935__i;}
  p__25932 = new cljs.core.IndexedSeq(G__25935__a,0);
} 
return make_reaction__delegate.call(this,f,p__25932);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__25936){
var f = cljs.core.first(arglist__25936);
var p__25932 = cljs.core.rest(arglist__25936);
return make_reaction__delegate(f,p__25932);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;

/**
* @constructor
*/
reagent.ratom.Wrapper = (function (state,callback,changed,watches){
this.state = state;
this.callback = callback;
this.changed = changed;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2149613568;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Wrapper.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
cljs.core._write(writer,"#<wrap: ");

cljs.core.pr_writer(self__.state,writer,opts);

return cljs.core._write(writer,">");
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv(((function (this$__$1){
return (function (_,key,f){
var G__25937_25948 = key;
var G__25938_25949 = this$__$1;
var G__25939_25950 = oldval;
var G__25940_25951 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__25937_25948,G__25938_25949,G__25939_25950,G__25940_25951) : f.call(null,G__25937_25948,G__25938_25949,G__25939_25950,G__25940_25951));

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key,f);
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key);
});

reagent.ratom.Wrapper.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return ((other instanceof reagent.ratom.Wrapper)) && (cljs.core.not(self__.changed)) && (cljs.core.not(other.changed)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.state,other.state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.callback,other.callback));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__25941 = self__.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25941) : f.call(null,G__25941));
})());
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__25942 = self__.state;
var G__25943 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__25942,G__25943) : f.call(null,G__25942,G__25943));
})());
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__25944 = self__.state;
var G__25945 = x;
var G__25946 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__25944,G__25945,G__25946) : f.call(null,G__25944,G__25945,G__25946));
})());
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
});

reagent.ratom.Wrapper.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
var oldval = self__.state;
self__.changed = true;

self__.state = newval;

if((self__.watches == null)){
} else {
cljs.core._notify_watches(this$__$1,oldval,newval);
}

var G__25947_25952 = newval;
(self__.callback.cljs$core$IFn$_invoke$arity$1 ? self__.callback.cljs$core$IFn$_invoke$arity$1(G__25947_25952) : self__.callback.call(null,G__25947_25952));

return newval;
});

reagent.ratom.Wrapper.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;


return self__.state;
});

reagent.ratom.Wrapper.cljs$lang$type = true;

reagent.ratom.Wrapper.cljs$lang$ctorStr = "reagent.ratom/Wrapper";

reagent.ratom.Wrapper.cljs$lang$ctorPrWriter = (function (this__4170__auto__,writer__4171__auto__,opt__4172__auto__){
return cljs.core._write(writer__4171__auto__,"reagent.ratom/Wrapper");
});

reagent.ratom.__GT_Wrapper = (function __GT_Wrapper(state,callback,changed,watches){
return (new reagent.ratom.Wrapper(state,callback,changed,watches));
});

reagent.ratom.make_wrapper = (function make_wrapper(value,callback_fn,args){
return (new reagent.ratom.Wrapper(value,(new reagent.impl.util.partial_ifn(callback_fn,args,null)),false,null));
});
