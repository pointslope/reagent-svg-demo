// Compiled by ClojureScript 0.0-2816 {:elide-asserts true, :static-fns true}
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = (0);
cljs.core.async.impl.ioc_helpers.STATE_IDX = (1);
cljs.core.async.impl.ioc_helpers.VALUE_IDX = (2);
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = (3);
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = (4);
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = (5);
cljs.core.async.impl.ioc_helpers.USER_START_IDX = (6);
cljs.core.async.impl.ioc_helpers.aset_object = (function aset_object(arr,idx,o){
return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function aget_object(arr,idx){
return (arr[idx]);
});
/**
* Returns true if the machine is in a finished state
*/
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){
return cljs.core.keyword_identical_QMARK_((state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),cljs.core.constant$keyword$45);
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.impl.ioc_helpers.t25352 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t25352 = (function (f,fn_handler,meta25353){
this.f = f;
this.fn_handler = fn_handler;
this.meta25353 = meta25353;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t25352.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.impl.ioc_helpers.t25352.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.impl.ioc_helpers.t25352.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.impl.ioc_helpers.t25352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25354){
var self__ = this;
var _25354__$1 = this;
return self__.meta25353;
});

cljs.core.async.impl.ioc_helpers.t25352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25354,meta25353__$1){
var self__ = this;
var _25354__$1 = this;
return (new cljs.core.async.impl.ioc_helpers.t25352(self__.f,self__.fn_handler,meta25353__$1));
});

cljs.core.async.impl.ioc_helpers.t25352.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.t25352.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t25352";

cljs.core.async.impl.ioc_helpers.t25352.cljs$lang$ctorPrWriter = (function (this__4170__auto__,writer__4171__auto__,opt__4172__auto__){
return cljs.core._write(writer__4171__auto__,"cljs.core.async.impl.ioc-helpers/t25352");
});

cljs.core.async.impl.ioc_helpers.__GT_t25352 = (function __GT_t25352(f__$1,fn_handler__$1,meta25353){
return (new cljs.core.async.impl.ioc_helpers.t25352(f__$1,fn_handler__$1,meta25353));
});

}

