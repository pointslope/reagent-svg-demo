// Compiled by ClojureScript 0.0-2816 {:elide-asserts true, :static-fns true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t21111 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21111 = (function (f,fn_handler,meta21112){
this.f = f;
this.fn_handler = fn_handler;
this.meta21112 = meta21112;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21111.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t21111.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t21111.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t21111.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21113){
var self__ = this;
var _21113__$1 = this;
return self__.meta21112;
});

cljs.core.async.t21111.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21113,meta21112__$1){
var self__ = this;
var _21113__$1 = this;
return (new cljs.core.async.t21111(self__.f,self__.fn_handler,meta21112__$1));
});

cljs.core.async.t21111.cljs$lang$type = true;

cljs.core.async.t21111.cljs$lang$ctorStr = "cljs.core.async/t21111";

cljs.core.async.t21111.cljs$lang$ctorPrWriter = (function (this__4170__auto__,writer__4171__auto__,opt__4172__auto__){
return cljs.core._write(writer__4171__auto__,"cljs.core.async/t21111");
});

cljs.core.async.__GT_t21111 = (function __GT_t21111(f__$1,fn_handler__$1,meta21112){
return (new cljs.core.async.t21111(f__$1,fn_handler__$1,meta21112));
});

}

return (new cljs.core.async.t21111(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__21115 = buff;
if(G__21115){
var bit__4264__auto__ = null;
if(cljs.core.truth_((function (){var or__3583__auto__ = bit__4264__auto__;
if(cljs.core.truth_(or__3583__auto__)){
return or__3583__auto__;
} else {
return G__21115.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__21115.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__21115);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__21115);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.cljs$core$IFn$_invoke$arity$1(null);
});
var chan__1 = (function (buf_or_n){
return chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(ret)){
var val_21132 = (function (){var G__21129 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21129) : cljs.core.deref.call(null,G__21129));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__21130_21133 = val_21132;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__21130_21133) : fn1.call(null,G__21130_21133));
} else {
cljs.core.async.impl.dispatch.run(((function (val_21132,ret){
return (function (){
var G__21131 = val_21132;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__21131) : fn1.call(null,G__21131));
});})(val_21132,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler(cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
var G__21142 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21142) : cljs.core.deref.call(null,G__21142));
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = (function (){var G__21143 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21143) : cljs.core.deref.call(null,G__21143));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__21144_21146 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__21144_21146) : fn1.call(null,G__21144_21146));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__21145 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__21145) : fn1.call(null,G__21145));
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__4470__auto___21147 = n;
var x_21148 = (0);
while(true){
if((x_21148 < n__4470__auto___21147)){
(a[x_21148] = (0));

var G__21149 = (x_21148 + (1));
x_21148 = G__21149;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__21150 = (i + (1));
i = G__21150;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = (function (){var G__21158 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21158) : cljs.core.atom.call(null,G__21158));
})();
if(typeof cljs.core.async.t21159 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21159 = (function (flag,alt_flag,meta21160){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta21160 = meta21160;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21159.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t21159.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__21162 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21162) : cljs.core.deref.call(null,G__21162));
});})(flag))
;

cljs.core.async.t21159.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__21163_21165 = self__.flag;
var G__21164_21166 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21163_21165,G__21164_21166) : cljs.core.reset_BANG_.call(null,G__21163_21165,G__21164_21166));

return true;
});})(flag))
;

cljs.core.async.t21159.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21161){
var self__ = this;
var _21161__$1 = this;
return self__.meta21160;
});})(flag))
;

cljs.core.async.t21159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21161,meta21160__$1){
var self__ = this;
var _21161__$1 = this;
return (new cljs.core.async.t21159(self__.flag,self__.alt_flag,meta21160__$1));
});})(flag))
;

cljs.core.async.t21159.cljs$lang$type = true;

cljs.core.async.t21159.cljs$lang$ctorStr = "cljs.core.async/t21159";

cljs.core.async.t21159.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4170__auto__,writer__4171__auto__,opt__4172__auto__){
return cljs.core._write(writer__4171__auto__,"cljs.core.async/t21159");
});})(flag))
;

cljs.core.async.__GT_t21159 = ((function (flag){
return (function __GT_t21159(flag__$1,alt_flag__$1,meta21160){
return (new cljs.core.async.t21159(flag__$1,alt_flag__$1,meta21160));
});})(flag))
;

}

return (new cljs.core.async.t21159(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t21170 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21170 = (function (cb,flag,alt_handler,meta21171){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta21171 = meta21171;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21170.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t21170.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t21170.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t21170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21172){
var self__ = this;
var _21172__$1 = this;
return self__.meta21171;
});

cljs.core.async.t21170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21172,meta21171__$1){
var self__ = this;
var _21172__$1 = this;
return (new cljs.core.async.t21170(self__.cb,self__.flag,self__.alt_handler,meta21171__$1));
});

cljs.core.async.t21170.cljs$lang$type = true;

cljs.core.async.t21170.cljs$lang$ctorStr = "cljs.core.async/t21170";

cljs.core.async.t21170.cljs$lang$ctorPrWriter = (function (this__4170__auto__,writer__4171__auto__,opt__4172__auto__){
return cljs.core._write(writer__4171__auto__,"cljs.core.async/t21170");
});

cljs.core.async.__GT_t21170 = (function __GT_t21170(cb__$1,flag__$1,alt_handler__$1,meta21171){
return (new cljs.core.async.t21170(cb__$1,flag__$1,alt_handler__$1,meta21171));
});

}

