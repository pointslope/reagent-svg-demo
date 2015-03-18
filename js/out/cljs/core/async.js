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
if(typeof cljs.core.async.t21942 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21942 = (function (f,fn_handler,meta21943){
this.f = f;
this.fn_handler = fn_handler;
this.meta21943 = meta21943;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21942.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t21942.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t21942.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t21942.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21944){
var self__ = this;
var _21944__$1 = this;
return self__.meta21943;
});

cljs.core.async.t21942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21944,meta21943__$1){
var self__ = this;
var _21944__$1 = this;
return (new cljs.core.async.t21942(self__.f,self__.fn_handler,meta21943__$1));
});

cljs.core.async.t21942.cljs$lang$type = true;

cljs.core.async.t21942.cljs$lang$ctorStr = "cljs.core.async/t21942";

cljs.core.async.t21942.cljs$lang$ctorPrWriter = (function (this__4170__auto__,writer__4171__auto__,opt__4172__auto__){
return cljs.core._write(writer__4171__auto__,"cljs.core.async/t21942");
});

cljs.core.async.__GT_t21942 = (function __GT_t21942(f__$1,fn_handler__$1,meta21943){
return (new cljs.core.async.t21942(f__$1,fn_handler__$1,meta21943));
});

}

return (new cljs.core.async.t21942(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__21946 = buff;
if(G__21946){
var bit__4264__auto__ = null;
if(cljs.core.truth_((function (){var or__3583__auto__ = bit__4264__auto__;
if(cljs.core.truth_(or__3583__auto__)){
return or__3583__auto__;
} else {
return G__21946.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__21946.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__21946);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__21946);
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
var val_21963 = (function (){var G__21960 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21960) : cljs.core.deref.call(null,G__21960));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__21961_21964 = val_21963;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__21961_21964) : fn1.call(null,G__21961_21964));
} else {
cljs.core.async.impl.dispatch.run(((function (val_21963,ret){
return (function (){
var G__21962 = val_21963;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__21962) : fn1.call(null,G__21962));
});})(val_21963,ret))
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
var G__21973 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21973) : cljs.core.deref.call(null,G__21973));
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
var ret = (function (){var G__21974 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21974) : cljs.core.deref.call(null,G__21974));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__21975_21977 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__21975_21977) : fn1.call(null,G__21975_21977));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__21976 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__21976) : fn1.call(null,G__21976));
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
var n__4470__auto___21978 = n;
var x_21979 = (0);
while(true){
if((x_21979 < n__4470__auto___21978)){
(a[x_21979] = (0));

var G__21980 = (x_21979 + (1));
x_21979 = G__21980;
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

var G__21981 = (i + (1));
i = G__21981;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = (function (){var G__21989 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21989) : cljs.core.atom.call(null,G__21989));
})();
if(typeof cljs.core.async.t21990 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21990 = (function (flag,alt_flag,meta21991){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta21991 = meta21991;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21990.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t21990.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__21993 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21993) : cljs.core.deref.call(null,G__21993));
});})(flag))
;

cljs.core.async.t21990.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__21994_21996 = self__.flag;
var G__21995_21997 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21994_21996,G__21995_21997) : cljs.core.reset_BANG_.call(null,G__21994_21996,G__21995_21997));

return true;
});})(flag))
;

cljs.core.async.t21990.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21992){
var self__ = this;
var _21992__$1 = this;
return self__.meta21991;
});})(flag))
;

cljs.core.async.t21990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21992,meta21991__$1){
var self__ = this;
var _21992__$1 = this;
return (new cljs.core.async.t21990(self__.flag,self__.alt_flag,meta21991__$1));
});})(flag))
;

cljs.core.async.t21990.cljs$lang$type = true;

cljs.core.async.t21990.cljs$lang$ctorStr = "cljs.core.async/t21990";

cljs.core.async.t21990.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4170__auto__,writer__4171__auto__,opt__4172__auto__){
return cljs.core._write(writer__4171__auto__,"cljs.core.async/t21990");
});})(flag))
;

cljs.core.async.__GT_t21990 = ((function (flag){
return (function __GT_t21990(flag__$1,alt_flag__$1,meta21991){
return (new cljs.core.async.t21990(flag__$1,alt_flag__$1,meta21991));
});})(flag))
;

}

return (new cljs.core.async.t21990(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t22001 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22001 = (function (cb,flag,alt_handler,meta22002){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta22002 = meta22002;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22001.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22001.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t22001.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t22001.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22003){
var self__ = this;
var _22003__$1 = this;
return self__.meta22002;
});

cljs.core.async.t22001.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22003,meta22002__$1){
var self__ = this;
var _22003__$1 = this;
return (new cljs.core.async.t22001(self__.cb,self__.flag,self__.alt_handler,meta22002__$1));
});

cljs.core.async.t22001.cljs$lang$type = true;

cljs.core.async.t22001.cljs$lang$ctorStr = "cljs.core.async/t22001";

cljs.core.async.t22001.cljs$lang$ctorPrWriter = (function (this__4170__auto__,writer__4171__auto__,opt__4172__auto__){
return cljs.core._write(writer__4171__auto__,"cljs.core.async/t22001");
});

cljs.core.async.__GT_t22001 = (function __GT_t22001(cb__$1,flag__$1,alt_handler__$1,meta22002){
return (new cljs.core.async.t22001(cb__$1,flag__$1,alt_handler__$1,meta22002));
});

}

