// Compiled by ClojureScript 0.0-2816 {:elide-asserts true, :static-fns true}
goog.provide('svg.app');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.fx');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('goog.events.EventType');
goog.require('goog.fx.Dragger.EventType');
goog.require('goog.string.format');
goog.require('goog.math');
goog.require('goog.events');
if(typeof svg.app.app_db !== 'undefined'){
} else {
svg.app.app_db = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$56,(360),cljs.core.constant$keyword$57,(360),cljs.core.constant$keyword$58,(50),cljs.core.constant$keyword$59,"black",cljs.core.constant$keyword$60,(0)], null));
}
if(typeof svg.app.history !== 'undefined'){
} else {
svg.app.history = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$61,cljs.core.PersistentVector.EMPTY,cljs.core.constant$keyword$62,(0)], null));
}
if(typeof svg.app.event_handlers !== 'undefined'){
} else {
svg.app.event_handlers = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
/**
* Call all handlers for an event passing in the app-db
*/
svg.app.fire = (function fire(key,data){
var seq__20737_20747 = cljs.core.seq((function (){var G__20741 = (function (){var G__20742 = svg.app.event_handlers;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20742) : cljs.core.deref.call(null,G__20742));
})();
return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(G__20741) : key.call(null,G__20741));
})());
var chunk__20738_20748 = null;
var count__20739_20749 = (0);
var i__20740_20750 = (0);
while(true){
if((i__20740_20750 < count__20739_20749)){
var handler_20751 = chunk__20738_20748.cljs$core$IIndexed$_nth$arity$2(null,i__20740_20750);
var G__20743_20752 = svg.app.app_db;
var G__20744_20753 = data;
(handler_20751.cljs$core$IFn$_invoke$arity$2 ? handler_20751.cljs$core$IFn$_invoke$arity$2(G__20743_20752,G__20744_20753) : handler_20751.call(null,G__20743_20752,G__20744_20753));

var G__20754 = seq__20737_20747;
var G__20755 = chunk__20738_20748;
var G__20756 = count__20739_20749;
var G__20757 = (i__20740_20750 + (1));
seq__20737_20747 = G__20754;
chunk__20738_20748 = G__20755;
count__20739_20749 = G__20756;
i__20740_20750 = G__20757;
continue;
} else {
var temp__4126__auto___20758 = cljs.core.seq(seq__20737_20747);
if(temp__4126__auto___20758){
var seq__20737_20759__$1 = temp__4126__auto___20758;
if(cljs.core.chunked_seq_QMARK_(seq__20737_20759__$1)){
var c__4370__auto___20760 = cljs.core.chunk_first(seq__20737_20759__$1);
var G__20761 = cljs.core.chunk_rest(seq__20737_20759__$1);
var G__20762 = c__4370__auto___20760;
var G__20763 = cljs.core.count(c__4370__auto___20760);
var G__20764 = (0);
seq__20737_20747 = G__20761;
chunk__20738_20748 = G__20762;
count__20739_20749 = G__20763;
i__20740_20750 = G__20764;
continue;
} else {
var handler_20765 = cljs.core.first(seq__20737_20759__$1);
var G__20745_20766 = svg.app.app_db;
var G__20746_20767 = data;
(handler_20765.cljs$core$IFn$_invoke$arity$2 ? handler_20765.cljs$core$IFn$_invoke$arity$2(G__20745_20766,G__20746_20767) : handler_20765.call(null,G__20745_20766,G__20746_20767));

var G__20768 = cljs.core.next(seq__20737_20759__$1);
var G__20769 = null;
var G__20770 = (0);
var G__20771 = (0);
seq__20737_20747 = G__20768;
chunk__20738_20748 = G__20769;
count__20739_20749 = G__20770;
i__20740_20750 = G__20771;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$63,key,cljs.core.constant$keyword$64,data], null);
});
/**
* Register a function to listen for an event
*/
svg.app.listen = (function listen(key,func){
var handlers = cljs.core.vec(cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__20773 = svg.app.event_handlers;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20773) : cljs.core.deref.call(null,G__20773));
})(),key));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(svg.app.event_handlers,cljs.core.assoc,key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(handlers,func));
});
/**
* Creates a function that keeps a supplied number within the set bounds
*/
svg.app.make_constraint = (function make_constraint(minimum,maximum){
return (function (num){
var local_max = (((num <= maximum))?num:maximum);
if((minimum <= local_max)){
return local_max;
} else {
return minimum;
}
});
});
svg.app.listen(cljs.core.constant$keyword$65,(function (db,p__20774){
var vec__20775 = p__20774;
var newX = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20775,(0),null);
var newY = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20775,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.assoc,cljs.core.constant$keyword$56,newX,cljs.core.array_seq([cljs.core.constant$keyword$57,newY], 0));

return svg.app.fire(cljs.core.constant$keyword$66,(function (){var G__20776 = db;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20776) : cljs.core.deref.call(null,G__20776));
})());
}));
svg.app.listen(cljs.core.constant$keyword$67,(function (db,color){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(db,cljs.core.assoc,cljs.core.constant$keyword$59,color);

return svg.app.fire(cljs.core.constant$keyword$66,(function (){var G__20777 = db;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20777) : cljs.core.deref.call(null,G__20777));
})());
}));
svg.app.listen(cljs.core.constant$keyword$68,(function (db,cursor){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cursor,cljs.core.inc);

return svg.app.fire(cljs.core.constant$keyword$66,(function (){var G__20778 = db;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20778) : cljs.core.deref.call(null,G__20778));
})());
}));
svg.app.listen(cljs.core.constant$keyword$69,(function (db,p__20779){
var vec__20780 = p__20779;
var cursor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20780,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20780,(1),null);
var G__20781_20784 = cursor;
var G__20782_20785 = value;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20781_20784,G__20782_20785) : cljs.core.reset_BANG_.call(null,G__20781_20784,G__20782_20785));

