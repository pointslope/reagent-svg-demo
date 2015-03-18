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
var seq__20743_20753 = cljs.core.seq((function (){var G__20747 = (function (){var G__20748 = svg.app.event_handlers;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20748) : cljs.core.deref.call(null,G__20748));
})();
return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(G__20747) : key.call(null,G__20747));
})());
var chunk__20744_20754 = null;
var count__20745_20755 = (0);
var i__20746_20756 = (0);
while(true){
if((i__20746_20756 < count__20745_20755)){
var handler_20757 = chunk__20744_20754.cljs$core$IIndexed$_nth$arity$2(null,i__20746_20756);
var G__20749_20758 = svg.app.app_db;
var G__20750_20759 = data;
(handler_20757.cljs$core$IFn$_invoke$arity$2 ? handler_20757.cljs$core$IFn$_invoke$arity$2(G__20749_20758,G__20750_20759) : handler_20757.call(null,G__20749_20758,G__20750_20759));

var G__20760 = seq__20743_20753;
var G__20761 = chunk__20744_20754;
var G__20762 = count__20745_20755;
var G__20763 = (i__20746_20756 + (1));
seq__20743_20753 = G__20760;
chunk__20744_20754 = G__20761;
count__20745_20755 = G__20762;
i__20746_20756 = G__20763;
continue;
} else {
var temp__4126__auto___20764 = cljs.core.seq(seq__20743_20753);
if(temp__4126__auto___20764){
var seq__20743_20765__$1 = temp__4126__auto___20764;
if(cljs.core.chunked_seq_QMARK_(seq__20743_20765__$1)){
var c__4370__auto___20766 = cljs.core.chunk_first(seq__20743_20765__$1);
var G__20767 = cljs.core.chunk_rest(seq__20743_20765__$1);
var G__20768 = c__4370__auto___20766;
var G__20769 = cljs.core.count(c__4370__auto___20766);
var G__20770 = (0);
seq__20743_20753 = G__20767;
chunk__20744_20754 = G__20768;
count__20745_20755 = G__20769;
i__20746_20756 = G__20770;
continue;
} else {
var handler_20771 = cljs.core.first(seq__20743_20765__$1);
var G__20751_20772 = svg.app.app_db;
var G__20752_20773 = data;
(handler_20771.cljs$core$IFn$_invoke$arity$2 ? handler_20771.cljs$core$IFn$_invoke$arity$2(G__20751_20772,G__20752_20773) : handler_20771.call(null,G__20751_20772,G__20752_20773));

var G__20774 = cljs.core.next(seq__20743_20765__$1);
var G__20775 = null;
var G__20776 = (0);
var G__20777 = (0);
seq__20743_20753 = G__20774;
chunk__20744_20754 = G__20775;
count__20745_20755 = G__20776;
i__20746_20756 = G__20777;
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
var handlers = cljs.core.vec(cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__20779 = svg.app.event_handlers;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20779) : cljs.core.deref.call(null,G__20779));
})(),key));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(svg.app.event_handlers,cljs.core.assoc,key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(handlers,func));
});
svg.app.listen(cljs.core.constant$keyword$65,(function (db,p__20780){
var vec__20781 = p__20780;
var newX = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20781,(0),null);
var newY = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20781,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.assoc,cljs.core.constant$keyword$56,newX,cljs.core.array_seq([cljs.core.constant$keyword$57,newY], 0));

return svg.app.fire(cljs.core.constant$keyword$66,(function (){var G__20782 = db;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20782) : cljs.core.deref.call(null,G__20782));
})());
}));
svg.app.listen(cljs.core.constant$keyword$67,(function (db,color){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(db,cljs.core.assoc,cljs.core.constant$keyword$59,color);

return svg.app.fire(cljs.core.constant$keyword$66,(function (){var G__20783 = db;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20783) : cljs.core.deref.call(null,G__20783));
})());
}));
svg.app.listen(cljs.core.constant$keyword$68,(function (db,cursor){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cursor,cljs.core.inc);

return svg.app.fire(cljs.core.constant$keyword$66,(function (){var G__20784 = db;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20784) : cljs.core.deref.call(null,G__20784));
})());
}));
svg.app.listen(cljs.core.constant$keyword$69,(function (db,p__20785){
var vec__20786 = p__20785;
var cursor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20786,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20786,(1),null);
var G__20787_20790 = cursor;
var G__20788_20791 = value;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20787_20790,G__20788_20791) : cljs.core.reset_BANG_.call(null,G__20787_20790,G__20788_20791));

