import React__default, { useState } from 'react';
import { makeStyles, useMediaQuery, Stepper, Step, StepLabel } from '@material-ui/core';
import TunnelStep from './TunnelStep.js';
import MobileStepper from './MobileStepper.js';

var useStyles = makeStyles(function (theme) { return ({
    root: {
        border: "1px solid " + theme.inputs.border.color,
        borderRadius: theme.card.borderRadius,
        boxShadow: theme.card.boxShadow,
        overflow: "hidden"
    }
}); });
var TunnelStepper = function (props) {
    var classes = useStyles();
    var isMobile = useMediaQuery("(max-width: 450px)");
    var steps = props.steps, current = props.current, onNext = props.onNext;
    var initialStep = current ? current : 0;
    var _a = useState(), loading = _a[0], setLoading = _a[1];
    var _b = useState(initialStep), currentStep = _b[0], setCurrentStep = _b[1];
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
    return (React__default.createElement("div", { className: classes.root },
        !isMobile ?
            React__default.createElement(Stepper, { activeStep: currentStep }, steps.map(function (step) {
                return React__default.createElement(Step, { key: "step_" + step.id },
                    React__default.createElement(StepLabel, null, step.name));
            })) :
            React__default.createElement(MobileStepper, { currentStep: currentStep, stepsSize: steps.length, onPrev: prev, stepName: steps[currentStep].name }),
        React__default.createElement(TunnelStep, { step: steps[currentStep], next: next, prev: prev, loading: loading, isLast: isLast, isMobile: isMobile })));
};

export { TunnelStepper };
//# sourceMappingURL=TunnelStepper.js.map
