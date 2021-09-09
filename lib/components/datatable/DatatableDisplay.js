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
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var classnames_1 = __importDefault(require("classnames"));
var filters_1 = require("./filters/filters");
var DatatableFooter_1 = __importDefault(require("./DatatableFooter"));
var DatatableHead_1 = __importDefault(require("./DatatableHead"));
var DatatableBody_1 = __importDefault(require("./DatatableBody"));
var DatatableFilter_1 = __importDefault(require("./DatatableFilter"));
var DatatableToolbar_1 = __importDefault(require("./DatatableToolbar"));
var displayStyles_1 = require("./styles/displayStyles");
var DatatableDisplay = function (props) {
    var _a;
    var classes = displayStyles_1.useDisplayStyles();
    var callback = props.callback, loading = props.loading, isLocalTable = props.isLocalTable, searchCriteria = props.searchCriteria, columns = props.columns, columnsVisibility = props.columnsVisibility, toggleColumnVisibility = props.toggleColumnVisibility, toggleAllSelect = props.toggleAllSelect, addRowToSelection = props.addRowToSelection, title = props.title, hasGlobalSearch = props.hasGlobalSearch, multipleActions = props.multipleActions, selectedRows = props.selectedRows, hasLocalActions = props.hasLocalActions, hasMultipleActions = props.hasMultipleActions, limit = props.limit, expandedRow = props.expandedRow, searchResult = props.searchResult, cellActions = props.cellActions, page = props.page;
    var checkVisibilityFilter = function () {
        return !columns.filter(function (c) { return !!c.filter; })
            .map(function (c) { return c.field_name; })
            .map(function (c) { return columnsVisibility[c]; })
            .every(function (c) { return !c; });
    };
    var onPageChange = function (event, page) {
        var newSearchCriteria = __assign(__assign({}, searchCriteria), { offset: page * searchCriteria.limit });
        callback(newSearchCriteria, page);
    };
    var onChangeRowsPerPage = function (event) {
        var newSearchCriteria = __assign(__assign({}, searchCriteria), { limit: +event.target.value });
        callback(newSearchCriteria);
    };
    var onSearchChange = function (searching) {
        callback(searching);
    };
    var onSortChange = function (sorting) {
        callback(sorting);
    };
    var onFilterChange = function (filters) {
        callback(filters_1.buildFilterValues(filters));
    };
    var hasFilter = checkVisibilityFilter();
    var displayLocalActions = hasLocalActions && selectedRows.length === 0;
    return (react_1.default.createElement("div", { className: classes.root },
        react_1.default.createElement(DatatableToolbar_1.default, { onSearch: onSearchChange, onToggleColumnVisibility: toggleColumnVisibility, columns: columns, title: title, hasGlobalSearch: hasGlobalSearch, columnsVisibility: columnsVisibility, multipleActions: multipleActions, selectedRows: selectedRows, hasLocalActions: hasLocalActions }),
        react_1.default.createElement("div", { className: classes.root },
            loading && react_1.default.createElement(core_1.LinearProgress, { className: classes.progress }),
            react_1.default.createElement(core_1.TableContainer, null,
                react_1.default.createElement(core_1.Table, { className: classnames_1.default((_a = {}, _a[classes.fixedActionColumn] = hasLocalActions, _a)), style: { borderCollapse: "initial" } },
                    react_1.default.createElement(DatatableHead_1.default, { className: "TableHead", onSort: onSortChange, onToggleAllSelect: toggleAllSelect, columns: columns, columnsVisibility: columnsVisibility, searchCriteria: searchCriteria, displayLocalActions: displayLocalActions, selectedRows: selectedRows, limit: limit, hasMultipleActions: hasMultipleActions, expandedRow: expandedRow, isLocalTable: isLocalTable }),
                    hasFilter &&
                        react_1.default.createElement(DatatableFilter_1.default, { onFilter: onFilterChange, columns: columns, displayLocalActions: displayLocalActions, hasMultipleActions: hasMultipleActions, columnsVisibility: columnsVisibility }),
                    react_1.default.createElement(DatatableBody_1.default, { onToggleSelect: addRowToSelection, columns: columns, columnsVisibility: columnsVisibility, loading: loading, searchResult: searchResult, selectedRows: selectedRows, cellActions: cellActions, hasLocalActions: hasLocalActions, hasMultipleActions: hasMultipleActions, displayLocalActions: displayLocalActions, expandedRow: expandedRow }))),
            !isLocalTable &&
                react_1.default.createElement(DatatableFooter_1.default, { onPageChange: onPageChange, onChangeRowsPerPage: onChangeRowsPerPage, searchResult: searchResult, limit: limit, page: page }))));
};
exports.default = DatatableDisplay;
//# sourceMappingURL=DatatableDisplay.js.map