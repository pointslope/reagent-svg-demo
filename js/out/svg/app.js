// Compiled by ClojureScript 0.0-2816 {:elide-asserts true, :static-fns true}
goog.provide('svg.app');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.fx');
goog.require('pointslope.remit.middleware');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('goog.events.EventType');
goog.require('goog.fx.Dragger.EventType');
goog.require('pointslope.remit.events');
goog.require('goog.string.format');
goog.require('goog.math');
goog.require('goog.events');
if(typeof svg.app.app_db !== 'undefined'){
} else {
svg.app.app_db = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$58,(360),cljs.core.constant$keyword$59,(360),cljs.core.constant$keyword$60,(50),cljs.core.constant$keyword$61,"black",cljs.core.constant$keyword$62,(0)], null));
}
if(typeof svg.app.history !== 'undefined'){
} else {
svg.app.history = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$63,cljs.core.PersistentVector.EMPTY,cljs.core.constant$keyword$64,(0)], null));
}
if(typeof svg.app.event_handlers !== 'undefined'){
} else {
svg.app.event_handlers = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
/**
* Wraps handlers in middleware that adds the app-db
* to the event map under the :db key
*/
svg.app.wrap_db = (function wrap_db(handler){
return pointslope.remit.middleware.event_map_middleware(handler,cljs.core.constant$keyword$65,svg.app.app_db);
});
pointslope.remit.events.subscribe.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$66,svg.app.wrap_db((function (p__20821){
var map__20822 = p__20821;
var map__20822__$1 = ((cljs.core.seq_QMARK_(map__20822))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20822):map__20822);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20822__$1,cljs.core.constant$keyword$65);
var map__20823 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20822__$1,cljs.core.constant$keyword$57);
var map__20823__$1 = ((cljs.core.seq_QMARK_(map__20823))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20823):map__20823);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20823__$1,cljs.core.constant$keyword$58);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20823__$1,cljs.core.constant$keyword$59);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.assoc,cljs.core.constant$keyword$58,x,cljs.core.array_seq([cljs.core.constant$keyword$59,y], 0));

return pointslope.remit.events.emit.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$67);
})));
pointslope.remit.events.subscribe.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$68,svg.app.wrap_db((function (p__20824){
var map__20825 = p__20824;
var map__20825__$1 = ((cljs.core.seq_QMARK_(map__20825))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20825):map__20825);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20825__$1,cljs.core.constant$keyword$65);
var map__20826 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20825__$1,cljs.core.constant$keyword$57);
var map__20826__$1 = ((cljs.core.seq_QMARK_(map__20826))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20826):map__20826);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20826__$1,cljs.core.constant$keyword$69);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(db,cljs.core.assoc,cljs.core.constant$keyword$61,color);

return pointslope.remit.events.emit.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$67);
})));
pointslope.remit.events.subscribe.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$70,(function (p__20827){
var map__20828 = p__20827;
var map__20828__$1 = ((cljs.core.seq_QMARK_(map__20828))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20828):map__20828);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20828__$1,cljs.core.constant$keyword$57);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(data,cljs.core.inc);

return pointslope.remit.events.emit.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$67);
}));
pointslope.remit.events.subscribe.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$71,(function (p__20829){
var map__20830 = p__20829;
var map__20830__$1 = ((cljs.core.seq_QMARK_(map__20830))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20830):map__20830);
var map__20831 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20830__$1,cljs.core.constant$keyword$57);
var map__20831__$1 = ((cljs.core.seq_QMARK_(map__20831))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20831):map__20831);
var cursor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20831__$1,cljs.core.constant$keyword$72);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20831__$1,cljs.core.constant$keyword$73);
var G__20832_20834 = cursor;
var G__20833_20835 = value;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20832_20834,G__20833_20835) : cljs.core.reset_BANG_.call(null,G__20832_20834,G__20833_20835));

