// ==UserScript==
// @name         better speedrun.com
// @description  make speedrun.com prettier and fix some stuff
// @author       shenef
// @version      20210218.1
// @match        https://www.speedrun.com/*
// @resource     CSS https://raw.githubusercontent.com/shenef/better-srcom/main/style.css
// @grant        GM_getResourceText
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    const css = GM_getResourceText("CSS");
    GM_addStyle(css);
})();