return (new cljs.core.async.t22001(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.constant$keyword$52.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__22011 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__22011) : port.call(null,G__22011));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__22012 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__22012) : port.call(null,G__22012));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22004_SHARP_){
var G__22013 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22004_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__22013) : fret.call(null,G__22013));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22005_SHARP_){
var G__22014 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22005_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__22014) : fret.call(null,G__22014));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__22015 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22015) : cljs.core.deref.call(null,G__22015));
})(),(function (){var or__3583__auto__ = wport;
if(cljs.core.truth_(or__3583__auto__)){
return or__3583__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22016 = (i + (1));
i = G__22016;
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
var alts_BANG___delegate = function (ports,p__22017){
var map__22019 = p__22017;
var map__22019__$1 = ((cljs.core.seq_QMARK_(map__22019))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22019):map__22019);
var opts = map__22019__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__22017 = null;
if (arguments.length > 1) {
var G__22020__i = 0, G__22020__a = new Array(arguments.length -  1);
while (G__22020__i < G__22020__a.length) {G__22020__a[G__22020__i] = arguments[G__22020__i + 1]; ++G__22020__i;}
  p__22017 = new cljs.core.IndexedSeq(G__22020__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__22017);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__22021){
var ports = cljs.core.first(arglist__22021);
var p__22017 = cljs.core.rest(arglist__22021);
return alts_BANG___delegate(ports,p__22017);
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
var c__11802__auto___22119 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11802__auto___22119){
return (function (){
var f__11803__auto__ = (function (){var switch__11722__auto__ = ((function (c__11802__auto___22119){
return (function (state_22095){
var state_val_22096 = (state_22095[(1)]);
if((state_val_22096 === (7))){
var inst_22091 = (state_22095[(2)]);
var state_22095__$1 = state_22095;
var statearr_22097_22120 = state_22095__$1;
(statearr_22097_22120[(2)] = inst_22091);

(statearr_22097_22120[(1)] = (3));


return cljs.core.constant$keyword$46;
} else {
if((state_val_22096 === (1))){
var state_22095__$1 = state_22095;
var statearr_22098_22121 = state_22095__$1;
(statearr_22098_22121[(2)] = null);

(statearr_22098_22121[(1)] = (2));


return cljs.core.constant$keyword$46;
} else {
if((state_val_22096 === (4))){
var inst_22074 = (state_22095[(7)]);
var inst_22074__$1 = (state_22095[(2)]);
var inst_22075 = (inst_22074__$1 == null);
var state_22095__$1 = (function (){var statearr_22099 = state_22095;
(statearr_22099[(7)] = inst_22074__$1);

return statearr_22099;
})();
if(cljs.core.truth_(inst_22075)){
var statearr_22100_22122 = state_22095__$1;
(statearr_22100_22122[(1)] = (5));

} else {
var statearr_22101_22123 = state_22095__$1;
(statearr_22101_22123[(1)] = (6));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_22096 === (13))){
var state_22095__$1 = state_22095;
var statearr_22102_22124 = state_22095__$1;
(statearr_22102_22124[(2)] = null);

(statearr_22102_22124[(1)] = (14));


return cljs.core.constant$keyword$46;
} else {
if((state_val_22096 === (6))){
var inst_22074 = (state_22095[(7)]);
var state_22095__$1 = state_22095;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22095__$1,(11),to,inst_22074);
} else {
if((state_val_22096 === (3))){
var inst_22093 = (state_22095[(2)]);
var state_22095__$1 = state_22095;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22095__$1,inst_22093);
} else {
if((state_val_22096 === (12))){
var state_22095__$1 = state_22095;
var statearr_22103_22125 = state_22095__$1;
(statearr_22103_22125[(2)] = null);

(statearr_22103_22125[(1)] = (2));


return cljs.core.constant$keyword$46;
} else {
if((state_val_22096 === (2))){
var state_22095__$1 = state_22095;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22095__$1,(4),from);
} else {
if((state_val_22096 === (11))){
var inst_22084 = (state_22095[(2)]);
var state_22095__$1 = state_22095;
if(cljs.core.truth_(inst_22084)){
var statearr_22104_22126 = state_22095__$1;
(statearr_22104_22126[(1)] = (12));

} else {
var statearr_22105_22127 = state_22095__$1;
(statearr_22105_22127[(1)] = (13));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_22096 === (9))){
var state_22095__$1 = state_22095;
var statearr_22106_22128 = state_22095__$1;
(statearr_22106_22128[(2)] = null);

(statearr_22106_22128[(1)] = (10));


return cljs.core.constant$keyword$46;
} else {
if((state_val_22096 === (5))){
var state_22095__$1 = state_22095;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22107_22129 = state_22095__$1;
(statearr_22107_22129[(1)] = (8));

} else {
var statearr_22108_22130 = state_22095__$1;
(statearr_22108_22130[(1)] = (9));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_22096 === (14))){
var inst_22089 = (state_22095[(2)]);
var state_22095__$1 = state_22095;
var statearr_22109_22131 = state_22095__$1;
(statearr_22109_22131[(2)] = inst_22089);

(statearr_22109_22131[(1)] = (7));


return cljs.core.constant$keyword$46;
} else {
if((state_val_22096 === (10))){
var inst_22081 = (state_22095[(2)]);
var state_22095__$1 = state_22095;
var statearr_22110_22132 = state_22095__$1;
(statearr_22110_22132[(2)] = inst_22081);

(statearr_22110_22132[(1)] = (7));


return cljs.core.constant$keyword$46;
} else {
if((state_val_22096 === (8))){
var inst_22078 = cljs.core.async.close_BANG_(to);
var state_22095__$1 = state_22095;
var statearr_22111_22133 = state_22095__$1;
(statearr_22111_22133[(2)] = inst_22078);

(statearr_22111_22133[(1)] = (10));


return cljs.core.constant$keyword$46;
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
});})(c__11802__auto___22119))
;
return ((function (switch__11722__auto__,c__11802__auto___22119){
return (function() {
var state_machine__11723__auto__ = null;
var state_machine__11723__auto____0 = (function (){
var statearr_22115 = [null,null,null,null,null,null,null,null];
(statearr_22115[(0)] = state_machine__11723__auto__);

(statearr_22115[(1)] = (1));

return statearr_22115;
});
var state_machine__11723__auto____1 = (function (state_22095){
while(true){
var ret_value__11724__auto__ = (function (){try{while(true){
var result__11725__auto__ = switch__11722__auto__(state_22095);
if(cljs.core.keyword_identical_QMARK_(result__11725__auto__,cljs.core.constant$keyword$46)){
continue;
} else {
return result__11725__auto__;
}
break;
}
}catch (e22116){if((e22116 instanceof Object)){
var ex__11726__auto__ = e22116;
var statearr_22117_22134 = state_22095;
(statearr_22117_22134[(5)] = ex__11726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22095);

return cljs.core.constant$keyword$46;
} else {
throw e22116;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11724__auto__,cljs.core.constant$keyword$46)){
var G__22135 = state_22095;
state_22095 = G__22135;
continue;
} else {
return ret_value__11724__auto__;
}
break;
}
});
state_machine__11723__auto__ = function(state_22095){
switch(arguments.length){
case 0:
return state_machine__11723__auto____0.call(this);
case 1:
return state_machine__11723__auto____1.call(this,state_22095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11723__auto____0;
state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11723__auto____1;
return state_machine__11723__auto__;
})()
;})(switch__11722__auto__,c__11802__auto___22119))
})();
var state__11804__auto__ = (function (){var statearr_22118 = (function (){return (f__11803__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11803__auto__.cljs$core$IFn$_invoke$arity$0() : f__11803__auto__.call(null));
})();
(statearr_22118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11802__auto___22119);

return statearr_22118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11804__auto__);
});})(c__11802__auto___22119))
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
return (function (p__22321){
var vec__22322 = p__22321;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22322,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22322,(1),null);
var job = vec__22322;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__11802__auto___22506 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11802__auto___22506,res,vec__22322,v,p,job,jobs,results){
return (function (){
var f__11803__auto__ = (function (){var switch__11722__auto__ = ((function (c__11802__auto___22506,res,vec__22322,v,p,job,jobs,results){
return (function (state_22327){
var state_val_22328 = (state_22327[(1)]);
if((state_val_22328 === (2))){
var inst_22324 = (state_22327[(2)]);
var inst_22325 = cljs.core.async.close_BANG_(res);
var state_22327__$1 = (function (){var statearr_22329 = state_22327;
(statearr_22329[(7)] = inst_22324);

return statearr_22329;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22327__$1,inst_22325);
} else {
if((state_val_22328 === (1))){
var state_22327__$1 = state_22327;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22327__$1,(2),res,v);
} else {
return null;
}
}
});})(c__11802__auto___22506,res,vec__22322,v,p,job,jobs,results))
;
return ((function (switch__11722__auto__,c__11802__auto___22506,res,vec__22322,v,p,job,jobs,results){
return (function() {
var state_machine__11723__auto__ = null;
var state_machine__11723__auto____0 = (function (){
var statearr_22333 = [null,null,null,null,null,null,null,null];
(statearr_22333[(0)] = state_machine__11723__auto__);

(statearr_22333[(1)] = (1));

return statearr_22333;
});
var state_machine__11723__auto____1 = (function (state_22327){
while(true){
var ret_value__11724__auto__ = (function (){try{while(true){
var result__11725__auto__ = switch__11722__auto__(state_22327);
if(cljs.core.keyword_identical_QMARK_(result__11725__auto__,cljs.core.constant$keyword$46)){
continue;
} else {
return result__11725__auto__;
}
break;
}
}catch (e22334){if((e22334 instanceof Object)){
var ex__11726__auto__ = e22334;
var statearr_22335_22507 = state_22327;
(statearr_22335_22507[(5)] = ex__11726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22327);

return cljs.core.constant$keyword$46;
} else {
throw e22334;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11724__auto__,cljs.core.constant$keyword$46)){
var G__22508 = state_22327;
state_22327 = G__22508;
continue;
} else {
return ret_value__11724__auto__;
}
break;
}
});
state_machine__11723__auto__ = function(state_22327){
switch(arguments.length){
case 0:
return state_machine__11723__auto____0.call(this);
case 1:
return state_machine__11723__auto____1.call(this,state_22327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11723__auto____0;
state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11723__auto____1;
return state_machine__11723__auto__;
})()
;})(switch__11722__auto__,c__11802__auto___22506,res,vec__22322,v,p,job,jobs,results))
})();
var state__11804__auto__ = (function (){var statearr_22336 = (function (){return (f__11803__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11803__auto__.cljs$core$IFn$_invoke$arity$0() : f__11803__auto__.call(null));
})();
(statearr_22336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11802__auto___22506);

return statearr_22336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11804__auto__);
});})(c__11802__auto___22506,res,vec__22322,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22337){
var vec__22338 = p__22337;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22338,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22338,(1),null);
var job = vec__22338;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__22339_22509 = v;
var G__22340_22510 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__22339_22509,G__22340_22510) : xf.call(null,G__22339_22509,G__22340_22510));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4470__auto___22511 = n;
var __22512 = (0);
while(true){
if((__22512 < n__4470__auto___22511)){
var G__22341_22513 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22341_22513) {
case "async":
var c__11802__auto___22515 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__22512,c__11802__auto___22515,G__22341_22513,n__4470__auto___22511,jobs,results,process,async){
return (function (){
var f__11803__auto__ = (function (){var switch__11722__auto__ = ((function (__22512,c__11802__auto___22515,G__22341_22513,n__4470__auto___22511,jobs,results,process,async){
return (function (state_22354){
var state_val_22355 = (state_22354[(1)]);
if((state_val_22355 === (7))){
var inst_22350 = (state_22354[(2)]);
var state_22354__$1 = state_22354;
var statearr_22356_22516 = state_22354__$1;
(statearr_22356_22516[(2)] = inst_22350);

(statearr_22356_22516[(1)] = (3));


return cljs.core.constant$keyword$46;
} else {
if((state_val_22355 === (6))){
var state_22354__$1 = state_22354;
var statearr_22357_22517 = state_22354__$1;
(statearr_22357_22517[(2)] = null);

(statearr_22357_22517[(1)] = (7));


return cljs.core.constant$keyword$46;
} else {
if((state_val_22355 === (5))){
var state_22354__$1 = state_22354;
var statearr_22358_22518 = state_22354__$1;
(statearr_22358_22518[(2)] = null);

(statearr_22358_22518[(1)] = (2));


return cljs.core.constant$keyword$46;
} else {
if((state_val_22355 === (4))){
var inst_22344 = (state_22354[(2)]);
var inst_22345 = async(inst_22344);
var state_22354__$1 = state_22354;
if(cljs.core.truth_(inst_22345)){
var statearr_22359_22519 = state_22354__$1;
(statearr_22359_22519[(1)] = (5));

} else {
var statearr_22360_22520 = state_22354__$1;
(statearr_22360_22520[(1)] = (6));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_22355 === (3))){
var inst_22352 = (state_22354[(2)]);
var state_22354__$1 = state_22354;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22354__$1,inst_22352);
} else {
if((state_val_22355 === (2))){
var state_22354__$1 = state_22354;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22354__$1,(4),jobs);
} else {
if((state_val_22355 === (1))){
var state_22354__$1 = state_22354;
var statearr_22361_22521 = state_22354__$1;
(statearr_22361_22521[(2)] = null);

(statearr_22361_22521[(1)] = (2));


return cljs.core.constant$keyword$46;
} else {
return null;
}
}
}
}
}
}
}
});})(__22512,c__11802__auto___22515,G__22341_22513,n__4470__auto___22511,jobs,results,process,async))
;
return ((function (__22512,switch__11722__auto__,c__11802__auto___22515,G__22341_22513,n__4470__auto___22511,jobs,results,process,async){
return (function() {
var state_machine__11723__auto__ = null;
var state_machine__11723__auto____0 = (function (){
var statearr_22365 = [null,null,null,null,null,null,null];
(statearr_22365[(0)] = state_machine__11723__auto__);

(statearr_22365[(1)] = (1));

return statearr_22365;
});
var state_machine__11723__auto____1 = (function (state_22354){
while(true){
var ret_value__11724__auto__ = (function (){try{while(true){
var result__11725__auto__ = switch__11722__auto__(state_22354);
if(cljs.core.keyword_identical_QMARK_(result__11725__auto__,cljs.core.constant$keyword$46)){
continue;
} else {
return result__11725__auto__;
}
break;
}
}catch (e22366){if((e22366 instanceof Object)){
var ex__11726__auto__ = e22366;
var statearr_22367_22522 = state_22354;
(statearr_22367_22522[(5)] = ex__11726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22354);

return cljs.core.constant$keyword$46;
} else {
throw e22366;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11724__auto__,cljs.core.constant$keyword$46)){
var G__22523 = state_22354;
state_22354 = G__22523;
continue;
} else {
return ret_value__11724__auto__;
}
break;
}
});
state_machine__11723__auto__ = function(state_22354){
switch(arguments.length){
case 0:
return state_machine__11723__auto____0.call(this);
case 1:
return state_machine__11723__auto____1.call(this,state_22354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11723__auto____0;
state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11723__auto____1;
return state_machine__11723__auto__;
})()
;})(__22512,switch__11722__auto__,c__11802__auto___22515,G__22341_22513,n__4470__auto___22511,jobs,results,process,async))
})();
var state__11804__auto__ = (function (){var statearr_22368 = (function (){return (f__11803__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11803__auto__.cljs$core$IFn$_invoke$arity$0() : f__11803__auto__.call(null));
})();
(statearr_22368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11802__auto___22515);

return statearr_22368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11804__auto__);
});})(__22512,c__11802__auto___22515,G__22341_22513,n__4470__auto___22511,jobs,results,process,async))
);


break;
case "compute":
var c__11802__auto___22524 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__22512,c__11802__auto___22524,G__22341_22513,n__4470__auto___22511,jobs,results,process,async){
return (function (){
var f__11803__auto__ = (function (){var switch__11722__auto__ = ((function (__22512,c__11802__auto___22524,G__22341_22513,n__4470__auto___22511,jobs,results,process,async){
return (function (state_22381){
var state_val_22382 = (state_22381[(1)]);
if((state_val_22382 === (7))){
var inst_22377 = (state_22381[(2)]);
var state_22381__$1 = state_22381;
var statearr_22383_22525 = state_22381__$1;
(statearr_22383_22525[(2)] = inst_22377);

(statearr_22383_22525[(1)] = (3));


return cljs.core.constant$keyword$46;
} else {
if((state_val_22382 === (6))){
var state_22381__$1 = state_22381;
var statearr_22384_22526 = state_22381__$1;
(statearr_22384_22526[(2)] = null);

(statearr_22384_22526[(1)] = (7));


return cljs.core.constant$keyword$46;
} else {
if((state_val_22382 === (5))){
var state_22381__$1 = state_22381;
var statearr_22385_22527 = state_22381__$1;
(statearr_22385_22527[(2)] = null);

(statearr_22385_22527[(1)] = (2));


return cljs.core.constant$keyword$46;
} else {
if((state_val_22382 === (4))){
var inst_22371 = (state_22381[(2)]);
var inst_22372 = process(inst_22371);
var state_22381__$1 = state_22381;
if(cljs.core.truth_(inst_22372)){
var statearr_22386_22528 = state_22381__$1;
(statearr_22386_22528[(1)] = (5));

} else {
var statearr_22387_22529 = state_22381__$1;
(statearr_22387_22529[(1)] = (6));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_22382 === (3))){
var inst_22379 = (state_22381[(2)]);
var state_22381__$1 = state_22381;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22381__$1,inst_22379);
} else {
if((state_val_22382 === (2))){
var state_22381__$1 = state_22381;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22381__$1,(4),jobs);
} else {
if((state_val_22382 === (1))){
var state_22381__$1 = state_22381;
var statearr_22388_22530 = state_22381__$1;
(statearr_22388_22530[(2)] = null);

(statearr_22388_22530[(1)] = (2));


return cljs.core.constant$keyword$46;
} else {
return null;
}
}
}
}
}
}
}
});})(__22512,c__11802__auto___22524,G__22341_22513,n__4470__auto___22511,jobs,results,process,async))
;
return ((function (__22512,switch__11722__auto__,c__11802__auto___22524,G__22341_22513,n__4470__auto___22511,jobs,results,process,async){
return (function() {
var state_machine__11723__auto__ = null;
var state_machine__11723__auto____0 = (function (){
var statearr_22392 = [null,null,null,null,null,null,null];
(statearr_22392[(0)] = state_machine__11723__auto__);

(statearr_22392[(1)] = (1));

return statearr_22392;
});
var state_machine__11723__auto____1 = (function (state_22381){
while(true){
var ret_value__11724__auto__ = (function (){try{while(true){
var result__11725__auto__ = switch__11722__auto__(state_22381);
if(cljs.core.keyword_identical_QMARK_(result__11725__auto__,cljs.core.constant$keyword$46)){
continue;
} else {
return result__11725__auto__;
}
break;
}
}catch (e22393){if((e22393 instanceof Object)){
var ex__11726__auto__ = e22393;
var statearr_22394_22531 = state_22381;
(statearr_22394_22531[(5)] = ex__11726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22381);

return cljs.core.constant$keyword$46;
} else {
throw e22393;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11724__auto__,cljs.core.constant$keyword$46)){
var G__22532 = state_22381;
state_22381 = G__22532;
continue;
} else {
return ret_value__11724__auto__;
}
break;
}
});
state_machine__11723__auto__ = function(state_22381){
switch(arguments.length){
case 0:
return state_machine__11723__auto____0.call(this);
case 1:
return state_machine__11723__auto____1.call(this,state_22381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11723__auto____0;
state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11723__auto____1;
return state_machine__11723__auto__;
})()
;})(__22512,switch__11722__auto__,c__11802__auto___22524,G__22341_22513,n__4470__auto___22511,jobs,results,process,async))
})();
var state__11804__auto__ = (function (){var statearr_22395 = (function (){return (f__11803__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11803__auto__.cljs$core$IFn$_invoke$arity$0() : f__11803__auto__.call(null));
})();
(statearr_22395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11802__auto___22524);

return statearr_22395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11804__auto__);
});})(__22512,c__11802__auto___22524,G__22341_22513,n__4470__auto___22511,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__22533 = (__22512 + (1));
__22512 = G__22533;
continue;
} else {
}
break;
}

var c__11802__auto___22534 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11802__auto___22534,jobs,results,process,async){
return (function (){
var f__11803__auto__ = (function (){var switch__11722__auto__ = ((function (c__11802__auto___22534,jobs,results,process,async){
return (function (state_22417){
var state_val_22418 = (state_22417[(1)]);
if((state_val_22418 === (9))){
var inst_22410 = (state_22417[(2)]);
var state_22417__$1 = (function (){var statearr_22419 = state_22417;
(statearr_22419[(7)] = inst_22410);

return statearr_22419;
})();
var statearr_22420_22535 = state_22417__$1;
(statearr_22420_22535[(2)] = null);

(statearr_22420_22535[(1)] = (2));


return cljs.core.constant$keyword$46;
} else {
if((state_val_22418 === (8))){
var inst_22403 = (state_22417[(8)]);
var inst_22408 = (state_22417[(2)]);
var state_22417__$1 = (function (){var statearr_22421 = state_22417;
(statearr_22421[(9)] = inst_22408);

return statearr_22421;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22417__$1,(9),results,inst_22403);
} else {
if((state_val_22418 === (7))){
var inst_22413 = (state_22417[(2)]);
var state_22417__$1 = state_22417;
var statearr_22422_22536 = state_22417__$1;
(statearr_22422_22536[(2)] = inst_22413);

(statearr_22422_22536[(1)] = (3));


return cljs.core.constant$keyword$46;
} else {
if((state_val_22418 === (6))){
var inst_22403 = (state_22417[(8)]);
var inst_22398 = (state_22417[(10)]);
var inst_22403__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_22404 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22405 = [inst_22398,inst_22403__$1];
var inst_22406 = (new cljs.core.PersistentVector(null,2,(5),inst_22404,inst_22405,null));
var state_22417__$1 = (function (){var statearr_22423 = state_22417;
(statearr_22423[(8)] = inst_22403__$1);

return statearr_22423;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22417__$1,(8),jobs,inst_22406);
} else {
if((state_val_22418 === (5))){
var inst_22401 = cljs.core.async.close_BANG_(jobs);
var state_22417__$1 = state_22417;
var statearr_22424_22537 = state_22417__$1;
(statearr_22424_22537[(2)] = inst_22401);

(statearr_22424_22537[(1)] = (7));


return cljs.core.constant$keyword$46;
} else {
if((state_val_22418 === (4))){
var inst_22398 = (state_22417[(10)]);
var inst_22398__$1 = (state_22417[(2)]);
var inst_22399 = (inst_22398__$1 == null);
var state_22417__$1 = (function (){var statearr_22425 = state_22417;
(statearr_22425[(10)] = inst_22398__$1);

return statearr_22425;
})();
if(cljs.core.truth_(inst_22399)){
var statearr_22426_22538 = state_22417__$1;
(statearr_22426_22538[(1)] = (5));

} else {
var statearr_22427_22539 = state_22417__$1;
(statearr_22427_22539[(1)] = (6));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_22418 === (3))){
var inst_22415 = (state_22417[(2)]);
var state_22417__$1 = state_22417;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22417__$1,inst_22415);
} else {
if((state_val_22418 === (2))){
var state_22417__$1 = state_22417;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22417__$1,(4),from);
} else {
if((state_val_22418 === (1))){
var state_22417__$1 = state_22417;
var statearr_22428_22540 = state_22417__$1;
(statearr_22428_22540[(2)] = null);

(statearr_22428_22540[(1)] = (2));


return cljs.core.constant$keyword$46;
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
});})(c__11802__auto___22534,jobs,results,process,async))
;
return ((function (switch__11722__auto__,c__11802__auto___22534,jobs,results,process,async){
return (function() {
var state_machine__11723__auto__ = null;
var state_machine__11723__auto____0 = (function (){
var statearr_22432 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22432[(0)] = state_machine__11723__auto__);

(statearr_22432[(1)] = (1));

return statearr_22432;
});
var state_machine__11723__auto____1 = (function (state_22417){
while(true){
var ret_value__11724__auto__ = (function (){try{while(true){
var result__11725__auto__ = switch__11722__auto__(state_22417);
if(cljs.core.keyword_identical_QMARK_(result__11725__auto__,cljs.core.constant$keyword$46)){
continue;
} else {
return result__11725__auto__;
}
break;
}
}catch (e22433){if((e22433 instanceof Object)){
var ex__11726__auto__ = e22433;
var statearr_22434_22541 = state_22417;
(statearr_22434_22541[(5)] = ex__11726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22417);

return cljs.core.constant$keyword$46;
} else {
throw e22433;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11724__auto__,cljs.core.constant$keyword$46)){
var G__22542 = state_22417;
state_22417 = G__22542;
continue;
} else {
return ret_value__11724__auto__;
}
break;
}
});
state_machine__11723__auto__ = function(state_22417){
switch(arguments.length){
case 0:
return state_machine__11723__auto____0.call(this);
case 1:
return state_machine__11723__auto____1.call(this,state_22417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11723__auto____0;
state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11723__auto____1;
return state_machine__11723__auto__;
})()
;})(switch__11722__auto__,c__11802__auto___22534,jobs,results,process,async))
})();
var state__11804__auto__ = (function (){var statearr_22435 = (function (){return (f__11803__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11803__auto__.cljs$core$IFn$_invoke$arity$0() : f__11803__auto__.call(null));
})();
(statearr_22435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11802__auto___22534);

return statearr_22435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11804__auto__);
});})(c__11802__auto___22534,jobs,results,process,async))
);


var c__11802__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11802__auto__,jobs,results,process,async){
return (function (){
var f__11803__auto__ = (function (){var switch__11722__auto__ = ((function (c__11802__auto__,jobs,results,process,async){
return (function (state_22473){
var state_val_22474 = (state_22473[(1)]);
if((state_val_22474 === (7))){
var inst_22469 = (state_22473[(2)]);
var state_22473__$1 = state_22473;
var statearr_22475_22543 = state_22473__$1;
(statearr_22475_22543[(2)] = inst_22469);

(statearr_22475_22543[(1)] = (3));


return cljs.core.constant$keyword$46;
} else {
if((state_val_22474 === (20))){
var state_22473__$1 = state_22473;
var statearr_22476_22544 = state_22473__$1;
(statearr_22476_22544[(2)] = null);

(statearr_22476_22544[(1)] = (21));


return cljs.core.constant$keyword$46;
} else {
if((state_val_22474 === (1))){
var state_22473__$1 = state_22473;
var statearr_22477_22545 = state_22473__$1;
(statearr_22477_22545[(2)] = null);

(statearr_22477_22545[(1)] = (2));


return cljs.core.constant$keyword$46;
} else {
if((state_val_22474 === (4))){
var inst_22438 = (state_22473[(7)]);
var inst_22438__$1 = (state_22473[(2)]);
var inst_22439 = (inst_22438__$1 == null);
var state_22473__$1 = (function (){var statearr_22478 = state_22473;
(statearr_22478[(7)] = inst_22438__$1);

return statearr_22478;
})();
if(cljs.core.truth_(inst_22439)){
var statearr_22479_22546 = state_22473__$1;
(statearr_22479_22546[(1)] = (5));

} else {
var statearr_22480_22547 = state_22473__$1;
(statearr_22480_22547[(1)] = (6));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_22474 === (15))){
var inst_22451 = (state_22473[(8)]);
var state_22473__$1 = state_22473;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22473__$1,(18),to,inst_22451);
} else {
if((state_val_22474 === (21))){
var inst_22464 = (state_22473[(2)]);
var state_22473__$1 = state_22473;
var statearr_22481_22548 = state_22473__$1;
(statearr_22481_22548[(2)] = inst_22464);

(statearr_22481_22548[(1)] = (13));


return cljs.core.constant$keyword$46;
} else {
if((state_val_22474 === (13))){
var inst_22466 = (state_22473[(2)]);
var state_22473__$1 = (function (){var statearr_22482 = state_22473;
(statearr_22482[(9)] = inst_22466);

return statearr_22482;
})();
var statearr_22483_22549 = state_22473__$1;
(statearr_22483_22549[(2)] = null);

(statearr_22483_22549[(1)] = (2));


return cljs.core.constant$keyword$46;
} else {
if((state_val_22474 === (6))){
var inst_22438 = (state_22473[(7)]);
var state_22473__$1 = state_22473;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22473__$1,(11),inst_22438);
} else {
if((state_val_22474 === (17))){
var inst_22459 = (state_22473[(2)]);
var state_22473__$1 = state_22473;
if(cljs.core.truth_(inst_22459)){
var statearr_22484_22550 = state_22473__$1;
(statearr_22484_22550[(1)] = (19));

} else {
var statearr_22485_22551 = state_22473__$1;
(statearr_22485_22551[(1)] = (20));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_22474 === (3))){
var inst_22471 = (state_22473[(2)]);
var state_22473__$1 = state_22473;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22473__$1,inst_22471);
} else {
if((state_val_22474 === (12))){
var inst_22448 = (state_22473[(10)]);
var state_22473__$1 = state_22473;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22473__$1,(14),inst_22448);
} else {
if((state_val_22474 === (2))){
var state_22473__$1 = state_22473;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22473__$1,(4),results);
} else {
if((state_val_22474 === (19))){
var state_22473__$1 = state_22473;
var statearr_22486_22552 = state_22473__$1;
(statearr_22486_22552[(2)] = null);

(statearr_22486_22552[(1)] = (12));


return cljs.core.constant$keyword$46;
} else {
if((state_val_22474 === (11))){
var inst_22448 = (state_22473[(2)]);
var state_22473__$1 = (function (){var statearr_22487 = state_22473;
(statearr_22487[(10)] = inst_22448);

return statearr_22487;
})();
var statearr_22488_22553 = state_22473__$1;
(statearr_22488_22553[(2)] = null);

(statearr_22488_22553[(1)] = (12));


return cljs.core.constant$keyword$46;
} else {
if((state_val_22474 === (9))){
var state_22473__$1 = state_22473;
var statearr_22489_22554 = state_22473__$1;
(statearr_22489_22554[(2)] = null);

(statearr_22489_22554[(1)] = (10));


return cljs.core.constant$keyword$46;
} else {
if((state_val_22474 === (5))){
var state_22473__$1 = state_22473;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22490_22555 = state_22473__$1;
(statearr_22490_22555[(1)] = (8));

} else {
var statearr_22491_22556 = state_22473__$1;
(statearr_22491_22556[(1)] = (9));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_22474 === (14))){
var inst_22453 = (state_22473[(11)]);
var inst_22451 = (state_22473[(8)]);
var inst_22451__$1 = (state_22473[(2)]);
var inst_22452 = (inst_22451__$1 == null);
var inst_22453__$1 = cljs.core.not(inst_22452);
var state_22473__$1 = (function (){var statearr_22492 = state_22473;
(statearr_22492[(11)] = inst_22453__$1);

(statearr_22492[(8)] = inst_22451__$1);

return statearr_22492;
})();
if(inst_22453__$1){
var statearr_22493_22557 = state_22473__$1;
(statearr_22493_22557[(1)] = (15));

} else {
var statearr_22494_22558 = state_22473__$1;
(statearr_22494_22558[(1)] = (16));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_22474 === (16))){
var inst_22453 = (state_22473[(11)]);
var state_22473__$1 = state_22473;
var statearr_22495_22559 = state_22473__$1;
(statearr_22495_22559[(2)] = inst_22453);

(statearr_22495_22559[(1)] = (17));


return cljs.core.constant$keyword$46;
} else {
if((state_val_22474 === (10))){
var inst_22445 = (state_22473[(2)]);
var state_22473__$1 = state_22473;
var statearr_22496_22560 = state_22473__$1;
(statearr_22496_22560[(2)] = inst_22445);

(statearr_22496_22560[(1)] = (7));


return cljs.core.constant$keyword$46;
} else {
if((state_val_22474 === (18))){
var inst_22456 = (state_22473[(2)]);
var state_22473__$1 = state_22473;
var statearr_22497_22561 = state_22473__$1;
(statearr_22497_22561[(2)] = inst_22456);

(statearr_22497_22561[(1)] = (17));


return cljs.core.constant$keyword$46;
} else {
if((state_val_22474 === (8))){
var inst_22442 = cljs.core.async.close_BANG_(to);
var state_22473__$1 = state_22473;
var statearr_22498_22562 = state_22473__$1;
(statearr_22498_22562[(2)] = inst_22442);

(statearr_22498_22562[(1)] = (10));


return cljs.core.constant$keyword$46;
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
});})(c__11802__auto__,jobs,results,process,async))
;
return ((function (switch__11722__auto__,c__11802__auto__,jobs,results,process,async){
return (function() {
var state_machine__11723__auto__ = null;
var state_machine__11723__auto____0 = (function (){
var statearr_22502 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22502[(0)] = state_machine__11723__auto__);

(statearr_22502[(1)] = (1));

return statearr_22502;
});
var state_machine__11723__auto____1 = (function (state_22473){
while(true){
var ret_value__11724__auto__ = (function (){try{while(true){
var result__11725__auto__ = switch__11722__auto__(state_22473);
if(cljs.core.keyword_identical_QMARK_(result__11725__auto__,cljs.core.constant$keyword$46)){
continue;
} else {
return result__11725__auto__;
}
break;
}
}catch (e22503){if((e22503 instanceof Object)){
var ex__11726__auto__ = e22503;
var statearr_22504_22563 = state_22473;
(statearr_22504_22563[(5)] = ex__11726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22473);

return cljs.core.constant$keyword$46;
} else {
throw e22503;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11724__auto__,cljs.core.constant$keyword$46)){
var G__22564 = state_22473;
state_22473 = G__22564;
continue;
} else {
return ret_value__11724__auto__;
}
break;
}
});
state_machine__11723__auto__ = function(state_22473){
switch(arguments.length){
case 0:
return state_machine__11723__auto____0.call(this);
case 1:
return state_machine__11723__auto____1.call(this,state_22473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11723__auto____0;
state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11723__auto____1;
return state_machine__11723__auto__;
})()
;})(switch__11722__auto__,c__11802__auto__,jobs,results,process,async))
})();
var state__11804__auto__ = (function (){var statearr_22505 = (function (){return (f__11803__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11803__auto__.cljs$core$IFn$_invoke$arity$0() : f__11803__auto__.call(null));
})();
(statearr_22505[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11802__auto__);

return statearr_22505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11804__auto__);
});})(c__11802__auto__,jobs,results,process,async))
);

return c__11802__auto__;
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
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.constant$keyword$53);
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
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.constant$keyword$54);
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
var c__11802__auto___22687 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11802__auto___22687,tc,fc){
return (function (){
var f__11803__auto__ = (function (){var switch__11722__auto__ = ((function (c__11802__auto___22687,tc,fc){
return (function (state_22661){
var state_val_22662 = (state_22661[(1)]);
if((state_val_22662 === (7))){
var inst_22657 = (state_22661[(2)]);
var state_22661__$1 = state_22661;
var statearr_22663_22688 = state_22661__$1;
(statearr_22663_22688[(2)] = inst_22657);

(statearr_22663_22688[(1)] = (3));


return cljs.core.constant$keyword$46;
} else {
if((state_val_22662 === (1))){
var state_22661__$1 = state_22661;
var statearr_22664_22689 = state_22661__$1;
(statearr_22664_22689[(2)] = null);

(statearr_22664_22689[(1)] = (2));


return cljs.core.constant$keyword$46;
} else {
if((state_val_22662 === (4))){
var inst_22638 = (state_22661[(7)]);
var inst_22638__$1 = (state_22661[(2)]);
var inst_22639 = (inst_22638__$1 == null);
var state_22661__$1 = (function (){var statearr_22665 = state_22661;
(statearr_22665[(7)] = inst_22638__$1);

return statearr_22665;
})();
if(cljs.core.truth_(inst_22639)){
var statearr_22666_22690 = state_22661__$1;
(statearr_22666_22690[(1)] = (5));

} else {
var statearr_22667_22691 = state_22661__$1;
(statearr_22667_22691[(1)] = (6));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_22662 === (13))){
var state_22661__$1 = state_22661;
var statearr_22668_22692 = state_22661__$1;
(statearr_22668_22692[(2)] = null);

(statearr_22668_22692[(1)] = (14));


return cljs.core.constant$keyword$46;
} else {
if((state_val_22662 === (6))){
var inst_22638 = (state_22661[(7)]);
var inst_22644 = (function (){var G__22669 = inst_22638;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__22669) : p.call(null,G__22669));
})();
var state_22661__$1 = state_22661;
if(cljs.core.truth_(inst_22644)){
var statearr_22670_22693 = state_22661__$1;
(statearr_22670_22693[(1)] = (9));

} else {
var statearr_22671_22694 = state_22661__$1;
(statearr_22671_22694[(1)] = (10));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_22662 === (3))){
var inst_22659 = (state_22661[(2)]);
var state_22661__$1 = state_22661;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22661__$1,inst_22659);
} else {
if((state_val_22662 === (12))){
var state_22661__$1 = state_22661;
var statearr_22672_22695 = state_22661__$1;
(statearr_22672_22695[(2)] = null);

(statearr_22672_22695[(1)] = (2));


return cljs.core.constant$keyword$46;
} else {
if((state_val_22662 === (2))){
var state_22661__$1 = state_22661;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22661__$1,(4),ch);
} else {
if((state_val_22662 === (11))){
var inst_22638 = (state_22661[(7)]);
var inst_22648 = (state_22661[(2)]);
var state_22661__$1 = state_22661;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22661__$1,(8),inst_22648,inst_22638);
} else {
if((state_val_22662 === (9))){
var state_22661__$1 = state_22661;
var statearr_22673_22696 = state_22661__$1;
(statearr_22673_22696[(2)] = tc);

(statearr_22673_22696[(1)] = (11));


return cljs.core.constant$keyword$46;
} else {
if((state_val_22662 === (5))){
var inst_22641 = cljs.core.async.close_BANG_(tc);
var inst_22642 = cljs.core.async.close_BANG_(fc);
var state_22661__$1 = (function (){var statearr_22674 = state_22661;
(statearr_22674[(8)] = inst_22641);

return statearr_22674;
})();
var statearr_22675_22697 = state_22661__$1;
(statearr_22675_22697[(2)] = inst_22642);

(statearr_22675_22697[(1)] = (7));


return cljs.core.constant$keyword$46;
} else {
if((state_val_22662 === (14))){
var inst_22655 = (state_22661[(2)]);
var state_22661__$1 = state_22661;
var statearr_22676_22698 = state_22661__$1;
(statearr_22676_22698[(2)] = inst_22655);

(statearr_22676_22698[(1)] = (7));


return cljs.core.constant$keyword$46;
} else {
if((state_val_22662 === (10))){
var state_22661__$1 = state_22661;
var statearr_22677_22699 = state_22661__$1;
(statearr_22677_22699[(2)] = fc);

(statearr_22677_22699[(1)] = (11));


return cljs.core.constant$keyword$46;
} else {
if((state_val_22662 === (8))){
var inst_22650 = (state_22661[(2)]);
var state_22661__$1 = state_22661;
if(cljs.core.truth_(inst_22650)){
var statearr_22678_22700 = state_22661__$1;
(statearr_22678_22700[(1)] = (12));

} else {
var statearr_22679_22701 = state_22661__$1;
(statearr_22679_22701[(1)] = (13));

}

return cljs.core.constant$keyword$46;
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
});})(c__11802__auto___22687,tc,fc))
;
return ((function (switch__11722__auto__,c__11802__auto___22687,tc,fc){
return (function() {
var state_machine__11723__auto__ = null;
var state_machine__11723__auto____0 = (function (){
var statearr_22683 = [null,null,null,null,null,null,null,null,null];
(statearr_22683[(0)] = state_machine__11723__auto__);

(statearr_22683[(1)] = (1));

return statearr_22683;
});
var state_machine__11723__auto____1 = (function (state_22661){
while(true){
var ret_value__11724__auto__ = (function (){try{while(true){
var result__11725__auto__ = switch__11722__auto__(state_22661);
if(cljs.core.keyword_identical_QMARK_(result__11725__auto__,cljs.core.constant$keyword$46)){
continue;
} else {
return result__11725__auto__;
}
break;
}
}catch (e22684){if((e22684 instanceof Object)){
var ex__11726__auto__ = e22684;
var statearr_22685_22702 = state_22661;
(statearr_22685_22702[(5)] = ex__11726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22661);

return cljs.core.constant$keyword$46;
} else {
throw e22684;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11724__auto__,cljs.core.constant$keyword$46)){
var G__22703 = state_22661;
state_22661 = G__22703;
continue;
} else {
return ret_value__11724__auto__;
}
break;
}
});
state_machine__11723__auto__ = function(state_22661){
switch(arguments.length){
case 0:
return state_machine__11723__auto____0.call(this);
case 1:
return state_machine__11723__auto____1.call(this,state_22661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11723__auto____0;
state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11723__auto____1;
return state_machine__11723__auto__;
})()
;})(switch__11722__auto__,c__11802__auto___22687,tc,fc))
})();
var state__11804__auto__ = (function (){var statearr_22686 = (function (){return (f__11803__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11803__auto__.cljs$core$IFn$_invoke$arity$0() : f__11803__auto__.call(null));
})();
(statearr_22686[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11802__auto___22687);

return statearr_22686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11804__auto__);
});})(c__11802__auto___22687,tc,fc))
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
var c__11802__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11802__auto__){
return (function (){
var f__11803__auto__ = (function (){var switch__11722__auto__ = ((function (c__11802__auto__){
return (function (state_22752){
var state_val_22753 = (state_22752[(1)]);
if((state_val_22753 === (7))){
var inst_22748 = (state_22752[(2)]);
var state_22752__$1 = state_22752;
var statearr_22754_22772 = state_22752__$1;
(statearr_22754_22772[(2)] = inst_22748);

(statearr_22754_22772[(1)] = (3));


return cljs.core.constant$keyword$46;
} else {
if((state_val_22753 === (6))){
var inst_22741 = (state_22752[(7)]);
var inst_22738 = (state_22752[(8)]);
var inst_22745 = (function (){var G__22755 = inst_22738;
var G__22756 = inst_22741;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22755,G__22756) : f.call(null,G__22755,G__22756));
})();
var inst_22738__$1 = inst_22745;
var state_22752__$1 = (function (){var statearr_22757 = state_22752;
(statearr_22757[(8)] = inst_22738__$1);

return statearr_22757;
})();
var statearr_22758_22773 = state_22752__$1;
(statearr_22758_22773[(2)] = null);

(statearr_22758_22773[(1)] = (2));


return cljs.core.constant$keyword$46;
} else {
if((state_val_22753 === (5))){
var inst_22738 = (state_22752[(8)]);
var state_22752__$1 = state_22752;
var statearr_22759_22774 = state_22752__$1;
(statearr_22759_22774[(2)] = inst_22738);

(statearr_22759_22774[(1)] = (7));


return cljs.core.constant$keyword$46;
} else {
if((state_val_22753 === (4))){
var inst_22741 = (state_22752[(7)]);
var inst_22741__$1 = (state_22752[(2)]);
var inst_22742 = (inst_22741__$1 == null);
var state_22752__$1 = (function (){var statearr_22760 = state_22752;
(statearr_22760[(7)] = inst_22741__$1);

return statearr_22760;
})();
if(cljs.core.truth_(inst_22742)){
var statearr_22761_22775 = state_22752__$1;
(statearr_22761_22775[(1)] = (5));

} else {
var statearr_22762_22776 = state_22752__$1;
(statearr_22762_22776[(1)] = (6));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_22753 === (3))){
var inst_22750 = (state_22752[(2)]);
var state_22752__$1 = state_22752;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22752__$1,inst_22750);
} else {
if((state_val_22753 === (2))){
var state_22752__$1 = state_22752;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22752__$1,(4),ch);
} else {
if((state_val_22753 === (1))){
var inst_22738 = init;
var state_22752__$1 = (function (){var statearr_22763 = state_22752;
(statearr_22763[(8)] = inst_22738);

return statearr_22763;
})();
var statearr_22764_22777 = state_22752__$1;
(statearr_22764_22777[(2)] = null);

(statearr_22764_22777[(1)] = (2));


return cljs.core.constant$keyword$46;
} else {
return null;
}
}
}
}
}
}
}
});})(c__11802__auto__))
;
return ((function (switch__11722__auto__,c__11802__auto__){
return (function() {
var state_machine__11723__auto__ = null;
var state_machine__11723__auto____0 = (function (){
var statearr_22768 = [null,null,null,null,null,null,null,null,null];
(statearr_22768[(0)] = state_machine__11723__auto__);

(statearr_22768[(1)] = (1));

return statearr_22768;
});
var state_machine__11723__auto____1 = (function (state_22752){
while(true){
var ret_value__11724__auto__ = (function (){try{while(true){
var result__11725__auto__ = switch__11722__auto__(state_22752);
if(cljs.core.keyword_identical_QMARK_(result__11725__auto__,cljs.core.constant$keyword$46)){
continue;
} else {
return result__11725__auto__;
}
break;
}
}catch (e22769){if((e22769 instanceof Object)){
var ex__11726__auto__ = e22769;
var statearr_22770_22778 = state_22752;
(statearr_22770_22778[(5)] = ex__11726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22752);

return cljs.core.constant$keyword$46;
} else {
throw e22769;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11724__auto__,cljs.core.constant$keyword$46)){
var G__22779 = state_22752;
state_22752 = G__22779;
continue;
} else {
return ret_value__11724__auto__;
}
break;
}
});
state_machine__11723__auto__ = function(state_22752){
switch(arguments.length){
case 0:
return state_machine__11723__auto____0.call(this);
case 1:
return state_machine__11723__auto____1.call(this,state_22752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11723__auto____0;
state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11723__auto____1;
return state_machine__11723__auto__;
})()
;})(switch__11722__auto__,c__11802__auto__))
})();
var state__11804__auto__ = (function (){var statearr_22771 = (function (){return (f__11803__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11803__auto__.cljs$core$IFn$_invoke$arity$0() : f__11803__auto__.call(null));
})();
(statearr_22771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11802__auto__);

return statearr_22771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11804__auto__);
});})(c__11802__auto__))
);

return c__11802__auto__;
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
var c__11802__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11802__auto__){
return (function (){
var f__11803__auto__ = (function (){var switch__11722__auto__ = ((function (c__11802__auto__){
return (function (state_22856){
var state_val_22857 = (state_22856[(1)]);
if((state_val_22857 === (7))){
var inst_22838 = (state_22856[(2)]);
var state_22856__$1 = state_22856;
var statearr_22858_22881 = state_22856__$1;
(statearr_22858_22881[(2)] = inst_22838);

(statearr_22858_22881[(1)] = (6));


return cljs.core.constant$keyword$46;
} else {
if((state_val_22857 === (1))){
var inst_22832 = cljs.core.seq(coll);
var inst_22833 = inst_22832;
var state_22856__$1 = (function (){var statearr_22859 = state_22856;
(statearr_22859[(7)] = inst_22833);

return statearr_22859;
})();
var statearr_22860_22882 = state_22856__$1;
(statearr_22860_22882[(2)] = null);

(statearr_22860_22882[(1)] = (2));


return cljs.core.constant$keyword$46;
} else {
if((state_val_22857 === (4))){
var inst_22833 = (state_22856[(7)]);
var inst_22836 = cljs.core.first(inst_22833);
var state_22856__$1 = state_22856;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22856__$1,(7),ch,inst_22836);
} else {
if((state_val_22857 === (13))){
var inst_22850 = (state_22856[(2)]);
var state_22856__$1 = state_22856;
var statearr_22861_22883 = state_22856__$1;
(statearr_22861_22883[(2)] = inst_22850);

(statearr_22861_22883[(1)] = (10));


return cljs.core.constant$keyword$46;
} else {
if((state_val_22857 === (6))){
var inst_22841 = (state_22856[(2)]);
var state_22856__$1 = state_22856;
if(cljs.core.truth_(inst_22841)){
var statearr_22862_22884 = state_22856__$1;
(statearr_22862_22884[(1)] = (8));

} else {
var statearr_22863_22885 = state_22856__$1;
(statearr_22863_22885[(1)] = (9));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_22857 === (3))){
var inst_22854 = (state_22856[(2)]);
var state_22856__$1 = state_22856;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22856__$1,inst_22854);
} else {
if((state_val_22857 === (12))){
var state_22856__$1 = state_22856;
var statearr_22864_22886 = state_22856__$1;
(statearr_22864_22886[(2)] = null);

(statearr_22864_22886[(1)] = (13));


return cljs.core.constant$keyword$46;
} else {
if((state_val_22857 === (2))){
var inst_22833 = (state_22856[(7)]);
var state_22856__$1 = state_22856;
if(cljs.core.truth_(inst_22833)){
var statearr_22865_22887 = state_22856__$1;
(statearr_22865_22887[(1)] = (4));

} else {
var statearr_22866_22888 = state_22856__$1;
(statearr_22866_22888[(1)] = (5));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_22857 === (11))){
var inst_22847 = cljs.core.async.close_BANG_(ch);
var state_22856__$1 = state_22856;
var statearr_22867_22889 = state_22856__$1;
(statearr_22867_22889[(2)] = inst_22847);

(statearr_22867_22889[(1)] = (13));


return cljs.core.constant$keyword$46;
} else {
if((state_val_22857 === (9))){
var state_22856__$1 = state_22856;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22868_22890 = state_22856__$1;
(statearr_22868_22890[(1)] = (11));

} else {
var statearr_22869_22891 = state_22856__$1;
(statearr_22869_22891[(1)] = (12));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_22857 === (5))){
var inst_22833 = (state_22856[(7)]);
var state_22856__$1 = state_22856;
var statearr_22870_22892 = state_22856__$1;
(statearr_22870_22892[(2)] = inst_22833);

(statearr_22870_22892[(1)] = (6));


return cljs.core.constant$keyword$46;
} else {
if((state_val_22857 === (10))){
var inst_22852 = (state_22856[(2)]);
var state_22856__$1 = state_22856;
var statearr_22871_22893 = state_22856__$1;
(statearr_22871_22893[(2)] = inst_22852);

(statearr_22871_22893[(1)] = (3));


return cljs.core.constant$keyword$46;
} else {
if((state_val_22857 === (8))){
var inst_22833 = (state_22856[(7)]);
var inst_22843 = cljs.core.next(inst_22833);
var inst_22833__$1 = inst_22843;
var state_22856__$1 = (function (){var statearr_22872 = state_22856;
(statearr_22872[(7)] = inst_22833__$1);

return statearr_22872;
})();
var statearr_22873_22894 = state_22856__$1;
(statearr_22873_22894[(2)] = null);

(statearr_22873_22894[(1)] = (2));


return cljs.core.constant$keyword$46;
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
});})(c__11802__auto__))
;
return ((function (switch__11722__auto__,c__11802__auto__){
return (function() {
var state_machine__11723__auto__ = null;
var state_machine__11723__auto____0 = (function (){
var statearr_22877 = [null,null,null,null,null,null,null,null];
(statearr_22877[(0)] = state_machine__11723__auto__);

(statearr_22877[(1)] = (1));

return statearr_22877;
});
var state_machine__11723__auto____1 = (function (state_22856){
while(true){
var ret_value__11724__auto__ = (function (){try{while(true){
var result__11725__auto__ = switch__11722__auto__(state_22856);
if(cljs.core.keyword_identical_QMARK_(result__11725__auto__,cljs.core.constant$keyword$46)){
continue;
} else {
return result__11725__auto__;
}
break;
}
}catch (e22878){if((e22878 instanceof Object)){
var ex__11726__auto__ = e22878;
var statearr_22879_22895 = state_22856;
(statearr_22879_22895[(5)] = ex__11726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22856);

return cljs.core.constant$keyword$46;
} else {
throw e22878;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11724__auto__,cljs.core.constant$keyword$46)){
var G__22896 = state_22856;
state_22856 = G__22896;
continue;
} else {
return ret_value__11724__auto__;
}
break;
}
});
state_machine__11723__auto__ = function(state_22856){
switch(arguments.length){
case 0:
return state_machine__11723__auto____0.call(this);
case 1:
return state_machine__11723__auto____1.call(this,state_22856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11723__auto____0;
state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11723__auto____1;
return state_machine__11723__auto__;
})()
;})(switch__11722__auto__,c__11802__auto__))
})();
var state__11804__auto__ = (function (){var statearr_22880 = (function (){return (f__11803__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11803__auto__.cljs$core$IFn$_invoke$arity$0() : f__11803__auto__.call(null));
})();
(statearr_22880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11802__auto__);

return statearr_22880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11804__auto__);
});})(c__11802__auto__))
);

return c__11802__auto__;
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

cljs.core.async.Mux = (function (){var obj22898 = {};
return obj22898;
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
return (function (){var or__3583__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__22902 = x__4227__auto__;
return goog.typeOf(G__22902);
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


cljs.core.async.Mult = (function (){var obj22904 = {};
return obj22904;
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
return (function (){var or__3583__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__22908 = x__4227__auto__;
return goog.typeOf(G__22908);
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
return (function (){var or__3583__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__22912 = x__4227__auto__;
return goog.typeOf(G__22912);
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
return (function (){var or__3583__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__22916 = x__4227__auto__;
return goog.typeOf(G__22916);
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
var cs = (function (){var G__23146 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23146) : cljs.core.atom.call(null,G__23146));
})();
var m = (function (){
if(typeof cljs.core.async.t23147 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23147 = (function (cs,ch,mult,meta23148){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta23148 = meta23148;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23147.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t23147.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t23147.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t23147.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__23150_23375 = self__.cs;
var G__23151_23376 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23150_23375,G__23151_23376) : cljs.core.reset_BANG_.call(null,G__23150_23375,G__23151_23376));

return null;
});})(cs))
;

cljs.core.async.t23147.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t23147.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t23147.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23149){
var self__ = this;
var _23149__$1 = this;
return self__.meta23148;
});})(cs))
;

cljs.core.async.t23147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23149,meta23148__$1){
var self__ = this;
var _23149__$1 = this;
return (new cljs.core.async.t23147(self__.cs,self__.ch,self__.mult,meta23148__$1));
});})(cs))
;

cljs.core.async.t23147.cljs$lang$type = true;

cljs.core.async.t23147.cljs$lang$ctorStr = "cljs.core.async/t23147";

cljs.core.async.t23147.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4170__auto__,writer__4171__auto__,opt__4172__auto__){
return cljs.core._write(writer__4171__auto__,"cljs.core.async/t23147");
});})(cs))
;

cljs.core.async.__GT_t23147 = ((function (cs){
return (function __GT_t23147(cs__$1,ch__$1,mult__$1,meta23148){
return (new cljs.core.async.t23147(cs__$1,ch__$1,mult__$1,meta23148));
});})(cs))
;

}

return (new cljs.core.async.t23147(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__23152 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23152) : cljs.core.atom.call(null,G__23152));
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
var c__11802__auto___23377 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11802__auto___23377,cs,m,dchan,dctr,done){
return (function (){
var f__11803__auto__ = (function (){var switch__11722__auto__ = ((function (c__11802__auto___23377,cs,m,dchan,dctr,done){
return (function (state_23283){
var state_val_23284 = (state_23283[(1)]);
if((state_val_23284 === (7))){
var inst_23279 = (state_23283[(2)]);
var state_23283__$1 = state_23283;
var statearr_23285_23378 = state_23283__$1;
(statearr_23285_23378[(2)] = inst_23279);

(statearr_23285_23378[(1)] = (3));


return cljs.core.constant$keyword$46;
} else {
if((state_val_23284 === (20))){
var inst_23184 = (state_23283[(7)]);
var inst_23194 = cljs.core.first(inst_23184);
var inst_23195 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23194,(0),null);
var inst_23196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23194,(1),null);
var state_23283__$1 = (function (){var statearr_23286 = state_23283;
(statearr_23286[(8)] = inst_23195);

return statearr_23286;
})();
if(cljs.core.truth_(inst_23196)){
var statearr_23287_23379 = state_23283__$1;
(statearr_23287_23379[(1)] = (22));

} else {
var statearr_23288_23380 = state_23283__$1;
(statearr_23288_23380[(1)] = (23));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_23284 === (27))){
var inst_23224 = (state_23283[(9)]);
var inst_23231 = (state_23283[(10)]);
var inst_23226 = (state_23283[(11)]);
var inst_23155 = (state_23283[(12)]);
var inst_23231__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23224,inst_23226);
var inst_23232 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23231__$1,inst_23155,done);
var state_23283__$1 = (function (){var statearr_23289 = state_23283;
(statearr_23289[(10)] = inst_23231__$1);

return statearr_23289;
})();
if(cljs.core.truth_(inst_23232)){
var statearr_23290_23381 = state_23283__$1;
(statearr_23290_23381[(1)] = (30));

} else {
var statearr_23291_23382 = state_23283__$1;
(statearr_23291_23382[(1)] = (31));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_23284 === (1))){
var state_23283__$1 = state_23283;
var statearr_23292_23383 = state_23283__$1;
(statearr_23292_23383[(2)] = null);

(statearr_23292_23383[(1)] = (2));


return cljs.core.constant$keyword$46;
} else {
if((state_val_23284 === (24))){
var inst_23184 = (state_23283[(7)]);
var inst_23201 = (state_23283[(2)]);
var inst_23202 = cljs.core.next(inst_23184);
var inst_23164 = inst_23202;
var inst_23165 = null;
var inst_23166 = (0);
var inst_23167 = (0);
var state_23283__$1 = (function (){var statearr_23293 = state_23283;
(statearr_23293[(13)] = inst_23164);

(statearr_23293[(14)] = inst_23166);

(statearr_23293[(15)] = inst_23165);

(statearr_23293[(16)] = inst_23201);

(statearr_23293[(17)] = inst_23167);

return statearr_23293;
})();
var statearr_23294_23384 = state_23283__$1;
(statearr_23294_23384[(2)] = null);

(statearr_23294_23384[(1)] = (8));


return cljs.core.constant$keyword$46;
} else {
if((state_val_23284 === (39))){
var state_23283__$1 = state_23283;
var statearr_23298_23385 = state_23283__$1;
(statearr_23298_23385[(2)] = null);

(statearr_23298_23385[(1)] = (41));


return cljs.core.constant$keyword$46;
} else {
if((state_val_23284 === (4))){
var inst_23155 = (state_23283[(12)]);
var inst_23155__$1 = (state_23283[(2)]);
var inst_23156 = (inst_23155__$1 == null);
var state_23283__$1 = (function (){var statearr_23299 = state_23283;
(statearr_23299[(12)] = inst_23155__$1);

return statearr_23299;
})();
if(cljs.core.truth_(inst_23156)){
var statearr_23300_23386 = state_23283__$1;
(statearr_23300_23386[(1)] = (5));

} else {
var statearr_23301_23387 = state_23283__$1;
(statearr_23301_23387[(1)] = (6));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_23284 === (15))){
var inst_23164 = (state_23283[(13)]);
var inst_23166 = (state_23283[(14)]);
var inst_23165 = (state_23283[(15)]);
var inst_23167 = (state_23283[(17)]);
var inst_23180 = (state_23283[(2)]);
var inst_23181 = (inst_23167 + (1));
var tmp23295 = inst_23164;
var tmp23296 = inst_23166;
var tmp23297 = inst_23165;
var inst_23164__$1 = tmp23295;
var inst_23165__$1 = tmp23297;
var inst_23166__$1 = tmp23296;
var inst_23167__$1 = inst_23181;
var state_23283__$1 = (function (){var statearr_23302 = state_23283;
(statearr_23302[(18)] = inst_23180);

(statearr_23302[(13)] = inst_23164__$1);

(statearr_23302[(14)] = inst_23166__$1);

(statearr_23302[(15)] = inst_23165__$1);

(statearr_23302[(17)] = inst_23167__$1);

return statearr_23302;
})();
var statearr_23303_23388 = state_23283__$1;
(statearr_23303_23388[(2)] = null);

(statearr_23303_23388[(1)] = (8));


return cljs.core.constant$keyword$46;
} else {
if((state_val_23284 === (21))){
var inst_23205 = (state_23283[(2)]);
var state_23283__$1 = state_23283;
var statearr_23307_23389 = state_23283__$1;
(statearr_23307_23389[(2)] = inst_23205);

(statearr_23307_23389[(1)] = (18));


return cljs.core.constant$keyword$46;
} else {
if((state_val_23284 === (31))){
var inst_23231 = (state_23283[(10)]);
var inst_23235 = done(null);
var inst_23236 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_23231);
var state_23283__$1 = (function (){var statearr_23308 = state_23283;
(statearr_23308[(19)] = inst_23235);

return statearr_23308;
})();
var statearr_23309_23390 = state_23283__$1;
(statearr_23309_23390[(2)] = inst_23236);

(statearr_23309_23390[(1)] = (32));


return cljs.core.constant$keyword$46;
} else {
if((state_val_23284 === (32))){
var inst_23224 = (state_23283[(9)]);
var inst_23226 = (state_23283[(11)]);
var inst_23225 = (state_23283[(20)]);
var inst_23223 = (state_23283[(21)]);
var inst_23238 = (state_23283[(2)]);
var inst_23239 = (inst_23226 + (1));
var tmp23304 = inst_23224;
var tmp23305 = inst_23225;
var tmp23306 = inst_23223;
var inst_23223__$1 = tmp23306;
var inst_23224__$1 = tmp23304;
var inst_23225__$1 = tmp23305;
var inst_23226__$1 = inst_23239;
var state_23283__$1 = (function (){var statearr_23310 = state_23283;
(statearr_23310[(9)] = inst_23224__$1);

(statearr_23310[(11)] = inst_23226__$1);

(statearr_23310[(20)] = inst_23225__$1);

(statearr_23310[(21)] = inst_23223__$1);

(statearr_23310[(22)] = inst_23238);

return statearr_23310;
})();
var statearr_23311_23391 = state_23283__$1;
(statearr_23311_23391[(2)] = null);

(statearr_23311_23391[(1)] = (25));


return cljs.core.constant$keyword$46;
} else {
if((state_val_23284 === (40))){
var inst_23251 = (state_23283[(23)]);
var inst_23255 = done(null);
var inst_23256 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_23251);
var state_23283__$1 = (function (){var statearr_23312 = state_23283;
(statearr_23312[(24)] = inst_23255);

return statearr_23312;
})();
var statearr_23313_23392 = state_23283__$1;
(statearr_23313_23392[(2)] = inst_23256);

(statearr_23313_23392[(1)] = (41));


return cljs.core.constant$keyword$46;
} else {
if((state_val_23284 === (33))){
var inst_23242 = (state_23283[(25)]);
var inst_23244 = cljs.core.chunked_seq_QMARK_(inst_23242);
var state_23283__$1 = state_23283;
if(inst_23244){
var statearr_23314_23393 = state_23283__$1;
(statearr_23314_23393[(1)] = (36));

} else {
var statearr_23315_23394 = state_23283__$1;
(statearr_23315_23394[(1)] = (37));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_23284 === (13))){
var inst_23174 = (state_23283[(26)]);
var inst_23177 = cljs.core.async.close_BANG_(inst_23174);
var state_23283__$1 = state_23283;
var statearr_23316_23395 = state_23283__$1;
(statearr_23316_23395[(2)] = inst_23177);

(statearr_23316_23395[(1)] = (15));


return cljs.core.constant$keyword$46;
} else {
if((state_val_23284 === (22))){
var inst_23195 = (state_23283[(8)]);
var inst_23198 = cljs.core.async.close_BANG_(inst_23195);
var state_23283__$1 = state_23283;
var statearr_23317_23396 = state_23283__$1;
(statearr_23317_23396[(2)] = inst_23198);

(statearr_23317_23396[(1)] = (24));


return cljs.core.constant$keyword$46;
} else {
if((state_val_23284 === (36))){
var inst_23242 = (state_23283[(25)]);
var inst_23246 = cljs.core.chunk_first(inst_23242);
var inst_23247 = cljs.core.chunk_rest(inst_23242);
var inst_23248 = cljs.core.count(inst_23246);
var inst_23223 = inst_23247;
var inst_23224 = inst_23246;
var inst_23225 = inst_23248;
var inst_23226 = (0);
var state_23283__$1 = (function (){var statearr_23318 = state_23283;
(statearr_23318[(9)] = inst_23224);

(statearr_23318[(11)] = inst_23226);

(statearr_23318[(20)] = inst_23225);

(statearr_23318[(21)] = inst_23223);

return statearr_23318;
})();
var statearr_23319_23397 = state_23283__$1;
(statearr_23319_23397[(2)] = null);

(statearr_23319_23397[(1)] = (25));


return cljs.core.constant$keyword$46;
} else {
if((state_val_23284 === (41))){
var inst_23242 = (state_23283[(25)]);
var inst_23258 = (state_23283[(2)]);
var inst_23259 = cljs.core.next(inst_23242);
var inst_23223 = inst_23259;
var inst_23224 = null;
var inst_23225 = (0);
var inst_23226 = (0);
var state_23283__$1 = (function (){var statearr_23320 = state_23283;
(statearr_23320[(9)] = inst_23224);

(statearr_23320[(11)] = inst_23226);

(statearr_23320[(20)] = inst_23225);

(statearr_23320[(21)] = inst_23223);

(statearr_23320[(27)] = inst_23258);

return statearr_23320;
})();
var statearr_23321_23398 = state_23283__$1;
(statearr_23321_23398[(2)] = null);

(statearr_23321_23398[(1)] = (25));


return cljs.core.constant$keyword$46;
} else {
if((state_val_23284 === (43))){
var state_23283__$1 = state_23283;
var statearr_23322_23399 = state_23283__$1;
(statearr_23322_23399[(2)] = null);

(statearr_23322_23399[(1)] = (44));


return cljs.core.constant$keyword$46;
} else {
if((state_val_23284 === (29))){
var inst_23267 = (state_23283[(2)]);
var state_23283__$1 = state_23283;
var statearr_23323_23400 = state_23283__$1;
(statearr_23323_23400[(2)] = inst_23267);

(statearr_23323_23400[(1)] = (26));


return cljs.core.constant$keyword$46;
} else {
if((state_val_23284 === (44))){
var inst_23276 = (state_23283[(2)]);
var state_23283__$1 = (function (){var statearr_23324 = state_23283;
(statearr_23324[(28)] = inst_23276);

return statearr_23324;
})();
var statearr_23325_23401 = state_23283__$1;
(statearr_23325_23401[(2)] = null);

(statearr_23325_23401[(1)] = (2));


return cljs.core.constant$keyword$46;
} else {
if((state_val_23284 === (6))){
var inst_23215 = (state_23283[(29)]);
var inst_23214 = (function (){var G__23326 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23326) : cljs.core.deref.call(null,G__23326));
})();
var inst_23215__$1 = cljs.core.keys(inst_23214);
var inst_23216 = cljs.core.count(inst_23215__$1);
var inst_23217 = (function (){var G__23327 = dctr;
var G__23328 = inst_23216;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23327,G__23328) : cljs.core.reset_BANG_.call(null,G__23327,G__23328));
})();
var inst_23222 = cljs.core.seq(inst_23215__$1);
var inst_23223 = inst_23222;
var inst_23224 = null;
var inst_23225 = (0);
var inst_23226 = (0);
var state_23283__$1 = (function (){var statearr_23329 = state_23283;
(statearr_23329[(9)] = inst_23224);

(statearr_23329[(30)] = inst_23217);

(statearr_23329[(11)] = inst_23226);

(statearr_23329[(20)] = inst_23225);

(statearr_23329[(21)] = inst_23223);

(statearr_23329[(29)] = inst_23215__$1);

return statearr_23329;
})();
var statearr_23330_23402 = state_23283__$1;
(statearr_23330_23402[(2)] = null);

(statearr_23330_23402[(1)] = (25));


return cljs.core.constant$keyword$46;
} else {
if((state_val_23284 === (28))){
var inst_23223 = (state_23283[(21)]);
var inst_23242 = (state_23283[(25)]);
var inst_23242__$1 = cljs.core.seq(inst_23223);
var state_23283__$1 = (function (){var statearr_23331 = state_23283;
(statearr_23331[(25)] = inst_23242__$1);

return statearr_23331;
})();
if(inst_23242__$1){
var statearr_23332_23403 = state_23283__$1;
(statearr_23332_23403[(1)] = (33));

} else {
var statearr_23333_23404 = state_23283__$1;
(statearr_23333_23404[(1)] = (34));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_23284 === (25))){
var inst_23226 = (state_23283[(11)]);
var inst_23225 = (state_23283[(20)]);
var inst_23228 = (inst_23226 < inst_23225);
var inst_23229 = inst_23228;
var state_23283__$1 = state_23283;
if(cljs.core.truth_(inst_23229)){
var statearr_23334_23405 = state_23283__$1;
(statearr_23334_23405[(1)] = (27));

} else {
var statearr_23335_23406 = state_23283__$1;
(statearr_23335_23406[(1)] = (28));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_23284 === (34))){
var state_23283__$1 = state_23283;
var statearr_23336_23407 = state_23283__$1;
(statearr_23336_23407[(2)] = null);

(statearr_23336_23407[(1)] = (35));


return cljs.core.constant$keyword$46;
} else {
if((state_val_23284 === (17))){
var state_23283__$1 = state_23283;
var statearr_23337_23408 = state_23283__$1;
(statearr_23337_23408[(2)] = null);

(statearr_23337_23408[(1)] = (18));


return cljs.core.constant$keyword$46;
} else {
if((state_val_23284 === (3))){
var inst_23281 = (state_23283[(2)]);
var state_23283__$1 = state_23283;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23283__$1,inst_23281);
} else {
if((state_val_23284 === (12))){
var inst_23210 = (state_23283[(2)]);
var state_23283__$1 = state_23283;
var statearr_23338_23409 = state_23283__$1;
(statearr_23338_23409[(2)] = inst_23210);

(statearr_23338_23409[(1)] = (9));


return cljs.core.constant$keyword$46;
} else {
if((state_val_23284 === (2))){
var state_23283__$1 = state_23283;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23283__$1,(4),ch);
} else {
if((state_val_23284 === (23))){
var state_23283__$1 = state_23283;
var statearr_23339_23410 = state_23283__$1;
(statearr_23339_23410[(2)] = null);

(statearr_23339_23410[(1)] = (24));


return cljs.core.constant$keyword$46;
} else {
if((state_val_23284 === (35))){
var inst_23265 = (state_23283[(2)]);
var state_23283__$1 = state_23283;
var statearr_23340_23411 = state_23283__$1;
(statearr_23340_23411[(2)] = inst_23265);

(statearr_23340_23411[(1)] = (29));


return cljs.core.constant$keyword$46;
} else {
if((state_val_23284 === (19))){
var inst_23184 = (state_23283[(7)]);
var inst_23188 = cljs.core.chunk_first(inst_23184);
var inst_23189 = cljs.core.chunk_rest(inst_23184);
var inst_23190 = cljs.core.count(inst_23188);
var inst_23164 = inst_23189;
var inst_23165 = inst_23188;
var inst_23166 = inst_23190;
var inst_23167 = (0);
var state_23283__$1 = (function (){var statearr_23341 = state_23283;
(statearr_23341[(13)] = inst_23164);

(statearr_23341[(14)] = inst_23166);

(statearr_23341[(15)] = inst_23165);

(statearr_23341[(17)] = inst_23167);

return statearr_23341;
})();
var statearr_23342_23412 = state_23283__$1;
(statearr_23342_23412[(2)] = null);

(statearr_23342_23412[(1)] = (8));


return cljs.core.constant$keyword$46;
} else {
if((state_val_23284 === (11))){
var inst_23164 = (state_23283[(13)]);
var inst_23184 = (state_23283[(7)]);
var inst_23184__$1 = cljs.core.seq(inst_23164);
var state_23283__$1 = (function (){var statearr_23343 = state_23283;
(statearr_23343[(7)] = inst_23184__$1);

return statearr_23343;
})();
if(inst_23184__$1){
var statearr_23344_23413 = state_23283__$1;
(statearr_23344_23413[(1)] = (16));

} else {
var statearr_23345_23414 = state_23283__$1;
(statearr_23345_23414[(1)] = (17));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_23284 === (9))){
var inst_23212 = (state_23283[(2)]);
var state_23283__$1 = state_23283;
var statearr_23346_23415 = state_23283__$1;
(statearr_23346_23415[(2)] = inst_23212);

(statearr_23346_23415[(1)] = (7));


return cljs.core.constant$keyword$46;
} else {
if((state_val_23284 === (5))){
var inst_23162 = (function (){var G__23347 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23347) : cljs.core.deref.call(null,G__23347));
})();
var inst_23163 = cljs.core.seq(inst_23162);
var inst_23164 = inst_23163;
var inst_23165 = null;
var inst_23166 = (0);
var inst_23167 = (0);
var state_23283__$1 = (function (){var statearr_23348 = state_23283;
(statearr_23348[(13)] = inst_23164);

(statearr_23348[(14)] = inst_23166);

(statearr_23348[(15)] = inst_23165);

(statearr_23348[(17)] = inst_23167);

return statearr_23348;
})();
var statearr_23349_23416 = state_23283__$1;
(statearr_23349_23416[(2)] = null);

(statearr_23349_23416[(1)] = (8));


return cljs.core.constant$keyword$46;
} else {
if((state_val_23284 === (14))){
var state_23283__$1 = state_23283;
var statearr_23350_23417 = state_23283__$1;
(statearr_23350_23417[(2)] = null);

(statearr_23350_23417[(1)] = (15));


return cljs.core.constant$keyword$46;
} else {
if((state_val_23284 === (45))){
var inst_23273 = (state_23283[(2)]);
var state_23283__$1 = state_23283;
var statearr_23351_23418 = state_23283__$1;
(statearr_23351_23418[(2)] = inst_23273);

(statearr_23351_23418[(1)] = (44));


return cljs.core.constant$keyword$46;
} else {
if((state_val_23284 === (26))){
var inst_23215 = (state_23283[(29)]);
var inst_23269 = (state_23283[(2)]);
var inst_23270 = cljs.core.seq(inst_23215);
var state_23283__$1 = (function (){var statearr_23352 = state_23283;
(statearr_23352[(31)] = inst_23269);

return statearr_23352;
})();
if(inst_23270){
var statearr_23353_23419 = state_23283__$1;
(statearr_23353_23419[(1)] = (42));

} else {
var statearr_23354_23420 = state_23283__$1;
(statearr_23354_23420[(1)] = (43));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_23284 === (16))){
var inst_23184 = (state_23283[(7)]);
var inst_23186 = cljs.core.chunked_seq_QMARK_(inst_23184);
var state_23283__$1 = state_23283;
if(inst_23186){
var statearr_23355_23421 = state_23283__$1;
(statearr_23355_23421[(1)] = (19));

} else {
var statearr_23356_23422 = state_23283__$1;
(statearr_23356_23422[(1)] = (20));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_23284 === (38))){
var inst_23262 = (state_23283[(2)]);
var state_23283__$1 = state_23283;
var statearr_23357_23423 = state_23283__$1;
(statearr_23357_23423[(2)] = inst_23262);

(statearr_23357_23423[(1)] = (35));


return cljs.core.constant$keyword$46;
} else {
if((state_val_23284 === (30))){
var state_23283__$1 = state_23283;
var statearr_23358_23424 = state_23283__$1;
(statearr_23358_23424[(2)] = null);

(statearr_23358_23424[(1)] = (32));


return cljs.core.constant$keyword$46;
} else {
if((state_val_23284 === (10))){
var inst_23165 = (state_23283[(15)]);
var inst_23167 = (state_23283[(17)]);
var inst_23173 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23165,inst_23167);
var inst_23174 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23173,(0),null);
var inst_23175 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23173,(1),null);
var state_23283__$1 = (function (){var statearr_23359 = state_23283;
(statearr_23359[(26)] = inst_23174);

return statearr_23359;
})();
if(cljs.core.truth_(inst_23175)){
var statearr_23360_23425 = state_23283__$1;
(statearr_23360_23425[(1)] = (13));

} else {
var statearr_23361_23426 = state_23283__$1;
(statearr_23361_23426[(1)] = (14));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_23284 === (18))){
var inst_23208 = (state_23283[(2)]);
var state_23283__$1 = state_23283;
var statearr_23362_23427 = state_23283__$1;
(statearr_23362_23427[(2)] = inst_23208);

(statearr_23362_23427[(1)] = (12));


return cljs.core.constant$keyword$46;
} else {
if((state_val_23284 === (42))){
var state_23283__$1 = state_23283;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23283__$1,(45),dchan);
} else {
if((state_val_23284 === (37))){
var inst_23155 = (state_23283[(12)]);
var inst_23251 = (state_23283[(23)]);
var inst_23242 = (state_23283[(25)]);
var inst_23251__$1 = cljs.core.first(inst_23242);
var inst_23252 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23251__$1,inst_23155,done);
var state_23283__$1 = (function (){var statearr_23363 = state_23283;
(statearr_23363[(23)] = inst_23251__$1);

return statearr_23363;
})();
if(cljs.core.truth_(inst_23252)){
var statearr_23364_23428 = state_23283__$1;
(statearr_23364_23428[(1)] = (39));

} else {
var statearr_23365_23429 = state_23283__$1;
(statearr_23365_23429[(1)] = (40));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_23284 === (8))){
var inst_23166 = (state_23283[(14)]);
var inst_23167 = (state_23283[(17)]);
var inst_23169 = (inst_23167 < inst_23166);
var inst_23170 = inst_23169;
var state_23283__$1 = state_23283;
if(cljs.core.truth_(inst_23170)){
var statearr_23366_23430 = state_23283__$1;
(statearr_23366_23430[(1)] = (10));

} else {
var statearr_23367_23431 = state_23283__$1;
(statearr_23367_23431[(1)] = (11));

}

return cljs.core.constant$keyword$46;
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
});})(c__11802__auto___23377,cs,m,dchan,dctr,done))
;
return ((function (switch__11722__auto__,c__11802__auto___23377,cs,m,dchan,dctr,done){
return (function() {
var state_machine__11723__auto__ = null;
var state_machine__11723__auto____0 = (function (){
var statearr_23371 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23371[(0)] = state_machine__11723__auto__);

(statearr_23371[(1)] = (1));

return statearr_23371;
});
var state_machine__11723__auto____1 = (function (state_23283){
while(true){
var ret_value__11724__auto__ = (function (){try{while(true){
var result__11725__auto__ = switch__11722__auto__(state_23283);
if(cljs.core.keyword_identical_QMARK_(result__11725__auto__,cljs.core.constant$keyword$46)){
continue;
} else {
return result__11725__auto__;
}
break;
}
}catch (e23372){if((e23372 instanceof Object)){
var ex__11726__auto__ = e23372;
var statearr_23373_23432 = state_23283;
(statearr_23373_23432[(5)] = ex__11726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23283);

return cljs.core.constant$keyword$46;
} else {
throw e23372;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11724__auto__,cljs.core.constant$keyword$46)){
var G__23433 = state_23283;
state_23283 = G__23433;
continue;
} else {
return ret_value__11724__auto__;
}
break;
}
});
state_machine__11723__auto__ = function(state_23283){
switch(arguments.length){
case 0:
return state_machine__11723__auto____0.call(this);
case 1:
return state_machine__11723__auto____1.call(this,state_23283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11723__auto____0;
state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11723__auto____1;
return state_machine__11723__auto__;
})()
;})(switch__11722__auto__,c__11802__auto___23377,cs,m,dchan,dctr,done))
})();
var state__11804__auto__ = (function (){var statearr_23374 = (function (){return (f__11803__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11803__auto__.cljs$core$IFn$_invoke$arity$0() : f__11803__auto__.call(null));
})();
(statearr_23374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11802__auto___23377);

return statearr_23374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11804__auto__);
});})(c__11802__auto___23377,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj23438 = {};
return obj23438;
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
return (function (){var or__3583__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__23442 = x__4227__auto__;
return goog.typeOf(G__23442);
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
return (function (){var or__3583__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__23446 = x__4227__auto__;
return goog.typeOf(G__23446);
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
return (function (){var or__3583__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__23450 = x__4227__auto__;
return goog.typeOf(G__23450);
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
return (function (){var or__3583__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__23454 = x__4227__auto__;
return goog.typeOf(G__23454);
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
return (function (){var or__3583__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__23458 = x__4227__auto__;
return goog.typeOf(G__23458);
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__23459){
var map__23465 = p__23459;
var map__23465__$1 = ((cljs.core.seq_QMARK_(map__23465))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23465):map__23465);
var opts = map__23465__$1;
var statearr_23466_23470 = state;
(statearr_23466_23470[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__23465,map__23465__$1,opts){
return (function (val){
var statearr_23467_23471 = state;
(statearr_23467_23471[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__23465,map__23465__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_23468_23472 = state;
(statearr_23468_23472[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__23469 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23469) : cljs.core.deref.call(null,G__23469));
})());


return cljs.core.constant$keyword$46;
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__23459 = null;
if (arguments.length > 3) {
var G__23473__i = 0, G__23473__a = new Array(arguments.length -  3);
while (G__23473__i < G__23473__a.length) {G__23473__a[G__23473__i] = arguments[G__23473__i + 3]; ++G__23473__i;}
  p__23459 = new cljs.core.IndexedSeq(G__23473__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__23459);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__23474){
var state = cljs.core.first(arglist__23474);
arglist__23474 = cljs.core.next(arglist__23474);
var cont_block = cljs.core.first(arglist__23474);
arglist__23474 = cljs.core.next(arglist__23474);
var ports = cljs.core.first(arglist__23474);
var p__23459 = cljs.core.rest(arglist__23474);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__23459);
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
var cs = (function (){var G__23607 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23607) : cljs.core.atom.call(null,G__23607));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$55,null,cljs.core.constant$keyword$56,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$57);
var solo_mode = (function (){var G__23608 = cljs.core.constant$keyword$56;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23608) : cljs.core.atom.call(null,G__23608));
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
if(cljs.core.truth_((function (){var G__23609 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__23609) : attr.call(null,G__23609));
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
var chs = (function (){var G__23610 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23610) : cljs.core.deref.call(null,G__23610));
})();
var mode = (function (){var G__23611 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23611) : cljs.core.deref.call(null,G__23611));
})();
var solos = pick(cljs.core.constant$keyword$57,chs);
var pauses = pick(cljs.core.constant$keyword$55,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$58,solos,cljs.core.constant$keyword$59,pick(cljs.core.constant$keyword$56,chs),cljs.core.constant$keyword$60,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$55)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t23612 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23612 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23613){
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
this.meta23613 = meta23613;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23612.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t23612.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23612.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23612.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__23615_23739 = self__.cs;
var G__23616_23740 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23615_23739,G__23616_23740) : cljs.core.reset_BANG_.call(null,G__23615_23739,G__23616_23740));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23612.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23612.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;

var G__23617_23741 = self__.solo_mode;
var G__23618_23742 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23617_23741,G__23618_23742) : cljs.core.reset_BANG_.call(null,G__23617_23741,G__23618_23742));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23612.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t23612.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23612.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23614){
var self__ = this;
var _23614__$1 = this;
return self__.meta23613;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23614,meta23613__$1){
var self__ = this;
var _23614__$1 = this;
return (new cljs.core.async.t23612(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23613__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23612.cljs$lang$type = true;

cljs.core.async.t23612.cljs$lang$ctorStr = "cljs.core.async/t23612";

cljs.core.async.t23612.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4170__auto__,writer__4171__auto__,opt__4172__auto__){
return cljs.core._write(writer__4171__auto__,"cljs.core.async/t23612");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t23612 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t23612(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23613){
return (new cljs.core.async.t23612(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23613));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t23612(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11802__auto___23743 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11802__auto___23743,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__11803__auto__ = (function (){var switch__11722__auto__ = ((function (c__11802__auto___23743,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23690){
var state_val_23691 = (state_23690[(1)]);
if((state_val_23691 === (7))){
var inst_23632 = (state_23690[(7)]);
var inst_23637 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_23632);
var state_23690__$1 = state_23690;
var statearr_23692_23744 = state_23690__$1;
(statearr_23692_23744[(2)] = inst_23637);

(statearr_23692_23744[(1)] = (9));


return cljs.core.constant$keyword$46;
} else {
if((state_val_23691 === (20))){
var inst_23647 = (state_23690[(8)]);
var state_23690__$1 = state_23690;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23690__$1,(23),out,inst_23647);
} else {
if((state_val_23691 === (1))){
var inst_23622 = (state_23690[(9)]);
var inst_23622__$1 = calc_state();
var inst_23623 = cljs.core.seq_QMARK_(inst_23622__$1);
var state_23690__$1 = (function (){var statearr_23693 = state_23690;
(statearr_23693[(9)] = inst_23622__$1);

return statearr_23693;
})();
if(inst_23623){
var statearr_23694_23745 = state_23690__$1;
(statearr_23694_23745[(1)] = (2));

} else {
var statearr_23695_23746 = state_23690__$1;
(statearr_23695_23746[(1)] = (3));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_23691 === (24))){
var inst_23640 = (state_23690[(10)]);
var inst_23632 = inst_23640;
var state_23690__$1 = (function (){var statearr_23696 = state_23690;
(statearr_23696[(7)] = inst_23632);

return statearr_23696;
})();
var statearr_23697_23747 = state_23690__$1;
(statearr_23697_23747[(2)] = null);

(statearr_23697_23747[(1)] = (5));


return cljs.core.constant$keyword$46;
} else {
if((state_val_23691 === (4))){
var inst_23622 = (state_23690[(9)]);
var inst_23628 = (state_23690[(2)]);
var inst_23629 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23628,cljs.core.constant$keyword$60);
var inst_23630 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23628,cljs.core.constant$keyword$59);
var inst_23631 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23628,cljs.core.constant$keyword$58);
var inst_23632 = inst_23622;
var state_23690__$1 = (function (){var statearr_23698 = state_23690;
(statearr_23698[(11)] = inst_23630);

(statearr_23698[(12)] = inst_23631);

(statearr_23698[(13)] = inst_23629);

(statearr_23698[(7)] = inst_23632);

return statearr_23698;
})();
var statearr_23699_23748 = state_23690__$1;
(statearr_23699_23748[(2)] = null);

(statearr_23699_23748[(1)] = (5));


return cljs.core.constant$keyword$46;
} else {
if((state_val_23691 === (15))){
var state_23690__$1 = state_23690;
var statearr_23700_23749 = state_23690__$1;
(statearr_23700_23749[(2)] = null);

(statearr_23700_23749[(1)] = (16));


return cljs.core.constant$keyword$46;
} else {
if((state_val_23691 === (21))){
var inst_23640 = (state_23690[(10)]);
var inst_23632 = inst_23640;
var state_23690__$1 = (function (){var statearr_23701 = state_23690;
(statearr_23701[(7)] = inst_23632);

return statearr_23701;
})();
var statearr_23702_23750 = state_23690__$1;
(statearr_23702_23750[(2)] = null);

(statearr_23702_23750[(1)] = (5));


return cljs.core.constant$keyword$46;
} else {
if((state_val_23691 === (13))){
var inst_23686 = (state_23690[(2)]);
var state_23690__$1 = state_23690;
var statearr_23703_23751 = state_23690__$1;
(statearr_23703_23751[(2)] = inst_23686);

(statearr_23703_23751[(1)] = (6));


return cljs.core.constant$keyword$46;
} else {
if((state_val_23691 === (22))){
var inst_23684 = (state_23690[(2)]);
var state_23690__$1 = state_23690;
var statearr_23704_23752 = state_23690__$1;
(statearr_23704_23752[(2)] = inst_23684);

(statearr_23704_23752[(1)] = (13));


return cljs.core.constant$keyword$46;
} else {
if((state_val_23691 === (6))){
var inst_23688 = (state_23690[(2)]);
var state_23690__$1 = state_23690;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23690__$1,inst_23688);
} else {
if((state_val_23691 === (25))){
var state_23690__$1 = state_23690;
var statearr_23705_23753 = state_23690__$1;
(statearr_23705_23753[(2)] = null);

(statearr_23705_23753[(1)] = (26));


return cljs.core.constant$keyword$46;
} else {
if((state_val_23691 === (17))){
var inst_23663 = (state_23690[(14)]);
var state_23690__$1 = state_23690;
var statearr_23706_23754 = state_23690__$1;
(statearr_23706_23754[(2)] = inst_23663);

(statearr_23706_23754[(1)] = (19));


return cljs.core.constant$keyword$46;
} else {
if((state_val_23691 === (3))){
var inst_23622 = (state_23690[(9)]);
var state_23690__$1 = state_23690;
var statearr_23707_23755 = state_23690__$1;
(statearr_23707_23755[(2)] = inst_23622);

(statearr_23707_23755[(1)] = (4));


return cljs.core.constant$keyword$46;
} else {
if((state_val_23691 === (12))){
var inst_23663 = (state_23690[(14)]);
var inst_23643 = (state_23690[(15)]);
var inst_23648 = (state_23690[(16)]);
var inst_23663__$1 = (function (){var G__23708 = inst_23648;
return (inst_23643.cljs$core$IFn$_invoke$arity$1 ? inst_23643.cljs$core$IFn$_invoke$arity$1(G__23708) : inst_23643.call(null,G__23708));
})();
var state_23690__$1 = (function (){var statearr_23709 = state_23690;
(statearr_23709[(14)] = inst_23663__$1);

return statearr_23709;
})();
if(cljs.core.truth_(inst_23663__$1)){
var statearr_23710_23756 = state_23690__$1;
(statearr_23710_23756[(1)] = (17));

} else {
var statearr_23711_23757 = state_23690__$1;
(statearr_23711_23757[(1)] = (18));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_23691 === (2))){
var inst_23622 = (state_23690[(9)]);
var inst_23625 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_23622);
var state_23690__$1 = state_23690;
var statearr_23712_23758 = state_23690__$1;
(statearr_23712_23758[(2)] = inst_23625);

(statearr_23712_23758[(1)] = (4));


return cljs.core.constant$keyword$46;
} else {
if((state_val_23691 === (23))){
var inst_23675 = (state_23690[(2)]);
var state_23690__$1 = state_23690;
if(cljs.core.truth_(inst_23675)){
var statearr_23713_23759 = state_23690__$1;
(statearr_23713_23759[(1)] = (24));

} else {
var statearr_23714_23760 = state_23690__$1;
(statearr_23714_23760[(1)] = (25));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_23691 === (19))){
var inst_23672 = (state_23690[(2)]);
var state_23690__$1 = state_23690;
if(cljs.core.truth_(inst_23672)){
var statearr_23715_23761 = state_23690__$1;
(statearr_23715_23761[(1)] = (20));

} else {
var statearr_23716_23762 = state_23690__$1;
(statearr_23716_23762[(1)] = (21));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_23691 === (11))){
var inst_23647 = (state_23690[(8)]);
var inst_23653 = (inst_23647 == null);
var state_23690__$1 = state_23690;
if(cljs.core.truth_(inst_23653)){
var statearr_23717_23763 = state_23690__$1;
(statearr_23717_23763[(1)] = (14));

} else {
var statearr_23718_23764 = state_23690__$1;
(statearr_23718_23764[(1)] = (15));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_23691 === (9))){
var inst_23640 = (state_23690[(10)]);
var inst_23640__$1 = (state_23690[(2)]);
var inst_23641 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23640__$1,cljs.core.constant$keyword$60);
var inst_23642 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23640__$1,cljs.core.constant$keyword$59);
var inst_23643 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23640__$1,cljs.core.constant$keyword$58);
var state_23690__$1 = (function (){var statearr_23719 = state_23690;
(statearr_23719[(17)] = inst_23642);

(statearr_23719[(15)] = inst_23643);

(statearr_23719[(10)] = inst_23640__$1);

return statearr_23719;
})();
return cljs.core.async.ioc_alts_BANG_(state_23690__$1,(10),inst_23641);
} else {
if((state_val_23691 === (5))){
var inst_23632 = (state_23690[(7)]);
var inst_23635 = cljs.core.seq_QMARK_(inst_23632);
var state_23690__$1 = state_23690;
if(inst_23635){
var statearr_23720_23765 = state_23690__$1;
(statearr_23720_23765[(1)] = (7));

} else {
var statearr_23721_23766 = state_23690__$1;
(statearr_23721_23766[(1)] = (8));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_23691 === (14))){
var inst_23648 = (state_23690[(16)]);
var inst_23655 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_23648);
var state_23690__$1 = state_23690;
var statearr_23722_23767 = state_23690__$1;
(statearr_23722_23767[(2)] = inst_23655);

(statearr_23722_23767[(1)] = (16));


return cljs.core.constant$keyword$46;
} else {
if((state_val_23691 === (26))){
var inst_23680 = (state_23690[(2)]);
var state_23690__$1 = state_23690;
var statearr_23723_23768 = state_23690__$1;
(statearr_23723_23768[(2)] = inst_23680);

(statearr_23723_23768[(1)] = (22));


return cljs.core.constant$keyword$46;
} else {
if((state_val_23691 === (16))){
var inst_23658 = (state_23690[(2)]);
var inst_23659 = calc_state();
var inst_23632 = inst_23659;
var state_23690__$1 = (function (){var statearr_23724 = state_23690;
(statearr_23724[(18)] = inst_23658);

(statearr_23724[(7)] = inst_23632);

return statearr_23724;
})();
var statearr_23725_23769 = state_23690__$1;
(statearr_23725_23769[(2)] = null);

(statearr_23725_23769[(1)] = (5));


return cljs.core.constant$keyword$46;
} else {
if((state_val_23691 === (10))){
var inst_23647 = (state_23690[(8)]);
var inst_23648 = (state_23690[(16)]);
var inst_23646 = (state_23690[(2)]);
var inst_23647__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23646,(0),null);
var inst_23648__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23646,(1),null);
var inst_23649 = (inst_23647__$1 == null);
var inst_23650 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23648__$1,change);
var inst_23651 = (inst_23649) || (inst_23650);
var state_23690__$1 = (function (){var statearr_23726 = state_23690;
(statearr_23726[(8)] = inst_23647__$1);

(statearr_23726[(16)] = inst_23648__$1);

return statearr_23726;
})();
if(cljs.core.truth_(inst_23651)){
var statearr_23727_23770 = state_23690__$1;
(statearr_23727_23770[(1)] = (11));

} else {
var statearr_23728_23771 = state_23690__$1;
(statearr_23728_23771[(1)] = (12));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_23691 === (18))){
var inst_23642 = (state_23690[(17)]);
var inst_23643 = (state_23690[(15)]);
var inst_23648 = (state_23690[(16)]);
var inst_23667 = cljs.core.empty_QMARK_(inst_23643);
var inst_23668 = (function (){var G__23729 = inst_23648;
return (inst_23642.cljs$core$IFn$_invoke$arity$1 ? inst_23642.cljs$core$IFn$_invoke$arity$1(G__23729) : inst_23642.call(null,G__23729));
})();
var inst_23669 = cljs.core.not(inst_23668);
var inst_23670 = (inst_23667) && (inst_23669);
var state_23690__$1 = state_23690;
var statearr_23730_23772 = state_23690__$1;
(statearr_23730_23772[(2)] = inst_23670);

(statearr_23730_23772[(1)] = (19));


return cljs.core.constant$keyword$46;
} else {
if((state_val_23691 === (8))){
var inst_23632 = (state_23690[(7)]);
var state_23690__$1 = state_23690;
var statearr_23731_23773 = state_23690__$1;
(statearr_23731_23773[(2)] = inst_23632);

(statearr_23731_23773[(1)] = (9));


return cljs.core.constant$keyword$46;
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
});})(c__11802__auto___23743,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__11722__auto__,c__11802__auto___23743,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__11723__auto__ = null;
var state_machine__11723__auto____0 = (function (){
var statearr_23735 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23735[(0)] = state_machine__11723__auto__);

(statearr_23735[(1)] = (1));

return statearr_23735;
});
var state_machine__11723__auto____1 = (function (state_23690){
while(true){
var ret_value__11724__auto__ = (function (){try{while(true){
var result__11725__auto__ = switch__11722__auto__(state_23690);
if(cljs.core.keyword_identical_QMARK_(result__11725__auto__,cljs.core.constant$keyword$46)){
continue;
} else {
return result__11725__auto__;
}
break;
}
}catch (e23736){if((e23736 instanceof Object)){
var ex__11726__auto__ = e23736;
var statearr_23737_23774 = state_23690;
(statearr_23737_23774[(5)] = ex__11726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23690);

return cljs.core.constant$keyword$46;
} else {
throw e23736;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11724__auto__,cljs.core.constant$keyword$46)){
var G__23775 = state_23690;
state_23690 = G__23775;
continue;
} else {
return ret_value__11724__auto__;
}
break;
}
});
state_machine__11723__auto__ = function(state_23690){
switch(arguments.length){
case 0:
return state_machine__11723__auto____0.call(this);
case 1:
return state_machine__11723__auto____1.call(this,state_23690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11723__auto____0;
state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11723__auto____1;
return state_machine__11723__auto__;
})()
;})(switch__11722__auto__,c__11802__auto___23743,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__11804__auto__ = (function (){var statearr_23738 = (function (){return (f__11803__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11803__auto__.cljs$core$IFn$_invoke$arity$0() : f__11803__auto__.call(null));
})();
(statearr_23738[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11802__auto___23743);

return statearr_23738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11804__auto__);
});})(c__11802__auto___23743,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj23777 = {};
return obj23777;
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
return (function (){var or__3583__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__23781 = x__4227__auto__;
return goog.typeOf(G__23781);
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
return (function (){var or__3583__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__23785 = x__4227__auto__;
return goog.typeOf(G__23785);
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
return (function (){var or__3583__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__23791 = x__4227__auto__;
return goog.typeOf(G__23791);
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
return (function (){var or__3583__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__23793 = x__4227__auto__;
return goog.typeOf(G__23793);
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
var mults = (function (){var G__23932 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23932) : cljs.core.atom.call(null,G__23932));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__3583__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__23934 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23934) : cljs.core.deref.call(null,G__23934));
})(),topic);
if(cljs.core.truth_(or__3583__auto__)){
return or__3583__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3583__auto__,mults){
return (function (p1__23794_SHARP_){
if(cljs.core.truth_((function (){var G__23935 = topic;
return (p1__23794_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__23794_SHARP_.cljs$core$IFn$_invoke$arity$1(G__23935) : p1__23794_SHARP_.call(null,G__23935));
})())){
return p1__23794_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__23794_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__23936 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__23936) : buf_fn.call(null,G__23936));
})())));
}
});})(or__3583__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t23937 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23937 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta23938){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta23938 = meta23938;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23937.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t23937.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__23940 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__23940) : self__.ensure_mult.call(null,G__23940));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t23937.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__23941 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23941) : cljs.core.deref.call(null,G__23941));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t23937.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__23942 = self__.mults;
var G__23943 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23942,G__23943) : cljs.core.reset_BANG_.call(null,G__23942,G__23943));
});})(mults,ensure_mult))
;

cljs.core.async.t23937.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t23937.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t23937.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t23937.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23939){
var self__ = this;
var _23939__$1 = this;
return self__.meta23938;
});})(mults,ensure_mult))
;

cljs.core.async.t23937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23939,meta23938__$1){
var self__ = this;
var _23939__$1 = this;
return (new cljs.core.async.t23937(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta23938__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t23937.cljs$lang$type = true;

cljs.core.async.t23937.cljs$lang$ctorStr = "cljs.core.async/t23937";

cljs.core.async.t23937.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4170__auto__,writer__4171__auto__,opt__4172__auto__){
return cljs.core._write(writer__4171__auto__,"cljs.core.async/t23937");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t23937 = ((function (mults,ensure_mult){
return (function __GT_t23937(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta23938){
return (new cljs.core.async.t23937(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta23938));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t23937(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11802__auto___24066 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11802__auto___24066,mults,ensure_mult,p){
return (function (){
var f__11803__auto__ = (function (){var switch__11722__auto__ = ((function (c__11802__auto___24066,mults,ensure_mult,p){
return (function (state_24015){
var state_val_24016 = (state_24015[(1)]);
if((state_val_24016 === (7))){
var inst_24011 = (state_24015[(2)]);
var state_24015__$1 = state_24015;
var statearr_24017_24067 = state_24015__$1;
(statearr_24017_24067[(2)] = inst_24011);

(statearr_24017_24067[(1)] = (3));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24016 === (20))){
var state_24015__$1 = state_24015;
var statearr_24018_24068 = state_24015__$1;
(statearr_24018_24068[(2)] = null);

(statearr_24018_24068[(1)] = (21));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24016 === (1))){
var state_24015__$1 = state_24015;
var statearr_24019_24069 = state_24015__$1;
(statearr_24019_24069[(2)] = null);

(statearr_24019_24069[(1)] = (2));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24016 === (24))){
var inst_23994 = (state_24015[(7)]);
var inst_24003 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_23994);
var state_24015__$1 = state_24015;
var statearr_24020_24070 = state_24015__$1;
(statearr_24020_24070[(2)] = inst_24003);

(statearr_24020_24070[(1)] = (25));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24016 === (4))){
var inst_23946 = (state_24015[(8)]);
var inst_23946__$1 = (state_24015[(2)]);
var inst_23947 = (inst_23946__$1 == null);
var state_24015__$1 = (function (){var statearr_24021 = state_24015;
(statearr_24021[(8)] = inst_23946__$1);

return statearr_24021;
})();
if(cljs.core.truth_(inst_23947)){
var statearr_24022_24071 = state_24015__$1;
(statearr_24022_24071[(1)] = (5));

} else {
var statearr_24023_24072 = state_24015__$1;
(statearr_24023_24072[(1)] = (6));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_24016 === (15))){
var inst_23988 = (state_24015[(2)]);
var state_24015__$1 = state_24015;
var statearr_24024_24073 = state_24015__$1;
(statearr_24024_24073[(2)] = inst_23988);

(statearr_24024_24073[(1)] = (12));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24016 === (21))){
var inst_24008 = (state_24015[(2)]);
var state_24015__$1 = (function (){var statearr_24025 = state_24015;
(statearr_24025[(9)] = inst_24008);

return statearr_24025;
})();
var statearr_24026_24074 = state_24015__$1;
(statearr_24026_24074[(2)] = null);

(statearr_24026_24074[(1)] = (2));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24016 === (13))){
var inst_23970 = (state_24015[(10)]);
var inst_23972 = cljs.core.chunked_seq_QMARK_(inst_23970);
var state_24015__$1 = state_24015;
if(inst_23972){
var statearr_24027_24075 = state_24015__$1;
(statearr_24027_24075[(1)] = (16));

} else {
var statearr_24028_24076 = state_24015__$1;
(statearr_24028_24076[(1)] = (17));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_24016 === (22))){
var inst_24000 = (state_24015[(2)]);
var state_24015__$1 = state_24015;
if(cljs.core.truth_(inst_24000)){
var statearr_24029_24077 = state_24015__$1;
(statearr_24029_24077[(1)] = (23));

} else {
var statearr_24030_24078 = state_24015__$1;
(statearr_24030_24078[(1)] = (24));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_24016 === (6))){
var inst_23946 = (state_24015[(8)]);
var inst_23996 = (state_24015[(11)]);
var inst_23994 = (state_24015[(7)]);
var inst_23994__$1 = (function (){var G__24031 = inst_23946;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__24031) : topic_fn.call(null,G__24031));
})();
var inst_23995 = (function (){var G__24032 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24032) : cljs.core.deref.call(null,G__24032));
})();
var inst_23996__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23995,inst_23994__$1);
var state_24015__$1 = (function (){var statearr_24033 = state_24015;
(statearr_24033[(11)] = inst_23996__$1);

(statearr_24033[(7)] = inst_23994__$1);

return statearr_24033;
})();
if(cljs.core.truth_(inst_23996__$1)){
var statearr_24034_24079 = state_24015__$1;
(statearr_24034_24079[(1)] = (19));

} else {
var statearr_24035_24080 = state_24015__$1;
(statearr_24035_24080[(1)] = (20));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_24016 === (25))){
var inst_24005 = (state_24015[(2)]);
var state_24015__$1 = state_24015;
var statearr_24036_24081 = state_24015__$1;
(statearr_24036_24081[(2)] = inst_24005);

(statearr_24036_24081[(1)] = (21));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24016 === (17))){
var inst_23970 = (state_24015[(10)]);
var inst_23979 = cljs.core.first(inst_23970);
var inst_23980 = cljs.core.async.muxch_STAR_(inst_23979);
var inst_23981 = cljs.core.async.close_BANG_(inst_23980);
var inst_23982 = cljs.core.next(inst_23970);
var inst_23956 = inst_23982;
var inst_23957 = null;
var inst_23958 = (0);
var inst_23959 = (0);
var state_24015__$1 = (function (){var statearr_24037 = state_24015;
(statearr_24037[(12)] = inst_23959);

(statearr_24037[(13)] = inst_23957);

(statearr_24037[(14)] = inst_23956);

(statearr_24037[(15)] = inst_23958);

(statearr_24037[(16)] = inst_23981);

return statearr_24037;
})();
var statearr_24038_24082 = state_24015__$1;
(statearr_24038_24082[(2)] = null);

(statearr_24038_24082[(1)] = (8));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24016 === (3))){
var inst_24013 = (state_24015[(2)]);
var state_24015__$1 = state_24015;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24015__$1,inst_24013);
} else {
if((state_val_24016 === (12))){
var inst_23990 = (state_24015[(2)]);
var state_24015__$1 = state_24015;
var statearr_24039_24083 = state_24015__$1;
(statearr_24039_24083[(2)] = inst_23990);

(statearr_24039_24083[(1)] = (9));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24016 === (2))){
var state_24015__$1 = state_24015;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24015__$1,(4),ch);
} else {
if((state_val_24016 === (23))){
var state_24015__$1 = state_24015;
var statearr_24040_24084 = state_24015__$1;
(statearr_24040_24084[(2)] = null);

(statearr_24040_24084[(1)] = (25));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24016 === (19))){
var inst_23946 = (state_24015[(8)]);
var inst_23996 = (state_24015[(11)]);
var inst_23998 = cljs.core.async.muxch_STAR_(inst_23996);
var state_24015__$1 = state_24015;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24015__$1,(22),inst_23998,inst_23946);
} else {
if((state_val_24016 === (11))){
var inst_23956 = (state_24015[(14)]);
var inst_23970 = (state_24015[(10)]);
var inst_23970__$1 = cljs.core.seq(inst_23956);
var state_24015__$1 = (function (){var statearr_24041 = state_24015;
(statearr_24041[(10)] = inst_23970__$1);

return statearr_24041;
})();
if(inst_23970__$1){
var statearr_24042_24085 = state_24015__$1;
(statearr_24042_24085[(1)] = (13));

} else {
var statearr_24043_24086 = state_24015__$1;
(statearr_24043_24086[(1)] = (14));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_24016 === (9))){
var inst_23992 = (state_24015[(2)]);
var state_24015__$1 = state_24015;
var statearr_24044_24087 = state_24015__$1;
(statearr_24044_24087[(2)] = inst_23992);

(statearr_24044_24087[(1)] = (7));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24016 === (5))){
var inst_23953 = (function (){var G__24045 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24045) : cljs.core.deref.call(null,G__24045));
})();
var inst_23954 = cljs.core.vals(inst_23953);
var inst_23955 = cljs.core.seq(inst_23954);
var inst_23956 = inst_23955;
var inst_23957 = null;
var inst_23958 = (0);
var inst_23959 = (0);
var state_24015__$1 = (function (){var statearr_24046 = state_24015;
(statearr_24046[(12)] = inst_23959);

(statearr_24046[(13)] = inst_23957);

(statearr_24046[(14)] = inst_23956);

(statearr_24046[(15)] = inst_23958);

return statearr_24046;
})();
var statearr_24047_24088 = state_24015__$1;
(statearr_24047_24088[(2)] = null);

(statearr_24047_24088[(1)] = (8));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24016 === (14))){
var state_24015__$1 = state_24015;
var statearr_24051_24089 = state_24015__$1;
(statearr_24051_24089[(2)] = null);

(statearr_24051_24089[(1)] = (15));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24016 === (16))){
var inst_23970 = (state_24015[(10)]);
var inst_23974 = cljs.core.chunk_first(inst_23970);
var inst_23975 = cljs.core.chunk_rest(inst_23970);
var inst_23976 = cljs.core.count(inst_23974);
var inst_23956 = inst_23975;
var inst_23957 = inst_23974;
var inst_23958 = inst_23976;
var inst_23959 = (0);
var state_24015__$1 = (function (){var statearr_24052 = state_24015;
(statearr_24052[(12)] = inst_23959);

(statearr_24052[(13)] = inst_23957);

(statearr_24052[(14)] = inst_23956);

(statearr_24052[(15)] = inst_23958);

return statearr_24052;
})();
var statearr_24053_24090 = state_24015__$1;
(statearr_24053_24090[(2)] = null);

(statearr_24053_24090[(1)] = (8));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24016 === (10))){
var inst_23959 = (state_24015[(12)]);
var inst_23957 = (state_24015[(13)]);
var inst_23956 = (state_24015[(14)]);
var inst_23958 = (state_24015[(15)]);
var inst_23964 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23957,inst_23959);
var inst_23965 = cljs.core.async.muxch_STAR_(inst_23964);
var inst_23966 = cljs.core.async.close_BANG_(inst_23965);
var inst_23967 = (inst_23959 + (1));
var tmp24048 = inst_23957;
var tmp24049 = inst_23956;
var tmp24050 = inst_23958;
var inst_23956__$1 = tmp24049;
var inst_23957__$1 = tmp24048;
var inst_23958__$1 = tmp24050;
var inst_23959__$1 = inst_23967;
var state_24015__$1 = (function (){var statearr_24054 = state_24015;
(statearr_24054[(12)] = inst_23959__$1);

(statearr_24054[(13)] = inst_23957__$1);

(statearr_24054[(14)] = inst_23956__$1);

(statearr_24054[(15)] = inst_23958__$1);

(statearr_24054[(17)] = inst_23966);

return statearr_24054;
})();
var statearr_24055_24091 = state_24015__$1;
(statearr_24055_24091[(2)] = null);

(statearr_24055_24091[(1)] = (8));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24016 === (18))){
var inst_23985 = (state_24015[(2)]);
var state_24015__$1 = state_24015;
var statearr_24056_24092 = state_24015__$1;
(statearr_24056_24092[(2)] = inst_23985);

(statearr_24056_24092[(1)] = (15));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24016 === (8))){
var inst_23959 = (state_24015[(12)]);
var inst_23958 = (state_24015[(15)]);
var inst_23961 = (inst_23959 < inst_23958);
var inst_23962 = inst_23961;
var state_24015__$1 = state_24015;
if(cljs.core.truth_(inst_23962)){
var statearr_24057_24093 = state_24015__$1;
(statearr_24057_24093[(1)] = (10));

} else {
var statearr_24058_24094 = state_24015__$1;
(statearr_24058_24094[(1)] = (11));

}

return cljs.core.constant$keyword$46;
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
});})(c__11802__auto___24066,mults,ensure_mult,p))
;
return ((function (switch__11722__auto__,c__11802__auto___24066,mults,ensure_mult,p){
return (function() {
var state_machine__11723__auto__ = null;
var state_machine__11723__auto____0 = (function (){
var statearr_24062 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24062[(0)] = state_machine__11723__auto__);

(statearr_24062[(1)] = (1));

return statearr_24062;
});
var state_machine__11723__auto____1 = (function (state_24015){
while(true){
var ret_value__11724__auto__ = (function (){try{while(true){
var result__11725__auto__ = switch__11722__auto__(state_24015);
if(cljs.core.keyword_identical_QMARK_(result__11725__auto__,cljs.core.constant$keyword$46)){
continue;
} else {
return result__11725__auto__;
}
break;
}
}catch (e24063){if((e24063 instanceof Object)){
var ex__11726__auto__ = e24063;
var statearr_24064_24095 = state_24015;
(statearr_24064_24095[(5)] = ex__11726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24015);

return cljs.core.constant$keyword$46;
} else {
throw e24063;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11724__auto__,cljs.core.constant$keyword$46)){
var G__24096 = state_24015;
state_24015 = G__24096;
continue;
} else {
return ret_value__11724__auto__;
}
break;
}
});
state_machine__11723__auto__ = function(state_24015){
switch(arguments.length){
case 0:
return state_machine__11723__auto____0.call(this);
case 1:
return state_machine__11723__auto____1.call(this,state_24015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11723__auto____0;
state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11723__auto____1;
return state_machine__11723__auto__;
})()
;})(switch__11722__auto__,c__11802__auto___24066,mults,ensure_mult,p))
})();
var state__11804__auto__ = (function (){var statearr_24065 = (function (){return (f__11803__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11803__auto__.cljs$core$IFn$_invoke$arity$0() : f__11803__auto__.call(null));
})();
(statearr_24065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11802__auto___24066);

return statearr_24065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11804__auto__);
});})(c__11802__auto___24066,mults,ensure_mult,p))
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
var dctr = (function (){var G__24177 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24177) : cljs.core.atom.call(null,G__24177));
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
var c__11802__auto___24250 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11802__auto___24250,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__11803__auto__ = (function (){var switch__11722__auto__ = ((function (c__11802__auto___24250,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24216){
var state_val_24217 = (state_24216[(1)]);
if((state_val_24217 === (7))){
var state_24216__$1 = state_24216;
var statearr_24218_24251 = state_24216__$1;
(statearr_24218_24251[(2)] = null);

(statearr_24218_24251[(1)] = (8));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24217 === (1))){
var state_24216__$1 = state_24216;
var statearr_24219_24252 = state_24216__$1;
(statearr_24219_24252[(2)] = null);

(statearr_24219_24252[(1)] = (2));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24217 === (4))){
var inst_24180 = (state_24216[(7)]);
var inst_24182 = (inst_24180 < cnt);
var state_24216__$1 = state_24216;
if(cljs.core.truth_(inst_24182)){
var statearr_24220_24253 = state_24216__$1;
(statearr_24220_24253[(1)] = (6));

} else {
var statearr_24221_24254 = state_24216__$1;
(statearr_24221_24254[(1)] = (7));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_24217 === (15))){
var inst_24212 = (state_24216[(2)]);
var state_24216__$1 = state_24216;
var statearr_24222_24255 = state_24216__$1;
(statearr_24222_24255[(2)] = inst_24212);

(statearr_24222_24255[(1)] = (3));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24217 === (13))){
var inst_24205 = cljs.core.async.close_BANG_(out);
var state_24216__$1 = state_24216;
var statearr_24223_24256 = state_24216__$1;
(statearr_24223_24256[(2)] = inst_24205);

(statearr_24223_24256[(1)] = (15));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24217 === (6))){
var state_24216__$1 = state_24216;
var statearr_24224_24257 = state_24216__$1;
(statearr_24224_24257[(2)] = null);

(statearr_24224_24257[(1)] = (11));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24217 === (3))){
var inst_24214 = (state_24216[(2)]);
var state_24216__$1 = state_24216;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24216__$1,inst_24214);
} else {
if((state_val_24217 === (12))){
var inst_24202 = (state_24216[(8)]);
var inst_24202__$1 = (state_24216[(2)]);
var inst_24203 = cljs.core.some(cljs.core.nil_QMARK_,inst_24202__$1);
var state_24216__$1 = (function (){var statearr_24225 = state_24216;
(statearr_24225[(8)] = inst_24202__$1);

return statearr_24225;
})();
if(cljs.core.truth_(inst_24203)){
var statearr_24226_24258 = state_24216__$1;
(statearr_24226_24258[(1)] = (13));

} else {
var statearr_24227_24259 = state_24216__$1;
(statearr_24227_24259[(1)] = (14));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_24217 === (2))){
var inst_24179 = (function (){var G__24228 = dctr;
var G__24229 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24228,G__24229) : cljs.core.reset_BANG_.call(null,G__24228,G__24229));
})();
var inst_24180 = (0);
var state_24216__$1 = (function (){var statearr_24230 = state_24216;
(statearr_24230[(7)] = inst_24180);

(statearr_24230[(9)] = inst_24179);

return statearr_24230;
})();
var statearr_24231_24260 = state_24216__$1;
(statearr_24231_24260[(2)] = null);

(statearr_24231_24260[(1)] = (4));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24217 === (11))){
var inst_24180 = (state_24216[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24216,(10),Object,null,(9));
var inst_24189 = (function (){var G__24232 = inst_24180;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__24232) : chs__$1.call(null,G__24232));
})();
var inst_24190 = (function (){var G__24233 = inst_24180;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__24233) : done.call(null,G__24233));
})();
var inst_24191 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_24189,inst_24190);
var state_24216__$1 = state_24216;
var statearr_24234_24261 = state_24216__$1;
(statearr_24234_24261[(2)] = inst_24191);


cljs.core.async.impl.ioc_helpers.process_exception(state_24216__$1);

return cljs.core.constant$keyword$46;
} else {
if((state_val_24217 === (9))){
var inst_24180 = (state_24216[(7)]);
var inst_24193 = (state_24216[(2)]);
var inst_24194 = (inst_24180 + (1));
var inst_24180__$1 = inst_24194;
var state_24216__$1 = (function (){var statearr_24235 = state_24216;
(statearr_24235[(7)] = inst_24180__$1);

(statearr_24235[(10)] = inst_24193);

return statearr_24235;
})();
var statearr_24236_24262 = state_24216__$1;
(statearr_24236_24262[(2)] = null);

(statearr_24236_24262[(1)] = (4));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24217 === (5))){
var inst_24200 = (state_24216[(2)]);
var state_24216__$1 = (function (){var statearr_24237 = state_24216;
(statearr_24237[(11)] = inst_24200);

return statearr_24237;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24216__$1,(12),dchan);
} else {
if((state_val_24217 === (14))){
var inst_24202 = (state_24216[(8)]);
var inst_24207 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_24202);
var state_24216__$1 = state_24216;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24216__$1,(16),out,inst_24207);
} else {
if((state_val_24217 === (16))){
var inst_24209 = (state_24216[(2)]);
var state_24216__$1 = (function (){var statearr_24238 = state_24216;
(statearr_24238[(12)] = inst_24209);

return statearr_24238;
})();
var statearr_24239_24263 = state_24216__$1;
(statearr_24239_24263[(2)] = null);

(statearr_24239_24263[(1)] = (2));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24217 === (10))){
var inst_24184 = (state_24216[(2)]);
var inst_24185 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_24216__$1 = (function (){var statearr_24240 = state_24216;
(statearr_24240[(13)] = inst_24184);

return statearr_24240;
})();
var statearr_24241_24264 = state_24216__$1;
(statearr_24241_24264[(2)] = inst_24185);


cljs.core.async.impl.ioc_helpers.process_exception(state_24216__$1);

return cljs.core.constant$keyword$46;
} else {
if((state_val_24217 === (8))){
var inst_24198 = (state_24216[(2)]);
var state_24216__$1 = state_24216;
var statearr_24242_24265 = state_24216__$1;
(statearr_24242_24265[(2)] = inst_24198);

(statearr_24242_24265[(1)] = (5));


return cljs.core.constant$keyword$46;
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
});})(c__11802__auto___24250,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__11722__auto__,c__11802__auto___24250,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__11723__auto__ = null;
var state_machine__11723__auto____0 = (function (){
var statearr_24246 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24246[(0)] = state_machine__11723__auto__);

(statearr_24246[(1)] = (1));

return statearr_24246;
});
var state_machine__11723__auto____1 = (function (state_24216){
while(true){
var ret_value__11724__auto__ = (function (){try{while(true){
var result__11725__auto__ = switch__11722__auto__(state_24216);
if(cljs.core.keyword_identical_QMARK_(result__11725__auto__,cljs.core.constant$keyword$46)){
continue;
} else {
return result__11725__auto__;
}
break;
}
}catch (e24247){if((e24247 instanceof Object)){
var ex__11726__auto__ = e24247;
var statearr_24248_24266 = state_24216;
(statearr_24248_24266[(5)] = ex__11726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24216);

return cljs.core.constant$keyword$46;
} else {
throw e24247;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11724__auto__,cljs.core.constant$keyword$46)){
var G__24267 = state_24216;
state_24216 = G__24267;
continue;
} else {
return ret_value__11724__auto__;
}
break;
}
});
state_machine__11723__auto__ = function(state_24216){
switch(arguments.length){
case 0:
return state_machine__11723__auto____0.call(this);
case 1:
return state_machine__11723__auto____1.call(this,state_24216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11723__auto____0;
state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11723__auto____1;
return state_machine__11723__auto__;
})()
;})(switch__11722__auto__,c__11802__auto___24250,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__11804__auto__ = (function (){var statearr_24249 = (function (){return (f__11803__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11803__auto__.cljs$core$IFn$_invoke$arity$0() : f__11803__auto__.call(null));
})();
(statearr_24249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11802__auto___24250);

return statearr_24249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11804__auto__);
});})(c__11802__auto___24250,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__11802__auto___24377 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11802__auto___24377,out){
return (function (){
var f__11803__auto__ = (function (){var switch__11722__auto__ = ((function (c__11802__auto___24377,out){
return (function (state_24353){
var state_val_24354 = (state_24353[(1)]);
if((state_val_24354 === (7))){
var inst_24332 = (state_24353[(7)]);
var inst_24333 = (state_24353[(8)]);
var inst_24332__$1 = (state_24353[(2)]);
var inst_24333__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24332__$1,(0),null);
var inst_24334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24332__$1,(1),null);
var inst_24335 = (inst_24333__$1 == null);
var state_24353__$1 = (function (){var statearr_24355 = state_24353;
(statearr_24355[(7)] = inst_24332__$1);

(statearr_24355[(9)] = inst_24334);

(statearr_24355[(8)] = inst_24333__$1);

return statearr_24355;
})();
if(cljs.core.truth_(inst_24335)){
var statearr_24356_24378 = state_24353__$1;
(statearr_24356_24378[(1)] = (8));

} else {
var statearr_24357_24379 = state_24353__$1;
(statearr_24357_24379[(1)] = (9));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_24354 === (1))){
var inst_24324 = cljs.core.vec(chs);
var inst_24325 = inst_24324;
var state_24353__$1 = (function (){var statearr_24358 = state_24353;
(statearr_24358[(10)] = inst_24325);

return statearr_24358;
})();
var statearr_24359_24380 = state_24353__$1;
(statearr_24359_24380[(2)] = null);

(statearr_24359_24380[(1)] = (2));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24354 === (4))){
var inst_24325 = (state_24353[(10)]);
var state_24353__$1 = state_24353;
return cljs.core.async.ioc_alts_BANG_(state_24353__$1,(7),inst_24325);
} else {
if((state_val_24354 === (6))){
var inst_24349 = (state_24353[(2)]);
var state_24353__$1 = state_24353;
var statearr_24360_24381 = state_24353__$1;
(statearr_24360_24381[(2)] = inst_24349);

(statearr_24360_24381[(1)] = (3));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24354 === (3))){
var inst_24351 = (state_24353[(2)]);
var state_24353__$1 = state_24353;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24353__$1,inst_24351);
} else {
if((state_val_24354 === (2))){
var inst_24325 = (state_24353[(10)]);
var inst_24327 = cljs.core.count(inst_24325);
var inst_24328 = (inst_24327 > (0));
var state_24353__$1 = state_24353;
if(cljs.core.truth_(inst_24328)){
var statearr_24362_24382 = state_24353__$1;
(statearr_24362_24382[(1)] = (4));

} else {
var statearr_24363_24383 = state_24353__$1;
(statearr_24363_24383[(1)] = (5));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_24354 === (11))){
var inst_24325 = (state_24353[(10)]);
var inst_24342 = (state_24353[(2)]);
var tmp24361 = inst_24325;
var inst_24325__$1 = tmp24361;
var state_24353__$1 = (function (){var statearr_24364 = state_24353;
(statearr_24364[(10)] = inst_24325__$1);

(statearr_24364[(11)] = inst_24342);

return statearr_24364;
})();
var statearr_24365_24384 = state_24353__$1;
(statearr_24365_24384[(2)] = null);

(statearr_24365_24384[(1)] = (2));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24354 === (9))){
var inst_24333 = (state_24353[(8)]);
var state_24353__$1 = state_24353;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24353__$1,(11),out,inst_24333);
} else {
if((state_val_24354 === (5))){
var inst_24347 = cljs.core.async.close_BANG_(out);
var state_24353__$1 = state_24353;
var statearr_24366_24385 = state_24353__$1;
(statearr_24366_24385[(2)] = inst_24347);

(statearr_24366_24385[(1)] = (6));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24354 === (10))){
var inst_24345 = (state_24353[(2)]);
var state_24353__$1 = state_24353;
var statearr_24367_24386 = state_24353__$1;
(statearr_24367_24386[(2)] = inst_24345);

(statearr_24367_24386[(1)] = (6));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24354 === (8))){
var inst_24325 = (state_24353[(10)]);
var inst_24332 = (state_24353[(7)]);
var inst_24334 = (state_24353[(9)]);
var inst_24333 = (state_24353[(8)]);
var inst_24337 = (function (){var c = inst_24334;
var v = inst_24333;
var vec__24330 = inst_24332;
var cs = inst_24325;
return ((function (c,v,vec__24330,cs,inst_24325,inst_24332,inst_24334,inst_24333,state_val_24354,c__11802__auto___24377,out){
return (function (p1__24268_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__24268_SHARP_);
});
;})(c,v,vec__24330,cs,inst_24325,inst_24332,inst_24334,inst_24333,state_val_24354,c__11802__auto___24377,out))
})();
var inst_24338 = cljs.core.filterv(inst_24337,inst_24325);
var inst_24325__$1 = inst_24338;
var state_24353__$1 = (function (){var statearr_24368 = state_24353;
(statearr_24368[(10)] = inst_24325__$1);

return statearr_24368;
})();
var statearr_24369_24387 = state_24353__$1;
(statearr_24369_24387[(2)] = null);

(statearr_24369_24387[(1)] = (2));


return cljs.core.constant$keyword$46;
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
});})(c__11802__auto___24377,out))
;
return ((function (switch__11722__auto__,c__11802__auto___24377,out){
return (function() {
var state_machine__11723__auto__ = null;
var state_machine__11723__auto____0 = (function (){
var statearr_24373 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24373[(0)] = state_machine__11723__auto__);

(statearr_24373[(1)] = (1));

return statearr_24373;
});
var state_machine__11723__auto____1 = (function (state_24353){
while(true){
var ret_value__11724__auto__ = (function (){try{while(true){
var result__11725__auto__ = switch__11722__auto__(state_24353);
if(cljs.core.keyword_identical_QMARK_(result__11725__auto__,cljs.core.constant$keyword$46)){
continue;
} else {
return result__11725__auto__;
}
break;
}
}catch (e24374){if((e24374 instanceof Object)){
var ex__11726__auto__ = e24374;
var statearr_24375_24388 = state_24353;
(statearr_24375_24388[(5)] = ex__11726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24353);

return cljs.core.constant$keyword$46;
} else {
throw e24374;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11724__auto__,cljs.core.constant$keyword$46)){
var G__24389 = state_24353;
state_24353 = G__24389;
continue;
} else {
return ret_value__11724__auto__;
}
break;
}
});
state_machine__11723__auto__ = function(state_24353){
switch(arguments.length){
case 0:
return state_machine__11723__auto____0.call(this);
case 1:
return state_machine__11723__auto____1.call(this,state_24353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11723__auto____0;
state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11723__auto____1;
return state_machine__11723__auto__;
})()
;})(switch__11722__auto__,c__11802__auto___24377,out))
})();
var state__11804__auto__ = (function (){var statearr_24376 = (function (){return (f__11803__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11803__auto__.cljs$core$IFn$_invoke$arity$0() : f__11803__auto__.call(null));
})();
(statearr_24376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11802__auto___24377);

return statearr_24376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11804__auto__);
});})(c__11802__auto___24377,out))
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
var c__11802__auto___24485 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11802__auto___24485,out){
return (function (){
var f__11803__auto__ = (function (){var switch__11722__auto__ = ((function (c__11802__auto___24485,out){
return (function (state_24462){
var state_val_24463 = (state_24462[(1)]);
if((state_val_24463 === (7))){
var inst_24444 = (state_24462[(7)]);
var inst_24444__$1 = (state_24462[(2)]);
var inst_24445 = (inst_24444__$1 == null);
var inst_24446 = cljs.core.not(inst_24445);
var state_24462__$1 = (function (){var statearr_24464 = state_24462;
(statearr_24464[(7)] = inst_24444__$1);

return statearr_24464;
})();
if(inst_24446){
var statearr_24465_24486 = state_24462__$1;
(statearr_24465_24486[(1)] = (8));

} else {
var statearr_24466_24487 = state_24462__$1;
(statearr_24466_24487[(1)] = (9));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_24463 === (1))){
var inst_24439 = (0);
var state_24462__$1 = (function (){var statearr_24467 = state_24462;
(statearr_24467[(8)] = inst_24439);

return statearr_24467;
})();
var statearr_24468_24488 = state_24462__$1;
(statearr_24468_24488[(2)] = null);

(statearr_24468_24488[(1)] = (2));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24463 === (4))){
var state_24462__$1 = state_24462;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24462__$1,(7),ch);
} else {
if((state_val_24463 === (6))){
var inst_24457 = (state_24462[(2)]);
var state_24462__$1 = state_24462;
var statearr_24469_24489 = state_24462__$1;
(statearr_24469_24489[(2)] = inst_24457);

(statearr_24469_24489[(1)] = (3));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24463 === (3))){
var inst_24459 = (state_24462[(2)]);
var inst_24460 = cljs.core.async.close_BANG_(out);
var state_24462__$1 = (function (){var statearr_24470 = state_24462;
(statearr_24470[(9)] = inst_24459);

return statearr_24470;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24462__$1,inst_24460);
} else {
if((state_val_24463 === (2))){
var inst_24439 = (state_24462[(8)]);
var inst_24441 = (inst_24439 < n);
var state_24462__$1 = state_24462;
if(cljs.core.truth_(inst_24441)){
var statearr_24471_24490 = state_24462__$1;
(statearr_24471_24490[(1)] = (4));

} else {
var statearr_24472_24491 = state_24462__$1;
(statearr_24472_24491[(1)] = (5));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_24463 === (11))){
var inst_24439 = (state_24462[(8)]);
var inst_24449 = (state_24462[(2)]);
var inst_24450 = (inst_24439 + (1));
var inst_24439__$1 = inst_24450;
var state_24462__$1 = (function (){var statearr_24473 = state_24462;
(statearr_24473[(8)] = inst_24439__$1);

(statearr_24473[(10)] = inst_24449);

return statearr_24473;
})();
var statearr_24474_24492 = state_24462__$1;
(statearr_24474_24492[(2)] = null);

(statearr_24474_24492[(1)] = (2));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24463 === (9))){
var state_24462__$1 = state_24462;
var statearr_24475_24493 = state_24462__$1;
(statearr_24475_24493[(2)] = null);

(statearr_24475_24493[(1)] = (10));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24463 === (5))){
var state_24462__$1 = state_24462;
var statearr_24476_24494 = state_24462__$1;
(statearr_24476_24494[(2)] = null);

(statearr_24476_24494[(1)] = (6));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24463 === (10))){
var inst_24454 = (state_24462[(2)]);
var state_24462__$1 = state_24462;
var statearr_24477_24495 = state_24462__$1;
(statearr_24477_24495[(2)] = inst_24454);

(statearr_24477_24495[(1)] = (6));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24463 === (8))){
var inst_24444 = (state_24462[(7)]);
var state_24462__$1 = state_24462;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24462__$1,(11),out,inst_24444);
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
});})(c__11802__auto___24485,out))
;
return ((function (switch__11722__auto__,c__11802__auto___24485,out){
return (function() {
var state_machine__11723__auto__ = null;
var state_machine__11723__auto____0 = (function (){
var statearr_24481 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24481[(0)] = state_machine__11723__auto__);

(statearr_24481[(1)] = (1));

return statearr_24481;
});
var state_machine__11723__auto____1 = (function (state_24462){
while(true){
var ret_value__11724__auto__ = (function (){try{while(true){
var result__11725__auto__ = switch__11722__auto__(state_24462);
if(cljs.core.keyword_identical_QMARK_(result__11725__auto__,cljs.core.constant$keyword$46)){
continue;
} else {
return result__11725__auto__;
}
break;
}
}catch (e24482){if((e24482 instanceof Object)){
var ex__11726__auto__ = e24482;
var statearr_24483_24496 = state_24462;
(statearr_24483_24496[(5)] = ex__11726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24462);

return cljs.core.constant$keyword$46;
} else {
throw e24482;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11724__auto__,cljs.core.constant$keyword$46)){
var G__24497 = state_24462;
state_24462 = G__24497;
continue;
} else {
return ret_value__11724__auto__;
}
break;
}
});
state_machine__11723__auto__ = function(state_24462){
switch(arguments.length){
case 0:
return state_machine__11723__auto____0.call(this);
case 1:
return state_machine__11723__auto____1.call(this,state_24462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11723__auto____0;
state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11723__auto____1;
return state_machine__11723__auto__;
})()
;})(switch__11722__auto__,c__11802__auto___24485,out))
})();
var state__11804__auto__ = (function (){var statearr_24484 = (function (){return (f__11803__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11803__auto__.cljs$core$IFn$_invoke$arity$0() : f__11803__auto__.call(null));
})();
(statearr_24484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11802__auto___24485);

return statearr_24484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11804__auto__);
});})(c__11802__auto___24485,out))
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
if(typeof cljs.core.async.t24510 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24510 = (function (ch,f,map_LT_,meta24511){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24511 = meta24511;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24510.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t24510.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t24510.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t24510.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t24513 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24513 = (function (fn1,_,meta24511,map_LT_,f,ch,meta24514){
this.fn1 = fn1;
this._ = _;
this.meta24511 = meta24511;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24514 = meta24514;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24513.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24513.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t24513.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24498_SHARP_){
var G__24516 = (((p1__24498_SHARP_ == null))?null:(function (){var G__24517 = p1__24498_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__24517) : self__.f.call(null,G__24517));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__24516) : f1.call(null,G__24516));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t24513.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24515){
var self__ = this;
var _24515__$1 = this;
return self__.meta24514;
});})(___$1))
;

cljs.core.async.t24513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24515,meta24514__$1){
var self__ = this;
var _24515__$1 = this;
return (new cljs.core.async.t24513(self__.fn1,self__._,self__.meta24511,self__.map_LT_,self__.f,self__.ch,meta24514__$1));
});})(___$1))
;

cljs.core.async.t24513.cljs$lang$type = true;

cljs.core.async.t24513.cljs$lang$ctorStr = "cljs.core.async/t24513";

cljs.core.async.t24513.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4170__auto__,writer__4171__auto__,opt__4172__auto__){
return cljs.core._write(writer__4171__auto__,"cljs.core.async/t24513");
});})(___$1))
;

cljs.core.async.__GT_t24513 = ((function (___$1){
return (function __GT_t24513(fn1__$1,___$2,meta24511__$1,map_LT___$1,f__$1,ch__$1,meta24514){
return (new cljs.core.async.t24513(fn1__$1,___$2,meta24511__$1,map_LT___$1,f__$1,ch__$1,meta24514));
});})(___$1))
;

}

return (new cljs.core.async.t24513(fn1,___$1,self__.meta24511,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3571__auto__ = ret;
if(cljs.core.truth_(and__3571__auto__)){
return !(((function (){var G__24518 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24518) : cljs.core.deref.call(null,G__24518));
})() == null));
} else {
return and__3571__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__24519 = (function (){var G__24520 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24520) : cljs.core.deref.call(null,G__24520));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__24519) : self__.f.call(null,G__24519));
})());
} else {
return ret;
}
});

cljs.core.async.t24510.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t24510.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t24510.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t24510.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24512){
var self__ = this;
var _24512__$1 = this;
return self__.meta24511;
});

cljs.core.async.t24510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24512,meta24511__$1){
var self__ = this;
var _24512__$1 = this;
return (new cljs.core.async.t24510(self__.ch,self__.f,self__.map_LT_,meta24511__$1));
});

cljs.core.async.t24510.cljs$lang$type = true;

cljs.core.async.t24510.cljs$lang$ctorStr = "cljs.core.async/t24510";

cljs.core.async.t24510.cljs$lang$ctorPrWriter = (function (this__4170__auto__,writer__4171__auto__,opt__4172__auto__){
return cljs.core._write(writer__4171__auto__,"cljs.core.async/t24510");
});

cljs.core.async.__GT_t24510 = (function __GT_t24510(ch__$1,f__$1,map_LT___$1,meta24511){
return (new cljs.core.async.t24510(ch__$1,f__$1,map_LT___$1,meta24511));
});

}

return (new cljs.core.async.t24510(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t24525 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24525 = (function (ch,f,map_GT_,meta24526){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta24526 = meta24526;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24525.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t24525.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__24528 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__24528) : self__.f.call(null,G__24528));
})(),fn1);
});

cljs.core.async.t24525.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t24525.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t24525.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t24525.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t24525.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24527){
var self__ = this;
var _24527__$1 = this;
return self__.meta24526;
});

cljs.core.async.t24525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24527,meta24526__$1){
var self__ = this;
var _24527__$1 = this;
return (new cljs.core.async.t24525(self__.ch,self__.f,self__.map_GT_,meta24526__$1));
});

cljs.core.async.t24525.cljs$lang$type = true;

cljs.core.async.t24525.cljs$lang$ctorStr = "cljs.core.async/t24525";

cljs.core.async.t24525.cljs$lang$ctorPrWriter = (function (this__4170__auto__,writer__4171__auto__,opt__4172__auto__){
return cljs.core._write(writer__4171__auto__,"cljs.core.async/t24525");
});

cljs.core.async.__GT_t24525 = (function __GT_t24525(ch__$1,f__$1,map_GT___$1,meta24526){
return (new cljs.core.async.t24525(ch__$1,f__$1,map_GT___$1,meta24526));
});

}

return (new cljs.core.async.t24525(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t24533 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24533 = (function (ch,p,filter_GT_,meta24534){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta24534 = meta24534;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24533.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t24533.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__24536 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__24536) : self__.p.call(null,G__24536));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t24533.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t24533.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t24533.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t24533.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t24533.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t24533.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24535){
var self__ = this;
var _24535__$1 = this;
return self__.meta24534;
});

cljs.core.async.t24533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24535,meta24534__$1){
var self__ = this;
var _24535__$1 = this;
return (new cljs.core.async.t24533(self__.ch,self__.p,self__.filter_GT_,meta24534__$1));
});

