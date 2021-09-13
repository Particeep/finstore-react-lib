import React from 'react';
import { Button, CircularProgress, makeStyles, Tooltip, IconButton, Menu, ListSubheader, MenuItem, ButtonGroup } from '@material-ui/core';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var Btn = function (_a) {
    var loading = _a.loading, children = _a.children, props = __rest(_a, ["loading", "children"]);
    props.disabled = props.disabled || loading;
    var loadingColor = props.color;
    return (React.createElement(Button, __assign({}, props),
        !loading && children,
        loading && React.createElement(CircularProgress, { color: loadingColor, size: 24 })));
};

var useStyles$1 = makeStyles(function () { return ({
    root: {
        color: "inherit",
        width: 40,
        height: 40
    }
}); });
var IconBtn = function (_a) {
    var loading = _a.loading, children = _a.children, disabled = _a.disabled, title = _a.title, props = __rest(_a, ["loading", "children", "disabled", "title"]);
    var classes = useStyles$1();
    return (React.createElement(Tooltip, { title: title, disableHoverListener: !title, disableFocusListener: !title },
        React.createElement(IconButton, __assign({ disabled: disabled || loading, classes: { root: classes.root } }, props),
            !loading && children,
            loading && React.createElement(CircularProgress, { size: 23 }))));
};

var useStyles = makeStyles(function (theme) { return ({
    paper: {
        marginTop: theme.spacing(4.2)
    }
}); });
var renderActions = function (actions) {
    return actions.filter(function (a) { return a.visible; }).map(function (action, index) {
        if (action.separator) {
            return React.createElement(ListSubheader, { key: "separator-" + index, component: "div" }, action.separator);
        }
        else {
            return React.createElement(MenuItem, { key: action.label + "-" + index, onClick: action.onClick }, action.label);
        }
    });
};
var ActionMenu = function (props) {
    var classes = useStyles();
    var _a = React.useState(undefined), anchorEl = _a[0], setAnchorEl = _a[1];
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
    return (React.createElement("div", null,
        React.createElement(Btn, { endIcon: icon, color: color, variant: variant, onClick: handleToggle }, actionLabel),
        React.createElement(Menu, { open: Boolean(anchorEl), anchorEl: anchorEl, onClick: handleToggle, anchorOrigin: {
                vertical: "bottom",
                horizontal: "center"
            }, transformOrigin: {
                vertical: "top",
                horizontal: "center"
            }, classes: { paper: classes.paper }, disableScrollLock: true }, renderActions(actions))));
};

var BtnGroup = function (props) {
    var buttons = props.buttons, variant = props.variant, color = props.color;
    return (React.createElement(ButtonGroup, { variant: variant, color: color }, buttons.map(function (button) { return (React.createElement(Button, { key: button.label, onClick: button.onClick, endIcon: button.icon }, button.label)); })));
};

var Gender;
(function (Gender) {
    Gender["MAN"] = "MAN";
    Gender["WOMAN"] = "WOMAN";
})(Gender || (Gender = {}));
var RelativeType;
(function (RelativeType) {
    RelativeType["CONJOINT"] = "CONJOINT";
    RelativeType["USUFRUCTUARY"] = "USUFRUCTUARY";
})(RelativeType || (RelativeType = {}));

var BankAccountStatus;
(function (BankAccountStatus) {
    BankAccountStatus["PENDING"] = "PENDING";
    BankAccountStatus["VALIDATED"] = "VALIDATED";
    BankAccountStatus["REFUSED"] = "REFUSED";
    BankAccountStatus["DEACTIVATED"] = "DEACTIVATED";
})(BankAccountStatus || (BankAccountStatus = {}));

export { ActionMenu, BankAccountStatus, Btn, BtnGroup, Gender, IconBtn, RelativeType };
//# sourceMappingURL=index.esm.js.map
