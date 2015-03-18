// Compiled by ClojureScript 0.0-2816 {:elide-asserts true, :static-fns true}
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.channels.box = (function box(val){
if(typeof cljs.core.async.impl.channels.t25477 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.impl.channels.t25477 = (function (val,box,meta25478){
this.val = val;
this.box = box;
this.meta25478 = meta25478;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
cljs.core.async.impl.channels.t25477.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
});

cljs.core.async.impl.channels.t25477.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25479){
var self__ = this;
var _25479__$1 = this;
return self__.meta25478;
});

cljs.core.async.impl.channels.t25477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25479,meta25478__$1){
var self__ = this;
var _25479__$1 = this;
return (new cljs.core.async.impl.channels.t25477(self__.val,self__.box,meta25478__$1));
});

cljs.core.async.impl.channels.t25477.cljs$lang$type = true;

cljs.core.async.impl.channels.t25477.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t25477";

cljs.core.async.impl.channels.t25477.cljs$lang$ctorPrWriter = (function (this__4170__auto__,writer__4171__auto__,opt__4172__auto__){
return cljs.core._write(writer__4171__auto__,"cljs.core.async.impl.channels/t25477");
});

cljs.core.async.impl.channels.__GT_t25477 = (function __GT_t25477(val__$1,box__$1,meta25478){
return (new cljs.core.async.impl.channels.t25477(val__$1,box__$1,meta25478));
});

}

return (new cljs.core.async.impl.channels.t25477(val,box,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
})

cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__4170__auto__,writer__4171__auto__,opt__4172__auto__){
return cljs.core._write(writer__4171__auto__,"cljs.core.async.impl.channels/PutBox");
});

cljs.core.async.impl.channels.__GT_PutBox = (function __GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_(box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

cljs.core.async.impl.channels.MMC = (function (){var obj25481 = {};
return obj25481;
})();

cljs.core.async.impl.channels.abort = (function abort(this$){
if((function (){var and__3571__auto__ = this$;
if(and__3571__auto__){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1;
} else {
return and__3571__auto__;
}
})()){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
var x__4227__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3583__auto__ = (cljs.core.async.impl.channels.abort[(function (){var G__25485 = x__4227__auto__;
return goog.typeOf(G__25485);
})()]);
if(or__3583__auto__){
return or__3583__auto__;
} else {
var or__3583__auto____$1 = (cljs.core.async.impl.channels.abort["_"]);
if(or__3583__auto____$1){
return or__3583__auto____$1;
} else {
throw cljs.core.missing_protocol("MMC.abort",this$);
}
}
})().call(null,this$);
}
});


