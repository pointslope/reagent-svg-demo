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
if(typeof cljs.core.async.t20948 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20948 = (function (f,fn_handler,meta20949){
this.f = f;
this.fn_handler = fn_handler;
this.meta20949 = meta20949;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20948.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20948.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t20948.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t20948.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20950){
var self__ = this;
var _20950__$1 = this;
return self__.meta20949;
});

cljs.core.async.t20948.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20950,meta20949__$1){
var self__ = this;
var _20950__$1 = this;
return (new cljs.core.async.t20948(self__.f,self__.fn_handler,meta20949__$1));
});

cljs.core.async.t20948.cljs$lang$type = true;

cljs.core.async.t20948.cljs$lang$ctorStr = "cljs.core.async/t20948";

cljs.core.async.t20948.cljs$lang$ctorPrWriter = (function (this__4170__auto__,writer__4171__auto__,opt__4172__auto__){
return cljs.core._write(writer__4171__auto__,"cljs.core.async/t20948");
});

cljs.core.async.__GT_t20948 = (function __GT_t20948(f__$1,fn_handler__$1,meta20949){
return (new cljs.core.async.t20948(f__$1,fn_handler__$1,meta20949));
});

}

return (new cljs.core.async.t20948(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__20952 = buff;
if(G__20952){
var bit__4264__auto__ = null;
if(cljs.core.truth_((function (){var or__3583__auto__ = bit__4264__auto__;
if(cljs.core.truth_(or__3583__auto__)){
return or__3583__auto__;
} else {
return G__20952.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__20952.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__20952);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__20952);
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
var val_20969 = (function (){var G__20966 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20966) : cljs.core.deref.call(null,G__20966));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__20967_20970 = val_20969;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__20967_20970) : fn1.call(null,G__20967_20970));
} else {
cljs.core.async.impl.dispatch.run(((function (val_20969,ret){
return (function (){
var G__20968 = val_20969;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__20968) : fn1.call(null,G__20968));
});})(val_20969,ret))
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
var G__20979 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20979) : cljs.core.deref.call(null,G__20979));
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
var ret = (function (){var G__20980 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20980) : cljs.core.deref.call(null,G__20980));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__20981_20983 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__20981_20983) : fn1.call(null,G__20981_20983));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__20982 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__20982) : fn1.call(null,G__20982));
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
var n__4470__auto___20984 = n;
var x_20985 = (0);
while(true){
if((x_20985 < n__4470__auto___20984)){
(a[x_20985] = (0));

var G__20986 = (x_20985 + (1));
x_20985 = G__20986;
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

var G__20987 = (i + (1));
i = G__20987;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = (function (){var G__20995 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20995) : cljs.core.atom.call(null,G__20995));
})();
if(typeof cljs.core.async.t20996 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20996 = (function (flag,alt_flag,meta20997){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta20997 = meta20997;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20996.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20996.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__20999 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20999) : cljs.core.deref.call(null,G__20999));
});})(flag))
;

cljs.core.async.t20996.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__21000_21002 = self__.flag;
var G__21001_21003 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21000_21002,G__21001_21003) : cljs.core.reset_BANG_.call(null,G__21000_21002,G__21001_21003));

return true;
});})(flag))
;

cljs.core.async.t20996.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20998){
var self__ = this;
var _20998__$1 = this;
return self__.meta20997;
});})(flag))
;

cljs.core.async.t20996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20998,meta20997__$1){
var self__ = this;
var _20998__$1 = this;
return (new cljs.core.async.t20996(self__.flag,self__.alt_flag,meta20997__$1));
});})(flag))
;

cljs.core.async.t20996.cljs$lang$type = true;

cljs.core.async.t20996.cljs$lang$ctorStr = "cljs.core.async/t20996";

cljs.core.async.t20996.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4170__auto__,writer__4171__auto__,opt__4172__auto__){
return cljs.core._write(writer__4171__auto__,"cljs.core.async/t20996");
});})(flag))
;

cljs.core.async.__GT_t20996 = ((function (flag){
return (function __GT_t20996(flag__$1,alt_flag__$1,meta20997){
return (new cljs.core.async.t20996(flag__$1,alt_flag__$1,meta20997));
});})(flag))
;

}

return (new cljs.core.async.t20996(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t21007 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21007 = (function (cb,flag,alt_handler,meta21008){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta21008 = meta21008;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21007.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t21007.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t21007.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t21007.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21009){
var self__ = this;
var _21009__$1 = this;
return self__.meta21008;
});

cljs.core.async.t21007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21009,meta21008__$1){
var self__ = this;
var _21009__$1 = this;
return (new cljs.core.async.t21007(self__.cb,self__.flag,self__.alt_handler,meta21008__$1));
});

cljs.core.async.t21007.cljs$lang$type = true;

cljs.core.async.t21007.cljs$lang$ctorStr = "cljs.core.async/t21007";

cljs.core.async.t21007.cljs$lang$ctorPrWriter = (function (this__4170__auto__,writer__4171__auto__,opt__4172__auto__){
return cljs.core._write(writer__4171__auto__,"cljs.core.async/t21007");
});

cljs.core.async.__GT_t21007 = (function __GT_t21007(cb__$1,flag__$1,alt_handler__$1,meta21008){
return (new cljs.core.async.t21007(cb__$1,flag__$1,alt_handler__$1,meta21008));
});

}

