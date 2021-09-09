import React__default from 'react';
import { T } from '../../conf/i18n.js';

var FormattedGender = function (_a) {
    var value = _a.value;
    if (value === "MAN") {
        return React__default.createElement(React__default.Fragment, null, T.user.gender.MAN);
    }
    else if (value === "WOMAN") {
        return React__default.createElement(React__default.Fragment, null, T.user.gender.WOMAN);
    }
    else {
        return React__default.createElement(React__default.Fragment, null, T.global.nc);
    }
};

export { FormattedGender };
//# sourceMappingURL=FormattedGender.js.map
