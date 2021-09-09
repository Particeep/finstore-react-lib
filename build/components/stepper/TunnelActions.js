import { makeStyles } from '@material-ui/core';
import React__default from 'react';
import { Btn } from '../buttons/Btn.js';
import '../buttons/IconBtn.js';
import '../buttons/ActionMenu.js';

var useStyles = makeStyles(function (theme) { return ({
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
    return (React__default.createElement("div", { className: classes.root },
        !isMobile &&
            React__default.createElement(Btn, { onClick: handlePrev, color: "secondary", className: classes.previous }, "Previous"),
        React__default.createElement(Btn, { onClick: handleNext, disabled: !isValid, loading: loading, color: "secondary", variant: "contained" }, isLast ? "Finish" : "Next")));
};

export { TunnelActions as default };
//# sourceMappingURL=TunnelActions.js.map
