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
reagent.ratom._running = (function (){var G__24793 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24793) : cljs.core.atom.call(null,G__24793));
})();
}
reagent.ratom.running = (function running(){
var G__24795 = reagent.ratom._running;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24795) : cljs.core.deref.call(null,G__24795));
});
reagent.ratom.capture_derefed = (function capture_derefed(f,obj){
obj.cljsCaptured = null;

var _STAR_ratom_context_STAR_24797 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = obj;

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_24797;
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

reagent.ratom.IReactiveAtom = (function (){var obj24799 = {};
return obj24799;
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
var G__24800 = this$__$1;
return goog.getUid(G__24800);
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
return cljs.core._reset_BANG_(a__$1,(function (){var G__24801 = self__.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24801) : f.call(null,G__24801));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__24802 = self__.state;
var G__24803 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24802,G__24803) : f.call(null,G__24802,G__24803));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__24804 = self__.state;
var G__24805 = x;
var G__24806 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__24804,G__24805,G__24806) : f.call(null,G__24804,G__24805,G__24806));
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
var G__24807_24811 = key;
var G__24808_24812 = this$__$1;
var G__24809_24813 = oldval;
var G__24810_24814 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__24807_24811,G__24808_24812,G__24809_24813,G__24810_24814) : f.call(null,G__24807_24811,G__24808_24812,G__24809_24813,G__24810_24814));

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
var G__24818__delegate = function (x,p__24815){
var map__24817 = p__24815;
var map__24817__$1 = ((cljs.core.seq_QMARK_(map__24817))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24817):map__24817);
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24817__$1,cljs.core.constant$keyword$8);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24817__$1,cljs.core.constant$keyword$3);
return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__24818 = function (x,var_args){
var p__24815 = null;
if (arguments.length > 1) {
var G__24819__i = 0, G__24819__a = new Array(arguments.length -  1);
while (G__24819__i < G__24819__a.length) {G__24819__a[G__24819__i] = arguments[G__24819__i + 1]; ++G__24819__i;}
  p__24815 = new cljs.core.IndexedSeq(G__24819__a,0);
} 
return G__24818__delegate.call(this,x,p__24815);};
G__24818.cljs$lang$maxFixedArity = 1;
G__24818.cljs$lang$applyTo = (function (arglist__24820){
var x = cljs.core.first(arglist__24820);
var p__24815 = cljs.core.rest(arglist__24820);
return G__24818__delegate(x,p__24815);
});
G__24818.cljs$core$IFn$_invoke$arity$variadic = G__24818__delegate;
return G__24818;
})()
;
atom = function(x,var_args){
var p__24815 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
var G__24821 = null;
if (arguments.length > 1) {
var G__24822__i = 0, G__24822__a = new Array(arguments.length -  1);
while (G__24822__i < G__24822__a.length) {G__24822__a[G__24822__i] = arguments[G__24822__i + 1]; ++G__24822__i;}
G__24821 = new cljs.core.IndexedSeq(G__24822__a,0);
}
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, G__24821);
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
return self__.reaction = (((function (){var G__24829 = self__.ratom;
if(G__24829){
var bit__4264__auto__ = (G__24829.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4264__auto__) || (G__24829.cljs$core$IDeref$)){
return true;
} else {
if((!G__24829.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__24829);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__24829);
}
})())?(function (){var G__24830 = ((function (this$){
return (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__24833 = self__.ratom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24833) : cljs.core.deref.call(null,G__24833));
})(),self__.path);
});})(this$))
;
var G__24831 = cljs.core.constant$keyword$19;
var G__24832 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.path,cljs.core.PersistentVector.EMPTY))?((function (G__24830,G__24831,this$){
return (function (p1__24824_SHARP_,p2__24823_SHARP_){
var G__24834 = self__.ratom;
var G__24835 = p2__24823_SHARP_;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24834,G__24835) : cljs.core.reset_BANG_.call(null,G__24834,G__24835));
});})(G__24830,G__24831,this$))
:((function (G__24830,G__24831,this$){
return (function (p1__24826_SHARP_,p2__24825_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.ratom,cljs.core.assoc_in,self__.path,p2__24825_SHARP_);
});})(G__24830,G__24831,this$))
);
return (reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__24830,G__24831,G__24832) : reagent.ratom.make_reaction.call(null,G__24830,G__24831,G__24832));
})():(function (){var G__24836 = ((function (this$){
return (function (){
var G__24839 = self__.path;
return (self__.ratom.cljs$core$IFn$_invoke$arity$1 ? self__.ratom.cljs$core$IFn$_invoke$arity$1(G__24839) : self__.ratom.call(null,G__24839));
});})(this$))
;
var G__24837 = cljs.core.constant$keyword$19;
var G__24838 = ((function (G__24836,G__24837,this$){
return (function (p1__24828_SHARP_,p2__24827_SHARP_){
var G__24840 = self__.path;
var G__24841 = p2__24827_SHARP_;
return (self__.ratom.cljs$core$IFn$_invoke$arity$2 ? self__.ratom.cljs$core$IFn$_invoke$arity$2(G__24840,G__24841) : self__.ratom.call(null,G__24840,G__24841));
});})(G__24836,G__24837,this$))
;
return (reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__24836,G__24837,G__24838) : reagent.ratom.make_reaction.call(null,G__24836,G__24837,G__24838));
})());
} else {
return self__.reaction;
}
});

