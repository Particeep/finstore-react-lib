"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormattedDate = void 0;
var react_1 = __importDefault(require("react"));
var react_intl_1 = require("react-intl");
var FormattedDate = function (_a) {
    var value = _a.value;
    return (react_1.default.createElement(react_intl_1.FormattedDate, { value: value, year: "2-digit", month: "2-digit", day: "2-digit" }));
};
exports.FormattedDate = FormattedDate;
//# sourceMappingURL=FormattedDate.js.map