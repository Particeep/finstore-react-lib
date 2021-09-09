import { __rest, __assign } from '../../node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

var SelectInput = function (_a) {
    var label = _a.label, options = _a.options, fullWidth = _a.fullWidth, others = __rest(_a, ["label", "options", "fullWidth"]);
    var isFullWidth = typeof fullWidth !== "undefined" ? fullWidth : true;
    return (React__default.createElement(FormControl, { fullWidth: isFullWidth },
        React__default.createElement(InputLabel, null, label),
        React__default.createElement(Select, __assign({}, others), options.map(function (o, index) {
            return React__default.createElement(MenuItem, { key: index + "_" + o.label, value: o.value }, o.label);
        }))));
};

export { SelectInput };
//# sourceMappingURL=SelectInput.js.map
