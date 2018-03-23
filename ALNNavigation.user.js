// ==UserScript==
// @name			ALNNavigation
// @description		Additional Navagation buttons for All Night Laundry
// @version			0.0.1
// @author			sporks5000@gmail.com
// @grant        	GM_xmlhttpRequest
// @grant			GM_addStyle
// @grant        	GM_getValue
// @grant        	GM_setValue
// @grant			GM_deleteValue
// @require     	https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js
// @include			http://www.all-night-laundry.com/post/*
// @updateURL		https://github.com/sporks5000/ALNNavigation/raw/master/ALNNavigation.meta.js
// @downloadURL		https://github.com/sporks5000/ALNNavigation/raw/master/ALNNavigation.user.js
// ==/UserScript==

var alnnDebugging = true;

function debug (msg) { if (alnnDebugging) { console.log('[' + GM_info.script.name + ' - ' + new Date().toLocaleString() + '] ' + msg); } }

function init() {
	debug('page loaded');
	
	var navBar = $('#navigation');
	var content = $('#post');
	debug('Adding navigation to the top');
	var navBar2 = navBar.clone(true).attr('id','navigation').prependTo(post);
	debug('Adding navigation to the bottom');
	var navBar3 = navBar.clone(true).attr('id','navigation').appendTo(post);
	navBar2.after('<br />');
	navBar3.before('<br />');
	var notes = $('#notes');
	if ( notes ) {
		debug('Adding navigation after notes');
		var navBar4 = navBar.clone(true).attr('id','navigation').appendTo(notes);
		navBar4.before('<br />');
	}
}

init();

