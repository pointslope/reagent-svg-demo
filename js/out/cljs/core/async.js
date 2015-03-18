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
if(typeof cljs.core.async.t20936 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20936 = (function (f,fn_handler,meta20937){
this.f = f;
this.fn_handler = fn_handler;
this.meta20937 = meta20937;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20936.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20936.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t20936.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t20936.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20938){
var self__ = this;
var _20938__$1 = this;
return self__.meta20937;
});

cljs.core.async.t20936.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20938,meta20937__$1){
var self__ = this;
var _20938__$1 = this;
return (new cljs.core.async.t20936(self__.f,self__.fn_handler,meta20937__$1));
});

cljs.core.async.t20936.cljs$lang$type = true;

cljs.core.async.t20936.cljs$lang$ctorStr = "cljs.core.async/t20936";

cljs.core.async.t20936.cljs$lang$ctorPrWriter = (function (this__4170__auto__,writer__4171__auto__,opt__4172__auto__){
return cljs.core._write(writer__4171__auto__,"cljs.core.async/t20936");
});

cljs.core.async.__GT_t20936 = (function __GT_t20936(f__$1,fn_handler__$1,meta20937){
return (new cljs.core.async.t20936(f__$1,fn_handler__$1,meta20937));
});

}

return (new cljs.core.async.t20936(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__20940 = buff;
if(G__20940){
var bit__4264__auto__ = null;
if(cljs.core.truth_((function (){var or__3583__auto__ = bit__4264__auto__;
if(cljs.core.truth_(or__3583__auto__)){
return or__3583__auto__;
} else {
return G__20940.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__20940.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__20940);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__20940);
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
var val_20957 = (function (){var G__20954 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20954) : cljs.core.deref.call(null,G__20954));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__20955_20958 = val_20957;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__20955_20958) : fn1.call(null,G__20955_20958));
} else {
cljs.core.async.impl.dispatch.run(((function (val_20957,ret){
return (function (){
var G__20956 = val_20957;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__20956) : fn1.call(null,G__20956));
});})(val_20957,ret))
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
var G__20967 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20967) : cljs.core.deref.call(null,G__20967));
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
var ret = (function (){var G__20968 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20968) : cljs.core.deref.call(null,G__20968));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__20969_20971 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__20969_20971) : fn1.call(null,G__20969_20971));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__20970 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__20970) : fn1.call(null,G__20970));
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
var n__4470__auto___20972 = n;
var x_20973 = (0);
while(true){
if((x_20973 < n__4470__auto___20972)){
(a[x_20973] = (0));

var G__20974 = (x_20973 + (1));
x_20973 = G__20974;
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

var G__20975 = (i + (1));
i = G__20975;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = (function (){var G__20983 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20983) : cljs.core.atom.call(null,G__20983));
})();
if(typeof cljs.core.async.t20984 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20984 = (function (flag,alt_flag,meta20985){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta20985 = meta20985;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20984.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20984.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__20987 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20987) : cljs.core.deref.call(null,G__20987));
});})(flag))
;

cljs.core.async.t20984.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__20988_20990 = self__.flag;
var G__20989_20991 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20988_20990,G__20989_20991) : cljs.core.reset_BANG_.call(null,G__20988_20990,G__20989_20991));

return true;
});})(flag))
;

cljs.core.async.t20984.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20986){
var self__ = this;
var _20986__$1 = this;
return self__.meta20985;
});})(flag))
;

cljs.core.async.t20984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20986,meta20985__$1){
var self__ = this;
var _20986__$1 = this;
return (new cljs.core.async.t20984(self__.flag,self__.alt_flag,meta20985__$1));
});})(flag))
;

cljs.core.async.t20984.cljs$lang$type = true;

cljs.core.async.t20984.cljs$lang$ctorStr = "cljs.core.async/t20984";

cljs.core.async.t20984.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4170__auto__,writer__4171__auto__,opt__4172__auto__){
return cljs.core._write(writer__4171__auto__,"cljs.core.async/t20984");
});})(flag))
;

cljs.core.async.__GT_t20984 = ((function (flag){
return (function __GT_t20984(flag__$1,alt_flag__$1,meta20985){
return (new cljs.core.async.t20984(flag__$1,alt_flag__$1,meta20985));
});})(flag))
;

}

return (new cljs.core.async.t20984(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t20995 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20995 = (function (cb,flag,alt_handler,meta20996){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta20996 = meta20996;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20995.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20995.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t20995.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t20995.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20997){
var self__ = this;
var _20997__$1 = this;
return self__.meta20996;
});

cljs.core.async.t20995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20997,meta20996__$1){
var self__ = this;
var _20997__$1 = this;
return (new cljs.core.async.t20995(self__.cb,self__.flag,self__.alt_handler,meta20996__$1));
});

cljs.core.async.t20995.cljs$lang$type = true;

cljs.core.async.t20995.cljs$lang$ctorStr = "cljs.core.async/t20995";

cljs.core.async.t20995.cljs$lang$ctorPrWriter = (function (this__4170__auto__,writer__4171__auto__,opt__4172__auto__){
return cljs.core._write(writer__4171__auto__,"cljs.core.async/t20995");
});

cljs.core.async.__GT_t20995 = (function __GT_t20995(cb__$1,flag__$1,alt_handler__$1,meta20996){
return (new cljs.core.async.t20995(cb__$1,flag__$1,alt_handler__$1,meta20996));
});

}

