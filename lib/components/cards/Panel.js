"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Panel = void 0;
var react_1 = __importStar(require("react"));
var clsx_1 = __importDefault(require("clsx"));
var core_1 = require("@material-ui/core");
var ExpandMore_1 = __importDefault(require("@material-ui/icons/ExpandMore"));
var useStyles = core_1.makeStyles(function (theme) { return ({
    noPadding: {
        padding: 0
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest
        })
    },
    expandOpen: {
        transform: "rotate(180deg)"
    }
}); });
var Panel = function (props) {
    var _a;
    var classes = useStyles();
    var children = props.children, header = props.header, subheader = props.subheader, actions = props.actions, noPadding = props.noPadding, loading = props.loading, isExpandable = props.isExpandable, defaultClosed = props.defaultClosed;
    var _b = react_1.useState(!isExpandable || (isExpandable && !defaultClosed)), expanded = _b[0], setExpanded = _b[1];
    var handleExpandClick = function () {
        setExpanded(!expanded);
    };
    return (react_1.default.createElement(core_1.Card, null,
        react_1.default.createElement(core_1.CardHeader, { title: header, subheader: subheader, action: isExpandable &&
                react_1.default.createElement(core_1.IconButton, { className: clsx_1.default(classes.expand, (_a = {},
                        _a[classes.expandOpen] = expanded,
                        _a)), onClick: handleExpandClick },
                    react_1.default.createElement(ExpandMore_1.default, null)) }),
        loading &&
            react_1.default.createElement(core_1.LinearProgress, null),
        react_1.default.createElement(core_1.Collapse, { in: expanded, timeout: "auto", unmountOnExit: true },
            react_1.default.createElement(core_1.CardContent, { classes: { root: noPadding && classes.noPadding } }, children),
            actions &&
                react_1.default.createElement(core_1.CardActions, null, actions))));
};
exports.Panel = Panel;
//# sourceMappingURL=Panel.js.map