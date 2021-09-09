"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormattedNumbr = void 0;
var react_1 = __importDefault(require("react"));
var react_intl_1 = require("react-intl");
var FormattedNumbr = function (_a) {
    var value = _a.value;
    return (react_1.default.createElement(react_intl_1.FormattedNumber, { value: value }));
};
exports.FormattedNumbr = FormattedNumbr;
//# sourceMappingURL=FormattedNumber.js.map