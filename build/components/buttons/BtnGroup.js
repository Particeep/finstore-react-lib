import React__default from 'react';
import { ButtonGroup, Button } from '@material-ui/core';

var BtnGroup = function (props) {
    var buttons = props.buttons, variant = props.variant, color = props.color;
    return (React__default.createElement(ButtonGroup, { variant: variant, color: color }, buttons.map(function (button) { return (React__default.createElement(Button, { key: button.label, onClick: button.onClick, endIcon: button.icon }, button.label)); })));
};

export { BtnGroup };
//# sourceMappingURL=BtnGroup.js.map