return (new cljs.core.async.t21007(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__21017 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__21017) : port.call(null,G__21017));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__21018 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__21018) : port.call(null,G__21018));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21010_SHARP_){
var G__21019 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21010_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__21019) : fret.call(null,G__21019));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21011_SHARP_){
var G__21020 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21011_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__21020) : fret.call(null,G__21020));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__21021 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21021) : cljs.core.deref.call(null,G__21021));
})(),(function (){var or__3583__auto__ = wport;
if(cljs.core.truth_(or__3583__auto__)){
return or__3583__auto__;
} else {
return port;
}
})()], null));
} else {
var G__21022 = (i + (1));
i = G__21022;
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
var alts_BANG___delegate = function (ports,p__21023){
var map__21025 = p__21023;
var map__21025__$1 = ((cljs.core.seq_QMARK_(map__21025))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21025):map__21025);
var opts = map__21025__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__21023 = null;
if (arguments.length > 1) {
var G__21026__i = 0, G__21026__a = new Array(arguments.length -  1);
while (G__21026__i < G__21026__a.length) {G__21026__a[G__21026__i] = arguments[G__21026__i + 1]; ++G__21026__i;}
  p__21023 = new cljs.core.IndexedSeq(G__21026__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__21023);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__21027){
var ports = cljs.core.first(arglist__21027);
var p__21023 = cljs.core.rest(arglist__21027);
return alts_BANG___delegate(ports,p__21023);
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
var c__11420__auto___21125 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11420__auto___21125){
return (function (){
var f__11421__auto__ = (function (){var switch__11340__auto__ = ((function (c__11420__auto___21125){
return (function (state_21101){
var state_val_21102 = (state_21101[(1)]);
if((state_val_21102 === (7))){
var inst_21097 = (state_21101[(2)]);
var state_21101__$1 = state_21101;
var statearr_21103_21126 = state_21101__$1;
(statearr_21103_21126[(2)] = inst_21097);

(statearr_21103_21126[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21102 === (1))){
var state_21101__$1 = state_21101;
var statearr_21104_21127 = state_21101__$1;
(statearr_21104_21127[(2)] = null);

(statearr_21104_21127[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21102 === (4))){
var inst_21080 = (state_21101[(7)]);
var inst_21080__$1 = (state_21101[(2)]);
var inst_21081 = (inst_21080__$1 == null);
var state_21101__$1 = (function (){var statearr_21105 = state_21101;
(statearr_21105[(7)] = inst_21080__$1);

return statearr_21105;
})();
if(cljs.core.truth_(inst_21081)){
var statearr_21106_21128 = state_21101__$1;
(statearr_21106_21128[(1)] = (5));

} else {
var statearr_21107_21129 = state_21101__$1;
(statearr_21107_21129[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_21102 === (13))){
var state_21101__$1 = state_21101;
var statearr_21108_21130 = state_21101__$1;
(statearr_21108_21130[(2)] = null);

(statearr_21108_21130[(1)] = (14));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21102 === (6))){
var inst_21080 = (state_21101[(7)]);
var state_21101__$1 = state_21101;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21101__$1,(11),to,inst_21080);
} else {
if((state_val_21102 === (3))){
var inst_21099 = (state_21101[(2)]);
var state_21101__$1 = state_21101;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21101__$1,inst_21099);
} else {
if((state_val_21102 === (12))){
var state_21101__$1 = state_21101;
var statearr_21109_21131 = state_21101__$1;
(statearr_21109_21131[(2)] = null);

(statearr_21109_21131[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21102 === (2))){
var state_21101__$1 = state_21101;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21101__$1,(4),from);
} else {
if((state_val_21102 === (11))){
var inst_21090 = (state_21101[(2)]);
var state_21101__$1 = state_21101;
if(cljs.core.truth_(inst_21090)){
var statearr_21110_21132 = state_21101__$1;
(statearr_21110_21132[(1)] = (12));

} else {
var statearr_21111_21133 = state_21101__$1;
(statearr_21111_21133[(1)] = (13));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_21102 === (9))){
var state_21101__$1 = state_21101;
var statearr_21112_21134 = state_21101__$1;
(statearr_21112_21134[(2)] = null);

(statearr_21112_21134[(1)] = (10));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21102 === (5))){
var state_21101__$1 = state_21101;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21113_21135 = state_21101__$1;
(statearr_21113_21135[(1)] = (8));

} else {
var statearr_21114_21136 = state_21101__$1;
(statearr_21114_21136[(1)] = (9));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_21102 === (14))){
var inst_21095 = (state_21101[(2)]);
var state_21101__$1 = state_21101;
var statearr_21115_21137 = state_21101__$1;
(statearr_21115_21137[(2)] = inst_21095);

(statearr_21115_21137[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21102 === (10))){
var inst_21087 = (state_21101[(2)]);
var state_21101__$1 = state_21101;
var statearr_21116_21138 = state_21101__$1;
(statearr_21116_21138[(2)] = inst_21087);

(statearr_21116_21138[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21102 === (8))){
var inst_21084 = cljs.core.async.close_BANG_(to);
var state_21101__$1 = state_21101;
var statearr_21117_21139 = state_21101__$1;
(statearr_21117_21139[(2)] = inst_21084);

(statearr_21117_21139[(1)] = (10));


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
});})(c__11420__auto___21125))
;
return ((function (switch__11340__auto__,c__11420__auto___21125){
return (function() {
var state_machine__11341__auto__ = null;
var state_machine__11341__auto____0 = (function (){
var statearr_21121 = [null,null,null,null,null,null,null,null];
(statearr_21121[(0)] = state_machine__11341__auto__);

(statearr_21121[(1)] = (1));

return statearr_21121;
});
var state_machine__11341__auto____1 = (function (state_21101){
while(true){
var ret_value__11342__auto__ = (function (){try{while(true){
var result__11343__auto__ = switch__11340__auto__(state_21101);
if(cljs.core.keyword_identical_QMARK_(result__11343__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11343__auto__;
}
break;
}
}catch (e21122){if((e21122 instanceof Object)){
var ex__11344__auto__ = e21122;
var statearr_21123_21140 = state_21101;
(statearr_21123_21140[(5)] = ex__11344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21101);

return cljs.core.constant$keyword$40;
} else {
throw e21122;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11342__auto__,cljs.core.constant$keyword$40)){
var G__21141 = state_21101;
state_21101 = G__21141;
continue;
} else {
return ret_value__11342__auto__;
}
break;
}
});
state_machine__11341__auto__ = function(state_21101){
switch(arguments.length){
case 0:
return state_machine__11341__auto____0.call(this);
case 1:
return state_machine__11341__auto____1.call(this,state_21101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11341__auto____0;
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11341__auto____1;
return state_machine__11341__auto__;
})()
;})(switch__11340__auto__,c__11420__auto___21125))
})();
var state__11422__auto__ = (function (){var statearr_21124 = (function (){return (f__11421__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11421__auto__.cljs$core$IFn$_invoke$arity$0() : f__11421__auto__.call(null));
})();
(statearr_21124[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11420__auto___21125);

return statearr_21124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11422__auto__);
});})(c__11420__auto___21125))
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
return (function (p__21327){
var vec__21328 = p__21327;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21328,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21328,(1),null);
var job = vec__21328;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__11420__auto___21512 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11420__auto___21512,res,vec__21328,v,p,job,jobs,results){
return (function (){
var f__11421__auto__ = (function (){var switch__11340__auto__ = ((function (c__11420__auto___21512,res,vec__21328,v,p,job,jobs,results){
return (function (state_21333){
var state_val_21334 = (state_21333[(1)]);
if((state_val_21334 === (2))){
var inst_21330 = (state_21333[(2)]);
var inst_21331 = cljs.core.async.close_BANG_(res);
var state_21333__$1 = (function (){var statearr_21335 = state_21333;
(statearr_21335[(7)] = inst_21330);

return statearr_21335;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_21333__$1,inst_21331);
} else {
if((state_val_21334 === (1))){
var state_21333__$1 = state_21333;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21333__$1,(2),res,v);
} else {
return null;
}
}
});})(c__11420__auto___21512,res,vec__21328,v,p,job,jobs,results))
;
return ((function (switch__11340__auto__,c__11420__auto___21512,res,vec__21328,v,p,job,jobs,results){
return (function() {
var state_machine__11341__auto__ = null;
var state_machine__11341__auto____0 = (function (){
var statearr_21339 = [null,null,null,null,null,null,null,null];
(statearr_21339[(0)] = state_machine__11341__auto__);

(statearr_21339[(1)] = (1));

return statearr_21339;
});
var state_machine__11341__auto____1 = (function (state_21333){
while(true){
var ret_value__11342__auto__ = (function (){try{while(true){
var result__11343__auto__ = switch__11340__auto__(state_21333);
if(cljs.core.keyword_identical_QMARK_(result__11343__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11343__auto__;
}
break;
}
}catch (e21340){if((e21340 instanceof Object)){
var ex__11344__auto__ = e21340;
var statearr_21341_21513 = state_21333;
(statearr_21341_21513[(5)] = ex__11344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21333);

return cljs.core.constant$keyword$40;
} else {
throw e21340;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11342__auto__,cljs.core.constant$keyword$40)){
var G__21514 = state_21333;
state_21333 = G__21514;
continue;
} else {
return ret_value__11342__auto__;
}
break;
}
});
state_machine__11341__auto__ = function(state_21333){
switch(arguments.length){
case 0:
return state_machine__11341__auto____0.call(this);
case 1:
return state_machine__11341__auto____1.call(this,state_21333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11341__auto____0;
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11341__auto____1;
return state_machine__11341__auto__;
})()
;})(switch__11340__auto__,c__11420__auto___21512,res,vec__21328,v,p,job,jobs,results))
})();
var state__11422__auto__ = (function (){var statearr_21342 = (function (){return (f__11421__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11421__auto__.cljs$core$IFn$_invoke$arity$0() : f__11421__auto__.call(null));
})();
(statearr_21342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11420__auto___21512);

return statearr_21342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11422__auto__);
});})(c__11420__auto___21512,res,vec__21328,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21343){
var vec__21344 = p__21343;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21344,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21344,(1),null);
var job = vec__21344;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__21345_21515 = v;
var G__21346_21516 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__21345_21515,G__21346_21516) : xf.call(null,G__21345_21515,G__21346_21516));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4470__auto___21517 = n;
var __21518 = (0);
while(true){
if((__21518 < n__4470__auto___21517)){
var G__21347_21519 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__21347_21519) {
case "async":
var c__11420__auto___21521 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__21518,c__11420__auto___21521,G__21347_21519,n__4470__auto___21517,jobs,results,process,async){
return (function (){
var f__11421__auto__ = (function (){var switch__11340__auto__ = ((function (__21518,c__11420__auto___21521,G__21347_21519,n__4470__auto___21517,jobs,results,process,async){
return (function (state_21360){
var state_val_21361 = (state_21360[(1)]);
if((state_val_21361 === (7))){
var inst_21356 = (state_21360[(2)]);
var state_21360__$1 = state_21360;
var statearr_21362_21522 = state_21360__$1;
(statearr_21362_21522[(2)] = inst_21356);

(statearr_21362_21522[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21361 === (6))){
var state_21360__$1 = state_21360;
var statearr_21363_21523 = state_21360__$1;
(statearr_21363_21523[(2)] = null);

(statearr_21363_21523[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21361 === (5))){
var state_21360__$1 = state_21360;
var statearr_21364_21524 = state_21360__$1;
(statearr_21364_21524[(2)] = null);

(statearr_21364_21524[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21361 === (4))){
var inst_21350 = (state_21360[(2)]);
var inst_21351 = async(inst_21350);
var state_21360__$1 = state_21360;
if(cljs.core.truth_(inst_21351)){
var statearr_21365_21525 = state_21360__$1;
(statearr_21365_21525[(1)] = (5));

} else {
var statearr_21366_21526 = state_21360__$1;
(statearr_21366_21526[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_21361 === (3))){
var inst_21358 = (state_21360[(2)]);
var state_21360__$1 = state_21360;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21360__$1,inst_21358);
} else {
if((state_val_21361 === (2))){
var state_21360__$1 = state_21360;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21360__$1,(4),jobs);
} else {
if((state_val_21361 === (1))){
var state_21360__$1 = state_21360;
var statearr_21367_21527 = state_21360__$1;
(statearr_21367_21527[(2)] = null);

(statearr_21367_21527[(1)] = (2));


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
});})(__21518,c__11420__auto___21521,G__21347_21519,n__4470__auto___21517,jobs,results,process,async))
;
return ((function (__21518,switch__11340__auto__,c__11420__auto___21521,G__21347_21519,n__4470__auto___21517,jobs,results,process,async){
return (function() {
var state_machine__11341__auto__ = null;
var state_machine__11341__auto____0 = (function (){
var statearr_21371 = [null,null,null,null,null,null,null];
(statearr_21371[(0)] = state_machine__11341__auto__);

(statearr_21371[(1)] = (1));

return statearr_21371;
});
var state_machine__11341__auto____1 = (function (state_21360){
while(true){
var ret_value__11342__auto__ = (function (){try{while(true){
var result__11343__auto__ = switch__11340__auto__(state_21360);
if(cljs.core.keyword_identical_QMARK_(result__11343__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11343__auto__;
}
break;
}
}catch (e21372){if((e21372 instanceof Object)){
var ex__11344__auto__ = e21372;
var statearr_21373_21528 = state_21360;
(statearr_21373_21528[(5)] = ex__11344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21360);

return cljs.core.constant$keyword$40;
} else {
throw e21372;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11342__auto__,cljs.core.constant$keyword$40)){
var G__21529 = state_21360;
state_21360 = G__21529;
continue;
} else {
return ret_value__11342__auto__;
}
break;
}
});
state_machine__11341__auto__ = function(state_21360){
switch(arguments.length){
case 0:
return state_machine__11341__auto____0.call(this);
case 1:
return state_machine__11341__auto____1.call(this,state_21360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11341__auto____0;
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11341__auto____1;
return state_machine__11341__auto__;
})()
;})(__21518,switch__11340__auto__,c__11420__auto___21521,G__21347_21519,n__4470__auto___21517,jobs,results,process,async))
})();
var state__11422__auto__ = (function (){var statearr_21374 = (function (){return (f__11421__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11421__auto__.cljs$core$IFn$_invoke$arity$0() : f__11421__auto__.call(null));
})();
(statearr_21374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11420__auto___21521);

return statearr_21374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11422__auto__);
});})(__21518,c__11420__auto___21521,G__21347_21519,n__4470__auto___21517,jobs,results,process,async))
);


break;
case "compute":
var c__11420__auto___21530 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__21518,c__11420__auto___21530,G__21347_21519,n__4470__auto___21517,jobs,results,process,async){
return (function (){
var f__11421__auto__ = (function (){var switch__11340__auto__ = ((function (__21518,c__11420__auto___21530,G__21347_21519,n__4470__auto___21517,jobs,results,process,async){
return (function (state_21387){
var state_val_21388 = (state_21387[(1)]);
if((state_val_21388 === (7))){
var inst_21383 = (state_21387[(2)]);
var state_21387__$1 = state_21387;
var statearr_21389_21531 = state_21387__$1;
(statearr_21389_21531[(2)] = inst_21383);

(statearr_21389_21531[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21388 === (6))){
var state_21387__$1 = state_21387;
var statearr_21390_21532 = state_21387__$1;
(statearr_21390_21532[(2)] = null);

(statearr_21390_21532[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21388 === (5))){
var state_21387__$1 = state_21387;
var statearr_21391_21533 = state_21387__$1;
(statearr_21391_21533[(2)] = null);

(statearr_21391_21533[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21388 === (4))){
var inst_21377 = (state_21387[(2)]);
var inst_21378 = process(inst_21377);
var state_21387__$1 = state_21387;
if(cljs.core.truth_(inst_21378)){
var statearr_21392_21534 = state_21387__$1;
(statearr_21392_21534[(1)] = (5));

} else {
var statearr_21393_21535 = state_21387__$1;
(statearr_21393_21535[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_21388 === (3))){
var inst_21385 = (state_21387[(2)]);
var state_21387__$1 = state_21387;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21387__$1,inst_21385);
} else {
if((state_val_21388 === (2))){
var state_21387__$1 = state_21387;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21387__$1,(4),jobs);
} else {
if((state_val_21388 === (1))){
var state_21387__$1 = state_21387;
var statearr_21394_21536 = state_21387__$1;
(statearr_21394_21536[(2)] = null);

(statearr_21394_21536[(1)] = (2));


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
});})(__21518,c__11420__auto___21530,G__21347_21519,n__4470__auto___21517,jobs,results,process,async))
;
return ((function (__21518,switch__11340__auto__,c__11420__auto___21530,G__21347_21519,n__4470__auto___21517,jobs,results,process,async){
return (function() {
var state_machine__11341__auto__ = null;
var state_machine__11341__auto____0 = (function (){
var statearr_21398 = [null,null,null,null,null,null,null];
(statearr_21398[(0)] = state_machine__11341__auto__);

(statearr_21398[(1)] = (1));

return statearr_21398;
});
var state_machine__11341__auto____1 = (function (state_21387){
while(true){
var ret_value__11342__auto__ = (function (){try{while(true){
var result__11343__auto__ = switch__11340__auto__(state_21387);
if(cljs.core.keyword_identical_QMARK_(result__11343__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11343__auto__;
}
break;
}
}catch (e21399){if((e21399 instanceof Object)){
var ex__11344__auto__ = e21399;
var statearr_21400_21537 = state_21387;
(statearr_21400_21537[(5)] = ex__11344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21387);

return cljs.core.constant$keyword$40;
} else {
throw e21399;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11342__auto__,cljs.core.constant$keyword$40)){
var G__21538 = state_21387;
state_21387 = G__21538;
continue;
} else {
return ret_value__11342__auto__;
}
break;
}
});
state_machine__11341__auto__ = function(state_21387){
switch(arguments.length){
case 0:
return state_machine__11341__auto____0.call(this);
case 1:
return state_machine__11341__auto____1.call(this,state_21387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11341__auto____0;
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11341__auto____1;
return state_machine__11341__auto__;
})()
;})(__21518,switch__11340__auto__,c__11420__auto___21530,G__21347_21519,n__4470__auto___21517,jobs,results,process,async))
})();
var state__11422__auto__ = (function (){var statearr_21401 = (function (){return (f__11421__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11421__auto__.cljs$core$IFn$_invoke$arity$0() : f__11421__auto__.call(null));
})();
(statearr_21401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11420__auto___21530);

return statearr_21401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11422__auto__);
});})(__21518,c__11420__auto___21530,G__21347_21519,n__4470__auto___21517,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__21539 = (__21518 + (1));
__21518 = G__21539;
continue;
} else {
}
break;
}

var c__11420__auto___21540 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11420__auto___21540,jobs,results,process,async){
return (function (){
var f__11421__auto__ = (function (){var switch__11340__auto__ = ((function (c__11420__auto___21540,jobs,results,process,async){
return (function (state_21423){
var state_val_21424 = (state_21423[(1)]);
if((state_val_21424 === (9))){
var inst_21416 = (state_21423[(2)]);
var state_21423__$1 = (function (){var statearr_21425 = state_21423;
(statearr_21425[(7)] = inst_21416);

return statearr_21425;
})();
var statearr_21426_21541 = state_21423__$1;
(statearr_21426_21541[(2)] = null);

(statearr_21426_21541[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21424 === (8))){
var inst_21409 = (state_21423[(8)]);
var inst_21414 = (state_21423[(2)]);
var state_21423__$1 = (function (){var statearr_21427 = state_21423;
(statearr_21427[(9)] = inst_21414);

return statearr_21427;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21423__$1,(9),results,inst_21409);
} else {
if((state_val_21424 === (7))){
var inst_21419 = (state_21423[(2)]);
var state_21423__$1 = state_21423;
var statearr_21428_21542 = state_21423__$1;
(statearr_21428_21542[(2)] = inst_21419);

(statearr_21428_21542[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21424 === (6))){
var inst_21404 = (state_21423[(10)]);
var inst_21409 = (state_21423[(8)]);
var inst_21409__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_21410 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21411 = [inst_21404,inst_21409__$1];
var inst_21412 = (new cljs.core.PersistentVector(null,2,(5),inst_21410,inst_21411,null));
var state_21423__$1 = (function (){var statearr_21429 = state_21423;
(statearr_21429[(8)] = inst_21409__$1);

return statearr_21429;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21423__$1,(8),jobs,inst_21412);
} else {
if((state_val_21424 === (5))){
var inst_21407 = cljs.core.async.close_BANG_(jobs);
var state_21423__$1 = state_21423;
var statearr_21430_21543 = state_21423__$1;
(statearr_21430_21543[(2)] = inst_21407);

(statearr_21430_21543[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21424 === (4))){
var inst_21404 = (state_21423[(10)]);
var inst_21404__$1 = (state_21423[(2)]);
var inst_21405 = (inst_21404__$1 == null);
var state_21423__$1 = (function (){var statearr_21431 = state_21423;
(statearr_21431[(10)] = inst_21404__$1);

return statearr_21431;
})();
if(cljs.core.truth_(inst_21405)){
var statearr_21432_21544 = state_21423__$1;
(statearr_21432_21544[(1)] = (5));

} else {
var statearr_21433_21545 = state_21423__$1;
(statearr_21433_21545[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_21424 === (3))){
var inst_21421 = (state_21423[(2)]);
var state_21423__$1 = state_21423;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21423__$1,inst_21421);
} else {
if((state_val_21424 === (2))){
var state_21423__$1 = state_21423;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21423__$1,(4),from);
} else {
if((state_val_21424 === (1))){
var state_21423__$1 = state_21423;
var statearr_21434_21546 = state_21423__$1;
(statearr_21434_21546[(2)] = null);

(statearr_21434_21546[(1)] = (2));


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
});})(c__11420__auto___21540,jobs,results,process,async))
;
return ((function (switch__11340__auto__,c__11420__auto___21540,jobs,results,process,async){
return (function() {
var state_machine__11341__auto__ = null;
var state_machine__11341__auto____0 = (function (){
var statearr_21438 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21438[(0)] = state_machine__11341__auto__);

(statearr_21438[(1)] = (1));

return statearr_21438;
});
var state_machine__11341__auto____1 = (function (state_21423){
while(true){
var ret_value__11342__auto__ = (function (){try{while(true){
var result__11343__auto__ = switch__11340__auto__(state_21423);
if(cljs.core.keyword_identical_QMARK_(result__11343__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11343__auto__;
}
break;
}
}catch (e21439){if((e21439 instanceof Object)){
var ex__11344__auto__ = e21439;
var statearr_21440_21547 = state_21423;
(statearr_21440_21547[(5)] = ex__11344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21423);

return cljs.core.constant$keyword$40;
} else {
throw e21439;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11342__auto__,cljs.core.constant$keyword$40)){
var G__21548 = state_21423;
state_21423 = G__21548;
continue;
} else {
return ret_value__11342__auto__;
}
break;
}
});
state_machine__11341__auto__ = function(state_21423){
switch(arguments.length){
case 0:
return state_machine__11341__auto____0.call(this);
case 1:
return state_machine__11341__auto____1.call(this,state_21423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11341__auto____0;
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11341__auto____1;
return state_machine__11341__auto__;
})()
;})(switch__11340__auto__,c__11420__auto___21540,jobs,results,process,async))
})();
var state__11422__auto__ = (function (){var statearr_21441 = (function (){return (f__11421__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11421__auto__.cljs$core$IFn$_invoke$arity$0() : f__11421__auto__.call(null));
})();
(statearr_21441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11420__auto___21540);

return statearr_21441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11422__auto__);
});})(c__11420__auto___21540,jobs,results,process,async))
);


var c__11420__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11420__auto__,jobs,results,process,async){
return (function (){
var f__11421__auto__ = (function (){var switch__11340__auto__ = ((function (c__11420__auto__,jobs,results,process,async){
return (function (state_21479){
var state_val_21480 = (state_21479[(1)]);
if((state_val_21480 === (7))){
var inst_21475 = (state_21479[(2)]);
var state_21479__$1 = state_21479;
var statearr_21481_21549 = state_21479__$1;
(statearr_21481_21549[(2)] = inst_21475);

(statearr_21481_21549[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21480 === (20))){
var state_21479__$1 = state_21479;
var statearr_21482_21550 = state_21479__$1;
(statearr_21482_21550[(2)] = null);

(statearr_21482_21550[(1)] = (21));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21480 === (1))){
var state_21479__$1 = state_21479;
var statearr_21483_21551 = state_21479__$1;
(statearr_21483_21551[(2)] = null);

(statearr_21483_21551[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21480 === (4))){
var inst_21444 = (state_21479[(7)]);
var inst_21444__$1 = (state_21479[(2)]);
var inst_21445 = (inst_21444__$1 == null);
var state_21479__$1 = (function (){var statearr_21484 = state_21479;
(statearr_21484[(7)] = inst_21444__$1);

return statearr_21484;
})();
if(cljs.core.truth_(inst_21445)){
var statearr_21485_21552 = state_21479__$1;
(statearr_21485_21552[(1)] = (5));

} else {
var statearr_21486_21553 = state_21479__$1;
(statearr_21486_21553[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_21480 === (15))){
var inst_21457 = (state_21479[(8)]);
var state_21479__$1 = state_21479;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21479__$1,(18),to,inst_21457);
} else {
if((state_val_21480 === (21))){
var inst_21470 = (state_21479[(2)]);
var state_21479__$1 = state_21479;
var statearr_21487_21554 = state_21479__$1;
(statearr_21487_21554[(2)] = inst_21470);

(statearr_21487_21554[(1)] = (13));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21480 === (13))){
var inst_21472 = (state_21479[(2)]);
var state_21479__$1 = (function (){var statearr_21488 = state_21479;
(statearr_21488[(9)] = inst_21472);

return statearr_21488;
})();
var statearr_21489_21555 = state_21479__$1;
(statearr_21489_21555[(2)] = null);

(statearr_21489_21555[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21480 === (6))){
var inst_21444 = (state_21479[(7)]);
var state_21479__$1 = state_21479;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21479__$1,(11),inst_21444);
} else {
if((state_val_21480 === (17))){
var inst_21465 = (state_21479[(2)]);
var state_21479__$1 = state_21479;
if(cljs.core.truth_(inst_21465)){
var statearr_21490_21556 = state_21479__$1;
(statearr_21490_21556[(1)] = (19));

} else {
var statearr_21491_21557 = state_21479__$1;
(statearr_21491_21557[(1)] = (20));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_21480 === (3))){
var inst_21477 = (state_21479[(2)]);
var state_21479__$1 = state_21479;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21479__$1,inst_21477);
} else {
if((state_val_21480 === (12))){
var inst_21454 = (state_21479[(10)]);
var state_21479__$1 = state_21479;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21479__$1,(14),inst_21454);
} else {
if((state_val_21480 === (2))){
var state_21479__$1 = state_21479;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21479__$1,(4),results);
} else {
if((state_val_21480 === (19))){
var state_21479__$1 = state_21479;
var statearr_21492_21558 = state_21479__$1;
(statearr_21492_21558[(2)] = null);

(statearr_21492_21558[(1)] = (12));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21480 === (11))){
var inst_21454 = (state_21479[(2)]);
var state_21479__$1 = (function (){var statearr_21493 = state_21479;
(statearr_21493[(10)] = inst_21454);

return statearr_21493;
})();
var statearr_21494_21559 = state_21479__$1;
(statearr_21494_21559[(2)] = null);

(statearr_21494_21559[(1)] = (12));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21480 === (9))){
var state_21479__$1 = state_21479;
var statearr_21495_21560 = state_21479__$1;
(statearr_21495_21560[(2)] = null);

(statearr_21495_21560[(1)] = (10));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21480 === (5))){
var state_21479__$1 = state_21479;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21496_21561 = state_21479__$1;
(statearr_21496_21561[(1)] = (8));

} else {
var statearr_21497_21562 = state_21479__$1;
(statearr_21497_21562[(1)] = (9));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_21480 === (14))){
var inst_21457 = (state_21479[(8)]);
var inst_21459 = (state_21479[(11)]);
var inst_21457__$1 = (state_21479[(2)]);
var inst_21458 = (inst_21457__$1 == null);
var inst_21459__$1 = cljs.core.not(inst_21458);
var state_21479__$1 = (function (){var statearr_21498 = state_21479;
(statearr_21498[(8)] = inst_21457__$1);

(statearr_21498[(11)] = inst_21459__$1);

return statearr_21498;
})();
if(inst_21459__$1){
var statearr_21499_21563 = state_21479__$1;
(statearr_21499_21563[(1)] = (15));

} else {
var statearr_21500_21564 = state_21479__$1;
(statearr_21500_21564[(1)] = (16));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_21480 === (16))){
var inst_21459 = (state_21479[(11)]);
var state_21479__$1 = state_21479;
var statearr_21501_21565 = state_21479__$1;
(statearr_21501_21565[(2)] = inst_21459);

(statearr_21501_21565[(1)] = (17));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21480 === (10))){
var inst_21451 = (state_21479[(2)]);
var state_21479__$1 = state_21479;
var statearr_21502_21566 = state_21479__$1;
(statearr_21502_21566[(2)] = inst_21451);

(statearr_21502_21566[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21480 === (18))){
var inst_21462 = (state_21479[(2)]);
var state_21479__$1 = state_21479;
var statearr_21503_21567 = state_21479__$1;
(statearr_21503_21567[(2)] = inst_21462);

(statearr_21503_21567[(1)] = (17));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21480 === (8))){
var inst_21448 = cljs.core.async.close_BANG_(to);
var state_21479__$1 = state_21479;
var statearr_21504_21568 = state_21479__$1;
(statearr_21504_21568[(2)] = inst_21448);

(statearr_21504_21568[(1)] = (10));


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
});})(c__11420__auto__,jobs,results,process,async))
;
return ((function (switch__11340__auto__,c__11420__auto__,jobs,results,process,async){
return (function() {
var state_machine__11341__auto__ = null;
var state_machine__11341__auto____0 = (function (){
var statearr_21508 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21508[(0)] = state_machine__11341__auto__);

(statearr_21508[(1)] = (1));

return statearr_21508;
});
var state_machine__11341__auto____1 = (function (state_21479){
while(true){
var ret_value__11342__auto__ = (function (){try{while(true){
var result__11343__auto__ = switch__11340__auto__(state_21479);
if(cljs.core.keyword_identical_QMARK_(result__11343__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11343__auto__;
}
break;
}
}catch (e21509){if((e21509 instanceof Object)){
var ex__11344__auto__ = e21509;
var statearr_21510_21569 = state_21479;
(statearr_21510_21569[(5)] = ex__11344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21479);

return cljs.core.constant$keyword$40;
} else {
throw e21509;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11342__auto__,cljs.core.constant$keyword$40)){
var G__21570 = state_21479;
state_21479 = G__21570;
continue;
} else {
return ret_value__11342__auto__;
}
break;
}
});
state_machine__11341__auto__ = function(state_21479){
switch(arguments.length){
case 0:
return state_machine__11341__auto____0.call(this);
case 1:
return state_machine__11341__auto____1.call(this,state_21479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11341__auto____0;
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11341__auto____1;
return state_machine__11341__auto__;
})()
;})(switch__11340__auto__,c__11420__auto__,jobs,results,process,async))
})();
var state__11422__auto__ = (function (){var statearr_21511 = (function (){return (f__11421__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11421__auto__.cljs$core$IFn$_invoke$arity$0() : f__11421__auto__.call(null));
})();
(statearr_21511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11420__auto__);

return statearr_21511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11422__auto__);
});})(c__11420__auto__,jobs,results,process,async))
);

return c__11420__auto__;
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
var c__11420__auto___21693 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11420__auto___21693,tc,fc){
return (function (){
var f__11421__auto__ = (function (){var switch__11340__auto__ = ((function (c__11420__auto___21693,tc,fc){
return (function (state_21667){
var state_val_21668 = (state_21667[(1)]);
if((state_val_21668 === (7))){
var inst_21663 = (state_21667[(2)]);
var state_21667__$1 = state_21667;
var statearr_21669_21694 = state_21667__$1;
(statearr_21669_21694[(2)] = inst_21663);

(statearr_21669_21694[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21668 === (1))){
var state_21667__$1 = state_21667;
var statearr_21670_21695 = state_21667__$1;
(statearr_21670_21695[(2)] = null);

(statearr_21670_21695[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21668 === (4))){
var inst_21644 = (state_21667[(7)]);
var inst_21644__$1 = (state_21667[(2)]);
var inst_21645 = (inst_21644__$1 == null);
var state_21667__$1 = (function (){var statearr_21671 = state_21667;
(statearr_21671[(7)] = inst_21644__$1);

return statearr_21671;
})();
if(cljs.core.truth_(inst_21645)){
var statearr_21672_21696 = state_21667__$1;
(statearr_21672_21696[(1)] = (5));

} else {
var statearr_21673_21697 = state_21667__$1;
(statearr_21673_21697[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_21668 === (13))){
var state_21667__$1 = state_21667;
var statearr_21674_21698 = state_21667__$1;
(statearr_21674_21698[(2)] = null);

(statearr_21674_21698[(1)] = (14));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21668 === (6))){
var inst_21644 = (state_21667[(7)]);
var inst_21650 = (function (){var G__21675 = inst_21644;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__21675) : p.call(null,G__21675));
})();
var state_21667__$1 = state_21667;
if(cljs.core.truth_(inst_21650)){
var statearr_21676_21699 = state_21667__$1;
(statearr_21676_21699[(1)] = (9));

} else {
var statearr_21677_21700 = state_21667__$1;
(statearr_21677_21700[(1)] = (10));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_21668 === (3))){
var inst_21665 = (state_21667[(2)]);
var state_21667__$1 = state_21667;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21667__$1,inst_21665);
} else {
if((state_val_21668 === (12))){
var state_21667__$1 = state_21667;
var statearr_21678_21701 = state_21667__$1;
(statearr_21678_21701[(2)] = null);

(statearr_21678_21701[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21668 === (2))){
var state_21667__$1 = state_21667;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21667__$1,(4),ch);
} else {
if((state_val_21668 === (11))){
var inst_21644 = (state_21667[(7)]);
var inst_21654 = (state_21667[(2)]);
var state_21667__$1 = state_21667;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21667__$1,(8),inst_21654,inst_21644);
} else {
if((state_val_21668 === (9))){
var state_21667__$1 = state_21667;
var statearr_21679_21702 = state_21667__$1;
(statearr_21679_21702[(2)] = tc);

(statearr_21679_21702[(1)] = (11));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21668 === (5))){
var inst_21647 = cljs.core.async.close_BANG_(tc);
var inst_21648 = cljs.core.async.close_BANG_(fc);
var state_21667__$1 = (function (){var statearr_21680 = state_21667;
(statearr_21680[(8)] = inst_21647);

return statearr_21680;
})();
var statearr_21681_21703 = state_21667__$1;
(statearr_21681_21703[(2)] = inst_21648);

(statearr_21681_21703[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21668 === (14))){
var inst_21661 = (state_21667[(2)]);
var state_21667__$1 = state_21667;
var statearr_21682_21704 = state_21667__$1;
(statearr_21682_21704[(2)] = inst_21661);

(statearr_21682_21704[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21668 === (10))){
var state_21667__$1 = state_21667;
var statearr_21683_21705 = state_21667__$1;
(statearr_21683_21705[(2)] = fc);

(statearr_21683_21705[(1)] = (11));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21668 === (8))){
var inst_21656 = (state_21667[(2)]);
var state_21667__$1 = state_21667;
if(cljs.core.truth_(inst_21656)){
var statearr_21684_21706 = state_21667__$1;
(statearr_21684_21706[(1)] = (12));

} else {
var statearr_21685_21707 = state_21667__$1;
(statearr_21685_21707[(1)] = (13));

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
});})(c__11420__auto___21693,tc,fc))
;
return ((function (switch__11340__auto__,c__11420__auto___21693,tc,fc){
return (function() {
var state_machine__11341__auto__ = null;
var state_machine__11341__auto____0 = (function (){
var statearr_21689 = [null,null,null,null,null,null,null,null,null];
(statearr_21689[(0)] = state_machine__11341__auto__);

(statearr_21689[(1)] = (1));

return statearr_21689;
});
var state_machine__11341__auto____1 = (function (state_21667){
while(true){
var ret_value__11342__auto__ = (function (){try{while(true){
var result__11343__auto__ = switch__11340__auto__(state_21667);
if(cljs.core.keyword_identical_QMARK_(result__11343__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11343__auto__;
}
break;
}
}catch (e21690){if((e21690 instanceof Object)){
var ex__11344__auto__ = e21690;
var statearr_21691_21708 = state_21667;
(statearr_21691_21708[(5)] = ex__11344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21667);

return cljs.core.constant$keyword$40;
} else {
throw e21690;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11342__auto__,cljs.core.constant$keyword$40)){
var G__21709 = state_21667;
state_21667 = G__21709;
continue;
} else {
return ret_value__11342__auto__;
}
break;
}
});
state_machine__11341__auto__ = function(state_21667){
switch(arguments.length){
case 0:
return state_machine__11341__auto____0.call(this);
case 1:
return state_machine__11341__auto____1.call(this,state_21667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11341__auto____0;
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11341__auto____1;
return state_machine__11341__auto__;
})()
;})(switch__11340__auto__,c__11420__auto___21693,tc,fc))
})();
var state__11422__auto__ = (function (){var statearr_21692 = (function (){return (f__11421__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11421__auto__.cljs$core$IFn$_invoke$arity$0() : f__11421__auto__.call(null));
})();
(statearr_21692[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11420__auto___21693);

return statearr_21692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11422__auto__);
});})(c__11420__auto___21693,tc,fc))
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
var c__11420__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11420__auto__){
return (function (){
var f__11421__auto__ = (function (){var switch__11340__auto__ = ((function (c__11420__auto__){
return (function (state_21758){
var state_val_21759 = (state_21758[(1)]);
if((state_val_21759 === (7))){
var inst_21754 = (state_21758[(2)]);
var state_21758__$1 = state_21758;
var statearr_21760_21778 = state_21758__$1;
(statearr_21760_21778[(2)] = inst_21754);

(statearr_21760_21778[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21759 === (6))){
var inst_21747 = (state_21758[(7)]);
var inst_21744 = (state_21758[(8)]);
var inst_21751 = (function (){var G__21761 = inst_21744;
var G__21762 = inst_21747;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__21761,G__21762) : f.call(null,G__21761,G__21762));
})();
var inst_21744__$1 = inst_21751;
var state_21758__$1 = (function (){var statearr_21763 = state_21758;
(statearr_21763[(8)] = inst_21744__$1);

return statearr_21763;
})();
var statearr_21764_21779 = state_21758__$1;
(statearr_21764_21779[(2)] = null);

(statearr_21764_21779[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21759 === (5))){
var inst_21744 = (state_21758[(8)]);
var state_21758__$1 = state_21758;
var statearr_21765_21780 = state_21758__$1;
(statearr_21765_21780[(2)] = inst_21744);

(statearr_21765_21780[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21759 === (4))){
var inst_21747 = (state_21758[(7)]);
var inst_21747__$1 = (state_21758[(2)]);
var inst_21748 = (inst_21747__$1 == null);
var state_21758__$1 = (function (){var statearr_21766 = state_21758;
(statearr_21766[(7)] = inst_21747__$1);

return statearr_21766;
})();
if(cljs.core.truth_(inst_21748)){
var statearr_21767_21781 = state_21758__$1;
(statearr_21767_21781[(1)] = (5));

} else {
var statearr_21768_21782 = state_21758__$1;
(statearr_21768_21782[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_21759 === (3))){
var inst_21756 = (state_21758[(2)]);
var state_21758__$1 = state_21758;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21758__$1,inst_21756);
} else {
if((state_val_21759 === (2))){
var state_21758__$1 = state_21758;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21758__$1,(4),ch);
} else {
if((state_val_21759 === (1))){
var inst_21744 = init;
var state_21758__$1 = (function (){var statearr_21769 = state_21758;
(statearr_21769[(8)] = inst_21744);

return statearr_21769;
})();
var statearr_21770_21783 = state_21758__$1;
(statearr_21770_21783[(2)] = null);

(statearr_21770_21783[(1)] = (2));


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
});})(c__11420__auto__))
;
return ((function (switch__11340__auto__,c__11420__auto__){
return (function() {
var state_machine__11341__auto__ = null;
var state_machine__11341__auto____0 = (function (){
var statearr_21774 = [null,null,null,null,null,null,null,null,null];
(statearr_21774[(0)] = state_machine__11341__auto__);

(statearr_21774[(1)] = (1));

return statearr_21774;
});
var state_machine__11341__auto____1 = (function (state_21758){
while(true){
var ret_value__11342__auto__ = (function (){try{while(true){
var result__11343__auto__ = switch__11340__auto__(state_21758);
if(cljs.core.keyword_identical_QMARK_(result__11343__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11343__auto__;
}
break;
}
}catch (e21775){if((e21775 instanceof Object)){
var ex__11344__auto__ = e21775;
var statearr_21776_21784 = state_21758;
(statearr_21776_21784[(5)] = ex__11344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21758);

return cljs.core.constant$keyword$40;
} else {
throw e21775;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11342__auto__,cljs.core.constant$keyword$40)){
var G__21785 = state_21758;
state_21758 = G__21785;
continue;
} else {
return ret_value__11342__auto__;
}
break;
}
});
state_machine__11341__auto__ = function(state_21758){
switch(arguments.length){
case 0:
return state_machine__11341__auto____0.call(this);
case 1:
return state_machine__11341__auto____1.call(this,state_21758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11341__auto____0;
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11341__auto____1;
return state_machine__11341__auto__;
})()
;})(switch__11340__auto__,c__11420__auto__))
})();
var state__11422__auto__ = (function (){var statearr_21777 = (function (){return (f__11421__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11421__auto__.cljs$core$IFn$_invoke$arity$0() : f__11421__auto__.call(null));
})();
(statearr_21777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11420__auto__);

return statearr_21777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11422__auto__);
});})(c__11420__auto__))
);

return c__11420__auto__;
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
var c__11420__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11420__auto__){
return (function (){
var f__11421__auto__ = (function (){var switch__11340__auto__ = ((function (c__11420__auto__){
return (function (state_21862){
var state_val_21863 = (state_21862[(1)]);
if((state_val_21863 === (7))){
var inst_21844 = (state_21862[(2)]);
var state_21862__$1 = state_21862;
var statearr_21864_21887 = state_21862__$1;
(statearr_21864_21887[(2)] = inst_21844);

(statearr_21864_21887[(1)] = (6));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21863 === (1))){
var inst_21838 = cljs.core.seq(coll);
var inst_21839 = inst_21838;
var state_21862__$1 = (function (){var statearr_21865 = state_21862;
(statearr_21865[(7)] = inst_21839);

return statearr_21865;
})();
var statearr_21866_21888 = state_21862__$1;
(statearr_21866_21888[(2)] = null);

(statearr_21866_21888[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21863 === (4))){
var inst_21839 = (state_21862[(7)]);
var inst_21842 = cljs.core.first(inst_21839);
var state_21862__$1 = state_21862;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21862__$1,(7),ch,inst_21842);
} else {
if((state_val_21863 === (13))){
var inst_21856 = (state_21862[(2)]);
var state_21862__$1 = state_21862;
var statearr_21867_21889 = state_21862__$1;
(statearr_21867_21889[(2)] = inst_21856);

(statearr_21867_21889[(1)] = (10));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21863 === (6))){
var inst_21847 = (state_21862[(2)]);
var state_21862__$1 = state_21862;
if(cljs.core.truth_(inst_21847)){
var statearr_21868_21890 = state_21862__$1;
(statearr_21868_21890[(1)] = (8));

} else {
var statearr_21869_21891 = state_21862__$1;
(statearr_21869_21891[(1)] = (9));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_21863 === (3))){
var inst_21860 = (state_21862[(2)]);
var state_21862__$1 = state_21862;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21862__$1,inst_21860);
} else {
if((state_val_21863 === (12))){
var state_21862__$1 = state_21862;
var statearr_21870_21892 = state_21862__$1;
(statearr_21870_21892[(2)] = null);

(statearr_21870_21892[(1)] = (13));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21863 === (2))){
var inst_21839 = (state_21862[(7)]);
var state_21862__$1 = state_21862;
if(cljs.core.truth_(inst_21839)){
var statearr_21871_21893 = state_21862__$1;
(statearr_21871_21893[(1)] = (4));

} else {
var statearr_21872_21894 = state_21862__$1;
(statearr_21872_21894[(1)] = (5));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_21863 === (11))){
var inst_21853 = cljs.core.async.close_BANG_(ch);
var state_21862__$1 = state_21862;
var statearr_21873_21895 = state_21862__$1;
(statearr_21873_21895[(2)] = inst_21853);

(statearr_21873_21895[(1)] = (13));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21863 === (9))){
var state_21862__$1 = state_21862;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21874_21896 = state_21862__$1;
(statearr_21874_21896[(1)] = (11));

} else {
var statearr_21875_21897 = state_21862__$1;
(statearr_21875_21897[(1)] = (12));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_21863 === (5))){
var inst_21839 = (state_21862[(7)]);
var state_21862__$1 = state_21862;
var statearr_21876_21898 = state_21862__$1;
(statearr_21876_21898[(2)] = inst_21839);

(statearr_21876_21898[(1)] = (6));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21863 === (10))){
var inst_21858 = (state_21862[(2)]);
var state_21862__$1 = state_21862;
var statearr_21877_21899 = state_21862__$1;
(statearr_21877_21899[(2)] = inst_21858);

(statearr_21877_21899[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21863 === (8))){
var inst_21839 = (state_21862[(7)]);
var inst_21849 = cljs.core.next(inst_21839);
var inst_21839__$1 = inst_21849;
var state_21862__$1 = (function (){var statearr_21878 = state_21862;
(statearr_21878[(7)] = inst_21839__$1);

return statearr_21878;
})();
var statearr_21879_21900 = state_21862__$1;
(statearr_21879_21900[(2)] = null);

(statearr_21879_21900[(1)] = (2));


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
});})(c__11420__auto__))
;
return ((function (switch__11340__auto__,c__11420__auto__){
return (function() {
var state_machine__11341__auto__ = null;
var state_machine__11341__auto____0 = (function (){
var statearr_21883 = [null,null,null,null,null,null,null,null];
(statearr_21883[(0)] = state_machine__11341__auto__);

(statearr_21883[(1)] = (1));

return statearr_21883;
});
var state_machine__11341__auto____1 = (function (state_21862){
while(true){
var ret_value__11342__auto__ = (function (){try{while(true){
var result__11343__auto__ = switch__11340__auto__(state_21862);
if(cljs.core.keyword_identical_QMARK_(result__11343__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11343__auto__;
}
break;
}
}catch (e21884){if((e21884 instanceof Object)){
var ex__11344__auto__ = e21884;
var statearr_21885_21901 = state_21862;
(statearr_21885_21901[(5)] = ex__11344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21862);

return cljs.core.constant$keyword$40;
} else {
throw e21884;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11342__auto__,cljs.core.constant$keyword$40)){
var G__21902 = state_21862;
state_21862 = G__21902;
continue;
} else {
return ret_value__11342__auto__;
}
break;
}
});
state_machine__11341__auto__ = function(state_21862){
switch(arguments.length){
case 0:
return state_machine__11341__auto____0.call(this);
case 1:
return state_machine__11341__auto____1.call(this,state_21862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11341__auto____0;
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11341__auto____1;
return state_machine__11341__auto__;
})()
;})(switch__11340__auto__,c__11420__auto__))
})();
var state__11422__auto__ = (function (){var statearr_21886 = (function (){return (f__11421__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11421__auto__.cljs$core$IFn$_invoke$arity$0() : f__11421__auto__.call(null));
})();
(statearr_21886[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11420__auto__);

return statearr_21886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11422__auto__);
});})(c__11420__auto__))
);

return c__11420__auto__;
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

cljs.core.async.Mux = (function (){var obj21904 = {};
return obj21904;
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
return (function (){var or__3583__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__21908 = x__4227__auto__;
return goog.typeOf(G__21908);
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


cljs.core.async.Mult = (function (){var obj21910 = {};
return obj21910;
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
return (function (){var or__3583__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__21914 = x__4227__auto__;
return goog.typeOf(G__21914);
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
return (function (){var or__3583__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__21918 = x__4227__auto__;
return goog.typeOf(G__21918);
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
return (function (){var or__3583__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__21922 = x__4227__auto__;
return goog.typeOf(G__21922);
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
var cs = (function (){var G__22152 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22152) : cljs.core.atom.call(null,G__22152));
})();
var m = (function (){
if(typeof cljs.core.async.t22153 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22153 = (function (cs,ch,mult,meta22154){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta22154 = meta22154;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22153.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t22153.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t22153.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t22153.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22156_22381 = self__.cs;
var G__22157_22382 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22156_22381,G__22157_22382) : cljs.core.reset_BANG_.call(null,G__22156_22381,G__22157_22382));

return null;
});})(cs))
;

cljs.core.async.t22153.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t22153.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t22153.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22155){
var self__ = this;
var _22155__$1 = this;
return self__.meta22154;
});})(cs))
;

cljs.core.async.t22153.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22155,meta22154__$1){
var self__ = this;
var _22155__$1 = this;
return (new cljs.core.async.t22153(self__.cs,self__.ch,self__.mult,meta22154__$1));
});})(cs))
;

cljs.core.async.t22153.cljs$lang$type = true;

cljs.core.async.t22153.cljs$lang$ctorStr = "cljs.core.async/t22153";

cljs.core.async.t22153.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4170__auto__,writer__4171__auto__,opt__4172__auto__){
return cljs.core._write(writer__4171__auto__,"cljs.core.async/t22153");
});})(cs))
;

cljs.core.async.__GT_t22153 = ((function (cs){
return (function __GT_t22153(cs__$1,ch__$1,mult__$1,meta22154){
return (new cljs.core.async.t22153(cs__$1,ch__$1,mult__$1,meta22154));
});})(cs))
;

}

return (new cljs.core.async.t22153(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__22158 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22158) : cljs.core.atom.call(null,G__22158));
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
var c__11420__auto___22383 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11420__auto___22383,cs,m,dchan,dctr,done){
return (function (){
var f__11421__auto__ = (function (){var switch__11340__auto__ = ((function (c__11420__auto___22383,cs,m,dchan,dctr,done){
return (function (state_22289){
var state_val_22290 = (state_22289[(1)]);
if((state_val_22290 === (7))){
var inst_22285 = (state_22289[(2)]);
var state_22289__$1 = state_22289;
var statearr_22291_22384 = state_22289__$1;
(statearr_22291_22384[(2)] = inst_22285);

(statearr_22291_22384[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22290 === (20))){
var inst_22190 = (state_22289[(7)]);
var inst_22200 = cljs.core.first(inst_22190);
var inst_22201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22200,(0),null);
var inst_22202 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22200,(1),null);
var state_22289__$1 = (function (){var statearr_22292 = state_22289;
(statearr_22292[(8)] = inst_22201);

return statearr_22292;
})();
if(cljs.core.truth_(inst_22202)){
var statearr_22293_22385 = state_22289__$1;
(statearr_22293_22385[(1)] = (22));

} else {
var statearr_22294_22386 = state_22289__$1;
(statearr_22294_22386[(1)] = (23));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22290 === (27))){
var inst_22237 = (state_22289[(9)]);
var inst_22230 = (state_22289[(10)]);
var inst_22232 = (state_22289[(11)]);
var inst_22161 = (state_22289[(12)]);
var inst_22237__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_22230,inst_22232);
var inst_22238 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_22237__$1,inst_22161,done);
var state_22289__$1 = (function (){var statearr_22295 = state_22289;
(statearr_22295[(9)] = inst_22237__$1);

return statearr_22295;
})();
if(cljs.core.truth_(inst_22238)){
var statearr_22296_22387 = state_22289__$1;
(statearr_22296_22387[(1)] = (30));

} else {
var statearr_22297_22388 = state_22289__$1;
(statearr_22297_22388[(1)] = (31));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22290 === (1))){
var state_22289__$1 = state_22289;
var statearr_22298_22389 = state_22289__$1;
(statearr_22298_22389[(2)] = null);

(statearr_22298_22389[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22290 === (24))){
var inst_22190 = (state_22289[(7)]);
var inst_22207 = (state_22289[(2)]);
var inst_22208 = cljs.core.next(inst_22190);
var inst_22170 = inst_22208;
var inst_22171 = null;
var inst_22172 = (0);
var inst_22173 = (0);
var state_22289__$1 = (function (){var statearr_22299 = state_22289;
(statearr_22299[(13)] = inst_22171);

(statearr_22299[(14)] = inst_22207);

(statearr_22299[(15)] = inst_22173);

(statearr_22299[(16)] = inst_22172);

(statearr_22299[(17)] = inst_22170);

return statearr_22299;
})();
var statearr_22300_22390 = state_22289__$1;
(statearr_22300_22390[(2)] = null);

(statearr_22300_22390[(1)] = (8));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22290 === (39))){
var state_22289__$1 = state_22289;
var statearr_22304_22391 = state_22289__$1;
(statearr_22304_22391[(2)] = null);

(statearr_22304_22391[(1)] = (41));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22290 === (4))){
var inst_22161 = (state_22289[(12)]);
var inst_22161__$1 = (state_22289[(2)]);
var inst_22162 = (inst_22161__$1 == null);
var state_22289__$1 = (function (){var statearr_22305 = state_22289;
(statearr_22305[(12)] = inst_22161__$1);

return statearr_22305;
})();
if(cljs.core.truth_(inst_22162)){
var statearr_22306_22392 = state_22289__$1;
(statearr_22306_22392[(1)] = (5));

} else {
var statearr_22307_22393 = state_22289__$1;
(statearr_22307_22393[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22290 === (15))){
var inst_22171 = (state_22289[(13)]);
var inst_22173 = (state_22289[(15)]);
var inst_22172 = (state_22289[(16)]);
var inst_22170 = (state_22289[(17)]);
var inst_22186 = (state_22289[(2)]);
var inst_22187 = (inst_22173 + (1));
var tmp22301 = inst_22171;
var tmp22302 = inst_22172;
var tmp22303 = inst_22170;
var inst_22170__$1 = tmp22303;
var inst_22171__$1 = tmp22301;
var inst_22172__$1 = tmp22302;
var inst_22173__$1 = inst_22187;
var state_22289__$1 = (function (){var statearr_22308 = state_22289;
(statearr_22308[(13)] = inst_22171__$1);

(statearr_22308[(15)] = inst_22173__$1);

(statearr_22308[(16)] = inst_22172__$1);

(statearr_22308[(18)] = inst_22186);

(statearr_22308[(17)] = inst_22170__$1);

return statearr_22308;
})();
var statearr_22309_22394 = state_22289__$1;
(statearr_22309_22394[(2)] = null);

(statearr_22309_22394[(1)] = (8));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22290 === (21))){
var inst_22211 = (state_22289[(2)]);
var state_22289__$1 = state_22289;
var statearr_22313_22395 = state_22289__$1;
(statearr_22313_22395[(2)] = inst_22211);

(statearr_22313_22395[(1)] = (18));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22290 === (31))){
var inst_22237 = (state_22289[(9)]);
var inst_22241 = done(null);
var inst_22242 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_22237);
var state_22289__$1 = (function (){var statearr_22314 = state_22289;
(statearr_22314[(19)] = inst_22241);

return statearr_22314;
})();
var statearr_22315_22396 = state_22289__$1;
(statearr_22315_22396[(2)] = inst_22242);

(statearr_22315_22396[(1)] = (32));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22290 === (32))){
var inst_22230 = (state_22289[(10)]);
var inst_22232 = (state_22289[(11)]);
var inst_22231 = (state_22289[(20)]);
var inst_22229 = (state_22289[(21)]);
var inst_22244 = (state_22289[(2)]);
var inst_22245 = (inst_22232 + (1));
var tmp22310 = inst_22230;
var tmp22311 = inst_22231;
var tmp22312 = inst_22229;
var inst_22229__$1 = tmp22312;
var inst_22230__$1 = tmp22310;
var inst_22231__$1 = tmp22311;
var inst_22232__$1 = inst_22245;
var state_22289__$1 = (function (){var statearr_22316 = state_22289;
(statearr_22316[(10)] = inst_22230__$1);

(statearr_22316[(11)] = inst_22232__$1);

(statearr_22316[(20)] = inst_22231__$1);

(statearr_22316[(21)] = inst_22229__$1);

(statearr_22316[(22)] = inst_22244);

return statearr_22316;
})();
var statearr_22317_22397 = state_22289__$1;
(statearr_22317_22397[(2)] = null);

(statearr_22317_22397[(1)] = (25));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22290 === (40))){
var inst_22257 = (state_22289[(23)]);
var inst_22261 = done(null);
var inst_22262 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_22257);
var state_22289__$1 = (function (){var statearr_22318 = state_22289;
(statearr_22318[(24)] = inst_22261);

return statearr_22318;
})();
var statearr_22319_22398 = state_22289__$1;
(statearr_22319_22398[(2)] = inst_22262);

(statearr_22319_22398[(1)] = (41));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22290 === (33))){
var inst_22248 = (state_22289[(25)]);
var inst_22250 = cljs.core.chunked_seq_QMARK_(inst_22248);
var state_22289__$1 = state_22289;
if(inst_22250){
var statearr_22320_22399 = state_22289__$1;
(statearr_22320_22399[(1)] = (36));

} else {
var statearr_22321_22400 = state_22289__$1;
(statearr_22321_22400[(1)] = (37));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22290 === (13))){
var inst_22180 = (state_22289[(26)]);
var inst_22183 = cljs.core.async.close_BANG_(inst_22180);
var state_22289__$1 = state_22289;
var statearr_22322_22401 = state_22289__$1;
(statearr_22322_22401[(2)] = inst_22183);

(statearr_22322_22401[(1)] = (15));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22290 === (22))){
var inst_22201 = (state_22289[(8)]);
var inst_22204 = cljs.core.async.close_BANG_(inst_22201);
var state_22289__$1 = state_22289;
var statearr_22323_22402 = state_22289__$1;
(statearr_22323_22402[(2)] = inst_22204);

(statearr_22323_22402[(1)] = (24));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22290 === (36))){
var inst_22248 = (state_22289[(25)]);
var inst_22252 = cljs.core.chunk_first(inst_22248);
var inst_22253 = cljs.core.chunk_rest(inst_22248);
var inst_22254 = cljs.core.count(inst_22252);
var inst_22229 = inst_22253;
var inst_22230 = inst_22252;
var inst_22231 = inst_22254;
var inst_22232 = (0);
var state_22289__$1 = (function (){var statearr_22324 = state_22289;
(statearr_22324[(10)] = inst_22230);

(statearr_22324[(11)] = inst_22232);

(statearr_22324[(20)] = inst_22231);

(statearr_22324[(21)] = inst_22229);

return statearr_22324;
})();
var statearr_22325_22403 = state_22289__$1;
(statearr_22325_22403[(2)] = null);

(statearr_22325_22403[(1)] = (25));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22290 === (41))){
var inst_22248 = (state_22289[(25)]);
var inst_22264 = (state_22289[(2)]);
var inst_22265 = cljs.core.next(inst_22248);
var inst_22229 = inst_22265;
var inst_22230 = null;
var inst_22231 = (0);
var inst_22232 = (0);
var state_22289__$1 = (function (){var statearr_22326 = state_22289;
(statearr_22326[(10)] = inst_22230);

(statearr_22326[(11)] = inst_22232);

(statearr_22326[(20)] = inst_22231);

(statearr_22326[(27)] = inst_22264);

(statearr_22326[(21)] = inst_22229);

return statearr_22326;
})();
var statearr_22327_22404 = state_22289__$1;
(statearr_22327_22404[(2)] = null);

(statearr_22327_22404[(1)] = (25));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22290 === (43))){
var state_22289__$1 = state_22289;
var statearr_22328_22405 = state_22289__$1;
(statearr_22328_22405[(2)] = null);

(statearr_22328_22405[(1)] = (44));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22290 === (29))){
var inst_22273 = (state_22289[(2)]);
var state_22289__$1 = state_22289;
var statearr_22329_22406 = state_22289__$1;
(statearr_22329_22406[(2)] = inst_22273);

(statearr_22329_22406[(1)] = (26));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22290 === (44))){
var inst_22282 = (state_22289[(2)]);
var state_22289__$1 = (function (){var statearr_22330 = state_22289;
(statearr_22330[(28)] = inst_22282);

return statearr_22330;
})();
var statearr_22331_22407 = state_22289__$1;
(statearr_22331_22407[(2)] = null);

(statearr_22331_22407[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22290 === (6))){
var inst_22221 = (state_22289[(29)]);
var inst_22220 = (function (){var G__22332 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22332) : cljs.core.deref.call(null,G__22332));
})();
var inst_22221__$1 = cljs.core.keys(inst_22220);
var inst_22222 = cljs.core.count(inst_22221__$1);
var inst_22223 = (function (){var G__22333 = dctr;
var G__22334 = inst_22222;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22333,G__22334) : cljs.core.reset_BANG_.call(null,G__22333,G__22334));
})();
var inst_22228 = cljs.core.seq(inst_22221__$1);
var inst_22229 = inst_22228;
var inst_22230 = null;
var inst_22231 = (0);
var inst_22232 = (0);
var state_22289__$1 = (function (){var statearr_22335 = state_22289;
(statearr_22335[(10)] = inst_22230);

(statearr_22335[(11)] = inst_22232);

(statearr_22335[(20)] = inst_22231);

(statearr_22335[(29)] = inst_22221__$1);

(statearr_22335[(21)] = inst_22229);

(statearr_22335[(30)] = inst_22223);

return statearr_22335;
})();
var statearr_22336_22408 = state_22289__$1;
(statearr_22336_22408[(2)] = null);

(statearr_22336_22408[(1)] = (25));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22290 === (28))){
var inst_22229 = (state_22289[(21)]);
var inst_22248 = (state_22289[(25)]);
var inst_22248__$1 = cljs.core.seq(inst_22229);
var state_22289__$1 = (function (){var statearr_22337 = state_22289;
(statearr_22337[(25)] = inst_22248__$1);

return statearr_22337;
})();
if(inst_22248__$1){
var statearr_22338_22409 = state_22289__$1;
(statearr_22338_22409[(1)] = (33));

} else {
var statearr_22339_22410 = state_22289__$1;
(statearr_22339_22410[(1)] = (34));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22290 === (25))){
var inst_22232 = (state_22289[(11)]);
var inst_22231 = (state_22289[(20)]);
var inst_22234 = (inst_22232 < inst_22231);
var inst_22235 = inst_22234;
var state_22289__$1 = state_22289;
if(cljs.core.truth_(inst_22235)){
var statearr_22340_22411 = state_22289__$1;
(statearr_22340_22411[(1)] = (27));

} else {
var statearr_22341_22412 = state_22289__$1;
(statearr_22341_22412[(1)] = (28));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22290 === (34))){
var state_22289__$1 = state_22289;
var statearr_22342_22413 = state_22289__$1;
(statearr_22342_22413[(2)] = null);

(statearr_22342_22413[(1)] = (35));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22290 === (17))){
var state_22289__$1 = state_22289;
var statearr_22343_22414 = state_22289__$1;
(statearr_22343_22414[(2)] = null);

(statearr_22343_22414[(1)] = (18));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22290 === (3))){
var inst_22287 = (state_22289[(2)]);
var state_22289__$1 = state_22289;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22289__$1,inst_22287);
} else {
if((state_val_22290 === (12))){
var inst_22216 = (state_22289[(2)]);
var state_22289__$1 = state_22289;
var statearr_22344_22415 = state_22289__$1;
(statearr_22344_22415[(2)] = inst_22216);

(statearr_22344_22415[(1)] = (9));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22290 === (2))){
var state_22289__$1 = state_22289;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22289__$1,(4),ch);
} else {
if((state_val_22290 === (23))){
var state_22289__$1 = state_22289;
var statearr_22345_22416 = state_22289__$1;
(statearr_22345_22416[(2)] = null);

(statearr_22345_22416[(1)] = (24));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22290 === (35))){
var inst_22271 = (state_22289[(2)]);
var state_22289__$1 = state_22289;
var statearr_22346_22417 = state_22289__$1;
(statearr_22346_22417[(2)] = inst_22271);

(statearr_22346_22417[(1)] = (29));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22290 === (19))){
var inst_22190 = (state_22289[(7)]);
var inst_22194 = cljs.core.chunk_first(inst_22190);
var inst_22195 = cljs.core.chunk_rest(inst_22190);
var inst_22196 = cljs.core.count(inst_22194);
var inst_22170 = inst_22195;
var inst_22171 = inst_22194;
var inst_22172 = inst_22196;
var inst_22173 = (0);
var state_22289__$1 = (function (){var statearr_22347 = state_22289;
(statearr_22347[(13)] = inst_22171);

(statearr_22347[(15)] = inst_22173);

(statearr_22347[(16)] = inst_22172);

(statearr_22347[(17)] = inst_22170);

return statearr_22347;
})();
var statearr_22348_22418 = state_22289__$1;
(statearr_22348_22418[(2)] = null);

(statearr_22348_22418[(1)] = (8));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22290 === (11))){
var inst_22190 = (state_22289[(7)]);
var inst_22170 = (state_22289[(17)]);
var inst_22190__$1 = cljs.core.seq(inst_22170);
var state_22289__$1 = (function (){var statearr_22349 = state_22289;
(statearr_22349[(7)] = inst_22190__$1);

return statearr_22349;
})();
if(inst_22190__$1){
var statearr_22350_22419 = state_22289__$1;
(statearr_22350_22419[(1)] = (16));

} else {
var statearr_22351_22420 = state_22289__$1;
(statearr_22351_22420[(1)] = (17));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22290 === (9))){
var inst_22218 = (state_22289[(2)]);
var state_22289__$1 = state_22289;
var statearr_22352_22421 = state_22289__$1;
(statearr_22352_22421[(2)] = inst_22218);

(statearr_22352_22421[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22290 === (5))){
var inst_22168 = (function (){var G__22353 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22353) : cljs.core.deref.call(null,G__22353));
})();
var inst_22169 = cljs.core.seq(inst_22168);
var inst_22170 = inst_22169;
var inst_22171 = null;
var inst_22172 = (0);
var inst_22173 = (0);
var state_22289__$1 = (function (){var statearr_22354 = state_22289;
(statearr_22354[(13)] = inst_22171);

(statearr_22354[(15)] = inst_22173);

(statearr_22354[(16)] = inst_22172);

(statearr_22354[(17)] = inst_22170);

return statearr_22354;
})();
var statearr_22355_22422 = state_22289__$1;
(statearr_22355_22422[(2)] = null);

(statearr_22355_22422[(1)] = (8));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22290 === (14))){
var state_22289__$1 = state_22289;
var statearr_22356_22423 = state_22289__$1;
(statearr_22356_22423[(2)] = null);

(statearr_22356_22423[(1)] = (15));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22290 === (45))){
var inst_22279 = (state_22289[(2)]);
var state_22289__$1 = state_22289;
var statearr_22357_22424 = state_22289__$1;
(statearr_22357_22424[(2)] = inst_22279);

(statearr_22357_22424[(1)] = (44));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22290 === (26))){
var inst_22221 = (state_22289[(29)]);
var inst_22275 = (state_22289[(2)]);
var inst_22276 = cljs.core.seq(inst_22221);
var state_22289__$1 = (function (){var statearr_22358 = state_22289;
(statearr_22358[(31)] = inst_22275);

return statearr_22358;
})();
if(inst_22276){
var statearr_22359_22425 = state_22289__$1;
(statearr_22359_22425[(1)] = (42));

} else {
var statearr_22360_22426 = state_22289__$1;
(statearr_22360_22426[(1)] = (43));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22290 === (16))){
var inst_22190 = (state_22289[(7)]);
var inst_22192 = cljs.core.chunked_seq_QMARK_(inst_22190);
var state_22289__$1 = state_22289;
if(inst_22192){
var statearr_22361_22427 = state_22289__$1;
(statearr_22361_22427[(1)] = (19));

} else {
var statearr_22362_22428 = state_22289__$1;
(statearr_22362_22428[(1)] = (20));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22290 === (38))){
var inst_22268 = (state_22289[(2)]);
var state_22289__$1 = state_22289;
var statearr_22363_22429 = state_22289__$1;
(statearr_22363_22429[(2)] = inst_22268);

(statearr_22363_22429[(1)] = (35));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22290 === (30))){
var state_22289__$1 = state_22289;
var statearr_22364_22430 = state_22289__$1;
(statearr_22364_22430[(2)] = null);

(statearr_22364_22430[(1)] = (32));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22290 === (10))){
var inst_22171 = (state_22289[(13)]);
var inst_22173 = (state_22289[(15)]);
var inst_22179 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_22171,inst_22173);
var inst_22180 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22179,(0),null);
var inst_22181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22179,(1),null);
var state_22289__$1 = (function (){var statearr_22365 = state_22289;
(statearr_22365[(26)] = inst_22180);

return statearr_22365;
})();
if(cljs.core.truth_(inst_22181)){
var statearr_22366_22431 = state_22289__$1;
(statearr_22366_22431[(1)] = (13));

} else {
var statearr_22367_22432 = state_22289__$1;
(statearr_22367_22432[(1)] = (14));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22290 === (18))){
var inst_22214 = (state_22289[(2)]);
var state_22289__$1 = state_22289;
var statearr_22368_22433 = state_22289__$1;
(statearr_22368_22433[(2)] = inst_22214);

(statearr_22368_22433[(1)] = (12));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22290 === (42))){
var state_22289__$1 = state_22289;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22289__$1,(45),dchan);
} else {
if((state_val_22290 === (37))){
var inst_22161 = (state_22289[(12)]);
var inst_22248 = (state_22289[(25)]);
var inst_22257 = (state_22289[(23)]);
var inst_22257__$1 = cljs.core.first(inst_22248);
var inst_22258 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_22257__$1,inst_22161,done);
var state_22289__$1 = (function (){var statearr_22369 = state_22289;
(statearr_22369[(23)] = inst_22257__$1);

return statearr_22369;
})();
if(cljs.core.truth_(inst_22258)){
var statearr_22370_22434 = state_22289__$1;
(statearr_22370_22434[(1)] = (39));

} else {
var statearr_22371_22435 = state_22289__$1;
(statearr_22371_22435[(1)] = (40));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22290 === (8))){
var inst_22173 = (state_22289[(15)]);
var inst_22172 = (state_22289[(16)]);
var inst_22175 = (inst_22173 < inst_22172);
var inst_22176 = inst_22175;
var state_22289__$1 = state_22289;
if(cljs.core.truth_(inst_22176)){
var statearr_22372_22436 = state_22289__$1;
(statearr_22372_22436[(1)] = (10));

} else {
var statearr_22373_22437 = state_22289__$1;
(statearr_22373_22437[(1)] = (11));

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
});})(c__11420__auto___22383,cs,m,dchan,dctr,done))
;
return ((function (switch__11340__auto__,c__11420__auto___22383,cs,m,dchan,dctr,done){
return (function() {
var state_machine__11341__auto__ = null;
var state_machine__11341__auto____0 = (function (){
var statearr_22377 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22377[(0)] = state_machine__11341__auto__);

(statearr_22377[(1)] = (1));

return statearr_22377;
});
var state_machine__11341__auto____1 = (function (state_22289){
while(true){
var ret_value__11342__auto__ = (function (){try{while(true){
var result__11343__auto__ = switch__11340__auto__(state_22289);
if(cljs.core.keyword_identical_QMARK_(result__11343__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11343__auto__;
}
break;
}
}catch (e22378){if((e22378 instanceof Object)){
var ex__11344__auto__ = e22378;
var statearr_22379_22438 = state_22289;
(statearr_22379_22438[(5)] = ex__11344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22289);

return cljs.core.constant$keyword$40;
} else {
throw e22378;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11342__auto__,cljs.core.constant$keyword$40)){
var G__22439 = state_22289;
state_22289 = G__22439;
continue;
} else {
return ret_value__11342__auto__;
}
break;
}
});
state_machine__11341__auto__ = function(state_22289){
switch(arguments.length){
case 0:
return state_machine__11341__auto____0.call(this);
case 1:
return state_machine__11341__auto____1.call(this,state_22289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11341__auto____0;
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11341__auto____1;
return state_machine__11341__auto__;
})()
;})(switch__11340__auto__,c__11420__auto___22383,cs,m,dchan,dctr,done))
})();
var state__11422__auto__ = (function (){var statearr_22380 = (function (){return (f__11421__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11421__auto__.cljs$core$IFn$_invoke$arity$0() : f__11421__auto__.call(null));
})();
(statearr_22380[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11420__auto___22383);

return statearr_22380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11422__auto__);
});})(c__11420__auto___22383,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj22444 = {};
return obj22444;
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
return (function (){var or__3583__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__22448 = x__4227__auto__;
return goog.typeOf(G__22448);
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
return (function (){var or__3583__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__22452 = x__4227__auto__;
return goog.typeOf(G__22452);
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
return (function (){var or__3583__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__22456 = x__4227__auto__;
return goog.typeOf(G__22456);
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
return (function (){var or__3583__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__22460 = x__4227__auto__;
return goog.typeOf(G__22460);
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
return (function (){var or__3583__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__22464 = x__4227__auto__;
return goog.typeOf(G__22464);
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__22465){
var map__22471 = p__22465;
var map__22471__$1 = ((cljs.core.seq_QMARK_(map__22471))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22471):map__22471);
var opts = map__22471__$1;
var statearr_22472_22476 = state;
(statearr_22472_22476[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__22471,map__22471__$1,opts){
return (function (val){
var statearr_22473_22477 = state;
(statearr_22473_22477[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__22471,map__22471__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_22474_22478 = state;
(statearr_22474_22478[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__22475 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22475) : cljs.core.deref.call(null,G__22475));
})());


return cljs.core.constant$keyword$40;
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__22465 = null;
if (arguments.length > 3) {
var G__22479__i = 0, G__22479__a = new Array(arguments.length -  3);
while (G__22479__i < G__22479__a.length) {G__22479__a[G__22479__i] = arguments[G__22479__i + 3]; ++G__22479__i;}
  p__22465 = new cljs.core.IndexedSeq(G__22479__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__22465);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__22480){
var state = cljs.core.first(arglist__22480);
arglist__22480 = cljs.core.next(arglist__22480);
var cont_block = cljs.core.first(arglist__22480);
arglist__22480 = cljs.core.next(arglist__22480);
var ports = cljs.core.first(arglist__22480);
var p__22465 = cljs.core.rest(arglist__22480);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__22465);
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
var cs = (function (){var G__22613 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22613) : cljs.core.atom.call(null,G__22613));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$49,null,cljs.core.constant$keyword$50,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$51);
var solo_mode = (function (){var G__22614 = cljs.core.constant$keyword$50;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22614) : cljs.core.atom.call(null,G__22614));
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
if(cljs.core.truth_((function (){var G__22615 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__22615) : attr.call(null,G__22615));
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
var chs = (function (){var G__22616 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22616) : cljs.core.deref.call(null,G__22616));
})();
var mode = (function (){var G__22617 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22617) : cljs.core.deref.call(null,G__22617));
})();
var solos = pick(cljs.core.constant$keyword$51,chs);
var pauses = pick(cljs.core.constant$keyword$49,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$52,solos,cljs.core.constant$keyword$53,pick(cljs.core.constant$keyword$50,chs),cljs.core.constant$keyword$54,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$49)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t22618 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22618 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22619){
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
this.meta22619 = meta22619;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22618.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t22618.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22618.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22618.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22621_22745 = self__.cs;
var G__22622_22746 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22621_22745,G__22622_22746) : cljs.core.reset_BANG_.call(null,G__22621_22745,G__22622_22746));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22618.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22618.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;

var G__22623_22747 = self__.solo_mode;
var G__22624_22748 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22623_22747,G__22624_22748) : cljs.core.reset_BANG_.call(null,G__22623_22747,G__22624_22748));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22618.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t22618.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22618.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22620){
var self__ = this;
var _22620__$1 = this;
return self__.meta22619;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22620,meta22619__$1){
var self__ = this;
var _22620__$1 = this;
return (new cljs.core.async.t22618(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22619__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22618.cljs$lang$type = true;

cljs.core.async.t22618.cljs$lang$ctorStr = "cljs.core.async/t22618";

cljs.core.async.t22618.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4170__auto__,writer__4171__auto__,opt__4172__auto__){
return cljs.core._write(writer__4171__auto__,"cljs.core.async/t22618");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t22618 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t22618(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22619){
return (new cljs.core.async.t22618(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22619));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t22618(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11420__auto___22749 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11420__auto___22749,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__11421__auto__ = (function (){var switch__11340__auto__ = ((function (c__11420__auto___22749,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22696){
var state_val_22697 = (state_22696[(1)]);
if((state_val_22697 === (7))){
var inst_22638 = (state_22696[(7)]);
var inst_22643 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_22638);
var state_22696__$1 = state_22696;
var statearr_22698_22750 = state_22696__$1;
(statearr_22698_22750[(2)] = inst_22643);

(statearr_22698_22750[(1)] = (9));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22697 === (20))){
var inst_22653 = (state_22696[(8)]);
var state_22696__$1 = state_22696;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22696__$1,(23),out,inst_22653);
} else {
if((state_val_22697 === (1))){
var inst_22628 = (state_22696[(9)]);
var inst_22628__$1 = calc_state();
var inst_22629 = cljs.core.seq_QMARK_(inst_22628__$1);
var state_22696__$1 = (function (){var statearr_22699 = state_22696;
(statearr_22699[(9)] = inst_22628__$1);

return statearr_22699;
})();
if(inst_22629){
var statearr_22700_22751 = state_22696__$1;
(statearr_22700_22751[(1)] = (2));

} else {
var statearr_22701_22752 = state_22696__$1;
(statearr_22701_22752[(1)] = (3));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22697 === (24))){
var inst_22646 = (state_22696[(10)]);
var inst_22638 = inst_22646;
var state_22696__$1 = (function (){var statearr_22702 = state_22696;
(statearr_22702[(7)] = inst_22638);

return statearr_22702;
})();
var statearr_22703_22753 = state_22696__$1;
(statearr_22703_22753[(2)] = null);

(statearr_22703_22753[(1)] = (5));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22697 === (4))){
var inst_22628 = (state_22696[(9)]);
var inst_22634 = (state_22696[(2)]);
var inst_22635 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22634,cljs.core.constant$keyword$54);
var inst_22636 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22634,cljs.core.constant$keyword$53);
var inst_22637 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22634,cljs.core.constant$keyword$52);
var inst_22638 = inst_22628;
var state_22696__$1 = (function (){var statearr_22704 = state_22696;
(statearr_22704[(7)] = inst_22638);

(statearr_22704[(11)] = inst_22637);

(statearr_22704[(12)] = inst_22635);

(statearr_22704[(13)] = inst_22636);

return statearr_22704;
})();
var statearr_22705_22754 = state_22696__$1;
(statearr_22705_22754[(2)] = null);

(statearr_22705_22754[(1)] = (5));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22697 === (15))){
var state_22696__$1 = state_22696;
var statearr_22706_22755 = state_22696__$1;
(statearr_22706_22755[(2)] = null);

(statearr_22706_22755[(1)] = (16));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22697 === (21))){
var inst_22646 = (state_22696[(10)]);
var inst_22638 = inst_22646;
var state_22696__$1 = (function (){var statearr_22707 = state_22696;
(statearr_22707[(7)] = inst_22638);

return statearr_22707;
})();
var statearr_22708_22756 = state_22696__$1;
(statearr_22708_22756[(2)] = null);

(statearr_22708_22756[(1)] = (5));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22697 === (13))){
var inst_22692 = (state_22696[(2)]);
var state_22696__$1 = state_22696;
var statearr_22709_22757 = state_22696__$1;
(statearr_22709_22757[(2)] = inst_22692);

(statearr_22709_22757[(1)] = (6));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22697 === (22))){
var inst_22690 = (state_22696[(2)]);
var state_22696__$1 = state_22696;
var statearr_22710_22758 = state_22696__$1;
(statearr_22710_22758[(2)] = inst_22690);

(statearr_22710_22758[(1)] = (13));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22697 === (6))){
var inst_22694 = (state_22696[(2)]);
var state_22696__$1 = state_22696;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22696__$1,inst_22694);
} else {
if((state_val_22697 === (25))){
var state_22696__$1 = state_22696;
var statearr_22711_22759 = state_22696__$1;
(statearr_22711_22759[(2)] = null);

(statearr_22711_22759[(1)] = (26));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22697 === (17))){
var inst_22669 = (state_22696[(14)]);
var state_22696__$1 = state_22696;
var statearr_22712_22760 = state_22696__$1;
(statearr_22712_22760[(2)] = inst_22669);

(statearr_22712_22760[(1)] = (19));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22697 === (3))){
var inst_22628 = (state_22696[(9)]);
var state_22696__$1 = state_22696;
var statearr_22713_22761 = state_22696__$1;
(statearr_22713_22761[(2)] = inst_22628);

(statearr_22713_22761[(1)] = (4));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22697 === (12))){
var inst_22649 = (state_22696[(15)]);
var inst_22654 = (state_22696[(16)]);
var inst_22669 = (state_22696[(14)]);
var inst_22669__$1 = (function (){var G__22714 = inst_22654;
return (inst_22649.cljs$core$IFn$_invoke$arity$1 ? inst_22649.cljs$core$IFn$_invoke$arity$1(G__22714) : inst_22649.call(null,G__22714));
})();
var state_22696__$1 = (function (){var statearr_22715 = state_22696;
(statearr_22715[(14)] = inst_22669__$1);

return statearr_22715;
})();
if(cljs.core.truth_(inst_22669__$1)){
var statearr_22716_22762 = state_22696__$1;
(statearr_22716_22762[(1)] = (17));

} else {
var statearr_22717_22763 = state_22696__$1;
(statearr_22717_22763[(1)] = (18));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22697 === (2))){
var inst_22628 = (state_22696[(9)]);
var inst_22631 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_22628);
var state_22696__$1 = state_22696;
var statearr_22718_22764 = state_22696__$1;
(statearr_22718_22764[(2)] = inst_22631);

(statearr_22718_22764[(1)] = (4));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22697 === (23))){
var inst_22681 = (state_22696[(2)]);
var state_22696__$1 = state_22696;
if(cljs.core.truth_(inst_22681)){
var statearr_22719_22765 = state_22696__$1;
(statearr_22719_22765[(1)] = (24));

} else {
var statearr_22720_22766 = state_22696__$1;
(statearr_22720_22766[(1)] = (25));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22697 === (19))){
var inst_22678 = (state_22696[(2)]);
var state_22696__$1 = state_22696;
if(cljs.core.truth_(inst_22678)){
var statearr_22721_22767 = state_22696__$1;
(statearr_22721_22767[(1)] = (20));

} else {
var statearr_22722_22768 = state_22696__$1;
(statearr_22722_22768[(1)] = (21));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22697 === (11))){
var inst_22653 = (state_22696[(8)]);
var inst_22659 = (inst_22653 == null);
var state_22696__$1 = state_22696;
if(cljs.core.truth_(inst_22659)){
var statearr_22723_22769 = state_22696__$1;
(statearr_22723_22769[(1)] = (14));

} else {
var statearr_22724_22770 = state_22696__$1;
(statearr_22724_22770[(1)] = (15));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22697 === (9))){
var inst_22646 = (state_22696[(10)]);
var inst_22646__$1 = (state_22696[(2)]);
var inst_22647 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22646__$1,cljs.core.constant$keyword$54);
var inst_22648 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22646__$1,cljs.core.constant$keyword$53);
var inst_22649 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22646__$1,cljs.core.constant$keyword$52);
var state_22696__$1 = (function (){var statearr_22725 = state_22696;
(statearr_22725[(10)] = inst_22646__$1);

(statearr_22725[(15)] = inst_22649);

(statearr_22725[(17)] = inst_22648);

return statearr_22725;
})();
return cljs.core.async.ioc_alts_BANG_(state_22696__$1,(10),inst_22647);
} else {
if((state_val_22697 === (5))){
var inst_22638 = (state_22696[(7)]);
var inst_22641 = cljs.core.seq_QMARK_(inst_22638);
var state_22696__$1 = state_22696;
if(inst_22641){
var statearr_22726_22771 = state_22696__$1;
(statearr_22726_22771[(1)] = (7));

} else {
var statearr_22727_22772 = state_22696__$1;
(statearr_22727_22772[(1)] = (8));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22697 === (14))){
var inst_22654 = (state_22696[(16)]);
var inst_22661 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_22654);
var state_22696__$1 = state_22696;
var statearr_22728_22773 = state_22696__$1;
(statearr_22728_22773[(2)] = inst_22661);

(statearr_22728_22773[(1)] = (16));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22697 === (26))){
var inst_22686 = (state_22696[(2)]);
var state_22696__$1 = state_22696;
var statearr_22729_22774 = state_22696__$1;
(statearr_22729_22774[(2)] = inst_22686);

(statearr_22729_22774[(1)] = (22));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22697 === (16))){
var inst_22664 = (state_22696[(2)]);
var inst_22665 = calc_state();
var inst_22638 = inst_22665;
var state_22696__$1 = (function (){var statearr_22730 = state_22696;
(statearr_22730[(7)] = inst_22638);

(statearr_22730[(18)] = inst_22664);

return statearr_22730;
})();
var statearr_22731_22775 = state_22696__$1;
(statearr_22731_22775[(2)] = null);

(statearr_22731_22775[(1)] = (5));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22697 === (10))){
var inst_22653 = (state_22696[(8)]);
var inst_22654 = (state_22696[(16)]);
var inst_22652 = (state_22696[(2)]);
var inst_22653__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22652,(0),null);
var inst_22654__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22652,(1),null);
var inst_22655 = (inst_22653__$1 == null);
var inst_22656 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22654__$1,change);
var inst_22657 = (inst_22655) || (inst_22656);
var state_22696__$1 = (function (){var statearr_22732 = state_22696;
(statearr_22732[(8)] = inst_22653__$1);

(statearr_22732[(16)] = inst_22654__$1);

return statearr_22732;
})();
if(cljs.core.truth_(inst_22657)){
var statearr_22733_22776 = state_22696__$1;
(statearr_22733_22776[(1)] = (11));

} else {
var statearr_22734_22777 = state_22696__$1;
(statearr_22734_22777[(1)] = (12));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22697 === (18))){
var inst_22649 = (state_22696[(15)]);
var inst_22648 = (state_22696[(17)]);
var inst_22654 = (state_22696[(16)]);
var inst_22673 = cljs.core.empty_QMARK_(inst_22649);
var inst_22674 = (function (){var G__22735 = inst_22654;
return (inst_22648.cljs$core$IFn$_invoke$arity$1 ? inst_22648.cljs$core$IFn$_invoke$arity$1(G__22735) : inst_22648.call(null,G__22735));
})();
var inst_22675 = cljs.core.not(inst_22674);
var inst_22676 = (inst_22673) && (inst_22675);
var state_22696__$1 = state_22696;
var statearr_22736_22778 = state_22696__$1;
(statearr_22736_22778[(2)] = inst_22676);

(statearr_22736_22778[(1)] = (19));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22697 === (8))){
var inst_22638 = (state_22696[(7)]);
var state_22696__$1 = state_22696;
var statearr_22737_22779 = state_22696__$1;
(statearr_22737_22779[(2)] = inst_22638);

(statearr_22737_22779[(1)] = (9));


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
});})(c__11420__auto___22749,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__11340__auto__,c__11420__auto___22749,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__11341__auto__ = null;
var state_machine__11341__auto____0 = (function (){
var statearr_22741 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22741[(0)] = state_machine__11341__auto__);

(statearr_22741[(1)] = (1));

return statearr_22741;
});
var state_machine__11341__auto____1 = (function (state_22696){
while(true){
var ret_value__11342__auto__ = (function (){try{while(true){
var result__11343__auto__ = switch__11340__auto__(state_22696);
if(cljs.core.keyword_identical_QMARK_(result__11343__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11343__auto__;
}
break;
}
}catch (e22742){if((e22742 instanceof Object)){
var ex__11344__auto__ = e22742;
var statearr_22743_22780 = state_22696;
(statearr_22743_22780[(5)] = ex__11344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22696);

return cljs.core.constant$keyword$40;
} else {
throw e22742;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11342__auto__,cljs.core.constant$keyword$40)){
var G__22781 = state_22696;
state_22696 = G__22781;
continue;
} else {
return ret_value__11342__auto__;
}
break;
}
});
state_machine__11341__auto__ = function(state_22696){
switch(arguments.length){
case 0:
return state_machine__11341__auto____0.call(this);
case 1:
return state_machine__11341__auto____1.call(this,state_22696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11341__auto____0;
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11341__auto____1;
return state_machine__11341__auto__;
})()
;})(switch__11340__auto__,c__11420__auto___22749,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__11422__auto__ = (function (){var statearr_22744 = (function (){return (f__11421__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11421__auto__.cljs$core$IFn$_invoke$arity$0() : f__11421__auto__.call(null));
})();
(statearr_22744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11420__auto___22749);

return statearr_22744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11422__auto__);
});})(c__11420__auto___22749,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj22783 = {};
return obj22783;
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
return (function (){var or__3583__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__22787 = x__4227__auto__;
return goog.typeOf(G__22787);
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
return (function (){var or__3583__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__22791 = x__4227__auto__;
return goog.typeOf(G__22791);
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
return (function (){var or__3583__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__22797 = x__4227__auto__;
return goog.typeOf(G__22797);
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
return (function (){var or__3583__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__22799 = x__4227__auto__;
return goog.typeOf(G__22799);
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
var mults = (function (){var G__22938 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22938) : cljs.core.atom.call(null,G__22938));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__3583__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__22940 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22940) : cljs.core.deref.call(null,G__22940));
})(),topic);
if(cljs.core.truth_(or__3583__auto__)){
return or__3583__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3583__auto__,mults){
return (function (p1__22800_SHARP_){
if(cljs.core.truth_((function (){var G__22941 = topic;
return (p1__22800_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__22800_SHARP_.cljs$core$IFn$_invoke$arity$1(G__22941) : p1__22800_SHARP_.call(null,G__22941));
})())){
return p1__22800_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__22800_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__22942 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__22942) : buf_fn.call(null,G__22942));
})())));
}
});})(or__3583__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t22943 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22943 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta22944){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta22944 = meta22944;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22943.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t22943.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__22946 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__22946) : self__.ensure_mult.call(null,G__22946));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t22943.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__22947 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22947) : cljs.core.deref.call(null,G__22947));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t22943.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22948 = self__.mults;
var G__22949 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22948,G__22949) : cljs.core.reset_BANG_.call(null,G__22948,G__22949));
});})(mults,ensure_mult))
;

cljs.core.async.t22943.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t22943.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t22943.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t22943.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22945){
var self__ = this;
var _22945__$1 = this;
return self__.meta22944;
});})(mults,ensure_mult))
;

