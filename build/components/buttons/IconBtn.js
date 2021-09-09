import { __rest, __assign } from '../../node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import { makeStyles, Tooltip, IconButton, CircularProgress } from '@material-ui/core';

var useStyles = makeStyles(function () { return ({
    root: {
        color: "inherit",
        width: 40,
        height: 40
    }
}); });
var IconBtn = function (_a) {
    var loading = _a.loading, children = _a.children, disabled = _a.disabled, title = _a.title, props = __rest(_a, ["loading", "children", "disabled", "title"]);
    var classes = useStyles();
    return (React__default.createElement(Tooltip, { title: title, disableHoverListener: !title, disableFocusListener: !title },
        React__default.createElement(IconButton, __assign({ disabled: disabled || loading, classes: { root: classes.root } }, props),
            !loading && children,
            loading && React__default.createElement(CircularProgress, { size: 23 }))));
};

export { IconBtn };
//# sourceMappingURL=IconBtn.js.map
