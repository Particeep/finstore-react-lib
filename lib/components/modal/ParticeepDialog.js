"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParticeepDialog = void 0;
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var ParticeepDialogTitle_1 = __importDefault(require("./ParticeepDialogTitle"));
var styles_1 = require("@material-ui/core/styles");
var useStyles = styles_1.makeStyles(function (theme) { return ({
    content: {
        paddingTop: function (props) { return props.fullScreen ? theme.spacing(5) : 0; }
    }
}); });
var ParticeepDialog = function (props) {
    var classes = useStyles(props);
    var title = props.title, onClose = props.onClose, isOpen = props.isOpen, fullScreen = props.fullScreen, maxWidth = props.maxWidth, children = props.children, action = props.action, className = props.className, description = props.description;
    return (react_1.default.createElement(core_1.Dialog, { open: isOpen, maxWidth: maxWidth || "sm", className: className, fullScreen: fullScreen, disableEnforceFocus: true, fullWidth: true },
        title &&
            react_1.default.createElement(ParticeepDialogTitle_1.default, { onClose: onClose, fullScreen: fullScreen, title: title, description: description }),
        react_1.default.createElement(core_1.DialogContent, { className: classes.content }, children),
        action &&
            react_1.default.createElement(core_1.DialogActions, null, action)));
};
exports.ParticeepDialog = ParticeepDialog;
//# sourceMappingURL=ParticeepDialog.js.map