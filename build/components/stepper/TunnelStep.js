import React__default, { useState } from 'react';
import TunnelActions from './TunnelActions.js';
import { makeStyles, Fade } from '@material-ui/core';

var useStyles = makeStyles(function (theme) { return ({
    root: {
        backgroundColor: "white",
        padding: theme.spacing()
    }
}); });
var TunnelStep = function (_a) {
    var step = _a.step, prev = _a.prev, loading = _a.loading, next = _a.next, isLast = _a.isLast, isMobile = _a.isMobile;
    var classes = useStyles();
    var _b = useState(), stepData = _b[0], setStepData = _b[1];
    var _c = useState(true), isValid = _c[0], setIsValid = _c[1];
    var handleNext = function (event) {
        return next(step.id, stepData);
    };
    var handlePrev = function (event) {
        prev();
    };
    return (React__default.createElement("div", { className: classes.root },
        React__default.createElement(Fade, { in: true }, React__default.cloneElement(step.content, {
            stepData: stepData, setStepData: setStepData, setIsValid: setIsValid
        })),
        React__default.createElement(TunnelActions, { handleNext: handleNext, handlePrev: handlePrev, isValid: isValid, isLast: isLast, loading: loading, isMobile: isMobile })));
};

export { TunnelStep as default };
//# sourceMappingURL=TunnelStep.js.map