return pointslope.remit.events.emit.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$67);
}));
pointslope.remit.events.subscribe.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$67,svg.app.wrap_db((function (p__20836){
var map__20837 = p__20836;
var map__20837__$1 = ((cljs.core.seq_QMARK_(map__20837))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20837):map__20837);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20837__$1,cljs.core.constant$keyword$65);
var states = (function (){var G__20838 = reagent.core.cursor(svg.app.history,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$63], null));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20838) : cljs.core.deref.call(null,G__20838));
})();
var counter = (function (){var G__20839 = reagent.core.cursor(svg.app.history,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$74], null));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20839) : cljs.core.deref.call(null,G__20839));
})();
var next_index = (counter + (1));
var G__20840 = svg.app.history;
var G__20841 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$63,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(states,(function (){var G__20842 = db;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20842) : cljs.core.deref.call(null,G__20842));
})()),cljs.core.constant$keyword$74,next_index,cljs.core.constant$keyword$64,next_index], null);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20840,G__20841) : cljs.core.reset_BANG_.call(null,G__20840,G__20841));
})));
pointslope.remit.events.subscribe.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$75,svg.app.wrap_db((function (p__20843){
var map__20844 = p__20843;
var map__20844__$1 = ((cljs.core.seq_QMARK_(map__20844))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20844):map__20844);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20844__$1,cljs.core.constant$keyword$57);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20844__$1,cljs.core.constant$keyword$65);
var states = reagent.core.cursor(svg.app.history,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$63], null));
var current = reagent.core.cursor(svg.app.history,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$64], null));
var temp__4126__auto___20850 = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__20845 = states;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20845) : cljs.core.deref.call(null,G__20845));
})(),data);
if(cljs.core.truth_(temp__4126__auto___20850)){
var chosen_20851 = temp__4126__auto___20850;
var G__20846_20852 = current;
var G__20847_20853 = data;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20846_20852,G__20847_20853) : cljs.core.reset_BANG_.call(null,G__20846_20852,G__20847_20853));

var G__20848_20854 = db;
var G__20849_20855 = chosen_20851;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20848_20854,G__20849_20855) : cljs.core.reset_BANG_.call(null,G__20848_20854,G__20849_20855));
} else {
}