return (new cljs.core.async.t20995(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__21005 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__21005) : port.call(null,G__21005));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__21006 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__21006) : port.call(null,G__21006));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20998_SHARP_){
var G__21007 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20998_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__21007) : fret.call(null,G__21007));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20999_SHARP_){
var G__21008 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20999_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__21008) : fret.call(null,G__21008));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__21009 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21009) : cljs.core.deref.call(null,G__21009));
})(),(function (){var or__3583__auto__ = wport;
if(cljs.core.truth_(or__3583__auto__)){
return or__3583__auto__;
} else {
return port;
}
})()], null));
} else {
var G__21010 = (i + (1));
i = G__21010;
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
var alts_BANG___delegate = function (ports,p__21011){
var map__21013 = p__21011;
var map__21013__$1 = ((cljs.core.seq_QMARK_(map__21013))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21013):map__21013);
var opts = map__21013__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__21011 = null;
if (arguments.length > 1) {
var G__21014__i = 0, G__21014__a = new Array(arguments.length -  1);
while (G__21014__i < G__21014__a.length) {G__21014__a[G__21014__i] = arguments[G__21014__i + 1]; ++G__21014__i;}
  p__21011 = new cljs.core.IndexedSeq(G__21014__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__21011);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__21015){
var ports = cljs.core.first(arglist__21015);
var p__21011 = cljs.core.rest(arglist__21015);
return alts_BANG___delegate(ports,p__21011);
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
var c__11420__auto___21113 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11420__auto___21113){
return (function (){
var f__11421__auto__ = (function (){var switch__11340__auto__ = ((function (c__11420__auto___21113){
return (function (state_21089){
var state_val_21090 = (state_21089[(1)]);
if((state_val_21090 === (7))){
var inst_21085 = (state_21089[(2)]);
var state_21089__$1 = state_21089;
var statearr_21091_21114 = state_21089__$1;
(statearr_21091_21114[(2)] = inst_21085);

(statearr_21091_21114[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21090 === (1))){
var state_21089__$1 = state_21089;
var statearr_21092_21115 = state_21089__$1;
(statearr_21092_21115[(2)] = null);

(statearr_21092_21115[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21090 === (4))){
var inst_21068 = (state_21089[(7)]);
var inst_21068__$1 = (state_21089[(2)]);
var inst_21069 = (inst_21068__$1 == null);
var state_21089__$1 = (function (){var statearr_21093 = state_21089;
(statearr_21093[(7)] = inst_21068__$1);

return statearr_21093;
})();
if(cljs.core.truth_(inst_21069)){
var statearr_21094_21116 = state_21089__$1;
(statearr_21094_21116[(1)] = (5));

} else {
var statearr_21095_21117 = state_21089__$1;
(statearr_21095_21117[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_21090 === (13))){
var state_21089__$1 = state_21089;
var statearr_21096_21118 = state_21089__$1;
(statearr_21096_21118[(2)] = null);

(statearr_21096_21118[(1)] = (14));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21090 === (6))){
var inst_21068 = (state_21089[(7)]);
var state_21089__$1 = state_21089;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21089__$1,(11),to,inst_21068);
} else {
if((state_val_21090 === (3))){
var inst_21087 = (state_21089[(2)]);
var state_21089__$1 = state_21089;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21089__$1,inst_21087);
} else {
if((state_val_21090 === (12))){
var state_21089__$1 = state_21089;
var statearr_21097_21119 = state_21089__$1;
(statearr_21097_21119[(2)] = null);

(statearr_21097_21119[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21090 === (2))){
var state_21089__$1 = state_21089;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21089__$1,(4),from);
} else {
if((state_val_21090 === (11))){
var inst_21078 = (state_21089[(2)]);
var state_21089__$1 = state_21089;
if(cljs.core.truth_(inst_21078)){
var statearr_21098_21120 = state_21089__$1;
(statearr_21098_21120[(1)] = (12));

} else {
var statearr_21099_21121 = state_21089__$1;
(statearr_21099_21121[(1)] = (13));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_21090 === (9))){
var state_21089__$1 = state_21089;
var statearr_21100_21122 = state_21089__$1;
(statearr_21100_21122[(2)] = null);

(statearr_21100_21122[(1)] = (10));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21090 === (5))){
var state_21089__$1 = state_21089;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21101_21123 = state_21089__$1;
(statearr_21101_21123[(1)] = (8));

} else {
var statearr_21102_21124 = state_21089__$1;
(statearr_21102_21124[(1)] = (9));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_21090 === (14))){
var inst_21083 = (state_21089[(2)]);
var state_21089__$1 = state_21089;
var statearr_21103_21125 = state_21089__$1;
(statearr_21103_21125[(2)] = inst_21083);

(statearr_21103_21125[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21090 === (10))){
var inst_21075 = (state_21089[(2)]);
var state_21089__$1 = state_21089;
var statearr_21104_21126 = state_21089__$1;
(statearr_21104_21126[(2)] = inst_21075);

(statearr_21104_21126[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21090 === (8))){
var inst_21072 = cljs.core.async.close_BANG_(to);
var state_21089__$1 = state_21089;
var statearr_21105_21127 = state_21089__$1;
(statearr_21105_21127[(2)] = inst_21072);

(statearr_21105_21127[(1)] = (10));


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
});})(c__11420__auto___21113))
;
return ((function (switch__11340__auto__,c__11420__auto___21113){
return (function() {
var state_machine__11341__auto__ = null;
var state_machine__11341__auto____0 = (function (){
var statearr_21109 = [null,null,null,null,null,null,null,null];
(statearr_21109[(0)] = state_machine__11341__auto__);

(statearr_21109[(1)] = (1));

return statearr_21109;
});
var state_machine__11341__auto____1 = (function (state_21089){
while(true){
var ret_value__11342__auto__ = (function (){try{while(true){
var result__11343__auto__ = switch__11340__auto__(state_21089);
if(cljs.core.keyword_identical_QMARK_(result__11343__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11343__auto__;
}
break;
}
}catch (e21110){if((e21110 instanceof Object)){
var ex__11344__auto__ = e21110;
var statearr_21111_21128 = state_21089;
(statearr_21111_21128[(5)] = ex__11344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21089);

return cljs.core.constant$keyword$40;
} else {
throw e21110;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11342__auto__,cljs.core.constant$keyword$40)){
var G__21129 = state_21089;
state_21089 = G__21129;
continue;
} else {
return ret_value__11342__auto__;
}
break;
}
});
state_machine__11341__auto__ = function(state_21089){
switch(arguments.length){
case 0:
return state_machine__11341__auto____0.call(this);
case 1:
return state_machine__11341__auto____1.call(this,state_21089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11341__auto____0;
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11341__auto____1;
return state_machine__11341__auto__;
})()
;})(switch__11340__auto__,c__11420__auto___21113))
})();
var state__11422__auto__ = (function (){var statearr_21112 = (function (){return (f__11421__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11421__auto__.cljs$core$IFn$_invoke$arity$0() : f__11421__auto__.call(null));
})();
(statearr_21112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11420__auto___21113);

return statearr_21112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11422__auto__);
});})(c__11420__auto___21113))
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
return (function (p__21315){
var vec__21316 = p__21315;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21316,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21316,(1),null);
var job = vec__21316;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__11420__auto___21500 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11420__auto___21500,res,vec__21316,v,p,job,jobs,results){
return (function (){
var f__11421__auto__ = (function (){var switch__11340__auto__ = ((function (c__11420__auto___21500,res,vec__21316,v,p,job,jobs,results){
return (function (state_21321){
var state_val_21322 = (state_21321[(1)]);
if((state_val_21322 === (2))){
var inst_21318 = (state_21321[(2)]);
var inst_21319 = cljs.core.async.close_BANG_(res);
var state_21321__$1 = (function (){var statearr_21323 = state_21321;
(statearr_21323[(7)] = inst_21318);

return statearr_21323;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_21321__$1,inst_21319);
} else {
if((state_val_21322 === (1))){
var state_21321__$1 = state_21321;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21321__$1,(2),res,v);
} else {
return null;
}
}
});})(c__11420__auto___21500,res,vec__21316,v,p,job,jobs,results))
;
return ((function (switch__11340__auto__,c__11420__auto___21500,res,vec__21316,v,p,job,jobs,results){
return (function() {
var state_machine__11341__auto__ = null;
var state_machine__11341__auto____0 = (function (){
var statearr_21327 = [null,null,null,null,null,null,null,null];
(statearr_21327[(0)] = state_machine__11341__auto__);

(statearr_21327[(1)] = (1));

return statearr_21327;
});
var state_machine__11341__auto____1 = (function (state_21321){
while(true){
var ret_value__11342__auto__ = (function (){try{while(true){
var result__11343__auto__ = switch__11340__auto__(state_21321);
if(cljs.core.keyword_identical_QMARK_(result__11343__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11343__auto__;
}
break;
}
}catch (e21328){if((e21328 instanceof Object)){
var ex__11344__auto__ = e21328;
var statearr_21329_21501 = state_21321;
(statearr_21329_21501[(5)] = ex__11344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21321);

return cljs.core.constant$keyword$40;
} else {
throw e21328;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11342__auto__,cljs.core.constant$keyword$40)){
var G__21502 = state_21321;
state_21321 = G__21502;
continue;
} else {
return ret_value__11342__auto__;
}
break;
}
});
state_machine__11341__auto__ = function(state_21321){
switch(arguments.length){
case 0:
return state_machine__11341__auto____0.call(this);
case 1:
return state_machine__11341__auto____1.call(this,state_21321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11341__auto____0;
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11341__auto____1;
return state_machine__11341__auto__;
})()
;})(switch__11340__auto__,c__11420__auto___21500,res,vec__21316,v,p,job,jobs,results))
})();
var state__11422__auto__ = (function (){var statearr_21330 = (function (){return (f__11421__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11421__auto__.cljs$core$IFn$_invoke$arity$0() : f__11421__auto__.call(null));
})();
(statearr_21330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11420__auto___21500);

return statearr_21330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11422__auto__);
});})(c__11420__auto___21500,res,vec__21316,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21331){
var vec__21332 = p__21331;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21332,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21332,(1),null);
var job = vec__21332;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__21333_21503 = v;
var G__21334_21504 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__21333_21503,G__21334_21504) : xf.call(null,G__21333_21503,G__21334_21504));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4470__auto___21505 = n;
var __21506 = (0);
while(true){
if((__21506 < n__4470__auto___21505)){
var G__21335_21507 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__21335_21507) {
case "async":
var c__11420__auto___21509 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__21506,c__11420__auto___21509,G__21335_21507,n__4470__auto___21505,jobs,results,process,async){
return (function (){
var f__11421__auto__ = (function (){var switch__11340__auto__ = ((function (__21506,c__11420__auto___21509,G__21335_21507,n__4470__auto___21505,jobs,results,process,async){
return (function (state_21348){
var state_val_21349 = (state_21348[(1)]);
if((state_val_21349 === (7))){
var inst_21344 = (state_21348[(2)]);
var state_21348__$1 = state_21348;
var statearr_21350_21510 = state_21348__$1;
(statearr_21350_21510[(2)] = inst_21344);

(statearr_21350_21510[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21349 === (6))){
var state_21348__$1 = state_21348;
var statearr_21351_21511 = state_21348__$1;
(statearr_21351_21511[(2)] = null);

(statearr_21351_21511[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21349 === (5))){
var state_21348__$1 = state_21348;
var statearr_21352_21512 = state_21348__$1;
(statearr_21352_21512[(2)] = null);

(statearr_21352_21512[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21349 === (4))){
var inst_21338 = (state_21348[(2)]);
var inst_21339 = async(inst_21338);
var state_21348__$1 = state_21348;
if(cljs.core.truth_(inst_21339)){
var statearr_21353_21513 = state_21348__$1;
(statearr_21353_21513[(1)] = (5));

} else {
var statearr_21354_21514 = state_21348__$1;
(statearr_21354_21514[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_21349 === (3))){
var inst_21346 = (state_21348[(2)]);
var state_21348__$1 = state_21348;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21348__$1,inst_21346);
} else {
if((state_val_21349 === (2))){
var state_21348__$1 = state_21348;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21348__$1,(4),jobs);
} else {
if((state_val_21349 === (1))){
var state_21348__$1 = state_21348;
var statearr_21355_21515 = state_21348__$1;
(statearr_21355_21515[(2)] = null);

(statearr_21355_21515[(1)] = (2));


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
});})(__21506,c__11420__auto___21509,G__21335_21507,n__4470__auto___21505,jobs,results,process,async))
;
return ((function (__21506,switch__11340__auto__,c__11420__auto___21509,G__21335_21507,n__4470__auto___21505,jobs,results,process,async){
return (function() {
var state_machine__11341__auto__ = null;
var state_machine__11341__auto____0 = (function (){
var statearr_21359 = [null,null,null,null,null,null,null];
(statearr_21359[(0)] = state_machine__11341__auto__);

(statearr_21359[(1)] = (1));

return statearr_21359;
});
var state_machine__11341__auto____1 = (function (state_21348){
while(true){
var ret_value__11342__auto__ = (function (){try{while(true){
var result__11343__auto__ = switch__11340__auto__(state_21348);
if(cljs.core.keyword_identical_QMARK_(result__11343__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11343__auto__;
}
break;
}
}catch (e21360){if((e21360 instanceof Object)){
var ex__11344__auto__ = e21360;
var statearr_21361_21516 = state_21348;
(statearr_21361_21516[(5)] = ex__11344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21348);

return cljs.core.constant$keyword$40;
} else {
throw e21360;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11342__auto__,cljs.core.constant$keyword$40)){
var G__21517 = state_21348;
state_21348 = G__21517;
continue;
} else {
return ret_value__11342__auto__;
}
break;
}
});
state_machine__11341__auto__ = function(state_21348){
switch(arguments.length){
case 0:
return state_machine__11341__auto____0.call(this);
case 1:
return state_machine__11341__auto____1.call(this,state_21348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11341__auto____0;
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11341__auto____1;
return state_machine__11341__auto__;
})()
;})(__21506,switch__11340__auto__,c__11420__auto___21509,G__21335_21507,n__4470__auto___21505,jobs,results,process,async))
})();
var state__11422__auto__ = (function (){var statearr_21362 = (function (){return (f__11421__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11421__auto__.cljs$core$IFn$_invoke$arity$0() : f__11421__auto__.call(null));
})();
(statearr_21362[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11420__auto___21509);

return statearr_21362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11422__auto__);
});})(__21506,c__11420__auto___21509,G__21335_21507,n__4470__auto___21505,jobs,results,process,async))
);


break;
case "compute":
var c__11420__auto___21518 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__21506,c__11420__auto___21518,G__21335_21507,n__4470__auto___21505,jobs,results,process,async){
return (function (){
var f__11421__auto__ = (function (){var switch__11340__auto__ = ((function (__21506,c__11420__auto___21518,G__21335_21507,n__4470__auto___21505,jobs,results,process,async){
return (function (state_21375){
var state_val_21376 = (state_21375[(1)]);
if((state_val_21376 === (7))){
var inst_21371 = (state_21375[(2)]);
var state_21375__$1 = state_21375;
var statearr_21377_21519 = state_21375__$1;
(statearr_21377_21519[(2)] = inst_21371);

(statearr_21377_21519[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21376 === (6))){
var state_21375__$1 = state_21375;
var statearr_21378_21520 = state_21375__$1;
(statearr_21378_21520[(2)] = null);

(statearr_21378_21520[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21376 === (5))){
var state_21375__$1 = state_21375;
var statearr_21379_21521 = state_21375__$1;
(statearr_21379_21521[(2)] = null);

(statearr_21379_21521[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21376 === (4))){
var inst_21365 = (state_21375[(2)]);
var inst_21366 = process(inst_21365);
var state_21375__$1 = state_21375;
if(cljs.core.truth_(inst_21366)){
var statearr_21380_21522 = state_21375__$1;
(statearr_21380_21522[(1)] = (5));

} else {
var statearr_21381_21523 = state_21375__$1;
(statearr_21381_21523[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_21376 === (3))){
var inst_21373 = (state_21375[(2)]);
var state_21375__$1 = state_21375;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21375__$1,inst_21373);
} else {
if((state_val_21376 === (2))){
var state_21375__$1 = state_21375;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21375__$1,(4),jobs);
} else {
if((state_val_21376 === (1))){
var state_21375__$1 = state_21375;
var statearr_21382_21524 = state_21375__$1;
(statearr_21382_21524[(2)] = null);

(statearr_21382_21524[(1)] = (2));


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
});})(__21506,c__11420__auto___21518,G__21335_21507,n__4470__auto___21505,jobs,results,process,async))
;
return ((function (__21506,switch__11340__auto__,c__11420__auto___21518,G__21335_21507,n__4470__auto___21505,jobs,results,process,async){
return (function() {
var state_machine__11341__auto__ = null;
var state_machine__11341__auto____0 = (function (){
var statearr_21386 = [null,null,null,null,null,null,null];
(statearr_21386[(0)] = state_machine__11341__auto__);

(statearr_21386[(1)] = (1));

return statearr_21386;
});
var state_machine__11341__auto____1 = (function (state_21375){
while(true){
var ret_value__11342__auto__ = (function (){try{while(true){
var result__11343__auto__ = switch__11340__auto__(state_21375);
if(cljs.core.keyword_identical_QMARK_(result__11343__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11343__auto__;
}
break;
}
}catch (e21387){if((e21387 instanceof Object)){
var ex__11344__auto__ = e21387;
var statearr_21388_21525 = state_21375;
(statearr_21388_21525[(5)] = ex__11344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21375);

return cljs.core.constant$keyword$40;
} else {
throw e21387;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11342__auto__,cljs.core.constant$keyword$40)){
var G__21526 = state_21375;
state_21375 = G__21526;
continue;
} else {
return ret_value__11342__auto__;
}
break;
}
});
state_machine__11341__auto__ = function(state_21375){
switch(arguments.length){
case 0:
return state_machine__11341__auto____0.call(this);
case 1:
return state_machine__11341__auto____1.call(this,state_21375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11341__auto____0;
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11341__auto____1;
return state_machine__11341__auto__;
})()
;})(__21506,switch__11340__auto__,c__11420__auto___21518,G__21335_21507,n__4470__auto___21505,jobs,results,process,async))
})();
var state__11422__auto__ = (function (){var statearr_21389 = (function (){return (f__11421__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11421__auto__.cljs$core$IFn$_invoke$arity$0() : f__11421__auto__.call(null));
})();
(statearr_21389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11420__auto___21518);

return statearr_21389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11422__auto__);
});})(__21506,c__11420__auto___21518,G__21335_21507,n__4470__auto___21505,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__21527 = (__21506 + (1));
__21506 = G__21527;
continue;
} else {
}
break;
}

var c__11420__auto___21528 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11420__auto___21528,jobs,results,process,async){
return (function (){
var f__11421__auto__ = (function (){var switch__11340__auto__ = ((function (c__11420__auto___21528,jobs,results,process,async){
return (function (state_21411){
var state_val_21412 = (state_21411[(1)]);
if((state_val_21412 === (9))){
var inst_21404 = (state_21411[(2)]);
var state_21411__$1 = (function (){var statearr_21413 = state_21411;
(statearr_21413[(7)] = inst_21404);

return statearr_21413;
})();
var statearr_21414_21529 = state_21411__$1;
(statearr_21414_21529[(2)] = null);

(statearr_21414_21529[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21412 === (8))){
var inst_21397 = (state_21411[(8)]);
var inst_21402 = (state_21411[(2)]);
var state_21411__$1 = (function (){var statearr_21415 = state_21411;
(statearr_21415[(9)] = inst_21402);

return statearr_21415;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21411__$1,(9),results,inst_21397);
} else {
if((state_val_21412 === (7))){
var inst_21407 = (state_21411[(2)]);
var state_21411__$1 = state_21411;
var statearr_21416_21530 = state_21411__$1;
(statearr_21416_21530[(2)] = inst_21407);

(statearr_21416_21530[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21412 === (6))){
var inst_21392 = (state_21411[(10)]);
var inst_21397 = (state_21411[(8)]);
var inst_21397__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_21398 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21399 = [inst_21392,inst_21397__$1];
var inst_21400 = (new cljs.core.PersistentVector(null,2,(5),inst_21398,inst_21399,null));
var state_21411__$1 = (function (){var statearr_21417 = state_21411;
(statearr_21417[(8)] = inst_21397__$1);

return statearr_21417;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21411__$1,(8),jobs,inst_21400);
} else {
if((state_val_21412 === (5))){
var inst_21395 = cljs.core.async.close_BANG_(jobs);
var state_21411__$1 = state_21411;
var statearr_21418_21531 = state_21411__$1;
(statearr_21418_21531[(2)] = inst_21395);

(statearr_21418_21531[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21412 === (4))){
var inst_21392 = (state_21411[(10)]);
var inst_21392__$1 = (state_21411[(2)]);
var inst_21393 = (inst_21392__$1 == null);
var state_21411__$1 = (function (){var statearr_21419 = state_21411;
(statearr_21419[(10)] = inst_21392__$1);

return statearr_21419;
})();
if(cljs.core.truth_(inst_21393)){
var statearr_21420_21532 = state_21411__$1;
(statearr_21420_21532[(1)] = (5));

} else {
var statearr_21421_21533 = state_21411__$1;
(statearr_21421_21533[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_21412 === (3))){
var inst_21409 = (state_21411[(2)]);
var state_21411__$1 = state_21411;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21411__$1,inst_21409);
} else {
if((state_val_21412 === (2))){
var state_21411__$1 = state_21411;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21411__$1,(4),from);
} else {
if((state_val_21412 === (1))){
var state_21411__$1 = state_21411;
var statearr_21422_21534 = state_21411__$1;
(statearr_21422_21534[(2)] = null);

(statearr_21422_21534[(1)] = (2));


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
});})(c__11420__auto___21528,jobs,results,process,async))
;
return ((function (switch__11340__auto__,c__11420__auto___21528,jobs,results,process,async){
return (function() {
var state_machine__11341__auto__ = null;
var state_machine__11341__auto____0 = (function (){
var statearr_21426 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21426[(0)] = state_machine__11341__auto__);

(statearr_21426[(1)] = (1));

return statearr_21426;
});
var state_machine__11341__auto____1 = (function (state_21411){
while(true){
var ret_value__11342__auto__ = (function (){try{while(true){
var result__11343__auto__ = switch__11340__auto__(state_21411);
if(cljs.core.keyword_identical_QMARK_(result__11343__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11343__auto__;
}
break;
}
}catch (e21427){if((e21427 instanceof Object)){
var ex__11344__auto__ = e21427;
var statearr_21428_21535 = state_21411;
(statearr_21428_21535[(5)] = ex__11344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21411);

return cljs.core.constant$keyword$40;
} else {
throw e21427;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11342__auto__,cljs.core.constant$keyword$40)){
var G__21536 = state_21411;
state_21411 = G__21536;
continue;
} else {
return ret_value__11342__auto__;
}
break;
}
});
state_machine__11341__auto__ = function(state_21411){
switch(arguments.length){
case 0:
return state_machine__11341__auto____0.call(this);
case 1:
return state_machine__11341__auto____1.call(this,state_21411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11341__auto____0;
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11341__auto____1;
return state_machine__11341__auto__;
})()
;})(switch__11340__auto__,c__11420__auto___21528,jobs,results,process,async))
})();
var state__11422__auto__ = (function (){var statearr_21429 = (function (){return (f__11421__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11421__auto__.cljs$core$IFn$_invoke$arity$0() : f__11421__auto__.call(null));
})();
(statearr_21429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11420__auto___21528);

return statearr_21429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11422__auto__);
});})(c__11420__auto___21528,jobs,results,process,async))
);


var c__11420__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11420__auto__,jobs,results,process,async){
return (function (){
var f__11421__auto__ = (function (){var switch__11340__auto__ = ((function (c__11420__auto__,jobs,results,process,async){
return (function (state_21467){
var state_val_21468 = (state_21467[(1)]);
if((state_val_21468 === (7))){
var inst_21463 = (state_21467[(2)]);
var state_21467__$1 = state_21467;
var statearr_21469_21537 = state_21467__$1;
(statearr_21469_21537[(2)] = inst_21463);

(statearr_21469_21537[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21468 === (20))){
var state_21467__$1 = state_21467;
var statearr_21470_21538 = state_21467__$1;
(statearr_21470_21538[(2)] = null);

(statearr_21470_21538[(1)] = (21));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21468 === (1))){
var state_21467__$1 = state_21467;
var statearr_21471_21539 = state_21467__$1;
(statearr_21471_21539[(2)] = null);

(statearr_21471_21539[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21468 === (4))){
var inst_21432 = (state_21467[(7)]);
var inst_21432__$1 = (state_21467[(2)]);
var inst_21433 = (inst_21432__$1 == null);
var state_21467__$1 = (function (){var statearr_21472 = state_21467;
(statearr_21472[(7)] = inst_21432__$1);

return statearr_21472;
})();
if(cljs.core.truth_(inst_21433)){
var statearr_21473_21540 = state_21467__$1;
(statearr_21473_21540[(1)] = (5));

} else {
var statearr_21474_21541 = state_21467__$1;
(statearr_21474_21541[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_21468 === (15))){
var inst_21445 = (state_21467[(8)]);
var state_21467__$1 = state_21467;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21467__$1,(18),to,inst_21445);
} else {
if((state_val_21468 === (21))){
var inst_21458 = (state_21467[(2)]);
var state_21467__$1 = state_21467;
var statearr_21475_21542 = state_21467__$1;
(statearr_21475_21542[(2)] = inst_21458);

(statearr_21475_21542[(1)] = (13));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21468 === (13))){
var inst_21460 = (state_21467[(2)]);
var state_21467__$1 = (function (){var statearr_21476 = state_21467;
(statearr_21476[(9)] = inst_21460);

return statearr_21476;
})();
var statearr_21477_21543 = state_21467__$1;
(statearr_21477_21543[(2)] = null);

(statearr_21477_21543[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21468 === (6))){
var inst_21432 = (state_21467[(7)]);
var state_21467__$1 = state_21467;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21467__$1,(11),inst_21432);
} else {
if((state_val_21468 === (17))){
var inst_21453 = (state_21467[(2)]);
var state_21467__$1 = state_21467;
if(cljs.core.truth_(inst_21453)){
var statearr_21478_21544 = state_21467__$1;
(statearr_21478_21544[(1)] = (19));

} else {
var statearr_21479_21545 = state_21467__$1;
(statearr_21479_21545[(1)] = (20));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_21468 === (3))){
var inst_21465 = (state_21467[(2)]);
var state_21467__$1 = state_21467;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21467__$1,inst_21465);
} else {
if((state_val_21468 === (12))){
var inst_21442 = (state_21467[(10)]);
var state_21467__$1 = state_21467;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21467__$1,(14),inst_21442);
} else {
if((state_val_21468 === (2))){
var state_21467__$1 = state_21467;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21467__$1,(4),results);
} else {
if((state_val_21468 === (19))){
var state_21467__$1 = state_21467;
var statearr_21480_21546 = state_21467__$1;
(statearr_21480_21546[(2)] = null);

(statearr_21480_21546[(1)] = (12));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21468 === (11))){
var inst_21442 = (state_21467[(2)]);
var state_21467__$1 = (function (){var statearr_21481 = state_21467;
(statearr_21481[(10)] = inst_21442);

return statearr_21481;
})();
var statearr_21482_21547 = state_21467__$1;
(statearr_21482_21547[(2)] = null);

(statearr_21482_21547[(1)] = (12));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21468 === (9))){
var state_21467__$1 = state_21467;
var statearr_21483_21548 = state_21467__$1;
(statearr_21483_21548[(2)] = null);

(statearr_21483_21548[(1)] = (10));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21468 === (5))){
var state_21467__$1 = state_21467;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21484_21549 = state_21467__$1;
(statearr_21484_21549[(1)] = (8));

} else {
var statearr_21485_21550 = state_21467__$1;
(statearr_21485_21550[(1)] = (9));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_21468 === (14))){
var inst_21445 = (state_21467[(8)]);
var inst_21447 = (state_21467[(11)]);
var inst_21445__$1 = (state_21467[(2)]);
var inst_21446 = (inst_21445__$1 == null);
var inst_21447__$1 = cljs.core.not(inst_21446);
var state_21467__$1 = (function (){var statearr_21486 = state_21467;
(statearr_21486[(8)] = inst_21445__$1);

(statearr_21486[(11)] = inst_21447__$1);

return statearr_21486;
})();
if(inst_21447__$1){
var statearr_21487_21551 = state_21467__$1;
(statearr_21487_21551[(1)] = (15));

} else {
var statearr_21488_21552 = state_21467__$1;
(statearr_21488_21552[(1)] = (16));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_21468 === (16))){
var inst_21447 = (state_21467[(11)]);
var state_21467__$1 = state_21467;
var statearr_21489_21553 = state_21467__$1;
(statearr_21489_21553[(2)] = inst_21447);

(statearr_21489_21553[(1)] = (17));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21468 === (10))){
var inst_21439 = (state_21467[(2)]);
var state_21467__$1 = state_21467;
var statearr_21490_21554 = state_21467__$1;
(statearr_21490_21554[(2)] = inst_21439);

(statearr_21490_21554[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21468 === (18))){
var inst_21450 = (state_21467[(2)]);
var state_21467__$1 = state_21467;
var statearr_21491_21555 = state_21467__$1;
(statearr_21491_21555[(2)] = inst_21450);

(statearr_21491_21555[(1)] = (17));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21468 === (8))){
var inst_21436 = cljs.core.async.close_BANG_(to);
var state_21467__$1 = state_21467;
var statearr_21492_21556 = state_21467__$1;
(statearr_21492_21556[(2)] = inst_21436);

(statearr_21492_21556[(1)] = (10));


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
var statearr_21496 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21496[(0)] = state_machine__11341__auto__);

(statearr_21496[(1)] = (1));

return statearr_21496;
});
var state_machine__11341__auto____1 = (function (state_21467){
while(true){
var ret_value__11342__auto__ = (function (){try{while(true){
var result__11343__auto__ = switch__11340__auto__(state_21467);
if(cljs.core.keyword_identical_QMARK_(result__11343__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11343__auto__;
}
break;
}
}catch (e21497){if((e21497 instanceof Object)){
var ex__11344__auto__ = e21497;
var statearr_21498_21557 = state_21467;
(statearr_21498_21557[(5)] = ex__11344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21467);

return cljs.core.constant$keyword$40;
} else {
throw e21497;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11342__auto__,cljs.core.constant$keyword$40)){
var G__21558 = state_21467;
state_21467 = G__21558;
continue;
} else {
return ret_value__11342__auto__;
}
break;
}
});
state_machine__11341__auto__ = function(state_21467){
switch(arguments.length){
case 0:
return state_machine__11341__auto____0.call(this);
case 1:
return state_machine__11341__auto____1.call(this,state_21467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11341__auto____0;
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11341__auto____1;
return state_machine__11341__auto__;
})()
;})(switch__11340__auto__,c__11420__auto__,jobs,results,process,async))
})();
var state__11422__auto__ = (function (){var statearr_21499 = (function (){return (f__11421__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11421__auto__.cljs$core$IFn$_invoke$arity$0() : f__11421__auto__.call(null));
})();
(statearr_21499[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11420__auto__);

return statearr_21499;
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
var c__11420__auto___21681 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11420__auto___21681,tc,fc){
return (function (){
var f__11421__auto__ = (function (){var switch__11340__auto__ = ((function (c__11420__auto___21681,tc,fc){
return (function (state_21655){
var state_val_21656 = (state_21655[(1)]);
if((state_val_21656 === (7))){
var inst_21651 = (state_21655[(2)]);
var state_21655__$1 = state_21655;
var statearr_21657_21682 = state_21655__$1;
(statearr_21657_21682[(2)] = inst_21651);

(statearr_21657_21682[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21656 === (1))){
var state_21655__$1 = state_21655;
var statearr_21658_21683 = state_21655__$1;
(statearr_21658_21683[(2)] = null);

(statearr_21658_21683[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21656 === (4))){
var inst_21632 = (state_21655[(7)]);
var inst_21632__$1 = (state_21655[(2)]);
var inst_21633 = (inst_21632__$1 == null);
var state_21655__$1 = (function (){var statearr_21659 = state_21655;
(statearr_21659[(7)] = inst_21632__$1);

return statearr_21659;
})();
if(cljs.core.truth_(inst_21633)){
var statearr_21660_21684 = state_21655__$1;
(statearr_21660_21684[(1)] = (5));

} else {
var statearr_21661_21685 = state_21655__$1;
(statearr_21661_21685[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_21656 === (13))){
var state_21655__$1 = state_21655;
var statearr_21662_21686 = state_21655__$1;
(statearr_21662_21686[(2)] = null);

(statearr_21662_21686[(1)] = (14));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21656 === (6))){
var inst_21632 = (state_21655[(7)]);
var inst_21638 = (function (){var G__21663 = inst_21632;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__21663) : p.call(null,G__21663));
})();
var state_21655__$1 = state_21655;
if(cljs.core.truth_(inst_21638)){
var statearr_21664_21687 = state_21655__$1;
(statearr_21664_21687[(1)] = (9));

} else {
var statearr_21665_21688 = state_21655__$1;
(statearr_21665_21688[(1)] = (10));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_21656 === (3))){
var inst_21653 = (state_21655[(2)]);
var state_21655__$1 = state_21655;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21655__$1,inst_21653);
} else {
if((state_val_21656 === (12))){
var state_21655__$1 = state_21655;
var statearr_21666_21689 = state_21655__$1;
(statearr_21666_21689[(2)] = null);

(statearr_21666_21689[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21656 === (2))){
var state_21655__$1 = state_21655;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21655__$1,(4),ch);
} else {
if((state_val_21656 === (11))){
var inst_21632 = (state_21655[(7)]);
var inst_21642 = (state_21655[(2)]);
var state_21655__$1 = state_21655;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21655__$1,(8),inst_21642,inst_21632);
} else {
if((state_val_21656 === (9))){
var state_21655__$1 = state_21655;
var statearr_21667_21690 = state_21655__$1;
(statearr_21667_21690[(2)] = tc);

(statearr_21667_21690[(1)] = (11));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21656 === (5))){
var inst_21635 = cljs.core.async.close_BANG_(tc);
var inst_21636 = cljs.core.async.close_BANG_(fc);
var state_21655__$1 = (function (){var statearr_21668 = state_21655;
(statearr_21668[(8)] = inst_21635);

return statearr_21668;
})();
var statearr_21669_21691 = state_21655__$1;
(statearr_21669_21691[(2)] = inst_21636);

(statearr_21669_21691[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21656 === (14))){
var inst_21649 = (state_21655[(2)]);
var state_21655__$1 = state_21655;
var statearr_21670_21692 = state_21655__$1;
(statearr_21670_21692[(2)] = inst_21649);

(statearr_21670_21692[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21656 === (10))){
var state_21655__$1 = state_21655;
var statearr_21671_21693 = state_21655__$1;
(statearr_21671_21693[(2)] = fc);

(statearr_21671_21693[(1)] = (11));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21656 === (8))){
var inst_21644 = (state_21655[(2)]);
var state_21655__$1 = state_21655;
if(cljs.core.truth_(inst_21644)){
var statearr_21672_21694 = state_21655__$1;
(statearr_21672_21694[(1)] = (12));

} else {
var statearr_21673_21695 = state_21655__$1;
(statearr_21673_21695[(1)] = (13));

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
});})(c__11420__auto___21681,tc,fc))
;
return ((function (switch__11340__auto__,c__11420__auto___21681,tc,fc){
return (function() {
var state_machine__11341__auto__ = null;
var state_machine__11341__auto____0 = (function (){
var statearr_21677 = [null,null,null,null,null,null,null,null,null];
(statearr_21677[(0)] = state_machine__11341__auto__);

(statearr_21677[(1)] = (1));

return statearr_21677;
});
var state_machine__11341__auto____1 = (function (state_21655){
while(true){
var ret_value__11342__auto__ = (function (){try{while(true){
var result__11343__auto__ = switch__11340__auto__(state_21655);
if(cljs.core.keyword_identical_QMARK_(result__11343__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11343__auto__;
}
break;
}
}catch (e21678){if((e21678 instanceof Object)){
var ex__11344__auto__ = e21678;
var statearr_21679_21696 = state_21655;
(statearr_21679_21696[(5)] = ex__11344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21655);

return cljs.core.constant$keyword$40;
} else {
throw e21678;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11342__auto__,cljs.core.constant$keyword$40)){
var G__21697 = state_21655;
state_21655 = G__21697;
continue;
} else {
return ret_value__11342__auto__;
}
break;
}
});
state_machine__11341__auto__ = function(state_21655){
switch(arguments.length){
case 0:
return state_machine__11341__auto____0.call(this);
case 1:
return state_machine__11341__auto____1.call(this,state_21655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11341__auto____0;
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11341__auto____1;
return state_machine__11341__auto__;
})()
;})(switch__11340__auto__,c__11420__auto___21681,tc,fc))
})();
var state__11422__auto__ = (function (){var statearr_21680 = (function (){return (f__11421__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11421__auto__.cljs$core$IFn$_invoke$arity$0() : f__11421__auto__.call(null));
})();
(statearr_21680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11420__auto___21681);

return statearr_21680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11422__auto__);
});})(c__11420__auto___21681,tc,fc))
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
return (function (state_21746){
var state_val_21747 = (state_21746[(1)]);
if((state_val_21747 === (7))){
var inst_21742 = (state_21746[(2)]);
var state_21746__$1 = state_21746;
var statearr_21748_21766 = state_21746__$1;
(statearr_21748_21766[(2)] = inst_21742);

(statearr_21748_21766[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21747 === (6))){
var inst_21735 = (state_21746[(7)]);
var inst_21732 = (state_21746[(8)]);
var inst_21739 = (function (){var G__21749 = inst_21732;
var G__21750 = inst_21735;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__21749,G__21750) : f.call(null,G__21749,G__21750));
})();
var inst_21732__$1 = inst_21739;
var state_21746__$1 = (function (){var statearr_21751 = state_21746;
(statearr_21751[(8)] = inst_21732__$1);

return statearr_21751;
})();
var statearr_21752_21767 = state_21746__$1;
(statearr_21752_21767[(2)] = null);

(statearr_21752_21767[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21747 === (5))){
var inst_21732 = (state_21746[(8)]);
var state_21746__$1 = state_21746;
var statearr_21753_21768 = state_21746__$1;
(statearr_21753_21768[(2)] = inst_21732);

(statearr_21753_21768[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21747 === (4))){
var inst_21735 = (state_21746[(7)]);
var inst_21735__$1 = (state_21746[(2)]);
var inst_21736 = (inst_21735__$1 == null);
var state_21746__$1 = (function (){var statearr_21754 = state_21746;
(statearr_21754[(7)] = inst_21735__$1);

return statearr_21754;
})();
if(cljs.core.truth_(inst_21736)){
var statearr_21755_21769 = state_21746__$1;
(statearr_21755_21769[(1)] = (5));

} else {
var statearr_21756_21770 = state_21746__$1;
(statearr_21756_21770[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_21747 === (3))){
var inst_21744 = (state_21746[(2)]);
var state_21746__$1 = state_21746;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21746__$1,inst_21744);
} else {
if((state_val_21747 === (2))){
var state_21746__$1 = state_21746;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21746__$1,(4),ch);
} else {
if((state_val_21747 === (1))){
var inst_21732 = init;
var state_21746__$1 = (function (){var statearr_21757 = state_21746;
(statearr_21757[(8)] = inst_21732);

return statearr_21757;
})();
var statearr_21758_21771 = state_21746__$1;
(statearr_21758_21771[(2)] = null);

(statearr_21758_21771[(1)] = (2));


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
var statearr_21762 = [null,null,null,null,null,null,null,null,null];
(statearr_21762[(0)] = state_machine__11341__auto__);

(statearr_21762[(1)] = (1));

return statearr_21762;
});
var state_machine__11341__auto____1 = (function (state_21746){
while(true){
var ret_value__11342__auto__ = (function (){try{while(true){
var result__11343__auto__ = switch__11340__auto__(state_21746);
if(cljs.core.keyword_identical_QMARK_(result__11343__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11343__auto__;
}
break;
}
}catch (e21763){if((e21763 instanceof Object)){
var ex__11344__auto__ = e21763;
var statearr_21764_21772 = state_21746;
(statearr_21764_21772[(5)] = ex__11344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21746);

return cljs.core.constant$keyword$40;
} else {
throw e21763;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11342__auto__,cljs.core.constant$keyword$40)){
var G__21773 = state_21746;
state_21746 = G__21773;
continue;
} else {
return ret_value__11342__auto__;
}
break;
}
});
state_machine__11341__auto__ = function(state_21746){
switch(arguments.length){
case 0:
return state_machine__11341__auto____0.call(this);
case 1:
return state_machine__11341__auto____1.call(this,state_21746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11341__auto____0;
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11341__auto____1;
return state_machine__11341__auto__;
})()
;})(switch__11340__auto__,c__11420__auto__))
})();
var state__11422__auto__ = (function (){var statearr_21765 = (function (){return (f__11421__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11421__auto__.cljs$core$IFn$_invoke$arity$0() : f__11421__auto__.call(null));
})();
(statearr_21765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11420__auto__);

return statearr_21765;
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
return (function (state_21850){
var state_val_21851 = (state_21850[(1)]);
if((state_val_21851 === (7))){
var inst_21832 = (state_21850[(2)]);
var state_21850__$1 = state_21850;
var statearr_21852_21875 = state_21850__$1;
(statearr_21852_21875[(2)] = inst_21832);

(statearr_21852_21875[(1)] = (6));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21851 === (1))){
var inst_21826 = cljs.core.seq(coll);
var inst_21827 = inst_21826;
var state_21850__$1 = (function (){var statearr_21853 = state_21850;
(statearr_21853[(7)] = inst_21827);

return statearr_21853;
})();
var statearr_21854_21876 = state_21850__$1;
(statearr_21854_21876[(2)] = null);

(statearr_21854_21876[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21851 === (4))){
var inst_21827 = (state_21850[(7)]);
var inst_21830 = cljs.core.first(inst_21827);
var state_21850__$1 = state_21850;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21850__$1,(7),ch,inst_21830);
} else {
if((state_val_21851 === (13))){
var inst_21844 = (state_21850[(2)]);
var state_21850__$1 = state_21850;
var statearr_21855_21877 = state_21850__$1;
(statearr_21855_21877[(2)] = inst_21844);

(statearr_21855_21877[(1)] = (10));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21851 === (6))){
var inst_21835 = (state_21850[(2)]);
var state_21850__$1 = state_21850;
if(cljs.core.truth_(inst_21835)){
var statearr_21856_21878 = state_21850__$1;
(statearr_21856_21878[(1)] = (8));

} else {
var statearr_21857_21879 = state_21850__$1;
(statearr_21857_21879[(1)] = (9));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_21851 === (3))){
var inst_21848 = (state_21850[(2)]);
var state_21850__$1 = state_21850;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21850__$1,inst_21848);
} else {
if((state_val_21851 === (12))){
var state_21850__$1 = state_21850;
var statearr_21858_21880 = state_21850__$1;
(statearr_21858_21880[(2)] = null);

(statearr_21858_21880[(1)] = (13));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21851 === (2))){
var inst_21827 = (state_21850[(7)]);
var state_21850__$1 = state_21850;
if(cljs.core.truth_(inst_21827)){
var statearr_21859_21881 = state_21850__$1;
(statearr_21859_21881[(1)] = (4));

} else {
var statearr_21860_21882 = state_21850__$1;
(statearr_21860_21882[(1)] = (5));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_21851 === (11))){
var inst_21841 = cljs.core.async.close_BANG_(ch);
var state_21850__$1 = state_21850;
var statearr_21861_21883 = state_21850__$1;
(statearr_21861_21883[(2)] = inst_21841);

(statearr_21861_21883[(1)] = (13));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21851 === (9))){
var state_21850__$1 = state_21850;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21862_21884 = state_21850__$1;
(statearr_21862_21884[(1)] = (11));

} else {
var statearr_21863_21885 = state_21850__$1;
(statearr_21863_21885[(1)] = (12));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_21851 === (5))){
var inst_21827 = (state_21850[(7)]);
var state_21850__$1 = state_21850;
var statearr_21864_21886 = state_21850__$1;
(statearr_21864_21886[(2)] = inst_21827);

(statearr_21864_21886[(1)] = (6));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21851 === (10))){
var inst_21846 = (state_21850[(2)]);
var state_21850__$1 = state_21850;
var statearr_21865_21887 = state_21850__$1;
(statearr_21865_21887[(2)] = inst_21846);

(statearr_21865_21887[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21851 === (8))){
var inst_21827 = (state_21850[(7)]);
var inst_21837 = cljs.core.next(inst_21827);
var inst_21827__$1 = inst_21837;
var state_21850__$1 = (function (){var statearr_21866 = state_21850;
(statearr_21866[(7)] = inst_21827__$1);

return statearr_21866;
})();
var statearr_21867_21888 = state_21850__$1;
(statearr_21867_21888[(2)] = null);

(statearr_21867_21888[(1)] = (2));


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
var statearr_21871 = [null,null,null,null,null,null,null,null];
(statearr_21871[(0)] = state_machine__11341__auto__);

(statearr_21871[(1)] = (1));

return statearr_21871;
});
var state_machine__11341__auto____1 = (function (state_21850){
while(true){
var ret_value__11342__auto__ = (function (){try{while(true){
var result__11343__auto__ = switch__11340__auto__(state_21850);
if(cljs.core.keyword_identical_QMARK_(result__11343__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11343__auto__;
}
break;
}
}catch (e21872){if((e21872 instanceof Object)){
var ex__11344__auto__ = e21872;
var statearr_21873_21889 = state_21850;
(statearr_21873_21889[(5)] = ex__11344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21850);

return cljs.core.constant$keyword$40;
} else {
throw e21872;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11342__auto__,cljs.core.constant$keyword$40)){
var G__21890 = state_21850;
state_21850 = G__21890;
continue;
} else {
return ret_value__11342__auto__;
}
break;
}
});
state_machine__11341__auto__ = function(state_21850){
switch(arguments.length){
case 0:
return state_machine__11341__auto____0.call(this);
case 1:
return state_machine__11341__auto____1.call(this,state_21850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11341__auto____0;
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11341__auto____1;
return state_machine__11341__auto__;
})()
;})(switch__11340__auto__,c__11420__auto__))
})();
var state__11422__auto__ = (function (){var statearr_21874 = (function (){return (f__11421__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11421__auto__.cljs$core$IFn$_invoke$arity$0() : f__11421__auto__.call(null));
})();
(statearr_21874[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11420__auto__);

return statearr_21874;
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

cljs.core.async.Mux = (function (){var obj21892 = {};
return obj21892;
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
return (function (){var or__3583__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__21896 = x__4227__auto__;
return goog.typeOf(G__21896);
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


cljs.core.async.Mult = (function (){var obj21898 = {};
return obj21898;
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
return (function (){var or__3583__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__21902 = x__4227__auto__;
return goog.typeOf(G__21902);
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
return (function (){var or__3583__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__21906 = x__4227__auto__;
return goog.typeOf(G__21906);
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
return (function (){var or__3583__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__21910 = x__4227__auto__;
return goog.typeOf(G__21910);
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
var cs = (function (){var G__22140 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22140) : cljs.core.atom.call(null,G__22140));
})();
var m = (function (){
if(typeof cljs.core.async.t22141 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22141 = (function (cs,ch,mult,meta22142){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta22142 = meta22142;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22141.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t22141.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t22141.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t22141.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22144_22369 = self__.cs;
var G__22145_22370 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22144_22369,G__22145_22370) : cljs.core.reset_BANG_.call(null,G__22144_22369,G__22145_22370));

return null;
});})(cs))
;

cljs.core.async.t22141.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t22141.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t22141.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22143){
var self__ = this;
var _22143__$1 = this;
return self__.meta22142;
});})(cs))
;

cljs.core.async.t22141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22143,meta22142__$1){
var self__ = this;
var _22143__$1 = this;
return (new cljs.core.async.t22141(self__.cs,self__.ch,self__.mult,meta22142__$1));
});})(cs))
;

cljs.core.async.t22141.cljs$lang$type = true;

cljs.core.async.t22141.cljs$lang$ctorStr = "cljs.core.async/t22141";

cljs.core.async.t22141.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4170__auto__,writer__4171__auto__,opt__4172__auto__){
return cljs.core._write(writer__4171__auto__,"cljs.core.async/t22141");
});})(cs))
;

cljs.core.async.__GT_t22141 = ((function (cs){
return (function __GT_t22141(cs__$1,ch__$1,mult__$1,meta22142){
return (new cljs.core.async.t22141(cs__$1,ch__$1,mult__$1,meta22142));
});})(cs))
;

}

return (new cljs.core.async.t22141(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__22146 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22146) : cljs.core.atom.call(null,G__22146));
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
var c__11420__auto___22371 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11420__auto___22371,cs,m,dchan,dctr,done){
return (function (){
var f__11421__auto__ = (function (){var switch__11340__auto__ = ((function (c__11420__auto___22371,cs,m,dchan,dctr,done){
return (function (state_22277){
var state_val_22278 = (state_22277[(1)]);
if((state_val_22278 === (7))){
var inst_22273 = (state_22277[(2)]);
var state_22277__$1 = state_22277;
var statearr_22279_22372 = state_22277__$1;
(statearr_22279_22372[(2)] = inst_22273);

(statearr_22279_22372[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22278 === (20))){
var inst_22178 = (state_22277[(7)]);
var inst_22188 = cljs.core.first(inst_22178);
var inst_22189 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22188,(0),null);
var inst_22190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22188,(1),null);
var state_22277__$1 = (function (){var statearr_22280 = state_22277;
(statearr_22280[(8)] = inst_22189);

return statearr_22280;
})();
if(cljs.core.truth_(inst_22190)){
var statearr_22281_22373 = state_22277__$1;
(statearr_22281_22373[(1)] = (22));

} else {
var statearr_22282_22374 = state_22277__$1;
(statearr_22282_22374[(1)] = (23));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22278 === (27))){
var inst_22225 = (state_22277[(9)]);
var inst_22149 = (state_22277[(10)]);
var inst_22218 = (state_22277[(11)]);
var inst_22220 = (state_22277[(12)]);
var inst_22225__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_22218,inst_22220);
var inst_22226 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_22225__$1,inst_22149,done);
var state_22277__$1 = (function (){var statearr_22283 = state_22277;
(statearr_22283[(9)] = inst_22225__$1);

return statearr_22283;
})();
if(cljs.core.truth_(inst_22226)){
var statearr_22284_22375 = state_22277__$1;
(statearr_22284_22375[(1)] = (30));

} else {
var statearr_22285_22376 = state_22277__$1;
(statearr_22285_22376[(1)] = (31));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22278 === (1))){
var state_22277__$1 = state_22277;
var statearr_22286_22377 = state_22277__$1;
(statearr_22286_22377[(2)] = null);

(statearr_22286_22377[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22278 === (24))){
var inst_22178 = (state_22277[(7)]);
var inst_22195 = (state_22277[(2)]);
var inst_22196 = cljs.core.next(inst_22178);
var inst_22158 = inst_22196;
var inst_22159 = null;
var inst_22160 = (0);
var inst_22161 = (0);
var state_22277__$1 = (function (){var statearr_22287 = state_22277;
(statearr_22287[(13)] = inst_22158);

(statearr_22287[(14)] = inst_22160);

(statearr_22287[(15)] = inst_22161);

(statearr_22287[(16)] = inst_22195);

(statearr_22287[(17)] = inst_22159);

return statearr_22287;
})();
var statearr_22288_22378 = state_22277__$1;
(statearr_22288_22378[(2)] = null);

(statearr_22288_22378[(1)] = (8));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22278 === (39))){
var state_22277__$1 = state_22277;
var statearr_22292_22379 = state_22277__$1;
(statearr_22292_22379[(2)] = null);

(statearr_22292_22379[(1)] = (41));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22278 === (4))){
var inst_22149 = (state_22277[(10)]);
var inst_22149__$1 = (state_22277[(2)]);
var inst_22150 = (inst_22149__$1 == null);
var state_22277__$1 = (function (){var statearr_22293 = state_22277;
(statearr_22293[(10)] = inst_22149__$1);

return statearr_22293;
})();
if(cljs.core.truth_(inst_22150)){
var statearr_22294_22380 = state_22277__$1;
(statearr_22294_22380[(1)] = (5));

} else {
var statearr_22295_22381 = state_22277__$1;
(statearr_22295_22381[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22278 === (15))){
var inst_22158 = (state_22277[(13)]);
var inst_22160 = (state_22277[(14)]);
var inst_22161 = (state_22277[(15)]);
var inst_22159 = (state_22277[(17)]);
var inst_22174 = (state_22277[(2)]);
var inst_22175 = (inst_22161 + (1));
var tmp22289 = inst_22158;
var tmp22290 = inst_22160;
var tmp22291 = inst_22159;
var inst_22158__$1 = tmp22289;
var inst_22159__$1 = tmp22291;
var inst_22160__$1 = tmp22290;
var inst_22161__$1 = inst_22175;
var state_22277__$1 = (function (){var statearr_22296 = state_22277;
(statearr_22296[(13)] = inst_22158__$1);

(statearr_22296[(14)] = inst_22160__$1);

(statearr_22296[(18)] = inst_22174);

(statearr_22296[(15)] = inst_22161__$1);

(statearr_22296[(17)] = inst_22159__$1);

return statearr_22296;
})();
var statearr_22297_22382 = state_22277__$1;
(statearr_22297_22382[(2)] = null);

(statearr_22297_22382[(1)] = (8));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22278 === (21))){
var inst_22199 = (state_22277[(2)]);
var state_22277__$1 = state_22277;
var statearr_22301_22383 = state_22277__$1;
(statearr_22301_22383[(2)] = inst_22199);

(statearr_22301_22383[(1)] = (18));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22278 === (31))){
var inst_22225 = (state_22277[(9)]);
var inst_22229 = done(null);
var inst_22230 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_22225);
var state_22277__$1 = (function (){var statearr_22302 = state_22277;
(statearr_22302[(19)] = inst_22229);

return statearr_22302;
})();
var statearr_22303_22384 = state_22277__$1;
(statearr_22303_22384[(2)] = inst_22230);

(statearr_22303_22384[(1)] = (32));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22278 === (32))){
var inst_22219 = (state_22277[(20)]);
var inst_22218 = (state_22277[(11)]);
var inst_22217 = (state_22277[(21)]);
var inst_22220 = (state_22277[(12)]);
var inst_22232 = (state_22277[(2)]);
var inst_22233 = (inst_22220 + (1));
var tmp22298 = inst_22219;
var tmp22299 = inst_22218;
var tmp22300 = inst_22217;
var inst_22217__$1 = tmp22300;
var inst_22218__$1 = tmp22299;
var inst_22219__$1 = tmp22298;
var inst_22220__$1 = inst_22233;
var state_22277__$1 = (function (){var statearr_22304 = state_22277;
(statearr_22304[(22)] = inst_22232);

(statearr_22304[(20)] = inst_22219__$1);

(statearr_22304[(11)] = inst_22218__$1);

(statearr_22304[(21)] = inst_22217__$1);

(statearr_22304[(12)] = inst_22220__$1);

return statearr_22304;
})();
var statearr_22305_22385 = state_22277__$1;
(statearr_22305_22385[(2)] = null);

(statearr_22305_22385[(1)] = (25));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22278 === (40))){
var inst_22245 = (state_22277[(23)]);
var inst_22249 = done(null);
var inst_22250 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_22245);
var state_22277__$1 = (function (){var statearr_22306 = state_22277;
(statearr_22306[(24)] = inst_22249);

return statearr_22306;
})();
var statearr_22307_22386 = state_22277__$1;
(statearr_22307_22386[(2)] = inst_22250);

(statearr_22307_22386[(1)] = (41));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22278 === (33))){
var inst_22236 = (state_22277[(25)]);
var inst_22238 = cljs.core.chunked_seq_QMARK_(inst_22236);
var state_22277__$1 = state_22277;
if(inst_22238){
var statearr_22308_22387 = state_22277__$1;
(statearr_22308_22387[(1)] = (36));

} else {
var statearr_22309_22388 = state_22277__$1;
(statearr_22309_22388[(1)] = (37));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22278 === (13))){
var inst_22168 = (state_22277[(26)]);
var inst_22171 = cljs.core.async.close_BANG_(inst_22168);
var state_22277__$1 = state_22277;
var statearr_22310_22389 = state_22277__$1;
(statearr_22310_22389[(2)] = inst_22171);

(statearr_22310_22389[(1)] = (15));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22278 === (22))){
var inst_22189 = (state_22277[(8)]);
var inst_22192 = cljs.core.async.close_BANG_(inst_22189);
var state_22277__$1 = state_22277;
var statearr_22311_22390 = state_22277__$1;
(statearr_22311_22390[(2)] = inst_22192);

(statearr_22311_22390[(1)] = (24));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22278 === (36))){
var inst_22236 = (state_22277[(25)]);
var inst_22240 = cljs.core.chunk_first(inst_22236);
var inst_22241 = cljs.core.chunk_rest(inst_22236);
var inst_22242 = cljs.core.count(inst_22240);
var inst_22217 = inst_22241;
var inst_22218 = inst_22240;
var inst_22219 = inst_22242;
var inst_22220 = (0);
var state_22277__$1 = (function (){var statearr_22312 = state_22277;
(statearr_22312[(20)] = inst_22219);

(statearr_22312[(11)] = inst_22218);

(statearr_22312[(21)] = inst_22217);

(statearr_22312[(12)] = inst_22220);

return statearr_22312;
})();
var statearr_22313_22391 = state_22277__$1;
(statearr_22313_22391[(2)] = null);

(statearr_22313_22391[(1)] = (25));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22278 === (41))){
var inst_22236 = (state_22277[(25)]);
var inst_22252 = (state_22277[(2)]);
var inst_22253 = cljs.core.next(inst_22236);
var inst_22217 = inst_22253;
var inst_22218 = null;
var inst_22219 = (0);
var inst_22220 = (0);
var state_22277__$1 = (function (){var statearr_22314 = state_22277;
(statearr_22314[(27)] = inst_22252);

(statearr_22314[(20)] = inst_22219);

(statearr_22314[(11)] = inst_22218);

(statearr_22314[(21)] = inst_22217);

(statearr_22314[(12)] = inst_22220);

return statearr_22314;
})();
var statearr_22315_22392 = state_22277__$1;
(statearr_22315_22392[(2)] = null);

(statearr_22315_22392[(1)] = (25));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22278 === (43))){
var state_22277__$1 = state_22277;
var statearr_22316_22393 = state_22277__$1;
(statearr_22316_22393[(2)] = null);

(statearr_22316_22393[(1)] = (44));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22278 === (29))){
var inst_22261 = (state_22277[(2)]);
var state_22277__$1 = state_22277;
var statearr_22317_22394 = state_22277__$1;
(statearr_22317_22394[(2)] = inst_22261);

(statearr_22317_22394[(1)] = (26));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22278 === (44))){
var inst_22270 = (state_22277[(2)]);
var state_22277__$1 = (function (){var statearr_22318 = state_22277;
(statearr_22318[(28)] = inst_22270);

return statearr_22318;
})();
var statearr_22319_22395 = state_22277__$1;
(statearr_22319_22395[(2)] = null);

(statearr_22319_22395[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22278 === (6))){
var inst_22209 = (state_22277[(29)]);
var inst_22208 = (function (){var G__22320 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22320) : cljs.core.deref.call(null,G__22320));
})();
var inst_22209__$1 = cljs.core.keys(inst_22208);
var inst_22210 = cljs.core.count(inst_22209__$1);
var inst_22211 = (function (){var G__22321 = dctr;
var G__22322 = inst_22210;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22321,G__22322) : cljs.core.reset_BANG_.call(null,G__22321,G__22322));
})();
var inst_22216 = cljs.core.seq(inst_22209__$1);
var inst_22217 = inst_22216;
var inst_22218 = null;
var inst_22219 = (0);
var inst_22220 = (0);
var state_22277__$1 = (function (){var statearr_22323 = state_22277;
(statearr_22323[(29)] = inst_22209__$1);

(statearr_22323[(20)] = inst_22219);

(statearr_22323[(11)] = inst_22218);

(statearr_22323[(21)] = inst_22217);

(statearr_22323[(30)] = inst_22211);

(statearr_22323[(12)] = inst_22220);

return statearr_22323;
})();
var statearr_22324_22396 = state_22277__$1;
(statearr_22324_22396[(2)] = null);

(statearr_22324_22396[(1)] = (25));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22278 === (28))){
var inst_22236 = (state_22277[(25)]);
var inst_22217 = (state_22277[(21)]);
var inst_22236__$1 = cljs.core.seq(inst_22217);
var state_22277__$1 = (function (){var statearr_22325 = state_22277;
(statearr_22325[(25)] = inst_22236__$1);

return statearr_22325;
})();
if(inst_22236__$1){
var statearr_22326_22397 = state_22277__$1;
(statearr_22326_22397[(1)] = (33));

} else {
var statearr_22327_22398 = state_22277__$1;
(statearr_22327_22398[(1)] = (34));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22278 === (25))){
var inst_22219 = (state_22277[(20)]);
var inst_22220 = (state_22277[(12)]);
var inst_22222 = (inst_22220 < inst_22219);
var inst_22223 = inst_22222;
var state_22277__$1 = state_22277;
if(cljs.core.truth_(inst_22223)){
var statearr_22328_22399 = state_22277__$1;
(statearr_22328_22399[(1)] = (27));

} else {
var statearr_22329_22400 = state_22277__$1;
(statearr_22329_22400[(1)] = (28));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22278 === (34))){
var state_22277__$1 = state_22277;
var statearr_22330_22401 = state_22277__$1;
(statearr_22330_22401[(2)] = null);

(statearr_22330_22401[(1)] = (35));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22278 === (17))){
var state_22277__$1 = state_22277;
var statearr_22331_22402 = state_22277__$1;
(statearr_22331_22402[(2)] = null);

(statearr_22331_22402[(1)] = (18));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22278 === (3))){
var inst_22275 = (state_22277[(2)]);
var state_22277__$1 = state_22277;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22277__$1,inst_22275);
} else {
if((state_val_22278 === (12))){
var inst_22204 = (state_22277[(2)]);
var state_22277__$1 = state_22277;
var statearr_22332_22403 = state_22277__$1;
(statearr_22332_22403[(2)] = inst_22204);

(statearr_22332_22403[(1)] = (9));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22278 === (2))){
var state_22277__$1 = state_22277;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22277__$1,(4),ch);
} else {
if((state_val_22278 === (23))){
var state_22277__$1 = state_22277;
var statearr_22333_22404 = state_22277__$1;
(statearr_22333_22404[(2)] = null);

(statearr_22333_22404[(1)] = (24));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22278 === (35))){
var inst_22259 = (state_22277[(2)]);
var state_22277__$1 = state_22277;
var statearr_22334_22405 = state_22277__$1;
(statearr_22334_22405[(2)] = inst_22259);

(statearr_22334_22405[(1)] = (29));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22278 === (19))){
var inst_22178 = (state_22277[(7)]);
var inst_22182 = cljs.core.chunk_first(inst_22178);
var inst_22183 = cljs.core.chunk_rest(inst_22178);
var inst_22184 = cljs.core.count(inst_22182);
var inst_22158 = inst_22183;
var inst_22159 = inst_22182;
var inst_22160 = inst_22184;
var inst_22161 = (0);
var state_22277__$1 = (function (){var statearr_22335 = state_22277;
(statearr_22335[(13)] = inst_22158);

(statearr_22335[(14)] = inst_22160);

(statearr_22335[(15)] = inst_22161);

(statearr_22335[(17)] = inst_22159);

return statearr_22335;
})();
var statearr_22336_22406 = state_22277__$1;
(statearr_22336_22406[(2)] = null);

(statearr_22336_22406[(1)] = (8));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22278 === (11))){
var inst_22158 = (state_22277[(13)]);
var inst_22178 = (state_22277[(7)]);
var inst_22178__$1 = cljs.core.seq(inst_22158);
var state_22277__$1 = (function (){var statearr_22337 = state_22277;
(statearr_22337[(7)] = inst_22178__$1);

return statearr_22337;
})();
if(inst_22178__$1){
var statearr_22338_22407 = state_22277__$1;
(statearr_22338_22407[(1)] = (16));

} else {
var statearr_22339_22408 = state_22277__$1;
(statearr_22339_22408[(1)] = (17));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22278 === (9))){
var inst_22206 = (state_22277[(2)]);
var state_22277__$1 = state_22277;
var statearr_22340_22409 = state_22277__$1;
(statearr_22340_22409[(2)] = inst_22206);

(statearr_22340_22409[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22278 === (5))){
var inst_22156 = (function (){var G__22341 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22341) : cljs.core.deref.call(null,G__22341));
})();
var inst_22157 = cljs.core.seq(inst_22156);
var inst_22158 = inst_22157;
var inst_22159 = null;
var inst_22160 = (0);
var inst_22161 = (0);
var state_22277__$1 = (function (){var statearr_22342 = state_22277;
(statearr_22342[(13)] = inst_22158);

(statearr_22342[(14)] = inst_22160);

(statearr_22342[(15)] = inst_22161);

(statearr_22342[(17)] = inst_22159);

return statearr_22342;
})();
var statearr_22343_22410 = state_22277__$1;
(statearr_22343_22410[(2)] = null);

(statearr_22343_22410[(1)] = (8));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22278 === (14))){
var state_22277__$1 = state_22277;
var statearr_22344_22411 = state_22277__$1;
(statearr_22344_22411[(2)] = null);

(statearr_22344_22411[(1)] = (15));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22278 === (45))){
var inst_22267 = (state_22277[(2)]);
var state_22277__$1 = state_22277;
var statearr_22345_22412 = state_22277__$1;
(statearr_22345_22412[(2)] = inst_22267);

(statearr_22345_22412[(1)] = (44));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22278 === (26))){
var inst_22209 = (state_22277[(29)]);
var inst_22263 = (state_22277[(2)]);
var inst_22264 = cljs.core.seq(inst_22209);
var state_22277__$1 = (function (){var statearr_22346 = state_22277;
(statearr_22346[(31)] = inst_22263);

return statearr_22346;
})();
if(inst_22264){
var statearr_22347_22413 = state_22277__$1;
(statearr_22347_22413[(1)] = (42));

} else {
var statearr_22348_22414 = state_22277__$1;
(statearr_22348_22414[(1)] = (43));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22278 === (16))){
var inst_22178 = (state_22277[(7)]);
var inst_22180 = cljs.core.chunked_seq_QMARK_(inst_22178);
var state_22277__$1 = state_22277;
if(inst_22180){
var statearr_22349_22415 = state_22277__$1;
(statearr_22349_22415[(1)] = (19));

} else {
var statearr_22350_22416 = state_22277__$1;
(statearr_22350_22416[(1)] = (20));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22278 === (38))){
var inst_22256 = (state_22277[(2)]);
var state_22277__$1 = state_22277;
var statearr_22351_22417 = state_22277__$1;
(statearr_22351_22417[(2)] = inst_22256);

(statearr_22351_22417[(1)] = (35));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22278 === (30))){
var state_22277__$1 = state_22277;
var statearr_22352_22418 = state_22277__$1;
(statearr_22352_22418[(2)] = null);

(statearr_22352_22418[(1)] = (32));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22278 === (10))){
var inst_22161 = (state_22277[(15)]);
var inst_22159 = (state_22277[(17)]);
var inst_22167 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_22159,inst_22161);
var inst_22168 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22167,(0),null);
var inst_22169 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22167,(1),null);
var state_22277__$1 = (function (){var statearr_22353 = state_22277;
(statearr_22353[(26)] = inst_22168);

return statearr_22353;
})();
if(cljs.core.truth_(inst_22169)){
var statearr_22354_22419 = state_22277__$1;
(statearr_22354_22419[(1)] = (13));

} else {
var statearr_22355_22420 = state_22277__$1;
(statearr_22355_22420[(1)] = (14));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22278 === (18))){
var inst_22202 = (state_22277[(2)]);
var state_22277__$1 = state_22277;
var statearr_22356_22421 = state_22277__$1;
(statearr_22356_22421[(2)] = inst_22202);

(statearr_22356_22421[(1)] = (12));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22278 === (42))){
var state_22277__$1 = state_22277;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22277__$1,(45),dchan);
} else {
if((state_val_22278 === (37))){
var inst_22245 = (state_22277[(23)]);
var inst_22236 = (state_22277[(25)]);
var inst_22149 = (state_22277[(10)]);
var inst_22245__$1 = cljs.core.first(inst_22236);
var inst_22246 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_22245__$1,inst_22149,done);
var state_22277__$1 = (function (){var statearr_22357 = state_22277;
(statearr_22357[(23)] = inst_22245__$1);

return statearr_22357;
})();
if(cljs.core.truth_(inst_22246)){
var statearr_22358_22422 = state_22277__$1;
(statearr_22358_22422[(1)] = (39));

} else {
var statearr_22359_22423 = state_22277__$1;
(statearr_22359_22423[(1)] = (40));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22278 === (8))){
var inst_22160 = (state_22277[(14)]);
var inst_22161 = (state_22277[(15)]);
var inst_22163 = (inst_22161 < inst_22160);
var inst_22164 = inst_22163;
var state_22277__$1 = state_22277;
if(cljs.core.truth_(inst_22164)){
var statearr_22360_22424 = state_22277__$1;
(statearr_22360_22424[(1)] = (10));

} else {
var statearr_22361_22425 = state_22277__$1;
(statearr_22361_22425[(1)] = (11));

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
});})(c__11420__auto___22371,cs,m,dchan,dctr,done))
;
return ((function (switch__11340__auto__,c__11420__auto___22371,cs,m,dchan,dctr,done){
return (function() {
var state_machine__11341__auto__ = null;
var state_machine__11341__auto____0 = (function (){
var statearr_22365 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22365[(0)] = state_machine__11341__auto__);

(statearr_22365[(1)] = (1));

return statearr_22365;
});
var state_machine__11341__auto____1 = (function (state_22277){
while(true){
var ret_value__11342__auto__ = (function (){try{while(true){
var result__11343__auto__ = switch__11340__auto__(state_22277);
if(cljs.core.keyword_identical_QMARK_(result__11343__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11343__auto__;
}
break;
}
}catch (e22366){if((e22366 instanceof Object)){
var ex__11344__auto__ = e22366;
var statearr_22367_22426 = state_22277;
(statearr_22367_22426[(5)] = ex__11344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22277);

return cljs.core.constant$keyword$40;
} else {
throw e22366;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11342__auto__,cljs.core.constant$keyword$40)){
var G__22427 = state_22277;
state_22277 = G__22427;
continue;
} else {
return ret_value__11342__auto__;
}
break;
}
});
state_machine__11341__auto__ = function(state_22277){
switch(arguments.length){
case 0:
return state_machine__11341__auto____0.call(this);
case 1:
return state_machine__11341__auto____1.call(this,state_22277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11341__auto____0;
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11341__auto____1;
return state_machine__11341__auto__;
})()
;})(switch__11340__auto__,c__11420__auto___22371,cs,m,dchan,dctr,done))
})();
var state__11422__auto__ = (function (){var statearr_22368 = (function (){return (f__11421__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11421__auto__.cljs$core$IFn$_invoke$arity$0() : f__11421__auto__.call(null));
})();
(statearr_22368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11420__auto___22371);

return statearr_22368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11422__auto__);
});})(c__11420__auto___22371,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj22432 = {};
return obj22432;
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
return (function (){var or__3583__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__22436 = x__4227__auto__;
return goog.typeOf(G__22436);
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
return (function (){var or__3583__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__22440 = x__4227__auto__;
return goog.typeOf(G__22440);
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
return (function (){var or__3583__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__22444 = x__4227__auto__;
return goog.typeOf(G__22444);
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
return (function (){var or__3583__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__22448 = x__4227__auto__;
return goog.typeOf(G__22448);
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
return (function (){var or__3583__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__22452 = x__4227__auto__;
return goog.typeOf(G__22452);
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__22453){
var map__22459 = p__22453;
var map__22459__$1 = ((cljs.core.seq_QMARK_(map__22459))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22459):map__22459);
var opts = map__22459__$1;
var statearr_22460_22464 = state;
(statearr_22460_22464[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__22459,map__22459__$1,opts){
return (function (val){
var statearr_22461_22465 = state;
(statearr_22461_22465[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__22459,map__22459__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_22462_22466 = state;
(statearr_22462_22466[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__22463 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22463) : cljs.core.deref.call(null,G__22463));
})());


return cljs.core.constant$keyword$40;
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__22453 = null;
if (arguments.length > 3) {
var G__22467__i = 0, G__22467__a = new Array(arguments.length -  3);
while (G__22467__i < G__22467__a.length) {G__22467__a[G__22467__i] = arguments[G__22467__i + 3]; ++G__22467__i;}
  p__22453 = new cljs.core.IndexedSeq(G__22467__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__22453);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__22468){
var state = cljs.core.first(arglist__22468);
arglist__22468 = cljs.core.next(arglist__22468);
var cont_block = cljs.core.first(arglist__22468);
arglist__22468 = cljs.core.next(arglist__22468);
var ports = cljs.core.first(arglist__22468);
var p__22453 = cljs.core.rest(arglist__22468);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__22453);
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
var cs = (function (){var G__22601 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22601) : cljs.core.atom.call(null,G__22601));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$49,null,cljs.core.constant$keyword$50,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$51);
var solo_mode = (function (){var G__22602 = cljs.core.constant$keyword$50;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22602) : cljs.core.atom.call(null,G__22602));
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
if(cljs.core.truth_((function (){var G__22603 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__22603) : attr.call(null,G__22603));
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
var chs = (function (){var G__22604 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22604) : cljs.core.deref.call(null,G__22604));
})();
var mode = (function (){var G__22605 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22605) : cljs.core.deref.call(null,G__22605));
})();
var solos = pick(cljs.core.constant$keyword$51,chs);
var pauses = pick(cljs.core.constant$keyword$49,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$52,solos,cljs.core.constant$keyword$53,pick(cljs.core.constant$keyword$50,chs),cljs.core.constant$keyword$54,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$49)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t22606 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22606 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22607){
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
this.meta22607 = meta22607;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22606.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t22606.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22606.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22606.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22609_22733 = self__.cs;
var G__22610_22734 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22609_22733,G__22610_22734) : cljs.core.reset_BANG_.call(null,G__22609_22733,G__22610_22734));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22606.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22606.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;

var G__22611_22735 = self__.solo_mode;
var G__22612_22736 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22611_22735,G__22612_22736) : cljs.core.reset_BANG_.call(null,G__22611_22735,G__22612_22736));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22606.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t22606.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22606.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22608){
var self__ = this;
var _22608__$1 = this;
return self__.meta22607;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22608,meta22607__$1){
var self__ = this;
var _22608__$1 = this;
return (new cljs.core.async.t22606(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22607__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t22606.cljs$lang$type = true;

cljs.core.async.t22606.cljs$lang$ctorStr = "cljs.core.async/t22606";

cljs.core.async.t22606.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4170__auto__,writer__4171__auto__,opt__4172__auto__){
return cljs.core._write(writer__4171__auto__,"cljs.core.async/t22606");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t22606 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t22606(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22607){
return (new cljs.core.async.t22606(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22607));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t22606(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11420__auto___22737 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11420__auto___22737,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__11421__auto__ = (function (){var switch__11340__auto__ = ((function (c__11420__auto___22737,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22684){
var state_val_22685 = (state_22684[(1)]);
if((state_val_22685 === (7))){
var inst_22626 = (state_22684[(7)]);
var inst_22631 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_22626);
var state_22684__$1 = state_22684;
var statearr_22686_22738 = state_22684__$1;
(statearr_22686_22738[(2)] = inst_22631);

(statearr_22686_22738[(1)] = (9));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22685 === (20))){
var inst_22641 = (state_22684[(8)]);
var state_22684__$1 = state_22684;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22684__$1,(23),out,inst_22641);
} else {
if((state_val_22685 === (1))){
var inst_22616 = (state_22684[(9)]);
var inst_22616__$1 = calc_state();
var inst_22617 = cljs.core.seq_QMARK_(inst_22616__$1);
var state_22684__$1 = (function (){var statearr_22687 = state_22684;
(statearr_22687[(9)] = inst_22616__$1);

return statearr_22687;
})();
if(inst_22617){
var statearr_22688_22739 = state_22684__$1;
(statearr_22688_22739[(1)] = (2));

} else {
var statearr_22689_22740 = state_22684__$1;
(statearr_22689_22740[(1)] = (3));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22685 === (24))){
var inst_22634 = (state_22684[(10)]);
var inst_22626 = inst_22634;
var state_22684__$1 = (function (){var statearr_22690 = state_22684;
(statearr_22690[(7)] = inst_22626);

return statearr_22690;
})();
var statearr_22691_22741 = state_22684__$1;
(statearr_22691_22741[(2)] = null);

(statearr_22691_22741[(1)] = (5));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22685 === (4))){
var inst_22616 = (state_22684[(9)]);
var inst_22622 = (state_22684[(2)]);
var inst_22623 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22622,cljs.core.constant$keyword$54);
var inst_22624 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22622,cljs.core.constant$keyword$53);
var inst_22625 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22622,cljs.core.constant$keyword$52);
var inst_22626 = inst_22616;
var state_22684__$1 = (function (){var statearr_22692 = state_22684;
(statearr_22692[(7)] = inst_22626);

(statearr_22692[(11)] = inst_22623);

(statearr_22692[(12)] = inst_22625);

(statearr_22692[(13)] = inst_22624);

return statearr_22692;
})();
var statearr_22693_22742 = state_22684__$1;
(statearr_22693_22742[(2)] = null);

(statearr_22693_22742[(1)] = (5));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22685 === (15))){
var state_22684__$1 = state_22684;
var statearr_22694_22743 = state_22684__$1;
(statearr_22694_22743[(2)] = null);

(statearr_22694_22743[(1)] = (16));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22685 === (21))){
var inst_22634 = (state_22684[(10)]);
var inst_22626 = inst_22634;
var state_22684__$1 = (function (){var statearr_22695 = state_22684;
(statearr_22695[(7)] = inst_22626);

return statearr_22695;
})();
var statearr_22696_22744 = state_22684__$1;
(statearr_22696_22744[(2)] = null);

(statearr_22696_22744[(1)] = (5));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22685 === (13))){
var inst_22680 = (state_22684[(2)]);
var state_22684__$1 = state_22684;
var statearr_22697_22745 = state_22684__$1;
(statearr_22697_22745[(2)] = inst_22680);

(statearr_22697_22745[(1)] = (6));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22685 === (22))){
var inst_22678 = (state_22684[(2)]);
var state_22684__$1 = state_22684;
var statearr_22698_22746 = state_22684__$1;
(statearr_22698_22746[(2)] = inst_22678);

(statearr_22698_22746[(1)] = (13));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22685 === (6))){
var inst_22682 = (state_22684[(2)]);
var state_22684__$1 = state_22684;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22684__$1,inst_22682);
} else {
if((state_val_22685 === (25))){
var state_22684__$1 = state_22684;
var statearr_22699_22747 = state_22684__$1;
(statearr_22699_22747[(2)] = null);

(statearr_22699_22747[(1)] = (26));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22685 === (17))){
var inst_22657 = (state_22684[(14)]);
var state_22684__$1 = state_22684;
var statearr_22700_22748 = state_22684__$1;
(statearr_22700_22748[(2)] = inst_22657);

(statearr_22700_22748[(1)] = (19));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22685 === (3))){
var inst_22616 = (state_22684[(9)]);
var state_22684__$1 = state_22684;
var statearr_22701_22749 = state_22684__$1;
(statearr_22701_22749[(2)] = inst_22616);

(statearr_22701_22749[(1)] = (4));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22685 === (12))){
var inst_22642 = (state_22684[(15)]);
var inst_22637 = (state_22684[(16)]);
var inst_22657 = (state_22684[(14)]);
var inst_22657__$1 = (function (){var G__22702 = inst_22642;
return (inst_22637.cljs$core$IFn$_invoke$arity$1 ? inst_22637.cljs$core$IFn$_invoke$arity$1(G__22702) : inst_22637.call(null,G__22702));
})();
var state_22684__$1 = (function (){var statearr_22703 = state_22684;
(statearr_22703[(14)] = inst_22657__$1);

return statearr_22703;
})();
if(cljs.core.truth_(inst_22657__$1)){
var statearr_22704_22750 = state_22684__$1;
(statearr_22704_22750[(1)] = (17));

} else {
var statearr_22705_22751 = state_22684__$1;
(statearr_22705_22751[(1)] = (18));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22685 === (2))){
var inst_22616 = (state_22684[(9)]);
var inst_22619 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_22616);
var state_22684__$1 = state_22684;
var statearr_22706_22752 = state_22684__$1;
(statearr_22706_22752[(2)] = inst_22619);

(statearr_22706_22752[(1)] = (4));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22685 === (23))){
var inst_22669 = (state_22684[(2)]);
var state_22684__$1 = state_22684;
if(cljs.core.truth_(inst_22669)){
var statearr_22707_22753 = state_22684__$1;
(statearr_22707_22753[(1)] = (24));

} else {
var statearr_22708_22754 = state_22684__$1;
(statearr_22708_22754[(1)] = (25));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22685 === (19))){
var inst_22666 = (state_22684[(2)]);
var state_22684__$1 = state_22684;
if(cljs.core.truth_(inst_22666)){
var statearr_22709_22755 = state_22684__$1;
(statearr_22709_22755[(1)] = (20));

} else {
var statearr_22710_22756 = state_22684__$1;
(statearr_22710_22756[(1)] = (21));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22685 === (11))){
var inst_22641 = (state_22684[(8)]);
var inst_22647 = (inst_22641 == null);
var state_22684__$1 = state_22684;
if(cljs.core.truth_(inst_22647)){
var statearr_22711_22757 = state_22684__$1;
(statearr_22711_22757[(1)] = (14));

} else {
var statearr_22712_22758 = state_22684__$1;
(statearr_22712_22758[(1)] = (15));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22685 === (9))){
var inst_22634 = (state_22684[(10)]);
var inst_22634__$1 = (state_22684[(2)]);
var inst_22635 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22634__$1,cljs.core.constant$keyword$54);
var inst_22636 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22634__$1,cljs.core.constant$keyword$53);
var inst_22637 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22634__$1,cljs.core.constant$keyword$52);
var state_22684__$1 = (function (){var statearr_22713 = state_22684;
(statearr_22713[(10)] = inst_22634__$1);

(statearr_22713[(16)] = inst_22637);

(statearr_22713[(17)] = inst_22636);

return statearr_22713;
})();
return cljs.core.async.ioc_alts_BANG_(state_22684__$1,(10),inst_22635);
} else {
if((state_val_22685 === (5))){
var inst_22626 = (state_22684[(7)]);
var inst_22629 = cljs.core.seq_QMARK_(inst_22626);
var state_22684__$1 = state_22684;
if(inst_22629){
var statearr_22714_22759 = state_22684__$1;
(statearr_22714_22759[(1)] = (7));

} else {
var statearr_22715_22760 = state_22684__$1;
(statearr_22715_22760[(1)] = (8));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22685 === (14))){
var inst_22642 = (state_22684[(15)]);
var inst_22649 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_22642);
var state_22684__$1 = state_22684;
var statearr_22716_22761 = state_22684__$1;
(statearr_22716_22761[(2)] = inst_22649);

(statearr_22716_22761[(1)] = (16));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22685 === (26))){
var inst_22674 = (state_22684[(2)]);
var state_22684__$1 = state_22684;
var statearr_22717_22762 = state_22684__$1;
(statearr_22717_22762[(2)] = inst_22674);

(statearr_22717_22762[(1)] = (22));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22685 === (16))){
var inst_22652 = (state_22684[(2)]);
var inst_22653 = calc_state();
var inst_22626 = inst_22653;
var state_22684__$1 = (function (){var statearr_22718 = state_22684;
(statearr_22718[(7)] = inst_22626);

(statearr_22718[(18)] = inst_22652);

return statearr_22718;
})();
var statearr_22719_22763 = state_22684__$1;
(statearr_22719_22763[(2)] = null);

(statearr_22719_22763[(1)] = (5));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22685 === (10))){
var inst_22642 = (state_22684[(15)]);
var inst_22641 = (state_22684[(8)]);
var inst_22640 = (state_22684[(2)]);
var inst_22641__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22640,(0),null);
var inst_22642__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22640,(1),null);
var inst_22643 = (inst_22641__$1 == null);
var inst_22644 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22642__$1,change);
var inst_22645 = (inst_22643) || (inst_22644);
var state_22684__$1 = (function (){var statearr_22720 = state_22684;
(statearr_22720[(15)] = inst_22642__$1);

(statearr_22720[(8)] = inst_22641__$1);

return statearr_22720;
})();
if(cljs.core.truth_(inst_22645)){
var statearr_22721_22764 = state_22684__$1;
(statearr_22721_22764[(1)] = (11));

} else {
var statearr_22722_22765 = state_22684__$1;
(statearr_22722_22765[(1)] = (12));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_22685 === (18))){
var inst_22642 = (state_22684[(15)]);
var inst_22637 = (state_22684[(16)]);
var inst_22636 = (state_22684[(17)]);
var inst_22661 = cljs.core.empty_QMARK_(inst_22637);
var inst_22662 = (function (){var G__22723 = inst_22642;
return (inst_22636.cljs$core$IFn$_invoke$arity$1 ? inst_22636.cljs$core$IFn$_invoke$arity$1(G__22723) : inst_22636.call(null,G__22723));
})();
var inst_22663 = cljs.core.not(inst_22662);
var inst_22664 = (inst_22661) && (inst_22663);
var state_22684__$1 = state_22684;
var statearr_22724_22766 = state_22684__$1;
(statearr_22724_22766[(2)] = inst_22664);

(statearr_22724_22766[(1)] = (19));


return cljs.core.constant$keyword$40;
} else {
if((state_val_22685 === (8))){
var inst_22626 = (state_22684[(7)]);
var state_22684__$1 = state_22684;
var statearr_22725_22767 = state_22684__$1;
(statearr_22725_22767[(2)] = inst_22626);

(statearr_22725_22767[(1)] = (9));


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
});})(c__11420__auto___22737,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__11340__auto__,c__11420__auto___22737,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__11341__auto__ = null;
var state_machine__11341__auto____0 = (function (){
var statearr_22729 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22729[(0)] = state_machine__11341__auto__);

(statearr_22729[(1)] = (1));

return statearr_22729;
});
var state_machine__11341__auto____1 = (function (state_22684){
while(true){
var ret_value__11342__auto__ = (function (){try{while(true){
var result__11343__auto__ = switch__11340__auto__(state_22684);
if(cljs.core.keyword_identical_QMARK_(result__11343__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11343__auto__;
}
break;
}
}catch (e22730){if((e22730 instanceof Object)){
var ex__11344__auto__ = e22730;
var statearr_22731_22768 = state_22684;
(statearr_22731_22768[(5)] = ex__11344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22684);

return cljs.core.constant$keyword$40;
} else {
throw e22730;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11342__auto__,cljs.core.constant$keyword$40)){
var G__22769 = state_22684;
state_22684 = G__22769;
continue;
} else {
return ret_value__11342__auto__;
}
break;
}
});
state_machine__11341__auto__ = function(state_22684){
switch(arguments.length){
case 0:
return state_machine__11341__auto____0.call(this);
case 1:
return state_machine__11341__auto____1.call(this,state_22684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11341__auto____0;
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11341__auto____1;
return state_machine__11341__auto__;
})()
;})(switch__11340__auto__,c__11420__auto___22737,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__11422__auto__ = (function (){var statearr_22732 = (function (){return (f__11421__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11421__auto__.cljs$core$IFn$_invoke$arity$0() : f__11421__auto__.call(null));
})();
(statearr_22732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11420__auto___22737);

return statearr_22732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11422__auto__);
});})(c__11420__auto___22737,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj22771 = {};
return obj22771;
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
return (function (){var or__3583__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__22775 = x__4227__auto__;
return goog.typeOf(G__22775);
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
return (function (){var or__3583__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__22779 = x__4227__auto__;
return goog.typeOf(G__22779);
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
return (function (){var or__3583__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__22785 = x__4227__auto__;
return goog.typeOf(G__22785);
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
return (function (){var or__3583__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__22787 = x__4227__auto__;
return goog.typeOf(G__22787);
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
var mults = (function (){var G__22926 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22926) : cljs.core.atom.call(null,G__22926));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__3583__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__22928 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22928) : cljs.core.deref.call(null,G__22928));
})(),topic);
if(cljs.core.truth_(or__3583__auto__)){
return or__3583__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3583__auto__,mults){
return (function (p1__22788_SHARP_){
if(cljs.core.truth_((function (){var G__22929 = topic;
return (p1__22788_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__22788_SHARP_.cljs$core$IFn$_invoke$arity$1(G__22929) : p1__22788_SHARP_.call(null,G__22929));
})())){
return p1__22788_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__22788_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__22930 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__22930) : buf_fn.call(null,G__22930));
})())));
}
});})(or__3583__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t22931 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22931 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta22932){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta22932 = meta22932;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22931.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t22931.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__22934 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__22934) : self__.ensure_mult.call(null,G__22934));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t22931.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__22935 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22935) : cljs.core.deref.call(null,G__22935));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t22931.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22936 = self__.mults;
var G__22937 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22936,G__22937) : cljs.core.reset_BANG_.call(null,G__22936,G__22937));
});})(mults,ensure_mult))
;

cljs.core.async.t22931.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t22931.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t22931.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t22931.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22933){
var self__ = this;
var _22933__$1 = this;
return self__.meta22932;
});})(mults,ensure_mult))
;

