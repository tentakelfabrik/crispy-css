"use strict";

import $ from 'cash-dom';

/**
 * after scrolling
 *
 * @param  string top
 * @param  string addClass
 * @param  string destinationSelector
 */

export default function scrollThenFix(sourceSelector, destinationSelector, addClass, offset) {
    let destination = $(destinationSelector);
    let source = $(sourceSelector);

    if (offset === undefined) {
        offset = 0;
    }

    // adding fixed position
    destination.css('top', (source.outerHeight() + offset) + 'px');

    window.addEventListener('scroll', function(event) {
        if (event.pageY > source.outerHeight()) {
            destination.addClass(addClass);
        } else {
            destination.removeClass(addClass);
        }
    });
}