return (new cljs.core.async.t21170(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.constant$keyword$46.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__21180 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__21180) : port.call(null,G__21180));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__21181 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__21181) : port.call(null,G__21181));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21173_SHARP_){
var G__21182 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21173_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__21182) : fret.call(null,G__21182));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21174_SHARP_){
var G__21183 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21174_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__21183) : fret.call(null,G__21183));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__21184 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21184) : cljs.core.deref.call(null,G__21184));
})(),(function (){var or__3583__auto__ = wport;
if(cljs.core.truth_(or__3583__auto__)){
return or__3583__auto__;
} else {
return port;
}
})()], null));
} else {
var G__21185 = (i + (1));
i = G__21185;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3583__auto__ = ret;
if(cljs.core.truth_(or__3583__auto__)){
return or__3583__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$7)){
var temp__4126__auto__ = (function (){var and__3571__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__3571__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__3571__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$7.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$7], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__21186){
var map__21188 = p__21186;
var map__21188__$1 = ((cljs.core.seq_QMARK_(map__21188))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21188):map__21188);
var opts = map__21188__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__21186 = null;
if (arguments.length > 1) {
var G__21189__i = 0, G__21189__a = new Array(arguments.length -  1);
while (G__21189__i < G__21189__a.length) {G__21189__a[G__21189__i] = arguments[G__21189__i + 1]; ++G__21189__i;}
  p__21186 = new cljs.core.IndexedSeq(G__21189__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__21186);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__21190){
var ports = cljs.core.first(arglist__21190);
var p__21186 = cljs.core.rest(arglist__21190);
return alts_BANG___delegate(ports,p__21186);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__11422__auto___21288 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11422__auto___21288){
return (function (){
var f__11423__auto__ = (function (){var switch__11342__auto__ = ((function (c__11422__auto___21288){
return (function (state_21264){
var state_val_21265 = (state_21264[(1)]);
if((state_val_21265 === (7))){
var inst_21260 = (state_21264[(2)]);
var state_21264__$1 = state_21264;
var statearr_21266_21289 = state_21264__$1;
(statearr_21266_21289[(2)] = inst_21260);

(statearr_21266_21289[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21265 === (1))){
var state_21264__$1 = state_21264;
var statearr_21267_21290 = state_21264__$1;
(statearr_21267_21290[(2)] = null);

(statearr_21267_21290[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21265 === (4))){
var inst_21243 = (state_21264[(7)]);
var inst_21243__$1 = (state_21264[(2)]);
var inst_21244 = (inst_21243__$1 == null);
var state_21264__$1 = (function (){var statearr_21268 = state_21264;
(statearr_21268[(7)] = inst_21243__$1);

return statearr_21268;
})();
if(cljs.core.truth_(inst_21244)){
var statearr_21269_21291 = state_21264__$1;
(statearr_21269_21291[(1)] = (5));

} else {
var statearr_21270_21292 = state_21264__$1;
(statearr_21270_21292[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_21265 === (13))){
var state_21264__$1 = state_21264;
var statearr_21271_21293 = state_21264__$1;
(statearr_21271_21293[(2)] = null);

(statearr_21271_21293[(1)] = (14));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21265 === (6))){
var inst_21243 = (state_21264[(7)]);
var state_21264__$1 = state_21264;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21264__$1,(11),to,inst_21243);
} else {
if((state_val_21265 === (3))){
var inst_21262 = (state_21264[(2)]);
var state_21264__$1 = state_21264;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21264__$1,inst_21262);
} else {
if((state_val_21265 === (12))){
var state_21264__$1 = state_21264;
var statearr_21272_21294 = state_21264__$1;
(statearr_21272_21294[(2)] = null);

(statearr_21272_21294[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21265 === (2))){
var state_21264__$1 = state_21264;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21264__$1,(4),from);
} else {
if((state_val_21265 === (11))){
var inst_21253 = (state_21264[(2)]);
var state_21264__$1 = state_21264;
if(cljs.core.truth_(inst_21253)){
var statearr_21273_21295 = state_21264__$1;
(statearr_21273_21295[(1)] = (12));

} else {
var statearr_21274_21296 = state_21264__$1;
(statearr_21274_21296[(1)] = (13));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_21265 === (9))){
var state_21264__$1 = state_21264;
var statearr_21275_21297 = state_21264__$1;
(statearr_21275_21297[(2)] = null);

(statearr_21275_21297[(1)] = (10));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21265 === (5))){
var state_21264__$1 = state_21264;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21276_21298 = state_21264__$1;
(statearr_21276_21298[(1)] = (8));

} else {
var statearr_21277_21299 = state_21264__$1;
(statearr_21277_21299[(1)] = (9));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_21265 === (14))){
var inst_21258 = (state_21264[(2)]);
var state_21264__$1 = state_21264;
var statearr_21278_21300 = state_21264__$1;
(statearr_21278_21300[(2)] = inst_21258);

(statearr_21278_21300[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21265 === (10))){
var inst_21250 = (state_21264[(2)]);
var state_21264__$1 = state_21264;
var statearr_21279_21301 = state_21264__$1;
(statearr_21279_21301[(2)] = inst_21250);

(statearr_21279_21301[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21265 === (8))){
var inst_21247 = cljs.core.async.close_BANG_(to);
var state_21264__$1 = state_21264;
var statearr_21280_21302 = state_21264__$1;
(statearr_21280_21302[(2)] = inst_21247);

(statearr_21280_21302[(1)] = (10));


return cljs.core.constant$keyword$40;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11422__auto___21288))
;
return ((function (switch__11342__auto__,c__11422__auto___21288){
return (function() {
var state_machine__11343__auto__ = null;
var state_machine__11343__auto____0 = (function (){
var statearr_21284 = [null,null,null,null,null,null,null,null];
(statearr_21284[(0)] = state_machine__11343__auto__);

(statearr_21284[(1)] = (1));

return statearr_21284;
});
var state_machine__11343__auto____1 = (function (state_21264){
while(true){
var ret_value__11344__auto__ = (function (){try{while(true){
var result__11345__auto__ = switch__11342__auto__(state_21264);
if(cljs.core.keyword_identical_QMARK_(result__11345__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11345__auto__;
}
break;
}
}catch (e21285){if((e21285 instanceof Object)){
var ex__11346__auto__ = e21285;
var statearr_21286_21303 = state_21264;
(statearr_21286_21303[(5)] = ex__11346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21264);

return cljs.core.constant$keyword$40;
} else {
throw e21285;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11344__auto__,cljs.core.constant$keyword$40)){
var G__21304 = state_21264;
state_21264 = G__21304;
continue;
} else {
return ret_value__11344__auto__;
}
break;
}
});
state_machine__11343__auto__ = function(state_21264){
switch(arguments.length){
case 0:
return state_machine__11343__auto____0.call(this);
case 1:
return state_machine__11343__auto____1.call(this,state_21264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11343__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11343__auto____0;
state_machine__11343__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11343__auto____1;
return state_machine__11343__auto__;
})()
;})(switch__11342__auto__,c__11422__auto___21288))
})();
var state__11424__auto__ = (function (){var statearr_21287 = (function (){return (f__11423__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11423__auto__.cljs$core$IFn$_invoke$arity$0() : f__11423__auto__.call(null));
})();
(statearr_21287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11422__auto___21288);

return statearr_21287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11424__auto__);
});})(c__11422__auto___21288))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__21490){
var vec__21491 = p__21490;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21491,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21491,(1),null);
var job = vec__21491;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__11422__auto___21675 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11422__auto___21675,res,vec__21491,v,p,job,jobs,results){
return (function (){
var f__11423__auto__ = (function (){var switch__11342__auto__ = ((function (c__11422__auto___21675,res,vec__21491,v,p,job,jobs,results){
return (function (state_21496){
var state_val_21497 = (state_21496[(1)]);
if((state_val_21497 === (2))){
var inst_21493 = (state_21496[(2)]);
var inst_21494 = cljs.core.async.close_BANG_(res);
var state_21496__$1 = (function (){var statearr_21498 = state_21496;
(statearr_21498[(7)] = inst_21493);

return statearr_21498;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_21496__$1,inst_21494);
} else {
if((state_val_21497 === (1))){
var state_21496__$1 = state_21496;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21496__$1,(2),res,v);
} else {
return null;
}
}
});})(c__11422__auto___21675,res,vec__21491,v,p,job,jobs,results))
;
return ((function (switch__11342__auto__,c__11422__auto___21675,res,vec__21491,v,p,job,jobs,results){
return (function() {
var state_machine__11343__auto__ = null;
var state_machine__11343__auto____0 = (function (){
var statearr_21502 = [null,null,null,null,null,null,null,null];
(statearr_21502[(0)] = state_machine__11343__auto__);

(statearr_21502[(1)] = (1));

return statearr_21502;
});
var state_machine__11343__auto____1 = (function (state_21496){
while(true){
var ret_value__11344__auto__ = (function (){try{while(true){
var result__11345__auto__ = switch__11342__auto__(state_21496);
if(cljs.core.keyword_identical_QMARK_(result__11345__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11345__auto__;
}
break;
}
}catch (e21503){if((e21503 instanceof Object)){
var ex__11346__auto__ = e21503;
var statearr_21504_21676 = state_21496;
(statearr_21504_21676[(5)] = ex__11346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21496);

return cljs.core.constant$keyword$40;
} else {
throw e21503;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11344__auto__,cljs.core.constant$keyword$40)){
var G__21677 = state_21496;
state_21496 = G__21677;
continue;
} else {
return ret_value__11344__auto__;
}
break;
}
});
state_machine__11343__auto__ = function(state_21496){
switch(arguments.length){
case 0:
return state_machine__11343__auto____0.call(this);
case 1:
return state_machine__11343__auto____1.call(this,state_21496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11343__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11343__auto____0;
state_machine__11343__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11343__auto____1;
return state_machine__11343__auto__;
})()
;})(switch__11342__auto__,c__11422__auto___21675,res,vec__21491,v,p,job,jobs,results))
})();
var state__11424__auto__ = (function (){var statearr_21505 = (function (){return (f__11423__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11423__auto__.cljs$core$IFn$_invoke$arity$0() : f__11423__auto__.call(null));
})();
(statearr_21505[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11422__auto___21675);

return statearr_21505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11424__auto__);
});})(c__11422__auto___21675,res,vec__21491,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21506){
var vec__21507 = p__21506;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21507,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21507,(1),null);
var job = vec__21507;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__21508_21678 = v;
var G__21509_21679 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__21508_21678,G__21509_21679) : xf.call(null,G__21508_21678,G__21509_21679));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4470__auto___21680 = n;
var __21681 = (0);
while(true){
if((__21681 < n__4470__auto___21680)){
var G__21510_21682 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__21510_21682) {
case "async":
var c__11422__auto___21684 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__21681,c__11422__auto___21684,G__21510_21682,n__4470__auto___21680,jobs,results,process,async){
return (function (){
var f__11423__auto__ = (function (){var switch__11342__auto__ = ((function (__21681,c__11422__auto___21684,G__21510_21682,n__4470__auto___21680,jobs,results,process,async){
return (function (state_21523){
var state_val_21524 = (state_21523[(1)]);
if((state_val_21524 === (7))){
var inst_21519 = (state_21523[(2)]);
var state_21523__$1 = state_21523;
var statearr_21525_21685 = state_21523__$1;
(statearr_21525_21685[(2)] = inst_21519);

(statearr_21525_21685[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21524 === (6))){
var state_21523__$1 = state_21523;
var statearr_21526_21686 = state_21523__$1;
(statearr_21526_21686[(2)] = null);

(statearr_21526_21686[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21524 === (5))){
var state_21523__$1 = state_21523;
var statearr_21527_21687 = state_21523__$1;
(statearr_21527_21687[(2)] = null);

(statearr_21527_21687[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21524 === (4))){
var inst_21513 = (state_21523[(2)]);
var inst_21514 = async(inst_21513);
var state_21523__$1 = state_21523;
if(cljs.core.truth_(inst_21514)){
var statearr_21528_21688 = state_21523__$1;
(statearr_21528_21688[(1)] = (5));

} else {
var statearr_21529_21689 = state_21523__$1;
(statearr_21529_21689[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_21524 === (3))){
var inst_21521 = (state_21523[(2)]);
var state_21523__$1 = state_21523;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21523__$1,inst_21521);
} else {
if((state_val_21524 === (2))){
var state_21523__$1 = state_21523;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21523__$1,(4),jobs);
} else {
if((state_val_21524 === (1))){
var state_21523__$1 = state_21523;
var statearr_21530_21690 = state_21523__$1;
(statearr_21530_21690[(2)] = null);

(statearr_21530_21690[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
return null;
}
}
}
}
}
}
}
});})(__21681,c__11422__auto___21684,G__21510_21682,n__4470__auto___21680,jobs,results,process,async))
;
return ((function (__21681,switch__11342__auto__,c__11422__auto___21684,G__21510_21682,n__4470__auto___21680,jobs,results,process,async){
return (function() {
var state_machine__11343__auto__ = null;
var state_machine__11343__auto____0 = (function (){
var statearr_21534 = [null,null,null,null,null,null,null];
(statearr_21534[(0)] = state_machine__11343__auto__);

(statearr_21534[(1)] = (1));

return statearr_21534;
});
var state_machine__11343__auto____1 = (function (state_21523){
while(true){
var ret_value__11344__auto__ = (function (){try{while(true){
var result__11345__auto__ = switch__11342__auto__(state_21523);
if(cljs.core.keyword_identical_QMARK_(result__11345__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11345__auto__;
}
break;
}
}catch (e21535){if((e21535 instanceof Object)){
var ex__11346__auto__ = e21535;
var statearr_21536_21691 = state_21523;
(statearr_21536_21691[(5)] = ex__11346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21523);

return cljs.core.constant$keyword$40;
} else {
throw e21535;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11344__auto__,cljs.core.constant$keyword$40)){
var G__21692 = state_21523;
state_21523 = G__21692;
continue;
} else {
return ret_value__11344__auto__;
}
break;
}
});
state_machine__11343__auto__ = function(state_21523){
switch(arguments.length){
case 0:
return state_machine__11343__auto____0.call(this);
case 1:
return state_machine__11343__auto____1.call(this,state_21523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11343__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11343__auto____0;
state_machine__11343__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11343__auto____1;
return state_machine__11343__auto__;
})()
;})(__21681,switch__11342__auto__,c__11422__auto___21684,G__21510_21682,n__4470__auto___21680,jobs,results,process,async))
})();
var state__11424__auto__ = (function (){var statearr_21537 = (function (){return (f__11423__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11423__auto__.cljs$core$IFn$_invoke$arity$0() : f__11423__auto__.call(null));
})();
(statearr_21537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11422__auto___21684);

return statearr_21537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11424__auto__);
});})(__21681,c__11422__auto___21684,G__21510_21682,n__4470__auto___21680,jobs,results,process,async))
);


break;
case "compute":
var c__11422__auto___21693 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__21681,c__11422__auto___21693,G__21510_21682,n__4470__auto___21680,jobs,results,process,async){
return (function (){
var f__11423__auto__ = (function (){var switch__11342__auto__ = ((function (__21681,c__11422__auto___21693,G__21510_21682,n__4470__auto___21680,jobs,results,process,async){
return (function (state_21550){
var state_val_21551 = (state_21550[(1)]);
if((state_val_21551 === (7))){
var inst_21546 = (state_21550[(2)]);
var state_21550__$1 = state_21550;
var statearr_21552_21694 = state_21550__$1;
(statearr_21552_21694[(2)] = inst_21546);

(statearr_21552_21694[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21551 === (6))){
var state_21550__$1 = state_21550;
var statearr_21553_21695 = state_21550__$1;
(statearr_21553_21695[(2)] = null);

(statearr_21553_21695[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21551 === (5))){
var state_21550__$1 = state_21550;
var statearr_21554_21696 = state_21550__$1;
(statearr_21554_21696[(2)] = null);

(statearr_21554_21696[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21551 === (4))){
var inst_21540 = (state_21550[(2)]);
var inst_21541 = process(inst_21540);
var state_21550__$1 = state_21550;
if(cljs.core.truth_(inst_21541)){
var statearr_21555_21697 = state_21550__$1;
(statearr_21555_21697[(1)] = (5));

} else {
var statearr_21556_21698 = state_21550__$1;
(statearr_21556_21698[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_21551 === (3))){
var inst_21548 = (state_21550[(2)]);
var state_21550__$1 = state_21550;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21550__$1,inst_21548);
} else {
if((state_val_21551 === (2))){
var state_21550__$1 = state_21550;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21550__$1,(4),jobs);
} else {
if((state_val_21551 === (1))){
var state_21550__$1 = state_21550;
var statearr_21557_21699 = state_21550__$1;
(statearr_21557_21699[(2)] = null);

(statearr_21557_21699[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
return null;
}
}
}
}
}
}
}
});})(__21681,c__11422__auto___21693,G__21510_21682,n__4470__auto___21680,jobs,results,process,async))
;
return ((function (__21681,switch__11342__auto__,c__11422__auto___21693,G__21510_21682,n__4470__auto___21680,jobs,results,process,async){
return (function() {
var state_machine__11343__auto__ = null;
var state_machine__11343__auto____0 = (function (){
var statearr_21561 = [null,null,null,null,null,null,null];
(statearr_21561[(0)] = state_machine__11343__auto__);

(statearr_21561[(1)] = (1));

return statearr_21561;
});
var state_machine__11343__auto____1 = (function (state_21550){
while(true){
var ret_value__11344__auto__ = (function (){try{while(true){
var result__11345__auto__ = switch__11342__auto__(state_21550);
if(cljs.core.keyword_identical_QMARK_(result__11345__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11345__auto__;
}
break;
}
}catch (e21562){if((e21562 instanceof Object)){
var ex__11346__auto__ = e21562;
var statearr_21563_21700 = state_21550;
(statearr_21563_21700[(5)] = ex__11346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21550);

return cljs.core.constant$keyword$40;
} else {
throw e21562;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11344__auto__,cljs.core.constant$keyword$40)){
var G__21701 = state_21550;
state_21550 = G__21701;
continue;
} else {
return ret_value__11344__auto__;
}
break;
}
});
state_machine__11343__auto__ = function(state_21550){
switch(arguments.length){
case 0:
return state_machine__11343__auto____0.call(this);
case 1:
return state_machine__11343__auto____1.call(this,state_21550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11343__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11343__auto____0;
state_machine__11343__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11343__auto____1;
return state_machine__11343__auto__;
})()
;})(__21681,switch__11342__auto__,c__11422__auto___21693,G__21510_21682,n__4470__auto___21680,jobs,results,process,async))
})();
var state__11424__auto__ = (function (){var statearr_21564 = (function (){return (f__11423__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11423__auto__.cljs$core$IFn$_invoke$arity$0() : f__11423__auto__.call(null));
})();
(statearr_21564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11422__auto___21693);

return statearr_21564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11424__auto__);
});})(__21681,c__11422__auto___21693,G__21510_21682,n__4470__auto___21680,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__21702 = (__21681 + (1));
__21681 = G__21702;
continue;
} else {
}
break;
}

var c__11422__auto___21703 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11422__auto___21703,jobs,results,process,async){
return (function (){
var f__11423__auto__ = (function (){var switch__11342__auto__ = ((function (c__11422__auto___21703,jobs,results,process,async){
return (function (state_21586){
var state_val_21587 = (state_21586[(1)]);
if((state_val_21587 === (9))){
var inst_21579 = (state_21586[(2)]);
var state_21586__$1 = (function (){var statearr_21588 = state_21586;
(statearr_21588[(7)] = inst_21579);

return statearr_21588;
})();
var statearr_21589_21704 = state_21586__$1;
(statearr_21589_21704[(2)] = null);

(statearr_21589_21704[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21587 === (8))){
var inst_21572 = (state_21586[(8)]);
var inst_21577 = (state_21586[(2)]);
var state_21586__$1 = (function (){var statearr_21590 = state_21586;
(statearr_21590[(9)] = inst_21577);

return statearr_21590;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21586__$1,(9),results,inst_21572);
} else {
if((state_val_21587 === (7))){
var inst_21582 = (state_21586[(2)]);
var state_21586__$1 = state_21586;
var statearr_21591_21705 = state_21586__$1;
(statearr_21591_21705[(2)] = inst_21582);

(statearr_21591_21705[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21587 === (6))){
var inst_21572 = (state_21586[(8)]);
var inst_21567 = (state_21586[(10)]);
var inst_21572__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_21573 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21574 = [inst_21567,inst_21572__$1];
var inst_21575 = (new cljs.core.PersistentVector(null,2,(5),inst_21573,inst_21574,null));
var state_21586__$1 = (function (){var statearr_21592 = state_21586;
(statearr_21592[(8)] = inst_21572__$1);

return statearr_21592;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21586__$1,(8),jobs,inst_21575);
} else {
if((state_val_21587 === (5))){
var inst_21570 = cljs.core.async.close_BANG_(jobs);
var state_21586__$1 = state_21586;
var statearr_21593_21706 = state_21586__$1;
(statearr_21593_21706[(2)] = inst_21570);

(statearr_21593_21706[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21587 === (4))){
var inst_21567 = (state_21586[(10)]);
var inst_21567__$1 = (state_21586[(2)]);
var inst_21568 = (inst_21567__$1 == null);
var state_21586__$1 = (function (){var statearr_21594 = state_21586;
(statearr_21594[(10)] = inst_21567__$1);

return statearr_21594;
})();
if(cljs.core.truth_(inst_21568)){
var statearr_21595_21707 = state_21586__$1;
(statearr_21595_21707[(1)] = (5));

} else {
var statearr_21596_21708 = state_21586__$1;
(statearr_21596_21708[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_21587 === (3))){
var inst_21584 = (state_21586[(2)]);
var state_21586__$1 = state_21586;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21586__$1,inst_21584);
} else {
if((state_val_21587 === (2))){
var state_21586__$1 = state_21586;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21586__$1,(4),from);
} else {
if((state_val_21587 === (1))){
var state_21586__$1 = state_21586;
var statearr_21597_21709 = state_21586__$1;
(statearr_21597_21709[(2)] = null);

(statearr_21597_21709[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__11422__auto___21703,jobs,results,process,async))
;
return ((function (switch__11342__auto__,c__11422__auto___21703,jobs,results,process,async){
return (function() {
var state_machine__11343__auto__ = null;
var state_machine__11343__auto____0 = (function (){
var statearr_21601 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21601[(0)] = state_machine__11343__auto__);

(statearr_21601[(1)] = (1));

return statearr_21601;
});
var state_machine__11343__auto____1 = (function (state_21586){
while(true){
var ret_value__11344__auto__ = (function (){try{while(true){
var result__11345__auto__ = switch__11342__auto__(state_21586);
if(cljs.core.keyword_identical_QMARK_(result__11345__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11345__auto__;
}
break;
}
}catch (e21602){if((e21602 instanceof Object)){
var ex__11346__auto__ = e21602;
var statearr_21603_21710 = state_21586;
(statearr_21603_21710[(5)] = ex__11346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21586);

return cljs.core.constant$keyword$40;
} else {
throw e21602;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11344__auto__,cljs.core.constant$keyword$40)){
var G__21711 = state_21586;
state_21586 = G__21711;
continue;
} else {
return ret_value__11344__auto__;
}
break;
}
});
state_machine__11343__auto__ = function(state_21586){
switch(arguments.length){
case 0:
return state_machine__11343__auto____0.call(this);
case 1:
return state_machine__11343__auto____1.call(this,state_21586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11343__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11343__auto____0;
state_machine__11343__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11343__auto____1;
return state_machine__11343__auto__;
})()
;})(switch__11342__auto__,c__11422__auto___21703,jobs,results,process,async))
})();
var state__11424__auto__ = (function (){var statearr_21604 = (function (){return (f__11423__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11423__auto__.cljs$core$IFn$_invoke$arity$0() : f__11423__auto__.call(null));
})();
(statearr_21604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11422__auto___21703);

return statearr_21604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11424__auto__);
});})(c__11422__auto___21703,jobs,results,process,async))
);


var c__11422__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11422__auto__,jobs,results,process,async){
return (function (){
var f__11423__auto__ = (function (){var switch__11342__auto__ = ((function (c__11422__auto__,jobs,results,process,async){
return (function (state_21642){
var state_val_21643 = (state_21642[(1)]);
if((state_val_21643 === (7))){
var inst_21638 = (state_21642[(2)]);
var state_21642__$1 = state_21642;
var statearr_21644_21712 = state_21642__$1;
(statearr_21644_21712[(2)] = inst_21638);

(statearr_21644_21712[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21643 === (20))){
var state_21642__$1 = state_21642;
var statearr_21645_21713 = state_21642__$1;
(statearr_21645_21713[(2)] = null);

(statearr_21645_21713[(1)] = (21));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21643 === (1))){
var state_21642__$1 = state_21642;
var statearr_21646_21714 = state_21642__$1;
(statearr_21646_21714[(2)] = null);

(statearr_21646_21714[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21643 === (4))){
var inst_21607 = (state_21642[(7)]);
var inst_21607__$1 = (state_21642[(2)]);
var inst_21608 = (inst_21607__$1 == null);
var state_21642__$1 = (function (){var statearr_21647 = state_21642;
(statearr_21647[(7)] = inst_21607__$1);

return statearr_21647;
})();
if(cljs.core.truth_(inst_21608)){
var statearr_21648_21715 = state_21642__$1;
(statearr_21648_21715[(1)] = (5));

} else {
var statearr_21649_21716 = state_21642__$1;
(statearr_21649_21716[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_21643 === (15))){
var inst_21620 = (state_21642[(8)]);
var state_21642__$1 = state_21642;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21642__$1,(18),to,inst_21620);
} else {
if((state_val_21643 === (21))){
var inst_21633 = (state_21642[(2)]);
var state_21642__$1 = state_21642;
var statearr_21650_21717 = state_21642__$1;
(statearr_21650_21717[(2)] = inst_21633);

(statearr_21650_21717[(1)] = (13));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21643 === (13))){
var inst_21635 = (state_21642[(2)]);
var state_21642__$1 = (function (){var statearr_21651 = state_21642;
(statearr_21651[(9)] = inst_21635);

return statearr_21651;
})();
var statearr_21652_21718 = state_21642__$1;
(statearr_21652_21718[(2)] = null);

(statearr_21652_21718[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21643 === (6))){
var inst_21607 = (state_21642[(7)]);
var state_21642__$1 = state_21642;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21642__$1,(11),inst_21607);
} else {
if((state_val_21643 === (17))){
var inst_21628 = (state_21642[(2)]);
var state_21642__$1 = state_21642;
if(cljs.core.truth_(inst_21628)){
var statearr_21653_21719 = state_21642__$1;
(statearr_21653_21719[(1)] = (19));

} else {
var statearr_21654_21720 = state_21642__$1;
(statearr_21654_21720[(1)] = (20));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_21643 === (3))){
var inst_21640 = (state_21642[(2)]);
var state_21642__$1 = state_21642;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21642__$1,inst_21640);
} else {
if((state_val_21643 === (12))){
var inst_21617 = (state_21642[(10)]);
var state_21642__$1 = state_21642;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21642__$1,(14),inst_21617);
} else {
if((state_val_21643 === (2))){
var state_21642__$1 = state_21642;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21642__$1,(4),results);
} else {
if((state_val_21643 === (19))){
var state_21642__$1 = state_21642;
var statearr_21655_21721 = state_21642__$1;
(statearr_21655_21721[(2)] = null);

(statearr_21655_21721[(1)] = (12));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21643 === (11))){
var inst_21617 = (state_21642[(2)]);
var state_21642__$1 = (function (){var statearr_21656 = state_21642;
(statearr_21656[(10)] = inst_21617);

return statearr_21656;
})();
var statearr_21657_21722 = state_21642__$1;
(statearr_21657_21722[(2)] = null);

(statearr_21657_21722[(1)] = (12));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21643 === (9))){
var state_21642__$1 = state_21642;
var statearr_21658_21723 = state_21642__$1;
(statearr_21658_21723[(2)] = null);

(statearr_21658_21723[(1)] = (10));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21643 === (5))){
var state_21642__$1 = state_21642;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21659_21724 = state_21642__$1;
(statearr_21659_21724[(1)] = (8));

} else {
var statearr_21660_21725 = state_21642__$1;
(statearr_21660_21725[(1)] = (9));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_21643 === (14))){
var inst_21620 = (state_21642[(8)]);
var inst_21622 = (state_21642[(11)]);
var inst_21620__$1 = (state_21642[(2)]);
var inst_21621 = (inst_21620__$1 == null);
var inst_21622__$1 = cljs.core.not(inst_21621);
var state_21642__$1 = (function (){var statearr_21661 = state_21642;
(statearr_21661[(8)] = inst_21620__$1);

(statearr_21661[(11)] = inst_21622__$1);

return statearr_21661;
})();
if(inst_21622__$1){
var statearr_21662_21726 = state_21642__$1;
(statearr_21662_21726[(1)] = (15));

} else {
var statearr_21663_21727 = state_21642__$1;
(statearr_21663_21727[(1)] = (16));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_21643 === (16))){
var inst_21622 = (state_21642[(11)]);
var state_21642__$1 = state_21642;
var statearr_21664_21728 = state_21642__$1;
(statearr_21664_21728[(2)] = inst_21622);

(statearr_21664_21728[(1)] = (17));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21643 === (10))){
var inst_21614 = (state_21642[(2)]);
var state_21642__$1 = state_21642;
var statearr_21665_21729 = state_21642__$1;
(statearr_21665_21729[(2)] = inst_21614);

(statearr_21665_21729[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21643 === (18))){
var inst_21625 = (state_21642[(2)]);
var state_21642__$1 = state_21642;
var statearr_21666_21730 = state_21642__$1;
(statearr_21666_21730[(2)] = inst_21625);

(statearr_21666_21730[(1)] = (17));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21643 === (8))){
var inst_21611 = cljs.core.async.close_BANG_(to);
var state_21642__$1 = state_21642;
var statearr_21667_21731 = state_21642__$1;
(statearr_21667_21731[(2)] = inst_21611);

(statearr_21667_21731[(1)] = (10));


return cljs.core.constant$keyword$40;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11422__auto__,jobs,results,process,async))
;
return ((function (switch__11342__auto__,c__11422__auto__,jobs,results,process,async){
return (function() {
var state_machine__11343__auto__ = null;
var state_machine__11343__auto____0 = (function (){
var statearr_21671 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21671[(0)] = state_machine__11343__auto__);

(statearr_21671[(1)] = (1));

return statearr_21671;
});
var state_machine__11343__auto____1 = (function (state_21642){
while(true){
var ret_value__11344__auto__ = (function (){try{while(true){
var result__11345__auto__ = switch__11342__auto__(state_21642);
if(cljs.core.keyword_identical_QMARK_(result__11345__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11345__auto__;
}
break;
}
}catch (e21672){if((e21672 instanceof Object)){
var ex__11346__auto__ = e21672;
var statearr_21673_21732 = state_21642;
(statearr_21673_21732[(5)] = ex__11346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21642);

return cljs.core.constant$keyword$40;
} else {
throw e21672;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11344__auto__,cljs.core.constant$keyword$40)){
var G__21733 = state_21642;
state_21642 = G__21733;
continue;
} else {
return ret_value__11344__auto__;
}
break;
}
});
state_machine__11343__auto__ = function(state_21642){
switch(arguments.length){
case 0:
return state_machine__11343__auto____0.call(this);
case 1:
return state_machine__11343__auto____1.call(this,state_21642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11343__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11343__auto____0;
state_machine__11343__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11343__auto____1;
return state_machine__11343__auto__;
})()
;})(switch__11342__auto__,c__11422__auto__,jobs,results,process,async))
})();
var state__11424__auto__ = (function (){var statearr_21674 = (function (){return (f__11423__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11423__auto__.cljs$core$IFn$_invoke$arity$0() : f__11423__auto__.call(null));
})();
(statearr_21674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11422__auto__);

return statearr_21674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11424__auto__);
});})(c__11422__auto__,jobs,results,process,async))
);

return c__11422__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.constant$keyword$47);
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.constant$keyword$48);
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__11422__auto___21856 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11422__auto___21856,tc,fc){
return (function (){
var f__11423__auto__ = (function (){var switch__11342__auto__ = ((function (c__11422__auto___21856,tc,fc){
return (function (state_21830){
var state_val_21831 = (state_21830[(1)]);
if((state_val_21831 === (7))){
var inst_21826 = (state_21830[(2)]);
var state_21830__$1 = state_21830;
var statearr_21832_21857 = state_21830__$1;
(statearr_21832_21857[(2)] = inst_21826);

(statearr_21832_21857[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21831 === (1))){
var state_21830__$1 = state_21830;
var statearr_21833_21858 = state_21830__$1;
(statearr_21833_21858[(2)] = null);

(statearr_21833_21858[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21831 === (4))){
var inst_21807 = (state_21830[(7)]);
var inst_21807__$1 = (state_21830[(2)]);
var inst_21808 = (inst_21807__$1 == null);
var state_21830__$1 = (function (){var statearr_21834 = state_21830;
(statearr_21834[(7)] = inst_21807__$1);

return statearr_21834;
})();
if(cljs.core.truth_(inst_21808)){
var statearr_21835_21859 = state_21830__$1;
(statearr_21835_21859[(1)] = (5));

} else {
var statearr_21836_21860 = state_21830__$1;
(statearr_21836_21860[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_21831 === (13))){
var state_21830__$1 = state_21830;
var statearr_21837_21861 = state_21830__$1;
(statearr_21837_21861[(2)] = null);

(statearr_21837_21861[(1)] = (14));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21831 === (6))){
var inst_21807 = (state_21830[(7)]);
var inst_21813 = (function (){var G__21838 = inst_21807;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__21838) : p.call(null,G__21838));
})();
var state_21830__$1 = state_21830;
if(cljs.core.truth_(inst_21813)){
var statearr_21839_21862 = state_21830__$1;
(statearr_21839_21862[(1)] = (9));

} else {
var statearr_21840_21863 = state_21830__$1;
(statearr_21840_21863[(1)] = (10));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_21831 === (3))){
var inst_21828 = (state_21830[(2)]);
var state_21830__$1 = state_21830;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21830__$1,inst_21828);
} else {
if((state_val_21831 === (12))){
var state_21830__$1 = state_21830;
var statearr_21841_21864 = state_21830__$1;
(statearr_21841_21864[(2)] = null);

(statearr_21841_21864[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21831 === (2))){
var state_21830__$1 = state_21830;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21830__$1,(4),ch);
} else {
if((state_val_21831 === (11))){
var inst_21807 = (state_21830[(7)]);
var inst_21817 = (state_21830[(2)]);
var state_21830__$1 = state_21830;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21830__$1,(8),inst_21817,inst_21807);
} else {
if((state_val_21831 === (9))){
var state_21830__$1 = state_21830;
var statearr_21842_21865 = state_21830__$1;
(statearr_21842_21865[(2)] = tc);

(statearr_21842_21865[(1)] = (11));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21831 === (5))){
var inst_21810 = cljs.core.async.close_BANG_(tc);
var inst_21811 = cljs.core.async.close_BANG_(fc);
var state_21830__$1 = (function (){var statearr_21843 = state_21830;
(statearr_21843[(8)] = inst_21810);

return statearr_21843;
})();
var statearr_21844_21866 = state_21830__$1;
(statearr_21844_21866[(2)] = inst_21811);

(statearr_21844_21866[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21831 === (14))){
var inst_21824 = (state_21830[(2)]);
var state_21830__$1 = state_21830;
var statearr_21845_21867 = state_21830__$1;
(statearr_21845_21867[(2)] = inst_21824);

(statearr_21845_21867[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21831 === (10))){
var state_21830__$1 = state_21830;
var statearr_21846_21868 = state_21830__$1;
(statearr_21846_21868[(2)] = fc);

(statearr_21846_21868[(1)] = (11));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21831 === (8))){
var inst_21819 = (state_21830[(2)]);
var state_21830__$1 = state_21830;
if(cljs.core.truth_(inst_21819)){
var statearr_21847_21869 = state_21830__$1;
(statearr_21847_21869[(1)] = (12));

} else {
var statearr_21848_21870 = state_21830__$1;
(statearr_21848_21870[(1)] = (13));

}

return cljs.core.constant$keyword$40;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11422__auto___21856,tc,fc))
;
return ((function (switch__11342__auto__,c__11422__auto___21856,tc,fc){
return (function() {
var state_machine__11343__auto__ = null;
var state_machine__11343__auto____0 = (function (){
var statearr_21852 = [null,null,null,null,null,null,null,null,null];
(statearr_21852[(0)] = state_machine__11343__auto__);

(statearr_21852[(1)] = (1));

return statearr_21852;
});
var state_machine__11343__auto____1 = (function (state_21830){
while(true){
var ret_value__11344__auto__ = (function (){try{while(true){
var result__11345__auto__ = switch__11342__auto__(state_21830);
if(cljs.core.keyword_identical_QMARK_(result__11345__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11345__auto__;
}
break;
}
}catch (e21853){if((e21853 instanceof Object)){
var ex__11346__auto__ = e21853;
var statearr_21854_21871 = state_21830;
(statearr_21854_21871[(5)] = ex__11346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21830);

return cljs.core.constant$keyword$40;
} else {
throw e21853;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11344__auto__,cljs.core.constant$keyword$40)){
var G__21872 = state_21830;
state_21830 = G__21872;
continue;
} else {
return ret_value__11344__auto__;
}
break;
}
});
state_machine__11343__auto__ = function(state_21830){
switch(arguments.length){
case 0:
return state_machine__11343__auto____0.call(this);
case 1:
return state_machine__11343__auto____1.call(this,state_21830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11343__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11343__auto____0;
state_machine__11343__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11343__auto____1;
return state_machine__11343__auto__;
})()
;})(switch__11342__auto__,c__11422__auto___21856,tc,fc))
})();
var state__11424__auto__ = (function (){var statearr_21855 = (function (){return (f__11423__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11423__auto__.cljs$core$IFn$_invoke$arity$0() : f__11423__auto__.call(null));
})();
(statearr_21855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11422__auto___21856);

return statearr_21855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11424__auto__);
});})(c__11422__auto___21856,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__11422__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11422__auto__){
return (function (){
var f__11423__auto__ = (function (){var switch__11342__auto__ = ((function (c__11422__auto__){
return (function (state_21921){
var state_val_21922 = (state_21921[(1)]);
if((state_val_21922 === (7))){
var inst_21917 = (state_21921[(2)]);
var state_21921__$1 = state_21921;
var statearr_21923_21941 = state_21921__$1;
(statearr_21923_21941[(2)] = inst_21917);

(statearr_21923_21941[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21922 === (6))){
var inst_21910 = (state_21921[(7)]);
var inst_21907 = (state_21921[(8)]);
var inst_21914 = (function (){var G__21924 = inst_21907;
var G__21925 = inst_21910;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__21924,G__21925) : f.call(null,G__21924,G__21925));
})();
var inst_21907__$1 = inst_21914;
var state_21921__$1 = (function (){var statearr_21926 = state_21921;
(statearr_21926[(8)] = inst_21907__$1);

return statearr_21926;
})();
var statearr_21927_21942 = state_21921__$1;
(statearr_21927_21942[(2)] = null);

(statearr_21927_21942[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21922 === (5))){
var inst_21907 = (state_21921[(8)]);
var state_21921__$1 = state_21921;
var statearr_21928_21943 = state_21921__$1;
(statearr_21928_21943[(2)] = inst_21907);

(statearr_21928_21943[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21922 === (4))){
var inst_21910 = (state_21921[(7)]);
var inst_21910__$1 = (state_21921[(2)]);
var inst_21911 = (inst_21910__$1 == null);
var state_21921__$1 = (function (){var statearr_21929 = state_21921;
(statearr_21929[(7)] = inst_21910__$1);

return statearr_21929;
})();
if(cljs.core.truth_(inst_21911)){
var statearr_21930_21944 = state_21921__$1;
(statearr_21930_21944[(1)] = (5));

} else {
var statearr_21931_21945 = state_21921__$1;
(statearr_21931_21945[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_21922 === (3))){
var inst_21919 = (state_21921[(2)]);
var state_21921__$1 = state_21921;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21921__$1,inst_21919);
} else {
if((state_val_21922 === (2))){
var state_21921__$1 = state_21921;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21921__$1,(4),ch);
} else {
if((state_val_21922 === (1))){
var inst_21907 = init;
var state_21921__$1 = (function (){var statearr_21932 = state_21921;
(statearr_21932[(8)] = inst_21907);

return statearr_21932;
})();
var statearr_21933_21946 = state_21921__$1;
(statearr_21933_21946[(2)] = null);

(statearr_21933_21946[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
return null;
}
}
}
}
}
}
}
});})(c__11422__auto__))
;
return ((function (switch__11342__auto__,c__11422__auto__){
return (function() {
var state_machine__11343__auto__ = null;
var state_machine__11343__auto____0 = (function (){
var statearr_21937 = [null,null,null,null,null,null,null,null,null];
(statearr_21937[(0)] = state_machine__11343__auto__);

(statearr_21937[(1)] = (1));

return statearr_21937;
});
var state_machine__11343__auto____1 = (function (state_21921){
while(true){
var ret_value__11344__auto__ = (function (){try{while(true){
var result__11345__auto__ = switch__11342__auto__(state_21921);
if(cljs.core.keyword_identical_QMARK_(result__11345__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11345__auto__;
}
break;
}
}catch (e21938){if((e21938 instanceof Object)){
var ex__11346__auto__ = e21938;
var statearr_21939_21947 = state_21921;
(statearr_21939_21947[(5)] = ex__11346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21921);

return cljs.core.constant$keyword$40;
} else {
throw e21938;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11344__auto__,cljs.core.constant$keyword$40)){
var G__21948 = state_21921;
state_21921 = G__21948;
continue;
} else {
return ret_value__11344__auto__;
}
break;
}
});
state_machine__11343__auto__ = function(state_21921){
switch(arguments.length){
case 0:
return state_machine__11343__auto____0.call(this);
case 1:
return state_machine__11343__auto____1.call(this,state_21921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11343__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11343__auto____0;
state_machine__11343__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11343__auto____1;
return state_machine__11343__auto__;
})()
;})(switch__11342__auto__,c__11422__auto__))
})();
var state__11424__auto__ = (function (){var statearr_21940 = (function (){return (f__11423__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11423__auto__.cljs$core$IFn$_invoke$arity$0() : f__11423__auto__.call(null));
})();
(statearr_21940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11422__auto__);

return statearr_21940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11424__auto__);
});})(c__11422__auto__))
);

return c__11422__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__11422__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11422__auto__){
return (function (){
var f__11423__auto__ = (function (){var switch__11342__auto__ = ((function (c__11422__auto__){
return (function (state_22025){
var state_val_22026 = (state_22025[(1)]);
if((state_val_22026 === (7))){
var inst_22007 = (state_22025[(2)]);
var state_22025__$1 = state_22025;
var statearr_22027_22050 = state_22025__$1;
(statearr_22027_22050[(2)] = inst_22007);

(statearr_22027_22050[(1)] = (6));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22026 === (1))){
var inst_22001 = cljs.core.seq(coll);
var inst_22002 = inst_22001;
var state_22025__$1 = (function (){var statearr_22028 = state_22025;
(statearr_22028[(7)] = inst_22002);

return statearr_22028;
})();
var statearr_22029_22051 = state_22025__$1;
(statearr_22029_22051[(2)] = null);

(statearr_22029_22051[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22026 === (4))){
var inst_22002 = (state_22025[(7)]);
var inst_22005 = cljs.core.first(inst_22002);
var state_22025__$1 = state_22025;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22025__$1,(7),ch,inst_22005);
} else {
if((state_val_22026 === (13))){
var inst_22019 = (state_22025[(2)]);
var state_22025__$1 = state_22025;
var statearr_22030_22052 = state_22025__$1;
(statearr_22030_22052[(2)] = inst_22019);

(statearr_22030_22052[(1)] = (10));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22026 === (6))){
var inst_22010 = (state_22025[(2)]);
var state_22025__$1 = state_22025;
if(cljs.core.truth_(inst_22010)){
var statearr_22031_22053 = state_22025__$1;
(statearr_22031_22053[(1)] = (8));

} else {
var statearr_22032_22054 = state_22025__$1;
(statearr_22032_22054[(1)] = (9));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22026 === (3))){
var inst_22023 = (state_22025[(2)]);
var state_22025__$1 = state_22025;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22025__$1,inst_22023);
} else {
if((state_val_22026 === (12))){
var state_22025__$1 = state_22025;
var statearr_22033_22055 = state_22025__$1;
(statearr_22033_22055[(2)] = null);

(statearr_22033_22055[(1)] = (13));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22026 === (2))){
var inst_22002 = (state_22025[(7)]);
var state_22025__$1 = state_22025;
if(cljs.core.truth_(inst_22002)){
var statearr_22034_22056 = state_22025__$1;
(statearr_22034_22056[(1)] = (4));

} else {
var statearr_22035_22057 = state_22025__$1;
(statearr_22035_22057[(1)] = (5));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22026 === (11))){
var inst_22016 = cljs.core.async.close_BANG_(ch);
var state_22025__$1 = state_22025;
var statearr_22036_22058 = state_22025__$1;
(statearr_22036_22058[(2)] = inst_22016);

(statearr_22036_22058[(1)] = (13));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22026 === (9))){
var state_22025__$1 = state_22025;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22037_22059 = state_22025__$1;
(statearr_22037_22059[(1)] = (11));

} else {
var statearr_22038_22060 = state_22025__$1;
(statearr_22038_22060[(1)] = (12));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22026 === (5))){
var inst_22002 = (state_22025[(7)]);
var state_22025__$1 = state_22025;
var statearr_22039_22061 = state_22025__$1;
(statearr_22039_22061[(2)] = inst_22002);

(statearr_22039_22061[(1)] = (6));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22026 === (10))){
var inst_22021 = (state_22025[(2)]);
var state_22025__$1 = state_22025;
var statearr_22040_22062 = state_22025__$1;
(statearr_22040_22062[(2)] = inst_22021);

(statearr_22040_22062[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22026 === (8))){
var inst_22002 = (state_22025[(7)]);
var inst_22012 = cljs.core.next(inst_22002);
var inst_22002__$1 = inst_22012;
var state_22025__$1 = (function (){var statearr_22041 = state_22025;
(statearr_22041[(7)] = inst_22002__$1);

return statearr_22041;
})();
var statearr_22042_22063 = state_22025__$1;
(statearr_22042_22063[(2)] = null);

(statearr_22042_22063[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11422__auto__))
;
return ((function (switch__11342__auto__,c__11422__auto__){
return (function() {
var state_machine__11343__auto__ = null;
var state_machine__11343__auto____0 = (function (){
var statearr_22046 = [null,null,null,null,null,null,null,null];
(statearr_22046[(0)] = state_machine__11343__auto__);

(statearr_22046[(1)] = (1));

return statearr_22046;
});
var state_machine__11343__auto____1 = (function (state_22025){
while(true){
var ret_value__11344__auto__ = (function (){try{while(true){
var result__11345__auto__ = switch__11342__auto__(state_22025);
if(cljs.core.keyword_identical_QMARK_(result__11345__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11345__auto__;
}
break;
}
}catch (e22047){if((e22047 instanceof Object)){
var ex__11346__auto__ = e22047;
var statearr_22048_22064 = state_22025;
(statearr_22048_22064[(5)] = ex__11346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22025);

return cljs.core.constant$keyword$40;
} else {
throw e22047;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11344__auto__,cljs.core.constant$keyword$40)){
var G__22065 = state_22025;
state_22025 = G__22065;
continue;
} else {
return ret_value__11344__auto__;
}
break;
}
});
state_machine__11343__auto__ = function(state_22025){
switch(arguments.length){
case 0:
return state_machine__11343__auto____0.call(this);
case 1:
return state_machine__11343__auto____1.call(this,state_22025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11343__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11343__auto____0;
state_machine__11343__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11343__auto____1;
return state_machine__11343__auto__;
})()
;})(switch__11342__auto__,c__11422__auto__))
})();
var state__11424__auto__ = (function (){var statearr_22049 = (function (){return (f__11423__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11423__auto__.cljs$core$IFn$_invoke$arity$0() : f__11423__auto__.call(null));
})();
(statearr_22049[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11422__auto__);

return statearr_22049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11424__auto__);
});})(c__11422__auto__))
);

return c__11422__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj22067 = {};
return obj22067;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3571__auto__ = _;
if(and__3571__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3571__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4227__auto__ = (((_ == null))?null:_);
return (function (){var or__3583__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__22071 = x__4227__auto__;
return goog.typeOf(G__22071);
})()]);
if(or__3583__auto__){
return or__3583__auto__;
} else {
var or__3583__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3583__auto____$1){
return or__3583__auto____$1;
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj22073 = {};
return obj22073;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3571__auto__ = m;
if(and__3571__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3571__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4227__auto__ = (((m == null))?null:m);
return (function (){var or__3583__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__22077 = x__4227__auto__;
return goog.typeOf(G__22077);
})()]);
if(or__3583__auto__){
return or__3583__auto__;
} else {
var or__3583__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3583__auto____$1){
return or__3583__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3571__auto__ = m;
if(and__3571__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3571__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4227__auto__ = (((m == null))?null:m);
return (function (){var or__3583__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__22081 = x__4227__auto__;
return goog.typeOf(G__22081);
})()]);
if(or__3583__auto__){
return or__3583__auto__;
} else {
var or__3583__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3583__auto____$1){
return or__3583__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3571__auto__ = m;
if(and__3571__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3571__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4227__auto__ = (((m == null))?null:m);
return (function (){var or__3583__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__22085 = x__4227__auto__;
return goog.typeOf(G__22085);
})()]);
if(or__3583__auto__){
return or__3583__auto__;
} else {
var or__3583__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3583__auto____$1){
return or__3583__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = (function (){var G__22315 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22315) : cljs.core.atom.call(null,G__22315));
})();
var m = (function (){
if(typeof cljs.core.async.t22316 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22316 = (function (cs,ch,mult,meta22317){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta22317 = meta22317;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22316.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t22316.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t22316.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t22316.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22319_22544 = self__.cs;
var G__22320_22545 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22319_22544,G__22320_22545) : cljs.core.reset_BANG_.call(null,G__22319_22544,G__22320_22545));

return null;
});})(cs))
;

cljs.core.async.t22316.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t22316.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t22316.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22318){
var self__ = this;
var _22318__$1 = this;
return self__.meta22317;
});})(cs))
;

cljs.core.async.t22316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22318,meta22317__$1){
var self__ = this;
var _22318__$1 = this;
return (new cljs.core.async.t22316(self__.cs,self__.ch,self__.mult,meta22317__$1));
});})(cs))
;

cljs.core.async.t22316.cljs$lang$type = true;

cljs.core.async.t22316.cljs$lang$ctorStr = "cljs.core.async/t22316";

cljs.core.async.t22316.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4170__auto__,writer__4171__auto__,opt__4172__auto__){
return cljs.core._write(writer__4171__auto__,"cljs.core.async/t22316");
});})(cs))
;

cljs.core.async.__GT_t22316 = ((function (cs){
return (function __GT_t22316(cs__$1,ch__$1,mult__$1,meta22317){
return (new cljs.core.async.t22316(cs__$1,ch__$1,mult__$1,meta22317));
});})(cs))
;

}

return (new cljs.core.async.t22316(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__22321 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22321) : cljs.core.atom.call(null,G__22321));
})();
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__11422__auto___22546 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11422__auto___22546,cs,m,dchan,dctr,done){
return (function (){
var f__11423__auto__ = (function (){var switch__11342__auto__ = ((function (c__11422__auto___22546,cs,m,dchan,dctr,done){
return (function (state_22452){
var state_val_22453 = (state_22452[(1)]);
if((state_val_22453 === (7))){
var inst_22448 = (state_22452[(2)]);
var state_22452__$1 = state_22452;
var statearr_22454_22547 = state_22452__$1;
(statearr_22454_22547[(2)] = inst_22448);

(statearr_22454_22547[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22453 === (20))){
var inst_22353 = (state_22452[(7)]);
var inst_22363 = cljs.core.first(inst_22353);
var inst_22364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22363,(0),null);
var inst_22365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22363,(1),null);
var state_22452__$1 = (function (){var statearr_22455 = state_22452;
(statearr_22455[(8)] = inst_22364);

return statearr_22455;
})();
if(cljs.core.truth_(inst_22365)){
var statearr_22456_22548 = state_22452__$1;
(statearr_22456_22548[(1)] = (22));

} else {
var statearr_22457_22549 = state_22452__$1;
(statearr_22457_22549[(1)] = (23));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22453 === (27))){
var inst_22393 = (state_22452[(9)]);
var inst_22324 = (state_22452[(10)]);
var inst_22400 = (state_22452[(11)]);
var inst_22395 = (state_22452[(12)]);
var inst_22400__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_22393,inst_22395);
var inst_22401 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_22400__$1,inst_22324,done);
var state_22452__$1 = (function (){var statearr_22458 = state_22452;
(statearr_22458[(11)] = inst_22400__$1);

return statearr_22458;
})();
if(cljs.core.truth_(inst_22401)){
var statearr_22459_22550 = state_22452__$1;
(statearr_22459_22550[(1)] = (30));

} else {
var statearr_22460_22551 = state_22452__$1;
(statearr_22460_22551[(1)] = (31));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22453 === (1))){
var state_22452__$1 = state_22452;
var statearr_22461_22552 = state_22452__$1;
(statearr_22461_22552[(2)] = null);

(statearr_22461_22552[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22453 === (24))){
var inst_22353 = (state_22452[(7)]);
var inst_22370 = (state_22452[(2)]);
var inst_22371 = cljs.core.next(inst_22353);
var inst_22333 = inst_22371;
var inst_22334 = null;
var inst_22335 = (0);
var inst_22336 = (0);
var state_22452__$1 = (function (){var statearr_22462 = state_22452;
(statearr_22462[(13)] = inst_22335);

(statearr_22462[(14)] = inst_22334);

(statearr_22462[(15)] = inst_22333);

(statearr_22462[(16)] = inst_22336);

(statearr_22462[(17)] = inst_22370);

return statearr_22462;
})();
var statearr_22463_22553 = state_22452__$1;
(statearr_22463_22553[(2)] = null);

(statearr_22463_22553[(1)] = (8));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22453 === (39))){
var state_22452__$1 = state_22452;
var statearr_22467_22554 = state_22452__$1;
(statearr_22467_22554[(2)] = null);

(statearr_22467_22554[(1)] = (41));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22453 === (4))){
var inst_22324 = (state_22452[(10)]);
var inst_22324__$1 = (state_22452[(2)]);
var inst_22325 = (inst_22324__$1 == null);
var state_22452__$1 = (function (){var statearr_22468 = state_22452;
(statearr_22468[(10)] = inst_22324__$1);

return statearr_22468;
})();
if(cljs.core.truth_(inst_22325)){
var statearr_22469_22555 = state_22452__$1;
(statearr_22469_22555[(1)] = (5));

} else {
var statearr_22470_22556 = state_22452__$1;
(statearr_22470_22556[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22453 === (15))){
var inst_22335 = (state_22452[(13)]);
var inst_22334 = (state_22452[(14)]);
var inst_22333 = (state_22452[(15)]);
var inst_22336 = (state_22452[(16)]);
var inst_22349 = (state_22452[(2)]);
var inst_22350 = (inst_22336 + (1));
var tmp22464 = inst_22335;
var tmp22465 = inst_22334;
var tmp22466 = inst_22333;
var inst_22333__$1 = tmp22466;
var inst_22334__$1 = tmp22465;
var inst_22335__$1 = tmp22464;
var inst_22336__$1 = inst_22350;
var state_22452__$1 = (function (){var statearr_22471 = state_22452;
(statearr_22471[(13)] = inst_22335__$1);

(statearr_22471[(14)] = inst_22334__$1);

(statearr_22471[(18)] = inst_22349);

(statearr_22471[(15)] = inst_22333__$1);

(statearr_22471[(16)] = inst_22336__$1);

return statearr_22471;
})();
var statearr_22472_22557 = state_22452__$1;
(statearr_22472_22557[(2)] = null);

(statearr_22472_22557[(1)] = (8));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22453 === (21))){
var inst_22374 = (state_22452[(2)]);
var state_22452__$1 = state_22452;
var statearr_22476_22558 = state_22452__$1;
(statearr_22476_22558[(2)] = inst_22374);

(statearr_22476_22558[(1)] = (18));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22453 === (31))){
var inst_22400 = (state_22452[(11)]);
var inst_22404 = done(null);
var inst_22405 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_22400);
var state_22452__$1 = (function (){var statearr_22477 = state_22452;
(statearr_22477[(19)] = inst_22404);

return statearr_22477;
})();
var statearr_22478_22559 = state_22452__$1;
(statearr_22478_22559[(2)] = inst_22405);

(statearr_22478_22559[(1)] = (32));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22453 === (32))){
var inst_22394 = (state_22452[(20)]);
var inst_22393 = (state_22452[(9)]);
var inst_22392 = (state_22452[(21)]);
var inst_22395 = (state_22452[(12)]);
var inst_22407 = (state_22452[(2)]);
var inst_22408 = (inst_22395 + (1));
var tmp22473 = inst_22394;
var tmp22474 = inst_22393;
var tmp22475 = inst_22392;
var inst_22392__$1 = tmp22475;
var inst_22393__$1 = tmp22474;
var inst_22394__$1 = tmp22473;
var inst_22395__$1 = inst_22408;
var state_22452__$1 = (function (){var statearr_22479 = state_22452;
(statearr_22479[(20)] = inst_22394__$1);

(statearr_22479[(9)] = inst_22393__$1);

(statearr_22479[(21)] = inst_22392__$1);

(statearr_22479[(12)] = inst_22395__$1);

(statearr_22479[(22)] = inst_22407);

return statearr_22479;
})();
var statearr_22480_22560 = state_22452__$1;
(statearr_22480_22560[(2)] = null);

(statearr_22480_22560[(1)] = (25));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22453 === (40))){
var inst_22420 = (state_22452[(23)]);
var inst_22424 = done(null);
var inst_22425 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_22420);
var state_22452__$1 = (function (){var statearr_22481 = state_22452;
(statearr_22481[(24)] = inst_22424);

return statearr_22481;
})();
var statearr_22482_22561 = state_22452__$1;
(statearr_22482_22561[(2)] = inst_22425);

(statearr_22482_22561[(1)] = (41));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22453 === (33))){
var inst_22411 = (state_22452[(25)]);
var inst_22413 = cljs.core.chunked_seq_QMARK_(inst_22411);
var state_22452__$1 = state_22452;
if(inst_22413){
var statearr_22483_22562 = state_22452__$1;
(statearr_22483_22562[(1)] = (36));

} else {
var statearr_22484_22563 = state_22452__$1;
(statearr_22484_22563[(1)] = (37));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22453 === (13))){
var inst_22343 = (state_22452[(26)]);
var inst_22346 = cljs.core.async.close_BANG_(inst_22343);
var state_22452__$1 = state_22452;
var statearr_22485_22564 = state_22452__$1;
(statearr_22485_22564[(2)] = inst_22346);

(statearr_22485_22564[(1)] = (15));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22453 === (22))){
var inst_22364 = (state_22452[(8)]);
var inst_22367 = cljs.core.async.close_BANG_(inst_22364);
var state_22452__$1 = state_22452;
var statearr_22486_22565 = state_22452__$1;
(statearr_22486_22565[(2)] = inst_22367);

(statearr_22486_22565[(1)] = (24));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22453 === (36))){
var inst_22411 = (state_22452[(25)]);
var inst_22415 = cljs.core.chunk_first(inst_22411);
var inst_22416 = cljs.core.chunk_rest(inst_22411);
var inst_22417 = cljs.core.count(inst_22415);
var inst_22392 = inst_22416;
var inst_22393 = inst_22415;
var inst_22394 = inst_22417;
var inst_22395 = (0);
var state_22452__$1 = (function (){var statearr_22487 = state_22452;
(statearr_22487[(20)] = inst_22394);

(statearr_22487[(9)] = inst_22393);

(statearr_22487[(21)] = inst_22392);

(statearr_22487[(12)] = inst_22395);

return statearr_22487;
})();
var statearr_22488_22566 = state_22452__$1;
(statearr_22488_22566[(2)] = null);

(statearr_22488_22566[(1)] = (25));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22453 === (41))){
var inst_22411 = (state_22452[(25)]);
var inst_22427 = (state_22452[(2)]);
var inst_22428 = cljs.core.next(inst_22411);
var inst_22392 = inst_22428;
var inst_22393 = null;
var inst_22394 = (0);
var inst_22395 = (0);
var state_22452__$1 = (function (){var statearr_22489 = state_22452;
(statearr_22489[(20)] = inst_22394);

(statearr_22489[(9)] = inst_22393);

(statearr_22489[(21)] = inst_22392);

(statearr_22489[(12)] = inst_22395);

(statearr_22489[(27)] = inst_22427);

return statearr_22489;
})();
var statearr_22490_22567 = state_22452__$1;
(statearr_22490_22567[(2)] = null);

(statearr_22490_22567[(1)] = (25));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22453 === (43))){
var state_22452__$1 = state_22452;
var statearr_22491_22568 = state_22452__$1;
(statearr_22491_22568[(2)] = null);

(statearr_22491_22568[(1)] = (44));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22453 === (29))){
var inst_22436 = (state_22452[(2)]);
var state_22452__$1 = state_22452;
var statearr_22492_22569 = state_22452__$1;
(statearr_22492_22569[(2)] = inst_22436);

(statearr_22492_22569[(1)] = (26));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22453 === (44))){
var inst_22445 = (state_22452[(2)]);
var state_22452__$1 = (function (){var statearr_22493 = state_22452;
(statearr_22493[(28)] = inst_22445);

return statearr_22493;
})();
var statearr_22494_22570 = state_22452__$1;
(statearr_22494_22570[(2)] = null);

(statearr_22494_22570[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22453 === (6))){
var inst_22384 = (state_22452[(29)]);
var inst_22383 = (function (){var G__22495 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22495) : cljs.core.deref.call(null,G__22495));
})();
var inst_22384__$1 = cljs.core.keys(inst_22383);
var inst_22385 = cljs.core.count(inst_22384__$1);
var inst_22386 = (function (){var G__22496 = dctr;
var G__22497 = inst_22385;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22496,G__22497) : cljs.core.reset_BANG_.call(null,G__22496,G__22497));
})();
var inst_22391 = cljs.core.seq(inst_22384__$1);
var inst_22392 = inst_22391;
var inst_22393 = null;
var inst_22394 = (0);
var inst_22395 = (0);
var state_22452__$1 = (function (){var statearr_22498 = state_22452;
(statearr_22498[(20)] = inst_22394);

(statearr_22498[(9)] = inst_22393);

(statearr_22498[(21)] = inst_22392);

(statearr_22498[(29)] = inst_22384__$1);

(statearr_22498[(12)] = inst_22395);

(statearr_22498[(30)] = inst_22386);

return statearr_22498;
})();
var statearr_22499_22571 = state_22452__$1;
(statearr_22499_22571[(2)] = null);

(statearr_22499_22571[(1)] = (25));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22453 === (28))){
var inst_22392 = (state_22452[(21)]);
var inst_22411 = (state_22452[(25)]);
var inst_22411__$1 = cljs.core.seq(inst_22392);
var state_22452__$1 = (function (){var statearr_22500 = state_22452;
(statearr_22500[(25)] = inst_22411__$1);

return statearr_22500;
})();
if(inst_22411__$1){
var statearr_22501_22572 = state_22452__$1;
(statearr_22501_22572[(1)] = (33));

} else {
var statearr_22502_22573 = state_22452__$1;
(statearr_22502_22573[(1)] = (34));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22453 === (25))){
var inst_22394 = (state_22452[(20)]);
var inst_22395 = (state_22452[(12)]);
var inst_22397 = (inst_22395 < inst_22394);
var inst_22398 = inst_22397;
var state_22452__$1 = state_22452;
if(cljs.core.truth_(inst_22398)){
var statearr_22503_22574 = state_22452__$1;
(statearr_22503_22574[(1)] = (27));

} else {
var statearr_22504_22575 = state_22452__$1;
(statearr_22504_22575[(1)] = (28));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22453 === (34))){
var state_22452__$1 = state_22452;
var statearr_22505_22576 = state_22452__$1;
(statearr_22505_22576[(2)] = null);

(statearr_22505_22576[(1)] = (35));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22453 === (17))){
var state_22452__$1 = state_22452;
var statearr_22506_22577 = state_22452__$1;
(statearr_22506_22577[(2)] = null);

(statearr_22506_22577[(1)] = (18));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22453 === (3))){
var inst_22450 = (state_22452[(2)]);
var state_22452__$1 = state_22452;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22452__$1,inst_22450);
} else {
if((state_val_22453 === (12))){
var inst_22379 = (state_22452[(2)]);
var state_22452__$1 = state_22452;
var statearr_22507_22578 = state_22452__$1;
(statearr_22507_22578[(2)] = inst_22379);

(statearr_22507_22578[(1)] = (9));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22453 === (2))){
var state_22452__$1 = state_22452;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22452__$1,(4),ch);
} else {
if((state_val_22453 === (23))){
var state_22452__$1 = state_22452;
var statearr_22508_22579 = state_22452__$1;
(statearr_22508_22579[(2)] = null);

(statearr_22508_22579[(1)] = (24));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22453 === (35))){
var inst_22434 = (state_22452[(2)]);
var state_22452__$1 = state_22452;
var statearr_22509_22580 = state_22452__$1;
(statearr_22509_22580[(2)] = inst_22434);

(statearr_22509_22580[(1)] = (29));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22453 === (19))){
var inst_22353 = (state_22452[(7)]);
var inst_22357 = cljs.core.chunk_first(inst_22353);
var inst_22358 = cljs.core.chunk_rest(inst_22353);
var inst_22359 = cljs.core.count(inst_22357);
var inst_22333 = inst_22358;
var inst_22334 = inst_22357;
var inst_22335 = inst_22359;
var inst_22336 = (0);
var state_22452__$1 = (function (){var statearr_22510 = state_22452;
(statearr_22510[(13)] = inst_22335);

(statearr_22510[(14)] = inst_22334);

(statearr_22510[(15)] = inst_22333);

(statearr_22510[(16)] = inst_22336);

return statearr_22510;
})();
var statearr_22511_22581 = state_22452__$1;
(statearr_22511_22581[(2)] = null);

(statearr_22511_22581[(1)] = (8));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22453 === (11))){
var inst_22333 = (state_22452[(15)]);
var inst_22353 = (state_22452[(7)]);
var inst_22353__$1 = cljs.core.seq(inst_22333);
var state_22452__$1 = (function (){var statearr_22512 = state_22452;
(statearr_22512[(7)] = inst_22353__$1);

return statearr_22512;
})();
if(inst_22353__$1){
var statearr_22513_22582 = state_22452__$1;
(statearr_22513_22582[(1)] = (16));

} else {
var statearr_22514_22583 = state_22452__$1;
(statearr_22514_22583[(1)] = (17));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22453 === (9))){
var inst_22381 = (state_22452[(2)]);
var state_22452__$1 = state_22452;
var statearr_22515_22584 = state_22452__$1;
(statearr_22515_22584[(2)] = inst_22381);

(statearr_22515_22584[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22453 === (5))){
var inst_22331 = (function (){var G__22516 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22516) : cljs.core.deref.call(null,G__22516));
})();
var inst_22332 = cljs.core.seq(inst_22331);
var inst_22333 = inst_22332;
var inst_22334 = null;
var inst_22335 = (0);
var inst_22336 = (0);
var state_22452__$1 = (function (){var statearr_22517 = state_22452;
(statearr_22517[(13)] = inst_22335);

(statearr_22517[(14)] = inst_22334);

(statearr_22517[(15)] = inst_22333);

(statearr_22517[(16)] = inst_22336);

return statearr_22517;
})();
var statearr_22518_22585 = state_22452__$1;
(statearr_22518_22585[(2)] = null);

(statearr_22518_22585[(1)] = (8));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22453 === (14))){
var state_22452__$1 = state_22452;
var statearr_22519_22586 = state_22452__$1;
(statearr_22519_22586[(2)] = null);

(statearr_22519_22586[(1)] = (15));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22453 === (45))){
var inst_22442 = (state_22452[(2)]);
var state_22452__$1 = state_22452;
var statearr_22520_22587 = state_22452__$1;
(statearr_22520_22587[(2)] = inst_22442);

(statearr_22520_22587[(1)] = (44));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22453 === (26))){
var inst_22384 = (state_22452[(29)]);
var inst_22438 = (state_22452[(2)]);
var inst_22439 = cljs.core.seq(inst_22384);
var state_22452__$1 = (function (){var statearr_22521 = state_22452;
(statearr_22521[(31)] = inst_22438);

return statearr_22521;
})();
if(inst_22439){
var statearr_22522_22588 = state_22452__$1;
(statearr_22522_22588[(1)] = (42));

} else {
var statearr_22523_22589 = state_22452__$1;
(statearr_22523_22589[(1)] = (43));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22453 === (16))){
var inst_22353 = (state_22452[(7)]);
var inst_22355 = cljs.core.chunked_seq_QMARK_(inst_22353);
var state_22452__$1 = state_22452;
if(inst_22355){
var statearr_22524_22590 = state_22452__$1;
(statearr_22524_22590[(1)] = (19));

} else {
var statearr_22525_22591 = state_22452__$1;
(statearr_22525_22591[(1)] = (20));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22453 === (38))){
var inst_22431 = (state_22452[(2)]);
var state_22452__$1 = state_22452;
var statearr_22526_22592 = state_22452__$1;
(statearr_22526_22592[(2)] = inst_22431);

(statearr_22526_22592[(1)] = (35));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22453 === (30))){
var state_22452__$1 = state_22452;
var statearr_22527_22593 = state_22452__$1;
(statearr_22527_22593[(2)] = null);

(statearr_22527_22593[(1)] = (32));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22453 === (10))){
var inst_22334 = (state_22452[(14)]);
var inst_22336 = (state_22452[(16)]);
var inst_22342 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_22334,inst_22336);
var inst_22343 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22342,(0),null);
var inst_22344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22342,(1),null);
var state_22452__$1 = (function (){var statearr_22528 = state_22452;
(statearr_22528[(26)] = inst_22343);

return statearr_22528;
})();
if(cljs.core.truth_(inst_22344)){
var statearr_22529_22594 = state_22452__$1;
(statearr_22529_22594[(1)] = (13));

} else {
var statearr_22530_22595 = state_22452__$1;
(statearr_22530_22595[(1)] = (14));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22453 === (18))){
var inst_22377 = (state_22452[(2)]);
var state_22452__$1 = state_22452;
var statearr_22531_22596 = state_22452__$1;
(statearr_22531_22596[(2)] = inst_22377);

(statearr_22531_22596[(1)] = (12));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22453 === (42))){
var state_22452__$1 = state_22452;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22452__$1,(45),dchan);
} else {
if((state_val_22453 === (37))){
var inst_22324 = (state_22452[(10)]);
var inst_22411 = (state_22452[(25)]);
var inst_22420 = (state_22452[(23)]);
var inst_22420__$1 = cljs.core.first(inst_22411);
var inst_22421 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_22420__$1,inst_22324,done);
var state_22452__$1 = (function (){var statearr_22532 = state_22452;
(statearr_22532[(23)] = inst_22420__$1);

return statearr_22532;
})();
if(cljs.core.truth_(inst_22421)){
var statearr_22533_22597 = state_22452__$1;
(statearr_22533_22597[(1)] = (39));

} else {
var statearr_22534_22598 = state_22452__$1;
(statearr_22534_22598[(1)] = (40));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22453 === (8))){
var inst_22335 = (state_22452[(13)]);
var inst_22336 = (state_22452[(16)]);
var inst_22338 = (inst_22336 < inst_22335);
var inst_22339 = inst_22338;
var state_22452__$1 = state_22452;
if(cljs.core.truth_(inst_22339)){
var statearr_22535_22599 = state_22452__$1;
(statearr_22535_22599[(1)] = (10));

} else {
var statearr_22536_22600 = state_22452__$1;
(statearr_22536_22600[(1)] = (11));

}

return cljs.core.constant$keyword$40;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11422__auto___22546,cs,m,dchan,dctr,done))
;
return ((function (switch__11342__auto__,c__11422__auto___22546,cs,m,dchan,dctr,done){
return (function() {
var state_machine__11343__auto__ = null;
var state_machine__11343__auto____0 = (function (){
var statearr_22540 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22540[(0)] = state_machine__11343__auto__);

(statearr_22540[(1)] = (1));

return statearr_22540;
});
var state_machine__11343__auto____1 = (function (state_22452){
while(true){
var ret_value__11344__auto__ = (function (){try{while(true){
var result__11345__auto__ = switch__11342__auto__(state_22452);
if(cljs.core.keyword_identical_QMARK_(result__11345__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11345__auto__;
}
break;
}
}catch (e22541){if((e22541 instanceof Object)){
var ex__11346__auto__ = e22541;
var statearr_22542_22601 = state_22452;
(statearr_22542_22601[(5)] = ex__11346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22452);

return cljs.core.constant$keyword$40;
} else {
throw e22541;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11344__auto__,cljs.core.constant$keyword$40)){
var G__22602 = state_22452;
state_22452 = G__22602;
continue;
} else {
return ret_value__11344__auto__;
}
break;
}
});
state_machine__11343__auto__ = function(state_22452){
switch(arguments.length){
case 0:
return state_machine__11343__auto____0.call(this);
case 1:
return state_machine__11343__auto____1.call(this,state_22452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11343__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11343__auto____0;
state_machine__11343__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11343__auto____1;
return state_machine__11343__auto__;
})()
;})(switch__11342__auto__,c__11422__auto___22546,cs,m,dchan,dctr,done))
})();
var state__11424__auto__ = (function (){var statearr_22543 = (function (){return (f__11423__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11423__auto__.cljs$core$IFn$_invoke$arity$0() : f__11423__auto__.call(null));
})();
(statearr_22543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11422__auto___22546);

return statearr_22543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11424__auto__);
});})(c__11422__auto___22546,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

cljs.core.async.Mix = (function (){var obj22607 = {};
return obj22607;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3571__auto__ = m;
if(and__3571__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3571__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4227__auto__ = (((m == null))?null:m);
return (function (){var or__3583__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__22611 = x__4227__auto__;
return goog.typeOf(G__22611);
})()]);
if(or__3583__auto__){
return or__3583__auto__;
} else {
var or__3583__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3583__auto____$1){
return or__3583__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3571__auto__ = m;
if(and__3571__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3571__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4227__auto__ = (((m == null))?null:m);
return (function (){var or__3583__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__22615 = x__4227__auto__;
return goog.typeOf(G__22615);
})()]);
if(or__3583__auto__){
return or__3583__auto__;
} else {
var or__3583__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3583__auto____$1){
return or__3583__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3571__auto__ = m;
if(and__3571__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3571__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4227__auto__ = (((m == null))?null:m);
return (function (){var or__3583__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__22619 = x__4227__auto__;
return goog.typeOf(G__22619);
})()]);
if(or__3583__auto__){
return or__3583__auto__;
} else {
var or__3583__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3583__auto____$1){
return or__3583__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3571__auto__ = m;
if(and__3571__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3571__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4227__auto__ = (((m == null))?null:m);
return (function (){var or__3583__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__22623 = x__4227__auto__;
return goog.typeOf(G__22623);
})()]);
if(or__3583__auto__){
return or__3583__auto__;
} else {
var or__3583__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3583__auto____$1){
return or__3583__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3571__auto__ = m;
if(and__3571__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3571__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4227__auto__ = (((m == null))?null:m);
return (function (){var or__3583__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__22627 = x__4227__auto__;
return goog.typeOf(G__22627);
})()]);
if(or__3583__auto__){
return or__3583__auto__;
} else {
var or__3583__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3583__auto____$1){
return or__3583__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__22628){
var map__22634 = p__22628;
var map__22634__$1 = ((cljs.core.seq_QMARK_(map__22634))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22634):map__22634);
var opts = map__22634__$1;
var statearr_22635_22639 = state;
(statearr_22635_22639[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__22634,map__22634__$1,opts){
return (function (val){
var statearr_22636_22640 = state;
(statearr_22636_22640[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__22634,map__22634__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_22637_22641 = state;
(statearr_22637_22641[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__22638 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22638) : cljs.core.deref.call(null,G__22638));
})());


return cljs.core.constant$keyword$40;
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__22628 = null;
if (arguments.length > 3) {
var G__22642__i = 0, G__22642__a = new Array(arguments.length -  3);
while (G__22642__i < G__22642__a.length) {G__22642__a[G__22642__i] = arguments[G__22642__i + 3]; ++G__22642__i;}
  p__22628 = new cljs.core.IndexedSeq(G__22642__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__22628);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__22643){
var state = cljs.core.first(arglist__22643);
arglist__22643 = cljs.core.next(arglist__22643);
var cont_block = cljs.core.first(arglist__22643);
arglist__22643 = cljs.core.next(arglist__22643);
var ports = cljs.core.first(arglist__22643);
var p__22628 = cljs.core.rest(arglist__22643);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__22628);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = (function (){var G__22776 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22776) : cljs.core.atom.call(null,G__22776));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$49,null,cljs.core.constant$keyword$50,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$51);
var solo_mode = (function (){var G__22777 = cljs.core.constant$keyword$50;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22777) : cljs.core.atom.call(null,G__22777));
})();
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((function (){var G__22778 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__22778) : attr.call(null,G__22778));
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (function (){var G__22779 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22779) : cljs.core.deref.call(null,G__22779));
})();
var mode = (function (){var G__22780 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22780) : cljs.core.deref.call(null,G__22780));
})();
var solos = pick(cljs.core.constant$keyword$51,chs);
var pauses = pick(cljs.core.constant$keyword$49,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$52,solos,cljs.core.constant$keyword$53,pick(cljs.core.constant$keyword$50,chs),cljs.core.constant$keyword$54,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$49)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t22781 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22781 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22782){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta22782 = meta22782;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22781.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t22781.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22781.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22781.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22784_22908 = self__.cs;
var G__22785_22909 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22784_22908,G__22785_22909) : cljs.core.reset_BANG_.call(null,G__22784_22908,G__22785_22909));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22781.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22781.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;

var G__22786_22910 = self__.solo_mode;
var G__22787_22911 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22786_22910,G__22787_22911) : cljs.core.reset_BANG_.call(null,G__22786_22910,G__22787_22911));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22781.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t22781.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22781.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22783){
var self__ = this;
var _22783__$1 = this;
return self__.meta22782;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22781.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22783,meta22782__$1){
var self__ = this;
var _22783__$1 = this;
return (new cljs.core.async.t22781(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22782__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22781.cljs$lang$type = true;

cljs.core.async.t22781.cljs$lang$ctorStr = "cljs.core.async/t22781";

cljs.core.async.t22781.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4170__auto__,writer__4171__auto__,opt__4172__auto__){
return cljs.core._write(writer__4171__auto__,"cljs.core.async/t22781");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t22781 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t22781(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22782){
return (new cljs.core.async.t22781(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22782));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t22781(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11422__auto___22912 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11422__auto___22912,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__11423__auto__ = (function (){var switch__11342__auto__ = ((function (c__11422__auto___22912,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22859){
var state_val_22860 = (state_22859[(1)]);
if((state_val_22860 === (7))){
var inst_22801 = (state_22859[(7)]);
var inst_22806 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_22801);
var state_22859__$1 = state_22859;
var statearr_22861_22913 = state_22859__$1;
(statearr_22861_22913[(2)] = inst_22806);

(statearr_22861_22913[(1)] = (9));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22860 === (20))){
var inst_22816 = (state_22859[(8)]);
var state_22859__$1 = state_22859;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22859__$1,(23),out,inst_22816);
} else {
if((state_val_22860 === (1))){
var inst_22791 = (state_22859[(9)]);
var inst_22791__$1 = calc_state();
var inst_22792 = cljs.core.seq_QMARK_(inst_22791__$1);
var state_22859__$1 = (function (){var statearr_22862 = state_22859;
(statearr_22862[(9)] = inst_22791__$1);

return statearr_22862;
})();
if(inst_22792){
var statearr_22863_22914 = state_22859__$1;
(statearr_22863_22914[(1)] = (2));

} else {
var statearr_22864_22915 = state_22859__$1;
(statearr_22864_22915[(1)] = (3));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22860 === (24))){
var inst_22809 = (state_22859[(10)]);
var inst_22801 = inst_22809;
var state_22859__$1 = (function (){var statearr_22865 = state_22859;
(statearr_22865[(7)] = inst_22801);

return statearr_22865;
})();
var statearr_22866_22916 = state_22859__$1;
(statearr_22866_22916[(2)] = null);

(statearr_22866_22916[(1)] = (5));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22860 === (4))){
var inst_22791 = (state_22859[(9)]);
var inst_22797 = (state_22859[(2)]);
var inst_22798 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22797,cljs.core.constant$keyword$54);
var inst_22799 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22797,cljs.core.constant$keyword$53);
var inst_22800 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22797,cljs.core.constant$keyword$52);
var inst_22801 = inst_22791;
var state_22859__$1 = (function (){var statearr_22867 = state_22859;
(statearr_22867[(11)] = inst_22799);

(statearr_22867[(12)] = inst_22798);

(statearr_22867[(7)] = inst_22801);

(statearr_22867[(13)] = inst_22800);

return statearr_22867;
})();
var statearr_22868_22917 = state_22859__$1;
(statearr_22868_22917[(2)] = null);

(statearr_22868_22917[(1)] = (5));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22860 === (15))){
var state_22859__$1 = state_22859;
var statearr_22869_22918 = state_22859__$1;
(statearr_22869_22918[(2)] = null);

(statearr_22869_22918[(1)] = (16));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22860 === (21))){
var inst_22809 = (state_22859[(10)]);
var inst_22801 = inst_22809;
var state_22859__$1 = (function (){var statearr_22870 = state_22859;
(statearr_22870[(7)] = inst_22801);

return statearr_22870;
})();
var statearr_22871_22919 = state_22859__$1;
(statearr_22871_22919[(2)] = null);

(statearr_22871_22919[(1)] = (5));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22860 === (13))){
var inst_22855 = (state_22859[(2)]);
var state_22859__$1 = state_22859;
var statearr_22872_22920 = state_22859__$1;
(statearr_22872_22920[(2)] = inst_22855);

(statearr_22872_22920[(1)] = (6));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22860 === (22))){
var inst_22853 = (state_22859[(2)]);
var state_22859__$1 = state_22859;
var statearr_22873_22921 = state_22859__$1;
(statearr_22873_22921[(2)] = inst_22853);

(statearr_22873_22921[(1)] = (13));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22860 === (6))){
var inst_22857 = (state_22859[(2)]);
var state_22859__$1 = state_22859;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22859__$1,inst_22857);
} else {
if((state_val_22860 === (25))){
var state_22859__$1 = state_22859;
var statearr_22874_22922 = state_22859__$1;
(statearr_22874_22922[(2)] = null);

(statearr_22874_22922[(1)] = (26));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22860 === (17))){
var inst_22832 = (state_22859[(14)]);
var state_22859__$1 = state_22859;
var statearr_22875_22923 = state_22859__$1;
(statearr_22875_22923[(2)] = inst_22832);

(statearr_22875_22923[(1)] = (19));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22860 === (3))){
var inst_22791 = (state_22859[(9)]);
var state_22859__$1 = state_22859;
var statearr_22876_22924 = state_22859__$1;
(statearr_22876_22924[(2)] = inst_22791);

(statearr_22876_22924[(1)] = (4));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22860 === (12))){
var inst_22832 = (state_22859[(14)]);
var inst_22817 = (state_22859[(15)]);
var inst_22812 = (state_22859[(16)]);
var inst_22832__$1 = (function (){var G__22877 = inst_22817;
return (inst_22812.cljs$core$IFn$_invoke$arity$1 ? inst_22812.cljs$core$IFn$_invoke$arity$1(G__22877) : inst_22812.call(null,G__22877));
})();
var state_22859__$1 = (function (){var statearr_22878 = state_22859;
(statearr_22878[(14)] = inst_22832__$1);

return statearr_22878;
})();
if(cljs.core.truth_(inst_22832__$1)){
var statearr_22879_22925 = state_22859__$1;
(statearr_22879_22925[(1)] = (17));

} else {
var statearr_22880_22926 = state_22859__$1;
(statearr_22880_22926[(1)] = (18));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22860 === (2))){
var inst_22791 = (state_22859[(9)]);
var inst_22794 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_22791);
var state_22859__$1 = state_22859;
var statearr_22881_22927 = state_22859__$1;
(statearr_22881_22927[(2)] = inst_22794);

(statearr_22881_22927[(1)] = (4));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22860 === (23))){
var inst_22844 = (state_22859[(2)]);
var state_22859__$1 = state_22859;
if(cljs.core.truth_(inst_22844)){
var statearr_22882_22928 = state_22859__$1;
(statearr_22882_22928[(1)] = (24));

} else {
var statearr_22883_22929 = state_22859__$1;
(statearr_22883_22929[(1)] = (25));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22860 === (19))){
var inst_22841 = (state_22859[(2)]);
var state_22859__$1 = state_22859;
if(cljs.core.truth_(inst_22841)){
var statearr_22884_22930 = state_22859__$1;
(statearr_22884_22930[(1)] = (20));

} else {
var statearr_22885_22931 = state_22859__$1;
(statearr_22885_22931[(1)] = (21));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22860 === (11))){
var inst_22816 = (state_22859[(8)]);
var inst_22822 = (inst_22816 == null);
var state_22859__$1 = state_22859;
if(cljs.core.truth_(inst_22822)){
var statearr_22886_22932 = state_22859__$1;
(statearr_22886_22932[(1)] = (14));

} else {
var statearr_22887_22933 = state_22859__$1;
(statearr_22887_22933[(1)] = (15));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22860 === (9))){
var inst_22809 = (state_22859[(10)]);
var inst_22809__$1 = (state_22859[(2)]);
var inst_22810 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22809__$1,cljs.core.constant$keyword$54);
var inst_22811 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22809__$1,cljs.core.constant$keyword$53);
var inst_22812 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22809__$1,cljs.core.constant$keyword$52);
var state_22859__$1 = (function (){var statearr_22888 = state_22859;
(statearr_22888[(10)] = inst_22809__$1);

(statearr_22888[(16)] = inst_22812);

(statearr_22888[(17)] = inst_22811);

return statearr_22888;
})();
return cljs.core.async.ioc_alts_BANG_(state_22859__$1,(10),inst_22810);
} else {
if((state_val_22860 === (5))){
var inst_22801 = (state_22859[(7)]);
var inst_22804 = cljs.core.seq_QMARK_(inst_22801);
var state_22859__$1 = state_22859;
if(inst_22804){
var statearr_22889_22934 = state_22859__$1;
(statearr_22889_22934[(1)] = (7));

} else {
var statearr_22890_22935 = state_22859__$1;
(statearr_22890_22935[(1)] = (8));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22860 === (14))){
var inst_22817 = (state_22859[(15)]);
var inst_22824 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_22817);
var state_22859__$1 = state_22859;
var statearr_22891_22936 = state_22859__$1;
(statearr_22891_22936[(2)] = inst_22824);

(statearr_22891_22936[(1)] = (16));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22860 === (26))){
var inst_22849 = (state_22859[(2)]);
var state_22859__$1 = state_22859;
var statearr_22892_22937 = state_22859__$1;
(statearr_22892_22937[(2)] = inst_22849);

(statearr_22892_22937[(1)] = (22));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22860 === (16))){
var inst_22827 = (state_22859[(2)]);
var inst_22828 = calc_state();
var inst_22801 = inst_22828;
var state_22859__$1 = (function (){var statearr_22893 = state_22859;
(statearr_22893[(7)] = inst_22801);

(statearr_22893[(18)] = inst_22827);

return statearr_22893;
})();
var statearr_22894_22938 = state_22859__$1;
(statearr_22894_22938[(2)] = null);

(statearr_22894_22938[(1)] = (5));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22860 === (10))){
var inst_22816 = (state_22859[(8)]);
var inst_22817 = (state_22859[(15)]);
var inst_22815 = (state_22859[(2)]);
var inst_22816__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22815,(0),null);
var inst_22817__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22815,(1),null);
var inst_22818 = (inst_22816__$1 == null);
var inst_22819 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22817__$1,change);
var inst_22820 = (inst_22818) || (inst_22819);
var state_22859__$1 = (function (){var statearr_22895 = state_22859;
(statearr_22895[(8)] = inst_22816__$1);

(statearr_22895[(15)] = inst_22817__$1);

return statearr_22895;
})();
if(cljs.core.truth_(inst_22820)){
var statearr_22896_22939 = state_22859__$1;
(statearr_22896_22939[(1)] = (11));

} else {
var statearr_22897_22940 = state_22859__$1;
(statearr_22897_22940[(1)] = (12));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22860 === (18))){
var inst_22817 = (state_22859[(15)]);
var inst_22812 = (state_22859[(16)]);
var inst_22811 = (state_22859[(17)]);
var inst_22836 = cljs.core.empty_QMARK_(inst_22812);
var inst_22837 = (function (){var G__22898 = inst_22817;
return (inst_22811.cljs$core$IFn$_invoke$arity$1 ? inst_22811.cljs$core$IFn$_invoke$arity$1(G__22898) : inst_22811.call(null,G__22898));
})();
var inst_22838 = cljs.core.not(inst_22837);
var inst_22839 = (inst_22836) && (inst_22838);
var state_22859__$1 = state_22859;
var statearr_22899_22941 = state_22859__$1;
(statearr_22899_22941[(2)] = inst_22839);

(statearr_22899_22941[(1)] = (19));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22860 === (8))){
var inst_22801 = (state_22859[(7)]);
var state_22859__$1 = state_22859;
var statearr_22900_22942 = state_22859__$1;
(statearr_22900_22942[(2)] = inst_22801);

(statearr_22900_22942[(1)] = (9));


return cljs.core.constant$keyword$40;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11422__auto___22912,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__11342__auto__,c__11422__auto___22912,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__11343__auto__ = null;
var state_machine__11343__auto____0 = (function (){
var statearr_22904 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22904[(0)] = state_machine__11343__auto__);

(statearr_22904[(1)] = (1));

return statearr_22904;
});
var state_machine__11343__auto____1 = (function (state_22859){
while(true){
var ret_value__11344__auto__ = (function (){try{while(true){
var result__11345__auto__ = switch__11342__auto__(state_22859);
if(cljs.core.keyword_identical_QMARK_(result__11345__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11345__auto__;
}
break;
}
}catch (e22905){if((e22905 instanceof Object)){
var ex__11346__auto__ = e22905;
var statearr_22906_22943 = state_22859;
(statearr_22906_22943[(5)] = ex__11346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22859);

return cljs.core.constant$keyword$40;
} else {
throw e22905;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11344__auto__,cljs.core.constant$keyword$40)){
var G__22944 = state_22859;
state_22859 = G__22944;
continue;
} else {
return ret_value__11344__auto__;
}
break;
}
});
state_machine__11343__auto__ = function(state_22859){
switch(arguments.length){
case 0:
return state_machine__11343__auto____0.call(this);
case 1:
return state_machine__11343__auto____1.call(this,state_22859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11343__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11343__auto____0;
state_machine__11343__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11343__auto____1;
return state_machine__11343__auto__;
})()
;})(switch__11342__auto__,c__11422__auto___22912,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__11424__auto__ = (function (){var statearr_22907 = (function (){return (f__11423__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11423__auto__.cljs$core$IFn$_invoke$arity$0() : f__11423__auto__.call(null));
})();
(statearr_22907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11422__auto___22912);

return statearr_22907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11424__auto__);
});})(c__11422__auto___22912,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

cljs.core.async.Pub = (function (){var obj22946 = {};
return obj22946;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3571__auto__ = p;
if(and__3571__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3571__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4227__auto__ = (((p == null))?null:p);
return (function (){var or__3583__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__22950 = x__4227__auto__;
return goog.typeOf(G__22950);
})()]);
if(or__3583__auto__){
return or__3583__auto__;
} else {
var or__3583__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3583__auto____$1){
return or__3583__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3571__auto__ = p;
if(and__3571__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3571__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4227__auto__ = (((p == null))?null:p);
return (function (){var or__3583__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__22954 = x__4227__auto__;
return goog.typeOf(G__22954);
})()]);
if(or__3583__auto__){
return or__3583__auto__;
} else {
var or__3583__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3583__auto____$1){
return or__3583__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__3571__auto__ = p;
if(and__3571__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3571__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4227__auto__ = (((p == null))?null:p);
return (function (){var or__3583__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__22960 = x__4227__auto__;
return goog.typeOf(G__22960);
})()]);
if(or__3583__auto__){
return or__3583__auto__;
} else {
var or__3583__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3583__auto____$1){
return or__3583__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3571__auto__ = p;
if(and__3571__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3571__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4227__auto__ = (((p == null))?null:p);
return (function (){var or__3583__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__22962 = x__4227__auto__;
return goog.typeOf(G__22962);
})()]);
if(or__3583__auto__){
return or__3583__auto__;
} else {
var or__3583__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3583__auto____$1){
return or__3583__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__23101 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23101) : cljs.core.atom.call(null,G__23101));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__3583__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__23103 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23103) : cljs.core.deref.call(null,G__23103));
})(),topic);
if(cljs.core.truth_(or__3583__auto__)){
return or__3583__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3583__auto__,mults){
return (function (p1__22963_SHARP_){
if(cljs.core.truth_((function (){var G__23104 = topic;
return (p1__22963_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__22963_SHARP_.cljs$core$IFn$_invoke$arity$1(G__23104) : p1__22963_SHARP_.call(null,G__23104));
})())){
return p1__22963_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__22963_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__23105 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__23105) : buf_fn.call(null,G__23105));
})())));
}
});})(or__3583__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t23106 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23106 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta23107){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta23107 = meta23107;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23106.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t23106.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__23109 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__23109) : self__.ensure_mult.call(null,G__23109));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t23106.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__23110 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23110) : cljs.core.deref.call(null,G__23110));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t23106.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__23111 = self__.mults;
var G__23112 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23111,G__23112) : cljs.core.reset_BANG_.call(null,G__23111,G__23112));
});})(mults,ensure_mult))
;