return svg.app.fire(cljs.core.constant$keyword$66,(function (){var G__20789 = db;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20789) : cljs.core.deref.call(null,G__20789));
})());
}));
svg.app.listen(cljs.core.constant$keyword$66,(function (db,new_state){
var states = (function (){var G__20792 = reagent.core.cursor(svg.app.history,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$61], null));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20792) : cljs.core.deref.call(null,G__20792));
})();
var counter = (function (){var G__20793 = reagent.core.cursor(svg.app.history,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$70], null));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20793) : cljs.core.deref.call(null,G__20793));
})();
var next_index = (counter + (1));
var G__20794 = svg.app.history;
var G__20795 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$61,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(states,new_state),cljs.core.constant$keyword$70,next_index,cljs.core.constant$keyword$62,next_index], null);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20794,G__20795) : cljs.core.reset_BANG_.call(null,G__20794,G__20795));
}));
svg.app.listen(cljs.core.constant$keyword$71,(function (db,index){
var states = reagent.core.cursor(svg.app.history,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$61], null));
var current = reagent.core.cursor(svg.app.history,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$62], null));
var temp__4126__auto___20801 = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__20796 = states;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20796) : cljs.core.deref.call(null,G__20796));
})(),index);
if(cljs.core.truth_(temp__4126__auto___20801)){
var chosen_20802 = temp__4126__auto___20801;
var G__20797_20803 = current;
var G__20798_20804 = index;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20797_20803,G__20798_20804) : cljs.core.reset_BANG_.call(null,G__20797_20803,G__20798_20804));

