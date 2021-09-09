"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var buttons_1 = require("../buttons");
var icons_1 = require("@material-ui/icons");
var core_1 = require("@material-ui/core");
var useStyles = core_1.makeStyles(function (theme) { return ({
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
    return (react_1.default.createElement("div", { className: classes.root },
        react_1.default.createElement("div", { className: classes.itemDesc }, renderItem(item)),
        react_1.default.createElement(buttons_1.IconBtn, { onClick: toggleItem(item, action) }, action === "SELECT" ?
            react_1.default.createElement(icons_1.AddCircle, { classes: { root: classes.addIcon } })
            : react_1.default.createElement(icons_1.RemoveCircle, { classes: { root: classes.removeIcon } }))));
};
exports.default = Item;
//# sourceMappingURL=Item.js.map