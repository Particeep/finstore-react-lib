import { __assign } from '../../../node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import { T } from '../../../conf/i18n.js';
import { makeStyles, Select, MenuItem } from '@material-ui/core';
import { compareKeys } from '../helpers/helpers.js';
import '../../inputs/AutocompleteInput.js';
import '../../inputs/GeosuggestInput.js';
import { ParticeepDatePicker } from '../../inputs/ParticeepDatePicker.js';
import moment from '../../../node_modules/moment/moment.js';

var filterHeight = 33;
var useStyles = makeStyles(function (theme) { return ({
    root: {
        height: filterHeight
    },
    dateAfter: {
        height: filterHeight,
        marginBottom: theme.spacing(0.3)
    },
    dateBefore: {
        height: filterHeight
    }
}); });
var defaultDateFilter = {
    after: null,
    before: null
};
var valueToFilter = function (value) {
    switch (value) {
        case "true":
            return true;
        case "false":
            return false;
        default:
            return "all";
    }
};
var filterToValue = function (filter) {
    switch (filter) {
        case true:
            return "true";
        case false:
            return "false";
        default:
            return "all";
    }
};
var FiltersBoolean = function (_a) {
    var name = _a.name, onFilter = _a.onFilter, filter = _a.filter;
    var classes = useStyles();
    var onChange = function (e) { return onFilter(name, valueToFilter(e.target.value)); };
    return (React__default.createElement(Select, { className: classes.root, style: { width: "100%" }, value: filterToValue(filter), onChange: onChange },
        React__default.createElement(MenuItem, { value: "all" }),
        React__default.createElement(MenuItem, { value: "false" }, T.global.no),
        React__default.createElement(MenuItem, { value: "true" }, T.global.yes)));
};
var FiltersArrayCustom = function (_a) {
    var name = _a.name, options = _a.options, onFilter = _a.onFilter, filter = _a.filter, _b = _a.withAllOption, withAllOption = _b === void 0 ? true : _b;
    var classes = useStyles();
    var onChange = function (e) { return onFilter(name, e.target.value ? e.target.value : null); };
    return (React__default.createElement(Select, { className: classes.root, style: { width: "100%" }, value: filter ? filter : "", onChange: onChange },
        withAllOption &&
            React__default.createElement(MenuItem, { value: "all" }),
        options.map(function (o, index) { return React__default.createElement(MenuItem, { key: name + "-" + index, value: o.value }, o.label); })));
};
var FiltersDate = function (_a) {
    var name = _a.name, onFilter = _a.onFilter, after = _a.after, before = _a.before;
    var classes = useStyles();
    var onChange = function (type) { return function (date) { return onFilter(name, type, moment(date).toISOString()); }; };
    return (React__default.createElement("div", null,
        React__default.createElement(ParticeepDatePicker, __assign({ className: classes.dateAfter, label: T.datatable.filter.after, value: after ? after : null }, before && { maxDate: new Date(before) }, { onChange: onChange("after"), clearable: true })),
        React__default.createElement(ParticeepDatePicker, __assign({ className: classes.dateBefore, label: T.datatable.filter.before, value: before ? before : null }, after && { minDate: new Date(after) }, { onChange: onChange("before"), clearable: true }))));
};
var buildFilterValues = function (filters) {
    var clone = Object.assign({}, filters);
    Object.keys(filters).forEach(function (key) {
        if (filters[key] === null || filters[key] === undefined || (filters[key] && filters[key].length === 0)) {
            delete clone[key];
        }
        else {
            if (compareKeys(filters[key], defaultDateFilter)) {
                clone["" + key.replace("_at", "_after")] = filters[key].after ? filters[key].after : "";
                clone["" + key.replace("_at", "_before")] = filters[key].before ? filters[key].before : "";
                delete clone[key];
            }
            if (filters[key] === "all") {
                clone[key] = "";
            }
        }
    });
    return clone;
};

export { FiltersArrayCustom, FiltersBoolean, FiltersDate, buildFilterValues, defaultDateFilter };
//# sourceMappingURL=filters.js.map
