// ==UserScript==
// @name         better speedrun.com
// @version      0.1
// @description  make speedrun.com prettier and fix some stuff
// @author       shenef
// @match        https://www.speedrun.com/*
// @grant        GM_getResourceText
// @grant        GM_addStyle
// @resource     extCSS https://gist.githubusercontent.com/shenef/3dd4b99e74882873d7fb45cb5549f5b1/raw/73734584e87794b79491b314cbabb6e7ee086b1e/srcom_stylus.css
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    const css = GM_getResourceText("extCSS");
    GM_addStyle(css);
})();
