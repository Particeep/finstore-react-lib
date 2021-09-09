"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var buttons_1 = require("../buttons");
var KeyboardArrowLeft_1 = __importDefault(require("@material-ui/icons/KeyboardArrowLeft"));
var core_1 = require("@material-ui/core");
var react_1 = __importDefault(require("react"));
var useStyles = core_1.makeStyles(function (theme) { return ({
    root: {
        justifyContent: "end",
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(),
        height: +theme.card.header.size.big - 4
    },
    labelContainer: {
        justifyContent: "center",
        display: "flex",
        flexGrow: 0.5
    },
    label: {
        color: theme.palette.text.primary
    },
    icon: {
        height: 22,
        width: 22,
        backgroundColor: theme.palette.secondary.main,
        borderRadius: "50%",
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        paddingTop: theme.spacing(0.4)
    }
}); });
var MobileStepper = function (_a) {
    var stepsSize = _a.stepsSize, currentStep = _a.currentStep, stepName = _a.stepName, onPrev = _a.onPrev;
    var classes = useStyles();
    return (react_1.default.createElement(core_1.MobileStepper, { steps: stepsSize, activeStep: currentStep, backButton: react_1.default.createElement("div", { className: classes.root },
            react_1.default.createElement(buttons_1.IconBtn, { onClick: onPrev, disabled: currentStep === 0 },
                react_1.default.createElement(KeyboardArrowLeft_1.default, null)),
            react_1.default.createElement("div", { className: classes.labelContainer },
                react_1.default.createElement(core_1.StepLabel, { classes: { label: classes.label }, icon: react_1.default.createElement("span", { className: classes.icon }, currentStep + 1) }, stepName))), nextButton: react_1.default.createElement(react_1.default.Fragment, null) }));
};
exports.default = MobileStepper;
//# sourceMappingURL=MobileStepper.js.map