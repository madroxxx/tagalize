"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
* @Method: returns the localized form of words
* @Param: {string}
* @Retrun: {string}
*/
var getTagalized = /** @class */ (function () {
    function getTagalized() {
    }
    getTagalized.prototype.localBatang = function (str) {
        return str + "-EY";
    };
    getTagalized.prototype.localIlong = function (str) {
        return str + "-OY";
    };
    getTagalized.prototype.localCeb = function (str) {
        return str + "-IY";
    };
    return getTagalized;
}());
exports.getTagalized = getTagalized;
