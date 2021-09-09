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
exports.radio = void 0;
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var custom_1 = require("../custom");
var RadioDefaultBox = function (props) { return (react_1.default.createElement(core_1.Box, __assign({ borderRadius: "50%", height: 16, width: 16, border: 1 }, props))); };
exports.radio = {
    color: "primary",
    icon: react_1.default.createElement(RadioDefaultBox, { borderColor: custom_1.customTheme.inputs.border.focus }),
    checkedIcon: react_1.default.createElement(RadioDefaultBox, { borderColor: custom_1.customTheme.palette.primary.main, bgcolor: custom_1.customTheme.palette.primary.main },
        react_1.default.createElement(core_1.Box, { width: 6, height: 6, borderRadius: "50%", bgcolor: "white", style: {
                position: "relative",
                top: 4,
                left: 4
            } }))
};
//# sourceMappingURL=radio.js.map