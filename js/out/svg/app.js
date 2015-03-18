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
svg.app.app_db = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$62,(360),cljs.core.constant$keyword$63,(360),cljs.core.constant$keyword$64,(50),cljs.core.constant$keyword$65,"black",cljs.core.constant$keyword$66,(0)], null));
}
if(typeof svg.app.history !== 'undefined'){
} else {
svg.app.history = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$67,cljs.core.PersistentVector.EMPTY,cljs.core.constant$keyword$68,(0)], null));
}
if(typeof svg.app.event_handlers !== 'undefined'){
} else {
svg.app.event_handlers = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
/**
* Call all handlers for an event passing in the app-db
*/
svg.app.fire = (function fire(key,data){
var seq__21743_21753 = cljs.core.seq((function (){var G__21747 = (function (){var G__21748 = svg.app.event_handlers;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21748) : cljs.core.deref.call(null,G__21748));
})();
return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(G__21747) : key.call(null,G__21747));
})());
var chunk__21744_21754 = null;
var count__21745_21755 = (0);
var i__21746_21756 = (0);
while(true){
if((i__21746_21756 < count__21745_21755)){
var handler_21757 = chunk__21744_21754.cljs$core$IIndexed$_nth$arity$2(null,i__21746_21756);
var G__21749_21758 = svg.app.app_db;
var G__21750_21759 = data;
(handler_21757.cljs$core$IFn$_invoke$arity$2 ? handler_21757.cljs$core$IFn$_invoke$arity$2(G__21749_21758,G__21750_21759) : handler_21757.call(null,G__21749_21758,G__21750_21759));

var G__21760 = seq__21743_21753;
var G__21761 = chunk__21744_21754;
var G__21762 = count__21745_21755;
var G__21763 = (i__21746_21756 + (1));
seq__21743_21753 = G__21760;
chunk__21744_21754 = G__21761;
count__21745_21755 = G__21762;
i__21746_21756 = G__21763;
continue;
} else {
var temp__4126__auto___21764 = cljs.core.seq(seq__21743_21753);
if(temp__4126__auto___21764){
var seq__21743_21765__$1 = temp__4126__auto___21764;
if(cljs.core.chunked_seq_QMARK_(seq__21743_21765__$1)){
var c__4370__auto___21766 = cljs.core.chunk_first(seq__21743_21765__$1);
var G__21767 = cljs.core.chunk_rest(seq__21743_21765__$1);
var G__21768 = c__4370__auto___21766;
var G__21769 = cljs.core.count(c__4370__auto___21766);
var G__21770 = (0);
seq__21743_21753 = G__21767;
chunk__21744_21754 = G__21768;
count__21745_21755 = G__21769;
i__21746_21756 = G__21770;
continue;
} else {
var handler_21771 = cljs.core.first(seq__21743_21765__$1);
var G__21751_21772 = svg.app.app_db;
var G__21752_21773 = data;
(handler_21771.cljs$core$IFn$_invoke$arity$2 ? handler_21771.cljs$core$IFn$_invoke$arity$2(G__21751_21772,G__21752_21773) : handler_21771.call(null,G__21751_21772,G__21752_21773));

var G__21774 = cljs.core.next(seq__21743_21765__$1);
var G__21775 = null;
var G__21776 = (0);
var G__21777 = (0);
seq__21743_21753 = G__21774;
chunk__21744_21754 = G__21775;
count__21745_21755 = G__21776;
i__21746_21756 = G__21777;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$69,key,cljs.core.constant$keyword$70,data], null);
});
/**
* Register a function to listen for an event
*/
svg.app.listen = (function listen(key,func){
var handlers = cljs.core.vec(cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__21779 = svg.app.event_handlers;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21779) : cljs.core.deref.call(null,G__21779));
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
svg.app.listen(cljs.core.constant$keyword$71,(function (db,p__21780){
var vec__21781 = p__21780;
var newX = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21781,(0),null);
var newY = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21781,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.assoc,cljs.core.constant$keyword$62,newX,cljs.core.array_seq([cljs.core.constant$keyword$63,newY], 0));

return svg.app.fire(cljs.core.constant$keyword$72,(function (){var G__21782 = db;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21782) : cljs.core.deref.call(null,G__21782));
})());
}));
svg.app.listen(cljs.core.constant$keyword$73,(function (db,color){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(db,cljs.core.assoc,cljs.core.constant$keyword$65,color);

return svg.app.fire(cljs.core.constant$keyword$72,(function (){var G__21783 = db;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21783) : cljs.core.deref.call(null,G__21783));
})());
}));
svg.app.listen(cljs.core.constant$keyword$74,(function (db,cursor){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cursor,cljs.core.inc);

return svg.app.fire(cljs.core.constant$keyword$72,(function (){var G__21784 = db;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21784) : cljs.core.deref.call(null,G__21784));
})());
}));
svg.app.listen(cljs.core.constant$keyword$75,(function (db,p__21785){
var vec__21786 = p__21785;
var cursor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21786,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21786,(1),null);
var G__21787_21790 = cursor;
var G__21788_21791 = value;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21787_21790,G__21788_21791) : cljs.core.reset_BANG_.call(null,G__21787_21790,G__21788_21791));

