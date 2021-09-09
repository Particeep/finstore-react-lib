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
exports.finstoreTheme = void 0;
var styles_1 = require("@material-ui/core/styles");
var custom_1 = require("./custom");
var props_1 = require("./props");
var overrides_1 = require("./overrides");
exports.finstoreTheme = styles_1.createMuiTheme(__assign({ props: props_1.props, overrides: overrides_1.overrides }, custom_1.customTheme));
//# sourceMappingURL=index.js.map