"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormattedLegalType = void 0;
var react_1 = __importDefault(require("react"));
var i18n_1 = require("../../conf/i18n");
var FormattedLegalType = function (_a) {
    var value = _a.value;
    if (value === "CONJOINT") {
        return react_1.default.createElement(react_1.default.Fragment, null, i18n_1.T.user.cosuscriber.type.CONJOINT);
    }
    else if (value === "USUFRUCTUARY") {
        return react_1.default.createElement(react_1.default.Fragment, null, i18n_1.T.user.cosuscriber.type.USUFRUCTUARY);
    }
    else {
        return react_1.default.createElement(react_1.default.Fragment, null, i18n_1.T.global.nc);
    }
};
exports.FormattedLegalType = FormattedLegalType;
//# sourceMappingURL=FormattedLegalType.js.map