cljs.core.async.t22931.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22933,meta22932__$1){
var self__ = this;
var _22933__$1 = this;
return (new cljs.core.async.t22931(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta22932__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t22931.cljs$lang$type = true;

cljs.core.async.t22931.cljs$lang$ctorStr = "cljs.core.async/t22931";

cljs.core.async.t22931.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4170__auto__,writer__4171__auto__,opt__4172__auto__){
return cljs.core._write(writer__4171__auto__,"cljs.core.async/t22931");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t22931 = ((function (mults,ensure_mult){
return (function __GT_t22931(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22932){
return (new cljs.core.async.t22931(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22932));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t22931(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11420__auto___23060 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11420__auto___23060,mults,ensure_mult,p){
return (function (){
var f__11421__auto__ = (function (){var switch__11340__auto__ = ((function (c__11420__auto___23060,mults,ensure_mult,p){
return (function (state_23009){
var state_val_23010 = (state_23009[(1)]);
if((state_val_23010 === (7))){
var inst_23005 = (state_23009[(2)]);
var state_23009__$1 = state_23009;
var statearr_23011_23061 = state_23009__$1;
(statearr_23011_23061[(2)] = inst_23005);

(statearr_23011_23061[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23010 === (20))){
var state_23009__$1 = state_23009;
var statearr_23012_23062 = state_23009__$1;
(statearr_23012_23062[(2)] = null);

(statearr_23012_23062[(1)] = (21));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23010 === (1))){
var state_23009__$1 = state_23009;
var statearr_23013_23063 = state_23009__$1;
(statearr_23013_23063[(2)] = null);

(statearr_23013_23063[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23010 === (24))){
var inst_22988 = (state_23009[(7)]);
var inst_22997 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_22988);
var state_23009__$1 = state_23009;
var statearr_23014_23064 = state_23009__$1;
(statearr_23014_23064[(2)] = inst_22997);

(statearr_23014_23064[(1)] = (25));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23010 === (4))){
var inst_22940 = (state_23009[(8)]);
var inst_22940__$1 = (state_23009[(2)]);
var inst_22941 = (inst_22940__$1 == null);
var state_23009__$1 = (function (){var statearr_23015 = state_23009;
(statearr_23015[(8)] = inst_22940__$1);

return statearr_23015;
})();
if(cljs.core.truth_(inst_22941)){
var statearr_23016_23065 = state_23009__$1;
(statearr_23016_23065[(1)] = (5));

} else {
var statearr_23017_23066 = state_23009__$1;
(statearr_23017_23066[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23010 === (15))){
var inst_22982 = (state_23009[(2)]);
var state_23009__$1 = state_23009;
var statearr_23018_23067 = state_23009__$1;
(statearr_23018_23067[(2)] = inst_22982);

(statearr_23018_23067[(1)] = (12));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23010 === (21))){
var inst_23002 = (state_23009[(2)]);
var state_23009__$1 = (function (){var statearr_23019 = state_23009;
(statearr_23019[(9)] = inst_23002);

return statearr_23019;
})();
var statearr_23020_23068 = state_23009__$1;
(statearr_23020_23068[(2)] = null);

(statearr_23020_23068[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23010 === (13))){
var inst_22964 = (state_23009[(10)]);
var inst_22966 = cljs.core.chunked_seq_QMARK_(inst_22964);
var state_23009__$1 = state_23009;
if(inst_22966){
var statearr_23021_23069 = state_23009__$1;
(statearr_23021_23069[(1)] = (16));

} else {
var statearr_23022_23070 = state_23009__$1;
(statearr_23022_23070[(1)] = (17));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23010 === (22))){
var inst_22994 = (state_23009[(2)]);
var state_23009__$1 = state_23009;
if(cljs.core.truth_(inst_22994)){
var statearr_23023_23071 = state_23009__$1;
(statearr_23023_23071[(1)] = (23));

} else {
var statearr_23024_23072 = state_23009__$1;
(statearr_23024_23072[(1)] = (24));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23010 === (6))){
var inst_22988 = (state_23009[(7)]);
var inst_22940 = (state_23009[(8)]);
var inst_22990 = (state_23009[(11)]);
var inst_22988__$1 = (function (){var G__23025 = inst_22940;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__23025) : topic_fn.call(null,G__23025));
})();
var inst_22989 = (function (){var G__23026 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23026) : cljs.core.deref.call(null,G__23026));
})();
var inst_22990__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22989,inst_22988__$1);
var state_23009__$1 = (function (){var statearr_23027 = state_23009;
(statearr_23027[(7)] = inst_22988__$1);

(statearr_23027[(11)] = inst_22990__$1);

return statearr_23027;
})();
if(cljs.core.truth_(inst_22990__$1)){
var statearr_23028_23073 = state_23009__$1;
(statearr_23028_23073[(1)] = (19));

} else {
var statearr_23029_23074 = state_23009__$1;
(statearr_23029_23074[(1)] = (20));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23010 === (25))){
var inst_22999 = (state_23009[(2)]);
var state_23009__$1 = state_23009;
var statearr_23030_23075 = state_23009__$1;
(statearr_23030_23075[(2)] = inst_22999);

(statearr_23030_23075[(1)] = (21));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23010 === (17))){
var inst_22964 = (state_23009[(10)]);
var inst_22973 = cljs.core.first(inst_22964);
var inst_22974 = cljs.core.async.muxch_STAR_(inst_22973);
var inst_22975 = cljs.core.async.close_BANG_(inst_22974);
var inst_22976 = cljs.core.next(inst_22964);
var inst_22950 = inst_22976;
var inst_22951 = null;
var inst_22952 = (0);
var inst_22953 = (0);
var state_23009__$1 = (function (){var statearr_23031 = state_23009;
(statearr_23031[(12)] = inst_22952);

(statearr_23031[(13)] = inst_22951);

(statearr_23031[(14)] = inst_22975);

(statearr_23031[(15)] = inst_22950);

(statearr_23031[(16)] = inst_22953);

return statearr_23031;
})();
var statearr_23032_23076 = state_23009__$1;
(statearr_23032_23076[(2)] = null);

(statearr_23032_23076[(1)] = (8));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23010 === (3))){
var inst_23007 = (state_23009[(2)]);
var state_23009__$1 = state_23009;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23009__$1,inst_23007);
} else {
if((state_val_23010 === (12))){
var inst_22984 = (state_23009[(2)]);
var state_23009__$1 = state_23009;
var statearr_23033_23077 = state_23009__$1;
(statearr_23033_23077[(2)] = inst_22984);

(statearr_23033_23077[(1)] = (9));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23010 === (2))){
var state_23009__$1 = state_23009;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23009__$1,(4),ch);
} else {
if((state_val_23010 === (23))){
var state_23009__$1 = state_23009;
var statearr_23034_23078 = state_23009__$1;
(statearr_23034_23078[(2)] = null);

(statearr_23034_23078[(1)] = (25));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23010 === (19))){
var inst_22940 = (state_23009[(8)]);
var inst_22990 = (state_23009[(11)]);
var inst_22992 = cljs.core.async.muxch_STAR_(inst_22990);
var state_23009__$1 = state_23009;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23009__$1,(22),inst_22992,inst_22940);
} else {
if((state_val_23010 === (11))){
var inst_22964 = (state_23009[(10)]);
var inst_22950 = (state_23009[(15)]);
var inst_22964__$1 = cljs.core.seq(inst_22950);
var state_23009__$1 = (function (){var statearr_23035 = state_23009;
(statearr_23035[(10)] = inst_22964__$1);

return statearr_23035;
})();
if(inst_22964__$1){
var statearr_23036_23079 = state_23009__$1;
(statearr_23036_23079[(1)] = (13));

} else {
var statearr_23037_23080 = state_23009__$1;
(statearr_23037_23080[(1)] = (14));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23010 === (9))){
var inst_22986 = (state_23009[(2)]);
var state_23009__$1 = state_23009;
var statearr_23038_23081 = state_23009__$1;
(statearr_23038_23081[(2)] = inst_22986);

(statearr_23038_23081[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23010 === (5))){
var inst_22947 = (function (){var G__23039 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23039) : cljs.core.deref.call(null,G__23039));
})();
var inst_22948 = cljs.core.vals(inst_22947);
var inst_22949 = cljs.core.seq(inst_22948);
var inst_22950 = inst_22949;
var inst_22951 = null;
var inst_22952 = (0);
var inst_22953 = (0);
var state_23009__$1 = (function (){var statearr_23040 = state_23009;
(statearr_23040[(12)] = inst_22952);

(statearr_23040[(13)] = inst_22951);

(statearr_23040[(15)] = inst_22950);

(statearr_23040[(16)] = inst_22953);

return statearr_23040;
})();
var statearr_23041_23082 = state_23009__$1;
(statearr_23041_23082[(2)] = null);

(statearr_23041_23082[(1)] = (8));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23010 === (14))){
var state_23009__$1 = state_23009;
var statearr_23045_23083 = state_23009__$1;
(statearr_23045_23083[(2)] = null);

(statearr_23045_23083[(1)] = (15));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23010 === (16))){
var inst_22964 = (state_23009[(10)]);
var inst_22968 = cljs.core.chunk_first(inst_22964);
var inst_22969 = cljs.core.chunk_rest(inst_22964);
var inst_22970 = cljs.core.count(inst_22968);
var inst_22950 = inst_22969;
var inst_22951 = inst_22968;
var inst_22952 = inst_22970;
var inst_22953 = (0);
var state_23009__$1 = (function (){var statearr_23046 = state_23009;
(statearr_23046[(12)] = inst_22952);

(statearr_23046[(13)] = inst_22951);

(statearr_23046[(15)] = inst_22950);

(statearr_23046[(16)] = inst_22953);

return statearr_23046;
})();
var statearr_23047_23084 = state_23009__$1;
(statearr_23047_23084[(2)] = null);

(statearr_23047_23084[(1)] = (8));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23010 === (10))){
var inst_22952 = (state_23009[(12)]);
var inst_22951 = (state_23009[(13)]);
var inst_22950 = (state_23009[(15)]);
var inst_22953 = (state_23009[(16)]);
var inst_22958 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_22951,inst_22953);
var inst_22959 = cljs.core.async.muxch_STAR_(inst_22958);
var inst_22960 = cljs.core.async.close_BANG_(inst_22959);
var inst_22961 = (inst_22953 + (1));
var tmp23042 = inst_22952;
var tmp23043 = inst_22951;
var tmp23044 = inst_22950;
var inst_22950__$1 = tmp23044;
var inst_22951__$1 = tmp23043;
var inst_22952__$1 = tmp23042;
var inst_22953__$1 = inst_22961;
var state_23009__$1 = (function (){var statearr_23048 = state_23009;
(statearr_23048[(12)] = inst_22952__$1);

(statearr_23048[(13)] = inst_22951__$1);

(statearr_23048[(17)] = inst_22960);

(statearr_23048[(15)] = inst_22950__$1);

(statearr_23048[(16)] = inst_22953__$1);

return statearr_23048;
})();
var statearr_23049_23085 = state_23009__$1;
(statearr_23049_23085[(2)] = null);

(statearr_23049_23085[(1)] = (8));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23010 === (18))){
var inst_22979 = (state_23009[(2)]);
var state_23009__$1 = state_23009;
var statearr_23050_23086 = state_23009__$1;
(statearr_23050_23086[(2)] = inst_22979);

(statearr_23050_23086[(1)] = (15));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23010 === (8))){
var inst_22952 = (state_23009[(12)]);
var inst_22953 = (state_23009[(16)]);
var inst_22955 = (inst_22953 < inst_22952);
var inst_22956 = inst_22955;
var state_23009__$1 = state_23009;
if(cljs.core.truth_(inst_22956)){
var statearr_23051_23087 = state_23009__$1;
(statearr_23051_23087[(1)] = (10));

} else {
var statearr_23052_23088 = state_23009__$1;
(statearr_23052_23088[(1)] = (11));

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
});})(c__11420__auto___23060,mults,ensure_mult,p))
;
return ((function (switch__11340__auto__,c__11420__auto___23060,mults,ensure_mult,p){
return (function() {
var state_machine__11341__auto__ = null;
var state_machine__11341__auto____0 = (function (){
var statearr_23056 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23056[(0)] = state_machine__11341__auto__);

(statearr_23056[(1)] = (1));

return statearr_23056;
});
var state_machine__11341__auto____1 = (function (state_23009){
while(true){
var ret_value__11342__auto__ = (function (){try{while(true){
var result__11343__auto__ = switch__11340__auto__(state_23009);
if(cljs.core.keyword_identical_QMARK_(result__11343__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11343__auto__;
}
break;
}
}catch (e23057){if((e23057 instanceof Object)){
var ex__11344__auto__ = e23057;
var statearr_23058_23089 = state_23009;
(statearr_23058_23089[(5)] = ex__11344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23009);

return cljs.core.constant$keyword$40;
} else {
throw e23057;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11342__auto__,cljs.core.constant$keyword$40)){
var G__23090 = state_23009;
state_23009 = G__23090;
continue;
} else {
return ret_value__11342__auto__;
}
break;
}
});
state_machine__11341__auto__ = function(state_23009){
switch(arguments.length){
case 0:
return state_machine__11341__auto____0.call(this);
case 1:
return state_machine__11341__auto____1.call(this,state_23009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11341__auto____0;
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11341__auto____1;
return state_machine__11341__auto__;
})()
;})(switch__11340__auto__,c__11420__auto___23060,mults,ensure_mult,p))
})();
var state__11422__auto__ = (function (){var statearr_23059 = (function (){return (f__11421__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11421__auto__.cljs$core$IFn$_invoke$arity$0() : f__11421__auto__.call(null));
})();
(statearr_23059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11420__auto___23060);

return statearr_23059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11422__auto__);
});})(c__11420__auto___23060,mults,ensure_mult,p))
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
var dctr = (function (){var G__23171 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23171) : cljs.core.atom.call(null,G__23171));
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
var c__11420__auto___23244 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11420__auto___23244,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__11421__auto__ = (function (){var switch__11340__auto__ = ((function (c__11420__auto___23244,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23210){
var state_val_23211 = (state_23210[(1)]);
if((state_val_23211 === (7))){
var state_23210__$1 = state_23210;
var statearr_23212_23245 = state_23210__$1;
(statearr_23212_23245[(2)] = null);

(statearr_23212_23245[(1)] = (8));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23211 === (1))){
var state_23210__$1 = state_23210;
var statearr_23213_23246 = state_23210__$1;
(statearr_23213_23246[(2)] = null);

(statearr_23213_23246[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23211 === (4))){
var inst_23174 = (state_23210[(7)]);
var inst_23176 = (inst_23174 < cnt);
var state_23210__$1 = state_23210;
if(cljs.core.truth_(inst_23176)){
var statearr_23214_23247 = state_23210__$1;
(statearr_23214_23247[(1)] = (6));

} else {
var statearr_23215_23248 = state_23210__$1;
(statearr_23215_23248[(1)] = (7));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23211 === (15))){
var inst_23206 = (state_23210[(2)]);
var state_23210__$1 = state_23210;
var statearr_23216_23249 = state_23210__$1;
(statearr_23216_23249[(2)] = inst_23206);

(statearr_23216_23249[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23211 === (13))){
var inst_23199 = cljs.core.async.close_BANG_(out);
var state_23210__$1 = state_23210;
var statearr_23217_23250 = state_23210__$1;
(statearr_23217_23250[(2)] = inst_23199);

(statearr_23217_23250[(1)] = (15));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23211 === (6))){
var state_23210__$1 = state_23210;
var statearr_23218_23251 = state_23210__$1;
(statearr_23218_23251[(2)] = null);

(statearr_23218_23251[(1)] = (11));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23211 === (3))){
var inst_23208 = (state_23210[(2)]);
var state_23210__$1 = state_23210;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23210__$1,inst_23208);
} else {
if((state_val_23211 === (12))){
var inst_23196 = (state_23210[(8)]);
var inst_23196__$1 = (state_23210[(2)]);
var inst_23197 = cljs.core.some(cljs.core.nil_QMARK_,inst_23196__$1);
var state_23210__$1 = (function (){var statearr_23219 = state_23210;
(statearr_23219[(8)] = inst_23196__$1);

return statearr_23219;
})();
if(cljs.core.truth_(inst_23197)){
var statearr_23220_23252 = state_23210__$1;
(statearr_23220_23252[(1)] = (13));

} else {
var statearr_23221_23253 = state_23210__$1;
(statearr_23221_23253[(1)] = (14));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23211 === (2))){
var inst_23173 = (function (){var G__23222 = dctr;
var G__23223 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23222,G__23223) : cljs.core.reset_BANG_.call(null,G__23222,G__23223));
})();
var inst_23174 = (0);
var state_23210__$1 = (function (){var statearr_23224 = state_23210;
(statearr_23224[(9)] = inst_23173);

(statearr_23224[(7)] = inst_23174);

return statearr_23224;
})();
var statearr_23225_23254 = state_23210__$1;
(statearr_23225_23254[(2)] = null);

(statearr_23225_23254[(1)] = (4));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23211 === (11))){
var inst_23174 = (state_23210[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_23210,(10),Object,null,(9));
var inst_23183 = (function (){var G__23226 = inst_23174;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__23226) : chs__$1.call(null,G__23226));
})();
var inst_23184 = (function (){var G__23227 = inst_23174;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__23227) : done.call(null,G__23227));
})();
var inst_23185 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_23183,inst_23184);
var state_23210__$1 = state_23210;
var statearr_23228_23255 = state_23210__$1;
(statearr_23228_23255[(2)] = inst_23185);


