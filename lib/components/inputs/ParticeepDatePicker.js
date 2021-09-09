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
exports.ParticeepDatePicker = void 0;
var react_1 = __importDefault(require("react"));
var moment_1 = __importDefault(require("moment/moment"));
var pickers_1 = require("@material-ui/pickers");
var i18n_1 = require("../../conf/i18n");
var dateFormat = moment_1.default().localeData().longDateFormat("L");
var ParticeepDatePicker = function (props) {
    var label = props.label, value = props.value, onChange = props.onChange, minDate = props.minDate, maxDate = props.maxDate, clearable = props.clearable, className = props.className;
    return (react_1.default.createElement(pickers_1.DatePicker, __assign({ className: className, placeholder: label, format: dateFormat, value: value, onChange: onChange }, minDate && { minDate: minDate }, maxDate && { maxDate: maxDate }, { clearable: clearable || false, cancelLabel: i18n_1.T.global.cancel, clearLabel: i18n_1.T.global.clear, style: { width: "100%" } })));
};
exports.ParticeepDatePicker = ParticeepDatePicker;
//# sourceMappingURL=ParticeepDatePicker.js.map