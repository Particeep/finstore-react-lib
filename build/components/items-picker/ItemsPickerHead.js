import { makeStyles, Typography, Button } from '@material-ui/core';
import React__default from 'react';

var useStyles = makeStyles(function (theme) { return ({
    title: {
        fontWeight: 600,
        padding: theme.spacing(0, 1)
    },
    button: {
        textDecorationLine: "underline",
        padding: theme.spacing(0, 1)
    }
}); });
var ItemsPickerHead = function (_a) {
    var title = _a.title, itemsSize = _a.itemsSize, action = _a.action, actionLabel = _a.actionLabel;
    var classes = useStyles();
    return (React__default.createElement("div", null,
        React__default.createElement(Typography, { variant: "subtitle2", display: "inline", className: classes.title },
            title,
            " (",
            itemsSize,
            ")"),
        React__default.createElement(Button, { color: "primary", onClick: action, className: classes.button, disabled: itemsSize === 0 }, actionLabel)));
};

export { ItemsPickerHead as default };
//# sourceMappingURL=ItemsPickerHead.js.map
