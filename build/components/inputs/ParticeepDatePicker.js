import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import moment from '../../node_modules/moment/moment.js';
import { T } from '../../conf/i18n.js';
import { DatePicker } from '../../node_modules/@material-ui/pickers/esm/DatePicker.js';

var dateFormat = moment().localeData().longDateFormat("L");
var ParticeepDatePicker = function (props) {
    var label = props.label, value = props.value, onChange = props.onChange, minDate = props.minDate, maxDate = props.maxDate, clearable = props.clearable, className = props.className;
    return (React__default.createElement(DatePicker, __assign({ className: className, placeholder: label, format: dateFormat, value: value, onChange: onChange }, minDate && { minDate: minDate }, maxDate && { maxDate: maxDate }, { clearable: clearable || false, cancelLabel: T.global.cancel, clearLabel: T.global.clear, style: { width: "100%" } })));
};

export { ParticeepDatePicker };
//# sourceMappingURL=ParticeepDatePicker.js.map
