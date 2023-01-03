// ==UserScript==
// @name         VozName
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://voz.vn/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=voz.vn
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  // Your code here...

  const addStyle = cssStyles => {
    console.log('gotcha');
    const styleNode = document.createElement('style');
    styleNode.appendChild(document.createTextNode(cssStyles));
    const headNode = document.querySelector('head');
    headNode.appendChild(styleNode);
  };

  addStyle(`.p-navgroup-link.p-navgroup-link--iconic .p-navgroup-linkText {
        display:none
    }`);
})();

