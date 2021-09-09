"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var icons_1 = require("@material-ui/icons");
var useStyles = core_1.makeStyles(function (theme) { return ({
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
    return (react_1.default.createElement(core_1.DialogTitle, { className: classes.root }, fullScreen ?
        react_1.default.createElement(core_1.AppBar, null,
            react_1.default.createElement(core_1.Toolbar, { className: classes.toolBar },
                react_1.default.createElement(core_1.IconButton, { color: "inherit", onClick: onClose },
                    react_1.default.createElement(icons_1.Close, null)),
                title)) :
        react_1.default.createElement("div", null,
            react_1.default.createElement(core_1.Typography, { className: classes.title }, title),
            react_1.default.createElement(core_1.Typography, { className: classes.description }, description),
            onClose ? (react_1.default.createElement(core_1.IconButton, { "aria-label": "Close", className: classes.closeButton, onClick: onClose },
                react_1.default.createElement(icons_1.Close, null))) : react_1.default.createElement(react_1.default.Fragment, null))));
};
exports.default = ParticeepDialogTitle;
//# sourceMappingURL=ParticeepDialogTitle.js.map