cljs.core.async.impl.ioc_helpers.process_exception(state_23210__$1);

return cljs.core.constant$keyword$40;
} else {
if((state_val_23211 === (9))){
var inst_23174 = (state_23210[(7)]);
var inst_23187 = (state_23210[(2)]);
var inst_23188 = (inst_23174 + (1));
var inst_23174__$1 = inst_23188;
var state_23210__$1 = (function (){var statearr_23229 = state_23210;
(statearr_23229[(10)] = inst_23187);

(statearr_23229[(7)] = inst_23174__$1);

return statearr_23229;
})();
var statearr_23230_23256 = state_23210__$1;
(statearr_23230_23256[(2)] = null);

(statearr_23230_23256[(1)] = (4));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23211 === (5))){
var inst_23194 = (state_23210[(2)]);
var state_23210__$1 = (function (){var statearr_23231 = state_23210;
(statearr_23231[(11)] = inst_23194);

return statearr_23231;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23210__$1,(12),dchan);
} else {
if((state_val_23211 === (14))){
var inst_23196 = (state_23210[(8)]);
var inst_23201 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_23196);
var state_23210__$1 = state_23210;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23210__$1,(16),out,inst_23201);
} else {
if((state_val_23211 === (16))){
var inst_23203 = (state_23210[(2)]);
var state_23210__$1 = (function (){var statearr_23232 = state_23210;
(statearr_23232[(12)] = inst_23203);

return statearr_23232;
})();
var statearr_23233_23257 = state_23210__$1;
(statearr_23233_23257[(2)] = null);

(statearr_23233_23257[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23211 === (10))){
var inst_23178 = (state_23210[(2)]);
var inst_23179 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_23210__$1 = (function (){var statearr_23234 = state_23210;
(statearr_23234[(13)] = inst_23178);

return statearr_23234;
})();
var statearr_23235_23258 = state_23210__$1;
(statearr_23235_23258[(2)] = inst_23179);


cljs.core.async.impl.ioc_helpers.process_exception(state_23210__$1);

return cljs.core.constant$keyword$40;
} else {
if((state_val_23211 === (8))){
var inst_23192 = (state_23210[(2)]);
var state_23210__$1 = state_23210;
var statearr_23236_23259 = state_23210__$1;
(statearr_23236_23259[(2)] = inst_23192);

(statearr_23236_23259[(1)] = (5));


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
});})(c__11420__auto___23244,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__11340__auto__,c__11420__auto___23244,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__11341__auto__ = null;
var state_machine__11341__auto____0 = (function (){
var statearr_23240 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23240[(0)] = state_machine__11341__auto__);

(statearr_23240[(1)] = (1));

return statearr_23240;
});
var state_machine__11341__auto____1 = (function (state_23210){
while(true){
var ret_value__11342__auto__ = (function (){try{while(true){
var result__11343__auto__ = switch__11340__auto__(state_23210);
if(cljs.core.keyword_identical_QMARK_(result__11343__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11343__auto__;
}
break;
}
}catch (e23241){if((e23241 instanceof Object)){
var ex__11344__auto__ = e23241;
var statearr_23242_23260 = state_23210;
(statearr_23242_23260[(5)] = ex__11344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23210);

return cljs.core.constant$keyword$40;
} else {
throw e23241;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11342__auto__,cljs.core.constant$keyword$40)){
var G__23261 = state_23210;
state_23210 = G__23261;
continue;
} else {
return ret_value__11342__auto__;
}
break;
}
});
state_machine__11341__auto__ = function(state_23210){
switch(arguments.length){
case 0:
return state_machine__11341__auto____0.call(this);
case 1:
return state_machine__11341__auto____1.call(this,state_23210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11341__auto____0;
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11341__auto____1;
return state_machine__11341__auto__;
})()
;})(switch__11340__auto__,c__11420__auto___23244,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__11422__auto__ = (function (){var statearr_23243 = (function (){return (f__11421__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11421__auto__.cljs$core$IFn$_invoke$arity$0() : f__11421__auto__.call(null));
})();
(statearr_23243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11420__auto___23244);

return statearr_23243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11422__auto__);
});})(c__11420__auto___23244,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__11420__auto___23371 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11420__auto___23371,out){
return (function (){
var f__11421__auto__ = (function (){var switch__11340__auto__ = ((function (c__11420__auto___23371,out){
return (function (state_23347){
var state_val_23348 = (state_23347[(1)]);
if((state_val_23348 === (7))){
var inst_23327 = (state_23347[(7)]);
var inst_23326 = (state_23347[(8)]);
var inst_23326__$1 = (state_23347[(2)]);
var inst_23327__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23326__$1,(0),null);
var inst_23328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23326__$1,(1),null);
var inst_23329 = (inst_23327__$1 == null);
var state_23347__$1 = (function (){var statearr_23349 = state_23347;
(statearr_23349[(7)] = inst_23327__$1);

(statearr_23349[(9)] = inst_23328);

(statearr_23349[(8)] = inst_23326__$1);

return statearr_23349;
})();
if(cljs.core.truth_(inst_23329)){
var statearr_23350_23372 = state_23347__$1;
(statearr_23350_23372[(1)] = (8));

} else {
var statearr_23351_23373 = state_23347__$1;
(statearr_23351_23373[(1)] = (9));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23348 === (1))){
var inst_23318 = cljs.core.vec(chs);
var inst_23319 = inst_23318;
var state_23347__$1 = (function (){var statearr_23352 = state_23347;
(statearr_23352[(10)] = inst_23319);

return statearr_23352;
})();
var statearr_23353_23374 = state_23347__$1;
(statearr_23353_23374[(2)] = null);

(statearr_23353_23374[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23348 === (4))){
var inst_23319 = (state_23347[(10)]);
var state_23347__$1 = state_23347;
return cljs.core.async.ioc_alts_BANG_(state_23347__$1,(7),inst_23319);
} else {
if((state_val_23348 === (6))){
var inst_23343 = (state_23347[(2)]);
var state_23347__$1 = state_23347;
var statearr_23354_23375 = state_23347__$1;
(statearr_23354_23375[(2)] = inst_23343);

(statearr_23354_23375[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23348 === (3))){
var inst_23345 = (state_23347[(2)]);
var state_23347__$1 = state_23347;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23347__$1,inst_23345);
} else {
if((state_val_23348 === (2))){
var inst_23319 = (state_23347[(10)]);
var inst_23321 = cljs.core.count(inst_23319);
var inst_23322 = (inst_23321 > (0));
var state_23347__$1 = state_23347;
if(cljs.core.truth_(inst_23322)){
var statearr_23356_23376 = state_23347__$1;
(statearr_23356_23376[(1)] = (4));

} else {
var statearr_23357_23377 = state_23347__$1;
(statearr_23357_23377[(1)] = (5));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23348 === (11))){
var inst_23319 = (state_23347[(10)]);
var inst_23336 = (state_23347[(2)]);
var tmp23355 = inst_23319;
var inst_23319__$1 = tmp23355;
var state_23347__$1 = (function (){var statearr_23358 = state_23347;
(statearr_23358[(11)] = inst_23336);

(statearr_23358[(10)] = inst_23319__$1);

return statearr_23358;
})();
var statearr_23359_23378 = state_23347__$1;
(statearr_23359_23378[(2)] = null);

(statearr_23359_23378[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23348 === (9))){
var inst_23327 = (state_23347[(7)]);
var state_23347__$1 = state_23347;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23347__$1,(11),out,inst_23327);
} else {
if((state_val_23348 === (5))){
var inst_23341 = cljs.core.async.close_BANG_(out);
var state_23347__$1 = state_23347;
var statearr_23360_23379 = state_23347__$1;
(statearr_23360_23379[(2)] = inst_23341);

(statearr_23360_23379[(1)] = (6));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23348 === (10))){
var inst_23339 = (state_23347[(2)]);
var state_23347__$1 = state_23347;
var statearr_23361_23380 = state_23347__$1;
(statearr_23361_23380[(2)] = inst_23339);

(statearr_23361_23380[(1)] = (6));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23348 === (8))){
var inst_23327 = (state_23347[(7)]);
var inst_23328 = (state_23347[(9)]);
var inst_23319 = (state_23347[(10)]);
var inst_23326 = (state_23347[(8)]);
var inst_23331 = (function (){var c = inst_23328;
var v = inst_23327;
var vec__23324 = inst_23326;
var cs = inst_23319;
return ((function (c,v,vec__23324,cs,inst_23327,inst_23328,inst_23319,inst_23326,state_val_23348,c__11420__auto___23371,out){
return (function (p1__23262_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__23262_SHARP_);
});
;})(c,v,vec__23324,cs,inst_23327,inst_23328,inst_23319,inst_23326,state_val_23348,c__11420__auto___23371,out))
})();
var inst_23332 = cljs.core.filterv(inst_23331,inst_23319);
var inst_23319__$1 = inst_23332;
var state_23347__$1 = (function (){var statearr_23362 = state_23347;
(statearr_23362[(10)] = inst_23319__$1);

return statearr_23362;
})();
var statearr_23363_23381 = state_23347__$1;
(statearr_23363_23381[(2)] = null);

(statearr_23363_23381[(1)] = (2));


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
});})(c__11420__auto___23371,out))
;
return ((function (switch__11340__auto__,c__11420__auto___23371,out){
return (function() {
var state_machine__11341__auto__ = null;
var state_machine__11341__auto____0 = (function (){
var statearr_23367 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23367[(0)] = state_machine__11341__auto__);

(statearr_23367[(1)] = (1));

return statearr_23367;
});
var state_machine__11341__auto____1 = (function (state_23347){
while(true){
var ret_value__11342__auto__ = (function (){try{while(true){
var result__11343__auto__ = switch__11340__auto__(state_23347);
if(cljs.core.keyword_identical_QMARK_(result__11343__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11343__auto__;
}
break;
}
}catch (e23368){if((e23368 instanceof Object)){
var ex__11344__auto__ = e23368;
var statearr_23369_23382 = state_23347;
(statearr_23369_23382[(5)] = ex__11344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23347);

return cljs.core.constant$keyword$40;
} else {
throw e23368;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11342__auto__,cljs.core.constant$keyword$40)){
var G__23383 = state_23347;
state_23347 = G__23383;
continue;
} else {
return ret_value__11342__auto__;
}
break;
}
});
state_machine__11341__auto__ = function(state_23347){
switch(arguments.length){
case 0:
return state_machine__11341__auto____0.call(this);
case 1:
return state_machine__11341__auto____1.call(this,state_23347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11341__auto____0;
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11341__auto____1;
return state_machine__11341__auto__;
})()
;})(switch__11340__auto__,c__11420__auto___23371,out))
})();
var state__11422__auto__ = (function (){var statearr_23370 = (function (){return (f__11421__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11421__auto__.cljs$core$IFn$_invoke$arity$0() : f__11421__auto__.call(null));
})();
(statearr_23370[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11420__auto___23371);

return statearr_23370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11422__auto__);
});})(c__11420__auto___23371,out))
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
var c__11420__auto___23479 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11420__auto___23479,out){
return (function (){
var f__11421__auto__ = (function (){var switch__11340__auto__ = ((function (c__11420__auto___23479,out){
return (function (state_23456){
var state_val_23457 = (state_23456[(1)]);
if((state_val_23457 === (7))){
var inst_23438 = (state_23456[(7)]);
var inst_23438__$1 = (state_23456[(2)]);
var inst_23439 = (inst_23438__$1 == null);
var inst_23440 = cljs.core.not(inst_23439);
var state_23456__$1 = (function (){var statearr_23458 = state_23456;
(statearr_23458[(7)] = inst_23438__$1);

return statearr_23458;
})();
if(inst_23440){
var statearr_23459_23480 = state_23456__$1;
(statearr_23459_23480[(1)] = (8));

} else {
var statearr_23460_23481 = state_23456__$1;
(statearr_23460_23481[(1)] = (9));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23457 === (1))){
var inst_23433 = (0);
var state_23456__$1 = (function (){var statearr_23461 = state_23456;
(statearr_23461[(8)] = inst_23433);

return statearr_23461;
})();
var statearr_23462_23482 = state_23456__$1;
(statearr_23462_23482[(2)] = null);

(statearr_23462_23482[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23457 === (4))){
var state_23456__$1 = state_23456;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23456__$1,(7),ch);
} else {
if((state_val_23457 === (6))){
var inst_23451 = (state_23456[(2)]);
var state_23456__$1 = state_23456;
var statearr_23463_23483 = state_23456__$1;
(statearr_23463_23483[(2)] = inst_23451);

(statearr_23463_23483[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23457 === (3))){
var inst_23453 = (state_23456[(2)]);
var inst_23454 = cljs.core.async.close_BANG_(out);
var state_23456__$1 = (function (){var statearr_23464 = state_23456;
(statearr_23464[(9)] = inst_23453);

return statearr_23464;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_23456__$1,inst_23454);
} else {
if((state_val_23457 === (2))){
var inst_23433 = (state_23456[(8)]);
var inst_23435 = (inst_23433 < n);
var state_23456__$1 = state_23456;
if(cljs.core.truth_(inst_23435)){
var statearr_23465_23484 = state_23456__$1;
(statearr_23465_23484[(1)] = (4));

} else {
var statearr_23466_23485 = state_23456__$1;
(statearr_23466_23485[(1)] = (5));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23457 === (11))){
var inst_23433 = (state_23456[(8)]);
var inst_23443 = (state_23456[(2)]);
var inst_23444 = (inst_23433 + (1));
var inst_23433__$1 = inst_23444;
var state_23456__$1 = (function (){var statearr_23467 = state_23456;
(statearr_23467[(10)] = inst_23443);

(statearr_23467[(8)] = inst_23433__$1);

return statearr_23467;
})();
var statearr_23468_23486 = state_23456__$1;
(statearr_23468_23486[(2)] = null);

(statearr_23468_23486[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23457 === (9))){
var state_23456__$1 = state_23456;
var statearr_23469_23487 = state_23456__$1;
(statearr_23469_23487[(2)] = null);

(statearr_23469_23487[(1)] = (10));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23457 === (5))){
var state_23456__$1 = state_23456;
var statearr_23470_23488 = state_23456__$1;
(statearr_23470_23488[(2)] = null);

(statearr_23470_23488[(1)] = (6));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23457 === (10))){
var inst_23448 = (state_23456[(2)]);
var state_23456__$1 = state_23456;
var statearr_23471_23489 = state_23456__$1;
(statearr_23471_23489[(2)] = inst_23448);

(statearr_23471_23489[(1)] = (6));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23457 === (8))){
var inst_23438 = (state_23456[(7)]);
var state_23456__$1 = state_23456;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23456__$1,(11),out,inst_23438);
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
});})(c__11420__auto___23479,out))
;
return ((function (switch__11340__auto__,c__11420__auto___23479,out){
return (function() {
var state_machine__11341__auto__ = null;
var state_machine__11341__auto____0 = (function (){
var statearr_23475 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23475[(0)] = state_machine__11341__auto__);

(statearr_23475[(1)] = (1));

return statearr_23475;
});
var state_machine__11341__auto____1 = (function (state_23456){
while(true){
var ret_value__11342__auto__ = (function (){try{while(true){
var result__11343__auto__ = switch__11340__auto__(state_23456);
if(cljs.core.keyword_identical_QMARK_(result__11343__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11343__auto__;
}
break;
}
}catch (e23476){if((e23476 instanceof Object)){
var ex__11344__auto__ = e23476;
var statearr_23477_23490 = state_23456;
(statearr_23477_23490[(5)] = ex__11344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23456);

return cljs.core.constant$keyword$40;
} else {
throw e23476;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11342__auto__,cljs.core.constant$keyword$40)){
var G__23491 = state_23456;
state_23456 = G__23491;
continue;
} else {
return ret_value__11342__auto__;
}
break;
}
});
state_machine__11341__auto__ = function(state_23456){
switch(arguments.length){
case 0:
return state_machine__11341__auto____0.call(this);
case 1:
return state_machine__11341__auto____1.call(this,state_23456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11341__auto____0;
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11341__auto____1;
return state_machine__11341__auto__;
})()
;})(switch__11340__auto__,c__11420__auto___23479,out))
})();
var state__11422__auto__ = (function (){var statearr_23478 = (function (){return (f__11421__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11421__auto__.cljs$core$IFn$_invoke$arity$0() : f__11421__auto__.call(null));
})();
(statearr_23478[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11420__auto___23479);

return statearr_23478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11422__auto__);
});})(c__11420__auto___23479,out))
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
if(typeof cljs.core.async.t23504 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23504 = (function (ch,f,map_LT_,meta23505){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23505 = meta23505;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23504.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t23504.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t23504.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t23504.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t23507 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23507 = (function (fn1,_,meta23505,map_LT_,f,ch,meta23508){
this.fn1 = fn1;
this._ = _;
this.meta23505 = meta23505;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23508 = meta23508;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23507.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t23507.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t23507.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__23492_SHARP_){
var G__23510 = (((p1__23492_SHARP_ == null))?null:(function (){var G__23511 = p1__23492_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__23511) : self__.f.call(null,G__23511));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__23510) : f1.call(null,G__23510));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t23507.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23509){
var self__ = this;
var _23509__$1 = this;
return self__.meta23508;
});})(___$1))
;

cljs.core.async.t23507.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23509,meta23508__$1){
var self__ = this;
var _23509__$1 = this;
return (new cljs.core.async.t23507(self__.fn1,self__._,self__.meta23505,self__.map_LT_,self__.f,self__.ch,meta23508__$1));
});})(___$1))
;

cljs.core.async.t23507.cljs$lang$type = true;

cljs.core.async.t23507.cljs$lang$ctorStr = "cljs.core.async/t23507";

cljs.core.async.t23507.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4170__auto__,writer__4171__auto__,opt__4172__auto__){
return cljs.core._write(writer__4171__auto__,"cljs.core.async/t23507");
});})(___$1))
;

