// Compiled by ClojureScript 0.0-2816 {:elide-asserts true, :static-fns true}
goog.provide('cljs.core.async.impl.protocols');
goog.require('cljs.core');
cljs.core.async.impl.protocols.MAX_QUEUE_SIZE = (1024);

cljs.core.async.impl.protocols.ReadPort = (function (){var obj24402 = {};
return obj24402;
})();

cljs.core.async.impl.protocols.take_BANG_ = (function take_BANG_(port,fn1_handler){
if((function (){var and__3571__auto__ = port;
if(and__3571__auto__){
return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2;
} else {
return and__3571__auto__;
}
})()){
return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(port,fn1_handler);
} else {
var x__4227__auto__ = (((port == null))?null:port);
return (function (){var or__3583__auto__ = (cljs.core.async.impl.protocols.take_BANG_[(function (){var G__24406 = x__4227__auto__;
return goog.typeOf(G__24406);
})()]);
if(or__3583__auto__){
return or__3583__auto__;
} else {
var or__3583__auto____$1 = (cljs.core.async.impl.protocols.take_BANG_["_"]);
if(or__3583__auto____$1){
return or__3583__auto____$1;
} else {
throw cljs.core.missing_protocol("ReadPort.take!",port);
}
}
})().call(null,port,fn1_handler);
}
});


cljs.core.async.impl.protocols.WritePort = (function (){var obj24408 = {};
return obj24408;
})();

cljs.core.async.impl.protocols.put_BANG_ = (function put_BANG_(port,val,fn1_handler){
if((function (){var and__3571__auto__ = port;
if(and__3571__auto__){
return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3;
} else {
return and__3571__auto__;
}
})()){
return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(port,val,fn1_handler);
} else {
var x__4227__auto__ = (((port == null))?null:port);
return (function (){var or__3583__auto__ = (cljs.core.async.impl.protocols.put_BANG_[(function (){var G__24412 = x__4227__auto__;
return goog.typeOf(G__24412);
})()]);
if(or__3583__auto__){
return or__3583__auto__;
} else {
var or__3583__auto____$1 = (cljs.core.async.impl.protocols.put_BANG_["_"]);
if(or__3583__auto____$1){
return or__3583__auto____$1;
} else {
throw cljs.core.missing_protocol("WritePort.put!",port);
}
}
})().call(null,port,val,fn1_handler);
}
});


cljs.core.async.impl.protocols.Channel = (function (){var obj24414 = {};
return obj24414;
})();

cljs.core.async.impl.protocols.close_BANG_ = (function close_BANG_(chan){
if((function (){var and__3571__auto__ = chan;
if(and__3571__auto__){
return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1;
} else {
return and__3571__auto__;
}
})()){
return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(chan);
} else {
var x__4227__auto__ = (((chan == null))?null:chan);
return (function (){var or__3583__auto__ = (cljs.core.async.impl.protocols.close_BANG_[(function (){var G__24418 = x__4227__auto__;
return goog.typeOf(G__24418);
})()]);
if(or__3583__auto__){
return or__3583__auto__;
} else {
var or__3583__auto____$1 = (cljs.core.async.impl.protocols.close_BANG_["_"]);
if(or__3583__auto____$1){
return or__3583__auto____$1;
} else {
throw cljs.core.missing_protocol("Channel.close!",chan);
}
}
})().call(null,chan);
}
});

cljs.core.async.impl.protocols.closed_QMARK_ = (function closed_QMARK_(chan){
if((function (){var and__3571__auto__ = chan;
if(and__3571__auto__){
return chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1;
} else {
return and__3571__auto__;
}
})()){
return chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1(chan);
} else {
var x__4227__auto__ = (((chan == null))?null:chan);
return (function (){var or__3583__auto__ = (cljs.core.async.impl.protocols.closed_QMARK_[(function (){var G__24422 = x__4227__auto__;
return goog.typeOf(G__24422);
})()]);
if(or__3583__auto__){
return or__3583__auto__;
} else {
var or__3583__auto____$1 = (cljs.core.async.impl.protocols.closed_QMARK_["_"]);
if(or__3583__auto____$1){
return or__3583__auto____$1;
} else {
throw cljs.core.missing_protocol("Channel.closed?",chan);
}
}
})().call(null,chan);
}
});


cljs.core.async.impl.protocols.Handler = (function (){var obj24424 = {};
return obj24424;
})();

cljs.core.async.impl.protocols.active_QMARK_ = (function active_QMARK_(h){
if((function (){var and__3571__auto__ = h;
if(and__3571__auto__){
return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1;
} else {
return and__3571__auto__;
}
})()){
return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(h);
} else {
var x__4227__auto__ = (((h == null))?null:h);
return (function (){var or__3583__auto__ = (cljs.core.async.impl.protocols.active_QMARK_[(function (){var G__24428 = x__4227__auto__;
return goog.typeOf(G__24428);
})()]);
if(or__3583__auto__){
return or__3583__auto__;
} else {
var or__3583__auto____$1 = (cljs.core.async.impl.protocols.active_QMARK_["_"]);
if(or__3583__auto____$1){
return or__3583__auto____$1;
} else {
throw cljs.core.missing_protocol("Handler.active?",h);
}
}
})().call(null,h);
}
});

