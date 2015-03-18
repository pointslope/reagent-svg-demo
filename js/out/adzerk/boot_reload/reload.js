// Compiled by ClojureScript 0.0-2816 {:elide-asserts true, :static-fns true}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('goog.net.jsloader');
goog.require('goog.async.DeferredList');
goog.require('goog.Uri');
goog.require('clojure.string');
adzerk.boot_reload.reload.page_uri = (new goog.Uri(window.location.href));
adzerk.boot_reload.reload.ends_with_QMARK_ = (function ends_with_QMARK_(s,pat){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pat,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - cljs.core.count(pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.changed_href_QMARK_ = (function changed_href_QMARK_(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var uri = (new goog.Uri(href_or_uri));
var path = adzerk.boot_reload.reload.page_uri.resolve(uri).getPath();
if(cljs.core.truth_(cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (uri,path){
return (function (p1__15471_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_(p1__15471_SHARP_,path);
});})(uri,path))
,changed)))){
return uri;
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function reload_css(changed){
var sheets = document.styleSheets;
var seq__15476 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),sheets.length));
var chunk__15477 = null;
var count__15478 = (0);
var i__15479 = (0);
while(true){
if((i__15479 < count__15478)){
var s = chunk__15477.cljs$core$IIndexed$_nth$arity$2(null,i__15479);
var temp__4126__auto___15480 = (sheets[s]);
if(cljs.core.truth_(temp__4126__auto___15480)){
var sheet_15481 = temp__4126__auto___15480;
var temp__4126__auto___15482__$1 = adzerk.boot_reload.reload.changed_href_QMARK_(sheet_15481.href,changed);
if(cljs.core.truth_(temp__4126__auto___15482__$1)){
var href_uri_15483 = temp__4126__auto___15482__$1;
sheet_15481.ownerNode.href = href_uri_15483.makeUnique().toString();
} else {
}
} else {
}

var G__15484 = seq__15476;
var G__15485 = chunk__15477;
var G__15486 = count__15478;
var G__15487 = (i__15479 + (1));
seq__15476 = G__15484;
chunk__15477 = G__15485;
count__15478 = G__15486;
i__15479 = G__15487;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__15476);
if(temp__4126__auto__){
var seq__15476__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15476__$1)){
var c__4370__auto__ = cljs.core.chunk_first(seq__15476__$1);
var G__15488 = cljs.core.chunk_rest(seq__15476__$1);
var G__15489 = c__4370__auto__;
var G__15490 = cljs.core.count(c__4370__auto__);
var G__15491 = (0);
seq__15476 = G__15488;
chunk__15477 = G__15489;
count__15478 = G__15490;
i__15479 = G__15491;
continue;
} else {
var s = cljs.core.first(seq__15476__$1);
var temp__4126__auto___15492__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4126__auto___15492__$1)){
var sheet_15493 = temp__4126__auto___15492__$1;
var temp__4126__auto___15494__$2 = adzerk.boot_reload.reload.changed_href_QMARK_(sheet_15493.href,changed);
if(cljs.core.truth_(temp__4126__auto___15494__$2)){
var href_uri_15495 = temp__4126__auto___15494__$2;
sheet_15493.ownerNode.href = href_uri_15495.makeUnique().toString();
} else {
}
} else {
}