cljs.core.async.__GT_t23507 = ((function (___$1){
return (function __GT_t23507(fn1__$1,___$2,meta23505__$1,map_LT___$1,f__$1,ch__$1,meta23508){
return (new cljs.core.async.t23507(fn1__$1,___$2,meta23505__$1,map_LT___$1,f__$1,ch__$1,meta23508));
});})(___$1))
;

}

return (new cljs.core.async.t23507(fn1,___$1,self__.meta23505,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3571__auto__ = ret;
if(cljs.core.truth_(and__3571__auto__)){
return !(((function (){var G__23512 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23512) : cljs.core.deref.call(null,G__23512));
})() == null));
} else {
return and__3571__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__23513 = (function (){var G__23514 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23514) : cljs.core.deref.call(null,G__23514));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__23513) : self__.f.call(null,G__23513));
})());
} else {
return ret;
}
});

cljs.core.async.t23504.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t23504.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t23504.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t23504.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23506){
var self__ = this;
var _23506__$1 = this;
return self__.meta23505;
});

cljs.core.async.t23504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23506,meta23505__$1){
var self__ = this;
var _23506__$1 = this;
return (new cljs.core.async.t23504(self__.ch,self__.f,self__.map_LT_,meta23505__$1));
});

cljs.core.async.t23504.cljs$lang$type = true;

