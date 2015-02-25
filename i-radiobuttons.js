module.exports = function (window) {
    "use strict";

    require('polyfill/polyfill-base.js');

    var itagCore =  require('itags.core')(window),
        itagName = 'i-radiobuttons', // <-- define your own itag-name here
        DOCUMENT = window.document,
        ITSA = window.ITSA,
        Itag;

    if (!window.ITAGS[itagName]) {

        Itag = DOCUMENT.createItag(itagName, {
            attrs: {
            },

            init: function() {
            },

            render: function() {
            },

            sync: function() {
            },

            destroy: function() {
            }
        });

        window.ITAGS[itagName] = Itag;
    }

    return window.ITAGS[itagName];
};
