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
return cljs.core.keyword_identical_QMARK_((state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),cljs.core.constant$keyword$39);
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.impl.ioc_helpers.t24346 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t24346 = (function (f,fn_handler,meta24347){
this.f = f;
this.fn_handler = fn_handler;
this.meta24347 = meta24347;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t24346.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.impl.ioc_helpers.t24346.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.impl.ioc_helpers.t24346.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.impl.ioc_helpers.t24346.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24348){
var self__ = this;
var _24348__$1 = this;
return self__.meta24347;
});

cljs.core.async.impl.ioc_helpers.t24346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24348,meta24347__$1){
var self__ = this;
var _24348__$1 = this;
return (new cljs.core.async.impl.ioc_helpers.t24346(self__.f,self__.fn_handler,meta24347__$1));
});

cljs.core.async.impl.ioc_helpers.t24346.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.t24346.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t24346";

cljs.core.async.impl.ioc_helpers.t24346.cljs$lang$ctorPrWriter = (function (this__4170__auto__,writer__4171__auto__,opt__4172__auto__){
return cljs.core._write(writer__4171__auto__,"cljs.core.async.impl.ioc-helpers/t24346");
});

cljs.core.async.impl.ioc_helpers.__GT_t24346 = (function __GT_t24346(f__$1,fn_handler__$1,meta24347){
return (new cljs.core.async.impl.ioc_helpers.t24346(f__$1,fn_handler__$1,meta24347));
});

}

return (new cljs.core.async.impl.ioc_helpers.t24346(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){
return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){
try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e24350){if((e24350 instanceof Object)){
var ex = e24350;
cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

throw ex;
} else {
throw e24350;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){
var temp__4124__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){
var statearr_24354_24357 = state;
(statearr_24354_24357[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);

(statearr_24354_24357[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4124__auto__)){
var cb = temp__4124__auto__;
var statearr_24355_24358 = state;
(statearr_24355_24358[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__24356 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24356) : cljs.core.deref.call(null,G__24356));
})());

(statearr_24355_24358[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$40;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){
var temp__4124__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (ret_val){
var statearr_24362_24365 = state;
(statearr_24362_24365[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = ret_val);

(statearr_24362_24365[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4124__auto__)){
var cb = temp__4124__auto__;
var statearr_24363_24366 = state;
(statearr_24363_24366[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__24364 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24364) : cljs.core.deref.call(null,G__24364));
})());

(statearr_24363_24366[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$40;
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

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4188__auto__,k24368,else__4189__auto__){
var self__ = this;
var this__4188__auto____$1 = this;
var G__24370 = (((k24368 instanceof cljs.core.Keyword))?k24368.fqn:null);
switch (G__24370) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24368,else__4189__auto__);

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
return cljs.core.pr_sequential_writer(writer__4201__auto__,pr_pair__4203__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__4202__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$41,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$42,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$43,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$44,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$45,self__.prev],null))], null),self__.__extmap));
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
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$43,null,cljs.core.constant$keyword$41,null,cljs.core.constant$keyword$42,null,cljs.core.constant$keyword$45,null,cljs.core.constant$keyword$44,null], null), null),k__4196__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4195__auto____$1),self__.__meta),k__4196__auto__);
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4196__auto__)),null));
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4193__auto__,k__4194__auto__,G__24367){
var self__ = this;
var this__4193__auto____$1 = this;
var pred__24371 = cljs.core.keyword_identical_QMARK_;
var expr__24372 = k__4194__auto__;
if(cljs.core.truth_((function (){var G__24374 = cljs.core.constant$keyword$41;
var G__24375 = expr__24372;
return (pred__24371.cljs$core$IFn$_invoke$arity$2 ? pred__24371.cljs$core$IFn$_invoke$arity$2(G__24374,G__24375) : pred__24371.call(null,G__24374,G__24375));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__24367,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24376 = cljs.core.constant$keyword$42;
var G__24377 = expr__24372;
return (pred__24371.cljs$core$IFn$_invoke$arity$2 ? pred__24371.cljs$core$IFn$_invoke$arity$2(G__24376,G__24377) : pred__24371.call(null,G__24376,G__24377));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__24367,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24378 = cljs.core.constant$keyword$43;
var G__24379 = expr__24372;
return (pred__24371.cljs$core$IFn$_invoke$arity$2 ? pred__24371.cljs$core$IFn$_invoke$arity$2(G__24378,G__24379) : pred__24371.call(null,G__24378,G__24379));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__24367,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24380 = cljs.core.constant$keyword$44;
var G__24381 = expr__24372;
return (pred__24371.cljs$core$IFn$_invoke$arity$2 ? pred__24371.cljs$core$IFn$_invoke$arity$2(G__24380,G__24381) : pred__24371.call(null,G__24380,G__24381));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__24367,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24382 = cljs.core.constant$keyword$45;
var G__24383 = expr__24372;
return (pred__24371.cljs$core$IFn$_invoke$arity$2 ? pred__24371.cljs$core$IFn$_invoke$arity$2(G__24382,G__24383) : pred__24371.call(null,G__24382,G__24383));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__24367,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4194__auto__,G__24367),null));
}
}
}
}
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$41,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$42,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$43,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$44,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$45,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4185__auto__,G__24367){
var self__ = this;
var this__4185__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__24367,self__.__extmap,self__.__hash));
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

cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__24369){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.constant$keyword$41.cljs$core$IFn$_invoke$arity$1(G__24369),cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(G__24369),cljs.core.constant$keyword$43.cljs$core$IFn$_invoke$arity$1(G__24369),cljs.core.constant$keyword$44.cljs$core$IFn$_invoke$arity$1(G__24369),cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(G__24369),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24369,cljs.core.constant$keyword$41,cljs.core.array_seq([cljs.core.constant$keyword$42,cljs.core.constant$keyword$43,cljs.core.constant$keyword$44,cljs.core.constant$keyword$45], 0)),null));
});

cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){
var statearr_24386 = state;
(statearr_24386[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));

return statearr_24386;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){
while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);
var catch_block = cljs.core.constant$keyword$41.cljs$core$IFn$_invoke$arity$1(exception_frame);
var catch_exception = cljs.core.constant$keyword$42.cljs$core$IFn$_invoke$arity$1(exception_frame);
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
var statearr_24392 = state;
(statearr_24392[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);

(statearr_24392[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);

(statearr_24392[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);

(statearr_24392[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.constant$keyword$41,null,cljs.core.array_seq([cljs.core.constant$keyword$42,null], 0)));

return statearr_24392;
} else {
if(cljs.core.truth_((function (){var and__3571__auto__ = exception;
if(cljs.core.truth_(and__3571__auto__)){
return (cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.constant$keyword$43.cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else {
return and__3571__auto__;
}
})())){
var statearr_24393_24397 = state;
(statearr_24393_24397[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(exception_frame));


var G__24398 = state;
state = G__24398;
continue;
} else {
if(cljs.core.truth_((function (){var and__3571__auto__ = exception;
if(cljs.core.truth_(and__3571__auto__)){
var and__3571__auto____$1 = cljs.core.not(catch_block);
if(and__3571__auto____$1){
return cljs.core.constant$keyword$43.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__3571__auto____$1;
}
} else {
return and__3571__auto__;
}
})())){
var statearr_24394 = state;
(statearr_24394[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$43.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_24394[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$43,null));

return statearr_24394;
} else {
if(cljs.core.truth_((function (){var and__3571__auto__ = cljs.core.not(exception);
if(and__3571__auto__){
return cljs.core.constant$keyword$43.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__3571__auto__;
}
})())){
var statearr_24395 = state;
(statearr_24395[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$43.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_24395[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$43,null));

return statearr_24395;
} else {
if((cljs.core.not(exception)) && (cljs.core.not(cljs.core.constant$keyword$43.cljs$core$IFn$_invoke$arity$1(exception_frame)))){
var statearr_24396 = state;
(statearr_24396[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$44.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_24396[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(exception_frame));

return statearr_24396;
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
