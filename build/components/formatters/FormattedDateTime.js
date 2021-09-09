import React__default from 'react';
import { FormattedDate, FormattedTime } from '../../node_modules/react-intl/lib/index.js';
import moment from 'moment';
import { T } from '../../conf/i18n.js';

var FormattedDateTime = function (_a) {
    var value = _a.value;
    if (value && moment(value).isValid()) {
        return (React__default.createElement(React__default.Fragment, null,
            React__default.createElement(FormattedDate, { value: value }),
            " ",
            React__default.createElement(FormattedTime, { value: value, format: "24hour" })));
    }
    else {
        return (React__default.createElement(React__default.Fragment, null, T.global.nc));
    }
};

export { FormattedDateTime };
//# sourceMappingURL=FormattedDateTime.js.map
