"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormattedBoolean = void 0;
var react_1 = __importDefault(require("react"));
var i18n_1 = require("../../conf/i18n");
var FormattedBoolean = function (_a) {
    var value = _a.value;
    if (value) {
        return react_1.default.createElement(react_1.default.Fragment, null, i18n_1.T.global.yes);
    }
    else {
        return react_1.default.createElement(react_1.default.Fragment, null, i18n_1.T.global.no);
    }
};
exports.FormattedBoolean = FormattedBoolean;
//# sourceMappingURL=FormattedBoolean.js.map