import React__default from 'react';
import { makeStyles, MobileStepper as MobileStepper$1, StepLabel } from '@material-ui/core';
import { IconBtn } from '../buttons/IconBtn.js';
import '../buttons/ActionMenu.js';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';

var useStyles = makeStyles(function (theme) { return ({
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
    return (React__default.createElement(MobileStepper$1, { steps: stepsSize, activeStep: currentStep, backButton: React__default.createElement("div", { className: classes.root },
            React__default.createElement(IconBtn, { onClick: onPrev, disabled: currentStep === 0 },
                React__default.createElement(KeyboardArrowLeft, null)),
            React__default.createElement("div", { className: classes.labelContainer },
                React__default.createElement(StepLabel, { classes: { label: classes.label }, icon: React__default.createElement("span", { className: classes.icon }, currentStep + 1) }, stepName))), nextButton: React__default.createElement(React__default.Fragment, null) }));
};

export { MobileStepper as default };
//# sourceMappingURL=MobileStepper.js.map
