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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkbox = void 0;
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var custom_1 = require("../custom");
var icons_1 = require("@material-ui/icons");
var CheckboxDefaultBox = function (props) { return (react_1.default.createElement(core_1.Box, __assign({ borderRadius: 4, height: 15, width: 15, border: 1, display: "flex" }, props))); };
var iconStyle = {
    color: "white",
    position: "relative",
    left: -1,
    top: -1,
    fontSize: 15
};
exports.checkbox = {
    color: "primary",
    icon: react_1.default.createElement(CheckboxDefaultBox, { borderColor: custom_1.customTheme.inputs.border.focus }),
    checkedIcon: react_1.default.createElement(CheckboxDefaultBox, { borderColor: custom_1.customTheme.palette.primary.main, bgcolor: custom_1.customTheme.palette.primary.main },
        react_1.default.createElement(icons_1.Done, { style: iconStyle })),
    indeterminateIcon: react_1.default.createElement(CheckboxDefaultBox, { borderColor: custom_1.customTheme.palette.primary.main, bgcolor: custom_1.customTheme.palette.primary.main },
        react_1.default.createElement(icons_1.Remove, { style: iconStyle }))
};
//# sourceMappingURL=checkbox.js.map