"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormattedDateTime = void 0;
var react_1 = __importDefault(require("react"));
var react_intl_1 = require("react-intl");
var moment_1 = __importDefault(require("moment"));
var i18n_1 = require("../../conf/i18n");
var FormattedDateTime = function (_a) {
    var value = _a.value;
    if (value && moment_1.default(value).isValid()) {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(react_intl_1.FormattedDate, { value: value }),
            " ",
            react_1.default.createElement(react_intl_1.FormattedTime, { value: value, format: "24hour" })));
    }
    else {
        return (react_1.default.createElement(react_1.default.Fragment, null, i18n_1.T.global.nc));
    }
};
exports.FormattedDateTime = FormattedDateTime;
//# sourceMappingURL=FormattedDateTime.js.map