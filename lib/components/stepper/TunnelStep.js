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
var react_1 = __importStar(require("react"));
var TunnelActions_1 = __importDefault(require("./TunnelActions"));
var core_1 = require("@material-ui/core");
var useStyles = core_1.makeStyles(function (theme) { return ({
    root: {
        backgroundColor: "white",
        padding: theme.spacing()
    }
}); });
var TunnelStep = function (_a) {
    var step = _a.step, prev = _a.prev, loading = _a.loading, next = _a.next, isLast = _a.isLast, isMobile = _a.isMobile;
    var classes = useStyles();
    var _b = react_1.useState(), stepData = _b[0], setStepData = _b[1];
    var _c = react_1.useState(true), isValid = _c[0], setIsValid = _c[1];
    var handleNext = function (event) {
        return next(step.id, stepData);
    };
    var handlePrev = function (event) {
        prev();
    };
    return (react_1.default.createElement("div", { className: classes.root },
        react_1.default.createElement(core_1.Fade, { in: true }, react_1.default.cloneElement(step.content, {
            stepData: stepData, setStepData: setStepData, setIsValid: setIsValid
        })),
        react_1.default.createElement(TunnelActions_1.default, { handleNext: handleNext, handlePrev: handlePrev, isValid: isValid, isLast: isLast, loading: loading, isMobile: isMobile })));
};
exports.default = TunnelStep;
//# sourceMappingURL=TunnelStep.js.map