cljs.core.async.t23504.cljs$lang$ctorStr = "cljs.core.async/t23504";

cljs.core.async.t23504.cljs$lang$ctorPrWriter = (function (this__4170__auto__,writer__4171__auto__,opt__4172__auto__){
return cljs.core._write(writer__4171__auto__,"cljs.core.async/t23504");
});

cljs.core.async.__GT_t23504 = (function __GT_t23504(ch__$1,f__$1,map_LT___$1,meta23505){
return (new cljs.core.async.t23504(ch__$1,f__$1,map_LT___$1,meta23505));
});

}

return (new cljs.core.async.t23504(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t23519 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23519 = (function (ch,f,map_GT_,meta23520){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta23520 = meta23520;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23519.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t23519.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__23522 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__23522) : self__.f.call(null,G__23522));
})(),fn1);
});

cljs.core.async.t23519.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t23519.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t23519.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t23519.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t23519.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23521){
var self__ = this;
var _23521__$1 = this;
return self__.meta23520;
});

cljs.core.async.t23519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23521,meta23520__$1){
var self__ = this;
var _23521__$1 = this;
return (new cljs.core.async.t23519(self__.ch,self__.f,self__.map_GT_,meta23520__$1));
});

cljs.core.async.t23519.cljs$lang$type = true;

