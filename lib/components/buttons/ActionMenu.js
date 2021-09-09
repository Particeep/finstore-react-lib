"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionMenu = void 0;
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var Btn_1 = require("./Btn");
var useStyles = core_1.makeStyles(function (theme) { return ({
    paper: {
        marginTop: theme.spacing(4.2)
    }
}); });
var renderActions = function (actions) {
    return actions.filter(function (a) { return a.visible; }).map(function (action, index) {
        if (action.separator) {
            return react_1.default.createElement(core_1.ListSubheader, { key: "separator-" + index, component: "div" }, action.separator);
        }
        else {
            return react_1.default.createElement(core_1.MenuItem, { key: action.label + "-" + index, onClick: action.onClick }, action.label);
        }
    });
};
var ActionMenu = function (props) {
    var classes = useStyles();
    var _a = react_1.default.useState(undefined), anchorEl = _a[0], setAnchorEl = _a[1];
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
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Btn_1.Btn, { endIcon: icon, color: color, variant: variant, onClick: handleToggle }, actionLabel),
        react_1.default.createElement(core_1.Menu, { open: Boolean(anchorEl), anchorEl: anchorEl, onClick: handleToggle, anchorOrigin: {
                vertical: "bottom",
                horizontal: "center"
            }, transformOrigin: {
                vertical: "top",
                horizontal: "center"
            }, classes: { paper: classes.paper }, disableScrollLock: true }, renderActions(actions))));
};
exports.ActionMenu = ActionMenu;
//# sourceMappingURL=ActionMenu.js.map