cljs.core.async.t23106.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t23106.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t23106.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t23106.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23108){
var self__ = this;
var _23108__$1 = this;
return self__.meta23107;
});})(mults,ensure_mult))
;

cljs.core.async.t23106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23108,meta23107__$1){
var self__ = this;
var _23108__$1 = this;
return (new cljs.core.async.t23106(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta23107__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t23106.cljs$lang$type = true;

cljs.core.async.t23106.cljs$lang$ctorStr = "cljs.core.async/t23106";

cljs.core.async.t23106.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4170__auto__,writer__4171__auto__,opt__4172__auto__){
return cljs.core._write(writer__4171__auto__,"cljs.core.async/t23106");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t23106 = ((function (mults,ensure_mult){
return (function __GT_t23106(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta23107){
return (new cljs.core.async.t23106(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta23107));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t23106(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11422__auto___23235 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11422__auto___23235,mults,ensure_mult,p){
return (function (){
var f__11423__auto__ = (function (){var switch__11342__auto__ = ((function (c__11422__auto___23235,mults,ensure_mult,p){
return (function (state_23184){
var state_val_23185 = (state_23184[(1)]);
if((state_val_23185 === (7))){
var inst_23180 = (state_23184[(2)]);
var state_23184__$1 = state_23184;
var statearr_23186_23236 = state_23184__$1;
(statearr_23186_23236[(2)] = inst_23180);

(statearr_23186_23236[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23185 === (20))){
var state_23184__$1 = state_23184;
var statearr_23187_23237 = state_23184__$1;
(statearr_23187_23237[(2)] = null);

(statearr_23187_23237[(1)] = (21));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23185 === (1))){
var state_23184__$1 = state_23184;
var statearr_23188_23238 = state_23184__$1;
(statearr_23188_23238[(2)] = null);

(statearr_23188_23238[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23185 === (24))){
var inst_23163 = (state_23184[(7)]);
var inst_23172 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_23163);
var state_23184__$1 = state_23184;
var statearr_23189_23239 = state_23184__$1;
(statearr_23189_23239[(2)] = inst_23172);

(statearr_23189_23239[(1)] = (25));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23185 === (4))){
var inst_23115 = (state_23184[(8)]);
var inst_23115__$1 = (state_23184[(2)]);
var inst_23116 = (inst_23115__$1 == null);
var state_23184__$1 = (function (){var statearr_23190 = state_23184;
(statearr_23190[(8)] = inst_23115__$1);

return statearr_23190;
})();
if(cljs.core.truth_(inst_23116)){
var statearr_23191_23240 = state_23184__$1;
(statearr_23191_23240[(1)] = (5));

} else {
var statearr_23192_23241 = state_23184__$1;
(statearr_23192_23241[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23185 === (15))){
var inst_23157 = (state_23184[(2)]);
var state_23184__$1 = state_23184;
var statearr_23193_23242 = state_23184__$1;
(statearr_23193_23242[(2)] = inst_23157);

(statearr_23193_23242[(1)] = (12));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23185 === (21))){
var inst_23177 = (state_23184[(2)]);
var state_23184__$1 = (function (){var statearr_23194 = state_23184;
(statearr_23194[(9)] = inst_23177);

return statearr_23194;
})();
var statearr_23195_23243 = state_23184__$1;
(statearr_23195_23243[(2)] = null);

(statearr_23195_23243[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23185 === (13))){
var inst_23139 = (state_23184[(10)]);
var inst_23141 = cljs.core.chunked_seq_QMARK_(inst_23139);
var state_23184__$1 = state_23184;
if(inst_23141){
var statearr_23196_23244 = state_23184__$1;
(statearr_23196_23244[(1)] = (16));

} else {
var statearr_23197_23245 = state_23184__$1;
(statearr_23197_23245[(1)] = (17));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23185 === (22))){
var inst_23169 = (state_23184[(2)]);
var state_23184__$1 = state_23184;
if(cljs.core.truth_(inst_23169)){
var statearr_23198_23246 = state_23184__$1;
(statearr_23198_23246[(1)] = (23));

} else {
var statearr_23199_23247 = state_23184__$1;
(statearr_23199_23247[(1)] = (24));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23185 === (6))){
var inst_23115 = (state_23184[(8)]);
var inst_23165 = (state_23184[(11)]);
var inst_23163 = (state_23184[(7)]);
var inst_23163__$1 = (function (){var G__23200 = inst_23115;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__23200) : topic_fn.call(null,G__23200));
})();
var inst_23164 = (function (){var G__23201 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23201) : cljs.core.deref.call(null,G__23201));
})();
var inst_23165__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23164,inst_23163__$1);
var state_23184__$1 = (function (){var statearr_23202 = state_23184;
(statearr_23202[(11)] = inst_23165__$1);

(statearr_23202[(7)] = inst_23163__$1);

return statearr_23202;
})();
if(cljs.core.truth_(inst_23165__$1)){
var statearr_23203_23248 = state_23184__$1;
(statearr_23203_23248[(1)] = (19));

} else {
var statearr_23204_23249 = state_23184__$1;
(statearr_23204_23249[(1)] = (20));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23185 === (25))){
var inst_23174 = (state_23184[(2)]);
var state_23184__$1 = state_23184;
var statearr_23205_23250 = state_23184__$1;
(statearr_23205_23250[(2)] = inst_23174);

(statearr_23205_23250[(1)] = (21));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23185 === (17))){
var inst_23139 = (state_23184[(10)]);
var inst_23148 = cljs.core.first(inst_23139);
var inst_23149 = cljs.core.async.muxch_STAR_(inst_23148);
var inst_23150 = cljs.core.async.close_BANG_(inst_23149);
var inst_23151 = cljs.core.next(inst_23139);
var inst_23125 = inst_23151;
var inst_23126 = null;
var inst_23127 = (0);
var inst_23128 = (0);
var state_23184__$1 = (function (){var statearr_23206 = state_23184;
(statearr_23206[(12)] = inst_23125);

(statearr_23206[(13)] = inst_23128);

(statearr_23206[(14)] = inst_23150);

(statearr_23206[(15)] = inst_23126);

(statearr_23206[(16)] = inst_23127);

return statearr_23206;
})();
var statearr_23207_23251 = state_23184__$1;
(statearr_23207_23251[(2)] = null);

(statearr_23207_23251[(1)] = (8));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23185 === (3))){
var inst_23182 = (state_23184[(2)]);
var state_23184__$1 = state_23184;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23184__$1,inst_23182);
} else {
if((state_val_23185 === (12))){
var inst_23159 = (state_23184[(2)]);
var state_23184__$1 = state_23184;
var statearr_23208_23252 = state_23184__$1;
(statearr_23208_23252[(2)] = inst_23159);

(statearr_23208_23252[(1)] = (9));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23185 === (2))){
var state_23184__$1 = state_23184;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23184__$1,(4),ch);
} else {
if((state_val_23185 === (23))){
var state_23184__$1 = state_23184;
var statearr_23209_23253 = state_23184__$1;
(statearr_23209_23253[(2)] = null);

(statearr_23209_23253[(1)] = (25));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23185 === (19))){
var inst_23115 = (state_23184[(8)]);
var inst_23165 = (state_23184[(11)]);
var inst_23167 = cljs.core.async.muxch_STAR_(inst_23165);
var state_23184__$1 = state_23184;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23184__$1,(22),inst_23167,inst_23115);
} else {
if((state_val_23185 === (11))){
var inst_23139 = (state_23184[(10)]);
var inst_23125 = (state_23184[(12)]);
var inst_23139__$1 = cljs.core.seq(inst_23125);
var state_23184__$1 = (function (){var statearr_23210 = state_23184;
(statearr_23210[(10)] = inst_23139__$1);

return statearr_23210;
})();
if(inst_23139__$1){
var statearr_23211_23254 = state_23184__$1;
(statearr_23211_23254[(1)] = (13));

} else {
var statearr_23212_23255 = state_23184__$1;
(statearr_23212_23255[(1)] = (14));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23185 === (9))){
var inst_23161 = (state_23184[(2)]);
var state_23184__$1 = state_23184;
var statearr_23213_23256 = state_23184__$1;
(statearr_23213_23256[(2)] = inst_23161);

(statearr_23213_23256[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23185 === (5))){
var inst_23122 = (function (){var G__23214 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23214) : cljs.core.deref.call(null,G__23214));
})();
var inst_23123 = cljs.core.vals(inst_23122);
var inst_23124 = cljs.core.seq(inst_23123);
var inst_23125 = inst_23124;
var inst_23126 = null;
var inst_23127 = (0);
var inst_23128 = (0);
var state_23184__$1 = (function (){var statearr_23215 = state_23184;
(statearr_23215[(12)] = inst_23125);

(statearr_23215[(13)] = inst_23128);

(statearr_23215[(15)] = inst_23126);

(statearr_23215[(16)] = inst_23127);

return statearr_23215;
})();
var statearr_23216_23257 = state_23184__$1;
(statearr_23216_23257[(2)] = null);

(statearr_23216_23257[(1)] = (8));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23185 === (14))){
var state_23184__$1 = state_23184;
var statearr_23220_23258 = state_23184__$1;
(statearr_23220_23258[(2)] = null);

(statearr_23220_23258[(1)] = (15));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23185 === (16))){
var inst_23139 = (state_23184[(10)]);
var inst_23143 = cljs.core.chunk_first(inst_23139);
var inst_23144 = cljs.core.chunk_rest(inst_23139);
var inst_23145 = cljs.core.count(inst_23143);
var inst_23125 = inst_23144;
var inst_23126 = inst_23143;
var inst_23127 = inst_23145;
var inst_23128 = (0);
var state_23184__$1 = (function (){var statearr_23221 = state_23184;
(statearr_23221[(12)] = inst_23125);

(statearr_23221[(13)] = inst_23128);

(statearr_23221[(15)] = inst_23126);

(statearr_23221[(16)] = inst_23127);

return statearr_23221;
})();
var statearr_23222_23259 = state_23184__$1;
(statearr_23222_23259[(2)] = null);

(statearr_23222_23259[(1)] = (8));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23185 === (10))){
var inst_23125 = (state_23184[(12)]);
var inst_23128 = (state_23184[(13)]);
var inst_23126 = (state_23184[(15)]);
var inst_23127 = (state_23184[(16)]);
var inst_23133 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23126,inst_23128);
var inst_23134 = cljs.core.async.muxch_STAR_(inst_23133);
var inst_23135 = cljs.core.async.close_BANG_(inst_23134);
var inst_23136 = (inst_23128 + (1));
var tmp23217 = inst_23125;
var tmp23218 = inst_23126;
var tmp23219 = inst_23127;
var inst_23125__$1 = tmp23217;
var inst_23126__$1 = tmp23218;
var inst_23127__$1 = tmp23219;
var inst_23128__$1 = inst_23136;
var state_23184__$1 = (function (){var statearr_23223 = state_23184;
(statearr_23223[(12)] = inst_23125__$1);

(statearr_23223[(13)] = inst_23128__$1);

(statearr_23223[(17)] = inst_23135);

(statearr_23223[(15)] = inst_23126__$1);

(statearr_23223[(16)] = inst_23127__$1);

return statearr_23223;
})();
var statearr_23224_23260 = state_23184__$1;
(statearr_23224_23260[(2)] = null);

(statearr_23224_23260[(1)] = (8));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23185 === (18))){
var inst_23154 = (state_23184[(2)]);
var state_23184__$1 = state_23184;
var statearr_23225_23261 = state_23184__$1;
(statearr_23225_23261[(2)] = inst_23154);

(statearr_23225_23261[(1)] = (15));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23185 === (8))){
var inst_23128 = (state_23184[(13)]);
var inst_23127 = (state_23184[(16)]);
var inst_23130 = (inst_23128 < inst_23127);
var inst_23131 = inst_23130;
var state_23184__$1 = state_23184;
if(cljs.core.truth_(inst_23131)){
var statearr_23226_23262 = state_23184__$1;
(statearr_23226_23262[(1)] = (10));

} else {
var statearr_23227_23263 = state_23184__$1;
(statearr_23227_23263[(1)] = (11));

}

return cljs.core.constant$keyword$40;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11422__auto___23235,mults,ensure_mult,p))
;
return ((function (switch__11342__auto__,c__11422__auto___23235,mults,ensure_mult,p){
return (function() {
var state_machine__11343__auto__ = null;
var state_machine__11343__auto____0 = (function (){
var statearr_23231 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23231[(0)] = state_machine__11343__auto__);

(statearr_23231[(1)] = (1));

return statearr_23231;
});
var state_machine__11343__auto____1 = (function (state_23184){
while(true){
var ret_value__11344__auto__ = (function (){try{while(true){
var result__11345__auto__ = switch__11342__auto__(state_23184);
if(cljs.core.keyword_identical_QMARK_(result__11345__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11345__auto__;
}
break;
}
}catch (e23232){if((e23232 instanceof Object)){
var ex__11346__auto__ = e23232;
var statearr_23233_23264 = state_23184;
(statearr_23233_23264[(5)] = ex__11346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23184);

return cljs.core.constant$keyword$40;
} else {
throw e23232;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11344__auto__,cljs.core.constant$keyword$40)){
var G__23265 = state_23184;
state_23184 = G__23265;
continue;
} else {
return ret_value__11344__auto__;
}
break;
}
});
state_machine__11343__auto__ = function(state_23184){
switch(arguments.length){
case 0:
return state_machine__11343__auto____0.call(this);
case 1:
return state_machine__11343__auto____1.call(this,state_23184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11343__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11343__auto____0;
state_machine__11343__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11343__auto____1;
return state_machine__11343__auto__;
})()
;})(switch__11342__auto__,c__11422__auto___23235,mults,ensure_mult,p))
})();
var state__11424__auto__ = (function (){var statearr_23234 = (function (){return (f__11423__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11423__auto__.cljs$core$IFn$_invoke$arity$0() : f__11423__auto__.call(null));
})();
(statearr_23234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11422__auto___23235);

return statearr_23234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11424__auto__);
});})(c__11422__auto___23235,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__23346 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23346) : cljs.core.atom.call(null,G__23346));
})();
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__11422__auto___23419 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11422__auto___23419,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__11423__auto__ = (function (){var switch__11342__auto__ = ((function (c__11422__auto___23419,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23385){
var state_val_23386 = (state_23385[(1)]);
if((state_val_23386 === (7))){
var state_23385__$1 = state_23385;
var statearr_23387_23420 = state_23385__$1;
(statearr_23387_23420[(2)] = null);

(statearr_23387_23420[(1)] = (8));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23386 === (1))){
var state_23385__$1 = state_23385;
var statearr_23388_23421 = state_23385__$1;
(statearr_23388_23421[(2)] = null);

(statearr_23388_23421[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23386 === (4))){
var inst_23349 = (state_23385[(7)]);
var inst_23351 = (inst_23349 < cnt);
var state_23385__$1 = state_23385;
if(cljs.core.truth_(inst_23351)){
var statearr_23389_23422 = state_23385__$1;
(statearr_23389_23422[(1)] = (6));

} else {
var statearr_23390_23423 = state_23385__$1;
(statearr_23390_23423[(1)] = (7));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23386 === (15))){
var inst_23381 = (state_23385[(2)]);
var state_23385__$1 = state_23385;
var statearr_23391_23424 = state_23385__$1;
(statearr_23391_23424[(2)] = inst_23381);

(statearr_23391_23424[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23386 === (13))){
var inst_23374 = cljs.core.async.close_BANG_(out);
var state_23385__$1 = state_23385;
var statearr_23392_23425 = state_23385__$1;
(statearr_23392_23425[(2)] = inst_23374);

(statearr_23392_23425[(1)] = (15));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23386 === (6))){
var state_23385__$1 = state_23385;
var statearr_23393_23426 = state_23385__$1;
(statearr_23393_23426[(2)] = null);

(statearr_23393_23426[(1)] = (11));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23386 === (3))){
var inst_23383 = (state_23385[(2)]);
var state_23385__$1 = state_23385;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23385__$1,inst_23383);
} else {
if((state_val_23386 === (12))){
var inst_23371 = (state_23385[(8)]);
var inst_23371__$1 = (state_23385[(2)]);
var inst_23372 = cljs.core.some(cljs.core.nil_QMARK_,inst_23371__$1);
var state_23385__$1 = (function (){var statearr_23394 = state_23385;
(statearr_23394[(8)] = inst_23371__$1);

return statearr_23394;
})();
if(cljs.core.truth_(inst_23372)){
var statearr_23395_23427 = state_23385__$1;
(statearr_23395_23427[(1)] = (13));

} else {
var statearr_23396_23428 = state_23385__$1;
(statearr_23396_23428[(1)] = (14));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23386 === (2))){
var inst_23348 = (function (){var G__23397 = dctr;
var G__23398 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23397,G__23398) : cljs.core.reset_BANG_.call(null,G__23397,G__23398));
})();
var inst_23349 = (0);
var state_23385__$1 = (function (){var statearr_23399 = state_23385;
(statearr_23399[(9)] = inst_23348);

(statearr_23399[(7)] = inst_23349);

return statearr_23399;
})();
var statearr_23400_23429 = state_23385__$1;
(statearr_23400_23429[(2)] = null);

(statearr_23400_23429[(1)] = (4));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23386 === (11))){
var inst_23349 = (state_23385[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_23385,(10),Object,null,(9));
var inst_23358 = (function (){var G__23401 = inst_23349;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__23401) : chs__$1.call(null,G__23401));
})();
var inst_23359 = (function (){var G__23402 = inst_23349;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__23402) : done.call(null,G__23402));
})();
var inst_23360 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_23358,inst_23359);
var state_23385__$1 = state_23385;
var statearr_23403_23430 = state_23385__$1;
(statearr_23403_23430[(2)] = inst_23360);