return svg.app.fire(cljs.core.constant$keyword$72,(function (){var G__21789 = db;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21789) : cljs.core.deref.call(null,G__21789));
})());
}));
svg.app.listen(cljs.core.constant$keyword$72,(function (db,new_state){
var states = (function (){var G__21792 = reagent.core.cursor(svg.app.history,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$67], null));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21792) : cljs.core.deref.call(null,G__21792));
})();
var counter = (function (){var G__21793 = reagent.core.cursor(svg.app.history,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76], null));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21793) : cljs.core.deref.call(null,G__21793));
})();
var next_index = (counter + (1));
var G__21794 = svg.app.history;
var G__21795 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$67,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(states,new_state),cljs.core.constant$keyword$76,next_index,cljs.core.constant$keyword$68,next_index], null);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21794,G__21795) : cljs.core.reset_BANG_.call(null,G__21794,G__21795));
}));
svg.app.listen(cljs.core.constant$keyword$77,(function (db,index){
var states = reagent.core.cursor(svg.app.history,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$67], null));
var current = reagent.core.cursor(svg.app.history,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$68], null));
var temp__4126__auto___21801 = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__21796 = states;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21796) : cljs.core.deref.call(null,G__21796));
})(),index);
if(cljs.core.truth_(temp__4126__auto___21801)){
var chosen_21802 = temp__4126__auto___21801;
var G__21797_21803 = current;
var G__21798_21804 = index;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21797_21803,G__21798_21804) : cljs.core.reset_BANG_.call(null,G__21797_21803,G__21798_21804));

