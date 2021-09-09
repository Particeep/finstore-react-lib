"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@material-ui/core");
var react_1 = __importDefault(require("react"));
var useStyles = core_1.makeStyles(function (theme) { return ({
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
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(core_1.Typography, { variant: "subtitle2", display: "inline", className: classes.title },
            title,
            " (",
            itemsSize,
            ")"),
        react_1.default.createElement(core_1.Button, { color: "primary", onClick: action, className: classes.button, disabled: itemsSize === 0 }, actionLabel)));
};
exports.default = ItemsPickerHead;
//# sourceMappingURL=ItemsPickerHead.js.map