cljs.core.async.t22943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22945,meta22944__$1){
var self__ = this;
var _22945__$1 = this;
return (new cljs.core.async.t22943(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta22944__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t22943.cljs$lang$type = true;

cljs.core.async.t22943.cljs$lang$ctorStr = "cljs.core.async/t22943";

cljs.core.async.t22943.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4170__auto__,writer__4171__auto__,opt__4172__auto__){
return cljs.core._write(writer__4171__auto__,"cljs.core.async/t22943");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t22943 = ((function (mults,ensure_mult){
return (function __GT_t22943(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22944){
return (new cljs.core.async.t22943(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22944));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t22943(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11420__auto___23072 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11420__auto___23072,mults,ensure_mult,p){
return (function (){
var f__11421__auto__ = (function (){var switch__11340__auto__ = ((function (c__11420__auto___23072,mults,ensure_mult,p){
return (function (state_23021){
var state_val_23022 = (state_23021[(1)]);
if((state_val_23022 === (7))){
var inst_23017 = (state_23021[(2)]);
var state_23021__$1 = state_23021;
var statearr_23023_23073 = state_23021__$1;
(statearr_23023_23073[(2)] = inst_23017);

(statearr_23023_23073[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23022 === (20))){
var state_23021__$1 = state_23021;
var statearr_23024_23074 = state_23021__$1;
(statearr_23024_23074[(2)] = null);

(statearr_23024_23074[(1)] = (21));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23022 === (1))){
var state_23021__$1 = state_23021;
var statearr_23025_23075 = state_23021__$1;
(statearr_23025_23075[(2)] = null);

(statearr_23025_23075[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23022 === (24))){
var inst_23000 = (state_23021[(7)]);
var inst_23009 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_23000);
var state_23021__$1 = state_23021;
var statearr_23026_23076 = state_23021__$1;
(statearr_23026_23076[(2)] = inst_23009);

(statearr_23026_23076[(1)] = (25));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23022 === (4))){
var inst_22952 = (state_23021[(8)]);
var inst_22952__$1 = (state_23021[(2)]);
var inst_22953 = (inst_22952__$1 == null);
var state_23021__$1 = (function (){var statearr_23027 = state_23021;
(statearr_23027[(8)] = inst_22952__$1);

return statearr_23027;
})();
if(cljs.core.truth_(inst_22953)){
var statearr_23028_23077 = state_23021__$1;
(statearr_23028_23077[(1)] = (5));

} else {
var statearr_23029_23078 = state_23021__$1;
(statearr_23029_23078[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23022 === (15))){
var inst_22994 = (state_23021[(2)]);
var state_23021__$1 = state_23021;
var statearr_23030_23079 = state_23021__$1;
(statearr_23030_23079[(2)] = inst_22994);

(statearr_23030_23079[(1)] = (12));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23022 === (21))){
var inst_23014 = (state_23021[(2)]);
var state_23021__$1 = (function (){var statearr_23031 = state_23021;
(statearr_23031[(9)] = inst_23014);

return statearr_23031;
})();
var statearr_23032_23080 = state_23021__$1;
(statearr_23032_23080[(2)] = null);

(statearr_23032_23080[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23022 === (13))){
var inst_22976 = (state_23021[(10)]);
var inst_22978 = cljs.core.chunked_seq_QMARK_(inst_22976);
var state_23021__$1 = state_23021;
if(inst_22978){
var statearr_23033_23081 = state_23021__$1;
(statearr_23033_23081[(1)] = (16));

} else {
var statearr_23034_23082 = state_23021__$1;
(statearr_23034_23082[(1)] = (17));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23022 === (22))){
var inst_23006 = (state_23021[(2)]);
var state_23021__$1 = state_23021;
if(cljs.core.truth_(inst_23006)){
var statearr_23035_23083 = state_23021__$1;
(statearr_23035_23083[(1)] = (23));

} else {
var statearr_23036_23084 = state_23021__$1;
(statearr_23036_23084[(1)] = (24));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23022 === (6))){
var inst_23000 = (state_23021[(7)]);
var inst_22952 = (state_23021[(8)]);
var inst_23002 = (state_23021[(11)]);
var inst_23000__$1 = (function (){var G__23037 = inst_22952;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__23037) : topic_fn.call(null,G__23037));
})();
var inst_23001 = (function (){var G__23038 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23038) : cljs.core.deref.call(null,G__23038));
})();
var inst_23002__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23001,inst_23000__$1);
var state_23021__$1 = (function (){var statearr_23039 = state_23021;
(statearr_23039[(7)] = inst_23000__$1);

(statearr_23039[(11)] = inst_23002__$1);

return statearr_23039;
})();
if(cljs.core.truth_(inst_23002__$1)){
var statearr_23040_23085 = state_23021__$1;
(statearr_23040_23085[(1)] = (19));

} else {
var statearr_23041_23086 = state_23021__$1;
(statearr_23041_23086[(1)] = (20));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23022 === (25))){
var inst_23011 = (state_23021[(2)]);
var state_23021__$1 = state_23021;
var statearr_23042_23087 = state_23021__$1;
(statearr_23042_23087[(2)] = inst_23011);

(statearr_23042_23087[(1)] = (21));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23022 === (17))){
var inst_22976 = (state_23021[(10)]);
var inst_22985 = cljs.core.first(inst_22976);
var inst_22986 = cljs.core.async.muxch_STAR_(inst_22985);
var inst_22987 = cljs.core.async.close_BANG_(inst_22986);
var inst_22988 = cljs.core.next(inst_22976);
var inst_22962 = inst_22988;
var inst_22963 = null;
var inst_22964 = (0);
var inst_22965 = (0);
var state_23021__$1 = (function (){var statearr_23043 = state_23021;
(statearr_23043[(12)] = inst_22965);

(statearr_23043[(13)] = inst_22963);

(statearr_23043[(14)] = inst_22987);

(statearr_23043[(15)] = inst_22962);

(statearr_23043[(16)] = inst_22964);

return statearr_23043;
})();
var statearr_23044_23088 = state_23021__$1;
(statearr_23044_23088[(2)] = null);

(statearr_23044_23088[(1)] = (8));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23022 === (3))){
var inst_23019 = (state_23021[(2)]);
var state_23021__$1 = state_23021;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23021__$1,inst_23019);
} else {
if((state_val_23022 === (12))){
var inst_22996 = (state_23021[(2)]);
var state_23021__$1 = state_23021;
var statearr_23045_23089 = state_23021__$1;
(statearr_23045_23089[(2)] = inst_22996);

(statearr_23045_23089[(1)] = (9));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23022 === (2))){
var state_23021__$1 = state_23021;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23021__$1,(4),ch);
} else {
if((state_val_23022 === (23))){
var state_23021__$1 = state_23021;
var statearr_23046_23090 = state_23021__$1;
(statearr_23046_23090[(2)] = null);

(statearr_23046_23090[(1)] = (25));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23022 === (19))){
var inst_22952 = (state_23021[(8)]);
var inst_23002 = (state_23021[(11)]);
var inst_23004 = cljs.core.async.muxch_STAR_(inst_23002);
var state_23021__$1 = state_23021;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23021__$1,(22),inst_23004,inst_22952);
} else {
if((state_val_23022 === (11))){
var inst_22976 = (state_23021[(10)]);
var inst_22962 = (state_23021[(15)]);
var inst_22976__$1 = cljs.core.seq(inst_22962);
var state_23021__$1 = (function (){var statearr_23047 = state_23021;
(statearr_23047[(10)] = inst_22976__$1);

return statearr_23047;
})();
if(inst_22976__$1){
var statearr_23048_23091 = state_23021__$1;
(statearr_23048_23091[(1)] = (13));

} else {
var statearr_23049_23092 = state_23021__$1;
(statearr_23049_23092[(1)] = (14));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23022 === (9))){
var inst_22998 = (state_23021[(2)]);
var state_23021__$1 = state_23021;
var statearr_23050_23093 = state_23021__$1;
(statearr_23050_23093[(2)] = inst_22998);

(statearr_23050_23093[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23022 === (5))){
var inst_22959 = (function (){var G__23051 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23051) : cljs.core.deref.call(null,G__23051));
})();
var inst_22960 = cljs.core.vals(inst_22959);
var inst_22961 = cljs.core.seq(inst_22960);
var inst_22962 = inst_22961;
var inst_22963 = null;
var inst_22964 = (0);
var inst_22965 = (0);
var state_23021__$1 = (function (){var statearr_23052 = state_23021;
(statearr_23052[(12)] = inst_22965);

(statearr_23052[(13)] = inst_22963);

(statearr_23052[(15)] = inst_22962);

(statearr_23052[(16)] = inst_22964);

return statearr_23052;
})();
var statearr_23053_23094 = state_23021__$1;
(statearr_23053_23094[(2)] = null);

(statearr_23053_23094[(1)] = (8));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23022 === (14))){
var state_23021__$1 = state_23021;
var statearr_23057_23095 = state_23021__$1;
(statearr_23057_23095[(2)] = null);

(statearr_23057_23095[(1)] = (15));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23022 === (16))){
var inst_22976 = (state_23021[(10)]);
var inst_22980 = cljs.core.chunk_first(inst_22976);
var inst_22981 = cljs.core.chunk_rest(inst_22976);
var inst_22982 = cljs.core.count(inst_22980);
var inst_22962 = inst_22981;
var inst_22963 = inst_22980;
var inst_22964 = inst_22982;
var inst_22965 = (0);
var state_23021__$1 = (function (){var statearr_23058 = state_23021;
(statearr_23058[(12)] = inst_22965);

(statearr_23058[(13)] = inst_22963);

(statearr_23058[(15)] = inst_22962);

(statearr_23058[(16)] = inst_22964);

return statearr_23058;
})();
var statearr_23059_23096 = state_23021__$1;
(statearr_23059_23096[(2)] = null);

(statearr_23059_23096[(1)] = (8));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23022 === (10))){
var inst_22965 = (state_23021[(12)]);
var inst_22963 = (state_23021[(13)]);
var inst_22962 = (state_23021[(15)]);
var inst_22964 = (state_23021[(16)]);
var inst_22970 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_22963,inst_22965);
var inst_22971 = cljs.core.async.muxch_STAR_(inst_22970);
var inst_22972 = cljs.core.async.close_BANG_(inst_22971);
var inst_22973 = (inst_22965 + (1));
var tmp23054 = inst_22963;
var tmp23055 = inst_22962;
var tmp23056 = inst_22964;
var inst_22962__$1 = tmp23055;
var inst_22963__$1 = tmp23054;
var inst_22964__$1 = tmp23056;
var inst_22965__$1 = inst_22973;
var state_23021__$1 = (function (){var statearr_23060 = state_23021;
(statearr_23060[(12)] = inst_22965__$1);

(statearr_23060[(13)] = inst_22963__$1);

(statearr_23060[(17)] = inst_22972);

(statearr_23060[(15)] = inst_22962__$1);

(statearr_23060[(16)] = inst_22964__$1);

return statearr_23060;
})();
var statearr_23061_23097 = state_23021__$1;
(statearr_23061_23097[(2)] = null);

(statearr_23061_23097[(1)] = (8));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23022 === (18))){
var inst_22991 = (state_23021[(2)]);
var state_23021__$1 = state_23021;
var statearr_23062_23098 = state_23021__$1;
(statearr_23062_23098[(2)] = inst_22991);

(statearr_23062_23098[(1)] = (15));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23022 === (8))){
var inst_22965 = (state_23021[(12)]);
var inst_22964 = (state_23021[(16)]);
var inst_22967 = (inst_22965 < inst_22964);
var inst_22968 = inst_22967;
var state_23021__$1 = state_23021;
if(cljs.core.truth_(inst_22968)){
var statearr_23063_23099 = state_23021__$1;
(statearr_23063_23099[(1)] = (10));

} else {
var statearr_23064_23100 = state_23021__$1;
(statearr_23064_23100[(1)] = (11));

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
});})(c__11420__auto___23072,mults,ensure_mult,p))
;
return ((function (switch__11340__auto__,c__11420__auto___23072,mults,ensure_mult,p){
return (function() {
var state_machine__11341__auto__ = null;
var state_machine__11341__auto____0 = (function (){
var statearr_23068 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23068[(0)] = state_machine__11341__auto__);

(statearr_23068[(1)] = (1));

return statearr_23068;
});
var state_machine__11341__auto____1 = (function (state_23021){
while(true){
var ret_value__11342__auto__ = (function (){try{while(true){
var result__11343__auto__ = switch__11340__auto__(state_23021);
if(cljs.core.keyword_identical_QMARK_(result__11343__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11343__auto__;
}
break;
}
}catch (e23069){if((e23069 instanceof Object)){
var ex__11344__auto__ = e23069;
var statearr_23070_23101 = state_23021;
(statearr_23070_23101[(5)] = ex__11344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23021);

return cljs.core.constant$keyword$40;
} else {
throw e23069;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11342__auto__,cljs.core.constant$keyword$40)){
var G__23102 = state_23021;
state_23021 = G__23102;
continue;
} else {
return ret_value__11342__auto__;
}
break;
}
});
state_machine__11341__auto__ = function(state_23021){
switch(arguments.length){
case 0:
return state_machine__11341__auto____0.call(this);
case 1:
return state_machine__11341__auto____1.call(this,state_23021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11341__auto____0;
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11341__auto____1;
return state_machine__11341__auto__;
})()
;})(switch__11340__auto__,c__11420__auto___23072,mults,ensure_mult,p))
})();
var state__11422__auto__ = (function (){var statearr_23071 = (function (){return (f__11421__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11421__auto__.cljs$core$IFn$_invoke$arity$0() : f__11421__auto__.call(null));
})();
(statearr_23071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11420__auto___23072);

return statearr_23071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11422__auto__);
});})(c__11420__auto___23072,mults,ensure_mult,p))
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
var dctr = (function (){var G__23183 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23183) : cljs.core.atom.call(null,G__23183));
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
var c__11420__auto___23256 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11420__auto___23256,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__11421__auto__ = (function (){var switch__11340__auto__ = ((function (c__11420__auto___23256,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23222){
var state_val_23223 = (state_23222[(1)]);
if((state_val_23223 === (7))){
var state_23222__$1 = state_23222;
var statearr_23224_23257 = state_23222__$1;
(statearr_23224_23257[(2)] = null);

(statearr_23224_23257[(1)] = (8));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23223 === (1))){
var state_23222__$1 = state_23222;
var statearr_23225_23258 = state_23222__$1;
(statearr_23225_23258[(2)] = null);

(statearr_23225_23258[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23223 === (4))){
var inst_23186 = (state_23222[(7)]);
var inst_23188 = (inst_23186 < cnt);
var state_23222__$1 = state_23222;
if(cljs.core.truth_(inst_23188)){
var statearr_23226_23259 = state_23222__$1;
(statearr_23226_23259[(1)] = (6));

} else {
var statearr_23227_23260 = state_23222__$1;
(statearr_23227_23260[(1)] = (7));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23223 === (15))){
var inst_23218 = (state_23222[(2)]);
var state_23222__$1 = state_23222;
var statearr_23228_23261 = state_23222__$1;
(statearr_23228_23261[(2)] = inst_23218);

(statearr_23228_23261[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23223 === (13))){
var inst_23211 = cljs.core.async.close_BANG_(out);
var state_23222__$1 = state_23222;
var statearr_23229_23262 = state_23222__$1;
(statearr_23229_23262[(2)] = inst_23211);

(statearr_23229_23262[(1)] = (15));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23223 === (6))){
var state_23222__$1 = state_23222;
var statearr_23230_23263 = state_23222__$1;
(statearr_23230_23263[(2)] = null);

(statearr_23230_23263[(1)] = (11));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23223 === (3))){
var inst_23220 = (state_23222[(2)]);
var state_23222__$1 = state_23222;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23222__$1,inst_23220);
} else {
if((state_val_23223 === (12))){
var inst_23208 = (state_23222[(8)]);
var inst_23208__$1 = (state_23222[(2)]);
var inst_23209 = cljs.core.some(cljs.core.nil_QMARK_,inst_23208__$1);
var state_23222__$1 = (function (){var statearr_23231 = state_23222;
(statearr_23231[(8)] = inst_23208__$1);

return statearr_23231;
})();
if(cljs.core.truth_(inst_23209)){
var statearr_23232_23264 = state_23222__$1;
(statearr_23232_23264[(1)] = (13));

} else {
var statearr_23233_23265 = state_23222__$1;
(statearr_23233_23265[(1)] = (14));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23223 === (2))){
var inst_23185 = (function (){var G__23234 = dctr;
var G__23235 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23234,G__23235) : cljs.core.reset_BANG_.call(null,G__23234,G__23235));
})();
var inst_23186 = (0);
var state_23222__$1 = (function (){var statearr_23236 = state_23222;
(statearr_23236[(7)] = inst_23186);

(statearr_23236[(9)] = inst_23185);

return statearr_23236;
})();
var statearr_23237_23266 = state_23222__$1;
(statearr_23237_23266[(2)] = null);

(statearr_23237_23266[(1)] = (4));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23223 === (11))){
var inst_23186 = (state_23222[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_23222,(10),Object,null,(9));
var inst_23195 = (function (){var G__23238 = inst_23186;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__23238) : chs__$1.call(null,G__23238));
})();
var inst_23196 = (function (){var G__23239 = inst_23186;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__23239) : done.call(null,G__23239));
})();
var inst_23197 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_23195,inst_23196);
var state_23222__$1 = state_23222;
var statearr_23240_23267 = state_23222__$1;
(statearr_23240_23267[(2)] = inst_23197);