cljs.core.async.impl.ioc_helpers.process_exception(state_23385__$1);

return cljs.core.constant$keyword$40;
} else {
if((state_val_23386 === (9))){
var inst_23349 = (state_23385[(7)]);
var inst_23362 = (state_23385[(2)]);
var inst_23363 = (inst_23349 + (1));
var inst_23349__$1 = inst_23363;
var state_23385__$1 = (function (){var statearr_23404 = state_23385;
(statearr_23404[(10)] = inst_23362);

(statearr_23404[(7)] = inst_23349__$1);

return statearr_23404;
})();
var statearr_23405_23431 = state_23385__$1;
(statearr_23405_23431[(2)] = null);

(statearr_23405_23431[(1)] = (4));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23386 === (5))){
var inst_23369 = (state_23385[(2)]);
var state_23385__$1 = (function (){var statearr_23406 = state_23385;
(statearr_23406[(11)] = inst_23369);

return statearr_23406;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23385__$1,(12),dchan);
} else {
if((state_val_23386 === (14))){
var inst_23371 = (state_23385[(8)]);
var inst_23376 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_23371);
var state_23385__$1 = state_23385;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23385__$1,(16),out,inst_23376);
} else {
if((state_val_23386 === (16))){
var inst_23378 = (state_23385[(2)]);
var state_23385__$1 = (function (){var statearr_23407 = state_23385;
(statearr_23407[(12)] = inst_23378);

return statearr_23407;
})();
var statearr_23408_23432 = state_23385__$1;
(statearr_23408_23432[(2)] = null);

(statearr_23408_23432[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23386 === (10))){
var inst_23353 = (state_23385[(2)]);
var inst_23354 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_23385__$1 = (function (){var statearr_23409 = state_23385;
(statearr_23409[(13)] = inst_23353);

return statearr_23409;
})();
var statearr_23410_23433 = state_23385__$1;
(statearr_23410_23433[(2)] = inst_23354);


cljs.core.async.impl.ioc_helpers.process_exception(state_23385__$1);

return cljs.core.constant$keyword$40;
} else {
if((state_val_23386 === (8))){
var inst_23367 = (state_23385[(2)]);
var state_23385__$1 = state_23385;
var statearr_23411_23434 = state_23385__$1;
(statearr_23411_23434[(2)] = inst_23367);

(statearr_23411_23434[(1)] = (5));


return cljs.core.constant$keyword$40;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11422__auto___23419,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__11342__auto__,c__11422__auto___23419,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__11343__auto__ = null;
var state_machine__11343__auto____0 = (function (){
var statearr_23415 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23415[(0)] = state_machine__11343__auto__);

(statearr_23415[(1)] = (1));

return statearr_23415;
});
var state_machine__11343__auto____1 = (function (state_23385){
while(true){
var ret_value__11344__auto__ = (function (){try{while(true){
var result__11345__auto__ = switch__11342__auto__(state_23385);
if(cljs.core.keyword_identical_QMARK_(result__11345__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11345__auto__;
}
break;
}
}catch (e23416){if((e23416 instanceof Object)){
var ex__11346__auto__ = e23416;
var statearr_23417_23435 = state_23385;
(statearr_23417_23435[(5)] = ex__11346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23385);

return cljs.core.constant$keyword$40;
} else {
throw e23416;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11344__auto__,cljs.core.constant$keyword$40)){
var G__23436 = state_23385;
state_23385 = G__23436;
continue;
} else {
return ret_value__11344__auto__;
}
break;
}
});
state_machine__11343__auto__ = function(state_23385){
switch(arguments.length){
case 0:
return state_machine__11343__auto____0.call(this);
case 1:
return state_machine__11343__auto____1.call(this,state_23385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11343__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11343__auto____0;
state_machine__11343__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11343__auto____1;
return state_machine__11343__auto__;
})()
;})(switch__11342__auto__,c__11422__auto___23419,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__11424__auto__ = (function (){var statearr_23418 = (function (){return (f__11423__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11423__auto__.cljs$core$IFn$_invoke$arity$0() : f__11423__auto__.call(null));
})();
(statearr_23418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11422__auto___23419);

return statearr_23418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11424__auto__);
});})(c__11422__auto___23419,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11422__auto___23546 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11422__auto___23546,out){
return (function (){
var f__11423__auto__ = (function (){var switch__11342__auto__ = ((function (c__11422__auto___23546,out){
return (function (state_23522){
var state_val_23523 = (state_23522[(1)]);
if((state_val_23523 === (7))){
var inst_23501 = (state_23522[(7)]);
var inst_23502 = (state_23522[(8)]);
var inst_23501__$1 = (state_23522[(2)]);
var inst_23502__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23501__$1,(0),null);
var inst_23503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23501__$1,(1),null);
var inst_23504 = (inst_23502__$1 == null);
var state_23522__$1 = (function (){var statearr_23524 = state_23522;
(statearr_23524[(9)] = inst_23503);

(statearr_23524[(7)] = inst_23501__$1);

(statearr_23524[(8)] = inst_23502__$1);

return statearr_23524;
})();
if(cljs.core.truth_(inst_23504)){
var statearr_23525_23547 = state_23522__$1;
(statearr_23525_23547[(1)] = (8));

} else {
var statearr_23526_23548 = state_23522__$1;
(statearr_23526_23548[(1)] = (9));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23523 === (1))){
var inst_23493 = cljs.core.vec(chs);
var inst_23494 = inst_23493;
var state_23522__$1 = (function (){var statearr_23527 = state_23522;
(statearr_23527[(10)] = inst_23494);

return statearr_23527;
})();
var statearr_23528_23549 = state_23522__$1;
(statearr_23528_23549[(2)] = null);

(statearr_23528_23549[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23523 === (4))){
var inst_23494 = (state_23522[(10)]);
var state_23522__$1 = state_23522;
return cljs.core.async.ioc_alts_BANG_(state_23522__$1,(7),inst_23494);
} else {
if((state_val_23523 === (6))){
var inst_23518 = (state_23522[(2)]);
var state_23522__$1 = state_23522;
var statearr_23529_23550 = state_23522__$1;
(statearr_23529_23550[(2)] = inst_23518);

(statearr_23529_23550[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23523 === (3))){
var inst_23520 = (state_23522[(2)]);
var state_23522__$1 = state_23522;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23522__$1,inst_23520);
} else {
if((state_val_23523 === (2))){
var inst_23494 = (state_23522[(10)]);
var inst_23496 = cljs.core.count(inst_23494);
var inst_23497 = (inst_23496 > (0));
var state_23522__$1 = state_23522;
if(cljs.core.truth_(inst_23497)){
var statearr_23531_23551 = state_23522__$1;
(statearr_23531_23551[(1)] = (4));

} else {
var statearr_23532_23552 = state_23522__$1;
(statearr_23532_23552[(1)] = (5));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23523 === (11))){
var inst_23494 = (state_23522[(10)]);
var inst_23511 = (state_23522[(2)]);
var tmp23530 = inst_23494;
var inst_23494__$1 = tmp23530;
var state_23522__$1 = (function (){var statearr_23533 = state_23522;
(statearr_23533[(11)] = inst_23511);

(statearr_23533[(10)] = inst_23494__$1);

return statearr_23533;
})();
var statearr_23534_23553 = state_23522__$1;
(statearr_23534_23553[(2)] = null);

(statearr_23534_23553[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23523 === (9))){
var inst_23502 = (state_23522[(8)]);
var state_23522__$1 = state_23522;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23522__$1,(11),out,inst_23502);
} else {
if((state_val_23523 === (5))){
var inst_23516 = cljs.core.async.close_BANG_(out);
var state_23522__$1 = state_23522;
var statearr_23535_23554 = state_23522__$1;
(statearr_23535_23554[(2)] = inst_23516);

(statearr_23535_23554[(1)] = (6));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23523 === (10))){
var inst_23514 = (state_23522[(2)]);
var state_23522__$1 = state_23522;
var statearr_23536_23555 = state_23522__$1;
(statearr_23536_23555[(2)] = inst_23514);

(statearr_23536_23555[(1)] = (6));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23523 === (8))){
var inst_23503 = (state_23522[(9)]);
var inst_23501 = (state_23522[(7)]);
var inst_23502 = (state_23522[(8)]);
var inst_23494 = (state_23522[(10)]);
var inst_23506 = (function (){var c = inst_23503;
var v = inst_23502;
var vec__23499 = inst_23501;
var cs = inst_23494;
return ((function (c,v,vec__23499,cs,inst_23503,inst_23501,inst_23502,inst_23494,state_val_23523,c__11422__auto___23546,out){
return (function (p1__23437_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__23437_SHARP_);
});
;})(c,v,vec__23499,cs,inst_23503,inst_23501,inst_23502,inst_23494,state_val_23523,c__11422__auto___23546,out))
})();
var inst_23507 = cljs.core.filterv(inst_23506,inst_23494);
var inst_23494__$1 = inst_23507;
var state_23522__$1 = (function (){var statearr_23537 = state_23522;
(statearr_23537[(10)] = inst_23494__$1);

return statearr_23537;
})();
var statearr_23538_23556 = state_23522__$1;
(statearr_23538_23556[(2)] = null);

(statearr_23538_23556[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11422__auto___23546,out))
;
return ((function (switch__11342__auto__,c__11422__auto___23546,out){
return (function() {
var state_machine__11343__auto__ = null;
var state_machine__11343__auto____0 = (function (){
var statearr_23542 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23542[(0)] = state_machine__11343__auto__);

(statearr_23542[(1)] = (1));

return statearr_23542;
});
var state_machine__11343__auto____1 = (function (state_23522){
while(true){
var ret_value__11344__auto__ = (function (){try{while(true){
var result__11345__auto__ = switch__11342__auto__(state_23522);
if(cljs.core.keyword_identical_QMARK_(result__11345__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11345__auto__;
}
break;
}
}catch (e23543){if((e23543 instanceof Object)){
var ex__11346__auto__ = e23543;
var statearr_23544_23557 = state_23522;
(statearr_23544_23557[(5)] = ex__11346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23522);

return cljs.core.constant$keyword$40;
} else {
throw e23543;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11344__auto__,cljs.core.constant$keyword$40)){
var G__23558 = state_23522;
state_23522 = G__23558;
continue;
} else {
return ret_value__11344__auto__;
}
break;
}
});
state_machine__11343__auto__ = function(state_23522){
switch(arguments.length){
case 0:
return state_machine__11343__auto____0.call(this);
case 1:
return state_machine__11343__auto____1.call(this,state_23522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11343__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11343__auto____0;
state_machine__11343__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11343__auto____1;
return state_machine__11343__auto__;
})()
;})(switch__11342__auto__,c__11422__auto___23546,out))
})();
var state__11424__auto__ = (function (){var statearr_23545 = (function (){return (f__11423__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11423__auto__.cljs$core$IFn$_invoke$arity$0() : f__11423__auto__.call(null));
})();
(statearr_23545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11422__auto___23546);

return statearr_23545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11424__auto__);
});})(c__11422__auto___23546,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11422__auto___23654 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11422__auto___23654,out){
return (function (){
var f__11423__auto__ = (function (){var switch__11342__auto__ = ((function (c__11422__auto___23654,out){
return (function (state_23631){
var state_val_23632 = (state_23631[(1)]);
if((state_val_23632 === (7))){
var inst_23613 = (state_23631[(7)]);
var inst_23613__$1 = (state_23631[(2)]);
var inst_23614 = (inst_23613__$1 == null);
var inst_23615 = cljs.core.not(inst_23614);
var state_23631__$1 = (function (){var statearr_23633 = state_23631;
(statearr_23633[(7)] = inst_23613__$1);

return statearr_23633;
})();
if(inst_23615){
var statearr_23634_23655 = state_23631__$1;
(statearr_23634_23655[(1)] = (8));

} else {
var statearr_23635_23656 = state_23631__$1;
(statearr_23635_23656[(1)] = (9));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23632 === (1))){
var inst_23608 = (0);
var state_23631__$1 = (function (){var statearr_23636 = state_23631;
(statearr_23636[(8)] = inst_23608);

return statearr_23636;
})();
var statearr_23637_23657 = state_23631__$1;
(statearr_23637_23657[(2)] = null);

(statearr_23637_23657[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23632 === (4))){
var state_23631__$1 = state_23631;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23631__$1,(7),ch);
} else {
if((state_val_23632 === (6))){
var inst_23626 = (state_23631[(2)]);
var state_23631__$1 = state_23631;
var statearr_23638_23658 = state_23631__$1;
(statearr_23638_23658[(2)] = inst_23626);

(statearr_23638_23658[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23632 === (3))){
var inst_23628 = (state_23631[(2)]);
var inst_23629 = cljs.core.async.close_BANG_(out);
var state_23631__$1 = (function (){var statearr_23639 = state_23631;
(statearr_23639[(9)] = inst_23628);

return statearr_23639;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_23631__$1,inst_23629);
} else {
if((state_val_23632 === (2))){
var inst_23608 = (state_23631[(8)]);
var inst_23610 = (inst_23608 < n);
var state_23631__$1 = state_23631;
if(cljs.core.truth_(inst_23610)){
var statearr_23640_23659 = state_23631__$1;
(statearr_23640_23659[(1)] = (4));

} else {
var statearr_23641_23660 = state_23631__$1;
(statearr_23641_23660[(1)] = (5));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23632 === (11))){
var inst_23608 = (state_23631[(8)]);
var inst_23618 = (state_23631[(2)]);
var inst_23619 = (inst_23608 + (1));
var inst_23608__$1 = inst_23619;
var state_23631__$1 = (function (){var statearr_23642 = state_23631;
(statearr_23642[(10)] = inst_23618);

(statearr_23642[(8)] = inst_23608__$1);

return statearr_23642;
})();
var statearr_23643_23661 = state_23631__$1;
(statearr_23643_23661[(2)] = null);

(statearr_23643_23661[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23632 === (9))){
var state_23631__$1 = state_23631;
var statearr_23644_23662 = state_23631__$1;
(statearr_23644_23662[(2)] = null);

(statearr_23644_23662[(1)] = (10));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23632 === (5))){
var state_23631__$1 = state_23631;
var statearr_23645_23663 = state_23631__$1;
(statearr_23645_23663[(2)] = null);

(statearr_23645_23663[(1)] = (6));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23632 === (10))){
var inst_23623 = (state_23631[(2)]);
var state_23631__$1 = state_23631;
var statearr_23646_23664 = state_23631__$1;
(statearr_23646_23664[(2)] = inst_23623);

(statearr_23646_23664[(1)] = (6));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23632 === (8))){
var inst_23613 = (state_23631[(7)]);
var state_23631__$1 = state_23631;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23631__$1,(11),out,inst_23613);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11422__auto___23654,out))
;
return ((function (switch__11342__auto__,c__11422__auto___23654,out){
return (function() {
var state_machine__11343__auto__ = null;
var state_machine__11343__auto____0 = (function (){
var statearr_23650 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23650[(0)] = state_machine__11343__auto__);

(statearr_23650[(1)] = (1));

return statearr_23650;
});
var state_machine__11343__auto____1 = (function (state_23631){
while(true){
var ret_value__11344__auto__ = (function (){try{while(true){
var result__11345__auto__ = switch__11342__auto__(state_23631);
if(cljs.core.keyword_identical_QMARK_(result__11345__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11345__auto__;
}
break;
}
}catch (e23651){if((e23651 instanceof Object)){
var ex__11346__auto__ = e23651;
var statearr_23652_23665 = state_23631;
(statearr_23652_23665[(5)] = ex__11346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23631);

return cljs.core.constant$keyword$40;
} else {
throw e23651;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11344__auto__,cljs.core.constant$keyword$40)){
var G__23666 = state_23631;
state_23631 = G__23666;
continue;
} else {
return ret_value__11344__auto__;
}
break;
}
});
state_machine__11343__auto__ = function(state_23631){
switch(arguments.length){
case 0:
return state_machine__11343__auto____0.call(this);
case 1:
return state_machine__11343__auto____1.call(this,state_23631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11343__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11343__auto____0;
state_machine__11343__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11343__auto____1;
return state_machine__11343__auto__;
})()
;})(switch__11342__auto__,c__11422__auto___23654,out))
})();
var state__11424__auto__ = (function (){var statearr_23653 = (function (){return (f__11423__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11423__auto__.cljs$core$IFn$_invoke$arity$0() : f__11423__auto__.call(null));
})();
(statearr_23653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11422__auto___23654);

return statearr_23653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11424__auto__);
});})(c__11422__auto___23654,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t23679 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23679 = (function (ch,f,map_LT_,meta23680){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23680 = meta23680;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23679.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t23679.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t23679.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t23679.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t23682 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23682 = (function (fn1,_,meta23680,map_LT_,f,ch,meta23683){
this.fn1 = fn1;
this._ = _;
this.meta23680 = meta23680;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23683 = meta23683;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23682.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t23682.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t23682.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__23667_SHARP_){
var G__23685 = (((p1__23667_SHARP_ == null))?null:(function (){var G__23686 = p1__23667_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__23686) : self__.f.call(null,G__23686));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__23685) : f1.call(null,G__23685));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t23682.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23684){
var self__ = this;
var _23684__$1 = this;
return self__.meta23683;
});})(___$1))
;

cljs.core.async.t23682.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23684,meta23683__$1){
var self__ = this;
var _23684__$1 = this;
return (new cljs.core.async.t23682(self__.fn1,self__._,self__.meta23680,self__.map_LT_,self__.f,self__.ch,meta23683__$1));
});})(___$1))
;

cljs.core.async.t23682.cljs$lang$type = true;

cljs.core.async.t23682.cljs$lang$ctorStr = "cljs.core.async/t23682";

cljs.core.async.t23682.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4170__auto__,writer__4171__auto__,opt__4172__auto__){
return cljs.core._write(writer__4171__auto__,"cljs.core.async/t23682");
});})(___$1))
;

cljs.core.async.__GT_t23682 = ((function (___$1){
return (function __GT_t23682(fn1__$1,___$2,meta23680__$1,map_LT___$1,f__$1,ch__$1,meta23683){
return (new cljs.core.async.t23682(fn1__$1,___$2,meta23680__$1,map_LT___$1,f__$1,ch__$1,meta23683));
});})(___$1))
;

}

return (new cljs.core.async.t23682(fn1,___$1,self__.meta23680,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3571__auto__ = ret;
if(cljs.core.truth_(and__3571__auto__)){
return !(((function (){var G__23687 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23687) : cljs.core.deref.call(null,G__23687));
})() == null));
} else {
return and__3571__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__23688 = (function (){var G__23689 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23689) : cljs.core.deref.call(null,G__23689));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__23688) : self__.f.call(null,G__23688));
})());
} else {
return ret;
}
});

cljs.core.async.t23679.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t23679.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t23679.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t23679.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23681){
var self__ = this;
var _23681__$1 = this;
return self__.meta23680;
});

cljs.core.async.t23679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23681,meta23680__$1){
var self__ = this;
var _23681__$1 = this;
return (new cljs.core.async.t23679(self__.ch,self__.f,self__.map_LT_,meta23680__$1));
});

