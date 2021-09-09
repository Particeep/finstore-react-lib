import React__default from 'react';
import { Dialog, DialogContent, DialogActions } from '@material-ui/core';
import ParticeepDialogTitle from './ParticeepDialogTitle.js';
import { makeStyles } from '@material-ui/core/styles';

var useStyles = makeStyles(function (theme) { return ({
    content: {
        paddingTop: function (props) { return props.fullScreen ? theme.spacing(5) : 0; }
    }
}); });
var ParticeepDialog = function (props) {
    var classes = useStyles(props);
    var title = props.title, onClose = props.onClose, isOpen = props.isOpen, fullScreen = props.fullScreen, maxWidth = props.maxWidth, children = props.children, action = props.action, className = props.className, description = props.description;
    return (React__default.createElement(Dialog, { open: isOpen, maxWidth: maxWidth || "sm", className: className, fullScreen: fullScreen, disableEnforceFocus: true, fullWidth: true },
        title &&
            React__default.createElement(ParticeepDialogTitle, { onClose: onClose, fullScreen: fullScreen, title: title, description: description }),
        React__default.createElement(DialogContent, { className: classes.content }, children),
        action &&
            React__default.createElement(DialogActions, null, action)));
};

export { ParticeepDialog };
//# sourceMappingURL=ParticeepDialog.js.map
