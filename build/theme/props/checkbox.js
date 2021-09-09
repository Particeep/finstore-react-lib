import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import { Box } from '@material-ui/core';
import { customTheme } from '../custom.js';
import Done from '../../node_modules/@material-ui/icons/esm/Done.js';
import Remove from '../../node_modules/@material-ui/icons/esm/Remove.js';

var CheckboxDefaultBox = function (props) { return (React__default.createElement(Box, __assign({ borderRadius: 4, height: 15, width: 15, border: 1, display: "flex" }, props))); };
var iconStyle = {
    color: "white",
    position: "relative",
    left: -1,
    top: -1,
    fontSize: 15
};
var checkbox = {
    color: "primary",
    icon: React__default.createElement(CheckboxDefaultBox, { borderColor: customTheme.inputs.border.focus }),
    checkedIcon: React__default.createElement(CheckboxDefaultBox, { borderColor: customTheme.palette.primary.main, bgcolor: customTheme.palette.primary.main },
        React__default.createElement(Done, { style: iconStyle })),
    indeterminateIcon: React__default.createElement(CheckboxDefaultBox, { borderColor: customTheme.palette.primary.main, bgcolor: customTheme.palette.primary.main },
        React__default.createElement(Remove, { style: iconStyle }))
};

export { checkbox };
//# sourceMappingURL=checkbox.js.map