return svg.app.fire(cljs.core.constant$keyword$66,(function (){var G__20783 = db;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20783) : cljs.core.deref.call(null,G__20783));
})());
}));
svg.app.listen(cljs.core.constant$keyword$66,(function (db,new_state){
var states = (function (){var G__20786 = reagent.core.cursor(svg.app.history,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$61], null));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20786) : cljs.core.deref.call(null,G__20786));
})();
var counter = (function (){var G__20787 = reagent.core.cursor(svg.app.history,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$70], null));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20787) : cljs.core.deref.call(null,G__20787));
})();
var next_index = (counter + (1));
var G__20788 = svg.app.history;
var G__20789 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$61,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(states,new_state),cljs.core.constant$keyword$70,next_index,cljs.core.constant$keyword$62,next_index], null);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20788,G__20789) : cljs.core.reset_BANG_.call(null,G__20788,G__20789));
}));
svg.app.listen(cljs.core.constant$keyword$71,(function (db,index){
var states = reagent.core.cursor(svg.app.history,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$61], null));
var current = reagent.core.cursor(svg.app.history,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$62], null));
var temp__4126__auto___20795 = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__20790 = states;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20790) : cljs.core.deref.call(null,G__20790));
})(),index);
if(cljs.core.truth_(temp__4126__auto___20795)){
var chosen_20796 = temp__4126__auto___20795;
var G__20791_20797 = current;
var G__20792_20798 = index;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20791_20797,G__20792_20798) : cljs.core.reset_BANG_.call(null,G__20791_20797,G__20792_20798));

var G__20793_20799 = db;
var G__20794_20800 = chosen_20796;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20793_20799,G__20794_20800) : cljs.core.reset_BANG_.call(null,G__20793_20799,G__20794_20800));
} else {
}

