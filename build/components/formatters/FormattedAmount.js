import React__default from 'react';
import { FormattedNumber as FormattedNumber$1 } from '../../node_modules/react-intl/lib/index.js';
import { T } from '../../conf/i18n.js';

var DisplayAmount = function (_a) {
    var amount = _a.amount, currency = _a.currency;
    return (React__default.createElement(FormattedNumber, { value: amount, currency: currency, variant: "currency" }));
};
var DisplayPercent = function (_a) {
    var value = _a.value;
    return (React__default.createElement(FormattedNumber, { value: value, variant: "percent" }));
};
var FormattedAmount = function (_a) {
    var row = _a.row, value = _a.value, _b = _a.variant, variant = _b === void 0 ? "currency" : _b;
    var currency = row.currency ? row.currency : "EUR";
    return React__default.createElement(FormattedNumber, { value: value, currency: currency, variant: variant });
};
var isValueExist = function (value) { return !!value && value !== T.global.nc; };
var FormattedNumber = function (_a) {
    var value = _a.value, _b = _a.variant, variant = _b === void 0 ? "standard" : _b, _c = _a.currency, currency = _c === void 0 ? "EUR" : _c;
    if (value !== 0 && !value) {
        return React__default.createElement(React__default.Fragment, null);
    }
    if (variant === "currency") {
        return (React__default.createElement(FormattedNumber$1, { value: isValueExist(value) ? (value / 100) : 0, style: variant, currency: currency }));
    }
    else if (variant === "currency-standard") {
        return (React__default.createElement(FormattedNumber$1, { value: isValueExist(value) ? value : 0, style: "currency", currency: currency }));
    }
    else if (variant === "percent") {
        return React__default.createElement(FormattedNumber$1, { value: value / 100, style: variant, minimumFractionDigits: 2 });
    }
    else {
        return React__default.createElement(FormattedNumber$1, { value: value, style: variant });
    }
};

export { DisplayAmount, DisplayPercent, FormattedAmount, FormattedNumber };
//# sourceMappingURL=FormattedAmount.js.map