cljs.core.async.impl.ioc_helpers.process_exception(state_23222__$1);

return cljs.core.constant$keyword$40;
} else {
if((state_val_23223 === (9))){
var inst_23186 = (state_23222[(7)]);
var inst_23199 = (state_23222[(2)]);
var inst_23200 = (inst_23186 + (1));
var inst_23186__$1 = inst_23200;
var state_23222__$1 = (function (){var statearr_23241 = state_23222;
(statearr_23241[(10)] = inst_23199);

(statearr_23241[(7)] = inst_23186__$1);

return statearr_23241;
})();
var statearr_23242_23268 = state_23222__$1;
(statearr_23242_23268[(2)] = null);

(statearr_23242_23268[(1)] = (4));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23223 === (5))){
var inst_23206 = (state_23222[(2)]);
var state_23222__$1 = (function (){var statearr_23243 = state_23222;
(statearr_23243[(11)] = inst_23206);

return statearr_23243;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23222__$1,(12),dchan);
} else {
if((state_val_23223 === (14))){
var inst_23208 = (state_23222[(8)]);
var inst_23213 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_23208);
var state_23222__$1 = state_23222;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23222__$1,(16),out,inst_23213);
} else {
if((state_val_23223 === (16))){
var inst_23215 = (state_23222[(2)]);
var state_23222__$1 = (function (){var statearr_23244 = state_23222;
(statearr_23244[(12)] = inst_23215);

return statearr_23244;
})();
var statearr_23245_23269 = state_23222__$1;
(statearr_23245_23269[(2)] = null);

(statearr_23245_23269[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23223 === (10))){
var inst_23190 = (state_23222[(2)]);
var inst_23191 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_23222__$1 = (function (){var statearr_23246 = state_23222;
(statearr_23246[(13)] = inst_23190);

return statearr_23246;
})();
var statearr_23247_23270 = state_23222__$1;
(statearr_23247_23270[(2)] = inst_23191);


cljs.core.async.impl.ioc_helpers.process_exception(state_23222__$1);

return cljs.core.constant$keyword$40;
} else {
if((state_val_23223 === (8))){
var inst_23204 = (state_23222[(2)]);
var state_23222__$1 = state_23222;
var statearr_23248_23271 = state_23222__$1;
(statearr_23248_23271[(2)] = inst_23204);

(statearr_23248_23271[(1)] = (5));


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
});})(c__11420__auto___23256,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__11340__auto__,c__11420__auto___23256,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__11341__auto__ = null;
var state_machine__11341__auto____0 = (function (){
var statearr_23252 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23252[(0)] = state_machine__11341__auto__);

(statearr_23252[(1)] = (1));

return statearr_23252;
});
var state_machine__11341__auto____1 = (function (state_23222){
while(true){
var ret_value__11342__auto__ = (function (){try{while(true){
var result__11343__auto__ = switch__11340__auto__(state_23222);
if(cljs.core.keyword_identical_QMARK_(result__11343__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11343__auto__;
}
break;
}
}catch (e23253){if((e23253 instanceof Object)){
var ex__11344__auto__ = e23253;
var statearr_23254_23272 = state_23222;
(statearr_23254_23272[(5)] = ex__11344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23222);

return cljs.core.constant$keyword$40;
} else {
throw e23253;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11342__auto__,cljs.core.constant$keyword$40)){
var G__23273 = state_23222;
state_23222 = G__23273;
continue;
} else {
return ret_value__11342__auto__;
}
break;
}
});
state_machine__11341__auto__ = function(state_23222){
switch(arguments.length){
case 0:
return state_machine__11341__auto____0.call(this);
case 1:
return state_machine__11341__auto____1.call(this,state_23222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11341__auto____0;
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11341__auto____1;
return state_machine__11341__auto__;
})()
;})(switch__11340__auto__,c__11420__auto___23256,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__11422__auto__ = (function (){var statearr_23255 = (function (){return (f__11421__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11421__auto__.cljs$core$IFn$_invoke$arity$0() : f__11421__auto__.call(null));
})();
(statearr_23255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11420__auto___23256);

return statearr_23255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11422__auto__);
});})(c__11420__auto___23256,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__11420__auto___23383 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11420__auto___23383,out){
return (function (){
var f__11421__auto__ = (function (){var switch__11340__auto__ = ((function (c__11420__auto___23383,out){
return (function (state_23359){
var state_val_23360 = (state_23359[(1)]);
if((state_val_23360 === (7))){
var inst_23339 = (state_23359[(7)]);
var inst_23338 = (state_23359[(8)]);
var inst_23338__$1 = (state_23359[(2)]);
var inst_23339__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23338__$1,(0),null);
var inst_23340 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23338__$1,(1),null);
var inst_23341 = (inst_23339__$1 == null);
var state_23359__$1 = (function (){var statearr_23361 = state_23359;
(statearr_23361[(7)] = inst_23339__$1);

(statearr_23361[(8)] = inst_23338__$1);

(statearr_23361[(9)] = inst_23340);

return statearr_23361;
})();
if(cljs.core.truth_(inst_23341)){
var statearr_23362_23384 = state_23359__$1;
(statearr_23362_23384[(1)] = (8));

} else {
var statearr_23363_23385 = state_23359__$1;
(statearr_23363_23385[(1)] = (9));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23360 === (1))){
var inst_23330 = cljs.core.vec(chs);
var inst_23331 = inst_23330;
var state_23359__$1 = (function (){var statearr_23364 = state_23359;
(statearr_23364[(10)] = inst_23331);

return statearr_23364;
})();
var statearr_23365_23386 = state_23359__$1;
(statearr_23365_23386[(2)] = null);

(statearr_23365_23386[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23360 === (4))){
var inst_23331 = (state_23359[(10)]);
var state_23359__$1 = state_23359;
return cljs.core.async.ioc_alts_BANG_(state_23359__$1,(7),inst_23331);
} else {
if((state_val_23360 === (6))){
var inst_23355 = (state_23359[(2)]);
var state_23359__$1 = state_23359;
var statearr_23366_23387 = state_23359__$1;
(statearr_23366_23387[(2)] = inst_23355);

(statearr_23366_23387[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23360 === (3))){
var inst_23357 = (state_23359[(2)]);
var state_23359__$1 = state_23359;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23359__$1,inst_23357);
} else {
if((state_val_23360 === (2))){
var inst_23331 = (state_23359[(10)]);
var inst_23333 = cljs.core.count(inst_23331);
var inst_23334 = (inst_23333 > (0));
var state_23359__$1 = state_23359;
if(cljs.core.truth_(inst_23334)){
var statearr_23368_23388 = state_23359__$1;
(statearr_23368_23388[(1)] = (4));

} else {
var statearr_23369_23389 = state_23359__$1;
(statearr_23369_23389[(1)] = (5));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23360 === (11))){
var inst_23331 = (state_23359[(10)]);
var inst_23348 = (state_23359[(2)]);
var tmp23367 = inst_23331;
var inst_23331__$1 = tmp23367;
var state_23359__$1 = (function (){var statearr_23370 = state_23359;
(statearr_23370[(11)] = inst_23348);

(statearr_23370[(10)] = inst_23331__$1);

return statearr_23370;
})();
var statearr_23371_23390 = state_23359__$1;
(statearr_23371_23390[(2)] = null);

(statearr_23371_23390[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23360 === (9))){
var inst_23339 = (state_23359[(7)]);
var state_23359__$1 = state_23359;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23359__$1,(11),out,inst_23339);
} else {
if((state_val_23360 === (5))){
var inst_23353 = cljs.core.async.close_BANG_(out);
var state_23359__$1 = state_23359;
var statearr_23372_23391 = state_23359__$1;
(statearr_23372_23391[(2)] = inst_23353);

(statearr_23372_23391[(1)] = (6));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23360 === (10))){
var inst_23351 = (state_23359[(2)]);
var state_23359__$1 = state_23359;
var statearr_23373_23392 = state_23359__$1;
(statearr_23373_23392[(2)] = inst_23351);

(statearr_23373_23392[(1)] = (6));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23360 === (8))){
var inst_23339 = (state_23359[(7)]);
var inst_23331 = (state_23359[(10)]);
var inst_23338 = (state_23359[(8)]);
var inst_23340 = (state_23359[(9)]);
var inst_23343 = (function (){var c = inst_23340;
var v = inst_23339;
var vec__23336 = inst_23338;
var cs = inst_23331;
return ((function (c,v,vec__23336,cs,inst_23339,inst_23331,inst_23338,inst_23340,state_val_23360,c__11420__auto___23383,out){
return (function (p1__23274_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__23274_SHARP_);
});
;})(c,v,vec__23336,cs,inst_23339,inst_23331,inst_23338,inst_23340,state_val_23360,c__11420__auto___23383,out))
})();
var inst_23344 = cljs.core.filterv(inst_23343,inst_23331);
var inst_23331__$1 = inst_23344;
var state_23359__$1 = (function (){var statearr_23374 = state_23359;
(statearr_23374[(10)] = inst_23331__$1);

return statearr_23374;
})();
var statearr_23375_23393 = state_23359__$1;
(statearr_23375_23393[(2)] = null);

(statearr_23375_23393[(1)] = (2));


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
});})(c__11420__auto___23383,out))
;
return ((function (switch__11340__auto__,c__11420__auto___23383,out){
return (function() {
var state_machine__11341__auto__ = null;
var state_machine__11341__auto____0 = (function (){
var statearr_23379 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23379[(0)] = state_machine__11341__auto__);

(statearr_23379[(1)] = (1));

return statearr_23379;
});
var state_machine__11341__auto____1 = (function (state_23359){
while(true){
var ret_value__11342__auto__ = (function (){try{while(true){
var result__11343__auto__ = switch__11340__auto__(state_23359);
if(cljs.core.keyword_identical_QMARK_(result__11343__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11343__auto__;
}
break;
}
}catch (e23380){if((e23380 instanceof Object)){
var ex__11344__auto__ = e23380;
var statearr_23381_23394 = state_23359;
(statearr_23381_23394[(5)] = ex__11344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23359);

return cljs.core.constant$keyword$40;
} else {
throw e23380;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11342__auto__,cljs.core.constant$keyword$40)){
var G__23395 = state_23359;
state_23359 = G__23395;
continue;
} else {
return ret_value__11342__auto__;
}
break;
}
});
state_machine__11341__auto__ = function(state_23359){
switch(arguments.length){
case 0:
return state_machine__11341__auto____0.call(this);
case 1:
return state_machine__11341__auto____1.call(this,state_23359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11341__auto____0;
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11341__auto____1;
return state_machine__11341__auto__;
})()
;})(switch__11340__auto__,c__11420__auto___23383,out))
})();
var state__11422__auto__ = (function (){var statearr_23382 = (function (){return (f__11421__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11421__auto__.cljs$core$IFn$_invoke$arity$0() : f__11421__auto__.call(null));
})();
(statearr_23382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11420__auto___23383);

return statearr_23382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11422__auto__);
});})(c__11420__auto___23383,out))
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
var c__11420__auto___23491 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11420__auto___23491,out){
return (function (){
var f__11421__auto__ = (function (){var switch__11340__auto__ = ((function (c__11420__auto___23491,out){
return (function (state_23468){
var state_val_23469 = (state_23468[(1)]);
if((state_val_23469 === (7))){
var inst_23450 = (state_23468[(7)]);
var inst_23450__$1 = (state_23468[(2)]);
var inst_23451 = (inst_23450__$1 == null);
var inst_23452 = cljs.core.not(inst_23451);
var state_23468__$1 = (function (){var statearr_23470 = state_23468;
(statearr_23470[(7)] = inst_23450__$1);

return statearr_23470;
})();
if(inst_23452){
var statearr_23471_23492 = state_23468__$1;
(statearr_23471_23492[(1)] = (8));

} else {
var statearr_23472_23493 = state_23468__$1;
(statearr_23472_23493[(1)] = (9));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23469 === (1))){
var inst_23445 = (0);
var state_23468__$1 = (function (){var statearr_23473 = state_23468;
(statearr_23473[(8)] = inst_23445);

return statearr_23473;
})();
var statearr_23474_23494 = state_23468__$1;
(statearr_23474_23494[(2)] = null);

(statearr_23474_23494[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23469 === (4))){
var state_23468__$1 = state_23468;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23468__$1,(7),ch);
} else {
if((state_val_23469 === (6))){
var inst_23463 = (state_23468[(2)]);
var state_23468__$1 = state_23468;
var statearr_23475_23495 = state_23468__$1;
(statearr_23475_23495[(2)] = inst_23463);

(statearr_23475_23495[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23469 === (3))){
var inst_23465 = (state_23468[(2)]);
var inst_23466 = cljs.core.async.close_BANG_(out);
var state_23468__$1 = (function (){var statearr_23476 = state_23468;
(statearr_23476[(9)] = inst_23465);

return statearr_23476;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_23468__$1,inst_23466);
} else {
if((state_val_23469 === (2))){
var inst_23445 = (state_23468[(8)]);
var inst_23447 = (inst_23445 < n);
var state_23468__$1 = state_23468;
if(cljs.core.truth_(inst_23447)){
var statearr_23477_23496 = state_23468__$1;
(statearr_23477_23496[(1)] = (4));

} else {
var statearr_23478_23497 = state_23468__$1;
(statearr_23478_23497[(1)] = (5));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23469 === (11))){
var inst_23445 = (state_23468[(8)]);
var inst_23455 = (state_23468[(2)]);
var inst_23456 = (inst_23445 + (1));
var inst_23445__$1 = inst_23456;
var state_23468__$1 = (function (){var statearr_23479 = state_23468;
(statearr_23479[(8)] = inst_23445__$1);

(statearr_23479[(10)] = inst_23455);

return statearr_23479;
})();
var statearr_23480_23498 = state_23468__$1;
(statearr_23480_23498[(2)] = null);

(statearr_23480_23498[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23469 === (9))){
var state_23468__$1 = state_23468;
var statearr_23481_23499 = state_23468__$1;
(statearr_23481_23499[(2)] = null);

(statearr_23481_23499[(1)] = (10));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23469 === (5))){
var state_23468__$1 = state_23468;
var statearr_23482_23500 = state_23468__$1;
(statearr_23482_23500[(2)] = null);

(statearr_23482_23500[(1)] = (6));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23469 === (10))){
var inst_23460 = (state_23468[(2)]);
var state_23468__$1 = state_23468;
var statearr_23483_23501 = state_23468__$1;
(statearr_23483_23501[(2)] = inst_23460);

(statearr_23483_23501[(1)] = (6));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23469 === (8))){
var inst_23450 = (state_23468[(7)]);
var state_23468__$1 = state_23468;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23468__$1,(11),out,inst_23450);
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
});})(c__11420__auto___23491,out))
;
return ((function (switch__11340__auto__,c__11420__auto___23491,out){
return (function() {
var state_machine__11341__auto__ = null;
var state_machine__11341__auto____0 = (function (){
var statearr_23487 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23487[(0)] = state_machine__11341__auto__);

(statearr_23487[(1)] = (1));

return statearr_23487;
});
var state_machine__11341__auto____1 = (function (state_23468){
while(true){
var ret_value__11342__auto__ = (function (){try{while(true){
var result__11343__auto__ = switch__11340__auto__(state_23468);
if(cljs.core.keyword_identical_QMARK_(result__11343__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11343__auto__;
}
break;
}
}catch (e23488){if((e23488 instanceof Object)){
var ex__11344__auto__ = e23488;
var statearr_23489_23502 = state_23468;
(statearr_23489_23502[(5)] = ex__11344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23468);

return cljs.core.constant$keyword$40;
} else {
throw e23488;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11342__auto__,cljs.core.constant$keyword$40)){
var G__23503 = state_23468;
state_23468 = G__23503;
continue;
} else {
return ret_value__11342__auto__;
}
break;
}
});
state_machine__11341__auto__ = function(state_23468){
switch(arguments.length){
case 0:
return state_machine__11341__auto____0.call(this);
case 1:
return state_machine__11341__auto____1.call(this,state_23468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11341__auto____0;
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11341__auto____1;
return state_machine__11341__auto__;
})()
;})(switch__11340__auto__,c__11420__auto___23491,out))
})();
var state__11422__auto__ = (function (){var statearr_23490 = (function (){return (f__11421__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11421__auto__.cljs$core$IFn$_invoke$arity$0() : f__11421__auto__.call(null));
})();
(statearr_23490[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11420__auto___23491);

return statearr_23490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11422__auto__);
});})(c__11420__auto___23491,out))
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
if(typeof cljs.core.async.t23516 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23516 = (function (ch,f,map_LT_,meta23517){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23517 = meta23517;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23516.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t23516.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t23516.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t23516.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t23519 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23519 = (function (fn1,_,meta23517,map_LT_,f,ch,meta23520){
this.fn1 = fn1;
this._ = _;
this.meta23517 = meta23517;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23520 = meta23520;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23519.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t23519.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t23519.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__23504_SHARP_){
var G__23522 = (((p1__23504_SHARP_ == null))?null:(function (){var G__23523 = p1__23504_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__23523) : self__.f.call(null,G__23523));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__23522) : f1.call(null,G__23522));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t23519.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23521){
var self__ = this;
var _23521__$1 = this;
return self__.meta23520;
});})(___$1))
;

cljs.core.async.t23519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23521,meta23520__$1){
var self__ = this;
var _23521__$1 = this;
return (new cljs.core.async.t23519(self__.fn1,self__._,self__.meta23517,self__.map_LT_,self__.f,self__.ch,meta23520__$1));
});})(___$1))
;

cljs.core.async.t23519.cljs$lang$type = true;

cljs.core.async.t23519.cljs$lang$ctorStr = "cljs.core.async/t23519";

cljs.core.async.t23519.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4170__auto__,writer__4171__auto__,opt__4172__auto__){
return cljs.core._write(writer__4171__auto__,"cljs.core.async/t23519");
});})(___$1))
;

