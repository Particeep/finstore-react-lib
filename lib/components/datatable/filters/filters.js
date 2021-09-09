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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildFilterValues = exports.FiltersDate = exports.FiltersArrayCustom = exports.FiltersBoolean = exports.defaultDateFilter = void 0;
var react_1 = __importDefault(require("react"));
var i18n_1 = require("../../../conf/i18n");
var core_1 = require("@material-ui/core");
var helpers_1 = require("../helpers/helpers");
var inputs_1 = require("../../inputs");
var moment_1 = __importDefault(require("moment"));
var filterHeight = 33;
var useStyles = core_1.makeStyles(function (theme) { return ({
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
exports.defaultDateFilter = {
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
    return (react_1.default.createElement(core_1.Select, { className: classes.root, style: { width: "100%" }, value: filterToValue(filter), onChange: onChange },
        react_1.default.createElement(core_1.MenuItem, { value: "all" }),
        react_1.default.createElement(core_1.MenuItem, { value: "false" }, i18n_1.T.global.no),
        react_1.default.createElement(core_1.MenuItem, { value: "true" }, i18n_1.T.global.yes)));
};
exports.FiltersBoolean = FiltersBoolean;
var FiltersArrayCustom = function (_a) {
    var name = _a.name, options = _a.options, onFilter = _a.onFilter, filter = _a.filter, _b = _a.withAllOption, withAllOption = _b === void 0 ? true : _b;
    var classes = useStyles();
    var onChange = function (e) { return onFilter(name, e.target.value ? e.target.value : null); };
    return (react_1.default.createElement(core_1.Select, { className: classes.root, style: { width: "100%" }, value: filter ? filter : "", onChange: onChange },
        withAllOption &&
            react_1.default.createElement(core_1.MenuItem, { value: "all" }),
        options.map(function (o, index) { return react_1.default.createElement(core_1.MenuItem, { key: name + "-" + index, value: o.value }, o.label); })));
};
exports.FiltersArrayCustom = FiltersArrayCustom;
var FiltersDate = function (_a) {
    var name = _a.name, onFilter = _a.onFilter, after = _a.after, before = _a.before;
    var classes = useStyles();
    var onChange = function (type) { return function (date) { return onFilter(name, type, moment_1.default(date).toISOString()); }; };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(inputs_1.ParticeepDatePicker, __assign({ className: classes.dateAfter, label: i18n_1.T.datatable.filter.after, value: after ? after : null }, before && { maxDate: new Date(before) }, { onChange: onChange("after"), clearable: true })),
        react_1.default.createElement(inputs_1.ParticeepDatePicker, __assign({ className: classes.dateBefore, label: i18n_1.T.datatable.filter.before, value: before ? before : null }, after && { minDate: new Date(after) }, { onChange: onChange("before"), clearable: true }))));
};
exports.FiltersDate = FiltersDate;
var buildFilterValues = function (filters) {
    var clone = Object.assign({}, filters);
    Object.keys(filters).forEach(function (key) {
        if (filters[key] === null || filters[key] === undefined || (filters[key] && filters[key].length === 0)) {
            delete clone[key];
        }
        else {
            if (helpers_1.compareKeys(filters[key], exports.defaultDateFilter)) {
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
exports.buildFilterValues = buildFilterValues;
//# sourceMappingURL=filters.js.map