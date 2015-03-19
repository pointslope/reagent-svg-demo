// Compiled by ClojureScript 0.0-2816 {:elide-asserts true, :static-fns true}
goog.provide('pointslope.remit.events');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('reagent.core');
/**
* This channel is used by the emit function
* to publish event notifications.
*/
pointslope.remit.events.event_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
/**
* This publication of the event-channel
* enforces a convention for the event
* emitter where all event notifications must
* take the form of a map with an :event key
* that designates the publication topic
*/
pointslope.remit.events.event_publication = cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2(pointslope.remit.events.event_channel,cljs.core.constant$keyword$56);
/**
* This function emits events by publishing
* them via core.async's pub/sub mechanism.
* 
* Expects an event-key and (optionally)
* event data.
* 
* Returns the message data structure
* that was emitted.
*/
pointslope.remit.events.emit = (function() {
var emit = null;
var emit__1 = (function (event_key){
return emit.cljs$core$IFn$_invoke$arity$2(event_key,null);
});
var emit__2 = (function (event_key,event_data){
return emit.cljs$core$IFn$_invoke$arity$3(pointslope.remit.events.event_channel,event_key,event_data);
});
var emit__3 = (function (event_chan,event_key,event_data){
var message = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$56,event_key,cljs.core.constant$keyword$57,event_data], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(event_chan,message);

return message;
});
emit = function(event_chan,event_key,event_data){
switch(arguments.length){
case 1:
return emit__1.call(this,event_chan);
case 2:
return emit__2.call(this,event_chan,event_key);
case 3:
return emit__3.call(this,event_chan,event_key,event_data);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
emit.cljs$core$IFn$_invoke$arity$1 = emit__1;
emit.cljs$core$IFn$_invoke$arity$2 = emit__2;
emit.cljs$core$IFn$_invoke$arity$3 = emit__3;
return emit;
})()
;
/**
* This function registers a handler function for
* a given event (topic). It does this by establishing
* a core.async subscription on a new channel.
* 
* Expects an event key and handler function.
* Optionally, a pre-existing subscription
* channel can be passed in. This makes it
* easy to re-connect a previous listener
* dynamically.
* 
* If no subscription channel is supplied, a
* new one will be created.
* 
* Returns the subscription channel (which)
* can later be used to unsubscribe.
* 
* Received events will be delegated to the
* supplied function in a go block. The go
* block will exit if the channel is closed.
* 
* In the event of an exception, we will warn
* on the js/console and re-throw.
* 
* usage:
* 
* (subscribe :click (fn [data] ...))
* 
* (let [my-chan (chan)]
* ... more work here ...
* (subscribe my-chan :click (fn [data] ...)))
* 
*/
pointslope.remit.events.subscribe = (function() {
var subscribe = null;
var subscribe__2 = (function (event_key,f){
return subscribe.cljs$core$IFn$_invoke$arity$4(pointslope.remit.events.event_publication,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0(),event_key,f);
});
var subscribe__3 = (function (sub_chan,event_key,f){
return subscribe.cljs$core$IFn$_invoke$arity$4(pointslope.remit.events.event_publication,sub_chan,event_key,f);
});
var subscribe__4 = (function (pub_chan,sub_chan,event_key,f){
var _ = cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3(pub_chan,event_key,sub_chan);
var c__11422__auto___21089 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11422__auto___21089,_){
return (function (){
var f__11423__auto__ = (function (){var switch__11342__auto__ = ((function (c__11422__auto___21089,_){
return (function (state_21068){
var state_val_21069 = (state_21068[(1)]);
if((state_val_21069 === (7))){
var inst_21064 = (state_21068[(2)]);
var state_21068__$1 = state_21068;
var statearr_21070_21090 = state_21068__$1;
(statearr_21070_21090[(2)] = inst_21064);

(statearr_21070_21090[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21069 === (1))){
var state_21068__$1 = state_21068;
var statearr_21071_21091 = state_21068__$1;
(statearr_21071_21091[(2)] = null);

(statearr_21071_21091[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21069 === (4))){
var inst_21051 = (state_21068[(7)]);
var inst_21051__$1 = (state_21068[(2)]);
var state_21068__$1 = (function (){var statearr_21072 = state_21068;
(statearr_21072[(7)] = inst_21051__$1);

return statearr_21072;
})();
if(cljs.core.truth_(inst_21051__$1)){
var statearr_21073_21092 = state_21068__$1;
(statearr_21073_21092[(1)] = (5));

} else {
var statearr_21074_21093 = state_21068__$1;
(statearr_21074_21093[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_21069 === (6))){
var state_21068__$1 = state_21068;
var statearr_21075_21094 = state_21068__$1;
(statearr_21075_21094[(2)] = null);

(statearr_21075_21094[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21069 === (3))){
var inst_21066 = (state_21068[(2)]);
var state_21068__$1 = state_21068;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21068__$1,inst_21066);
} else {
if((state_val_21069 === (2))){
var state_21068__$1 = state_21068;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21068__$1,(4),sub_chan);
} else {
if((state_val_21069 === (9))){
var inst_21053 = (state_21068[(2)]);
var inst_21054 = (function(){throw inst_21053})();
var state_21068__$1 = state_21068;
var statearr_21076_21095 = state_21068__$1;
(statearr_21076_21095[(2)] = inst_21054);


cljs.core.async.impl.ioc_helpers.process_exception(state_21068__$1);

return cljs.core.constant$keyword$40;
} else {
if((state_val_21069 === (5))){
var state_21068__$1 = state_21068;
var statearr_21077_21096 = state_21068__$1;
(statearr_21077_21096[(2)] = null);

(statearr_21077_21096[(1)] = (10));


return cljs.core.constant$keyword$40;
} else {
if((state_val_21069 === (10))){
var inst_21051 = (state_21068[(7)]);
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_21068,(9),cljs.core.constant$keyword$7,null,(8));
var inst_21058 = (function (){var G__21078 = inst_21051;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__21078) : f.call(null,G__21078));
})();
var state_21068__$1 = state_21068;
var statearr_21079_21097 = state_21068__$1;
(statearr_21079_21097[(2)] = inst_21058);


cljs.core.async.impl.ioc_helpers.process_exception(state_21068__$1);

return cljs.core.constant$keyword$40;
} else {
if((state_val_21069 === (8))){
var inst_21060 = (state_21068[(2)]);
var state_21068__$1 = (function (){var statearr_21080 = state_21068;
(statearr_21080[(8)] = inst_21060);

return statearr_21080;
})();
var statearr_21081_21098 = state_21068__$1;
(statearr_21081_21098[(2)] = null);

(statearr_21081_21098[(1)] = (2));


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
});})(c__11422__auto___21089,_))
;
return ((function (switch__11342__auto__,c__11422__auto___21089,_){
return (function() {
var state_machine__11343__auto__ = null;
var state_machine__11343__auto____0 = (function (){
var statearr_21085 = [null,null,null,null,null,null,null,null,null];
(statearr_21085[(0)] = state_machine__11343__auto__);

(statearr_21085[(1)] = (1));

return statearr_21085;
});
var state_machine__11343__auto____1 = (function (state_21068){
while(true){
var ret_value__11344__auto__ = (function (){try{while(true){
var result__11345__auto__ = switch__11342__auto__(state_21068);
if(cljs.core.keyword_identical_QMARK_(result__11345__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11345__auto__;
}
break;
}
}catch (e21086){if((e21086 instanceof Object)){
var ex__11346__auto__ = e21086;
var statearr_21087_21099 = state_21068;
(statearr_21087_21099[(5)] = ex__11346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21068);

return cljs.core.constant$keyword$40;
} else {
throw e21086;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11344__auto__,cljs.core.constant$keyword$40)){
var G__21100 = state_21068;
state_21068 = G__21100;
continue;
} else {
return ret_value__11344__auto__;
}
break;
}
});
state_machine__11343__auto__ = function(state_21068){
switch(arguments.length){
case 0:
return state_machine__11343__auto____0.call(this);
case 1:
return state_machine__11343__auto____1.call(this,state_21068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11343__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11343__auto____0;
state_machine__11343__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11343__auto____1;
return state_machine__11343__auto__;
})()
;})(switch__11342__auto__,c__11422__auto___21089,_))
})();
var state__11424__auto__ = (function (){var statearr_21088 = (function (){return (f__11423__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11423__auto__.cljs$core$IFn$_invoke$arity$0() : f__11423__auto__.call(null));
})();
(statearr_21088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11422__auto___21089);

return statearr_21088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11424__auto__);
});})(c__11422__auto___21089,_))
);


return sub_chan;
});
subscribe = function(pub_chan,sub_chan,event_key,f){
switch(arguments.length){
case 2:
return subscribe__2.call(this,pub_chan,sub_chan);
case 3:
return subscribe__3.call(this,pub_chan,sub_chan,event_key);
case 4:
return subscribe__4.call(this,pub_chan,sub_chan,event_key,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subscribe.cljs$core$IFn$_invoke$arity$2 = subscribe__2;
subscribe.cljs$core$IFn$_invoke$arity$3 = subscribe__3;
subscribe.cljs$core$IFn$_invoke$arity$4 = subscribe__4;
return subscribe;
})()
;
/**
* Unsubscribes a channel from an event publication
*/
pointslope.remit.events.unsubscribe = (function() {
var unsubscribe = null;
var unsubscribe__2 = (function (sub_chan,topic){
return unsubscribe.cljs$core$IFn$_invoke$arity$3(pointslope.remit.events.event_publication,sub_chan,topic);
});
var unsubscribe__3 = (function (pub_chan,sub_chan,topic){
return cljs.core.async.unsub(pub_chan,topic,sub_chan);
});
unsubscribe = function(pub_chan,sub_chan,topic){
switch(arguments.length){
case 2:
return unsubscribe__2.call(this,pub_chan,sub_chan);
case 3:
return unsubscribe__3.call(this,pub_chan,sub_chan,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsubscribe.cljs$core$IFn$_invoke$arity$2 = unsubscribe__2;
unsubscribe.cljs$core$IFn$_invoke$arity$3 = unsubscribe__3;
return unsubscribe;
})()
;
/**
* Unsubscribes all listeners from an event topic
*/
pointslope.remit.events.unsubscribe_all = (function() {
var unsubscribe_all = null;
var unsubscribe_all__1 = (function (topic){
return unsubscribe_all.cljs$core$IFn$_invoke$arity$2(pointslope.remit.events.event_publication,topic);
});
var unsubscribe_all__2 = (function (pub_chan,topic){
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2(pub_chan,topic);
});
unsubscribe_all = function(pub_chan,topic){
switch(arguments.length){
case 1:
return unsubscribe_all__1.call(this,pub_chan);
case 2:
return unsubscribe_all__2.call(this,pub_chan,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsubscribe_all.cljs$core$IFn$_invoke$arity$1 = unsubscribe_all__1;
unsubscribe_all.cljs$core$IFn$_invoke$arity$2 = unsubscribe_all__2;
return unsubscribe_all;
})()
;
