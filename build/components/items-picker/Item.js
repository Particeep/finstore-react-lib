import React__default from 'react';
import { makeStyles } from '@material-ui/core';
import { IconBtn } from '../buttons/IconBtn.js';
import '../buttons/ActionMenu.js';
import AddCircle from '../../node_modules/@material-ui/icons/esm/AddCircle.js';
import RemoveCircle from '../../node_modules/@material-ui/icons/esm/RemoveCircle.js';

var useStyles = makeStyles(function (theme) { return ({
    root: {
        display: "flex",
        alignItems: "center",
        minHeight: 60,
        borderBottom: "1px solid " + theme.palette.divider,
        padding: theme.spacing(0, 2)
    },
    itemDesc: {
        display: "flex",
        padding: theme.spacing(),
        flex: 1
    },
    addIcon: {
        color: theme.palette.success.main
    },
    removeIcon: {
        color: theme.palette.error.main
    }
}); });
var Item = function (_a) {
    var item = _a.item, action = _a.action, toggleItem = _a.toggleItem, renderItem = _a.renderItem;
    var classes = useStyles();
    return (React__default.createElement("div", { className: classes.root },
        React__default.createElement("div", { className: classes.itemDesc }, renderItem(item)),
        React__default.createElement(IconBtn, { onClick: toggleItem(item, action) }, action === "SELECT" ?
            React__default.createElement(AddCircle, { classes: { root: classes.addIcon } })
            : React__default.createElement(RemoveCircle, { classes: { root: classes.removeIcon } }))));
};

export { Item as default };
//# sourceMappingURL=Item.js.map