return true;
})));
/**
* Steps through history in an optionally specified dir.
* Default id :forward
*/
svg.app.play_history = (function() {
var play_history = null;
var play_history__1 = (function (history){
return play_history.cljs$core$IFn$_invoke$arity$2(history,cljs.core.constant$keyword$76);
});
var play_history__2 = (function (history,dir){
var indices_chan = cljs.core.async.to_chan((function (){var G__20892 = history;
var G__20892__$1 = cljs.core.count(G__20892)
;
var G__20892__$2 = (G__20892__$1 + (1))
;
var G__20892__$3 = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),G__20892__$2)
;
var G__20892__$4 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$77,dir))?cljs.core.reverse(G__20892__$3):G__20892__$3);
return G__20892__$4;
})());
var c__11422__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11422__auto__,indices_chan){
return (function (){
var f__11423__auto__ = (function (){var switch__11342__auto__ = ((function (c__11422__auto__,indices_chan){
return (function (state_20908){
var state_val_20909 = (state_20908[(1)]);
if((state_val_20909 === (8))){
var inst_20900 = (state_20908[(2)]);
var state_20908__$1 = (function (){var statearr_20910 = state_20908;
(statearr_20910[(7)] = inst_20900);

return statearr_20910;
})();
var statearr_20911_20926 = state_20908__$1;
(statearr_20911_20926[(2)] = null);

(statearr_20911_20926[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_20909 === (7))){
var inst_20904 = (state_20908[(2)]);
var state_20908__$1 = state_20908;
var statearr_20912_20927 = state_20908__$1;
(statearr_20912_20927[(2)] = inst_20904);

(statearr_20912_20927[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_20909 === (6))){
var state_20908__$1 = state_20908;
var statearr_20913_20928 = state_20908__$1;
(statearr_20913_20928[(2)] = null);

(statearr_20913_20928[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_20909 === (5))){
var inst_20895 = (state_20908[(8)]);
var inst_20897 = pointslope.remit.events.emit.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$75,inst_20895);
var inst_20898 = cljs.core.async.timeout((20));
var state_20908__$1 = (function (){var statearr_20914 = state_20908;
(statearr_20914[(9)] = inst_20897);

return statearr_20914;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20908__$1,(8),inst_20898);
} else {
if((state_val_20909 === (4))){
var inst_20895 = (state_20908[(8)]);
var inst_20895__$1 = (state_20908[(2)]);
var state_20908__$1 = (function (){var statearr_20915 = state_20908;
(statearr_20915[(8)] = inst_20895__$1);

return statearr_20915;
})();
if(cljs.core.truth_(inst_20895__$1)){
var statearr_20916_20929 = state_20908__$1;
(statearr_20916_20929[(1)] = (5));

} else {
var statearr_20917_20930 = state_20908__$1;
(statearr_20917_20930[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_20909 === (3))){
var inst_20906 = (state_20908[(2)]);
var state_20908__$1 = state_20908;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20908__$1,inst_20906);
} else {
if((state_val_20909 === (2))){
var state_20908__$1 = state_20908;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20908__$1,(4),indices_chan);
} else {
if((state_val_20909 === (1))){
var state_20908__$1 = state_20908;
var statearr_20918_20931 = state_20908__$1;
(statearr_20918_20931[(2)] = null);

(statearr_20918_20931[(1)] = (2));


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
});})(c__11422__auto__,indices_chan))
;
return ((function (switch__11342__auto__,c__11422__auto__,indices_chan){
return (function() {
var state_machine__11343__auto__ = null;
var state_machine__11343__auto____0 = (function (){
var statearr_20922 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20922[(0)] = state_machine__11343__auto__);

(statearr_20922[(1)] = (1));

return statearr_20922;
});
var state_machine__11343__auto____1 = (function (state_20908){
while(true){
var ret_value__11344__auto__ = (function (){try{while(true){
var result__11345__auto__ = switch__11342__auto__(state_20908);
if(cljs.core.keyword_identical_QMARK_(result__11345__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11345__auto__;
}
break;
}
}catch (e20923){if((e20923 instanceof Object)){
var ex__11346__auto__ = e20923;
var statearr_20924_20932 = state_20908;
(statearr_20924_20932[(5)] = ex__11346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20908);

return cljs.core.constant$keyword$40;
} else {
throw e20923;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11344__auto__,cljs.core.constant$keyword$40)){
var G__20933 = state_20908;
state_20908 = G__20933;
continue;
} else {
return ret_value__11344__auto__;
}
break;
}
});
state_machine__11343__auto__ = function(state_20908){
switch(arguments.length){
case 0:
return state_machine__11343__auto____0.call(this);
case 1:
return state_machine__11343__auto____1.call(this,state_20908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11343__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11343__auto____0;
state_machine__11343__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11343__auto____1;
return state_machine__11343__auto__;
})()
;})(switch__11342__auto__,c__11422__auto__,indices_chan))
})();
var state__11424__auto__ = (function (){var statearr_20925 = (function (){return (f__11423__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11423__auto__.cljs$core$IFn$_invoke$arity$0() : f__11423__auto__.call(null));
})();
(statearr_20925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11422__auto__);

return statearr_20925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11424__auto__);
});})(c__11422__auto__,indices_chan))
);

return c__11422__auto__;
});
play_history = function(history,dir){
switch(arguments.length){
case 1:
return play_history__1.call(this,history);
case 2:
return play_history__2.call(this,history,dir);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
play_history.cljs$core$IFn$_invoke$arity$1 = play_history__1;
play_history.cljs$core$IFn$_invoke$arity$2 = play_history__2;
return play_history;
})()
;
svg.app.history_component = (function history_component(db){
var h = reagent.core.cursor(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$63], null));
var current = reagent.core.cursor(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$64], null));
return ((function (h,current){
return (function (db__$1){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$78,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$17,"wrapper row"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$78,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$17,"form-group col-md-12"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$80,"history"], null),[cljs.core.str("History States ["),cljs.core.str((function (){var G__20940 = current;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20940) : cljs.core.deref.call(null,G__20940));
})()),cljs.core.str("]")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$81,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$82,"range",cljs.core.constant$keyword$17,"form-control",cljs.core.constant$keyword$30,"history",cljs.core.constant$keyword$73,(function (){var G__20941 = current;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20941) : cljs.core.deref.call(null,G__20941));
})(),cljs.core.constant$keyword$83,(0),cljs.core.constant$keyword$84,cljs.core.count((function (){var G__20942 = h;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20942) : cljs.core.deref.call(null,G__20942));
})()),cljs.core.constant$keyword$85,((function (h,current){
return (function (e){
return pointslope.remit.events.emit.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$75,(function (){var G__20943 = e.target.value;
return parseInt(G__20943);
})());
});})(h,current))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$78,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$17,"col-md-6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$86,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$17,"btn btn-default",cljs.core.constant$keyword$87,((function (h,current){
return (function (e){
return svg.app.play_history.cljs$core$IFn$_invoke$arity$2((function (){var G__20944 = h;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20944) : cljs.core.deref.call(null,G__20944));
})(),cljs.core.constant$keyword$77);
});})(h,current))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$88,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$17,"glyphicon glyphicon-fast-backward"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$78,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$17,"col-md-6 text-right"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$86,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$17,"btn btn-default",cljs.core.constant$keyword$87,((function (h,current){
return (function (e){
return svg.app.play_history.cljs$core$IFn$_invoke$arity$2((function (){var G__20945 = h;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20945) : cljs.core.deref.call(null,G__20945));
})(),cljs.core.constant$keyword$76);
});})(h,current))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$88,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$17,"glyphicon glyphicon-fast-forward"], null)], null)], null)], null)], null);
});
;})(h,current))
});
svg.app.click_count_component = (function click_count_component(clicks){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$89,"Clicks: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$90,(function (){var G__20947 = clicks;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20947) : cljs.core.deref.call(null,G__20947));
})()], null)], null);
});
svg.app.circle_component = (function circle_component(cx,cy,r,fill,score){
var local_state = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$58,cx,cljs.core.constant$keyword$59,cy], null);
reagent.core.set_state(reagent.core.current_component(),local_state);

