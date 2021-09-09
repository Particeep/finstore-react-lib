"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormattedGender = void 0;
var react_1 = __importDefault(require("react"));
var i18n_1 = require("../../conf/i18n");
var FormattedGender = function (_a) {
    var value = _a.value;
    if (value === "MAN") {
        return react_1.default.createElement(react_1.default.Fragment, null, i18n_1.T.user.gender.MAN);
    }
    else if (value === "WOMAN") {
        return react_1.default.createElement(react_1.default.Fragment, null, i18n_1.T.user.gender.WOMAN);
    }
    else {
        return react_1.default.createElement(react_1.default.Fragment, null, i18n_1.T.global.nc);
    }
};
exports.FormattedGender = FormattedGender;
//# sourceMappingURL=FormattedGender.js.map