/**
* @constructor
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
})
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
self__.closed = true;

if(cljs.core.truth_((function (){var and__3571__auto__ = self__.buf;
if(cljs.core.truth_(and__3571__auto__)){
return (self__.puts.length === (0));
} else {
return and__3571__auto__;
}
})())){
var G__25486_25498 = self__.buf;
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(G__25486_25498) : self__.add_BANG_.call(null,G__25486_25498));
} else {
}

while(true){
var taker_25499 = self__.takes.pop();
if((taker_25499 == null)){
} else {
if(taker_25499.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var take_cb_25500 = taker_25499.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val_25501 = (cljs.core.truth_((function (){var and__3571__auto__ = self__.buf;
if(cljs.core.truth_(and__3571__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__3571__auto__;
}
})())?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
cljs.core.async.impl.dispatch.run(((function (take_cb_25500,val_25501,taker_25499,this$__$1){
return (function (){
var G__25487 = val_25501;
return (take_cb_25500.cljs$core$IFn$_invoke$arity$1 ? take_cb_25500.cljs$core$IFn$_invoke$arity$1(G__25487) : take_cb_25500.call(null,G__25487));
});})(take_cb_25500,val_25501,taker_25499,this$__$1))
);
} else {
}

continue;
}
break;
}

return null;
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if(!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))){
return null;
} else {
if((!((self__.buf == null))) && ((cljs.core.count(self__.buf) > (0)))){
var _ = handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var retval = cljs.core.async.impl.channels.box(self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null));
while(true){
if(cljs.core.truth_(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null))){
} else {
var putter_25502 = self__.puts.pop();
if((putter_25502 == null)){
} else {
var put_handler_25503 = putter_25502.handler;
var val_25504 = putter_25502.val;
if(put_handler_25503.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var put_cb_25505 = put_handler_25503.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run(((function (put_cb_25505,put_handler_25503,val_25504,putter_25502,_,retval,this$__$1){
return (function (){
var G__25488 = true;
return (put_cb_25505.cljs$core$IFn$_invoke$arity$1 ? put_cb_25505.cljs$core$IFn$_invoke$arity$1(G__25488) : put_cb_25505.call(null,G__25488));
});})(put_cb_25505,put_handler_25503,val_25504,putter_25502,_,retval,this$__$1))
);

if(cljs.core.reduced_QMARK_((function (){var G__25489 = self__.buf;
var G__25490 = val_25504;
return (self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(G__25489,G__25490) : self__.add_BANG_.call(null,G__25489,G__25490));
})())){
cljs.core.async.impl.channels.abort(this$__$1);
} else {
}
} else {
}

continue;
}
}
break;
}

return retval;
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_(putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit(putter.handler);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run(((function (put_cb,putter,this$__$1){
return (function (){
var G__25491 = true;
return (put_cb.cljs$core$IFn$_invoke$arity$1 ? put_cb.cljs$core$IFn$_invoke$arity$1(G__25491) : put_cb.call(null,G__25491));
});})(put_cb,putter,this$__$1))
);

return cljs.core.async.impl.channels.box(putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
var G__25492_25506 = self__.buf;
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(G__25492_25506) : self__.add_BANG_.call(null,G__25492_25506));
} else {
}

if(cljs.core.truth_((function (){var and__3571__auto__ = handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__3571__auto__)){
return handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__3571__auto__;
}
})())){
var has_val = (function (){var and__3571__auto__ = self__.buf;
if(cljs.core.truth_(and__3571__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__3571__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
return cljs.core.async.impl.channels.box(val);
} else {
return null;
}
} else {
if((self__.dirty_takes > cljs.core.async.impl.channels.MAX_DIRTY)){
self__.dirty_takes = (0);

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
self__.dirty_takes = (self__.dirty_takes + (1));
}


self__.takes.unbounded_unshift(handler);

return null;
}
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;

var closed__$1 = self__.closed;
if((closed__$1) || (!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)))){
return cljs.core.async.impl.channels.box(!(closed__$1));
} else {
if(cljs.core.truth_((function (){var and__3571__auto__ = self__.buf;
if(cljs.core.truth_(and__3571__auto__)){
return cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null));
} else {
return and__3571__auto__;
}
})())){
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

var done_QMARK_ = cljs.core.reduced_QMARK_((function (){var G__25493 = self__.buf;
var G__25494 = val;
return (self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(G__25493,G__25494) : self__.add_BANG_.call(null,G__25493,G__25494));
})());
while(true){
if(((self__.takes.length > (0))) && ((cljs.core.count(self__.buf) > (0)))){
var taker_25507 = self__.takes.pop();
if(taker_25507.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var take_cb_25508 = taker_25507.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val_25509__$1 = self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null);
cljs.core.async.impl.dispatch.run(((function (take_cb_25508,val_25509__$1,taker_25507,done_QMARK_,closed__$1,this$__$1){
return (function (){
var G__25495 = val_25509__$1;
return (take_cb_25508.cljs$core$IFn$_invoke$arity$1 ? take_cb_25508.cljs$core$IFn$_invoke$arity$1(G__25495) : take_cb_25508.call(null,G__25495));
});})(take_cb_25508,val_25509__$1,taker_25507,done_QMARK_,closed__$1,this$__$1))
);
} else {
continue;
}
} else {
}
break;
}

if(done_QMARK_){
cljs.core.async.impl.channels.abort(this$__$1);
} else {
}

return cljs.core.async.impl.channels.box(true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(taker.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = cljs.core.async.impl.protocols.commit(taker);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run(((function (take_cb,taker,closed__$1,this$__$1){
return (function (){
var G__25496 = val;
return (take_cb.cljs$core$IFn$_invoke$arity$1 ? take_cb.cljs$core$IFn$_invoke$arity$1(G__25496) : take_cb.call(null,G__25496));
});})(take_cb,taker,closed__$1,this$__$1))
);

return cljs.core.async.impl.channels.box(true);
} else {
if((self__.dirty_puts > cljs.core.async.impl.channels.MAX_DIRTY)){
self__.dirty_puts = (0);

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
self__.dirty_puts = (self__.dirty_puts + (1));
}


self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));

return null;
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = true;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_25510 = self__.puts.pop();
if((putter_25510 == null)){
} else {
var put_handler_25511 = putter_25510.handler;
var val_25512 = putter_25510.val;
if(put_handler_25511.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var put_cb_25513 = put_handler_25511.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
cljs.core.async.impl.dispatch.run(((function (put_cb_25513,put_handler_25511,val_25512,putter_25510,this$__$1){
return (function (){
var G__25497 = true;
return (put_cb_25513.cljs$core$IFn$_invoke$arity$1 ? put_cb_25513.cljs$core$IFn$_invoke$arity$1(G__25497) : put_cb_25513.call(null,G__25497));
});})(put_cb_25513,put_handler_25511,val_25512,putter_25510,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly(false));

return cljs.core.async.impl.protocols.close_BANG_(this$__$1);
});

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__4170__auto__,writer__4171__auto__,opt__4172__auto__){
return cljs.core._write(writer__4171__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});

cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function __GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function handle(buf,exh,t){
var else$ = (function (){var or__3583__auto__ = exh;
if(cljs.core.truth_(or__3583__auto__)){
return or__3583__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})().call(null,t);
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2(buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function() {
var chan = null;
var chan__1 = (function (buf){
return chan.cljs$core$IFn$_invoke$arity$2(buf,null);
});
var chan__2 = (function (buf,xform){
return chan.cljs$core$IFn$_invoke$arity$3(buf,xform,null);
});
var chan__3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer((32)),(0),cljs.core.async.impl.buffers.ring_buffer((32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?(function (){var G__25525 = cljs.core.async.impl.protocols.add_BANG_;
return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__25525) : xform.call(null,G__25525));
})():cljs.core.async.impl.protocols.add_BANG_);
return ((function (add_BANG_){
return (function() {
var G__25531 = null;
var G__25531__1 = (function (buf__$1){
try{var G__25527 = buf__$1;
return (add_BANG_.cljs$core$IFn$_invoke$arity$1 ? add_BANG_.cljs$core$IFn$_invoke$arity$1(G__25527) : add_BANG_.call(null,G__25527));
}catch (e25526){var t = e25526;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
var G__25531__2 = (function (buf__$1,val){
try{var G__25529 = buf__$1;
var G__25530 = val;
return (add_BANG_.cljs$core$IFn$_invoke$arity$2 ? add_BANG_.cljs$core$IFn$_invoke$arity$2(G__25529,G__25530) : add_BANG_.call(null,G__25529,G__25530));
}catch (e25528){var t = e25528;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
G__25531 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__25531__1.call(this,buf__$1);
case 2:
return G__25531__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25531.cljs$core$IFn$_invoke$arity$1 = G__25531__1;
G__25531.cljs$core$IFn$_invoke$arity$2 = G__25531__2;
return G__25531;
})()
;})(add_BANG_))
})()));
});
chan = function(buf,xform,exh){
switch(arguments.length){
case 1:
return chan__1.call(this,buf);
case 2:
return chan__2.call(this,buf,xform);
case 3:
return chan__3.call(this,buf,xform,exh);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
