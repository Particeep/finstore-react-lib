import React__default from 'react';
import { T } from '../../conf/i18n.js';

var FormattedBoolean = function (_a) {
    var value = _a.value;
    if (value) {
        return React__default.createElement(React__default.Fragment, null, T.global.yes);
    }
    else {
        return React__default.createElement(React__default.Fragment, null, T.global.no);
    }
};

export { FormattedBoolean };
//# sourceMappingURL=FormattedBoolean.js.map
