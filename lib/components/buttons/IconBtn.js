"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconBtn = void 0;
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var useStyles = core_1.makeStyles(function () { return ({
    root: {
        color: "inherit",
        width: 40,
        height: 40
    }
}); });
var IconBtn = function (_a) {
    var loading = _a.loading, children = _a.children, disabled = _a.disabled, title = _a.title, props = __rest(_a, ["loading", "children", "disabled", "title"]);
    var classes = useStyles();
    return (react_1.default.createElement(core_1.Tooltip, { title: title, disableHoverListener: !title, disableFocusListener: !title },
        react_1.default.createElement(core_1.IconButton, __assign({ disabled: disabled || loading, classes: { root: classes.root } }, props),
            !loading && children,
            loading && react_1.default.createElement(core_1.CircularProgress, { size: 23 }))));
};
exports.IconBtn = IconBtn;
//# sourceMappingURL=IconBtn.js.map