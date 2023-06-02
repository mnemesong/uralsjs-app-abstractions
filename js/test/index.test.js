"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert = __importStar(require("assert"));
var src_1 = require("../src");
var mocha_1 = require("mocha");
(0, mocha_1.describe)("test regroup", function () {
    (0, mocha_1.it)("test1", function () {
        var models = [
            { header: "aboba", sel: "1" },
            { header: "jujuga", sel: "3" },
            { header: "3214!", sel: "1" },
        ];
        var grouped = (0, src_1.regroup)(models, function (m) { return m.sel; });
        var nominal = {
            "1": [
                { header: "aboba", sel: "1" },
                { header: "3214!", sel: "1" },
            ],
            "3": [
                { header: "jujuga", sel: "3" },
            ]
        };
        assert.deepEqual(nominal, grouped);
    });
});