reagent.ratom.RCursor.prototype._peek = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR_24842 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref(this$._reaction());
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_24842;
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
if((function (){var G__24844 = path;
if(G__24844){
var bit__4264__auto__ = (G__24844.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4264__auto__) || (G__24844.cljs$core$IDeref$)){
return true;
} else {
if((!G__24844.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__24844);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__24844);
}
})()){


return (new reagent.ratom.RCursor(path,src,null));
} else {

return (new reagent.ratom.RCursor(src,path,null));
}
});

reagent.ratom.IDisposable = (function (){var obj24846 = {};
return obj24846;
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
return (function (){var or__3583__auto__ = (reagent.ratom.dispose_BANG_[(function (){var G__24850 = x__4227__auto__;
return goog.typeOf(G__24850);
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


reagent.ratom.IRunnable = (function (){var obj24852 = {};
return obj24852;
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
return (function (){var or__3583__auto__ = (reagent.ratom.run[(function (){var G__24856 = x__4227__auto__;
return goog.typeOf(G__24856);
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


reagent.ratom.IComputedImpl = (function (){var obj24858 = {};
return obj24858;
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
return (function (){var or__3583__auto__ = (reagent.ratom._update_watching[(function (){var G__24862 = x__4227__auto__;
return goog.typeOf(G__24862);
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
return (function (){var or__3583__auto__ = (reagent.ratom._handle_change[(function (){var G__24866 = x__4227__auto__;
return goog.typeOf(G__24866);
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
return (function (){var or__3583__auto__ = (reagent.ratom._peek_at[(function (){var G__24870 = x__4227__auto__;
return goog.typeOf(G__24870);
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
var seq__24871_24897 = cljs.core.seq(derefed);
var chunk__24872_24898 = null;
var count__24873_24899 = (0);
var i__24874_24900 = (0);
while(true){
if((i__24874_24900 < count__24873_24899)){
var w_24901 = chunk__24872_24898.cljs$core$IIndexed$_nth$arity$2(null,i__24874_24900);
if(cljs.core.contains_QMARK_(self__.watching,w_24901)){
} else {
cljs.core.add_watch(w_24901,this$__$1,reagent.ratom._handle_change);
}

var G__24902 = seq__24871_24897;
var G__24903 = chunk__24872_24898;
var G__24904 = count__24873_24899;
var G__24905 = (i__24874_24900 + (1));
seq__24871_24897 = G__24902;
chunk__24872_24898 = G__24903;
count__24873_24899 = G__24904;
i__24874_24900 = G__24905;
continue;
} else {
var temp__4126__auto___24906 = cljs.core.seq(seq__24871_24897);
if(temp__4126__auto___24906){
var seq__24871_24907__$1 = temp__4126__auto___24906;
if(cljs.core.chunked_seq_QMARK_(seq__24871_24907__$1)){
var c__4370__auto___24908 = cljs.core.chunk_first(seq__24871_24907__$1);
var G__24909 = cljs.core.chunk_rest(seq__24871_24907__$1);
var G__24910 = c__4370__auto___24908;
var G__24911 = cljs.core.count(c__4370__auto___24908);
var G__24912 = (0);
seq__24871_24897 = G__24909;
chunk__24872_24898 = G__24910;
count__24873_24899 = G__24911;
i__24874_24900 = G__24912;
continue;
} else {
var w_24913 = cljs.core.first(seq__24871_24907__$1);
if(cljs.core.contains_QMARK_(self__.watching,w_24913)){
} else {
cljs.core.add_watch(w_24913,this$__$1,reagent.ratom._handle_change);
}

var G__24914 = cljs.core.next(seq__24871_24907__$1);
var G__24915 = null;
var G__24916 = (0);
var G__24917 = (0);
seq__24871_24897 = G__24914;
chunk__24872_24898 = G__24915;
count__24873_24899 = G__24916;
i__24874_24900 = G__24917;
continue;
}
} else {
}
}
break;
}

var seq__24875_24918 = cljs.core.seq(self__.watching);
var chunk__24876_24919 = null;
var count__24877_24920 = (0);
var i__24878_24921 = (0);
while(true){
if((i__24878_24921 < count__24877_24920)){
var w_24922 = chunk__24876_24919.cljs$core$IIndexed$_nth$arity$2(null,i__24878_24921);
if(cljs.core.contains_QMARK_(derefed,w_24922)){
} else {
cljs.core.remove_watch(w_24922,this$__$1);
}

var G__24923 = seq__24875_24918;
var G__24924 = chunk__24876_24919;
var G__24925 = count__24877_24920;
var G__24926 = (i__24878_24921 + (1));
seq__24875_24918 = G__24923;
chunk__24876_24919 = G__24924;
count__24877_24920 = G__24925;
i__24878_24921 = G__24926;
continue;
} else {
var temp__4126__auto___24927 = cljs.core.seq(seq__24875_24918);
if(temp__4126__auto___24927){
var seq__24875_24928__$1 = temp__4126__auto___24927;
if(cljs.core.chunked_seq_QMARK_(seq__24875_24928__$1)){
var c__4370__auto___24929 = cljs.core.chunk_first(seq__24875_24928__$1);
var G__24930 = cljs.core.chunk_rest(seq__24875_24928__$1);
var G__24931 = c__4370__auto___24929;
var G__24932 = cljs.core.count(c__4370__auto___24929);
var G__24933 = (0);
seq__24875_24918 = G__24930;
chunk__24876_24919 = G__24931;
count__24877_24920 = G__24932;
i__24878_24921 = G__24933;
continue;
} else {
var w_24934 = cljs.core.first(seq__24875_24928__$1);
if(cljs.core.contains_QMARK_(derefed,w_24934)){
} else {
cljs.core.remove_watch(w_24934,this$__$1);
}

var G__24935 = cljs.core.next(seq__24875_24928__$1);
var G__24936 = null;
var G__24937 = (0);
var G__24938 = (0);
seq__24875_24918 = G__24935;
chunk__24876_24919 = G__24936;
count__24877_24920 = G__24937;
i__24878_24921 = G__24938;
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
var _STAR_ratom_context_STAR_24879 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref(this$__$1);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_24879;
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
var G__24880 = this$__$1;
return goog.getUid(G__24880);
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
var seq__24881_24939 = cljs.core.seq(self__.watching);
var chunk__24882_24940 = null;
var count__24883_24941 = (0);
var i__24884_24942 = (0);
while(true){
if((i__24884_24942 < count__24883_24941)){
var w_24943 = chunk__24882_24940.cljs$core$IIndexed$_nth$arity$2(null,i__24884_24942);
cljs.core.remove_watch(w_24943,this$__$1);

var G__24944 = seq__24881_24939;
var G__24945 = chunk__24882_24940;
var G__24946 = count__24883_24941;
var G__24947 = (i__24884_24942 + (1));
seq__24881_24939 = G__24944;
chunk__24882_24940 = G__24945;
count__24883_24941 = G__24946;
i__24884_24942 = G__24947;
continue;
} else {
var temp__4126__auto___24948 = cljs.core.seq(seq__24881_24939);
if(temp__4126__auto___24948){
var seq__24881_24949__$1 = temp__4126__auto___24948;
if(cljs.core.chunked_seq_QMARK_(seq__24881_24949__$1)){
var c__4370__auto___24950 = cljs.core.chunk_first(seq__24881_24949__$1);
var G__24951 = cljs.core.chunk_rest(seq__24881_24949__$1);
var G__24952 = c__4370__auto___24950;
var G__24953 = cljs.core.count(c__4370__auto___24950);
var G__24954 = (0);
seq__24881_24939 = G__24951;
chunk__24882_24940 = G__24952;
count__24883_24941 = G__24953;
i__24884_24942 = G__24954;
continue;
} else {
var w_24955 = cljs.core.first(seq__24881_24949__$1);
cljs.core.remove_watch(w_24955,this$__$1);

var G__24956 = cljs.core.next(seq__24881_24949__$1);
var G__24957 = null;
var G__24958 = (0);
var G__24959 = (0);
seq__24881_24939 = G__24956;
chunk__24882_24940 = G__24957;
count__24883_24941 = G__24958;
i__24884_24942 = G__24959;
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

var G__24885_24960 = oldval;
var G__24886_24961 = newval;
(self__.on_set.cljs$core$IFn$_invoke$arity$2 ? self__.on_set.cljs$core$IFn$_invoke$arity$2(G__24885_24960,G__24886_24961) : self__.on_set.call(null,G__24885_24960,G__24886_24961));
} else {
}

cljs.core._notify_watches(a__$1,oldval,newval);

return newval;
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__24887 = reagent.ratom._peek_at(a__$1);
return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__24887) : f__$1.call(null,G__24887));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__24888 = reagent.ratom._peek_at(a__$1);
var G__24889 = x;
return (f__$1.cljs$core$IFn$_invoke$arity$2 ? f__$1.cljs$core$IFn$_invoke$arity$2(G__24888,G__24889) : f__$1.call(null,G__24888,G__24889));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__24890 = reagent.ratom._peek_at(a__$1);
var G__24891 = x;
var G__24892 = y;
return (f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(G__24890,G__24891,G__24892) : f__$1.call(null,G__24890,G__24891,G__24892));
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
var G__24893_24962 = key;
var G__24894_24963 = this$__$1;
var G__24895_24964 = oldval;
var G__24896_24965 = newval;
(f__$1.cljs$core$IFn$_invoke$arity$4 ? f__$1.cljs$core$IFn$_invoke$arity$4(G__24893_24962,G__24894_24963,G__24895_24964,G__24896_24965) : f__$1.call(null,G__24893_24962,G__24894_24963,G__24895_24964,G__24896_24965));

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
var oldstate_24966 = self__.state;
self__.state = (function (){return (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
})();

if((oldstate_24966 === self__.state)){
} else {
cljs.core._notify_watches(this$__$1,oldstate_24966,self__.state);
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
var make_reaction__delegate = function (f,p__24967){
var map__24969 = p__24967;
var map__24969__$1 = ((cljs.core.seq_QMARK_(map__24969))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24969):map__24969);
var derefed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24969__$1,cljs.core.constant$keyword$20);
var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24969__$1,cljs.core.constant$keyword$21);
var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24969__$1,cljs.core.constant$keyword$19);
var auto_run = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24969__$1,cljs.core.constant$keyword$22);
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
var p__24967 = null;
if (arguments.length > 1) {
var G__24970__i = 0, G__24970__a = new Array(arguments.length -  1);
while (G__24970__i < G__24970__a.length) {G__24970__a[G__24970__i] = arguments[G__24970__i + 1]; ++G__24970__i;}
  p__24967 = new cljs.core.IndexedSeq(G__24970__a,0);
} 
return make_reaction__delegate.call(this,f,p__24967);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__24971){
var f = cljs.core.first(arglist__24971);
var p__24967 = cljs.core.rest(arglist__24971);
return make_reaction__delegate(f,p__24967);
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
var G__24972_24983 = key;
var G__24973_24984 = this$__$1;
var G__24974_24985 = oldval;
var G__24975_24986 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__24972_24983,G__24973_24984,G__24974_24985,G__24975_24986) : f.call(null,G__24972_24983,G__24973_24984,G__24974_24985,G__24975_24986));

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
return cljs.core._reset_BANG_(a__$1,(function (){var G__24976 = self__.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24976) : f.call(null,G__24976));
})());
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__24977 = self__.state;
var G__24978 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24977,G__24978) : f.call(null,G__24977,G__24978));
})());
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__24979 = self__.state;
var G__24980 = x;
var G__24981 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__24979,G__24980,G__24981) : f.call(null,G__24979,G__24980,G__24981));
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

var G__24982_24987 = newval;
(self__.callback.cljs$core$IFn$_invoke$arity$1 ? self__.callback.cljs$core$IFn$_invoke$arity$1(G__24982_24987) : self__.callback.call(null,G__24982_24987));

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
