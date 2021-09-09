import React__default from 'react';
import { T } from '../../conf/i18n.js';

var FormattedLegalType = function (_a) {
    var value = _a.value;
    if (value === "CONJOINT") {
        return React__default.createElement(React__default.Fragment, null, T.user.cosuscriber.type.CONJOINT);
    }
    else if (value === "USUFRUCTUARY") {
        return React__default.createElement(React__default.Fragment, null, T.user.cosuscriber.type.USUFRUCTUARY);
    }
    else {
        return React__default.createElement(React__default.Fragment, null, T.global.nc);
    }
};

export { FormattedLegalType };
//# sourceMappingURL=FormattedLegalType.js.map
