"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
* @Method: returns the localized form of words
* @Param: {string}
* @Retrun: {string}
*/
var getTagalized;
(function (getTagalized) {
    function localBatang(str) {
        return str + "-EY";
    }
    getTagalized.localBatang = localBatang;
    function localIlong(str) {
        return str + "-OY";
    }
    getTagalized.localIlong = localIlong;
    function localCeb(str) {
        return str + "-IY";
    }
    getTagalized.localCeb = localCeb;
})(getTagalized = exports.getTagalized || (exports.getTagalized = {}));