cljs.core.async.t23679.cljs$lang$type = true;

cljs.core.async.t23679.cljs$lang$ctorStr = "cljs.core.async/t23679";

cljs.core.async.t23679.cljs$lang$ctorPrWriter = (function (this__4170__auto__,writer__4171__auto__,opt__4172__auto__){
return cljs.core._write(writer__4171__auto__,"cljs.core.async/t23679");
});

cljs.core.async.__GT_t23679 = (function __GT_t23679(ch__$1,f__$1,map_LT___$1,meta23680){
return (new cljs.core.async.t23679(ch__$1,f__$1,map_LT___$1,meta23680));
});

}

return (new cljs.core.async.t23679(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t23694 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23694 = (function (ch,f,map_GT_,meta23695){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta23695 = meta23695;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23694.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t23694.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__23697 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__23697) : self__.f.call(null,G__23697));
})(),fn1);
});

cljs.core.async.t23694.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t23694.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t23694.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t23694.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t23694.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23696){
var self__ = this;
var _23696__$1 = this;
return self__.meta23695;
});

cljs.core.async.t23694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23696,meta23695__$1){
var self__ = this;
var _23696__$1 = this;
return (new cljs.core.async.t23694(self__.ch,self__.f,self__.map_GT_,meta23695__$1));
});