cljs.core.async.t24533.cljs$lang$type = true;

cljs.core.async.t24533.cljs$lang$ctorStr = "cljs.core.async/t24533";

cljs.core.async.t24533.cljs$lang$ctorPrWriter = (function (this__4170__auto__,writer__4171__auto__,opt__4172__auto__){
return cljs.core._write(writer__4171__auto__,"cljs.core.async/t24533");
});

cljs.core.async.__GT_t24533 = (function __GT_t24533(ch__$1,p__$1,filter_GT___$1,meta24534){
return (new cljs.core.async.t24533(ch__$1,p__$1,filter_GT___$1,meta24534));
});

}

return (new cljs.core.async.t24533(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var c__11802__auto___24624 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11802__auto___24624,out){
return (function (){
var f__11803__auto__ = (function (){var switch__11722__auto__ = ((function (c__11802__auto___24624,out){
return (function (state_24602){
var state_val_24603 = (state_24602[(1)]);
if((state_val_24603 === (7))){
var inst_24598 = (state_24602[(2)]);
var state_24602__$1 = state_24602;
var statearr_24604_24625 = state_24602__$1;
(statearr_24604_24625[(2)] = inst_24598);

(statearr_24604_24625[(1)] = (3));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24603 === (1))){
var state_24602__$1 = state_24602;
var statearr_24605_24626 = state_24602__$1;
(statearr_24605_24626[(2)] = null);

(statearr_24605_24626[(1)] = (2));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24603 === (4))){
var inst_24584 = (state_24602[(7)]);
var inst_24584__$1 = (state_24602[(2)]);
var inst_24585 = (inst_24584__$1 == null);
var state_24602__$1 = (function (){var statearr_24606 = state_24602;
(statearr_24606[(7)] = inst_24584__$1);

return statearr_24606;
})();
if(cljs.core.truth_(inst_24585)){
var statearr_24607_24627 = state_24602__$1;
(statearr_24607_24627[(1)] = (5));

} else {
var statearr_24608_24628 = state_24602__$1;
(statearr_24608_24628[(1)] = (6));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_24603 === (6))){
var inst_24584 = (state_24602[(7)]);
var inst_24589 = (function (){var G__24609 = inst_24584;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__24609) : p.call(null,G__24609));
})();
var state_24602__$1 = state_24602;
if(cljs.core.truth_(inst_24589)){
var statearr_24610_24629 = state_24602__$1;
(statearr_24610_24629[(1)] = (8));

} else {
var statearr_24611_24630 = state_24602__$1;
(statearr_24611_24630[(1)] = (9));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_24603 === (3))){
var inst_24600 = (state_24602[(2)]);
var state_24602__$1 = state_24602;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24602__$1,inst_24600);
} else {
if((state_val_24603 === (2))){
var state_24602__$1 = state_24602;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24602__$1,(4),ch);
} else {
if((state_val_24603 === (11))){
var inst_24592 = (state_24602[(2)]);
var state_24602__$1 = state_24602;
var statearr_24612_24631 = state_24602__$1;
(statearr_24612_24631[(2)] = inst_24592);

(statearr_24612_24631[(1)] = (10));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24603 === (9))){
var state_24602__$1 = state_24602;
var statearr_24613_24632 = state_24602__$1;
(statearr_24613_24632[(2)] = null);

(statearr_24613_24632[(1)] = (10));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24603 === (5))){
var inst_24587 = cljs.core.async.close_BANG_(out);
var state_24602__$1 = state_24602;
var statearr_24614_24633 = state_24602__$1;
(statearr_24614_24633[(2)] = inst_24587);

(statearr_24614_24633[(1)] = (7));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24603 === (10))){
var inst_24595 = (state_24602[(2)]);
var state_24602__$1 = (function (){var statearr_24615 = state_24602;
(statearr_24615[(8)] = inst_24595);

return statearr_24615;
})();
var statearr_24616_24634 = state_24602__$1;
(statearr_24616_24634[(2)] = null);

(statearr_24616_24634[(1)] = (2));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24603 === (8))){
var inst_24584 = (state_24602[(7)]);
var state_24602__$1 = state_24602;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24602__$1,(11),out,inst_24584);
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
});})(c__11802__auto___24624,out))
;
return ((function (switch__11722__auto__,c__11802__auto___24624,out){
return (function() {
var state_machine__11723__auto__ = null;
var state_machine__11723__auto____0 = (function (){
var statearr_24620 = [null,null,null,null,null,null,null,null,null];
(statearr_24620[(0)] = state_machine__11723__auto__);

(statearr_24620[(1)] = (1));

return statearr_24620;
});
var state_machine__11723__auto____1 = (function (state_24602){
while(true){
var ret_value__11724__auto__ = (function (){try{while(true){
var result__11725__auto__ = switch__11722__auto__(state_24602);
if(cljs.core.keyword_identical_QMARK_(result__11725__auto__,cljs.core.constant$keyword$46)){
continue;
} else {
return result__11725__auto__;
}
break;
}
}catch (e24621){if((e24621 instanceof Object)){
var ex__11726__auto__ = e24621;
var statearr_24622_24635 = state_24602;
(statearr_24622_24635[(5)] = ex__11726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24602);

return cljs.core.constant$keyword$46;
} else {
throw e24621;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11724__auto__,cljs.core.constant$keyword$46)){
var G__24636 = state_24602;
state_24602 = G__24636;
continue;
} else {
return ret_value__11724__auto__;
}
break;
}
});
state_machine__11723__auto__ = function(state_24602){
switch(arguments.length){
case 0:
return state_machine__11723__auto____0.call(this);
case 1:
return state_machine__11723__auto____1.call(this,state_24602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11723__auto____0;
state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11723__auto____1;
return state_machine__11723__auto__;
})()
;})(switch__11722__auto__,c__11802__auto___24624,out))
})();
var state__11804__auto__ = (function (){var statearr_24623 = (function (){return (f__11803__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11803__auto__.cljs$core$IFn$_invoke$arity$0() : f__11803__auto__.call(null));
})();
(statearr_24623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11802__auto___24624);

return statearr_24623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11804__auto__);
});})(c__11802__auto___24624,out))
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
var c__11802__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11802__auto__){
return (function (){
var f__11803__auto__ = (function (){var switch__11722__auto__ = ((function (c__11802__auto__){
return (function (state_24806){
var state_val_24807 = (state_24806[(1)]);
if((state_val_24807 === (7))){
var inst_24802 = (state_24806[(2)]);
var state_24806__$1 = state_24806;
var statearr_24808_24850 = state_24806__$1;
(statearr_24808_24850[(2)] = inst_24802);

(statearr_24808_24850[(1)] = (3));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24807 === (20))){
var inst_24772 = (state_24806[(7)]);
var inst_24783 = (state_24806[(2)]);
var inst_24784 = cljs.core.next(inst_24772);
var inst_24758 = inst_24784;
var inst_24759 = null;
var inst_24760 = (0);
var inst_24761 = (0);
var state_24806__$1 = (function (){var statearr_24809 = state_24806;
(statearr_24809[(8)] = inst_24758);

(statearr_24809[(9)] = inst_24759);

(statearr_24809[(10)] = inst_24783);

(statearr_24809[(11)] = inst_24760);

(statearr_24809[(12)] = inst_24761);

return statearr_24809;
})();
var statearr_24810_24851 = state_24806__$1;
(statearr_24810_24851[(2)] = null);

(statearr_24810_24851[(1)] = (8));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24807 === (1))){
var state_24806__$1 = state_24806;
var statearr_24811_24852 = state_24806__$1;
(statearr_24811_24852[(2)] = null);

(statearr_24811_24852[(1)] = (2));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24807 === (4))){
var inst_24747 = (state_24806[(13)]);
var inst_24747__$1 = (state_24806[(2)]);
var inst_24748 = (inst_24747__$1 == null);
var state_24806__$1 = (function (){var statearr_24812 = state_24806;
(statearr_24812[(13)] = inst_24747__$1);

return statearr_24812;
})();
if(cljs.core.truth_(inst_24748)){
var statearr_24813_24853 = state_24806__$1;
(statearr_24813_24853[(1)] = (5));

} else {
var statearr_24814_24854 = state_24806__$1;
(statearr_24814_24854[(1)] = (6));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_24807 === (15))){
var state_24806__$1 = state_24806;
var statearr_24818_24855 = state_24806__$1;
(statearr_24818_24855[(2)] = null);

(statearr_24818_24855[(1)] = (16));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24807 === (21))){
var state_24806__$1 = state_24806;
var statearr_24819_24856 = state_24806__$1;
(statearr_24819_24856[(2)] = null);

(statearr_24819_24856[(1)] = (23));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24807 === (13))){
var inst_24758 = (state_24806[(8)]);
var inst_24759 = (state_24806[(9)]);
var inst_24760 = (state_24806[(11)]);
var inst_24761 = (state_24806[(12)]);
var inst_24768 = (state_24806[(2)]);
var inst_24769 = (inst_24761 + (1));
var tmp24815 = inst_24758;
var tmp24816 = inst_24759;
var tmp24817 = inst_24760;
var inst_24758__$1 = tmp24815;
var inst_24759__$1 = tmp24816;
var inst_24760__$1 = tmp24817;
var inst_24761__$1 = inst_24769;
var state_24806__$1 = (function (){var statearr_24820 = state_24806;
(statearr_24820[(8)] = inst_24758__$1);

(statearr_24820[(9)] = inst_24759__$1);

(statearr_24820[(14)] = inst_24768);

(statearr_24820[(11)] = inst_24760__$1);

(statearr_24820[(12)] = inst_24761__$1);

return statearr_24820;
})();
var statearr_24821_24857 = state_24806__$1;
(statearr_24821_24857[(2)] = null);

(statearr_24821_24857[(1)] = (8));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24807 === (22))){
var state_24806__$1 = state_24806;
var statearr_24822_24858 = state_24806__$1;
(statearr_24822_24858[(2)] = null);

(statearr_24822_24858[(1)] = (2));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24807 === (6))){
var inst_24747 = (state_24806[(13)]);
var inst_24756 = (function (){var G__24823 = inst_24747;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24823) : f.call(null,G__24823));
})();
var inst_24757 = cljs.core.seq(inst_24756);
var inst_24758 = inst_24757;
var inst_24759 = null;
var inst_24760 = (0);
var inst_24761 = (0);
var state_24806__$1 = (function (){var statearr_24824 = state_24806;
(statearr_24824[(8)] = inst_24758);

(statearr_24824[(9)] = inst_24759);

(statearr_24824[(11)] = inst_24760);

(statearr_24824[(12)] = inst_24761);

return statearr_24824;
})();
var statearr_24825_24859 = state_24806__$1;
(statearr_24825_24859[(2)] = null);

(statearr_24825_24859[(1)] = (8));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24807 === (17))){
var inst_24772 = (state_24806[(7)]);
var inst_24776 = cljs.core.chunk_first(inst_24772);
var inst_24777 = cljs.core.chunk_rest(inst_24772);
var inst_24778 = cljs.core.count(inst_24776);
var inst_24758 = inst_24777;
var inst_24759 = inst_24776;
var inst_24760 = inst_24778;
var inst_24761 = (0);
var state_24806__$1 = (function (){var statearr_24826 = state_24806;
(statearr_24826[(8)] = inst_24758);

(statearr_24826[(9)] = inst_24759);

(statearr_24826[(11)] = inst_24760);

(statearr_24826[(12)] = inst_24761);

return statearr_24826;
})();
var statearr_24827_24860 = state_24806__$1;
(statearr_24827_24860[(2)] = null);

(statearr_24827_24860[(1)] = (8));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24807 === (3))){
var inst_24804 = (state_24806[(2)]);
var state_24806__$1 = state_24806;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24806__$1,inst_24804);
} else {
if((state_val_24807 === (12))){
var inst_24792 = (state_24806[(2)]);
var state_24806__$1 = state_24806;
var statearr_24828_24861 = state_24806__$1;
(statearr_24828_24861[(2)] = inst_24792);

(statearr_24828_24861[(1)] = (9));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24807 === (2))){
var state_24806__$1 = state_24806;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24806__$1,(4),in$);
} else {
if((state_val_24807 === (23))){
var inst_24800 = (state_24806[(2)]);
var state_24806__$1 = state_24806;
var statearr_24829_24862 = state_24806__$1;
(statearr_24829_24862[(2)] = inst_24800);

(statearr_24829_24862[(1)] = (7));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24807 === (19))){
var inst_24787 = (state_24806[(2)]);
var state_24806__$1 = state_24806;
var statearr_24830_24863 = state_24806__$1;
(statearr_24830_24863[(2)] = inst_24787);

(statearr_24830_24863[(1)] = (16));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24807 === (11))){
var inst_24758 = (state_24806[(8)]);
var inst_24772 = (state_24806[(7)]);
var inst_24772__$1 = cljs.core.seq(inst_24758);
var state_24806__$1 = (function (){var statearr_24831 = state_24806;
(statearr_24831[(7)] = inst_24772__$1);

return statearr_24831;
})();
if(inst_24772__$1){
var statearr_24832_24864 = state_24806__$1;
(statearr_24832_24864[(1)] = (14));

} else {
var statearr_24833_24865 = state_24806__$1;
(statearr_24833_24865[(1)] = (15));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_24807 === (9))){
var inst_24794 = (state_24806[(2)]);
var inst_24795 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_24806__$1 = (function (){var statearr_24834 = state_24806;
(statearr_24834[(15)] = inst_24794);

return statearr_24834;
})();
if(cljs.core.truth_(inst_24795)){
var statearr_24835_24866 = state_24806__$1;
(statearr_24835_24866[(1)] = (21));

} else {
var statearr_24836_24867 = state_24806__$1;
(statearr_24836_24867[(1)] = (22));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_24807 === (5))){
var inst_24750 = cljs.core.async.close_BANG_(out);
var state_24806__$1 = state_24806;
var statearr_24837_24868 = state_24806__$1;
(statearr_24837_24868[(2)] = inst_24750);

(statearr_24837_24868[(1)] = (7));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24807 === (14))){
var inst_24772 = (state_24806[(7)]);
var inst_24774 = cljs.core.chunked_seq_QMARK_(inst_24772);
var state_24806__$1 = state_24806;
if(inst_24774){
var statearr_24838_24869 = state_24806__$1;
(statearr_24838_24869[(1)] = (17));

} else {
var statearr_24839_24870 = state_24806__$1;
(statearr_24839_24870[(1)] = (18));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_24807 === (16))){
var inst_24790 = (state_24806[(2)]);
var state_24806__$1 = state_24806;
var statearr_24840_24871 = state_24806__$1;
(statearr_24840_24871[(2)] = inst_24790);

(statearr_24840_24871[(1)] = (12));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24807 === (10))){
var inst_24759 = (state_24806[(9)]);
var inst_24761 = (state_24806[(12)]);
var inst_24766 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24759,inst_24761);
var state_24806__$1 = state_24806;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24806__$1,(13),out,inst_24766);
} else {
if((state_val_24807 === (18))){
var inst_24772 = (state_24806[(7)]);
var inst_24781 = cljs.core.first(inst_24772);
var state_24806__$1 = state_24806;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24806__$1,(20),out,inst_24781);
} else {
if((state_val_24807 === (8))){
var inst_24760 = (state_24806[(11)]);
var inst_24761 = (state_24806[(12)]);
var inst_24763 = (inst_24761 < inst_24760);
var inst_24764 = inst_24763;
var state_24806__$1 = state_24806;
if(cljs.core.truth_(inst_24764)){
var statearr_24841_24872 = state_24806__$1;
(statearr_24841_24872[(1)] = (10));

} else {
var statearr_24842_24873 = state_24806__$1;
(statearr_24842_24873[(1)] = (11));

}

return cljs.core.constant$keyword$46;
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
});})(c__11802__auto__))
;
return ((function (switch__11722__auto__,c__11802__auto__){
return (function() {
var state_machine__11723__auto__ = null;
var state_machine__11723__auto____0 = (function (){
var statearr_24846 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24846[(0)] = state_machine__11723__auto__);

(statearr_24846[(1)] = (1));

return statearr_24846;
});
var state_machine__11723__auto____1 = (function (state_24806){
while(true){
var ret_value__11724__auto__ = (function (){try{while(true){
var result__11725__auto__ = switch__11722__auto__(state_24806);
if(cljs.core.keyword_identical_QMARK_(result__11725__auto__,cljs.core.constant$keyword$46)){
continue;
} else {
return result__11725__auto__;
}
break;
}
}catch (e24847){if((e24847 instanceof Object)){
var ex__11726__auto__ = e24847;
var statearr_24848_24874 = state_24806;
(statearr_24848_24874[(5)] = ex__11726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24806);

return cljs.core.constant$keyword$46;
} else {
throw e24847;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11724__auto__,cljs.core.constant$keyword$46)){
var G__24875 = state_24806;
state_24806 = G__24875;
continue;
} else {
return ret_value__11724__auto__;
}
break;
}
});
state_machine__11723__auto__ = function(state_24806){
switch(arguments.length){
case 0:
return state_machine__11723__auto____0.call(this);
case 1:
return state_machine__11723__auto____1.call(this,state_24806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11723__auto____0;
state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11723__auto____1;
return state_machine__11723__auto__;
})()
;})(switch__11722__auto__,c__11802__auto__))
})();
var state__11804__auto__ = (function (){var statearr_24849 = (function (){return (f__11803__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11803__auto__.cljs$core$IFn$_invoke$arity$0() : f__11803__auto__.call(null));
})();
(statearr_24849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11802__auto__);

return statearr_24849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11804__auto__);
});})(c__11802__auto__))
);

