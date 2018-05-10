"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
* @Method: returns the localized form of words
* @Param: {string}
* @Retrun: {string}
*/
var getTagalized;
(function (getTagalized_1) {
    var getTagalized = /** @class */ (function () {
        function getTagalized(message) {
            this.message = message;
            this.word = message;
        }
        return getTagalized;
    }());
    function localBatang(bigkas) {
        return bigkas.message + "-EY";
    }
    function localIlong(bigkas) {
        return bigkas.message + "-OY";
    }
    function localCeb(bigkas) {
        return bigkas.message + "-IY";
    }
    var user = new getTagalized("Cat");
    document.body.innerHTML = localBatang(user);
})(getTagalized = exports.getTagalized || (exports.getTagalized = {}));
