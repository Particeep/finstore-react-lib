"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var core_1 = require("@material-ui/core");
var filters_1 = require("./filters/filters");
var immutability_helper_1 = __importDefault(require("immutability-helper"));
var filterStyles_1 = require("./styles/filterStyles");
var getDefaultFilter = function (col) {
    switch (col.filter) {
        case "DATE":
            return filters_1.defaultDateFilter;
        default:
            return null;
    }
};
var DatatableFilter = function (_a) {
    var columns = _a.columns, displayLocalActions = _a.displayLocalActions, hasMultipleActions = _a.hasMultipleActions, columnsVisibility = _a.columnsVisibility, onFilter = _a.onFilter;
    var classes = filterStyles_1.useFilterStyles();
    var initialFilter = columns.filter(function (c) { return c.filter; }).reduce(function (acc, cur) {
        var _a;
        return (__assign(__assign({}, acc), (_a = {}, _a[cur.field_name] = getDefaultFilter(cur), _a)));
    }, {});
    var _b = react_1.useState(initialFilter), filtered = _b[0], setFiltered = _b[1];
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
        var newFilteredValue = immutability_helper_1.default(filtered, (_a = {},
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
                return (react_1.default.createElement(filters_1.FiltersBoolean, { key: "filters-boolean-" + col.field_name, name: col.field_name, onFilter: handleFilter, filter: filtered[col.field_name] }));
            case "CUSTOM":
                return (react_1.default.createElement(filters_1.FiltersArrayCustom, __assign({ key: "filters-custom-" + col.field_name, name: col.field_name, onFilter: handleFilter, options: col.filterOptions, filter: filtered[col.field_name] }, col.withAllOption !== undefined && { withAllOption: col.withAllOption })));
            case "DATE":
                return (react_1.default.createElement(filters_1.FiltersDate, { key: "filters-date-" + col.field_name, name: col.field_name, onFilter: handleFilterDate, after: filtered[col.field_name].after, before: filtered[col.field_name].before }));
            case "JSON":
                return (react_1.default.createElement(filters_1.FiltersArrayCustom, __assign({ key: "filters-custom-" + col.field_name, name: col.field_name, onFilter: handleJsonFieldsFilter, options: col.filterOptions, filter: filtered[col.field_name] }, col.withAllOption !== undefined && { withAllOption: col.withAllOption })));
            default:
                return react_1.default.createElement(react_1.default.Fragment, null);
        }
    };
    return (react_1.default.createElement(core_1.TableHead, { classes: { root: classes.root } },
        react_1.default.createElement(core_1.TableRow, { className: classes.filterRow },
            hasMultipleActions && react_1.default.createElement(core_1.TableCell, null, "\u00A0"),
            columns
                .filter(function (col) { return !!columnsVisibility[col.field_name]; })
                .map(function (col) { return react_1.default.createElement(core_1.TableCell, { key: "filter-cell-" + col.field_name, className: classes.filterCell },
                " ",
                filterRendering(col),
                " "); }),
            displayLocalActions && react_1.default.createElement(core_1.TableCell, null, "\u00A0"))));
};
exports.default = DatatableFilter;
//# sourceMappingURL=DatatableFilter.js.map