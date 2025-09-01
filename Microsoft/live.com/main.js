// ==UserScript==
// @name         Block Microsoft Ads
// @namespace    http://live.com/
// @version      0.1
// @description  Deletes the div with the class "GssDD" from the page.
// @author       Toilet
// @match        *.live.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const findAndRemoveBanner = () => {
        const banners = document.querySelectorAll('.GssDD');
        banners.forEach(banner => {
            banner.remove();
            console.log('Ad-blocker banner (.GssDD) was found and removed.');
        });
    };

    // Create an observer to watch for when new elements are added to the page
    const observer = new MutationObserver(findAndRemoveBanner);

    // Tell the observer to watch the entire body of the page for any changes
    observer.observe(document.body, {
        childList: true, // Watch for elements being added or removed
        subtree: true // Watch all descendants, not just direct children
    });

    // Run the function once right at the start, just in case the banner is already there
    findAndRemoveBanner();
})();