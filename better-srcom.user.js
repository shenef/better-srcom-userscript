// ==UserScript==
// @name         better speedrun.com
// @version      0.1
// @description  make speedrun.com prettier and fix some stuff
// @author       shenef
// @match        https://www.speedrun.com/*
// @grant        GM_getResourceText
// @grant        GM_addStyle
// @resource     CSS https://raw.githubusercontent.com/shenef/better-srcom/main/style.css
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    const css = GM_getResourceText("CSS");
    GM_addStyle(css);
})();