return true;
}));
/**
* Steps through history in an optionally specified dir.
* Default id :forward
*/
svg.app.play_history = (function() {
var play_history = null;
var play_history__1 = (function (history){
return play_history.cljs$core$IFn$_invoke$arity$2(history,cljs.core.constant$keyword$72);
});
var play_history__2 = (function (history,dir){
var indices_chan = cljs.core.async.to_chan((function (){var G__20837 = history;
var G__20837__$1 = cljs.core.count(G__20837)
;
var G__20837__$2 = (G__20837__$1 + (1))
;
var G__20837__$3 = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),G__20837__$2)
;
var G__20837__$4 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$73,dir))?cljs.core.reverse(G__20837__$3):G__20837__$3);
return G__20837__$4;
})());
var c__11420__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11420__auto__,indices_chan){
return (function (){
var f__11421__auto__ = (function (){var switch__11340__auto__ = ((function (c__11420__auto__,indices_chan){
return (function (state_20853){
var state_val_20854 = (state_20853[(1)]);
if((state_val_20854 === (8))){
var inst_20845 = (state_20853[(2)]);
var state_20853__$1 = (function (){var statearr_20855 = state_20853;
(statearr_20855[(7)] = inst_20845);

return statearr_20855;
})();
var statearr_20856_20871 = state_20853__$1;
(statearr_20856_20871[(2)] = null);

(statearr_20856_20871[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_20854 === (7))){
var inst_20849 = (state_20853[(2)]);
var state_20853__$1 = state_20853;
var statearr_20857_20872 = state_20853__$1;
(statearr_20857_20872[(2)] = inst_20849);

(statearr_20857_20872[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_20854 === (6))){
var state_20853__$1 = state_20853;
var statearr_20858_20873 = state_20853__$1;
(statearr_20858_20873[(2)] = null);

(statearr_20858_20873[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_20854 === (5))){
var inst_20840 = (state_20853[(8)]);
var inst_20842 = svg.app.fire(cljs.core.constant$keyword$71,inst_20840);
var inst_20843 = cljs.core.async.timeout((30));
var state_20853__$1 = (function (){var statearr_20859 = state_20853;
(statearr_20859[(9)] = inst_20842);

return statearr_20859;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20853__$1,(8),inst_20843);
} else {
if((state_val_20854 === (4))){
var inst_20840 = (state_20853[(8)]);
var inst_20840__$1 = (state_20853[(2)]);
var state_20853__$1 = (function (){var statearr_20860 = state_20853;
(statearr_20860[(8)] = inst_20840__$1);

return statearr_20860;
})();
if(cljs.core.truth_(inst_20840__$1)){
var statearr_20861_20874 = state_20853__$1;
(statearr_20861_20874[(1)] = (5));

} else {
var statearr_20862_20875 = state_20853__$1;
(statearr_20862_20875[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_20854 === (3))){
var inst_20851 = (state_20853[(2)]);
var state_20853__$1 = state_20853;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20853__$1,inst_20851);
} else {
if((state_val_20854 === (2))){
var state_20853__$1 = state_20853;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20853__$1,(4),indices_chan);
} else {
if((state_val_20854 === (1))){
var state_20853__$1 = state_20853;
var statearr_20863_20876 = state_20853__$1;
(statearr_20863_20876[(2)] = null);

(statearr_20863_20876[(1)] = (2));


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
});})(c__11420__auto__,indices_chan))
;
return ((function (switch__11340__auto__,c__11420__auto__,indices_chan){
return (function() {
var state_machine__11341__auto__ = null;
var state_machine__11341__auto____0 = (function (){
var statearr_20867 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20867[(0)] = state_machine__11341__auto__);

(statearr_20867[(1)] = (1));

return statearr_20867;
});
var state_machine__11341__auto____1 = (function (state_20853){
while(true){
var ret_value__11342__auto__ = (function (){try{while(true){
var result__11343__auto__ = switch__11340__auto__(state_20853);
if(cljs.core.keyword_identical_QMARK_(result__11343__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11343__auto__;
}
break;
}
}catch (e20868){if((e20868 instanceof Object)){
var ex__11344__auto__ = e20868;
var statearr_20869_20877 = state_20853;
(statearr_20869_20877[(5)] = ex__11344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20853);

return cljs.core.constant$keyword$40;
} else {
throw e20868;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11342__auto__,cljs.core.constant$keyword$40)){
var G__20878 = state_20853;
state_20853 = G__20878;
continue;
} else {
return ret_value__11342__auto__;
}
break;
}
});
state_machine__11341__auto__ = function(state_20853){
switch(arguments.length){
case 0:
return state_machine__11341__auto____0.call(this);
case 1:
return state_machine__11341__auto____1.call(this,state_20853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11341__auto____0;
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11341__auto____1;
return state_machine__11341__auto__;
})()
;})(switch__11340__auto__,c__11420__auto__,indices_chan))
})();
var state__11422__auto__ = (function (){var statearr_20870 = (function (){return (f__11421__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11421__auto__.cljs$core$IFn$_invoke$arity$0() : f__11421__auto__.call(null));
})();
(statearr_20870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11420__auto__);

return statearr_20870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11422__auto__);
});})(c__11420__auto__,indices_chan))
);

return c__11420__auto__;
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
var h = reagent.core.cursor(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$61], null));
var current = reagent.core.cursor(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$62], null));
return ((function (h,current){
return (function (db__$1){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$74,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$17,"wrapper"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$75,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$17,"btn btn-default",cljs.core.constant$keyword$76,((function (h,current){
return (function (e){
return svg.app.play_history.cljs$core$IFn$_invoke$arity$2((function (){var G__20885 = h;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20885) : cljs.core.deref.call(null,G__20885));
})(),cljs.core.constant$keyword$73);
});})(h,current))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$77,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$17,"glyphicon glyphicon-fast-backward"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$75,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$17,"btn btn-default",cljs.core.constant$keyword$76,((function (h,current){
return (function (e){
return svg.app.play_history.cljs$core$IFn$_invoke$arity$2((function (){var G__20886 = h;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20886) : cljs.core.deref.call(null,G__20886));
})(),cljs.core.constant$keyword$72);
});})(h,current))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$77,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$17,"glyphicon glyphicon-fast-forward"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$74,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$17,"form-group"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$78,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$79,"history"], null),[cljs.core.str("History "),cljs.core.str((function (){var G__20887 = current;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20887) : cljs.core.deref.call(null,G__20887));
})())].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$80,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$81,"range",cljs.core.constant$keyword$17,"form-control",cljs.core.constant$keyword$30,"history",cljs.core.constant$keyword$82,(function (){var G__20888 = current;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20888) : cljs.core.deref.call(null,G__20888));
})(),cljs.core.constant$keyword$83,(0),cljs.core.constant$keyword$84,cljs.core.count((function (){var G__20889 = h;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20889) : cljs.core.deref.call(null,G__20889));
})()),cljs.core.constant$keyword$85,((function (h,current){
return (function (e){
return svg.app.fire(cljs.core.constant$keyword$71,(function (){var G__20890 = e.target.value;
return parseInt(G__20890);
})());
});})(h,current))
], null)], null)], null)], null);
});
;})(h,current))
});
svg.app.click_count_component = (function click_count_component(clicks){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$86,"Clicks: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$87,(function (){var G__20892 = clicks;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20892) : cljs.core.deref.call(null,G__20892));
})()], null)], null);
});
svg.app.circle_component = (function circle_component(cx,cy,r,fill,score){
var local_state = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$56,cx,cljs.core.constant$keyword$57,cy], null);
reagent.core.set_state(reagent.core.current_component(),local_state);