cljs.core.async.t23519.cljs$lang$ctorStr = "cljs.core.async/t23519";

cljs.core.async.t23519.cljs$lang$ctorPrWriter = (function (this__4170__auto__,writer__4171__auto__,opt__4172__auto__){
return cljs.core._write(writer__4171__auto__,"cljs.core.async/t23519");
});

cljs.core.async.__GT_t23519 = (function __GT_t23519(ch__$1,f__$1,map_GT___$1,meta23520){
return (new cljs.core.async.t23519(ch__$1,f__$1,map_GT___$1,meta23520));
});

}

return (new cljs.core.async.t23519(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t23527 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23527 = (function (ch,p,filter_GT_,meta23528){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta23528 = meta23528;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23527.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t23527.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__23530 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__23530) : self__.p.call(null,G__23530));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t23527.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t23527.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t23527.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t23527.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t23527.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t23527.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23529){
var self__ = this;
var _23529__$1 = this;
return self__.meta23528;
});

cljs.core.async.t23527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23529,meta23528__$1){
var self__ = this;
var _23529__$1 = this;
return (new cljs.core.async.t23527(self__.ch,self__.p,self__.filter_GT_,meta23528__$1));
});

cljs.core.async.t23527.cljs$lang$type = true;

cljs.core.async.t23527.cljs$lang$ctorStr = "cljs.core.async/t23527";

cljs.core.async.t23527.cljs$lang$ctorPrWriter = (function (this__4170__auto__,writer__4171__auto__,opt__4172__auto__){
return cljs.core._write(writer__4171__auto__,"cljs.core.async/t23527");
});

cljs.core.async.__GT_t23527 = (function __GT_t23527(ch__$1,p__$1,filter_GT___$1,meta23528){
return (new cljs.core.async.t23527(ch__$1,p__$1,filter_GT___$1,meta23528));
});

}

