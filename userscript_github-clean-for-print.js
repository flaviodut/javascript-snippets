// ==UserScript==
// @name         Github - Clean page for print
// @namespace    http://flaviodutra.com.br/
// @version      0.2.5
// @description  Hide unnecessary elements from the page to print
// @author       Flávio Dutra
// @match        https://github.com/*
// @match        http://github.com/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  function cssPrint() {
    // Css rules to hide and adjust elements from page
    const cssRules = `
      @media print {
        .accessibility-aid,
        .commit-tease,
        .file-header,
        .file-navigation,
        .file-wrap,
        .header,
        .js-flash-container,
        .overall-summary,
        .pagehead-actions,
        .readme > h3,
        .reponav,
        .repository-meta,
        .site-footer-container {
            display: none !important;
        }

        .repohead.experiment-repo-nav {
            background-color: transparent;
        }

        .markdown-body,
        .file {
            border: none !important;
            padding: 0 !important;
        }

        .container {
            width: 100%;
        }

        .container pre {
            background-color: transparent;
            border-left: 2px solid #eee;
        }

        .container a,
        .container a:visited {
            text-decoration: underline;
        }

        .container a:link:after,
        .container a:visited:after {
            content: " (" attr(href) ") ";
        }

        .container a:after,
        .container a[href^="javascript:"]:after,
        .container a[href^="#"]:after {
            content: "";
        }
      }
    `;

    // Create style element
    const styleNode = document.createElement('style');

    // Add atribute to the style element
    styleNode.setAttribute('id','cssPrint');

    // Add the content to the style element
    styleNode.innerHTML = cssRules;

    // Append the style element to the body
    document.body.appendChild(styleNode);
  }

  cssPrint();

})();