cljs.core.async.t23694.cljs$lang$type = true;

cljs.core.async.t23694.cljs$lang$ctorStr = "cljs.core.async/t23694";

cljs.core.async.t23694.cljs$lang$ctorPrWriter = (function (this__4170__auto__,writer__4171__auto__,opt__4172__auto__){
return cljs.core._write(writer__4171__auto__,"cljs.core.async/t23694");
});

cljs.core.async.__GT_t23694 = (function __GT_t23694(ch__$1,f__$1,map_GT___$1,meta23695){
return (new cljs.core.async.t23694(ch__$1,f__$1,map_GT___$1,meta23695));
});

}

return (new cljs.core.async.t23694(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t23702 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23702 = (function (ch,p,filter_GT_,meta23703){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta23703 = meta23703;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23702.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t23702.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__23705 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__23705) : self__.p.call(null,G__23705));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t23702.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t23702.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t23702.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t23702.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t23702.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t23702.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23704){
var self__ = this;
var _23704__$1 = this;
return self__.meta23703;
});

cljs.core.async.t23702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23704,meta23703__$1){
var self__ = this;
var _23704__$1 = this;
return (new cljs.core.async.t23702(self__.ch,self__.p,self__.filter_GT_,meta23703__$1));
});

cljs.core.async.t23702.cljs$lang$type = true;