return (new cljs.core.async.t23527(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var c__11420__auto___23618 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11420__auto___23618,out){
return (function (){
var f__11421__auto__ = (function (){var switch__11340__auto__ = ((function (c__11420__auto___23618,out){
return (function (state_23596){
var state_val_23597 = (state_23596[(1)]);
if((state_val_23597 === (7))){
var inst_23592 = (state_23596[(2)]);
var state_23596__$1 = state_23596;
var statearr_23598_23619 = state_23596__$1;
(statearr_23598_23619[(2)] = inst_23592);

(statearr_23598_23619[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23597 === (1))){
var state_23596__$1 = state_23596;
var statearr_23599_23620 = state_23596__$1;
(statearr_23599_23620[(2)] = null);

(statearr_23599_23620[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23597 === (4))){
var inst_23578 = (state_23596[(7)]);
var inst_23578__$1 = (state_23596[(2)]);
var inst_23579 = (inst_23578__$1 == null);
var state_23596__$1 = (function (){var statearr_23600 = state_23596;
(statearr_23600[(7)] = inst_23578__$1);

return statearr_23600;
})();
if(cljs.core.truth_(inst_23579)){
var statearr_23601_23621 = state_23596__$1;
(statearr_23601_23621[(1)] = (5));

} else {
var statearr_23602_23622 = state_23596__$1;
(statearr_23602_23622[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23597 === (6))){
var inst_23578 = (state_23596[(7)]);
var inst_23583 = (function (){var G__23603 = inst_23578;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__23603) : p.call(null,G__23603));
})();
var state_23596__$1 = state_23596;
if(cljs.core.truth_(inst_23583)){
var statearr_23604_23623 = state_23596__$1;
(statearr_23604_23623[(1)] = (8));

} else {
var statearr_23605_23624 = state_23596__$1;
(statearr_23605_23624[(1)] = (9));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23597 === (3))){
var inst_23594 = (state_23596[(2)]);
var state_23596__$1 = state_23596;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23596__$1,inst_23594);
} else {
if((state_val_23597 === (2))){
var state_23596__$1 = state_23596;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23596__$1,(4),ch);
} else {
if((state_val_23597 === (11))){
var inst_23586 = (state_23596[(2)]);
var state_23596__$1 = state_23596;
var statearr_23606_23625 = state_23596__$1;
(statearr_23606_23625[(2)] = inst_23586);

(statearr_23606_23625[(1)] = (10));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23597 === (9))){
var state_23596__$1 = state_23596;
var statearr_23607_23626 = state_23596__$1;
(statearr_23607_23626[(2)] = null);

(statearr_23607_23626[(1)] = (10));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23597 === (5))){
var inst_23581 = cljs.core.async.close_BANG_(out);
var state_23596__$1 = state_23596;
var statearr_23608_23627 = state_23596__$1;
(statearr_23608_23627[(2)] = inst_23581);

(statearr_23608_23627[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23597 === (10))){
var inst_23589 = (state_23596[(2)]);
var state_23596__$1 = (function (){var statearr_23609 = state_23596;
(statearr_23609[(8)] = inst_23589);

return statearr_23609;
})();
var statearr_23610_23628 = state_23596__$1;
(statearr_23610_23628[(2)] = null);

(statearr_23610_23628[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23597 === (8))){
var inst_23578 = (state_23596[(7)]);
var state_23596__$1 = state_23596;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23596__$1,(11),out,inst_23578);
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
});})(c__11420__auto___23618,out))
;
return ((function (switch__11340__auto__,c__11420__auto___23618,out){
return (function() {
var state_machine__11341__auto__ = null;
var state_machine__11341__auto____0 = (function (){
var statearr_23614 = [null,null,null,null,null,null,null,null,null];
(statearr_23614[(0)] = state_machine__11341__auto__);

(statearr_23614[(1)] = (1));

return statearr_23614;
});
var state_machine__11341__auto____1 = (function (state_23596){
while(true){
var ret_value__11342__auto__ = (function (){try{while(true){
var result__11343__auto__ = switch__11340__auto__(state_23596);
if(cljs.core.keyword_identical_QMARK_(result__11343__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11343__auto__;
}
break;
}
}catch (e23615){if((e23615 instanceof Object)){
var ex__11344__auto__ = e23615;
var statearr_23616_23629 = state_23596;
(statearr_23616_23629[(5)] = ex__11344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23596);

return cljs.core.constant$keyword$40;
} else {
throw e23615;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11342__auto__,cljs.core.constant$keyword$40)){
var G__23630 = state_23596;
state_23596 = G__23630;
continue;
} else {
return ret_value__11342__auto__;
}
break;
}
});
state_machine__11341__auto__ = function(state_23596){
switch(arguments.length){
case 0:
return state_machine__11341__auto____0.call(this);
case 1:
return state_machine__11341__auto____1.call(this,state_23596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11341__auto____0;
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11341__auto____1;
return state_machine__11341__auto__;
})()
;})(switch__11340__auto__,c__11420__auto___23618,out))
})();
var state__11422__auto__ = (function (){var statearr_23617 = (function (){return (f__11421__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11421__auto__.cljs$core$IFn$_invoke$arity$0() : f__11421__auto__.call(null));
})();
(statearr_23617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11420__auto___23618);

return statearr_23617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11422__auto__);
});})(c__11420__auto___23618,out))
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
return (function (state_23800){
var state_val_23801 = (state_23800[(1)]);
if((state_val_23801 === (7))){
var inst_23796 = (state_23800[(2)]);
var state_23800__$1 = state_23800;
var statearr_23802_23844 = state_23800__$1;
(statearr_23802_23844[(2)] = inst_23796);

(statearr_23802_23844[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23801 === (20))){
var inst_23766 = (state_23800[(7)]);
var inst_23777 = (state_23800[(2)]);
var inst_23778 = cljs.core.next(inst_23766);
var inst_23752 = inst_23778;
var inst_23753 = null;
var inst_23754 = (0);
var inst_23755 = (0);
var state_23800__$1 = (function (){var statearr_23803 = state_23800;
(statearr_23803[(8)] = inst_23755);

(statearr_23803[(9)] = inst_23754);

(statearr_23803[(10)] = inst_23777);

(statearr_23803[(11)] = inst_23753);

(statearr_23803[(12)] = inst_23752);

return statearr_23803;
})();
var statearr_23804_23845 = state_23800__$1;
(statearr_23804_23845[(2)] = null);

(statearr_23804_23845[(1)] = (8));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23801 === (1))){
var state_23800__$1 = state_23800;
var statearr_23805_23846 = state_23800__$1;
(statearr_23805_23846[(2)] = null);

(statearr_23805_23846[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23801 === (4))){
var inst_23741 = (state_23800[(13)]);
var inst_23741__$1 = (state_23800[(2)]);
var inst_23742 = (inst_23741__$1 == null);
var state_23800__$1 = (function (){var statearr_23806 = state_23800;
(statearr_23806[(13)] = inst_23741__$1);

return statearr_23806;
})();
if(cljs.core.truth_(inst_23742)){
var statearr_23807_23847 = state_23800__$1;
(statearr_23807_23847[(1)] = (5));

} else {
var statearr_23808_23848 = state_23800__$1;
(statearr_23808_23848[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23801 === (15))){
var state_23800__$1 = state_23800;
var statearr_23812_23849 = state_23800__$1;
(statearr_23812_23849[(2)] = null);

(statearr_23812_23849[(1)] = (16));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23801 === (21))){
var state_23800__$1 = state_23800;
var statearr_23813_23850 = state_23800__$1;
(statearr_23813_23850[(2)] = null);

(statearr_23813_23850[(1)] = (23));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23801 === (13))){
var inst_23755 = (state_23800[(8)]);
var inst_23754 = (state_23800[(9)]);
var inst_23753 = (state_23800[(11)]);
var inst_23752 = (state_23800[(12)]);
var inst_23762 = (state_23800[(2)]);
var inst_23763 = (inst_23755 + (1));
var tmp23809 = inst_23754;
var tmp23810 = inst_23753;
var tmp23811 = inst_23752;
var inst_23752__$1 = tmp23811;
var inst_23753__$1 = tmp23810;
var inst_23754__$1 = tmp23809;
var inst_23755__$1 = inst_23763;
var state_23800__$1 = (function (){var statearr_23814 = state_23800;
(statearr_23814[(8)] = inst_23755__$1);

(statearr_23814[(9)] = inst_23754__$1);

(statearr_23814[(11)] = inst_23753__$1);

(statearr_23814[(12)] = inst_23752__$1);

(statearr_23814[(14)] = inst_23762);

return statearr_23814;
})();
var statearr_23815_23851 = state_23800__$1;
(statearr_23815_23851[(2)] = null);

(statearr_23815_23851[(1)] = (8));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23801 === (22))){
var state_23800__$1 = state_23800;
var statearr_23816_23852 = state_23800__$1;
(statearr_23816_23852[(2)] = null);

(statearr_23816_23852[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23801 === (6))){
var inst_23741 = (state_23800[(13)]);
var inst_23750 = (function (){var G__23817 = inst_23741;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23817) : f.call(null,G__23817));
})();
var inst_23751 = cljs.core.seq(inst_23750);
var inst_23752 = inst_23751;
var inst_23753 = null;
var inst_23754 = (0);
var inst_23755 = (0);
var state_23800__$1 = (function (){var statearr_23818 = state_23800;
(statearr_23818[(8)] = inst_23755);

(statearr_23818[(9)] = inst_23754);

(statearr_23818[(11)] = inst_23753);

(statearr_23818[(12)] = inst_23752);

return statearr_23818;
})();
var statearr_23819_23853 = state_23800__$1;
(statearr_23819_23853[(2)] = null);

(statearr_23819_23853[(1)] = (8));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23801 === (17))){
var inst_23766 = (state_23800[(7)]);
var inst_23770 = cljs.core.chunk_first(inst_23766);
var inst_23771 = cljs.core.chunk_rest(inst_23766);
var inst_23772 = cljs.core.count(inst_23770);
var inst_23752 = inst_23771;
var inst_23753 = inst_23770;
var inst_23754 = inst_23772;
var inst_23755 = (0);
var state_23800__$1 = (function (){var statearr_23820 = state_23800;
(statearr_23820[(8)] = inst_23755);

(statearr_23820[(9)] = inst_23754);

(statearr_23820[(11)] = inst_23753);

(statearr_23820[(12)] = inst_23752);

return statearr_23820;
})();
var statearr_23821_23854 = state_23800__$1;
(statearr_23821_23854[(2)] = null);

(statearr_23821_23854[(1)] = (8));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23801 === (3))){
var inst_23798 = (state_23800[(2)]);
var state_23800__$1 = state_23800;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23800__$1,inst_23798);
} else {
if((state_val_23801 === (12))){
var inst_23786 = (state_23800[(2)]);
var state_23800__$1 = state_23800;
var statearr_23822_23855 = state_23800__$1;
(statearr_23822_23855[(2)] = inst_23786);

(statearr_23822_23855[(1)] = (9));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23801 === (2))){
var state_23800__$1 = state_23800;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23800__$1,(4),in$);
} else {
if((state_val_23801 === (23))){
var inst_23794 = (state_23800[(2)]);
var state_23800__$1 = state_23800;
var statearr_23823_23856 = state_23800__$1;
(statearr_23823_23856[(2)] = inst_23794);

(statearr_23823_23856[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23801 === (19))){
var inst_23781 = (state_23800[(2)]);
var state_23800__$1 = state_23800;
var statearr_23824_23857 = state_23800__$1;
(statearr_23824_23857[(2)] = inst_23781);

(statearr_23824_23857[(1)] = (16));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23801 === (11))){
var inst_23766 = (state_23800[(7)]);
var inst_23752 = (state_23800[(12)]);
var inst_23766__$1 = cljs.core.seq(inst_23752);
var state_23800__$1 = (function (){var statearr_23825 = state_23800;
(statearr_23825[(7)] = inst_23766__$1);

return statearr_23825;
})();
if(inst_23766__$1){
var statearr_23826_23858 = state_23800__$1;
(statearr_23826_23858[(1)] = (14));

} else {
var statearr_23827_23859 = state_23800__$1;
(statearr_23827_23859[(1)] = (15));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23801 === (9))){
var inst_23788 = (state_23800[(2)]);
var inst_23789 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_23800__$1 = (function (){var statearr_23828 = state_23800;
(statearr_23828[(15)] = inst_23788);

return statearr_23828;
})();
if(cljs.core.truth_(inst_23789)){
var statearr_23829_23860 = state_23800__$1;
(statearr_23829_23860[(1)] = (21));

} else {
var statearr_23830_23861 = state_23800__$1;
(statearr_23830_23861[(1)] = (22));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23801 === (5))){
var inst_23744 = cljs.core.async.close_BANG_(out);
var state_23800__$1 = state_23800;
var statearr_23831_23862 = state_23800__$1;
(statearr_23831_23862[(2)] = inst_23744);

(statearr_23831_23862[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23801 === (14))){
var inst_23766 = (state_23800[(7)]);
var inst_23768 = cljs.core.chunked_seq_QMARK_(inst_23766);
var state_23800__$1 = state_23800;
if(inst_23768){
var statearr_23832_23863 = state_23800__$1;
(statearr_23832_23863[(1)] = (17));

} else {
var statearr_23833_23864 = state_23800__$1;
(statearr_23833_23864[(1)] = (18));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23801 === (16))){
var inst_23784 = (state_23800[(2)]);
var state_23800__$1 = state_23800;
var statearr_23834_23865 = state_23800__$1;
(statearr_23834_23865[(2)] = inst_23784);

(statearr_23834_23865[(1)] = (12));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23801 === (10))){
var inst_23755 = (state_23800[(8)]);
var inst_23753 = (state_23800[(11)]);
var inst_23760 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23753,inst_23755);
var state_23800__$1 = state_23800;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23800__$1,(13),out,inst_23760);
} else {
if((state_val_23801 === (18))){
var inst_23766 = (state_23800[(7)]);
var inst_23775 = cljs.core.first(inst_23766);
var state_23800__$1 = state_23800;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23800__$1,(20),out,inst_23775);
} else {
if((state_val_23801 === (8))){
var inst_23755 = (state_23800[(8)]);
var inst_23754 = (state_23800[(9)]);
var inst_23757 = (inst_23755 < inst_23754);
var inst_23758 = inst_23757;
var state_23800__$1 = state_23800;
if(cljs.core.truth_(inst_23758)){
var statearr_23835_23866 = state_23800__$1;
(statearr_23835_23866[(1)] = (10));

} else {
var statearr_23836_23867 = state_23800__$1;
(statearr_23836_23867[(1)] = (11));

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
var statearr_23840 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23840[(0)] = state_machine__11341__auto__);

(statearr_23840[(1)] = (1));

return statearr_23840;
});
var state_machine__11341__auto____1 = (function (state_23800){
while(true){
var ret_value__11342__auto__ = (function (){try{while(true){
var result__11343__auto__ = switch__11340__auto__(state_23800);
if(cljs.core.keyword_identical_QMARK_(result__11343__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11343__auto__;
}
break;
}
}catch (e23841){if((e23841 instanceof Object)){
var ex__11344__auto__ = e23841;
var statearr_23842_23868 = state_23800;
(statearr_23842_23868[(5)] = ex__11344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23800);

return cljs.core.constant$keyword$40;
} else {
throw e23841;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11342__auto__,cljs.core.constant$keyword$40)){
var G__23869 = state_23800;
state_23800 = G__23869;
continue;
} else {
return ret_value__11342__auto__;
}
break;
}
});
state_machine__11341__auto__ = function(state_23800){
switch(arguments.length){
case 0:
return state_machine__11341__auto____0.call(this);
case 1:
return state_machine__11341__auto____1.call(this,state_23800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11341__auto____0;
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11341__auto____1;
return state_machine__11341__auto__;
})()
;})(switch__11340__auto__,c__11420__auto__))
})();
var state__11422__auto__ = (function (){var statearr_23843 = (function (){return (f__11421__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11421__auto__.cljs$core$IFn$_invoke$arity$0() : f__11421__auto__.call(null));
})();
(statearr_23843[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11420__auto__);

return statearr_23843;
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
var c__11420__auto___23974 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11420__auto___23974,out){
return (function (){
var f__11421__auto__ = (function (){var switch__11340__auto__ = ((function (c__11420__auto___23974,out){
return (function (state_23949){
var state_val_23950 = (state_23949[(1)]);
if((state_val_23950 === (7))){
var inst_23944 = (state_23949[(2)]);
var state_23949__$1 = state_23949;
var statearr_23951_23975 = state_23949__$1;
(statearr_23951_23975[(2)] = inst_23944);

(statearr_23951_23975[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23950 === (1))){
var inst_23926 = null;
var state_23949__$1 = (function (){var statearr_23952 = state_23949;
(statearr_23952[(7)] = inst_23926);

return statearr_23952;
})();
var statearr_23953_23976 = state_23949__$1;
(statearr_23953_23976[(2)] = null);

(statearr_23953_23976[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23950 === (4))){
var inst_23929 = (state_23949[(8)]);
var inst_23929__$1 = (state_23949[(2)]);
var inst_23930 = (inst_23929__$1 == null);
var inst_23931 = cljs.core.not(inst_23930);
var state_23949__$1 = (function (){var statearr_23954 = state_23949;
(statearr_23954[(8)] = inst_23929__$1);

return statearr_23954;
})();
if(inst_23931){
var statearr_23955_23977 = state_23949__$1;
(statearr_23955_23977[(1)] = (5));

} else {
var statearr_23956_23978 = state_23949__$1;
(statearr_23956_23978[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23950 === (6))){
var state_23949__$1 = state_23949;
var statearr_23957_23979 = state_23949__$1;
(statearr_23957_23979[(2)] = null);

(statearr_23957_23979[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23950 === (3))){
var inst_23946 = (state_23949[(2)]);
var inst_23947 = cljs.core.async.close_BANG_(out);
var state_23949__$1 = (function (){var statearr_23958 = state_23949;
(statearr_23958[(9)] = inst_23946);

return statearr_23958;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_23949__$1,inst_23947);
} else {
if((state_val_23950 === (2))){
var state_23949__$1 = state_23949;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23949__$1,(4),ch);
} else {
if((state_val_23950 === (11))){
var inst_23929 = (state_23949[(8)]);
var inst_23938 = (state_23949[(2)]);
var inst_23926 = inst_23929;
var state_23949__$1 = (function (){var statearr_23959 = state_23949;
(statearr_23959[(10)] = inst_23938);

(statearr_23959[(7)] = inst_23926);

return statearr_23959;
})();
var statearr_23960_23980 = state_23949__$1;
(statearr_23960_23980[(2)] = null);

(statearr_23960_23980[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23950 === (9))){
var inst_23929 = (state_23949[(8)]);
var state_23949__$1 = state_23949;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23949__$1,(11),out,inst_23929);
} else {
if((state_val_23950 === (5))){
var inst_23926 = (state_23949[(7)]);
var inst_23929 = (state_23949[(8)]);
var inst_23933 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23929,inst_23926);
var state_23949__$1 = state_23949;
if(inst_23933){
var statearr_23962_23981 = state_23949__$1;
(statearr_23962_23981[(1)] = (8));

} else {
var statearr_23963_23982 = state_23949__$1;
(statearr_23963_23982[(1)] = (9));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_23950 === (10))){
var inst_23941 = (state_23949[(2)]);
var state_23949__$1 = state_23949;
var statearr_23964_23983 = state_23949__$1;
(statearr_23964_23983[(2)] = inst_23941);

(statearr_23964_23983[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_23950 === (8))){
var inst_23926 = (state_23949[(7)]);
var tmp23961 = inst_23926;
var inst_23926__$1 = tmp23961;
var state_23949__$1 = (function (){var statearr_23965 = state_23949;
(statearr_23965[(7)] = inst_23926__$1);

return statearr_23965;
})();
var statearr_23966_23984 = state_23949__$1;
(statearr_23966_23984[(2)] = null);

(statearr_23966_23984[(1)] = (2));


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
});})(c__11420__auto___23974,out))
;
return ((function (switch__11340__auto__,c__11420__auto___23974,out){
return (function() {
var state_machine__11341__auto__ = null;
var state_machine__11341__auto____0 = (function (){
var statearr_23970 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23970[(0)] = state_machine__11341__auto__);

(statearr_23970[(1)] = (1));

return statearr_23970;
});
var state_machine__11341__auto____1 = (function (state_23949){
while(true){
var ret_value__11342__auto__ = (function (){try{while(true){
var result__11343__auto__ = switch__11340__auto__(state_23949);
if(cljs.core.keyword_identical_QMARK_(result__11343__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11343__auto__;
}
break;
}
}catch (e23971){if((e23971 instanceof Object)){
var ex__11344__auto__ = e23971;
var statearr_23972_23985 = state_23949;
(statearr_23972_23985[(5)] = ex__11344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23949);

return cljs.core.constant$keyword$40;
} else {
throw e23971;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11342__auto__,cljs.core.constant$keyword$40)){
var G__23986 = state_23949;
state_23949 = G__23986;
continue;
} else {
return ret_value__11342__auto__;
}
break;
}
});
state_machine__11341__auto__ = function(state_23949){
switch(arguments.length){
case 0:
return state_machine__11341__auto____0.call(this);
case 1:
return state_machine__11341__auto____1.call(this,state_23949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11341__auto____0;
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11341__auto____1;
return state_machine__11341__auto__;
})()
;})(switch__11340__auto__,c__11420__auto___23974,out))
})();
var state__11422__auto__ = (function (){var statearr_23973 = (function (){return (f__11421__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11421__auto__.cljs$core$IFn$_invoke$arity$0() : f__11421__auto__.call(null));
})();
(statearr_23973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11420__auto___23974);

return statearr_23973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11422__auto__);
});})(c__11420__auto___23974,out))
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
var c__11420__auto___24124 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11420__auto___24124,out){
return (function (){
var f__11421__auto__ = (function (){var switch__11340__auto__ = ((function (c__11420__auto___24124,out){
return (function (state_24094){
var state_val_24095 = (state_24094[(1)]);
if((state_val_24095 === (7))){
var inst_24090 = (state_24094[(2)]);
var state_24094__$1 = state_24094;
var statearr_24096_24125 = state_24094__$1;
(statearr_24096_24125[(2)] = inst_24090);

(statearr_24096_24125[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24095 === (1))){
var inst_24057 = (new Array(n));
var inst_24058 = inst_24057;
var inst_24059 = (0);
var state_24094__$1 = (function (){var statearr_24097 = state_24094;
(statearr_24097[(7)] = inst_24058);

(statearr_24097[(8)] = inst_24059);

return statearr_24097;
})();
var statearr_24098_24126 = state_24094__$1;
(statearr_24098_24126[(2)] = null);

(statearr_24098_24126[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24095 === (4))){
var inst_24062 = (state_24094[(9)]);
var inst_24062__$1 = (state_24094[(2)]);
var inst_24063 = (inst_24062__$1 == null);
var inst_24064 = cljs.core.not(inst_24063);
var state_24094__$1 = (function (){var statearr_24099 = state_24094;
(statearr_24099[(9)] = inst_24062__$1);

return statearr_24099;
})();
if(inst_24064){
var statearr_24100_24127 = state_24094__$1;
(statearr_24100_24127[(1)] = (5));

} else {
var statearr_24101_24128 = state_24094__$1;
(statearr_24101_24128[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_24095 === (15))){
var inst_24084 = (state_24094[(2)]);
var state_24094__$1 = state_24094;
var statearr_24102_24129 = state_24094__$1;
(statearr_24102_24129[(2)] = inst_24084);

(statearr_24102_24129[(1)] = (14));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24095 === (13))){
var state_24094__$1 = state_24094;
var statearr_24103_24130 = state_24094__$1;
(statearr_24103_24130[(2)] = null);

(statearr_24103_24130[(1)] = (14));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24095 === (6))){
var inst_24059 = (state_24094[(8)]);
var inst_24080 = (inst_24059 > (0));
var state_24094__$1 = state_24094;
if(cljs.core.truth_(inst_24080)){
var statearr_24104_24131 = state_24094__$1;
(statearr_24104_24131[(1)] = (12));

} else {
var statearr_24105_24132 = state_24094__$1;
(statearr_24105_24132[(1)] = (13));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_24095 === (3))){
var inst_24092 = (state_24094[(2)]);
var state_24094__$1 = state_24094;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24094__$1,inst_24092);
} else {
if((state_val_24095 === (12))){
var inst_24058 = (state_24094[(7)]);
var inst_24082 = cljs.core.vec(inst_24058);
var state_24094__$1 = state_24094;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24094__$1,(15),out,inst_24082);
} else {
if((state_val_24095 === (2))){
var state_24094__$1 = state_24094;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24094__$1,(4),ch);
} else {
if((state_val_24095 === (11))){
var inst_24074 = (state_24094[(2)]);
var inst_24075 = (new Array(n));
var inst_24058 = inst_24075;
var inst_24059 = (0);
var state_24094__$1 = (function (){var statearr_24106 = state_24094;
(statearr_24106[(7)] = inst_24058);

(statearr_24106[(10)] = inst_24074);

(statearr_24106[(8)] = inst_24059);

return statearr_24106;
})();
var statearr_24107_24133 = state_24094__$1;
(statearr_24107_24133[(2)] = null);

(statearr_24107_24133[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24095 === (9))){
var inst_24058 = (state_24094[(7)]);
var inst_24072 = cljs.core.vec(inst_24058);
var state_24094__$1 = state_24094;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24094__$1,(11),out,inst_24072);
} else {
if((state_val_24095 === (5))){
var inst_24058 = (state_24094[(7)]);
var inst_24059 = (state_24094[(8)]);
var inst_24062 = (state_24094[(9)]);
var inst_24067 = (state_24094[(11)]);
var inst_24066 = (inst_24058[inst_24059] = inst_24062);
var inst_24067__$1 = (inst_24059 + (1));
var inst_24068 = (inst_24067__$1 < n);
var state_24094__$1 = (function (){var statearr_24108 = state_24094;
(statearr_24108[(12)] = inst_24066);

(statearr_24108[(11)] = inst_24067__$1);

return statearr_24108;
})();
if(cljs.core.truth_(inst_24068)){
var statearr_24109_24134 = state_24094__$1;
(statearr_24109_24134[(1)] = (8));

} else {
var statearr_24110_24135 = state_24094__$1;
(statearr_24110_24135[(1)] = (9));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_24095 === (14))){
var inst_24087 = (state_24094[(2)]);
var inst_24088 = cljs.core.async.close_BANG_(out);
var state_24094__$1 = (function (){var statearr_24112 = state_24094;
(statearr_24112[(13)] = inst_24087);

return statearr_24112;
})();
var statearr_24113_24136 = state_24094__$1;
(statearr_24113_24136[(2)] = inst_24088);

(statearr_24113_24136[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24095 === (10))){
var inst_24078 = (state_24094[(2)]);
var state_24094__$1 = state_24094;
var statearr_24114_24137 = state_24094__$1;
(statearr_24114_24137[(2)] = inst_24078);

(statearr_24114_24137[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24095 === (8))){
var inst_24058 = (state_24094[(7)]);
var inst_24067 = (state_24094[(11)]);
var tmp24111 = inst_24058;
var inst_24058__$1 = tmp24111;
var inst_24059 = inst_24067;
var state_24094__$1 = (function (){var statearr_24115 = state_24094;
(statearr_24115[(7)] = inst_24058__$1);

(statearr_24115[(8)] = inst_24059);

return statearr_24115;
})();
var statearr_24116_24138 = state_24094__$1;
(statearr_24116_24138[(2)] = null);

(statearr_24116_24138[(1)] = (2));


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
});})(c__11420__auto___24124,out))
;
return ((function (switch__11340__auto__,c__11420__auto___24124,out){
return (function() {
var state_machine__11341__auto__ = null;
var state_machine__11341__auto____0 = (function (){
var statearr_24120 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24120[(0)] = state_machine__11341__auto__);

(statearr_24120[(1)] = (1));

return statearr_24120;
});
var state_machine__11341__auto____1 = (function (state_24094){
while(true){
var ret_value__11342__auto__ = (function (){try{while(true){
var result__11343__auto__ = switch__11340__auto__(state_24094);
if(cljs.core.keyword_identical_QMARK_(result__11343__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11343__auto__;
}
break;
}
}catch (e24121){if((e24121 instanceof Object)){
var ex__11344__auto__ = e24121;
var statearr_24122_24139 = state_24094;
(statearr_24122_24139[(5)] = ex__11344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24094);

return cljs.core.constant$keyword$40;
} else {
throw e24121;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11342__auto__,cljs.core.constant$keyword$40)){
var G__24140 = state_24094;
state_24094 = G__24140;
continue;
} else {
return ret_value__11342__auto__;
}
break;
}
});
state_machine__11341__auto__ = function(state_24094){
switch(arguments.length){
case 0:
return state_machine__11341__auto____0.call(this);
case 1:
return state_machine__11341__auto____1.call(this,state_24094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11341__auto____0;
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11341__auto____1;
return state_machine__11341__auto__;
})()
;})(switch__11340__auto__,c__11420__auto___24124,out))
})();
var state__11422__auto__ = (function (){var statearr_24123 = (function (){return (f__11421__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11421__auto__.cljs$core$IFn$_invoke$arity$0() : f__11421__auto__.call(null));
})();
(statearr_24123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11420__auto___24124);

return statearr_24123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11422__auto__);
});})(c__11420__auto___24124,out))
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
var c__11420__auto___24288 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11420__auto___24288,out){
return (function (){
var f__11421__auto__ = (function (){var switch__11340__auto__ = ((function (c__11420__auto___24288,out){
return (function (state_24257){
var state_val_24258 = (state_24257[(1)]);
if((state_val_24258 === (7))){
var inst_24253 = (state_24257[(2)]);
var state_24257__$1 = state_24257;
var statearr_24259_24289 = state_24257__$1;
(statearr_24259_24289[(2)] = inst_24253);

(statearr_24259_24289[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24258 === (1))){
var inst_24216 = [];
var inst_24217 = inst_24216;
var inst_24218 = cljs.core.constant$keyword$55;
var state_24257__$1 = (function (){var statearr_24260 = state_24257;
(statearr_24260[(7)] = inst_24217);

(statearr_24260[(8)] = inst_24218);

return statearr_24260;
})();
var statearr_24261_24290 = state_24257__$1;
(statearr_24261_24290[(2)] = null);

(statearr_24261_24290[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24258 === (4))){
var inst_24221 = (state_24257[(9)]);
var inst_24221__$1 = (state_24257[(2)]);
var inst_24222 = (inst_24221__$1 == null);
var inst_24223 = cljs.core.not(inst_24222);
var state_24257__$1 = (function (){var statearr_24262 = state_24257;
(statearr_24262[(9)] = inst_24221__$1);

return statearr_24262;
})();
if(inst_24223){
var statearr_24263_24291 = state_24257__$1;
(statearr_24263_24291[(1)] = (5));

} else {
var statearr_24264_24292 = state_24257__$1;
(statearr_24264_24292[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_24258 === (15))){
var inst_24247 = (state_24257[(2)]);
var state_24257__$1 = state_24257;
var statearr_24265_24293 = state_24257__$1;
(statearr_24265_24293[(2)] = inst_24247);

(statearr_24265_24293[(1)] = (14));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24258 === (13))){
var state_24257__$1 = state_24257;
var statearr_24266_24294 = state_24257__$1;
(statearr_24266_24294[(2)] = null);

(statearr_24266_24294[(1)] = (14));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24258 === (6))){
var inst_24217 = (state_24257[(7)]);
var inst_24242 = inst_24217.length;
var inst_24243 = (inst_24242 > (0));
var state_24257__$1 = state_24257;
if(cljs.core.truth_(inst_24243)){
var statearr_24267_24295 = state_24257__$1;
(statearr_24267_24295[(1)] = (12));

} else {
var statearr_24268_24296 = state_24257__$1;
(statearr_24268_24296[(1)] = (13));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_24258 === (3))){
var inst_24255 = (state_24257[(2)]);
var state_24257__$1 = state_24257;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24257__$1,inst_24255);
} else {
if((state_val_24258 === (12))){
var inst_24217 = (state_24257[(7)]);
var inst_24245 = cljs.core.vec(inst_24217);
var state_24257__$1 = state_24257;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24257__$1,(15),out,inst_24245);
} else {
if((state_val_24258 === (2))){
var state_24257__$1 = state_24257;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24257__$1,(4),ch);
} else {
if((state_val_24258 === (11))){
var inst_24225 = (state_24257[(10)]);
var inst_24221 = (state_24257[(9)]);
var inst_24235 = (state_24257[(2)]);
var inst_24236 = [];
var inst_24237 = inst_24236.push(inst_24221);
var inst_24217 = inst_24236;
var inst_24218 = inst_24225;
var state_24257__$1 = (function (){var statearr_24269 = state_24257;
(statearr_24269[(11)] = inst_24235);

(statearr_24269[(7)] = inst_24217);

(statearr_24269[(12)] = inst_24237);

(statearr_24269[(8)] = inst_24218);

return statearr_24269;
})();
var statearr_24270_24297 = state_24257__$1;
(statearr_24270_24297[(2)] = null);

(statearr_24270_24297[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24258 === (9))){
var inst_24217 = (state_24257[(7)]);
var inst_24233 = cljs.core.vec(inst_24217);
var state_24257__$1 = state_24257;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24257__$1,(11),out,inst_24233);
} else {
if((state_val_24258 === (5))){
var inst_24225 = (state_24257[(10)]);
var inst_24218 = (state_24257[(8)]);
var inst_24221 = (state_24257[(9)]);
var inst_24225__$1 = (function (){var G__24271 = inst_24221;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24271) : f.call(null,G__24271));
})();
var inst_24226 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24225__$1,inst_24218);
var inst_24227 = cljs.core.keyword_identical_QMARK_(inst_24218,cljs.core.constant$keyword$55);
var inst_24228 = (inst_24226) || (inst_24227);
var state_24257__$1 = (function (){var statearr_24272 = state_24257;
(statearr_24272[(10)] = inst_24225__$1);

return statearr_24272;
})();
if(cljs.core.truth_(inst_24228)){
var statearr_24273_24298 = state_24257__$1;
(statearr_24273_24298[(1)] = (8));

} else {
var statearr_24274_24299 = state_24257__$1;
(statearr_24274_24299[(1)] = (9));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_24258 === (14))){
var inst_24250 = (state_24257[(2)]);
var inst_24251 = cljs.core.async.close_BANG_(out);
var state_24257__$1 = (function (){var statearr_24276 = state_24257;
(statearr_24276[(13)] = inst_24250);

return statearr_24276;
})();
var statearr_24277_24300 = state_24257__$1;
(statearr_24277_24300[(2)] = inst_24251);

(statearr_24277_24300[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24258 === (10))){
var inst_24240 = (state_24257[(2)]);
var state_24257__$1 = state_24257;
var statearr_24278_24301 = state_24257__$1;
(statearr_24278_24301[(2)] = inst_24240);

(statearr_24278_24301[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_24258 === (8))){
var inst_24225 = (state_24257[(10)]);
var inst_24217 = (state_24257[(7)]);
var inst_24221 = (state_24257[(9)]);
var inst_24230 = inst_24217.push(inst_24221);
var tmp24275 = inst_24217;
var inst_24217__$1 = tmp24275;
var inst_24218 = inst_24225;
var state_24257__$1 = (function (){var statearr_24279 = state_24257;
(statearr_24279[(7)] = inst_24217__$1);

(statearr_24279[(14)] = inst_24230);

(statearr_24279[(8)] = inst_24218);

return statearr_24279;
})();
var statearr_24280_24302 = state_24257__$1;
(statearr_24280_24302[(2)] = null);

(statearr_24280_24302[(1)] = (2));


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
});})(c__11420__auto___24288,out))
;
return ((function (switch__11340__auto__,c__11420__auto___24288,out){
return (function() {
var state_machine__11341__auto__ = null;
var state_machine__11341__auto____0 = (function (){
var statearr_24284 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24284[(0)] = state_machine__11341__auto__);

(statearr_24284[(1)] = (1));

return statearr_24284;
});
var state_machine__11341__auto____1 = (function (state_24257){
while(true){
var ret_value__11342__auto__ = (function (){try{while(true){
var result__11343__auto__ = switch__11340__auto__(state_24257);
if(cljs.core.keyword_identical_QMARK_(result__11343__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11343__auto__;
}
break;
}
}catch (e24285){if((e24285 instanceof Object)){
var ex__11344__auto__ = e24285;
var statearr_24286_24303 = state_24257;
(statearr_24286_24303[(5)] = ex__11344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24257);

return cljs.core.constant$keyword$40;
} else {
throw e24285;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11342__auto__,cljs.core.constant$keyword$40)){
var G__24304 = state_24257;
state_24257 = G__24304;
continue;
} else {
return ret_value__11342__auto__;
}
break;
}
});
state_machine__11341__auto__ = function(state_24257){
switch(arguments.length){
case 0:
return state_machine__11341__auto____0.call(this);
case 1:
return state_machine__11341__auto____1.call(this,state_24257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11341__auto____0;
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11341__auto____1;
return state_machine__11341__auto__;
})()
;})(switch__11340__auto__,c__11420__auto___24288,out))
})();
var state__11422__auto__ = (function (){var statearr_24287 = (function (){return (f__11421__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11421__auto__.cljs$core$IFn$_invoke$arity$0() : f__11421__auto__.call(null));
})();
(statearr_24287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11420__auto___24288);

return statearr_24287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11422__auto__);
});})(c__11420__auto___24288,out))
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