var G__20799_20805 = db;
var G__20800_20806 = chosen_20802;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20799_20805,G__20800_20806) : cljs.core.reset_BANG_.call(null,G__20799_20805,G__20800_20806));
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
var indices_chan = cljs.core.async.to_chan((function (){var G__20843 = history;
var G__20843__$1 = cljs.core.count(G__20843)
;
var G__20843__$2 = (G__20843__$1 + (1))
;
var G__20843__$3 = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),G__20843__$2)
;
var G__20843__$4 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$73,dir))?cljs.core.reverse(G__20843__$3):G__20843__$3);
return G__20843__$4;
})());
var c__11420__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11420__auto__,indices_chan){
return (function (){
var f__11421__auto__ = (function (){var switch__11340__auto__ = ((function (c__11420__auto__,indices_chan){
return (function (state_20859){
var state_val_20860 = (state_20859[(1)]);
if((state_val_20860 === (8))){
var inst_20851 = (state_20859[(2)]);
var state_20859__$1 = (function (){var statearr_20861 = state_20859;
(statearr_20861[(7)] = inst_20851);

return statearr_20861;
})();
var statearr_20862_20877 = state_20859__$1;
(statearr_20862_20877[(2)] = null);

(statearr_20862_20877[(1)] = (2));


return cljs.core.constant$keyword$40;
} else {
if((state_val_20860 === (7))){
var inst_20855 = (state_20859[(2)]);
var state_20859__$1 = state_20859;
var statearr_20863_20878 = state_20859__$1;
(statearr_20863_20878[(2)] = inst_20855);

(statearr_20863_20878[(1)] = (3));


return cljs.core.constant$keyword$40;
} else {
if((state_val_20860 === (6))){
var state_20859__$1 = state_20859;
var statearr_20864_20879 = state_20859__$1;
(statearr_20864_20879[(2)] = null);

(statearr_20864_20879[(1)] = (7));


return cljs.core.constant$keyword$40;
} else {
if((state_val_20860 === (5))){
var inst_20846 = (state_20859[(8)]);
var inst_20848 = svg.app.fire(cljs.core.constant$keyword$71,inst_20846);
var inst_20849 = cljs.core.async.timeout((30));
var state_20859__$1 = (function (){var statearr_20865 = state_20859;
(statearr_20865[(9)] = inst_20848);

return statearr_20865;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20859__$1,(8),inst_20849);
} else {
if((state_val_20860 === (4))){
var inst_20846 = (state_20859[(8)]);
var inst_20846__$1 = (state_20859[(2)]);
var state_20859__$1 = (function (){var statearr_20866 = state_20859;
(statearr_20866[(8)] = inst_20846__$1);

return statearr_20866;
})();
if(cljs.core.truth_(inst_20846__$1)){
var statearr_20867_20880 = state_20859__$1;
(statearr_20867_20880[(1)] = (5));

} else {
var statearr_20868_20881 = state_20859__$1;
(statearr_20868_20881[(1)] = (6));

}

return cljs.core.constant$keyword$40;
} else {
if((state_val_20860 === (3))){
var inst_20857 = (state_20859[(2)]);
var state_20859__$1 = state_20859;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20859__$1,inst_20857);
} else {
if((state_val_20860 === (2))){
var state_20859__$1 = state_20859;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20859__$1,(4),indices_chan);
} else {
if((state_val_20860 === (1))){
var state_20859__$1 = state_20859;
var statearr_20869_20882 = state_20859__$1;
(statearr_20869_20882[(2)] = null);

(statearr_20869_20882[(1)] = (2));


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
var statearr_20873 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20873[(0)] = state_machine__11341__auto__);

(statearr_20873[(1)] = (1));

return statearr_20873;
});
var state_machine__11341__auto____1 = (function (state_20859){
while(true){
var ret_value__11342__auto__ = (function (){try{while(true){
var result__11343__auto__ = switch__11340__auto__(state_20859);
if(cljs.core.keyword_identical_QMARK_(result__11343__auto__,cljs.core.constant$keyword$40)){
continue;
} else {
return result__11343__auto__;
}
break;
}
}catch (e20874){if((e20874 instanceof Object)){
var ex__11344__auto__ = e20874;
var statearr_20875_20883 = state_20859;
(statearr_20875_20883[(5)] = ex__11344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20859);

return cljs.core.constant$keyword$40;
} else {
throw e20874;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11342__auto__,cljs.core.constant$keyword$40)){
var G__20884 = state_20859;
state_20859 = G__20884;
continue;
} else {
return ret_value__11342__auto__;
}
break;
}
});
state_machine__11341__auto__ = function(state_20859){
switch(arguments.length){
case 0:
return state_machine__11341__auto____0.call(this);
case 1:
return state_machine__11341__auto____1.call(this,state_20859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11341__auto____0;
state_machine__11341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11341__auto____1;
return state_machine__11341__auto__;
})()
;})(switch__11340__auto__,c__11420__auto__,indices_chan))
})();
var state__11422__auto__ = (function (){var statearr_20876 = (function (){return (f__11421__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11421__auto__.cljs$core$IFn$_invoke$arity$0() : f__11421__auto__.call(null));
})();
(statearr_20876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11420__auto__);

return statearr_20876;
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
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$74,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$17,"wrapper row"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$74,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$17,"form-group col-md-12"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$75,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$76,"history"], null),[cljs.core.str("History "),cljs.core.str((function (){var G__20891 = current;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20891) : cljs.core.deref.call(null,G__20891));
})())].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$77,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$78,"range",cljs.core.constant$keyword$17,"form-control",cljs.core.constant$keyword$30,"history",cljs.core.constant$keyword$79,(function (){var G__20892 = current;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20892) : cljs.core.deref.call(null,G__20892));
})(),cljs.core.constant$keyword$80,(0),cljs.core.constant$keyword$81,cljs.core.count((function (){var G__20893 = h;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20893) : cljs.core.deref.call(null,G__20893));
})()),cljs.core.constant$keyword$82,((function (h,current){
return (function (e){
return svg.app.fire(cljs.core.constant$keyword$71,(function (){var G__20894 = e.target.value;
return parseInt(G__20894);
})());
});})(h,current))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$74,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$17,"col-md-6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$83,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$17,"btn btn-default",cljs.core.constant$keyword$84,((function (h,current){
return (function (e){
return svg.app.play_history.cljs$core$IFn$_invoke$arity$2((function (){var G__20895 = h;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20895) : cljs.core.deref.call(null,G__20895));
})(),cljs.core.constant$keyword$73);
});})(h,current))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$85,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$17,"glyphicon glyphicon-fast-backward"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$74,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$17,"col-md-6 text-right"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$83,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$17,"btn btn-default",cljs.core.constant$keyword$84,((function (h,current){
return (function (e){
return svg.app.play_history.cljs$core$IFn$_invoke$arity$2((function (){var G__20896 = h;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20896) : cljs.core.deref.call(null,G__20896));
})(),cljs.core.constant$keyword$72);
});})(h,current))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$85,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$17,"glyphicon glyphicon-fast-forward"], null)], null)], null)], null)], null);
});
;})(h,current))
});
svg.app.click_count_component = (function click_count_component(clicks){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$86,"Clicks: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$87,(function (){var G__20898 = clicks;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20898) : cljs.core.deref.call(null,G__20898));
})()], null)], null);
});
svg.app.circle_component = (function circle_component(cx,cy,r,fill,score){
var local_state = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$56,cx,cljs.core.constant$keyword$57,cy], null);
reagent.core.set_state(reagent.core.current_component(),local_state);