cljs.core.async.impl.protocols.commit = (function commit(h){
if((function (){var and__3571__auto__ = h;
if(and__3571__auto__){
return h.cljs$core$async$impl$protocols$Handler$commit$arity$1;
} else {
return and__3571__auto__;
}
})()){
return h.cljs$core$async$impl$protocols$Handler$commit$arity$1(h);
} else {
var x__4227__auto__ = (((h == null))?null:h);
return (function (){var or__3583__auto__ = (cljs.core.async.impl.protocols.commit[(function (){var G__24432 = x__4227__auto__;
return goog.typeOf(G__24432);
})()]);
if(or__3583__auto__){
return or__3583__auto__;
} else {
var or__3583__auto____$1 = (cljs.core.async.impl.protocols.commit["_"]);
if(or__3583__auto____$1){
return or__3583__auto____$1;
} else {
throw cljs.core.missing_protocol("Handler.commit",h);
}
}
})().call(null,h);
}
});


cljs.core.async.impl.protocols.Buffer = (function (){var obj24434 = {};
return obj24434;
})();

cljs.core.async.impl.protocols.full_QMARK_ = (function full_QMARK_(b){
if((function (){var and__3571__auto__ = b;
if(and__3571__auto__){
return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1;
} else {
return and__3571__auto__;
}
})()){
return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(b);
} else {
var x__4227__auto__ = (((b == null))?null:b);
return (function (){var or__3583__auto__ = (cljs.core.async.impl.protocols.full_QMARK_[(function (){var G__24438 = x__4227__auto__;
return goog.typeOf(G__24438);
})()]);
if(or__3583__auto__){
return or__3583__auto__;
} else {
var or__3583__auto____$1 = (cljs.core.async.impl.protocols.full_QMARK_["_"]);
if(or__3583__auto____$1){
return or__3583__auto____$1;
} else {
throw cljs.core.missing_protocol("Buffer.full?",b);
}
}
})().call(null,b);
}
});

cljs.core.async.impl.protocols.remove_BANG_ = (function remove_BANG_(b){
if((function (){var and__3571__auto__ = b;
if(and__3571__auto__){
return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1;
} else {
return and__3571__auto__;
}
})()){
return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(b);
} else {
var x__4227__auto__ = (((b == null))?null:b);
return (function (){var or__3583__auto__ = (cljs.core.async.impl.protocols.remove_BANG_[(function (){var G__24442 = x__4227__auto__;
return goog.typeOf(G__24442);
})()]);
if(or__3583__auto__){
return or__3583__auto__;
} else {
var or__3583__auto____$1 = (cljs.core.async.impl.protocols.remove_BANG_["_"]);
if(or__3583__auto____$1){
return or__3583__auto____$1;
} else {
throw cljs.core.missing_protocol("Buffer.remove!",b);
}
}
})().call(null,b);
}
});

cljs.core.async.impl.protocols.add_BANG__STAR_ = (function add_BANG__STAR_(b,itm){
if((function (){var and__3571__auto__ = b;
if(and__3571__auto__){
return b.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2;
} else {
return and__3571__auto__;
}
})()){
return b.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2(b,itm);
} else {
var x__4227__auto__ = (((b == null))?null:b);
return (function (){var or__3583__auto__ = (cljs.core.async.impl.protocols.add_BANG__STAR_[(function (){var G__24446 = x__4227__auto__;
return goog.typeOf(G__24446);
})()]);
if(or__3583__auto__){
return or__3583__auto__;
} else {
var or__3583__auto____$1 = (cljs.core.async.impl.protocols.add_BANG__STAR_["_"]);
if(or__3583__auto____$1){
return or__3583__auto____$1;
} else {
throw cljs.core.missing_protocol("Buffer.add!*",b);
}
}
})().call(null,b,itm);
}
});

cljs.core.async.impl.protocols.add_BANG_ = (function() {
var add_BANG_ = null;
var add_BANG___1 = (function (b){
return b;
});
var add_BANG___2 = (function (b,itm){

return cljs.core.async.impl.protocols.add_BANG__STAR_(b,itm);
});
add_BANG_ = function(b,itm){
switch(arguments.length){
case 1:
return add_BANG___1.call(this,b);
case 2:
return add_BANG___2.call(this,b,itm);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_BANG_.cljs$core$IFn$_invoke$arity$1 = add_BANG___1;
add_BANG_.cljs$core$IFn$_invoke$arity$2 = add_BANG___2;
return add_BANG_;
})()
;

cljs.core.async.impl.protocols.UnblockingBuffer = (function (){var obj24448 = {};
return obj24448;
})();