return ((function (local_state){
return (function (cx__$1,cy__$1,r__$1,fill__$1,score__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$88,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$89,(function (){var G__20897 = cx__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20897) : cljs.core.deref.call(null,G__20897));
})(),cljs.core.constant$keyword$90,(function (){var G__20898 = cy__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20898) : cljs.core.deref.call(null,G__20898));
})(),cljs.core.constant$keyword$91,(function (){var G__20899 = r__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20899) : cljs.core.deref.call(null,G__20899));
})(),cljs.core.constant$keyword$18,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$59,(function (){var G__20900 = fill__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20900) : cljs.core.deref.call(null,G__20900));
})()], null),cljs.core.constant$keyword$92,((function (local_state){
return (function (e){
return svg.app.fire(cljs.core.constant$keyword$68,score__$1);
});})(local_state))
], null)], null);
});
;})(local_state))
});
svg.app.draggable_circle_component = cljs.core.with_meta(svg.app.circle_component,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$93,(function (this$){
var node = reagent.core.dom_node(this$);
var canvas = node.parentNode;
var x_constraint = svg.app.make_constraint((0),canvas.clientWidth);
var y_constraint = svg.app.make_constraint((0),canvas.clientHeight);
var G__20901 = node;
var G__20902 = goog.events.EventType.MOUSEDOWN;
var G__20903 = ((function (G__20901,G__20902,node,canvas,x_constraint,y_constraint){
return (function (e){
var drag = (new goog.fx.Dragger(node));
var local_state = reagent.core.state(this$);
drag.addEventListener(goog.fx.Dragger.EventType.DRAG,((function (drag,local_state,G__20901,G__20902,node,canvas,x_constraint,y_constraint){
return (function (b){
var dx = b.dragger.deltaX;
var dy = b.dragger.deltaY;
var x = (function (){var G__20904 = (dx + (function (){var G__20905 = cljs.core.constant$keyword$56.cljs$core$IFn$_invoke$arity$1(local_state);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20905) : cljs.core.deref.call(null,G__20905));
})());
return (x_constraint.cljs$core$IFn$_invoke$arity$1 ? x_constraint.cljs$core$IFn$_invoke$arity$1(G__20904) : x_constraint.call(null,G__20904));
})();
var y = (function (){var G__20906 = (dy + (function (){var G__20907 = cljs.core.constant$keyword$57.cljs$core$IFn$_invoke$arity$1(local_state);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20907) : cljs.core.deref.call(null,G__20907));
})());
return (y_constraint.cljs$core$IFn$_invoke$arity$1 ? y_constraint.cljs$core$IFn$_invoke$arity$1(G__20906) : y_constraint.call(null,G__20906));
})();
return svg.app.fire(cljs.core.constant$keyword$65,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(drag,local_state,G__20901,G__20902,node,canvas,x_constraint,y_constraint))
);

drag.addEventListener(goog.fx.Dragger.EventType.END,((function (drag,local_state,G__20901,G__20902,node,canvas,x_constraint,y_constraint){
return (function (){
return drag.dispose();
});})(drag,local_state,G__20901,G__20902,node,canvas,x_constraint,y_constraint))
);

return drag.startDrag(e);
});})(G__20901,G__20902,node,canvas,x_constraint,y_constraint))
;
return goog.events.listen(G__20901,G__20902,G__20903);
})], null));
svg.app.range_component = (function range_component(v,min,max,title){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$74,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$17,"form-group"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$78,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$79,title], null),title,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$87," [ ",(function (){var G__20910 = v;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20910) : cljs.core.deref.call(null,G__20910));
})()," ] "], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$80,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$81,"range",cljs.core.constant$keyword$17,"form-control",cljs.core.constant$keyword$30,title,cljs.core.constant$keyword$38,title,cljs.core.constant$keyword$83,min,cljs.core.constant$keyword$84,max,cljs.core.constant$keyword$82,(function (){var G__20911 = v;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20911) : cljs.core.deref.call(null,G__20911));
})(),cljs.core.constant$keyword$85,(function (e){
return svg.app.fire(cljs.core.constant$keyword$69,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,e.target.value], null));
})], null)], null)], null);
});
svg.app.select_component = (function select_component(fill){
return (function (fill__$1){
var colors = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, ["gray","red","orange","yellow","green","blue","aqua","indigo","purple","brown","black"], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$74,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$17,"form-group"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$78,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$79,"Color"], null),"Color"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$94,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$30,"Color",cljs.core.constant$keyword$17,"form-control",cljs.core.constant$keyword$82,(function (){var G__20919 = fill__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20919) : cljs.core.deref.call(null,G__20919));
})(),cljs.core.constant$keyword$85,((function (colors){
return (function (e){
return svg.app.fire(cljs.core.constant$keyword$67,e.target.value);
});})(colors))
], null),(function (){var iter__4339__auto__ = ((function (colors){
return (function iter__20920(s__20921){
return (new cljs.core.LazySeq(null,((function (colors){
return (function (){
var s__20921__$1 = s__20921;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__20921__$1);
if(temp__4126__auto__){
var s__20921__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20921__$2)){
var c__4337__auto__ = cljs.core.chunk_first(s__20921__$2);
var size__4338__auto__ = cljs.core.count(c__4337__auto__);
var b__20923 = cljs.core.chunk_buffer(size__4338__auto__);
if((function (){var i__20922 = (0);
while(true){
if((i__20922 < size__4338__auto__)){
var c = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4337__auto__,i__20922);
cljs.core.chunk_append(b__20923,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$95,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$82,c,cljs.core.constant$keyword$38,c], null),c], null));

var G__20926 = (i__20922 + (1));
i__20922 = G__20926;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20923),iter__20920(cljs.core.chunk_rest(s__20921__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20923),null);
}
} else {
var c = cljs.core.first(s__20921__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$95,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$82,c,cljs.core.constant$keyword$38,c], null),c], null),iter__20920(cljs.core.rest(s__20921__$2)));
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$96,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$97,"720",cljs.core.constant$keyword$98,"720",cljs.core.constant$keyword$99,"canvas",cljs.core.constant$keyword$18,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$100,"1px solid black"], null)], null),circle], null);
});
svg.app.app_component = (function app_component(){
var x = reagent.core.cursor(svg.app.app_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$56], null));
var y = reagent.core.cursor(svg.app.app_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$57], null));
var radius = reagent.core.cursor(svg.app.app_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$58], null));
var fill = reagent.core.cursor(svg.app.app_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$59], null));
var clicks = reagent.core.cursor(svg.app.app_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$60], null));
var circle = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [svg.app.draggable_circle_component,x,y,radius,fill,clicks], null);
return ((function (x,y,radius,fill,clicks,circle){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$74,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$99,"wrapper"], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$74,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$99,"controls",cljs.core.constant$keyword$17,"col-md-3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [svg.app.history_component,svg.app.history], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [svg.app.click_count_component,clicks], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [svg.app.range_component,x,(0),(720),"CX"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [svg.app.range_component,y,(0),(720),"CY"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [svg.app.range_component,radius,(1),(100),"Size"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [svg.app.select_component,fill], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$74,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$17,"col-md-9"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [svg.app.svg_component,circle], null)], null)], null);
});
;})(x,y,radius,fill,clicks,circle))
});
svg.app.init = (function init(){
var G__20929 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [svg.app.app_component], null);
var G__20930 = document.getElementById("canvas");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__20929,G__20930) : reagent.core.render_component.call(null,G__20929,G__20930));
});
