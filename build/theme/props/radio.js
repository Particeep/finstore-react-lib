import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import { Box } from '@material-ui/core';
import { customTheme } from '../custom.js';

var RadioDefaultBox = function (props) { return (React__default.createElement(Box, __assign({ borderRadius: "50%", height: 16, width: 16, border: 1 }, props))); };
var radio = {
    color: "primary",
    icon: React__default.createElement(RadioDefaultBox, { borderColor: customTheme.inputs.border.focus }),
    checkedIcon: React__default.createElement(RadioDefaultBox, { borderColor: customTheme.palette.primary.main, bgcolor: customTheme.palette.primary.main },
        React__default.createElement(Box, { width: 6, height: 6, borderRadius: "50%", bgcolor: "white", style: {
                position: "relative",
                top: 4,
                left: 4
            } }))
};

export { radio };
//# sourceMappingURL=radio.js.map
