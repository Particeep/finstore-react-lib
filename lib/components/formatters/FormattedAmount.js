"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormattedNumber = exports.FormattedAmount = exports.DisplayPercent = exports.DisplayAmount = void 0;
var react_1 = __importDefault(require("react"));
var react_intl_1 = require("react-intl");
var i18n_1 = require("../../conf/i18n");
var DisplayAmount = function (_a) {
    var amount = _a.amount, currency = _a.currency;
    return (react_1.default.createElement(exports.FormattedNumber, { value: amount, currency: currency, variant: "currency" }));
};
exports.DisplayAmount = DisplayAmount;
var DisplayPercent = function (_a) {
    var value = _a.value;
    return (react_1.default.createElement(exports.FormattedNumber, { value: value, variant: "percent" }));
};
exports.DisplayPercent = DisplayPercent;
var FormattedAmount = function (_a) {
    var row = _a.row, value = _a.value, _b = _a.variant, variant = _b === void 0 ? "currency" : _b;
    var currency = row.currency ? row.currency : "EUR";
    return react_1.default.createElement(exports.FormattedNumber, { value: value, currency: currency, variant: variant });
};
exports.FormattedAmount = FormattedAmount;
var isValueExist = function (value) { return !!value && value !== i18n_1.T.global.nc; };
var FormattedNumber = function (_a) {
    var value = _a.value, _b = _a.variant, variant = _b === void 0 ? "standard" : _b, _c = _a.currency, currency = _c === void 0 ? "EUR" : _c;
    if (value !== 0 && !value) {
        return react_1.default.createElement(react_1.default.Fragment, null);
    }
    if (variant === "currency") {
        return (react_1.default.createElement(react_intl_1.FormattedNumber, { value: isValueExist(value) ? (value / 100) : 0, style: variant, currency: currency }));
    }
    else if (variant === "currency-standard") {
        return (react_1.default.createElement(react_intl_1.FormattedNumber, { value: isValueExist(value) ? value : 0, style: "currency", currency: currency }));
    }
    else if (variant === "percent") {
        return react_1.default.createElement(react_intl_1.FormattedNumber, { value: value / 100, style: variant, minimumFractionDigits: 2 });
    }
    else {
        return react_1.default.createElement(react_intl_1.FormattedNumber, { value: value, style: variant });
    }
};
exports.FormattedNumber = FormattedNumber;
//# sourceMappingURL=FormattedAmount.js.map