cljs.core.async.__GT_t23519 = ((function (___$1){
return (function __GT_t23519(fn1__$1,___$2,meta23517__$1,map_LT___$1,f__$1,ch__$1,meta23520){
return (new cljs.core.async.t23519(fn1__$1,___$2,meta23517__$1,map_LT___$1,f__$1,ch__$1,meta23520));
});})(___$1))
;

}

return (new cljs.core.async.t23519(fn1,___$1,self__.meta23517,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3571__auto__ = ret;
if(cljs.core.truth_(and__3571__auto__)){
return !(((function (){var G__23524 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23524) : cljs.core.deref.call(null,G__23524));
})() == null));
} else {
return and__3571__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__23525 = (function (){var G__23526 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23526) : cljs.core.deref.call(null,G__23526));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__23525) : self__.f.call(null,G__23525));
})());
} else {
return ret;
}
});

cljs.core.async.t23516.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t23516.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t23516.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t23516.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23518){
var self__ = this;
var _23518__$1 = this;
return self__.meta23517;
});

cljs.core.async.t23516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23518,meta23517__$1){
var self__ = this;
var _23518__$1 = this;
return (new cljs.core.async.t23516(self__.ch,self__.f,self__.map_LT_,meta23517__$1));
});

cljs.core.async.t23516.cljs$lang$type = true;

