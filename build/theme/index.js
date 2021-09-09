import { __assign } from '../node_modules/tslib/tslib.es6.js';
import { createMuiTheme } from '@material-ui/core/styles';
import { customTheme } from './custom.js';
import { props } from './props/index.js';
import { overrides } from './overrides/index.js';

var finstoreTheme = createMuiTheme(__assign({ props: props, overrides: overrides }, customTheme));

export { finstoreTheme };
//# sourceMappingURL=index.js.map