return c__11802__auto__;
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
var c__11802__auto___24980 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11802__auto___24980,out){
return (function (){
var f__11803__auto__ = (function (){var switch__11722__auto__ = ((function (c__11802__auto___24980,out){
return (function (state_24955){
var state_val_24956 = (state_24955[(1)]);
if((state_val_24956 === (7))){
var inst_24950 = (state_24955[(2)]);
var state_24955__$1 = state_24955;
var statearr_24957_24981 = state_24955__$1;
(statearr_24957_24981[(2)] = inst_24950);

(statearr_24957_24981[(1)] = (3));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24956 === (1))){
var inst_24932 = null;
var state_24955__$1 = (function (){var statearr_24958 = state_24955;
(statearr_24958[(7)] = inst_24932);

return statearr_24958;
})();
var statearr_24959_24982 = state_24955__$1;
(statearr_24959_24982[(2)] = null);

(statearr_24959_24982[(1)] = (2));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24956 === (4))){
var inst_24935 = (state_24955[(8)]);
var inst_24935__$1 = (state_24955[(2)]);
var inst_24936 = (inst_24935__$1 == null);
var inst_24937 = cljs.core.not(inst_24936);
var state_24955__$1 = (function (){var statearr_24960 = state_24955;
(statearr_24960[(8)] = inst_24935__$1);

return statearr_24960;
})();
if(inst_24937){
var statearr_24961_24983 = state_24955__$1;
(statearr_24961_24983[(1)] = (5));

} else {
var statearr_24962_24984 = state_24955__$1;
(statearr_24962_24984[(1)] = (6));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_24956 === (6))){
var state_24955__$1 = state_24955;
var statearr_24963_24985 = state_24955__$1;
(statearr_24963_24985[(2)] = null);

(statearr_24963_24985[(1)] = (7));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24956 === (3))){
var inst_24952 = (state_24955[(2)]);
var inst_24953 = cljs.core.async.close_BANG_(out);
var state_24955__$1 = (function (){var statearr_24964 = state_24955;
(statearr_24964[(9)] = inst_24952);

return statearr_24964;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24955__$1,inst_24953);
} else {
if((state_val_24956 === (2))){
var state_24955__$1 = state_24955;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24955__$1,(4),ch);
} else {
if((state_val_24956 === (11))){
var inst_24935 = (state_24955[(8)]);
var inst_24944 = (state_24955[(2)]);
var inst_24932 = inst_24935;
var state_24955__$1 = (function (){var statearr_24965 = state_24955;
(statearr_24965[(10)] = inst_24944);

(statearr_24965[(7)] = inst_24932);

return statearr_24965;
})();
var statearr_24966_24986 = state_24955__$1;
(statearr_24966_24986[(2)] = null);

(statearr_24966_24986[(1)] = (2));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24956 === (9))){
var inst_24935 = (state_24955[(8)]);
var state_24955__$1 = state_24955;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24955__$1,(11),out,inst_24935);
} else {
if((state_val_24956 === (5))){
var inst_24935 = (state_24955[(8)]);
var inst_24932 = (state_24955[(7)]);
var inst_24939 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24935,inst_24932);
var state_24955__$1 = state_24955;
if(inst_24939){
var statearr_24968_24987 = state_24955__$1;
(statearr_24968_24987[(1)] = (8));

} else {
var statearr_24969_24988 = state_24955__$1;
(statearr_24969_24988[(1)] = (9));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_24956 === (10))){
var inst_24947 = (state_24955[(2)]);
var state_24955__$1 = state_24955;
var statearr_24970_24989 = state_24955__$1;
(statearr_24970_24989[(2)] = inst_24947);

(statearr_24970_24989[(1)] = (7));


return cljs.core.constant$keyword$46;
} else {
if((state_val_24956 === (8))){
var inst_24932 = (state_24955[(7)]);
var tmp24967 = inst_24932;
var inst_24932__$1 = tmp24967;
var state_24955__$1 = (function (){var statearr_24971 = state_24955;
(statearr_24971[(7)] = inst_24932__$1);

return statearr_24971;
})();
var statearr_24972_24990 = state_24955__$1;
(statearr_24972_24990[(2)] = null);

(statearr_24972_24990[(1)] = (2));


return cljs.core.constant$keyword$46;
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
});})(c__11802__auto___24980,out))
;
return ((function (switch__11722__auto__,c__11802__auto___24980,out){
return (function() {
var state_machine__11723__auto__ = null;
var state_machine__11723__auto____0 = (function (){
var statearr_24976 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24976[(0)] = state_machine__11723__auto__);

(statearr_24976[(1)] = (1));

return statearr_24976;
});
var state_machine__11723__auto____1 = (function (state_24955){
while(true){
var ret_value__11724__auto__ = (function (){try{while(true){
var result__11725__auto__ = switch__11722__auto__(state_24955);
if(cljs.core.keyword_identical_QMARK_(result__11725__auto__,cljs.core.constant$keyword$46)){
continue;
} else {
return result__11725__auto__;
}
break;
}
}catch (e24977){if((e24977 instanceof Object)){
var ex__11726__auto__ = e24977;
var statearr_24978_24991 = state_24955;
(statearr_24978_24991[(5)] = ex__11726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24955);

return cljs.core.constant$keyword$46;
} else {
throw e24977;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11724__auto__,cljs.core.constant$keyword$46)){
var G__24992 = state_24955;
state_24955 = G__24992;
continue;
} else {
return ret_value__11724__auto__;
}
break;
}
});
state_machine__11723__auto__ = function(state_24955){
switch(arguments.length){
case 0:
return state_machine__11723__auto____0.call(this);
case 1:
return state_machine__11723__auto____1.call(this,state_24955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11723__auto____0;
state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11723__auto____1;
return state_machine__11723__auto__;
})()
;})(switch__11722__auto__,c__11802__auto___24980,out))
})();
var state__11804__auto__ = (function (){var statearr_24979 = (function (){return (f__11803__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11803__auto__.cljs$core$IFn$_invoke$arity$0() : f__11803__auto__.call(null));
})();
(statearr_24979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11802__auto___24980);

return statearr_24979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11804__auto__);
});})(c__11802__auto___24980,out))
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
var c__11802__auto___25130 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11802__auto___25130,out){
return (function (){
var f__11803__auto__ = (function (){var switch__11722__auto__ = ((function (c__11802__auto___25130,out){
return (function (state_25100){
var state_val_25101 = (state_25100[(1)]);
if((state_val_25101 === (7))){
var inst_25096 = (state_25100[(2)]);
var state_25100__$1 = state_25100;
var statearr_25102_25131 = state_25100__$1;
(statearr_25102_25131[(2)] = inst_25096);

(statearr_25102_25131[(1)] = (3));


return cljs.core.constant$keyword$46;
} else {
if((state_val_25101 === (1))){
var inst_25063 = (new Array(n));
var inst_25064 = inst_25063;
var inst_25065 = (0);
var state_25100__$1 = (function (){var statearr_25103 = state_25100;
(statearr_25103[(7)] = inst_25065);

(statearr_25103[(8)] = inst_25064);

return statearr_25103;
})();
var statearr_25104_25132 = state_25100__$1;
(statearr_25104_25132[(2)] = null);

(statearr_25104_25132[(1)] = (2));


return cljs.core.constant$keyword$46;
} else {
if((state_val_25101 === (4))){
var inst_25068 = (state_25100[(9)]);
var inst_25068__$1 = (state_25100[(2)]);
var inst_25069 = (inst_25068__$1 == null);
var inst_25070 = cljs.core.not(inst_25069);
var state_25100__$1 = (function (){var statearr_25105 = state_25100;
(statearr_25105[(9)] = inst_25068__$1);

return statearr_25105;
})();
if(inst_25070){
var statearr_25106_25133 = state_25100__$1;
(statearr_25106_25133[(1)] = (5));

} else {
var statearr_25107_25134 = state_25100__$1;
(statearr_25107_25134[(1)] = (6));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_25101 === (15))){
var inst_25090 = (state_25100[(2)]);
var state_25100__$1 = state_25100;
var statearr_25108_25135 = state_25100__$1;
(statearr_25108_25135[(2)] = inst_25090);

(statearr_25108_25135[(1)] = (14));


return cljs.core.constant$keyword$46;
} else {
if((state_val_25101 === (13))){
var state_25100__$1 = state_25100;
var statearr_25109_25136 = state_25100__$1;
(statearr_25109_25136[(2)] = null);

(statearr_25109_25136[(1)] = (14));


return cljs.core.constant$keyword$46;
} else {
if((state_val_25101 === (6))){
var inst_25065 = (state_25100[(7)]);
var inst_25086 = (inst_25065 > (0));
var state_25100__$1 = state_25100;
if(cljs.core.truth_(inst_25086)){
var statearr_25110_25137 = state_25100__$1;
(statearr_25110_25137[(1)] = (12));

} else {
var statearr_25111_25138 = state_25100__$1;
(statearr_25111_25138[(1)] = (13));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_25101 === (3))){
var inst_25098 = (state_25100[(2)]);
var state_25100__$1 = state_25100;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25100__$1,inst_25098);
} else {
if((state_val_25101 === (12))){
var inst_25064 = (state_25100[(8)]);
var inst_25088 = cljs.core.vec(inst_25064);
var state_25100__$1 = state_25100;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25100__$1,(15),out,inst_25088);
} else {
if((state_val_25101 === (2))){
var state_25100__$1 = state_25100;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25100__$1,(4),ch);
} else {
if((state_val_25101 === (11))){
var inst_25080 = (state_25100[(2)]);
var inst_25081 = (new Array(n));
var inst_25064 = inst_25081;
var inst_25065 = (0);
var state_25100__$1 = (function (){var statearr_25112 = state_25100;
(statearr_25112[(7)] = inst_25065);

(statearr_25112[(8)] = inst_25064);

(statearr_25112[(10)] = inst_25080);

return statearr_25112;
})();
var statearr_25113_25139 = state_25100__$1;
(statearr_25113_25139[(2)] = null);

(statearr_25113_25139[(1)] = (2));


return cljs.core.constant$keyword$46;
} else {
if((state_val_25101 === (9))){
var inst_25064 = (state_25100[(8)]);
var inst_25078 = cljs.core.vec(inst_25064);
var state_25100__$1 = state_25100;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25100__$1,(11),out,inst_25078);
} else {
if((state_val_25101 === (5))){
var inst_25065 = (state_25100[(7)]);
var inst_25064 = (state_25100[(8)]);
var inst_25068 = (state_25100[(9)]);
var inst_25073 = (state_25100[(11)]);
var inst_25072 = (inst_25064[inst_25065] = inst_25068);
var inst_25073__$1 = (inst_25065 + (1));
var inst_25074 = (inst_25073__$1 < n);
var state_25100__$1 = (function (){var statearr_25114 = state_25100;
(statearr_25114[(12)] = inst_25072);

(statearr_25114[(11)] = inst_25073__$1);

return statearr_25114;
})();
if(cljs.core.truth_(inst_25074)){
var statearr_25115_25140 = state_25100__$1;
(statearr_25115_25140[(1)] = (8));

} else {
var statearr_25116_25141 = state_25100__$1;
(statearr_25116_25141[(1)] = (9));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_25101 === (14))){
var inst_25093 = (state_25100[(2)]);
var inst_25094 = cljs.core.async.close_BANG_(out);
var state_25100__$1 = (function (){var statearr_25118 = state_25100;
(statearr_25118[(13)] = inst_25093);

return statearr_25118;
})();
var statearr_25119_25142 = state_25100__$1;
(statearr_25119_25142[(2)] = inst_25094);

(statearr_25119_25142[(1)] = (7));


return cljs.core.constant$keyword$46;
} else {
if((state_val_25101 === (10))){
var inst_25084 = (state_25100[(2)]);
var state_25100__$1 = state_25100;
var statearr_25120_25143 = state_25100__$1;
(statearr_25120_25143[(2)] = inst_25084);

(statearr_25120_25143[(1)] = (7));


return cljs.core.constant$keyword$46;
} else {
if((state_val_25101 === (8))){
var inst_25064 = (state_25100[(8)]);
var inst_25073 = (state_25100[(11)]);
var tmp25117 = inst_25064;
var inst_25064__$1 = tmp25117;
var inst_25065 = inst_25073;
var state_25100__$1 = (function (){var statearr_25121 = state_25100;
(statearr_25121[(7)] = inst_25065);

(statearr_25121[(8)] = inst_25064__$1);

return statearr_25121;
})();
var statearr_25122_25144 = state_25100__$1;
(statearr_25122_25144[(2)] = null);

(statearr_25122_25144[(1)] = (2));


return cljs.core.constant$keyword$46;
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
});})(c__11802__auto___25130,out))
;
return ((function (switch__11722__auto__,c__11802__auto___25130,out){
return (function() {
var state_machine__11723__auto__ = null;
var state_machine__11723__auto____0 = (function (){
var statearr_25126 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25126[(0)] = state_machine__11723__auto__);

(statearr_25126[(1)] = (1));

return statearr_25126;
});
var state_machine__11723__auto____1 = (function (state_25100){
while(true){
var ret_value__11724__auto__ = (function (){try{while(true){
var result__11725__auto__ = switch__11722__auto__(state_25100);
if(cljs.core.keyword_identical_QMARK_(result__11725__auto__,cljs.core.constant$keyword$46)){
continue;
} else {
return result__11725__auto__;
}
break;
}
}catch (e25127){if((e25127 instanceof Object)){
var ex__11726__auto__ = e25127;
var statearr_25128_25145 = state_25100;
(statearr_25128_25145[(5)] = ex__11726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25100);

return cljs.core.constant$keyword$46;
} else {
throw e25127;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11724__auto__,cljs.core.constant$keyword$46)){
var G__25146 = state_25100;
state_25100 = G__25146;
continue;
} else {
return ret_value__11724__auto__;
}
break;
}
});
state_machine__11723__auto__ = function(state_25100){
switch(arguments.length){
case 0:
return state_machine__11723__auto____0.call(this);
case 1:
return state_machine__11723__auto____1.call(this,state_25100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11723__auto____0;
state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11723__auto____1;
return state_machine__11723__auto__;
})()
;})(switch__11722__auto__,c__11802__auto___25130,out))
})();
var state__11804__auto__ = (function (){var statearr_25129 = (function (){return (f__11803__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11803__auto__.cljs$core$IFn$_invoke$arity$0() : f__11803__auto__.call(null));
})();
(statearr_25129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11802__auto___25130);

return statearr_25129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11804__auto__);
});})(c__11802__auto___25130,out))
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
var c__11802__auto___25294 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11802__auto___25294,out){
return (function (){
var f__11803__auto__ = (function (){var switch__11722__auto__ = ((function (c__11802__auto___25294,out){
return (function (state_25263){
var state_val_25264 = (state_25263[(1)]);
if((state_val_25264 === (7))){
var inst_25259 = (state_25263[(2)]);
var state_25263__$1 = state_25263;
var statearr_25265_25295 = state_25263__$1;
(statearr_25265_25295[(2)] = inst_25259);

(statearr_25265_25295[(1)] = (3));


return cljs.core.constant$keyword$46;
} else {
if((state_val_25264 === (1))){
var inst_25222 = [];
var inst_25223 = inst_25222;
var inst_25224 = cljs.core.constant$keyword$61;
var state_25263__$1 = (function (){var statearr_25266 = state_25263;
(statearr_25266[(7)] = inst_25224);

(statearr_25266[(8)] = inst_25223);

return statearr_25266;
})();
var statearr_25267_25296 = state_25263__$1;
(statearr_25267_25296[(2)] = null);

(statearr_25267_25296[(1)] = (2));


return cljs.core.constant$keyword$46;
} else {
if((state_val_25264 === (4))){
var inst_25227 = (state_25263[(9)]);
var inst_25227__$1 = (state_25263[(2)]);
var inst_25228 = (inst_25227__$1 == null);
var inst_25229 = cljs.core.not(inst_25228);
var state_25263__$1 = (function (){var statearr_25268 = state_25263;
(statearr_25268[(9)] = inst_25227__$1);

return statearr_25268;
})();
if(inst_25229){
var statearr_25269_25297 = state_25263__$1;
(statearr_25269_25297[(1)] = (5));

} else {
var statearr_25270_25298 = state_25263__$1;
(statearr_25270_25298[(1)] = (6));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_25264 === (15))){
var inst_25253 = (state_25263[(2)]);
var state_25263__$1 = state_25263;
var statearr_25271_25299 = state_25263__$1;
(statearr_25271_25299[(2)] = inst_25253);

(statearr_25271_25299[(1)] = (14));


return cljs.core.constant$keyword$46;
} else {
if((state_val_25264 === (13))){
var state_25263__$1 = state_25263;
var statearr_25272_25300 = state_25263__$1;
(statearr_25272_25300[(2)] = null);

(statearr_25272_25300[(1)] = (14));


return cljs.core.constant$keyword$46;
} else {
if((state_val_25264 === (6))){
var inst_25223 = (state_25263[(8)]);
var inst_25248 = inst_25223.length;
var inst_25249 = (inst_25248 > (0));
var state_25263__$1 = state_25263;
if(cljs.core.truth_(inst_25249)){
var statearr_25273_25301 = state_25263__$1;
(statearr_25273_25301[(1)] = (12));

} else {
var statearr_25274_25302 = state_25263__$1;
(statearr_25274_25302[(1)] = (13));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_25264 === (3))){
var inst_25261 = (state_25263[(2)]);
var state_25263__$1 = state_25263;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25263__$1,inst_25261);
} else {
if((state_val_25264 === (12))){
var inst_25223 = (state_25263[(8)]);
var inst_25251 = cljs.core.vec(inst_25223);
var state_25263__$1 = state_25263;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25263__$1,(15),out,inst_25251);
} else {
if((state_val_25264 === (2))){
var state_25263__$1 = state_25263;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25263__$1,(4),ch);
} else {
if((state_val_25264 === (11))){
var inst_25227 = (state_25263[(9)]);
var inst_25231 = (state_25263[(10)]);
var inst_25241 = (state_25263[(2)]);
var inst_25242 = [];
var inst_25243 = inst_25242.push(inst_25227);
var inst_25223 = inst_25242;
var inst_25224 = inst_25231;
var state_25263__$1 = (function (){var statearr_25275 = state_25263;
(statearr_25275[(11)] = inst_25243);

(statearr_25275[(12)] = inst_25241);

(statearr_25275[(7)] = inst_25224);

(statearr_25275[(8)] = inst_25223);

return statearr_25275;
})();
var statearr_25276_25303 = state_25263__$1;
(statearr_25276_25303[(2)] = null);

(statearr_25276_25303[(1)] = (2));


return cljs.core.constant$keyword$46;
} else {
if((state_val_25264 === (9))){
var inst_25223 = (state_25263[(8)]);
var inst_25239 = cljs.core.vec(inst_25223);
var state_25263__$1 = state_25263;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25263__$1,(11),out,inst_25239);
} else {
if((state_val_25264 === (5))){
var inst_25227 = (state_25263[(9)]);
var inst_25224 = (state_25263[(7)]);
var inst_25231 = (state_25263[(10)]);
var inst_25231__$1 = (function (){var G__25277 = inst_25227;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25277) : f.call(null,G__25277));
})();
var inst_25232 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25231__$1,inst_25224);
var inst_25233 = cljs.core.keyword_identical_QMARK_(inst_25224,cljs.core.constant$keyword$61);
var inst_25234 = (inst_25232) || (inst_25233);
var state_25263__$1 = (function (){var statearr_25278 = state_25263;
(statearr_25278[(10)] = inst_25231__$1);

return statearr_25278;
})();
if(cljs.core.truth_(inst_25234)){
var statearr_25279_25304 = state_25263__$1;
(statearr_25279_25304[(1)] = (8));

} else {
var statearr_25280_25305 = state_25263__$1;
(statearr_25280_25305[(1)] = (9));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_25264 === (14))){
var inst_25256 = (state_25263[(2)]);
var inst_25257 = cljs.core.async.close_BANG_(out);
var state_25263__$1 = (function (){var statearr_25282 = state_25263;
(statearr_25282[(13)] = inst_25256);

return statearr_25282;
})();
var statearr_25283_25306 = state_25263__$1;
(statearr_25283_25306[(2)] = inst_25257);

(statearr_25283_25306[(1)] = (7));


return cljs.core.constant$keyword$46;
} else {
if((state_val_25264 === (10))){
var inst_25246 = (state_25263[(2)]);
var state_25263__$1 = state_25263;
var statearr_25284_25307 = state_25263__$1;
(statearr_25284_25307[(2)] = inst_25246);

(statearr_25284_25307[(1)] = (7));


return cljs.core.constant$keyword$46;
} else {
if((state_val_25264 === (8))){
var inst_25227 = (state_25263[(9)]);
var inst_25223 = (state_25263[(8)]);
var inst_25231 = (state_25263[(10)]);
var inst_25236 = inst_25223.push(inst_25227);
var tmp25281 = inst_25223;
var inst_25223__$1 = tmp25281;
var inst_25224 = inst_25231;
var state_25263__$1 = (function (){var statearr_25285 = state_25263;
(statearr_25285[(14)] = inst_25236);

(statearr_25285[(7)] = inst_25224);

(statearr_25285[(8)] = inst_25223__$1);

return statearr_25285;
})();
var statearr_25286_25308 = state_25263__$1;
(statearr_25286_25308[(2)] = null);

(statearr_25286_25308[(1)] = (2));


return cljs.core.constant$keyword$46;
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
});})(c__11802__auto___25294,out))
;
return ((function (switch__11722__auto__,c__11802__auto___25294,out){
return (function() {
var state_machine__11723__auto__ = null;
var state_machine__11723__auto____0 = (function (){
var statearr_25290 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25290[(0)] = state_machine__11723__auto__);

(statearr_25290[(1)] = (1));

return statearr_25290;
});
var state_machine__11723__auto____1 = (function (state_25263){
while(true){
var ret_value__11724__auto__ = (function (){try{while(true){
var result__11725__auto__ = switch__11722__auto__(state_25263);
if(cljs.core.keyword_identical_QMARK_(result__11725__auto__,cljs.core.constant$keyword$46)){
continue;
} else {
return result__11725__auto__;
}
break;
}
}catch (e25291){if((e25291 instanceof Object)){
var ex__11726__auto__ = e25291;
var statearr_25292_25309 = state_25263;
(statearr_25292_25309[(5)] = ex__11726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25263);

return cljs.core.constant$keyword$46;
} else {
throw e25291;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11724__auto__,cljs.core.constant$keyword$46)){
var G__25310 = state_25263;
state_25263 = G__25310;
continue;
} else {
return ret_value__11724__auto__;
}
break;
}
});
state_machine__11723__auto__ = function(state_25263){
switch(arguments.length){
case 0:
return state_machine__11723__auto____0.call(this);
case 1:
return state_machine__11723__auto____1.call(this,state_25263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11723__auto____0;
state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11723__auto____1;
return state_machine__11723__auto__;
})()
;})(switch__11722__auto__,c__11802__auto___25294,out))
})();
var state__11804__auto__ = (function (){var statearr_25293 = (function (){return (f__11803__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11803__auto__.cljs$core$IFn$_invoke$arity$0() : f__11803__auto__.call(null));
})();
(statearr_25293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11802__auto___25294);

return statearr_25293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11804__auto__);
});})(c__11802__auto___25294,out))
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