cljs.core.async.t23516.cljs$lang$ctorStr = "cljs.core.async/t23516";

cljs.core.async.t23516.cljs$lang$ctorPrWriter = (function (this__4170__auto__,writer__4171__auto__,opt__4172__auto__){
return cljs.core._write(writer__4171__auto__,"cljs.core.async/t23516");
});

cljs.core.async.__GT_t23516 = (function __GT_t23516(ch__$1,f__$1,map_LT___$1,meta23517){
return (new cljs.core.async.t23516(ch__$1,f__$1,map_LT___$1,meta23517));
});

}

return (new cljs.core.async.t23516(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t23531 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23531 = (function (ch,f,map_GT_,meta23532){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta23532 = meta23532;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23531.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t23531.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__23534 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__23534) : self__.f.call(null,G__23534));
})(),fn1);
});

cljs.core.async.t23531.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t23531.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t23531.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t23531.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t23531.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23533){
var self__ = this;
var _23533__$1 = this;
return self__.meta23532;
});

cljs.core.async.t23531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23533,meta23532__$1){
var self__ = this;
var _23533__$1 = this;
return (new cljs.core.async.t23531(self__.ch,self__.f,self__.map_GT_,meta23532__$1));
});

cljs.core.async.t23531.cljs$lang$type = true;