var G__21799_21805 = db;
var G__21800_21806 = chosen_21802;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21799_21805,G__21800_21806) : cljs.core.reset_BANG_.call(null,G__21799_21805,G__21800_21806));
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
return play_history.cljs$core$IFn$_invoke$arity$2(history,cljs.core.constant$keyword$78);
});
var play_history__2 = (function (history,dir){
var indices_chan = cljs.core.async.to_chan((function (){var G__21843 = history;
var G__21843__$1 = cljs.core.count(G__21843)
;
var G__21843__$2 = (G__21843__$1 + (1))
;
var G__21843__$3 = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),G__21843__$2)
;
var G__21843__$4 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$79,dir))?cljs.core.reverse(G__21843__$3):G__21843__$3);
return G__21843__$4;
})());
var c__11802__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11802__auto__,indices_chan){
return (function (){
var f__11803__auto__ = (function (){var switch__11722__auto__ = ((function (c__11802__auto__,indices_chan){
return (function (state_21859){
var state_val_21860 = (state_21859[(1)]);
if((state_val_21860 === (8))){
var inst_21851 = (state_21859[(2)]);
var state_21859__$1 = (function (){var statearr_21861 = state_21859;
(statearr_21861[(7)] = inst_21851);

return statearr_21861;
})();
var statearr_21862_21877 = state_21859__$1;
(statearr_21862_21877[(2)] = null);

(statearr_21862_21877[(1)] = (2));


return cljs.core.constant$keyword$46;
} else {
if((state_val_21860 === (7))){
var inst_21855 = (state_21859[(2)]);
var state_21859__$1 = state_21859;
var statearr_21863_21878 = state_21859__$1;
(statearr_21863_21878[(2)] = inst_21855);

(statearr_21863_21878[(1)] = (3));


return cljs.core.constant$keyword$46;
} else {
if((state_val_21860 === (6))){
var state_21859__$1 = state_21859;
var statearr_21864_21879 = state_21859__$1;
(statearr_21864_21879[(2)] = null);

(statearr_21864_21879[(1)] = (7));


return cljs.core.constant$keyword$46;
} else {
if((state_val_21860 === (5))){
var inst_21846 = (state_21859[(8)]);
var inst_21848 = svg.app.fire(cljs.core.constant$keyword$77,inst_21846);
var inst_21849 = cljs.core.async.timeout((30));
var state_21859__$1 = (function (){var statearr_21865 = state_21859;
(statearr_21865[(9)] = inst_21848);

return statearr_21865;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21859__$1,(8),inst_21849);
} else {
if((state_val_21860 === (4))){
var inst_21846 = (state_21859[(8)]);
var inst_21846__$1 = (state_21859[(2)]);
var state_21859__$1 = (function (){var statearr_21866 = state_21859;
(statearr_21866[(8)] = inst_21846__$1);

return statearr_21866;
})();
if(cljs.core.truth_(inst_21846__$1)){
var statearr_21867_21880 = state_21859__$1;
(statearr_21867_21880[(1)] = (5));

} else {
var statearr_21868_21881 = state_21859__$1;
(statearr_21868_21881[(1)] = (6));

}

return cljs.core.constant$keyword$46;
} else {
if((state_val_21860 === (3))){
var inst_21857 = (state_21859[(2)]);
var state_21859__$1 = state_21859;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21859__$1,inst_21857);
} else {
if((state_val_21860 === (2))){
var state_21859__$1 = state_21859;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21859__$1,(4),indices_chan);
} else {
if((state_val_21860 === (1))){
var state_21859__$1 = state_21859;
var statearr_21869_21882 = state_21859__$1;
(statearr_21869_21882[(2)] = null);

(statearr_21869_21882[(1)] = (2));


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
});})(c__11802__auto__,indices_chan))
;
return ((function (switch__11722__auto__,c__11802__auto__,indices_chan){
return (function() {
var state_machine__11723__auto__ = null;
var state_machine__11723__auto____0 = (function (){
var statearr_21873 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21873[(0)] = state_machine__11723__auto__);

(statearr_21873[(1)] = (1));

return statearr_21873;
});
var state_machine__11723__auto____1 = (function (state_21859){
while(true){
var ret_value__11724__auto__ = (function (){try{while(true){
var result__11725__auto__ = switch__11722__auto__(state_21859);
if(cljs.core.keyword_identical_QMARK_(result__11725__auto__,cljs.core.constant$keyword$46)){
continue;
} else {
return result__11725__auto__;
}
break;
}
}catch (e21874){if((e21874 instanceof Object)){
var ex__11726__auto__ = e21874;
var statearr_21875_21883 = state_21859;
(statearr_21875_21883[(5)] = ex__11726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21859);

return cljs.core.constant$keyword$46;
} else {
throw e21874;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11724__auto__,cljs.core.constant$keyword$46)){
var G__21884 = state_21859;
state_21859 = G__21884;
continue;
} else {
return ret_value__11724__auto__;
}
break;
}
});
state_machine__11723__auto__ = function(state_21859){
switch(arguments.length){
case 0:
return state_machine__11723__auto____0.call(this);
case 1:
return state_machine__11723__auto____1.call(this,state_21859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11723__auto____0;
state_machine__11723__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11723__auto____1;
return state_machine__11723__auto__;
})()
;})(switch__11722__auto__,c__11802__auto__,indices_chan))
})();
var state__11804__auto__ = (function (){var statearr_21876 = (function (){return (f__11803__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11803__auto__.cljs$core$IFn$_invoke$arity$0() : f__11803__auto__.call(null));
})();
(statearr_21876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11802__auto__);

return statearr_21876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11804__auto__);
});})(c__11802__auto__,indices_chan))
);

return c__11802__auto__;
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
var h = reagent.core.cursor(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$67], null));
var current = reagent.core.cursor(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$68], null));
return ((function (h,current){
return (function (db__$1){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$80,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$23,"wrapper"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$81,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$23,"btn btn-default",cljs.core.constant$keyword$82,((function (h,current){
return (function (e){
return svg.app.play_history.cljs$core$IFn$_invoke$arity$2((function (){var G__21891 = h;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21891) : cljs.core.deref.call(null,G__21891));
})(),cljs.core.constant$keyword$79);
});})(h,current))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$83,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$23,"glyphicon glyphicon-fast-backward"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$81,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$23,"btn btn-default",cljs.core.constant$keyword$82,((function (h,current){
return (function (e){
return svg.app.play_history.cljs$core$IFn$_invoke$arity$2((function (){var G__21892 = h;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21892) : cljs.core.deref.call(null,G__21892));
})(),cljs.core.constant$keyword$78);
});})(h,current))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$83,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$23,"glyphicon glyphicon-fast-forward"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$80,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$23,"form-group"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$84,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$85,"history"], null),[cljs.core.str("History "),cljs.core.str((function (){var G__21893 = current;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21893) : cljs.core.deref.call(null,G__21893));
})())].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$86,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$87,"range",cljs.core.constant$keyword$23,"form-control",cljs.core.constant$keyword$36,"history",cljs.core.constant$keyword$88,(function (){var G__21894 = current;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21894) : cljs.core.deref.call(null,G__21894));
})(),cljs.core.constant$keyword$89,(0),cljs.core.constant$keyword$90,cljs.core.count((function (){var G__21895 = h;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21895) : cljs.core.deref.call(null,G__21895));
})()),cljs.core.constant$keyword$91,((function (h,current){
return (function (e){
return svg.app.fire(cljs.core.constant$keyword$77,(function (){var G__21896 = e.target.value;
return parseInt(G__21896);
})());
});})(h,current))
], null)], null)], null)], null);
});
;})(h,current))
});
svg.app.click_count_component = (function click_count_component(clicks){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$92,"Clicks: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$93,(function (){var G__21898 = clicks;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21898) : cljs.core.deref.call(null,G__21898));
})()], null)], null);
});
svg.app.circle_component = (function circle_component(cx,cy,r,fill,score){
var local_state = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$62,cx,cljs.core.constant$keyword$63,cy], null);
reagent.core.set_state(reagent.core.current_component(),local_state);

