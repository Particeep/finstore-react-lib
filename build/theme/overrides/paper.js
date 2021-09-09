import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import { customTheme } from '../custom.js';

var defaultPaper = {
    boxShadow: "none",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: customTheme.inputs.border.color,
    borderRadius: customTheme.inputs.border.radius,
    background: customTheme.palette.background.paper
};
var paper = {
    elevation1: __assign({}, defaultPaper),
    elevation8: __assign({}, defaultPaper)
};

export { paper };
//# sourceMappingURL=paper.js.map
