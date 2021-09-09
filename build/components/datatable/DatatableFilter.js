import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import React__default, { useState } from 'react';
import { TableHead, TableRow, TableCell } from '@material-ui/core';
import { defaultDateFilter, FiltersArrayCustom, FiltersDate, FiltersBoolean } from './filters/filters.js';
import update from 'immutability-helper';
import { useFilterStyles } from './styles/filterStyles.js';

var getDefaultFilter = function (col) {
    switch (col.filter) {
        case "DATE":
            return defaultDateFilter;
        default:
            return null;
    }
};
var DatatableFilter = function (_a) {
    var columns = _a.columns, displayLocalActions = _a.displayLocalActions, hasMultipleActions = _a.hasMultipleActions, columnsVisibility = _a.columnsVisibility, onFilter = _a.onFilter;
    var classes = useFilterStyles();
    var initialFilter = columns.filter(function (c) { return c.filter; }).reduce(function (acc, cur) {
        var _a;
        return (__assign(__assign({}, acc), (_a = {}, _a[cur.field_name] = getDefaultFilter(cur), _a)));
    }, {});
    var _b = useState(initialFilter), filtered = _b[0], setFiltered = _b[1];
    var handleFilter = function (name, value) {
        var _a;
        var newFilteredValue = __assign(__assign({}, filtered), (_a = {}, _a[name] = value, _a));
        setFiltered(newFilteredValue);
        onFilter(newFilteredValue);
    };
    var handleJsonFieldsFilter = function (name, value) {
        var subField = name.split(".")[1];
        var newFilteredValue = __assign(__assign({}, filtered), { custom_field: subField, custom_value: value });
        setFiltered(newFilteredValue);
        onFilter(newFilteredValue);
    };
    var handleFilterDate = function (name, type, value) {
        var _a, _b;
        var newFilteredValue = update(filtered, (_a = {},
            _a[name] = (_b = {},
                _b[type] = { $set: value },
                _b),
            _a));
        setFiltered(newFilteredValue);
        onFilter(newFilteredValue);
    };
    var filterRendering = function (col) {
        switch (col.filter) {
            case "BOOLEAN":
                return (React__default.createElement(FiltersBoolean, { key: "filters-boolean-" + col.field_name, name: col.field_name, onFilter: handleFilter, filter: filtered[col.field_name] }));
            case "CUSTOM":
                return (React__default.createElement(FiltersArrayCustom, __assign({ key: "filters-custom-" + col.field_name, name: col.field_name, onFilter: handleFilter, options: col.filterOptions, filter: filtered[col.field_name] }, col.withAllOption !== undefined && { withAllOption: col.withAllOption })));
            case "DATE":
                return (React__default.createElement(FiltersDate, { key: "filters-date-" + col.field_name, name: col.field_name, onFilter: handleFilterDate, after: filtered[col.field_name].after, before: filtered[col.field_name].before }));
            case "JSON":
                return (React__default.createElement(FiltersArrayCustom, __assign({ key: "filters-custom-" + col.field_name, name: col.field_name, onFilter: handleJsonFieldsFilter, options: col.filterOptions, filter: filtered[col.field_name] }, col.withAllOption !== undefined && { withAllOption: col.withAllOption })));
            default:
                return React__default.createElement(React__default.Fragment, null);
        }
    };
    return (React__default.createElement(TableHead, { classes: { root: classes.root } },
        React__default.createElement(TableRow, { className: classes.filterRow },
            hasMultipleActions && React__default.createElement(TableCell, null, "\u00A0"),
            columns
                .filter(function (col) { return !!columnsVisibility[col.field_name]; })
                .map(function (col) { return React__default.createElement(TableCell, { key: "filter-cell-" + col.field_name, className: classes.filterCell },
                " ",
                filterRendering(col),
                " "); }),
            displayLocalActions && React__default.createElement(TableCell, null, "\u00A0"))));
};

export { DatatableFilter as default };
//# sourceMappingURL=DatatableFilter.js.map