cljs.core.async.t23531.cljs$lang$ctorStr = "cljs.core.async/t23531";

cljs.core.async.t23531.cljs$lang$ctorPrWriter = (function (this__4170__auto__,writer__4171__auto__,opt__4172__auto__){
return cljs.core._write(writer__4171__auto__,"cljs.core.async/t23531");
});

cljs.core.async.__GT_t23531 = (function __GT_t23531(ch__$1,f__$1,map_GT___$1,meta23532){
return (new cljs.core.async.t23531(ch__$1,f__$1,map_GT___$1,meta23532));
});

}

return (new cljs.core.async.t23531(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t23539 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23539 = (function (ch,p,filter_GT_,meta23540){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta23540 = meta23540;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23539.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t23539.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__23542 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__23542) : self__.p.call(null,G__23542));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t23539.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t23539.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t23539.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t23539.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t23539.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t23539.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23541){
var self__ = this;
var _23541__$1 = this;
return self__.meta23540;
});

cljs.core.async.t23539.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23541,meta23540__$1){
var self__ = this;
var _23541__$1 = this;
return (new cljs.core.async.t23539(self__.ch,self__.p,self__.filter_GT_,meta23540__$1));
});

cljs.core.async.t23539.cljs$lang$type = true;

cljs.core.async.t23539.cljs$lang$ctorStr = "cljs.core.async/t23539";

cljs.core.async.t23539.cljs$lang$ctorPrWriter = (function (this__4170__auto__,writer__4171__auto__,opt__4172__auto__){
return cljs.core._write(writer__4171__auto__,"cljs.core.async/t23539");
});

cljs.core.async.__GT_t23539 = (function __GT_t23539(ch__$1,p__$1,filter_GT___$1,meta23540){
return (new cljs.core.async.t23539(ch__$1,p__$1,filter_GT___$1,meta23540));
});

}

