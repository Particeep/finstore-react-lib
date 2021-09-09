import React__default from 'react';
import { makeStyles, Menu, ListSubheader, MenuItem } from '@material-ui/core';
import { Btn } from './Btn.js';

var useStyles = makeStyles(function (theme) { return ({
    paper: {
        marginTop: theme.spacing(4.2)
    }
}); });
var renderActions = function (actions) {
    return actions.filter(function (a) { return a.visible; }).map(function (action, index) {
        if (action.separator) {
            return React__default.createElement(ListSubheader, { key: "separator-" + index, component: "div" }, action.separator);
        }
        else {
            return React__default.createElement(MenuItem, { key: action.label + "-" + index, onClick: action.onClick }, action.label);
        }
    });
};
var ActionMenu = function (props) {
    var classes = useStyles();
    var _a = React__default.useState(undefined), anchorEl = _a[0], setAnchorEl = _a[1];
    var actions = props.actions, actionLabel = props.actionLabel, icon = props.icon, variant = props.variant, color = props.color;
    var handleToggle = function (event) {
        if (!Boolean(anchorEl)) {
            setAnchorEl(event.currentTarget);
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            setAnchorEl(undefined);
        }
    };
    return (React__default.createElement("div", null,
        React__default.createElement(Btn, { endIcon: icon, color: color, variant: variant, onClick: handleToggle }, actionLabel),
        React__default.createElement(Menu, { open: Boolean(anchorEl), anchorEl: anchorEl, onClick: handleToggle, anchorOrigin: {
                vertical: "bottom",
                horizontal: "center"
            }, transformOrigin: {
                vertical: "top",
                horizontal: "center"
            }, classes: { paper: classes.paper }, disableScrollLock: true }, renderActions(actions))));
};

export { ActionMenu };
//# sourceMappingURL=ActionMenu.js.map
