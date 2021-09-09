"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BtnGroup = void 0;
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var BtnGroup = function (props) {
    var buttons = props.buttons, variant = props.variant, color = props.color;
    return (react_1.default.createElement(core_1.ButtonGroup, { variant: variant, color: color }, buttons.map(function (button) { return (react_1.default.createElement(core_1.Button, { key: button.label, onClick: button.onClick, endIcon: button.icon }, button.label)); })));
};
exports.BtnGroup = BtnGroup;
//# sourceMappingURL=BtnGroup.js.map