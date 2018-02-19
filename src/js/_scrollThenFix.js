"use strict";

import $ from 'cash-dom';

/**
 * after scrolling
 *
 * @param  string top
 * @param  string addClass
 * @param  string destinationSelector
 */

export default function scrollThenFix(sourceSelector, destinationSelector, addClass) {
    let destination = $(destinationSelector);
    let source = $(sourceSelector);
    let pageY = document.documentElement.scrollTop;

    // set position
    scrollTo(pageY);

    // adding event for scrolling
    window.addEventListener('scroll', function(event) {
        scrollTo(event.pageY);
    });

    /**
     * scroll to if source Height is smaller then pageY
     *
     * @param integer pageY
     */
    function scrollTo(pageY)
    {
        if (pageY > source.outerHeight()) {
            destination.addClass(addClass);
        } else {
            destination.removeClass(addClass);
        }
    }
}