return (new cljs.core.async.impl.ioc_helpers.t25352(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){
return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){
try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e25356){if((e25356 instanceof Object)){
var ex = e25356;
cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

throw ex;
} else {
throw e25356;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){
var temp__4124__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){
var statearr_25360_25363 = state;
(statearr_25360_25363[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);

(statearr_25360_25363[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4124__auto__)){
var cb = temp__4124__auto__;
var statearr_25361_25364 = state;
(statearr_25361_25364[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__25362 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25362) : cljs.core.deref.call(null,G__25362));
})());

(statearr_25361_25364[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$46;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){
var temp__4124__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (ret_val){
var statearr_25368_25371 = state;
(statearr_25368_25371[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = ret_val);

(statearr_25368_25371[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4124__auto__)){
var cb = temp__4124__auto__;
var statearr_25369_25372 = state;
(statearr_25369_25372[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__25370 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25370) : cljs.core.deref.call(null,G__25370));
})());

(statearr_25369_25372[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$46;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.return_chan = (function return_chan(state,value){
var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);
if((value == null)){
} else {
c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,value,cljs.core.async.impl.ioc_helpers.fn_handler(((function (c){
return (function (){
return null;
});})(c))
));
}

c.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

return c;
});

/**
* @constructor
* @param {*} catch_block
* @param {*} catch_exception
* @param {*} finally_block
* @param {*} continue_block
* @param {*} prev
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap,__hash){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4186__auto__,k__4187__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4186__auto____$1,k__4187__auto__,null);
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4188__auto__,k25374,else__4189__auto__){
var self__ = this;
var this__4188__auto____$1 = this;
var G__25376 = (((k25374 instanceof cljs.core.Keyword))?k25374.fqn:null);
switch (G__25376) {
case "prev":
return self__.prev;

break;
case "continue-block":
return self__.continue_block;

break;
case "finally-block":
return self__.finally_block;

break;
case "catch-exception":
return self__.catch_exception;

break;
case "catch-block":
return self__.catch_block;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25374,else__4189__auto__);

}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4200__auto__,writer__4201__auto__,opts__4202__auto__){
var self__ = this;
var this__4200__auto____$1 = this;
var pr_pair__4203__auto__ = ((function (this__4200__auto____$1){
return (function (keyval__4204__auto__){
return cljs.core.pr_sequential_writer(writer__4201__auto__,cljs.core.pr_writer,""," ","",opts__4202__auto__,keyval__4204__auto__);
});})(this__4200__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4201__auto__,pr_pair__4203__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__4202__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$47,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$48,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$49,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$50,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$51,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4180__auto__){
var self__ = this;
var this__4180__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4190__auto__){
var self__ = this;
var this__4190__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4181__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
var h__4004__auto__ = self__.__hash;
if(!((h__4004__auto__ == null))){
return h__4004__auto__;
} else {
var h__4004__auto____$1 = cljs.core.hash_imap(this__4181__auto____$1);
self__.__hash = h__4004__auto____$1;

return h__4004__auto____$1;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4182__auto__,other__4183__auto__){
var self__ = this;
var this__4182__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3571__auto__ = other__4183__auto__;
if(cljs.core.truth_(and__3571__auto__)){
return ((this__4182__auto____$1.constructor === other__4183__auto__.constructor)) && (cljs.core.equiv_map(this__4182__auto____$1,other__4183__auto__));
} else {
return and__3571__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4195__auto__,k__4196__auto__){
var self__ = this;
var this__4195__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$49,null,cljs.core.constant$keyword$47,null,cljs.core.constant$keyword$48,null,cljs.core.constant$keyword$51,null,cljs.core.constant$keyword$50,null], null), null),k__4196__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4195__auto____$1),self__.__meta),k__4196__auto__);
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4196__auto__)),null));
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4193__auto__,k__4194__auto__,G__25373){
var self__ = this;
var this__4193__auto____$1 = this;
var pred__25377 = cljs.core.keyword_identical_QMARK_;
var expr__25378 = k__4194__auto__;
if(cljs.core.truth_((function (){var G__25380 = cljs.core.constant$keyword$47;
var G__25381 = expr__25378;
return (pred__25377.cljs$core$IFn$_invoke$arity$2 ? pred__25377.cljs$core$IFn$_invoke$arity$2(G__25380,G__25381) : pred__25377.call(null,G__25380,G__25381));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__25373,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25382 = cljs.core.constant$keyword$48;
var G__25383 = expr__25378;
return (pred__25377.cljs$core$IFn$_invoke$arity$2 ? pred__25377.cljs$core$IFn$_invoke$arity$2(G__25382,G__25383) : pred__25377.call(null,G__25382,G__25383));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__25373,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25384 = cljs.core.constant$keyword$49;
var G__25385 = expr__25378;
return (pred__25377.cljs$core$IFn$_invoke$arity$2 ? pred__25377.cljs$core$IFn$_invoke$arity$2(G__25384,G__25385) : pred__25377.call(null,G__25384,G__25385));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__25373,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25386 = cljs.core.constant$keyword$50;
var G__25387 = expr__25378;
return (pred__25377.cljs$core$IFn$_invoke$arity$2 ? pred__25377.cljs$core$IFn$_invoke$arity$2(G__25386,G__25387) : pred__25377.call(null,G__25386,G__25387));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__25373,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25388 = cljs.core.constant$keyword$51;
var G__25389 = expr__25378;
return (pred__25377.cljs$core$IFn$_invoke$arity$2 ? pred__25377.cljs$core$IFn$_invoke$arity$2(G__25388,G__25389) : pred__25377.call(null,G__25388,G__25389));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__25373,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4194__auto__,G__25373),null));
}
}
}
}
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$47,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$48,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$49,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$50,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$51,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4185__auto__,G__25373){
var self__ = this;
var this__4185__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__25373,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4191__auto__,entry__4192__auto__){
var self__ = this;
var this__4191__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4192__auto__)){
return cljs.core._assoc(this__4191__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4192__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4192__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4191__auto____$1,entry__4192__auto__);
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__4220__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__4220__auto__,writer__4221__auto__){
return cljs.core._write(writer__4221__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev,null,null,null));
});

cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__25375){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.constant$keyword$47.cljs$core$IFn$_invoke$arity$1(G__25375),cljs.core.constant$keyword$48.cljs$core$IFn$_invoke$arity$1(G__25375),cljs.core.constant$keyword$49.cljs$core$IFn$_invoke$arity$1(G__25375),cljs.core.constant$keyword$50.cljs$core$IFn$_invoke$arity$1(G__25375),cljs.core.constant$keyword$51.cljs$core$IFn$_invoke$arity$1(G__25375),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__25375,cljs.core.constant$keyword$47,cljs.core.array_seq([cljs.core.constant$keyword$48,cljs.core.constant$keyword$49,cljs.core.constant$keyword$50,cljs.core.constant$keyword$51], 0)),null));
});

cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){
var statearr_25392 = state;
(statearr_25392[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));

return statearr_25392;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){
while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);
var catch_block = cljs.core.constant$keyword$47.cljs$core$IFn$_invoke$arity$1(exception_frame);
var catch_exception = cljs.core.constant$keyword$48.cljs$core$IFn$_invoke$arity$1(exception_frame);
var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);
if(cljs.core.truth_((function (){var and__3571__auto__ = exception;
if(cljs.core.truth_(and__3571__auto__)){
return cljs.core.not(exception_frame);
} else {
return and__3571__auto__;
}
})())){
throw exception;
} else {
if(cljs.core.truth_((function (){var and__3571__auto__ = exception;
if(cljs.core.truth_(and__3571__auto__)){
var and__3571__auto____$1 = catch_block;
if(cljs.core.truth_(and__3571__auto____$1)){
return (exception instanceof catch_exception);
} else {
return and__3571__auto____$1;
}
} else {
return and__3571__auto__;
}
})())){
var statearr_25398 = state;
(statearr_25398[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);

(statearr_25398[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);

(statearr_25398[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);

(statearr_25398[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.constant$keyword$47,null,cljs.core.array_seq([cljs.core.constant$keyword$48,null], 0)));

return statearr_25398;
} else {
if(cljs.core.truth_((function (){var and__3571__auto__ = exception;
if(cljs.core.truth_(and__3571__auto__)){
return (cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.constant$keyword$49.cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else {
return and__3571__auto__;
}
})())){
var statearr_25399_25403 = state;
(statearr_25399_25403[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$51.cljs$core$IFn$_invoke$arity$1(exception_frame));


var G__25404 = state;
state = G__25404;
continue;
} else {
if(cljs.core.truth_((function (){var and__3571__auto__ = exception;
if(cljs.core.truth_(and__3571__auto__)){
var and__3571__auto____$1 = cljs.core.not(catch_block);
if(and__3571__auto____$1){
return cljs.core.constant$keyword$49.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__3571__auto____$1;
}
} else {
return and__3571__auto__;
}
})())){
var statearr_25400 = state;
(statearr_25400[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$49.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_25400[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$49,null));

return statearr_25400;
} else {
if(cljs.core.truth_((function (){var and__3571__auto__ = cljs.core.not(exception);
if(and__3571__auto__){
return cljs.core.constant$keyword$49.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__3571__auto__;
}
})())){
var statearr_25401 = state;
(statearr_25401[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$49.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_25401[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$49,null));

return statearr_25401;
} else {
if((cljs.core.not(exception)) && (cljs.core.not(cljs.core.constant$keyword$49.cljs$core$IFn$_invoke$arity$1(exception_frame)))){
var statearr_25402 = state;
(statearr_25402[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$50.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_25402[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$51.cljs$core$IFn$_invoke$arity$1(exception_frame));

return statearr_25402;
} else {
throw (new Error("No matching clause"));

}
}
}
}
}
}
break;
}
});