return ((function (local_state){
return (function (cx__$1,cy__$1,r__$1,fill__$1,score__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$88,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$89,(function (){var G__20903 = cx__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20903) : cljs.core.deref.call(null,G__20903));
})(),cljs.core.constant$keyword$90,(function (){var G__20904 = cy__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20904) : cljs.core.deref.call(null,G__20904));
})(),cljs.core.constant$keyword$91,(function (){var G__20905 = r__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20905) : cljs.core.deref.call(null,G__20905));
})(),cljs.core.constant$keyword$18,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$59,(function (){var G__20906 = fill__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20906) : cljs.core.deref.call(null,G__20906));
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
var x_constraint = ((function (node,canvas){
return (function (p1__20907_SHARP_){
var G__20909 = p1__20907_SHARP_;
var G__20910 = (0);
var G__20911 = canvas.clientWidth;
return goog.math.clamp(G__20909,G__20910,G__20911);
});})(node,canvas))
;
var y_constraint = ((function (node,canvas,x_constraint){
return (function (p1__20908_SHARP_){
var G__20912 = p1__20908_SHARP_;
var G__20913 = (0);
var G__20914 = canvas.clientHeight;
return goog.math.clamp(G__20912,G__20913,G__20914);
});})(node,canvas,x_constraint))
;
var G__20915 = node;
var G__20916 = goog.events.EventType.MOUSEDOWN;
var G__20917 = ((function (G__20915,G__20916,node,canvas,x_constraint,y_constraint){
return (function (e){
var drag = (new goog.fx.Dragger(node));
var local_state = reagent.core.state(this$);
drag.addEventListener(goog.fx.Dragger.EventType.DRAG,((function (drag,local_state,G__20915,G__20916,node,canvas,x_constraint,y_constraint){
return (function (b){
var dx = b.dragger.deltaX;
var dy = b.dragger.deltaY;
var x = x_constraint((dx + (function (){var G__20918 = cljs.core.constant$keyword$56.cljs$core$IFn$_invoke$arity$1(local_state);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20918) : cljs.core.deref.call(null,G__20918));
})()));
var y = y_constraint((dy + (function (){var G__20919 = cljs.core.constant$keyword$57.cljs$core$IFn$_invoke$arity$1(local_state);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20919) : cljs.core.deref.call(null,G__20919));
})()));
return svg.app.fire(cljs.core.constant$keyword$65,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(drag,local_state,G__20915,G__20916,node,canvas,x_constraint,y_constraint))
);

drag.addEventListener(goog.fx.Dragger.EventType.END,((function (drag,local_state,G__20915,G__20916,node,canvas,x_constraint,y_constraint){
return (function (){
return drag.dispose();
});})(drag,local_state,G__20915,G__20916,node,canvas,x_constraint,y_constraint))
);

return drag.startDrag(e);
});})(G__20915,G__20916,node,canvas,x_constraint,y_constraint))
;
return goog.events.listen(G__20915,G__20916,G__20917);
})], null));
svg.app.range_component = (function range_component(v,min,max,title){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$74,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$17,"form-group"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$75,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$76,title], null),title,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$87," [ ",(function (){var G__20922 = v;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20922) : cljs.core.deref.call(null,G__20922));
})()," ] "], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$77,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$78,"range",cljs.core.constant$keyword$17,"form-control",cljs.core.constant$keyword$30,title,cljs.core.constant$keyword$38,title,cljs.core.constant$keyword$80,min,cljs.core.constant$keyword$81,max,cljs.core.constant$keyword$79,(function (){var G__20923 = v;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20923) : cljs.core.deref.call(null,G__20923));
})(),cljs.core.constant$keyword$82,(function (e){
return svg.app.fire(cljs.core.constant$keyword$69,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,e.target.value], null));
})], null)], null)], null);
});
svg.app.select_component = (function select_component(fill){
return (function (fill__$1){
var colors = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, ["gray","red","orange","yellow","green","blue","aqua","indigo","purple","brown","black"], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$74,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$17,"form-group"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$75,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$76,"Color"], null),"Color"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$94,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$30,"Color",cljs.core.constant$keyword$17,"form-control",cljs.core.constant$keyword$79,(function (){var G__20931 = fill__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20931) : cljs.core.deref.call(null,G__20931));
})(),cljs.core.constant$keyword$82,((function (colors){
return (function (e){
return svg.app.fire(cljs.core.constant$keyword$67,e.target.value);
});})(colors))
], null),(function (){var iter__4339__auto__ = ((function (colors){
return (function iter__20932(s__20933){
return (new cljs.core.LazySeq(null,((function (colors){
return (function (){
var s__20933__$1 = s__20933;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__20933__$1);
if(temp__4126__auto__){
var s__20933__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20933__$2)){
var c__4337__auto__ = cljs.core.chunk_first(s__20933__$2);
var size__4338__auto__ = cljs.core.count(c__4337__auto__);
var b__20935 = cljs.core.chunk_buffer(size__4338__auto__);
if((function (){var i__20934 = (0);
while(true){
if((i__20934 < size__4338__auto__)){
var c = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4337__auto__,i__20934);
cljs.core.chunk_append(b__20935,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$95,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$79,c,cljs.core.constant$keyword$38,c], null),c], null));

var G__20938 = (i__20934 + (1));
i__20934 = G__20938;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20935),iter__20932(cljs.core.chunk_rest(s__20933__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20935),null);
}
} else {
var c = cljs.core.first(s__20933__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$95,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$79,c,cljs.core.constant$keyword$38,c], null),c], null),iter__20932(cljs.core.rest(s__20933__$2)));
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$74,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$99,"wrapper"], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$74,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$99,"controls",cljs.core.constant$keyword$17,"col-md-3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [svg.app.click_count_component,clicks], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [svg.app.range_component,x,(0),(720),"CX"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [svg.app.range_component,y,(0),(720),"CY"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [svg.app.range_component,radius,(1),(100),"Size"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [svg.app.select_component,fill], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [svg.app.history_component,svg.app.history], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$74,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$17,"col-md-9"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [svg.app.svg_component,circle], null)], null)], null);
});
;})(x,y,radius,fill,clicks,circle))
});
svg.app.init = (function init(){
var G__20941 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [svg.app.app_component], null);
var G__20942 = document.getElementById("canvas");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__20941,G__20942) : reagent.core.render_component.call(null,G__20941,G__20942));
});
