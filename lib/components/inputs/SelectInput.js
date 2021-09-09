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
exports.SelectInput = void 0;
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var SelectInput = function (_a) {
    var label = _a.label, options = _a.options, fullWidth = _a.fullWidth, others = __rest(_a, ["label", "options", "fullWidth"]);
    var isFullWidth = typeof fullWidth !== "undefined" ? fullWidth : true;
    return (react_1.default.createElement(core_1.FormControl, { fullWidth: isFullWidth },
        react_1.default.createElement(core_1.InputLabel, null, label),
        react_1.default.createElement(core_1.Select, __assign({}, others), options.map(function (o, index) {
            return react_1.default.createElement(core_1.MenuItem, { key: index + "_" + o.label, value: o.value }, o.label);
        }))));
};
exports.SelectInput = SelectInput;
//# sourceMappingURL=SelectInput.js.map