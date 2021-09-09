import React__default from 'react';
import { makeStyles, DialogTitle, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import Close from '../../node_modules/@material-ui/icons/esm/Close.js';

var useStyles = makeStyles(function (theme) { return ({
    closeButton: {
        position: "absolute",
        right: theme.spacing(),
        top: theme.spacing(),
        color: theme.palette.grey[500]
    },
    title: {
        fontWeight: 600
    },
    description: {
        color: theme.palette.text.secondary
    },
    toolBar: {
        color: "white"
    }
}); });
var ParticeepDialogTitle = function (props) {
    var classes = useStyles();
    var onClose = props.onClose, fullScreen = props.fullScreen, title = props.title, description = props.description;
    return (React__default.createElement(DialogTitle, { className: classes.root }, fullScreen ?
        React__default.createElement(AppBar, null,
            React__default.createElement(Toolbar, { className: classes.toolBar },
                React__default.createElement(IconButton, { color: "inherit", onClick: onClose },
                    React__default.createElement(Close, null)),
                title)) :
        React__default.createElement("div", null,
            React__default.createElement(Typography, { className: classes.title }, title),
            React__default.createElement(Typography, { className: classes.description }, description),
            onClose ? (React__default.createElement(IconButton, { "aria-label": "Close", className: classes.closeButton, onClick: onClose },
                React__default.createElement(Close, null))) : React__default.createElement(React__default.Fragment, null))));
};

export { ParticeepDialogTitle as default };
//# sourceMappingURL=ParticeepDialogTitle.js.map