return ((function (local_state){
return (function (cx__$1,cy__$1,r__$1,fill__$1,score__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$94,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$95,(function (){var G__21903 = cx__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21903) : cljs.core.deref.call(null,G__21903));
})(),cljs.core.constant$keyword$96,(function (){var G__21904 = cy__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21904) : cljs.core.deref.call(null,G__21904));
})(),cljs.core.constant$keyword$97,(function (){var G__21905 = r__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21905) : cljs.core.deref.call(null,G__21905));
})(),cljs.core.constant$keyword$24,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$65,(function (){var G__21906 = fill__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21906) : cljs.core.deref.call(null,G__21906));
})()], null),cljs.core.constant$keyword$98,((function (local_state){
return (function (e){
return svg.app.fire(cljs.core.constant$keyword$74,score__$1);
});})(local_state))
], null)], null);
});
;})(local_state))
});
svg.app.draggable_circle_component = cljs.core.with_meta(svg.app.circle_component,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$99,(function (this$){
var node = reagent.core.dom_node(this$);
var canvas = node.parentNode;
var x_constraint = svg.app.make_constraint((0),canvas.clientWidth);
var y_constraint = svg.app.make_constraint((0),canvas.clientHeight);
var G__21907 = node;
var G__21908 = goog.events.EventType.MOUSEDOWN;
var G__21909 = ((function (G__21907,G__21908,node,canvas,x_constraint,y_constraint){
return (function (e){
var drag = (new goog.fx.Dragger(node));
var local_state = reagent.core.state(this$);
drag.addEventListener(goog.fx.Dragger.EventType.DRAG,((function (drag,local_state,G__21907,G__21908,node,canvas,x_constraint,y_constraint){
return (function (b){
var dx = b.dragger.deltaX;
var dy = b.dragger.deltaY;
var x = (function (){var G__21910 = (dx + (function (){var G__21911 = cljs.core.constant$keyword$62.cljs$core$IFn$_invoke$arity$1(local_state);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21911) : cljs.core.deref.call(null,G__21911));
})());
return (x_constraint.cljs$core$IFn$_invoke$arity$1 ? x_constraint.cljs$core$IFn$_invoke$arity$1(G__21910) : x_constraint.call(null,G__21910));
})();
var y = (function (){var G__21912 = (dy + (function (){var G__21913 = cljs.core.constant$keyword$63.cljs$core$IFn$_invoke$arity$1(local_state);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21913) : cljs.core.deref.call(null,G__21913));
})());
return (y_constraint.cljs$core$IFn$_invoke$arity$1 ? y_constraint.cljs$core$IFn$_invoke$arity$1(G__21912) : y_constraint.call(null,G__21912));
})();
return svg.app.fire(cljs.core.constant$keyword$71,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(drag,local_state,G__21907,G__21908,node,canvas,x_constraint,y_constraint))
);

drag.addEventListener(goog.fx.Dragger.EventType.END,((function (drag,local_state,G__21907,G__21908,node,canvas,x_constraint,y_constraint){
return (function (){
return drag.dispose();
});})(drag,local_state,G__21907,G__21908,node,canvas,x_constraint,y_constraint))
);

return drag.startDrag(e);
});})(G__21907,G__21908,node,canvas,x_constraint,y_constraint))
;
return goog.events.listen(G__21907,G__21908,G__21909);
})], null));
svg.app.range_component = (function range_component(v,min,max,title){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$80,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$23,"form-group"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$84,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$85,title], null),title,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$93," [ ",(function (){var G__21916 = v;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21916) : cljs.core.deref.call(null,G__21916));
})()," ] "], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$86,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$87,"range",cljs.core.constant$keyword$23,"form-control",cljs.core.constant$keyword$36,title,cljs.core.constant$keyword$44,title,cljs.core.constant$keyword$89,min,cljs.core.constant$keyword$90,max,cljs.core.constant$keyword$88,(function (){var G__21917 = v;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21917) : cljs.core.deref.call(null,G__21917));
})(),cljs.core.constant$keyword$91,(function (e){
return svg.app.fire(cljs.core.constant$keyword$75,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,e.target.value], null));
})], null)], null)], null);
});
svg.app.select_component = (function select_component(fill){
return (function (fill__$1){
var colors = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, ["gray","red","orange","yellow","green","blue","aqua","indigo","purple","brown","black"], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$80,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$23,"form-group"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$84,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$85,"Color"], null),"Color"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$100,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$36,"Color",cljs.core.constant$keyword$23,"form-control",cljs.core.constant$keyword$88,(function (){var G__21925 = fill__$1;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21925) : cljs.core.deref.call(null,G__21925));
})(),cljs.core.constant$keyword$91,((function (colors){
return (function (e){
return svg.app.fire(cljs.core.constant$keyword$73,e.target.value);
});})(colors))
], null),(function (){var iter__4339__auto__ = ((function (colors){
return (function iter__21926(s__21927){
return (new cljs.core.LazySeq(null,((function (colors){
return (function (){
var s__21927__$1 = s__21927;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__21927__$1);
if(temp__4126__auto__){
var s__21927__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21927__$2)){
var c__4337__auto__ = cljs.core.chunk_first(s__21927__$2);
var size__4338__auto__ = cljs.core.count(c__4337__auto__);
var b__21929 = cljs.core.chunk_buffer(size__4338__auto__);
if((function (){var i__21928 = (0);
while(true){
if((i__21928 < size__4338__auto__)){
var c = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4337__auto__,i__21928);
cljs.core.chunk_append(b__21929,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$101,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$88,c,cljs.core.constant$keyword$44,c], null),c], null));

var G__21932 = (i__21928 + (1));
i__21928 = G__21932;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21929),iter__21926(cljs.core.chunk_rest(s__21927__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21929),null);
}
} else {
var c = cljs.core.first(s__21927__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$101,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$88,c,cljs.core.constant$keyword$44,c], null),c], null),iter__21926(cljs.core.rest(s__21927__$2)));
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$102,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$103,"720",cljs.core.constant$keyword$104,"720",cljs.core.constant$keyword$105,"canvas",cljs.core.constant$keyword$24,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$106,"1px solid black"], null)], null),circle], null);
});
svg.app.app_component = (function app_component(){
var x = reagent.core.cursor(svg.app.app_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$62], null));
var y = reagent.core.cursor(svg.app.app_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$63], null));
var radius = reagent.core.cursor(svg.app.app_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$64], null));
var fill = reagent.core.cursor(svg.app.app_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$65], null));
var clicks = reagent.core.cursor(svg.app.app_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$66], null));
var circle = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [svg.app.draggable_circle_component,x,y,radius,fill,clicks], null);
return ((function (x,y,radius,fill,clicks,circle){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$80,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$105,"wrapper"], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$80,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$105,"controls",cljs.core.constant$keyword$23,"col-md-3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [svg.app.history_component,svg.app.history], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [svg.app.click_count_component,clicks], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [svg.app.range_component,x,(0),(720),"CX"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [svg.app.range_component,y,(0),(720),"CY"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [svg.app.range_component,radius,(1),(100),"Size"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [svg.app.select_component,fill], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$80,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$23,"col-md-9"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [svg.app.svg_component,circle], null)], null)], null);
});
;})(x,y,radius,fill,clicks,circle))
});
svg.app.init = (function init(){
var G__21935 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [svg.app.app_component], null);
var G__21936 = document.getElementById("canvas");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__21935,G__21936) : reagent.core.render_component.call(null,G__21935,G__21936));
});