return (new cljs.core.async.t23539(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var c__11420__auto___23630 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11420__auto___23630,out){
return (function (){
var f__11421__auto__ = (function (){var switch__11340__auto__ = ((function (c__11420__auto___23630,out){
return (function (state_23608){
var state_val_23609 = (state_23608[(1)]);
if((state_val_23609 === (7))){
var inst_23604 = (state_23608[(2)]);
var state_23608__$1 = state_23608;
var statearr_23610_23631 = state_23608__$1;
(statearr_23610_23631[(2)] = inst_23604);

(statearr_23610_23631[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23609 === (1))){
var state_23608__$1 = state_23608;
var statearr_23611_23632 = state_23608__$1;
(statearr_23611_23632[(2)] = null);

(statearr_23611_23632[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23609 === (4))){
var inst_23590 = (state_23608[(7)]);
var inst_23590__$1 = (state_23608[(2)]);
var inst_23591 = (inst_23590__$1 == null);
var state_23608__$1 = (function (){var statearr_23612 = state_23608;
(statearr_23612[(7)] = inst_23590__$1);

return statearr_23612;
})();
if(cljs.core.truth_(inst_23591)){
var statearr_23613_23633 = state_23608__$1;
(statearr_23613_23633[(1)] = (5));

} else {
var statearr_23614_23634 = state_23608__$1;
(statearr_23614_23634[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23609 === (6))){
var inst_23590 = (state_23608[(7)]);
var inst_23595 = (function (){var G__23615 = inst_23590;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__23615) : p.call(null,G__23615));
})();
var state_23608__$1 = state_23608;
if(cljs.core.truth_(inst_23595)){
var statearr_23616_23635 = state_23608__$1;
(statearr_23616_23635[(1)] = (8));

} else {
var statearr_23617_23636 = state_23608__$1;
(statearr_23617_23636[(1)] = (9));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23609 === (3))){
var inst_23606 = (state_23608[(2)]);
var state_23608__$1 = state_23608;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23608__$1,inst_23606);
} else {
if((state_val_23609 === (2))){
var state_23608__$1 = state_23608;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23608__$1,(4),ch);
} else {
if((state_val_23609 === (11))){
var inst_23598 = (state_23608[(2)]);
var state_23608__$1 = state_23608;
var statearr_23618_23637 = state_23608__$1;
(statearr_23618_23637[(2)] = inst_23598);

(statearr_23618_23637[(1)] = (10));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23609 === (9))){
var state_23608__$1 = state_23608;
var statearr_23619_23638 = state_23608__$1;
(statearr_23619_23638[(2)] = null);

(statearr_23619_23638[(1)] = (10));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23609 === (5))){
var inst_23593 = cljs.core.async.close_BANG_(out);
var state_23608__$1 = state_23608;
var statearr_23620_23639 = state_23608__$1;
(statearr_23620_23639[(2)] = inst_23593);

(statearr_23620_23639[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23609 === (10))){
var inst_23601 = (state_23608[(2)]);
var state_23608__$1 = (function (){var statearr_23621 = state_23608;
(statearr_23621[(8)] = inst_23601);

return statearr_23621;
})();
var statearr_23622_23640 = state_23608__$1;
(statearr_23622_23640[(2)] = null);

(statearr_23622_23640[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23609 === (8))){
var inst_23590 = (state_23608[(7)]);
var state_23608__$1 = state_23608;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23608__$1,(11),out,inst_23590);
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
});})(c__11420__auto___23630,out))
;
return ((function (switch__11340__auto__,c__11420__auto___23630,out){
return (function() {
var state_machine__11341__auto__ = null;
var state_machine__11341__auto____0 = (function (){
var statearr_23626 = [null,null,null,null,null,null,null,null,null];
(statearr_23626[(0)] = state_machine__11341__auto__);

(statearr_23626[(1)] = (1));

return statearr_23626;
});
var state_machine__11341__auto____1 = (function (state_23608){
while(true){
var ret_value__11342__auto__ = (function (){try{while(true){
var result__11343__auto__ = switch__11340__auto__(state_23608);
if(cljs.core.keyword_identical_QMARK_(result__11343__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11343__auto__;
}
break;
}
}catch (e23627){if((e23627 instanceof Object)){
var ex__11344__auto__ = e23627;
var statearr_23628_23641 = state_23608;
(statearr_23628_23641[(5)] = ex__11344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23608);

return cljs.core.constant$keyword$40;
} else {
throw e23627;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11342__auto__,cljs.core.constant$keyword$40)){
var G__23642 = state_23608;
state_23608 = G__23642;
continue;
} else {
return ret_value__11342__auto__;
}
break;
}
});
state_machine__11341__auto__ = function(state_23608){
switch(arguments.length){
case 0:
return state_machine__11341__auto____0.call(this);
case 1:
return state_machine__11341__auto____1.call(this,state_23608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11341__auto____0;
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11341__auto____1;
return state_machine__11341__auto__;
})()
;})(switch__11340__auto__,c__11420__auto___23630,out))
})();
var state__11422__auto__ = (function (){var statearr_23629 = (function (){return (f__11421__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11421__auto__.cljs$core$IFn$_invoke$arity$0() : f__11421__auto__.call(null));
})();
(statearr_23629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11420__auto___23630);

return statearr_23629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11422__auto__);
});})(c__11420__auto___23630,out))
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
var c__11420__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11420__auto__){
return (function (){
var f__11421__auto__ = (function (){var switch__11340__auto__ = ((function (c__11420__auto__){
return (function (state_23812){
var state_val_23813 = (state_23812[(1)]);
if((state_val_23813 === (7))){
var inst_23808 = (state_23812[(2)]);
var state_23812__$1 = state_23812;
var statearr_23814_23856 = state_23812__$1;
(statearr_23814_23856[(2)] = inst_23808);

(statearr_23814_23856[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23813 === (20))){
var inst_23778 = (state_23812[(7)]);
var inst_23789 = (state_23812[(2)]);
var inst_23790 = cljs.core.next(inst_23778);
var inst_23764 = inst_23790;
var inst_23765 = null;
var inst_23766 = (0);
var inst_23767 = (0);
var state_23812__$1 = (function (){var statearr_23815 = state_23812;
(statearr_23815[(8)] = inst_23766);

(statearr_23815[(9)] = inst_23767);

(statearr_23815[(10)] = inst_23789);

(statearr_23815[(11)] = inst_23765);

(statearr_23815[(12)] = inst_23764);

return statearr_23815;
})();
var statearr_23816_23857 = state_23812__$1;
(statearr_23816_23857[(2)] = null);

(statearr_23816_23857[(1)] = (8));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23813 === (1))){
var state_23812__$1 = state_23812;
var statearr_23817_23858 = state_23812__$1;
(statearr_23817_23858[(2)] = null);

(statearr_23817_23858[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23813 === (4))){
var inst_23753 = (state_23812[(13)]);
var inst_23753__$1 = (state_23812[(2)]);
var inst_23754 = (inst_23753__$1 == null);
var state_23812__$1 = (function (){var statearr_23818 = state_23812;
(statearr_23818[(13)] = inst_23753__$1);

return statearr_23818;
})();
if(cljs.core.truth_(inst_23754)){
var statearr_23819_23859 = state_23812__$1;
(statearr_23819_23859[(1)] = (5));

} else {
var statearr_23820_23860 = state_23812__$1;
(statearr_23820_23860[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23813 === (15))){
var state_23812__$1 = state_23812;
var statearr_23824_23861 = state_23812__$1;
(statearr_23824_23861[(2)] = null);

(statearr_23824_23861[(1)] = (16));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23813 === (21))){
var state_23812__$1 = state_23812;
var statearr_23825_23862 = state_23812__$1;
(statearr_23825_23862[(2)] = null);

(statearr_23825_23862[(1)] = (23));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23813 === (13))){
var inst_23766 = (state_23812[(8)]);
var inst_23767 = (state_23812[(9)]);
var inst_23765 = (state_23812[(11)]);
var inst_23764 = (state_23812[(12)]);
var inst_23774 = (state_23812[(2)]);
var inst_23775 = (inst_23767 + (1));
var tmp23821 = inst_23766;
var tmp23822 = inst_23765;
var tmp23823 = inst_23764;
var inst_23764__$1 = tmp23823;
var inst_23765__$1 = tmp23822;
var inst_23766__$1 = tmp23821;
var inst_23767__$1 = inst_23775;
var state_23812__$1 = (function (){var statearr_23826 = state_23812;
(statearr_23826[(8)] = inst_23766__$1);

(statearr_23826[(9)] = inst_23767__$1);

(statearr_23826[(11)] = inst_23765__$1);

(statearr_23826[(14)] = inst_23774);

(statearr_23826[(12)] = inst_23764__$1);

return statearr_23826;
})();
var statearr_23827_23863 = state_23812__$1;
(statearr_23827_23863[(2)] = null);

(statearr_23827_23863[(1)] = (8));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23813 === (22))){
var state_23812__$1 = state_23812;
var statearr_23828_23864 = state_23812__$1;
(statearr_23828_23864[(2)] = null);

(statearr_23828_23864[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23813 === (6))){
var inst_23753 = (state_23812[(13)]);
var inst_23762 = (function (){var G__23829 = inst_23753;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23829) : f.call(null,G__23829));
})();
var inst_23763 = cljs.core.seq(inst_23762);
var inst_23764 = inst_23763;
var inst_23765 = null;
var inst_23766 = (0);
var inst_23767 = (0);
var state_23812__$1 = (function (){var statearr_23830 = state_23812;
(statearr_23830[(8)] = inst_23766);

(statearr_23830[(9)] = inst_23767);

(statearr_23830[(11)] = inst_23765);

(statearr_23830[(12)] = inst_23764);

return statearr_23830;
})();
var statearr_23831_23865 = state_23812__$1;
(statearr_23831_23865[(2)] = null);

(statearr_23831_23865[(1)] = (8));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23813 === (17))){
var inst_23778 = (state_23812[(7)]);
var inst_23782 = cljs.core.chunk_first(inst_23778);
var inst_23783 = cljs.core.chunk_rest(inst_23778);
var inst_23784 = cljs.core.count(inst_23782);
var inst_23764 = inst_23783;
var inst_23765 = inst_23782;
var inst_23766 = inst_23784;
var inst_23767 = (0);
var state_23812__$1 = (function (){var statearr_23832 = state_23812;
(statearr_23832[(8)] = inst_23766);

(statearr_23832[(9)] = inst_23767);

(statearr_23832[(11)] = inst_23765);

(statearr_23832[(12)] = inst_23764);

return statearr_23832;
})();
var statearr_23833_23866 = state_23812__$1;
(statearr_23833_23866[(2)] = null);

(statearr_23833_23866[(1)] = (8));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23813 === (3))){
var inst_23810 = (state_23812[(2)]);
var state_23812__$1 = state_23812;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23812__$1,inst_23810);
} else {
if((state_val_23813 === (12))){
var inst_23798 = (state_23812[(2)]);
var state_23812__$1 = state_23812;
var statearr_23834_23867 = state_23812__$1;
(statearr_23834_23867[(2)] = inst_23798);

(statearr_23834_23867[(1)] = (9));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23813 === (2))){
var state_23812__$1 = state_23812;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23812__$1,(4),in$);
} else {
if((state_val_23813 === (23))){
var inst_23806 = (state_23812[(2)]);
var state_23812__$1 = state_23812;
var statearr_23835_23868 = state_23812__$1;
(statearr_23835_23868[(2)] = inst_23806);

(statearr_23835_23868[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23813 === (19))){
var inst_23793 = (state_23812[(2)]);
var state_23812__$1 = state_23812;
var statearr_23836_23869 = state_23812__$1;
(statearr_23836_23869[(2)] = inst_23793);

(statearr_23836_23869[(1)] = (16));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23813 === (11))){
var inst_23778 = (state_23812[(7)]);
var inst_23764 = (state_23812[(12)]);
var inst_23778__$1 = cljs.core.seq(inst_23764);
var state_23812__$1 = (function (){var statearr_23837 = state_23812;
(statearr_23837[(7)] = inst_23778__$1);

return statearr_23837;
})();
if(inst_23778__$1){
var statearr_23838_23870 = state_23812__$1;
(statearr_23838_23870[(1)] = (14));

} else {
var statearr_23839_23871 = state_23812__$1;
(statearr_23839_23871[(1)] = (15));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23813 === (9))){
var inst_23800 = (state_23812[(2)]);
var inst_23801 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_23812__$1 = (function (){var statearr_23840 = state_23812;
(statearr_23840[(15)] = inst_23800);

return statearr_23840;
})();
if(cljs.core.truth_(inst_23801)){
var statearr_23841_23872 = state_23812__$1;
(statearr_23841_23872[(1)] = (21));

} else {
var statearr_23842_23873 = state_23812__$1;
(statearr_23842_23873[(1)] = (22));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23813 === (5))){
var inst_23756 = cljs.core.async.close_BANG_(out);
var state_23812__$1 = state_23812;
var statearr_23843_23874 = state_23812__$1;
(statearr_23843_23874[(2)] = inst_23756);

(statearr_23843_23874[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23813 === (14))){
var inst_23778 = (state_23812[(7)]);
var inst_23780 = cljs.core.chunked_seq_QMARK_(inst_23778);
var state_23812__$1 = state_23812;
if(inst_23780){
var statearr_23844_23875 = state_23812__$1;
(statearr_23844_23875[(1)] = (17));

} else {
var statearr_23845_23876 = state_23812__$1;
(statearr_23845_23876[(1)] = (18));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23813 === (16))){
var inst_23796 = (state_23812[(2)]);
var state_23812__$1 = state_23812;
var statearr_23846_23877 = state_23812__$1;
(statearr_23846_23877[(2)] = inst_23796);

(statearr_23846_23877[(1)] = (12));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23813 === (10))){
var inst_23767 = (state_23812[(9)]);
var inst_23765 = (state_23812[(11)]);
var inst_23772 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23765,inst_23767);
var state_23812__$1 = state_23812;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23812__$1,(13),out,inst_23772);
} else {
if((state_val_23813 === (18))){
var inst_23778 = (state_23812[(7)]);
var inst_23787 = cljs.core.first(inst_23778);
var state_23812__$1 = state_23812;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23812__$1,(20),out,inst_23787);
} else {
if((state_val_23813 === (8))){
var inst_23766 = (state_23812[(8)]);
var inst_23767 = (state_23812[(9)]);
var inst_23769 = (inst_23767 < inst_23766);
var inst_23770 = inst_23769;
var state_23812__$1 = state_23812;
if(cljs.core.truth_(inst_23770)){
var statearr_23847_23878 = state_23812__$1;
(statearr_23847_23878[(1)] = (10));

} else {
var statearr_23848_23879 = state_23812__$1;
(statearr_23848_23879[(1)] = (11));

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
});})(c__11420__auto__))
;
return ((function (switch__11340__auto__,c__11420__auto__){
return (function() {
var state_machine__11341__auto__ = null;
var state_machine__11341__auto____0 = (function (){
var statearr_23852 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23852[(0)] = state_machine__11341__auto__);

(statearr_23852[(1)] = (1));

return statearr_23852;
});
var state_machine__11341__auto____1 = (function (state_23812){
while(true){
var ret_value__11342__auto__ = (function (){try{while(true){
var result__11343__auto__ = switch__11340__auto__(state_23812);
if(cljs.core.keyword_identical_QMARK_(result__11343__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11343__auto__;
}
break;
}
}catch (e23853){if((e23853 instanceof Object)){
var ex__11344__auto__ = e23853;
var statearr_23854_23880 = state_23812;
(statearr_23854_23880[(5)] = ex__11344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23812);

return cljs.core.constant$keyword$40;
} else {
throw e23853;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11342__auto__,cljs.core.constant$keyword$40)){
var G__23881 = state_23812;
state_23812 = G__23881;
continue;
} else {
return ret_value__11342__auto__;
}
break;
}
});
state_machine__11341__auto__ = function(state_23812){
switch(arguments.length){
case 0:
return state_machine__11341__auto____0.call(this);
case 1:
return state_machine__11341__auto____1.call(this,state_23812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11341__auto____0;
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11341__auto____1;
return state_machine__11341__auto__;
})()
;})(switch__11340__auto__,c__11420__auto__))
})();
var state__11422__auto__ = (function (){var statearr_23855 = (function (){return (f__11421__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11421__auto__.cljs$core$IFn$_invoke$arity$0() : f__11421__auto__.call(null));
})();
(statearr_23855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11420__auto__);

return statearr_23855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11422__auto__);
});})(c__11420__auto__))
);

return c__11420__auto__;
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
var c__11420__auto___23986 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11420__auto___23986,out){
return (function (){
var f__11421__auto__ = (function (){var switch__11340__auto__ = ((function (c__11420__auto___23986,out){
return (function (state_23961){
var state_val_23962 = (state_23961[(1)]);
if((state_val_23962 === (7))){
var inst_23956 = (state_23961[(2)]);
var state_23961__$1 = state_23961;
var statearr_23963_23987 = state_23961__$1;
(statearr_23963_23987[(2)] = inst_23956);

(statearr_23963_23987[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23962 === (1))){
var inst_23938 = null;
var state_23961__$1 = (function (){var statearr_23964 = state_23961;
(statearr_23964[(7)] = inst_23938);

return statearr_23964;
})();
var statearr_23965_23988 = state_23961__$1;
(statearr_23965_23988[(2)] = null);

(statearr_23965_23988[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23962 === (4))){
var inst_23941 = (state_23961[(8)]);
var inst_23941__$1 = (state_23961[(2)]);
var inst_23942 = (inst_23941__$1 == null);
var inst_23943 = cljs.core.not(inst_23942);
var state_23961__$1 = (function (){var statearr_23966 = state_23961;
(statearr_23966[(8)] = inst_23941__$1);

return statearr_23966;
})();
if(inst_23943){
var statearr_23967_23989 = state_23961__$1;
(statearr_23967_23989[(1)] = (5));

} else {
var statearr_23968_23990 = state_23961__$1;
(statearr_23968_23990[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23962 === (6))){
var state_23961__$1 = state_23961;
var statearr_23969_23991 = state_23961__$1;
(statearr_23969_23991[(2)] = null);

(statearr_23969_23991[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23962 === (3))){
var inst_23958 = (state_23961[(2)]);
var inst_23959 = cljs.core.async.close_BANG_(out);
var state_23961__$1 = (function (){var statearr_23970 = state_23961;
(statearr_23970[(9)] = inst_23958);

return statearr_23970;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_23961__$1,inst_23959);
} else {
if((state_val_23962 === (2))){
var state_23961__$1 = state_23961;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23961__$1,(4),ch);
} else {
if((state_val_23962 === (11))){
var inst_23941 = (state_23961[(8)]);
var inst_23950 = (state_23961[(2)]);
var inst_23938 = inst_23941;
var state_23961__$1 = (function (){var statearr_23971 = state_23961;
(statearr_23971[(7)] = inst_23938);

(statearr_23971[(10)] = inst_23950);

return statearr_23971;
})();
var statearr_23972_23992 = state_23961__$1;
(statearr_23972_23992[(2)] = null);

(statearr_23972_23992[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23962 === (9))){
var inst_23941 = (state_23961[(8)]);
var state_23961__$1 = state_23961;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23961__$1,(11),out,inst_23941);
} else {
if((state_val_23962 === (5))){
var inst_23941 = (state_23961[(8)]);
var inst_23938 = (state_23961[(7)]);
var inst_23945 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23941,inst_23938);
var state_23961__$1 = state_23961;
if(inst_23945){
var statearr_23974_23993 = state_23961__$1;
(statearr_23974_23993[(1)] = (8));

} else {
var statearr_23975_23994 = state_23961__$1;
(statearr_23975_23994[(1)] = (9));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23962 === (10))){
var inst_23953 = (state_23961[(2)]);
var state_23961__$1 = state_23961;
var statearr_23976_23995 = state_23961__$1;
(statearr_23976_23995[(2)] = inst_23953);

(statearr_23976_23995[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23962 === (8))){
var inst_23938 = (state_23961[(7)]);
var tmp23973 = inst_23938;
var inst_23938__$1 = tmp23973;
var state_23961__$1 = (function (){var statearr_23977 = state_23961;
(statearr_23977[(7)] = inst_23938__$1);

return statearr_23977;
})();
var statearr_23978_23996 = state_23961__$1;
(statearr_23978_23996[(2)] = null);

(statearr_23978_23996[(1)] = (2));


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
});})(c__11420__auto___23986,out))
;
return ((function (switch__11340__auto__,c__11420__auto___23986,out){
return (function() {
var state_machine__11341__auto__ = null;
var state_machine__11341__auto____0 = (function (){
var statearr_23982 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23982[(0)] = state_machine__11341__auto__);

(statearr_23982[(1)] = (1));

return statearr_23982;
});
var state_machine__11341__auto____1 = (function (state_23961){
while(true){
var ret_value__11342__auto__ = (function (){try{while(true){
var result__11343__auto__ = switch__11340__auto__(state_23961);
if(cljs.core.keyword_identical_QMARK_(result__11343__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11343__auto__;
}
break;
}
}catch (e23983){if((e23983 instanceof Object)){
var ex__11344__auto__ = e23983;
var statearr_23984_23997 = state_23961;
(statearr_23984_23997[(5)] = ex__11344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23961);

return cljs.core.constant$keyword$40;
} else {
throw e23983;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11342__auto__,cljs.core.constant$keyword$40)){
var G__23998 = state_23961;
state_23961 = G__23998;
continue;
} else {
return ret_value__11342__auto__;
}
break;
}
});
state_machine__11341__auto__ = function(state_23961){
switch(arguments.length){
case 0:
return state_machine__11341__auto____0.call(this);
case 1:
return state_machine__11341__auto____1.call(this,state_23961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11341__auto____0;
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11341__auto____1;
return state_machine__11341__auto__;
})()
;})(switch__11340__auto__,c__11420__auto___23986,out))
})();
var state__11422__auto__ = (function (){var statearr_23985 = (function (){return (f__11421__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11421__auto__.cljs$core$IFn$_invoke$arity$0() : f__11421__auto__.call(null));
})();
(statearr_23985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11420__auto___23986);

return statearr_23985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11422__auto__);
});})(c__11420__auto___23986,out))
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
var c__11420__auto___24136 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11420__auto___24136,out){
return (function (){
var f__11421__auto__ = (function (){var switch__11340__auto__ = ((function (c__11420__auto___24136,out){
return (function (state_24106){
var state_val_24107 = (state_24106[(1)]);
if((state_val_24107 === (7))){
var inst_24102 = (state_24106[(2)]);
var state_24106__$1 = state_24106;
var statearr_24108_24137 = state_24106__$1;
(statearr_24108_24137[(2)] = inst_24102);

(statearr_24108_24137[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24107 === (1))){
var inst_24069 = (new Array(n));
var inst_24070 = inst_24069;
var inst_24071 = (0);
var state_24106__$1 = (function (){var statearr_24109 = state_24106;
(statearr_24109[(7)] = inst_24071);

(statearr_24109[(8)] = inst_24070);

return statearr_24109;
})();
var statearr_24110_24138 = state_24106__$1;
(statearr_24110_24138[(2)] = null);

(statearr_24110_24138[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24107 === (4))){
var inst_24074 = (state_24106[(9)]);
var inst_24074__$1 = (state_24106[(2)]);
var inst_24075 = (inst_24074__$1 == null);
var inst_24076 = cljs.core.not(inst_24075);
var state_24106__$1 = (function (){var statearr_24111 = state_24106;
(statearr_24111[(9)] = inst_24074__$1);

return statearr_24111;
})();
if(inst_24076){
var statearr_24112_24139 = state_24106__$1;
(statearr_24112_24139[(1)] = (5));

} else {
var statearr_24113_24140 = state_24106__$1;
(statearr_24113_24140[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_24107 === (15))){
var inst_24096 = (state_24106[(2)]);
var state_24106__$1 = state_24106;
var statearr_24114_24141 = state_24106__$1;
(statearr_24114_24141[(2)] = inst_24096);

(statearr_24114_24141[(1)] = (14));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24107 === (13))){
var state_24106__$1 = state_24106;
var statearr_24115_24142 = state_24106__$1;
(statearr_24115_24142[(2)] = null);

(statearr_24115_24142[(1)] = (14));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24107 === (6))){
var inst_24071 = (state_24106[(7)]);
var inst_24092 = (inst_24071 > (0));
var state_24106__$1 = state_24106;
if(cljs.core.truth_(inst_24092)){
var statearr_24116_24143 = state_24106__$1;
(statearr_24116_24143[(1)] = (12));

} else {
var statearr_24117_24144 = state_24106__$1;
(statearr_24117_24144[(1)] = (13));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_24107 === (3))){
var inst_24104 = (state_24106[(2)]);
var state_24106__$1 = state_24106;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24106__$1,inst_24104);
} else {
if((state_val_24107 === (12))){
var inst_24070 = (state_24106[(8)]);
var inst_24094 = cljs.core.vec(inst_24070);
var state_24106__$1 = state_24106;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24106__$1,(15),out,inst_24094);
} else {
if((state_val_24107 === (2))){
var state_24106__$1 = state_24106;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24106__$1,(4),ch);
} else {
if((state_val_24107 === (11))){
var inst_24086 = (state_24106[(2)]);
var inst_24087 = (new Array(n));
var inst_24070 = inst_24087;
var inst_24071 = (0);
var state_24106__$1 = (function (){var statearr_24118 = state_24106;
(statearr_24118[(7)] = inst_24071);

(statearr_24118[(10)] = inst_24086);

(statearr_24118[(8)] = inst_24070);

return statearr_24118;
})();
var statearr_24119_24145 = state_24106__$1;
(statearr_24119_24145[(2)] = null);

(statearr_24119_24145[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24107 === (9))){
var inst_24070 = (state_24106[(8)]);
var inst_24084 = cljs.core.vec(inst_24070);
var state_24106__$1 = state_24106;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24106__$1,(11),out,inst_24084);
} else {
if((state_val_24107 === (5))){
var inst_24071 = (state_24106[(7)]);
var inst_24079 = (state_24106[(11)]);
var inst_24074 = (state_24106[(9)]);
var inst_24070 = (state_24106[(8)]);
var inst_24078 = (inst_24070[inst_24071] = inst_24074);
var inst_24079__$1 = (inst_24071 + (1));
var inst_24080 = (inst_24079__$1 < n);
var state_24106__$1 = (function (){var statearr_24120 = state_24106;
(statearr_24120[(11)] = inst_24079__$1);

(statearr_24120[(12)] = inst_24078);

return statearr_24120;
})();
if(cljs.core.truth_(inst_24080)){
var statearr_24121_24146 = state_24106__$1;
(statearr_24121_24146[(1)] = (8));

} else {
var statearr_24122_24147 = state_24106__$1;
(statearr_24122_24147[(1)] = (9));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_24107 === (14))){
var inst_24099 = (state_24106[(2)]);
var inst_24100 = cljs.core.async.close_BANG_(out);
var state_24106__$1 = (function (){var statearr_24124 = state_24106;
(statearr_24124[(13)] = inst_24099);

return statearr_24124;
})();
var statearr_24125_24148 = state_24106__$1;
(statearr_24125_24148[(2)] = inst_24100);

(statearr_24125_24148[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24107 === (10))){
var inst_24090 = (state_24106[(2)]);
var state_24106__$1 = state_24106;
var statearr_24126_24149 = state_24106__$1;
(statearr_24126_24149[(2)] = inst_24090);

(statearr_24126_24149[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24107 === (8))){
var inst_24079 = (state_24106[(11)]);
var inst_24070 = (state_24106[(8)]);
var tmp24123 = inst_24070;
var inst_24070__$1 = tmp24123;
var inst_24071 = inst_24079;
var state_24106__$1 = (function (){var statearr_24127 = state_24106;
(statearr_24127[(7)] = inst_24071);

(statearr_24127[(8)] = inst_24070__$1);

return statearr_24127;
})();
var statearr_24128_24150 = state_24106__$1;
(statearr_24128_24150[(2)] = null);

(statearr_24128_24150[(1)] = (2));


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
});})(c__11420__auto___24136,out))
;
return ((function (switch__11340__auto__,c__11420__auto___24136,out){
return (function() {
var state_machine__11341__auto__ = null;
var state_machine__11341__auto____0 = (function (){
var statearr_24132 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24132[(0)] = state_machine__11341__auto__);

(statearr_24132[(1)] = (1));

return statearr_24132;
});
var state_machine__11341__auto____1 = (function (state_24106){
while(true){
var ret_value__11342__auto__ = (function (){try{while(true){
var result__11343__auto__ = switch__11340__auto__(state_24106);
if(cljs.core.keyword_identical_QMARK_(result__11343__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11343__auto__;
}
break;
}
}catch (e24133){if((e24133 instanceof Object)){
var ex__11344__auto__ = e24133;
var statearr_24134_24151 = state_24106;
(statearr_24134_24151[(5)] = ex__11344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24106);

return cljs.core.constant$keyword$40;
} else {
throw e24133;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11342__auto__,cljs.core.constant$keyword$40)){
var G__24152 = state_24106;
state_24106 = G__24152;
continue;
} else {
return ret_value__11342__auto__;
}
break;
}
});
state_machine__11341__auto__ = function(state_24106){
switch(arguments.length){
case 0:
return state_machine__11341__auto____0.call(this);
case 1:
return state_machine__11341__auto____1.call(this,state_24106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11341__auto____0;
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11341__auto____1;
return state_machine__11341__auto__;
})()
;})(switch__11340__auto__,c__11420__auto___24136,out))
})();
var state__11422__auto__ = (function (){var statearr_24135 = (function (){return (f__11421__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11421__auto__.cljs$core$IFn$_invoke$arity$0() : f__11421__auto__.call(null));
})();
(statearr_24135[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11420__auto___24136);

return statearr_24135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11422__auto__);
});})(c__11420__auto___24136,out))
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
var c__11420__auto___24300 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11420__auto___24300,out){
return (function (){
var f__11421__auto__ = (function (){var switch__11340__auto__ = ((function (c__11420__auto___24300,out){
return (function (state_24269){
var state_val_24270 = (state_24269[(1)]);
if((state_val_24270 === (7))){
var inst_24265 = (state_24269[(2)]);
var state_24269__$1 = state_24269;
var statearr_24271_24301 = state_24269__$1;
(statearr_24271_24301[(2)] = inst_24265);

(statearr_24271_24301[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24270 === (1))){
var inst_24228 = [];
var inst_24229 = inst_24228;
var inst_24230 = cljs.core.constant$keyword$55;
var state_24269__$1 = (function (){var statearr_24272 = state_24269;
(statearr_24272[(7)] = inst_24230);

(statearr_24272[(8)] = inst_24229);

return statearr_24272;
})();
var statearr_24273_24302 = state_24269__$1;
(statearr_24273_24302[(2)] = null);

(statearr_24273_24302[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24270 === (4))){
var inst_24233 = (state_24269[(9)]);
var inst_24233__$1 = (state_24269[(2)]);
var inst_24234 = (inst_24233__$1 == null);
var inst_24235 = cljs.core.not(inst_24234);
var state_24269__$1 = (function (){var statearr_24274 = state_24269;
(statearr_24274[(9)] = inst_24233__$1);

return statearr_24274;
})();
if(inst_24235){
var statearr_24275_24303 = state_24269__$1;
(statearr_24275_24303[(1)] = (5));

} else {
var statearr_24276_24304 = state_24269__$1;
(statearr_24276_24304[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_24270 === (15))){
var inst_24259 = (state_24269[(2)]);
var state_24269__$1 = state_24269;
var statearr_24277_24305 = state_24269__$1;
(statearr_24277_24305[(2)] = inst_24259);

(statearr_24277_24305[(1)] = (14));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24270 === (13))){
var state_24269__$1 = state_24269;
var statearr_24278_24306 = state_24269__$1;
(statearr_24278_24306[(2)] = null);

(statearr_24278_24306[(1)] = (14));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24270 === (6))){
var inst_24229 = (state_24269[(8)]);
var inst_24254 = inst_24229.length;
var inst_24255 = (inst_24254 > (0));
var state_24269__$1 = state_24269;
if(cljs.core.truth_(inst_24255)){
var statearr_24279_24307 = state_24269__$1;
(statearr_24279_24307[(1)] = (12));

} else {
var statearr_24280_24308 = state_24269__$1;
(statearr_24280_24308[(1)] = (13));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_24270 === (3))){
var inst_24267 = (state_24269[(2)]);
var state_24269__$1 = state_24269;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24269__$1,inst_24267);
} else {
if((state_val_24270 === (12))){
var inst_24229 = (state_24269[(8)]);
var inst_24257 = cljs.core.vec(inst_24229);
var state_24269__$1 = state_24269;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24269__$1,(15),out,inst_24257);
} else {
if((state_val_24270 === (2))){
var state_24269__$1 = state_24269;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24269__$1,(4),ch);
} else {
if((state_val_24270 === (11))){
var inst_24233 = (state_24269[(9)]);
var inst_24237 = (state_24269[(10)]);
var inst_24247 = (state_24269[(2)]);
var inst_24248 = [];
var inst_24249 = inst_24248.push(inst_24233);
var inst_24229 = inst_24248;
var inst_24230 = inst_24237;
var state_24269__$1 = (function (){var statearr_24281 = state_24269;
(statearr_24281[(11)] = inst_24247);

(statearr_24281[(12)] = inst_24249);

(statearr_24281[(7)] = inst_24230);

(statearr_24281[(8)] = inst_24229);

return statearr_24281;
})();
var statearr_24282_24309 = state_24269__$1;
(statearr_24282_24309[(2)] = null);

(statearr_24282_24309[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24270 === (9))){
var inst_24229 = (state_24269[(8)]);
var inst_24245 = cljs.core.vec(inst_24229);
var state_24269__$1 = state_24269;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24269__$1,(11),out,inst_24245);
} else {
if((state_val_24270 === (5))){
var inst_24233 = (state_24269[(9)]);
var inst_24237 = (state_24269[(10)]);
var inst_24230 = (state_24269[(7)]);
var inst_24237__$1 = (function (){var G__24283 = inst_24233;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24283) : f.call(null,G__24283));
})();
var inst_24238 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24237__$1,inst_24230);
var inst_24239 = cljs.core.keyword_identical_QMARK_(inst_24230,cljs.core.constant$keyword$55);
var inst_24240 = (inst_24238) || (inst_24239);
var state_24269__$1 = (function (){var statearr_24284 = state_24269;
(statearr_24284[(10)] = inst_24237__$1);

return statearr_24284;
})();
if(cljs.core.truth_(inst_24240)){
var statearr_24285_24310 = state_24269__$1;
(statearr_24285_24310[(1)] = (8));

} else {
var statearr_24286_24311 = state_24269__$1;
(statearr_24286_24311[(1)] = (9));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_24270 === (14))){
var inst_24262 = (state_24269[(2)]);
var inst_24263 = cljs.core.async.close_BANG_(out);
var state_24269__$1 = (function (){var statearr_24288 = state_24269;
(statearr_24288[(13)] = inst_24262);

return statearr_24288;
})();
var statearr_24289_24312 = state_24269__$1;
(statearr_24289_24312[(2)] = inst_24263);

(statearr_24289_24312[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24270 === (10))){
var inst_24252 = (state_24269[(2)]);
var state_24269__$1 = state_24269;
var statearr_24290_24313 = state_24269__$1;
(statearr_24290_24313[(2)] = inst_24252);

(statearr_24290_24313[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24270 === (8))){
var inst_24233 = (state_24269[(9)]);
var inst_24237 = (state_24269[(10)]);
var inst_24229 = (state_24269[(8)]);
var inst_24242 = inst_24229.push(inst_24233);
var tmp24287 = inst_24229;
var inst_24229__$1 = tmp24287;
var inst_24230 = inst_24237;
var state_24269__$1 = (function (){var statearr_24291 = state_24269;
(statearr_24291[(7)] = inst_24230);

(statearr_24291[(8)] = inst_24229__$1);

(statearr_24291[(14)] = inst_24242);

return statearr_24291;
})();
var statearr_24292_24314 = state_24269__$1;
(statearr_24292_24314[(2)] = null);

(statearr_24292_24314[(1)] = (2));


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
});})(c__11420__auto___24300,out))
;
return ((function (switch__11340__auto__,c__11420__auto___24300,out){
return (function() {
var state_machine__11341__auto__ = null;
var state_machine__11341__auto____0 = (function (){
var statearr_24296 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24296[(0)] = state_machine__11341__auto__);

(statearr_24296[(1)] = (1));

return statearr_24296;
});
var state_machine__11341__auto____1 = (function (state_24269){
while(true){
var ret_value__11342__auto__ = (function (){try{while(true){
var result__11343__auto__ = switch__11340__auto__(state_24269);
if(cljs.core.keyword_identical_QMARK_(result__11343__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11343__auto__;
}
break;
}
}catch (e24297){if((e24297 instanceof Object)){
var ex__11344__auto__ = e24297;
var statearr_24298_24315 = state_24269;
(statearr_24298_24315[(5)] = ex__11344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24269);

return cljs.core.constant$keyword$40;
} else {
throw e24297;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11342__auto__,cljs.core.constant$keyword$40)){
var G__24316 = state_24269;
state_24269 = G__24316;
continue;
} else {
return ret_value__11342__auto__;
}
break;
}
});
state_machine__11341__auto__ = function(state_24269){
switch(arguments.length){
case 0:
return state_machine__11341__auto____0.call(this);
case 1:
return state_machine__11341__auto____1.call(this,state_24269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11341__auto____0;
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11341__auto____1;
return state_machine__11341__auto__;
})()
;})(switch__11340__auto__,c__11420__auto___24300,out))
})();
var state__11422__auto__ = (function (){var statearr_24299 = (function (){return (f__11421__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11421__auto__.cljs$core$IFn$_invoke$arity$0() : f__11421__auto__.call(null));
})();
(statearr_24299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11420__auto___24300);

return statearr_24299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11422__auto__);
});})(c__11420__auto___24300,out))
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
