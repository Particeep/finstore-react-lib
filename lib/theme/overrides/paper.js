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
exports.paper = void 0;
var custom_1 = require("../custom");
var defaultPaper = {
    boxShadow: "none",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: custom_1.customTheme.inputs.border.color,
    borderRadius: custom_1.customTheme.inputs.border.radius,
    background: custom_1.customTheme.palette.background.paper
};
exports.paper = {
    elevation1: __assign({}, defaultPaper),
    elevation8: __assign({}, defaultPaper)
};
//# sourceMappingURL=paper.js.map