var G__15496 = cljs.core.next(seq__15476__$1);
var G__15497 = null;
var G__15498 = (0);
var G__15499 = (0);
seq__15476 = G__15496;
chunk__15477 = G__15497;
count__15478 = G__15498;
i__15479 = G__15499;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function reload_img(changed){
var images = document.images;
var seq__15504 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),images.length));
var chunk__15505 = null;
var count__15506 = (0);
var i__15507 = (0);
while(true){
if((i__15507 < count__15506)){
var s = chunk__15505.cljs$core$IIndexed$_nth$arity$2(null,i__15507);
var temp__4126__auto___15508 = (images[s]);
if(cljs.core.truth_(temp__4126__auto___15508)){
var image_15509 = temp__4126__auto___15508;
var temp__4126__auto___15510__$1 = adzerk.boot_reload.reload.changed_href_QMARK_(image_15509.src,changed);
if(cljs.core.truth_(temp__4126__auto___15510__$1)){
var href_uri_15511 = temp__4126__auto___15510__$1;
image_15509.src = href_uri_15511.makeUnique().toString();
} else {
}
} else {
}

var G__15512 = seq__15504;
var G__15513 = chunk__15505;
var G__15514 = count__15506;
var G__15515 = (i__15507 + (1));
seq__15504 = G__15512;
chunk__15505 = G__15513;
count__15506 = G__15514;
i__15507 = G__15515;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq(seq__15504);
if(temp__4126__auto__){
var seq__15504__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15504__$1)){
var c__4370__auto__ = cljs.core.chunk_first(seq__15504__$1);
var G__15516 = cljs.core.chunk_rest(seq__15504__$1);
var G__15517 = c__4370__auto__;
var G__15518 = cljs.core.count(c__4370__auto__);
var G__15519 = (0);
seq__15504 = G__15516;
chunk__15505 = G__15517;
count__15506 = G__15518;
i__15507 = G__15519;
continue;
} else {
var s = cljs.core.first(seq__15504__$1);
var temp__4126__auto___15520__$1 = (images[s]);
if(cljs.core.truth_(temp__4126__auto___15520__$1)){
var image_15521 = temp__4126__auto___15520__$1;
var temp__4126__auto___15522__$2 = adzerk.boot_reload.reload.changed_href_QMARK_(image_15521.src,changed);
if(cljs.core.truth_(temp__4126__auto___15522__$2)){
var href_uri_15523 = temp__4126__auto___15522__$2;
image_15521.src = href_uri_15523.makeUnique().toString();
} else {
}
} else {
}

var G__15524 = cljs.core.next(seq__15504__$1);
var G__15525 = null;
var G__15526 = (0);
var G__15527 = (0);
seq__15504 = G__15524;
chunk__15505 = G__15525;
count__15506 = G__15526;
i__15507 = G__15527;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function reload_js(changed,p__15530){
var map__15535 = p__15530;
var map__15535__$1 = ((cljs.core.seq_QMARK_(map__15535))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15535):map__15535);
var on_jsload = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15535__$1,cljs.core.constant$keyword$17,cljs.core.identity);
var js_files = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__15535,map__15535__$1,on_jsload){
return (function (p1__15528_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_(p1__15528_SHARP_,".js");
});})(map__15535,map__15535__$1,on_jsload))
,changed);
if(cljs.core.seq(js_files)){
return (function (){var G__15536 = cljs.core.clj__GT_js(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (js_files,map__15535,map__15535__$1,on_jsload){
return (function (p1__15529_SHARP_){
var G__15537 = (function (){var G__15538 = p1__15529_SHARP_;
return goog.Uri.parse(G__15538);
})().makeUnique();
return goog.net.jsloader.load(G__15537);
});})(js_files,map__15535,map__15535__$1,on_jsload))
,js_files));
return goog.async.DeferredList.gatherResults(G__15536);
})().addCallbacks(((function (js_files,map__15535,map__15535__$1,on_jsload){
return (function() { 
var G__15539__delegate = function (_){
return (on_jsload.cljs$core$IFn$_invoke$arity$0 ? on_jsload.cljs$core$IFn$_invoke$arity$0() : on_jsload.call(null));
};
var G__15539 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__15540__i = 0, G__15540__a = new Array(arguments.length -  0);
while (G__15540__i < G__15540__a.length) {G__15540__a[G__15540__i] = arguments[G__15540__i + 0]; ++G__15540__i;}
  _ = new cljs.core.IndexedSeq(G__15540__a,0);
} 
return G__15539__delegate.call(this,_);};
G__15539.cljs$lang$maxFixedArity = 0;
G__15539.cljs$lang$applyTo = (function (arglist__15541){
var _ = cljs.core.seq(arglist__15541);
return G__15539__delegate(_);
});
G__15539.cljs$core$IFn$_invoke$arity$variadic = G__15539__delegate;
return G__15539;
})()
;})(js_files,map__15535,map__15535__$1,on_jsload))
,((function (js_files,map__15535,map__15535__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__15535,map__15535__$1,on_jsload))
);
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.getPath();
var html_path = ((adzerk.boot_reload.reload.ends_with_QMARK_(page_path,"/"))?[cljs.core.str(page_path),cljs.core.str("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_href_QMARK_(html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_();
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__15546_15550 = cljs.core.seq(things_to_log);
var chunk__15547_15551 = null;
var count__15548_15552 = (0);
var i__15549_15553 = (0);
while(true){
if((i__15549_15553 < count__15548_15552)){
var t_15554 = chunk__15547_15551.cljs$core$IIndexed$_nth$arity$2(null,i__15549_15553);
console.log(t_15554);

var G__15555 = seq__15546_15550;
var G__15556 = chunk__15547_15551;
var G__15557 = count__15548_15552;
var G__15558 = (i__15549_15553 + (1));
seq__15546_15550 = G__15555;
chunk__15547_15551 = G__15556;
count__15548_15552 = G__15557;
i__15549_15553 = G__15558;
continue;
} else {
var temp__4126__auto___15559 = cljs.core.seq(seq__15546_15550);
if(temp__4126__auto___15559){
var seq__15546_15560__$1 = temp__4126__auto___15559;
if(cljs.core.chunked_seq_QMARK_(seq__15546_15560__$1)){
var c__4370__auto___15561 = cljs.core.chunk_first(seq__15546_15560__$1);
var G__15562 = cljs.core.chunk_rest(seq__15546_15560__$1);
var G__15563 = c__4370__auto___15561;
var G__15564 = cljs.core.count(c__4370__auto___15561);
var G__15565 = (0);
seq__15546_15550 = G__15562;
chunk__15547_15551 = G__15563;
count__15548_15552 = G__15564;
i__15549_15553 = G__15565;
continue;
} else {
var t_15566 = cljs.core.first(seq__15546_15560__$1);
console.log(t_15566);

var G__15567 = cljs.core.next(seq__15546_15560__$1);
var G__15568 = null;
var G__15569 = (0);
var G__15570 = (0);
seq__15546_15550 = G__15567;
chunk__15547_15551 = G__15568;
count__15548_15552 = G__15569;
i__15549_15553 = G__15570;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
adzerk.boot_reload.reload.reload = (function reload(opts,changed){
adzerk.boot_reload.reload.group_log("Reload",changed);

var G__15572 = changed;
adzerk.boot_reload.reload.reload_js(G__15572,opts);

adzerk.boot_reload.reload.reload_html(G__15572);

adzerk.boot_reload.reload.reload_css(G__15572);

adzerk.boot_reload.reload.reload_img(G__15572);

return G__15572;
});