return ((function (local_state){
return (function (cx__$1,cy__$1,r__$1,fill__$1,score__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$91,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$92,(function (){var G__20952 = cx__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20952) : cljs.core.deref.call(null,G__20952));
})(),cljs.core.constant$keyword$93,(function (){var G__20953 = cy__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20953) : cljs.core.deref.call(null,G__20953));
})(),cljs.core.constant$keyword$94,(function (){var G__20954 = r__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20954) : cljs.core.deref.call(null,G__20954));
})(),cljs.core.constant$keyword$18,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$61,(function (){var G__20955 = fill__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20955) : cljs.core.deref.call(null,G__20955));
})()], null),cljs.core.constant$keyword$95,((function (local_state){
return (function (e){
return pointslope.remit.events.emit.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$70,score__$1);
});})(local_state))
], null)], null);
});
;})(local_state))
});
svg.app.draggable_circle_component = cljs.core.with_meta(svg.app.circle_component,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$96,(function (this$){
var node = reagent.core.dom_node(this$);
var canvas = node.parentNode;
var x_constraint = ((function (node,canvas){
return (function (p1__20956_SHARP_){
var G__20958 = p1__20956_SHARP_;
var G__20959 = (0);
var G__20960 = canvas.clientWidth;
return goog.math.clamp(G__20958,G__20959,G__20960);
});})(node,canvas))
;
var y_constraint = ((function (node,canvas,x_constraint){
return (function (p1__20957_SHARP_){
var G__20961 = p1__20957_SHARP_;
var G__20962 = (0);
var G__20963 = canvas.clientHeight;
return goog.math.clamp(G__20961,G__20962,G__20963);
});})(node,canvas,x_constraint))
;
var G__20964 = node;
var G__20965 = goog.events.EventType.MOUSEDOWN;
var G__20966 = ((function (G__20964,G__20965,node,canvas,x_constraint,y_constraint){
return (function (e){
var drag = (new goog.fx.Dragger(node));
var local_state = reagent.core.state(this$);
drag.addEventListener(goog.fx.Dragger.EventType.DRAG,((function (drag,local_state,G__20964,G__20965,node,canvas,x_constraint,y_constraint){
return (function (b){
var dx = (function (){var G__20967 = (b.dragger.deltaX / (20));
return (Math.round.cljs$core$IFn$_invoke$arity$1 ? Math.round.cljs$core$IFn$_invoke$arity$1(G__20967) : Math.round.call(null,G__20967));
})();
var dy = (function (){var G__20968 = (b.dragger.deltaY / (20));
return (Math.round.cljs$core$IFn$_invoke$arity$1 ? Math.round.cljs$core$IFn$_invoke$arity$1(G__20968) : Math.round.call(null,G__20968));
})();
var x = x_constraint((dx + (function (){var G__20969 = cljs.core.constant$keyword$58.cljs$core$IFn$_invoke$arity$1(local_state);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20969) : cljs.core.deref.call(null,G__20969));
})()));
var y = y_constraint((dy + (function (){var G__20970 = cljs.core.constant$keyword$59.cljs$core$IFn$_invoke$arity$1(local_state);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20970) : cljs.core.deref.call(null,G__20970));
})()));
return pointslope.remit.events.emit.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$66,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$58,x,cljs.core.constant$keyword$59,y], null));
});})(drag,local_state,G__20964,G__20965,node,canvas,x_constraint,y_constraint))
);

drag.addEventListener(goog.fx.Dragger.EventType.END,((function (drag,local_state,G__20964,G__20965,node,canvas,x_constraint,y_constraint){
return (function (){
return drag.dispose();
});})(drag,local_state,G__20964,G__20965,node,canvas,x_constraint,y_constraint))
);

return drag.startDrag(e);
});})(G__20964,G__20965,node,canvas,x_constraint,y_constraint))
;
return goog.events.listen(G__20964,G__20965,G__20966);
})], null));
svg.app.range_component = (function range_component(v,min,max,title){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$78,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$17,"form-group"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$80,title], null),title,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$90," [ ",(function (){var G__20973 = v;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20973) : cljs.core.deref.call(null,G__20973));
})()," ] "], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$81,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$82,"range",cljs.core.constant$keyword$17,"form-control",cljs.core.constant$keyword$30,title,cljs.core.constant$keyword$38,title,cljs.core.constant$keyword$83,min,cljs.core.constant$keyword$84,max,cljs.core.constant$keyword$73,(function (){var G__20974 = v;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20974) : cljs.core.deref.call(null,G__20974));
})(),cljs.core.constant$keyword$85,(function (e){
return pointslope.remit.events.emit.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$71,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$72,v,cljs.core.constant$keyword$73,e.target.value], null));
})], null)], null)], null);
});
svg.app.select_component = (function select_component(fill){
return (function (fill__$1){
var colors = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, ["gray","red","orange","yellow","green","blue","aqua","indigo","purple","brown","black"], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$78,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$17,"form-group"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$80,"Color"], null),"Color"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$97,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$30,"Color",cljs.core.constant$keyword$17,"form-control",cljs.core.constant$keyword$73,(function (){var G__20982 = fill__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20982) : cljs.core.deref.call(null,G__20982));
})(),cljs.core.constant$keyword$85,((function (colors){
return (function (e){
return pointslope.remit.events.emit.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$68,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$69,e.target.value], null));
});})(colors))
], null),(function (){var iter__4339__auto__ = ((function (colors){
return (function iter__20983(s__20984){
return (new cljs.core.LazySeq(null,((function (colors){
return (function (){
var s__20984__$1 = s__20984;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__20984__$1);
if(temp__4126__auto__){
var s__20984__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20984__$2)){
var c__4337__auto__ = cljs.core.chunk_first(s__20984__$2);
var size__4338__auto__ = cljs.core.count(c__4337__auto__);
var b__20986 = cljs.core.chunk_buffer(size__4338__auto__);
if((function (){var i__20985 = (0);
while(true){
if((i__20985 < size__4338__auto__)){
var c = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4337__auto__,i__20985);
cljs.core.chunk_append(b__20986,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$98,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$73,c,cljs.core.constant$keyword$38,c], null),c], null));

var G__20989 = (i__20985 + (1));
i__20985 = G__20989;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20986),iter__20983(cljs.core.chunk_rest(s__20984__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20986),null);
}
} else {
var c = cljs.core.first(s__20984__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$98,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$73,c,cljs.core.constant$keyword$38,c], null),c], null),iter__20983(cljs.core.rest(s__20984__$2)));
}
} else {
return null;
}
break;
}
});})(colors))
,null,null));
});})(colors))
;
return iter__4339__auto__(colors);
})()], null)], null);
});
});
svg.app.svg_component = (function svg_component(circle){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$99,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$100,"720",cljs.core.constant$keyword$101,"720",cljs.core.constant$keyword$102,"canvas",cljs.core.constant$keyword$18,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$103,"1px solid black"], null)], null),circle], null);
});
svg.app.app_component = (function app_component(){
var x = reagent.core.cursor(svg.app.app_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$58], null));
var y = reagent.core.cursor(svg.app.app_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$59], null));
var radius = reagent.core.cursor(svg.app.app_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$60], null));
var fill = reagent.core.cursor(svg.app.app_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$61], null));
var clicks = reagent.core.cursor(svg.app.app_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$62], null));
var circle = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [svg.app.draggable_circle_component,x,y,radius,fill,clicks], null);
return ((function (x,y,radius,fill,clicks,circle){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$78,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$102,"wrapper"], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$78,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$102,"controls",cljs.core.constant$keyword$17,"col-md-3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [svg.app.click_count_component,clicks], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [svg.app.range_component,x,(0),(720),"CX"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [svg.app.range_component,y,(0),(720),"CY"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [svg.app.range_component,radius,(1),(100),"Size"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [svg.app.select_component,fill], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [svg.app.history_component,svg.app.history], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$78,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$17,"col-md-9"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [svg.app.svg_component,circle], null)], null)], null);
});
;})(x,y,radius,fill,clicks,circle))
});
svg.app.init = (function init(){
var G__20992 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [svg.app.app_component], null);
var G__20993 = document.getElementById("canvas");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__20992,G__20993) : reagent.core.render_component.call(null,G__20992,G__20993));
});
