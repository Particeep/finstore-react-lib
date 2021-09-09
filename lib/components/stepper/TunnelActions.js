"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@material-ui/core");
var react_1 = __importDefault(require("react"));
var buttons_1 = require("../buttons");
var useStyles = core_1.makeStyles(function (theme) { return ({
    root: {
        display: "flex",
        justifyContent: "flex-end"
    },
    previous: {
        marginRight: theme.spacing()
    }
}); });
var TunnelActions = function (props) {
    var classes = useStyles();
    var handleNext = props.handleNext, handlePrev = props.handlePrev, isValid = props.isValid, isLast = props.isLast, loading = props.loading, isMobile = props.isMobile;
    return (react_1.default.createElement("div", { className: classes.root },
        !isMobile &&
            react_1.default.createElement(buttons_1.Btn, { onClick: handlePrev, color: "secondary", className: classes.previous }, "Previous"),
        react_1.default.createElement(buttons_1.Btn, { onClick: handleNext, disabled: !isValid, loading: loading, color: "secondary", variant: "contained" }, isLast ? "Finish" : "Next")));
};
exports.default = TunnelActions;
//# sourceMappingURL=TunnelActions.js.map