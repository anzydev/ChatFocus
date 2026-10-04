// ==UserScript==
// @name         PromptFocus
// @namespace    https://github.com/YOUR_USERNAME/PromptFocus
// @version      1.0.0
// @description  Automatically focus the ChatGPT message composer without interfering with text selection
// @author       YOUR_USERNAME
// @match        https://chatgpt.com/*
// @match        https://chat.openai.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    const composerXPath =
        '/html/body/div[1]/div/div[3]/div/div/div[1]/main/div[3]/div/div/div/div[2]/div/div/div/div[2]/div/div/div/div/div/div/div[2]/div[2]/div[2]/div/div/div/div/div/div';

    function getElementByXPath(path) {
        try {
            return document.evaluate(
                path,
                document,
                null,
                XPathResult.FIRST_ORDERED_NODE_TYPE,
                null
            ).singleNodeValue;
        } catch {
            return null;
        }
    }

    function findComposer() {
        const selectors = [
            '#prompt-textarea[contenteditable="true"]',
            '[contenteditable="true"][role="textbox"]'
        ];

        for (const selector of selectors) {
            const element = document.querySelector(selector);

            if (element) {
                return element;
            }
        }

        const xpathElement = getElementByXPath(composerXPath);

        if (xpathElement) {
            if (
                xpathElement.isContentEditable ||
                xpathElement.getAttribute('contenteditable') === 'true'
            ) {
                return xpathElement;
            }

            const editor = xpathElement.querySelector(
                '[contenteditable="true"], textarea'
            );

            if (editor) {
                return editor;
            }
        }

        return document.querySelector('textarea');
    }

    function focusComposer() {
        const composer = findComposer();

        if (!composer) {
            return;
        }

        composer.focus();
    }

    let mouseDownX = 0;
    let mouseDownY = 0;
    let dragged = false;

    document.addEventListener(
        'mousedown',
        function (event) {
            mouseDownX = event.clientX;
            mouseDownY = event.clientY;
            dragged = false;
        },
        true
    );

    document.addEventListener(
        'mousemove',
        function (event) {
            const distance = Math.sqrt(
                Math.pow(event.clientX - mouseDownX, 2) +
                Math.pow(event.clientY - mouseDownY, 2)
            );

            if (distance > 5) {
                dragged = true;
            }
        },
        true
    );

    document.addEventListener(
        'mouseup',
        function (event) {
            if (dragged) {
                return;
            }

            const target = event.target;

            if (
                target.closest('button') ||
                target.closest('a') ||
                target.closest('input') ||
                target.closest('textarea') ||
                target.closest('[contenteditable="true"]') ||
                target.closest('[role="button"]') ||
                target.closest('[role="menu"]') ||
                target.closest('[role="menuitem"]') ||
                target.closest('pre') ||
                target.closest('code')
            ) {
                return;
            }

            const selection = window.getSelection();

            if (selection && selection.toString().length > 0) {
                return;
            }

            setTimeout(focusComposer, 30);
        },
        true
    );
})();
