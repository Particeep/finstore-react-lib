import { __rest, __assign } from '../../node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import { Button, CircularProgress } from '@material-ui/core';

var Btn = function (_a) {
    var loading = _a.loading, children = _a.children, props = __rest(_a, ["loading", "children"]);
    props.disabled = props.disabled || loading;
    var loadingColor = props.color;
    return (React__default.createElement(Button, __assign({}, props),
        !loading && children,
        loading && React__default.createElement(CircularProgress, { color: loadingColor, size: 24 })));
};

export { Btn };
//# sourceMappingURL=Btn.js.map