cljs.core.async.t23702.cljs$lang$ctorStr = "cljs.core.async/t23702";

cljs.core.async.t23702.cljs$lang$ctorPrWriter = (function (this__4170__auto__,writer__4171__auto__,opt__4172__auto__){
return cljs.core._write(writer__4171__auto__,"cljs.core.async/t23702");
});

cljs.core.async.__GT_t23702 = (function __GT_t23702(ch__$1,p__$1,filter_GT___$1,meta23703){
return (new cljs.core.async.t23702(ch__$1,p__$1,filter_GT___$1,meta23703));
});

}

return (new cljs.core.async.t23702(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11422__auto___23793 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11422__auto___23793,out){
return (function (){
var f__11423__auto__ = (function (){var switch__11342__auto__ = ((function (c__11422__auto___23793,out){
return (function (state_23771){
var state_val_23772 = (state_23771[(1)]);
if((state_val_23772 === (7))){
var inst_23767 = (state_23771[(2)]);
var state_23771__$1 = state_23771;
var statearr_23773_23794 = state_23771__$1;
(statearr_23773_23794[(2)] = inst_23767);

(statearr_23773_23794[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23772 === (1))){
var state_23771__$1 = state_23771;
var statearr_23774_23795 = state_23771__$1;
(statearr_23774_23795[(2)] = null);

(statearr_23774_23795[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23772 === (4))){
var inst_23753 = (state_23771[(7)]);
var inst_23753__$1 = (state_23771[(2)]);
var inst_23754 = (inst_23753__$1 == null);
var state_23771__$1 = (function (){var statearr_23775 = state_23771;
(statearr_23775[(7)] = inst_23753__$1);

return statearr_23775;
})();
if(cljs.core.truth_(inst_23754)){
var statearr_23776_23796 = state_23771__$1;
(statearr_23776_23796[(1)] = (5));

} else {
var statearr_23777_23797 = state_23771__$1;
(statearr_23777_23797[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23772 === (6))){
var inst_23753 = (state_23771[(7)]);
var inst_23758 = (function (){var G__23778 = inst_23753;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__23778) : p.call(null,G__23778));
})();
var state_23771__$1 = state_23771;
if(cljs.core.truth_(inst_23758)){
var statearr_23779_23798 = state_23771__$1;
(statearr_23779_23798[(1)] = (8));

} else {
var statearr_23780_23799 = state_23771__$1;
(statearr_23780_23799[(1)] = (9));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23772 === (3))){
var inst_23769 = (state_23771[(2)]);
var state_23771__$1 = state_23771;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23771__$1,inst_23769);
} else {
if((state_val_23772 === (2))){
var state_23771__$1 = state_23771;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23771__$1,(4),ch);
} else {
if((state_val_23772 === (11))){
var inst_23761 = (state_23771[(2)]);
var state_23771__$1 = state_23771;
var statearr_23781_23800 = state_23771__$1;
(statearr_23781_23800[(2)] = inst_23761);

(statearr_23781_23800[(1)] = (10));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23772 === (9))){
var state_23771__$1 = state_23771;
var statearr_23782_23801 = state_23771__$1;
(statearr_23782_23801[(2)] = null);

(statearr_23782_23801[(1)] = (10));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23772 === (5))){
var inst_23756 = cljs.core.async.close_BANG_(out);
var state_23771__$1 = state_23771;
var statearr_23783_23802 = state_23771__$1;
(statearr_23783_23802[(2)] = inst_23756);

(statearr_23783_23802[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23772 === (10))){
var inst_23764 = (state_23771[(2)]);
var state_23771__$1 = (function (){var statearr_23784 = state_23771;
(statearr_23784[(8)] = inst_23764);

return statearr_23784;
})();
var statearr_23785_23803 = state_23771__$1;
(statearr_23785_23803[(2)] = null);

(statearr_23785_23803[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23772 === (8))){
var inst_23753 = (state_23771[(7)]);
var state_23771__$1 = state_23771;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23771__$1,(11),out,inst_23753);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11422__auto___23793,out))
;
return ((function (switch__11342__auto__,c__11422__auto___23793,out){
return (function() {
var state_machine__11343__auto__ = null;
var state_machine__11343__auto____0 = (function (){
var statearr_23789 = [null,null,null,null,null,null,null,null,null];
(statearr_23789[(0)] = state_machine__11343__auto__);

(statearr_23789[(1)] = (1));

return statearr_23789;
});
var state_machine__11343__auto____1 = (function (state_23771){
while(true){
var ret_value__11344__auto__ = (function (){try{while(true){
var result__11345__auto__ = switch__11342__auto__(state_23771);
if(cljs.core.keyword_identical_QMARK_(result__11345__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11345__auto__;
}
break;
}
}catch (e23790){if((e23790 instanceof Object)){
var ex__11346__auto__ = e23790;
var statearr_23791_23804 = state_23771;
(statearr_23791_23804[(5)] = ex__11346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23771);

return cljs.core.constant$keyword$40;
} else {
throw e23790;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11344__auto__,cljs.core.constant$keyword$40)){
var G__23805 = state_23771;
state_23771 = G__23805;
continue;
} else {
return ret_value__11344__auto__;
}
break;
}
});
state_machine__11343__auto__ = function(state_23771){
switch(arguments.length){
case 0:
return state_machine__11343__auto____0.call(this);
case 1:
return state_machine__11343__auto____1.call(this,state_23771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11343__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11343__auto____0;
state_machine__11343__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11343__auto____1;
return state_machine__11343__auto__;
})()
;})(switch__11342__auto__,c__11422__auto___23793,out))
})();
var state__11424__auto__ = (function (){var statearr_23792 = (function (){return (f__11423__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11423__auto__.cljs$core$IFn$_invoke$arity$0() : f__11423__auto__.call(null));
})();
(statearr_23792[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11422__auto___23793);

return statearr_23792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11424__auto__);
});})(c__11422__auto___23793,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__11422__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11422__auto__){
return (function (){
var f__11423__auto__ = (function (){var switch__11342__auto__ = ((function (c__11422__auto__){
return (function (state_23975){
var state_val_23976 = (state_23975[(1)]);
if((state_val_23976 === (7))){
var inst_23971 = (state_23975[(2)]);
var state_23975__$1 = state_23975;
var statearr_23977_24019 = state_23975__$1;
(statearr_23977_24019[(2)] = inst_23971);

(statearr_23977_24019[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23976 === (20))){
var inst_23941 = (state_23975[(7)]);
var inst_23952 = (state_23975[(2)]);
var inst_23953 = cljs.core.next(inst_23941);
var inst_23927 = inst_23953;
var inst_23928 = null;
var inst_23929 = (0);
var inst_23930 = (0);
var state_23975__$1 = (function (){var statearr_23978 = state_23975;
(statearr_23978[(8)] = inst_23930);

(statearr_23978[(9)] = inst_23952);

(statearr_23978[(10)] = inst_23927);

(statearr_23978[(11)] = inst_23929);

(statearr_23978[(12)] = inst_23928);

return statearr_23978;
})();
var statearr_23979_24020 = state_23975__$1;
(statearr_23979_24020[(2)] = null);

(statearr_23979_24020[(1)] = (8));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23976 === (1))){
var state_23975__$1 = state_23975;
var statearr_23980_24021 = state_23975__$1;
(statearr_23980_24021[(2)] = null);

(statearr_23980_24021[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23976 === (4))){
var inst_23916 = (state_23975[(13)]);
var inst_23916__$1 = (state_23975[(2)]);
var inst_23917 = (inst_23916__$1 == null);
var state_23975__$1 = (function (){var statearr_23981 = state_23975;
(statearr_23981[(13)] = inst_23916__$1);

return statearr_23981;
})();
if(cljs.core.truth_(inst_23917)){
var statearr_23982_24022 = state_23975__$1;
(statearr_23982_24022[(1)] = (5));

} else {
var statearr_23983_24023 = state_23975__$1;
(statearr_23983_24023[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23976 === (15))){
var state_23975__$1 = state_23975;
var statearr_23987_24024 = state_23975__$1;
(statearr_23987_24024[(2)] = null);

(statearr_23987_24024[(1)] = (16));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23976 === (21))){
var state_23975__$1 = state_23975;
var statearr_23988_24025 = state_23975__$1;
(statearr_23988_24025[(2)] = null);

(statearr_23988_24025[(1)] = (23));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23976 === (13))){
var inst_23930 = (state_23975[(8)]);
var inst_23927 = (state_23975[(10)]);
var inst_23929 = (state_23975[(11)]);
var inst_23928 = (state_23975[(12)]);
var inst_23937 = (state_23975[(2)]);
var inst_23938 = (inst_23930 + (1));
var tmp23984 = inst_23927;
var tmp23985 = inst_23929;
var tmp23986 = inst_23928;
var inst_23927__$1 = tmp23984;
var inst_23928__$1 = tmp23986;
var inst_23929__$1 = tmp23985;
var inst_23930__$1 = inst_23938;
var state_23975__$1 = (function (){var statearr_23989 = state_23975;
(statearr_23989[(8)] = inst_23930__$1);

(statearr_23989[(14)] = inst_23937);

(statearr_23989[(10)] = inst_23927__$1);

(statearr_23989[(11)] = inst_23929__$1);

(statearr_23989[(12)] = inst_23928__$1);

return statearr_23989;
})();
var statearr_23990_24026 = state_23975__$1;
(statearr_23990_24026[(2)] = null);

(statearr_23990_24026[(1)] = (8));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23976 === (22))){
var state_23975__$1 = state_23975;
var statearr_23991_24027 = state_23975__$1;
(statearr_23991_24027[(2)] = null);

(statearr_23991_24027[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23976 === (6))){
var inst_23916 = (state_23975[(13)]);
var inst_23925 = (function (){var G__23992 = inst_23916;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23992) : f.call(null,G__23992));
})();
var inst_23926 = cljs.core.seq(inst_23925);
var inst_23927 = inst_23926;
var inst_23928 = null;
var inst_23929 = (0);
var inst_23930 = (0);
var state_23975__$1 = (function (){var statearr_23993 = state_23975;
(statearr_23993[(8)] = inst_23930);

(statearr_23993[(10)] = inst_23927);

(statearr_23993[(11)] = inst_23929);

(statearr_23993[(12)] = inst_23928);

return statearr_23993;
})();
var statearr_23994_24028 = state_23975__$1;
(statearr_23994_24028[(2)] = null);

(statearr_23994_24028[(1)] = (8));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23976 === (17))){
var inst_23941 = (state_23975[(7)]);
var inst_23945 = cljs.core.chunk_first(inst_23941);
var inst_23946 = cljs.core.chunk_rest(inst_23941);
var inst_23947 = cljs.core.count(inst_23945);
var inst_23927 = inst_23946;
var inst_23928 = inst_23945;
var inst_23929 = inst_23947;
var inst_23930 = (0);
var state_23975__$1 = (function (){var statearr_23995 = state_23975;
(statearr_23995[(8)] = inst_23930);

(statearr_23995[(10)] = inst_23927);

(statearr_23995[(11)] = inst_23929);

(statearr_23995[(12)] = inst_23928);

return statearr_23995;
})();
var statearr_23996_24029 = state_23975__$1;
(statearr_23996_24029[(2)] = null);

(statearr_23996_24029[(1)] = (8));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23976 === (3))){
var inst_23973 = (state_23975[(2)]);
var state_23975__$1 = state_23975;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23975__$1,inst_23973);
} else {
if((state_val_23976 === (12))){
var inst_23961 = (state_23975[(2)]);
var state_23975__$1 = state_23975;
var statearr_23997_24030 = state_23975__$1;
(statearr_23997_24030[(2)] = inst_23961);

(statearr_23997_24030[(1)] = (9));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23976 === (2))){
var state_23975__$1 = state_23975;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23975__$1,(4),in$);
} else {
if((state_val_23976 === (23))){
var inst_23969 = (state_23975[(2)]);
var state_23975__$1 = state_23975;
var statearr_23998_24031 = state_23975__$1;
(statearr_23998_24031[(2)] = inst_23969);

(statearr_23998_24031[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23976 === (19))){
var inst_23956 = (state_23975[(2)]);
var state_23975__$1 = state_23975;
var statearr_23999_24032 = state_23975__$1;
(statearr_23999_24032[(2)] = inst_23956);

(statearr_23999_24032[(1)] = (16));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23976 === (11))){
var inst_23941 = (state_23975[(7)]);
var inst_23927 = (state_23975[(10)]);
var inst_23941__$1 = cljs.core.seq(inst_23927);
var state_23975__$1 = (function (){var statearr_24000 = state_23975;
(statearr_24000[(7)] = inst_23941__$1);

return statearr_24000;
})();
if(inst_23941__$1){
var statearr_24001_24033 = state_23975__$1;
(statearr_24001_24033[(1)] = (14));

} else {
var statearr_24002_24034 = state_23975__$1;
(statearr_24002_24034[(1)] = (15));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23976 === (9))){
var inst_23963 = (state_23975[(2)]);
var inst_23964 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_23975__$1 = (function (){var statearr_24003 = state_23975;
(statearr_24003[(15)] = inst_23963);

return statearr_24003;
})();
if(cljs.core.truth_(inst_23964)){
var statearr_24004_24035 = state_23975__$1;
(statearr_24004_24035[(1)] = (21));

} else {
var statearr_24005_24036 = state_23975__$1;
(statearr_24005_24036[(1)] = (22));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23976 === (5))){
var inst_23919 = cljs.core.async.close_BANG_(out);
var state_23975__$1 = state_23975;
var statearr_24006_24037 = state_23975__$1;
(statearr_24006_24037[(2)] = inst_23919);

(statearr_24006_24037[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23976 === (14))){
var inst_23941 = (state_23975[(7)]);
var inst_23943 = cljs.core.chunked_seq_QMARK_(inst_23941);
var state_23975__$1 = state_23975;
if(inst_23943){
var statearr_24007_24038 = state_23975__$1;
(statearr_24007_24038[(1)] = (17));

} else {
var statearr_24008_24039 = state_23975__$1;
(statearr_24008_24039[(1)] = (18));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23976 === (16))){
var inst_23959 = (state_23975[(2)]);
var state_23975__$1 = state_23975;
var statearr_24009_24040 = state_23975__$1;
(statearr_24009_24040[(2)] = inst_23959);

(statearr_24009_24040[(1)] = (12));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23976 === (10))){
var inst_23930 = (state_23975[(8)]);
var inst_23928 = (state_23975[(12)]);
var inst_23935 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23928,inst_23930);
var state_23975__$1 = state_23975;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23975__$1,(13),out,inst_23935);
} else {
if((state_val_23976 === (18))){
var inst_23941 = (state_23975[(7)]);
var inst_23950 = cljs.core.first(inst_23941);
var state_23975__$1 = state_23975;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23975__$1,(20),out,inst_23950);
} else {
if((state_val_23976 === (8))){
var inst_23930 = (state_23975[(8)]);
var inst_23929 = (state_23975[(11)]);
var inst_23932 = (inst_23930 < inst_23929);
var inst_23933 = inst_23932;
var state_23975__$1 = state_23975;
if(cljs.core.truth_(inst_23933)){
var statearr_24010_24041 = state_23975__$1;
(statearr_24010_24041[(1)] = (10));

} else {
var statearr_24011_24042 = state_23975__$1;
(statearr_24011_24042[(1)] = (11));

}

return cljs.core.constant$keyword$40;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11422__auto__))
;
return ((function (switch__11342__auto__,c__11422__auto__){
return (function() {
var state_machine__11343__auto__ = null;
var state_machine__11343__auto____0 = (function (){
var statearr_24015 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24015[(0)] = state_machine__11343__auto__);

(statearr_24015[(1)] = (1));

return statearr_24015;
});
var state_machine__11343__auto____1 = (function (state_23975){
while(true){
var ret_value__11344__auto__ = (function (){try{while(true){
var result__11345__auto__ = switch__11342__auto__(state_23975);
if(cljs.core.keyword_identical_QMARK_(result__11345__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11345__auto__;
}
break;
}
}catch (e24016){if((e24016 instanceof Object)){
var ex__11346__auto__ = e24016;
var statearr_24017_24043 = state_23975;
(statearr_24017_24043[(5)] = ex__11346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23975);

return cljs.core.constant$keyword$40;
} else {
throw e24016;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11344__auto__,cljs.core.constant$keyword$40)){
var G__24044 = state_23975;
state_23975 = G__24044;
continue;
} else {
return ret_value__11344__auto__;
}
break;
}
});
state_machine__11343__auto__ = function(state_23975){
switch(arguments.length){
case 0:
return state_machine__11343__auto____0.call(this);
case 1:
return state_machine__11343__auto____1.call(this,state_23975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11343__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11343__auto____0;
state_machine__11343__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11343__auto____1;
return state_machine__11343__auto__;
})()
;})(switch__11342__auto__,c__11422__auto__))
})();
var state__11424__auto__ = (function (){var statearr_24018 = (function (){return (f__11423__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11423__auto__.cljs$core$IFn$_invoke$arity$0() : f__11423__auto__.call(null));
})();
(statearr_24018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11422__auto__);

return statearr_24018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11424__auto__);
});})(c__11422__auto__))
);

return c__11422__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11422__auto___24149 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11422__auto___24149,out){
return (function (){
var f__11423__auto__ = (function (){var switch__11342__auto__ = ((function (c__11422__auto___24149,out){
return (function (state_24124){
var state_val_24125 = (state_24124[(1)]);
if((state_val_24125 === (7))){
var inst_24119 = (state_24124[(2)]);
var state_24124__$1 = state_24124;
var statearr_24126_24150 = state_24124__$1;
(statearr_24126_24150[(2)] = inst_24119);

(statearr_24126_24150[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24125 === (1))){
var inst_24101 = null;
var state_24124__$1 = (function (){var statearr_24127 = state_24124;
(statearr_24127[(7)] = inst_24101);

return statearr_24127;
})();
var statearr_24128_24151 = state_24124__$1;
(statearr_24128_24151[(2)] = null);

(statearr_24128_24151[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24125 === (4))){
var inst_24104 = (state_24124[(8)]);
var inst_24104__$1 = (state_24124[(2)]);
var inst_24105 = (inst_24104__$1 == null);
var inst_24106 = cljs.core.not(inst_24105);
var state_24124__$1 = (function (){var statearr_24129 = state_24124;
(statearr_24129[(8)] = inst_24104__$1);

return statearr_24129;
})();
if(inst_24106){
var statearr_24130_24152 = state_24124__$1;
(statearr_24130_24152[(1)] = (5));

} else {
var statearr_24131_24153 = state_24124__$1;
(statearr_24131_24153[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_24125 === (6))){
var state_24124__$1 = state_24124;
var statearr_24132_24154 = state_24124__$1;
(statearr_24132_24154[(2)] = null);

(statearr_24132_24154[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24125 === (3))){
var inst_24121 = (state_24124[(2)]);
var inst_24122 = cljs.core.async.close_BANG_(out);
var state_24124__$1 = (function (){var statearr_24133 = state_24124;
(statearr_24133[(9)] = inst_24121);

return statearr_24133;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24124__$1,inst_24122);
} else {
if((state_val_24125 === (2))){
var state_24124__$1 = state_24124;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24124__$1,(4),ch);
} else {
if((state_val_24125 === (11))){
var inst_24104 = (state_24124[(8)]);
var inst_24113 = (state_24124[(2)]);
var inst_24101 = inst_24104;
var state_24124__$1 = (function (){var statearr_24134 = state_24124;
(statearr_24134[(7)] = inst_24101);

(statearr_24134[(10)] = inst_24113);

return statearr_24134;
})();
var statearr_24135_24155 = state_24124__$1;
(statearr_24135_24155[(2)] = null);

(statearr_24135_24155[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24125 === (9))){
var inst_24104 = (state_24124[(8)]);
var state_24124__$1 = state_24124;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24124__$1,(11),out,inst_24104);
} else {
if((state_val_24125 === (5))){
var inst_24101 = (state_24124[(7)]);
var inst_24104 = (state_24124[(8)]);
var inst_24108 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24104,inst_24101);
var state_24124__$1 = state_24124;
if(inst_24108){
var statearr_24137_24156 = state_24124__$1;
(statearr_24137_24156[(1)] = (8));

} else {
var statearr_24138_24157 = state_24124__$1;
(statearr_24138_24157[(1)] = (9));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_24125 === (10))){
var inst_24116 = (state_24124[(2)]);
var state_24124__$1 = state_24124;
var statearr_24139_24158 = state_24124__$1;
(statearr_24139_24158[(2)] = inst_24116);

(statearr_24139_24158[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24125 === (8))){
var inst_24101 = (state_24124[(7)]);
var tmp24136 = inst_24101;
var inst_24101__$1 = tmp24136;
var state_24124__$1 = (function (){var statearr_24140 = state_24124;
(statearr_24140[(7)] = inst_24101__$1);

return statearr_24140;
})();
var statearr_24141_24159 = state_24124__$1;
(statearr_24141_24159[(2)] = null);

(statearr_24141_24159[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11422__auto___24149,out))
;
return ((function (switch__11342__auto__,c__11422__auto___24149,out){
return (function() {
var state_machine__11343__auto__ = null;
var state_machine__11343__auto____0 = (function (){
var statearr_24145 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24145[(0)] = state_machine__11343__auto__);

(statearr_24145[(1)] = (1));

return statearr_24145;
});
var state_machine__11343__auto____1 = (function (state_24124){
while(true){
var ret_value__11344__auto__ = (function (){try{while(true){
var result__11345__auto__ = switch__11342__auto__(state_24124);
if(cljs.core.keyword_identical_QMARK_(result__11345__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11345__auto__;
}
break;
}
}catch (e24146){if((e24146 instanceof Object)){
var ex__11346__auto__ = e24146;
var statearr_24147_24160 = state_24124;
(statearr_24147_24160[(5)] = ex__11346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24124);

return cljs.core.constant$keyword$40;
} else {
throw e24146;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11344__auto__,cljs.core.constant$keyword$40)){
var G__24161 = state_24124;
state_24124 = G__24161;
continue;
} else {
return ret_value__11344__auto__;
}
break;
}
});
state_machine__11343__auto__ = function(state_24124){
switch(arguments.length){
case 0:
return state_machine__11343__auto____0.call(this);
case 1:
return state_machine__11343__auto____1.call(this,state_24124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11343__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11343__auto____0;
state_machine__11343__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11343__auto____1;
return state_machine__11343__auto__;
})()
;})(switch__11342__auto__,c__11422__auto___24149,out))
})();
var state__11424__auto__ = (function (){var statearr_24148 = (function (){return (f__11423__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11423__auto__.cljs$core$IFn$_invoke$arity$0() : f__11423__auto__.call(null));
})();
(statearr_24148[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11422__auto___24149);

return statearr_24148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11424__auto__);
});})(c__11422__auto___24149,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11422__auto___24299 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11422__auto___24299,out){
return (function (){
var f__11423__auto__ = (function (){var switch__11342__auto__ = ((function (c__11422__auto___24299,out){
return (function (state_24269){
var state_val_24270 = (state_24269[(1)]);
if((state_val_24270 === (7))){
var inst_24265 = (state_24269[(2)]);
var state_24269__$1 = state_24269;
var statearr_24271_24300 = state_24269__$1;
(statearr_24271_24300[(2)] = inst_24265);

(statearr_24271_24300[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24270 === (1))){
var inst_24232 = (new Array(n));
var inst_24233 = inst_24232;
var inst_24234 = (0);
var state_24269__$1 = (function (){var statearr_24272 = state_24269;
(statearr_24272[(7)] = inst_24233);

(statearr_24272[(8)] = inst_24234);

return statearr_24272;
})();
var statearr_24273_24301 = state_24269__$1;
(statearr_24273_24301[(2)] = null);

(statearr_24273_24301[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24270 === (4))){
var inst_24237 = (state_24269[(9)]);
var inst_24237__$1 = (state_24269[(2)]);
var inst_24238 = (inst_24237__$1 == null);
var inst_24239 = cljs.core.not(inst_24238);
var state_24269__$1 = (function (){var statearr_24274 = state_24269;
(statearr_24274[(9)] = inst_24237__$1);

return statearr_24274;
})();
if(inst_24239){
var statearr_24275_24302 = state_24269__$1;
(statearr_24275_24302[(1)] = (5));

} else {
var statearr_24276_24303 = state_24269__$1;
(statearr_24276_24303[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_24270 === (15))){
var inst_24259 = (state_24269[(2)]);
var state_24269__$1 = state_24269;
var statearr_24277_24304 = state_24269__$1;
(statearr_24277_24304[(2)] = inst_24259);

(statearr_24277_24304[(1)] = (14));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24270 === (13))){
var state_24269__$1 = state_24269;
var statearr_24278_24305 = state_24269__$1;
(statearr_24278_24305[(2)] = null);

(statearr_24278_24305[(1)] = (14));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24270 === (6))){
var inst_24234 = (state_24269[(8)]);
var inst_24255 = (inst_24234 > (0));
var state_24269__$1 = state_24269;
if(cljs.core.truth_(inst_24255)){
var statearr_24279_24306 = state_24269__$1;
(statearr_24279_24306[(1)] = (12));

} else {
var statearr_24280_24307 = state_24269__$1;
(statearr_24280_24307[(1)] = (13));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_24270 === (3))){
var inst_24267 = (state_24269[(2)]);
var state_24269__$1 = state_24269;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24269__$1,inst_24267);
} else {
if((state_val_24270 === (12))){
var inst_24233 = (state_24269[(7)]);
var inst_24257 = cljs.core.vec(inst_24233);
var state_24269__$1 = state_24269;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24269__$1,(15),out,inst_24257);
} else {
if((state_val_24270 === (2))){
var state_24269__$1 = state_24269;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24269__$1,(4),ch);
} else {
if((state_val_24270 === (11))){
var inst_24249 = (state_24269[(2)]);
var inst_24250 = (new Array(n));
var inst_24233 = inst_24250;
var inst_24234 = (0);
var state_24269__$1 = (function (){var statearr_24281 = state_24269;
(statearr_24281[(7)] = inst_24233);

(statearr_24281[(8)] = inst_24234);

(statearr_24281[(10)] = inst_24249);

return statearr_24281;
})();
var statearr_24282_24308 = state_24269__$1;
(statearr_24282_24308[(2)] = null);

(statearr_24282_24308[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24270 === (9))){
var inst_24233 = (state_24269[(7)]);
var inst_24247 = cljs.core.vec(inst_24233);
var state_24269__$1 = state_24269;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24269__$1,(11),out,inst_24247);
} else {
if((state_val_24270 === (5))){
var inst_24233 = (state_24269[(7)]);
var inst_24237 = (state_24269[(9)]);
var inst_24234 = (state_24269[(8)]);
var inst_24242 = (state_24269[(11)]);
var inst_24241 = (inst_24233[inst_24234] = inst_24237);
var inst_24242__$1 = (inst_24234 + (1));
var inst_24243 = (inst_24242__$1 < n);
var state_24269__$1 = (function (){var statearr_24283 = state_24269;
(statearr_24283[(12)] = inst_24241);

(statearr_24283[(11)] = inst_24242__$1);

return statearr_24283;
})();
if(cljs.core.truth_(inst_24243)){
var statearr_24284_24309 = state_24269__$1;
(statearr_24284_24309[(1)] = (8));

} else {
var statearr_24285_24310 = state_24269__$1;
(statearr_24285_24310[(1)] = (9));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_24270 === (14))){
var inst_24262 = (state_24269[(2)]);
var inst_24263 = cljs.core.async.close_BANG_(out);
var state_24269__$1 = (function (){var statearr_24287 = state_24269;
(statearr_24287[(13)] = inst_24262);

return statearr_24287;
})();
var statearr_24288_24311 = state_24269__$1;
(statearr_24288_24311[(2)] = inst_24263);

(statearr_24288_24311[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24270 === (10))){
var inst_24253 = (state_24269[(2)]);
var state_24269__$1 = state_24269;
var statearr_24289_24312 = state_24269__$1;
(statearr_24289_24312[(2)] = inst_24253);

(statearr_24289_24312[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24270 === (8))){
var inst_24233 = (state_24269[(7)]);
var inst_24242 = (state_24269[(11)]);
var tmp24286 = inst_24233;
var inst_24233__$1 = tmp24286;
var inst_24234 = inst_24242;
var state_24269__$1 = (function (){var statearr_24290 = state_24269;
(statearr_24290[(7)] = inst_24233__$1);

(statearr_24290[(8)] = inst_24234);

return statearr_24290;
})();
var statearr_24291_24313 = state_24269__$1;
(statearr_24291_24313[(2)] = null);

(statearr_24291_24313[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11422__auto___24299,out))
;
return ((function (switch__11342__auto__,c__11422__auto___24299,out){
return (function() {
var state_machine__11343__auto__ = null;
var state_machine__11343__auto____0 = (function (){
var statearr_24295 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24295[(0)] = state_machine__11343__auto__);

(statearr_24295[(1)] = (1));

return statearr_24295;
});
var state_machine__11343__auto____1 = (function (state_24269){
while(true){
var ret_value__11344__auto__ = (function (){try{while(true){
var result__11345__auto__ = switch__11342__auto__(state_24269);
if(cljs.core.keyword_identical_QMARK_(result__11345__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11345__auto__;
}
break;
}
}catch (e24296){if((e24296 instanceof Object)){
var ex__11346__auto__ = e24296;
var statearr_24297_24314 = state_24269;
(statearr_24297_24314[(5)] = ex__11346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24269);

return cljs.core.constant$keyword$40;
} else {
throw e24296;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11344__auto__,cljs.core.constant$keyword$40)){
var G__24315 = state_24269;
state_24269 = G__24315;
continue;
} else {
return ret_value__11344__auto__;
}
break;
}
});
state_machine__11343__auto__ = function(state_24269){
switch(arguments.length){
case 0:
return state_machine__11343__auto____0.call(this);
case 1:
return state_machine__11343__auto____1.call(this,state_24269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11343__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11343__auto____0;
state_machine__11343__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11343__auto____1;
return state_machine__11343__auto__;
})()
;})(switch__11342__auto__,c__11422__auto___24299,out))
})();
var state__11424__auto__ = (function (){var statearr_24298 = (function (){return (f__11423__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11423__auto__.cljs$core$IFn$_invoke$arity$0() : f__11423__auto__.call(null));
})();
(statearr_24298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11422__auto___24299);

return statearr_24298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11424__auto__);
});})(c__11422__auto___24299,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11422__auto___24463 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11422__auto___24463,out){
return (function (){
var f__11423__auto__ = (function (){var switch__11342__auto__ = ((function (c__11422__auto___24463,out){
return (function (state_24432){
var state_val_24433 = (state_24432[(1)]);
if((state_val_24433 === (7))){
var inst_24428 = (state_24432[(2)]);
var state_24432__$1 = state_24432;
var statearr_24434_24464 = state_24432__$1;
(statearr_24434_24464[(2)] = inst_24428);

(statearr_24434_24464[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24433 === (1))){
var inst_24391 = [];
var inst_24392 = inst_24391;
var inst_24393 = cljs.core.constant$keyword$55;
var state_24432__$1 = (function (){var statearr_24435 = state_24432;
(statearr_24435[(7)] = inst_24392);

(statearr_24435[(8)] = inst_24393);

return statearr_24435;
})();
var statearr_24436_24465 = state_24432__$1;
(statearr_24436_24465[(2)] = null);

(statearr_24436_24465[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24433 === (4))){
var inst_24396 = (state_24432[(9)]);
var inst_24396__$1 = (state_24432[(2)]);
var inst_24397 = (inst_24396__$1 == null);
var inst_24398 = cljs.core.not(inst_24397);
var state_24432__$1 = (function (){var statearr_24437 = state_24432;
(statearr_24437[(9)] = inst_24396__$1);

return statearr_24437;
})();
if(inst_24398){
var statearr_24438_24466 = state_24432__$1;
(statearr_24438_24466[(1)] = (5));

} else {
var statearr_24439_24467 = state_24432__$1;
(statearr_24439_24467[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_24433 === (15))){
var inst_24422 = (state_24432[(2)]);
var state_24432__$1 = state_24432;
var statearr_24440_24468 = state_24432__$1;
(statearr_24440_24468[(2)] = inst_24422);

(statearr_24440_24468[(1)] = (14));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24433 === (13))){
var state_24432__$1 = state_24432;
var statearr_24441_24469 = state_24432__$1;
(statearr_24441_24469[(2)] = null);

(statearr_24441_24469[(1)] = (14));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24433 === (6))){
var inst_24392 = (state_24432[(7)]);
var inst_24417 = inst_24392.length;
var inst_24418 = (inst_24417 > (0));
var state_24432__$1 = state_24432;
if(cljs.core.truth_(inst_24418)){
var statearr_24442_24470 = state_24432__$1;
(statearr_24442_24470[(1)] = (12));

} else {
var statearr_24443_24471 = state_24432__$1;
(statearr_24443_24471[(1)] = (13));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_24433 === (3))){
var inst_24430 = (state_24432[(2)]);
var state_24432__$1 = state_24432;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24432__$1,inst_24430);
} else {
if((state_val_24433 === (12))){
var inst_24392 = (state_24432[(7)]);
var inst_24420 = cljs.core.vec(inst_24392);
var state_24432__$1 = state_24432;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24432__$1,(15),out,inst_24420);
} else {
if((state_val_24433 === (2))){
var state_24432__$1 = state_24432;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24432__$1,(4),ch);
} else {
if((state_val_24433 === (11))){
var inst_24396 = (state_24432[(9)]);
var inst_24400 = (state_24432[(10)]);
var inst_24410 = (state_24432[(2)]);
var inst_24411 = [];
var inst_24412 = inst_24411.push(inst_24396);
var inst_24392 = inst_24411;
var inst_24393 = inst_24400;
var state_24432__$1 = (function (){var statearr_24444 = state_24432;
(statearr_24444[(7)] = inst_24392);

(statearr_24444[(11)] = inst_24410);

(statearr_24444[(8)] = inst_24393);

(statearr_24444[(12)] = inst_24412);

return statearr_24444;
})();
var statearr_24445_24472 = state_24432__$1;
(statearr_24445_24472[(2)] = null);

(statearr_24445_24472[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24433 === (9))){
var inst_24392 = (state_24432[(7)]);
var inst_24408 = cljs.core.vec(inst_24392);
var state_24432__$1 = state_24432;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24432__$1,(11),out,inst_24408);
} else {
if((state_val_24433 === (5))){
var inst_24396 = (state_24432[(9)]);
var inst_24393 = (state_24432[(8)]);
var inst_24400 = (state_24432[(10)]);
var inst_24400__$1 = (function (){var G__24446 = inst_24396;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24446) : f.call(null,G__24446));
})();
var inst_24401 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24400__$1,inst_24393);
var inst_24402 = cljs.core.keyword_identical_QMARK_(inst_24393,cljs.core.constant$keyword$55);
var inst_24403 = (inst_24401) || (inst_24402);
var state_24432__$1 = (function (){var statearr_24447 = state_24432;
(statearr_24447[(10)] = inst_24400__$1);

return statearr_24447;
})();
if(cljs.core.truth_(inst_24403)){
var statearr_24448_24473 = state_24432__$1;
(statearr_24448_24473[(1)] = (8));

} else {
var statearr_24449_24474 = state_24432__$1;
(statearr_24449_24474[(1)] = (9));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_24433 === (14))){
var inst_24425 = (state_24432[(2)]);
var inst_24426 = cljs.core.async.close_BANG_(out);
var state_24432__$1 = (function (){var statearr_24451 = state_24432;
(statearr_24451[(13)] = inst_24425);

return statearr_24451;
})();
var statearr_24452_24475 = state_24432__$1;
(statearr_24452_24475[(2)] = inst_24426);

(statearr_24452_24475[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24433 === (10))){
var inst_24415 = (state_24432[(2)]);
var state_24432__$1 = state_24432;
var statearr_24453_24476 = state_24432__$1;
(statearr_24453_24476[(2)] = inst_24415);

(statearr_24453_24476[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24433 === (8))){
var inst_24392 = (state_24432[(7)]);
var inst_24396 = (state_24432[(9)]);
var inst_24400 = (state_24432[(10)]);
var inst_24405 = inst_24392.push(inst_24396);
var tmp24450 = inst_24392;
var inst_24392__$1 = tmp24450;
var inst_24393 = inst_24400;
var state_24432__$1 = (function (){var statearr_24454 = state_24432;
(statearr_24454[(7)] = inst_24392__$1);

(statearr_24454[(8)] = inst_24393);

(statearr_24454[(14)] = inst_24405);

return statearr_24454;
})();
var statearr_24455_24477 = state_24432__$1;
(statearr_24455_24477[(2)] = null);

(statearr_24455_24477[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11422__auto___24463,out))
;
return ((function (switch__11342__auto__,c__11422__auto___24463,out){
return (function() {
var state_machine__11343__auto__ = null;
var state_machine__11343__auto____0 = (function (){
var statearr_24459 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24459[(0)] = state_machine__11343__auto__);

(statearr_24459[(1)] = (1));

return statearr_24459;
});
var state_machine__11343__auto____1 = (function (state_24432){
while(true){
var ret_value__11344__auto__ = (function (){try{while(true){
var result__11345__auto__ = switch__11342__auto__(state_24432);
if(cljs.core.keyword_identical_QMARK_(result__11345__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11345__auto__;
}
break;
}
}catch (e24460){if((e24460 instanceof Object)){
var ex__11346__auto__ = e24460;
var statearr_24461_24478 = state_24432;
(statearr_24461_24478[(5)] = ex__11346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24432);

return cljs.core.constant$keyword$40;
} else {
throw e24460;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11344__auto__,cljs.core.constant$keyword$40)){
var G__24479 = state_24432;
state_24432 = G__24479;
continue;
} else {
return ret_value__11344__auto__;
}
break;
}
});
state_machine__11343__auto__ = function(state_24432){
switch(arguments.length){
case 0:
return state_machine__11343__auto____0.call(this);
case 1:
return state_machine__11343__auto____1.call(this,state_24432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11343__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11343__auto____0;
state_machine__11343__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11343__auto____1;
return state_machine__11343__auto__;
})()
;})(switch__11342__auto__,c__11422__auto___24463,out))
})();
var state__11424__auto__ = (function (){var statearr_24462 = (function (){return (f__11423__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11423__auto__.cljs$core$IFn$_invoke$arity$0() : f__11423__auto__.call(null));
})();
(statearr_24462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11422__auto___24463);

return statearr_24462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11424__auto__);
});})(c__11422__auto___24463,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
