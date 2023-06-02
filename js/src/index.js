"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.regroup = void 0;
function regroup(arr, defSelector) {
    var result = [];
    return arr.map(function (el) { return ({ ds: defSelector(el), m: el }); })
        .reduce(function (prev, cur) {
        var pres = __assign({}, prev);
        if (Object.keys(prev).filter(function (k) { return k === cur.ds; }).length > 0) {
            pres[cur.ds].push(cur.m);
        }
        else {
            pres[cur.ds] = [cur.m];
        }
        return pres;
    }, {});
}
exports.regroup = regroup;
