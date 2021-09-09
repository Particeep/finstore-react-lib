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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TunnelStepper = void 0;
var react_1 = __importStar(require("react"));
var core_1 = require("@material-ui/core");
var index_1 = require("./index");
var useStyles = core_1.makeStyles(function (theme) { return ({
    root: {
        border: "1px solid " + theme.inputs.border.color,
        borderRadius: theme.card.borderRadius,
        boxShadow: theme.card.boxShadow,
        overflow: "hidden"
    }
}); });
var TunnelStepper = function (props) {
    var classes = useStyles();
    var isMobile = core_1.useMediaQuery("(max-width: 450px)");
    var steps = props.steps, current = props.current, onNext = props.onNext;
    var initialStep = current ? current : 0;
    var _a = react_1.useState(), loading = _a[0], setLoading = _a[1];
    var _b = react_1.useState(initialStep), currentStep = _b[0], setCurrentStep = _b[1];
    var isLast = currentStep + 1 === steps.length;
    var prev = function () {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };
    var next = function (stepId, data) {
        setLoading(true);
        return onNext(stepId, data).then(function () {
            if (currentStep < steps.length - 1) {
                setCurrentStep(currentStep + 1);
            }
            setLoading(false);
        });
    };
    return (react_1.default.createElement("div", { className: classes.root },
        !isMobile ?
            react_1.default.createElement(core_1.Stepper, { activeStep: currentStep }, steps.map(function (step) {
                return react_1.default.createElement(core_1.Step, { key: "step_" + step.id },
                    react_1.default.createElement(core_1.StepLabel, null, step.name));
            })) :
            react_1.default.createElement(index_1.MobileStepper, { currentStep: currentStep, stepsSize: steps.length, onPrev: prev, stepName: steps[currentStep].name }),
        react_1.default.createElement(index_1.TunnelStep, { step: steps[currentStep], next: next, prev: prev, loading: loading, isLast: isLast, isMobile: isMobile })));
};
exports.TunnelStepper = TunnelStepper;
//# sourceMappingURL=TunnelStepper.js.map