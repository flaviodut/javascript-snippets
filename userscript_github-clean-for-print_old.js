// ==UserScript==
// @name         Github - Clean page for print
// @namespace    http://www.flaviodutra.com.br/
// @version      0.2.1
// @date         13/10/2016
// @description  Hide unnecessary elements from the page to print
// @author       Flávio Dutra
// @match        https://github.com/*
// @match        http://github.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var aux = false;

    function cleanAndPrint() {
        // Css rules to hide and adjust elements from page
        var cssRules = '.accessibility-aid,.commit-tease,.file-header,.file-navigation,.file-wrap,.header,.js-flash-container,.overall-summary,.pagehead-actions,.readme>h3,.reponav,.repository-meta,.site-footer-container{display:none!important}.markdown-body,.file{border:none!important;padding:0!important}.container{width:100%}';

        // Create style element
        var styleNode = document.createElement('style');

        // Add atribute to the style element
        styleNode.setAttribute('id','cleanStyle');

        // Add the content to the style element
        styleNode.innerHTML = cssRules;

        // Append the style element to the body
        document.body.appendChild(styleNode);

        // Change value of the verification variable
        aux = true;

        // Call print
        print();
    }

    function cleanRevert() {
        // Remove style node
        var styleNode = document.querySelector('#cleanStyle');
        styleNode.parentNode.removeChild(styleNode);

        // Change value of the verification variable
        aux = false;
    }

    // Create button elements
    var cleanNode = document.createElement('span');
    var cleanText = document.createTextNode('Clean and print');

    // Add attributes to the button
    cleanNode.setAttribute('id','buttonClean');
    cleanNode.setAttribute('title','Prepare page for print.');
    cleanNode.setAttribute('style','position:fixed;bottom:0;right:0;background-color:tomato;color:white;font-weight:700;font-size:0.75rem;padding:5px 15px;border-radius:3px 0 0 0;cursor:pointer;');

    // Append to the button and to the DOM
    cleanNode.appendChild(cleanText);
    document.body.appendChild(cleanNode);

    // Add click event to the button
    document.querySelector('#buttonClean').addEventListener('click', function() {
        if(!aux) {
            cleanAndPrint();
        } else {
            cleanRevert();
        }
    }, false);

})();