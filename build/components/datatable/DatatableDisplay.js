import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import { LinearProgress, TableContainer, Table } from '@material-ui/core';
import classNames from 'classnames';
import { buildFilterValues } from './filters/filters.js';
import DatatableFooter from './DatatableFooter.js';
import DatatableHead from './DatatableHead.js';
import DatatableBody from './DatatableBody.js';
import DatatableFilter from './DatatableFilter.js';
import DatatableToolbar from './DatatableToolbar.js';
import { useDisplayStyles } from './styles/displayStyles.js';

var DatatableDisplay = function (props) {
    var _a;
    var classes = useDisplayStyles();
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
        callback(buildFilterValues(filters));
    };
    var hasFilter = checkVisibilityFilter();
    var displayLocalActions = hasLocalActions && selectedRows.length === 0;
    return (React__default.createElement("div", { className: classes.root },
        React__default.createElement(DatatableToolbar, { onSearch: onSearchChange, onToggleColumnVisibility: toggleColumnVisibility, columns: columns, title: title, hasGlobalSearch: hasGlobalSearch, columnsVisibility: columnsVisibility, multipleActions: multipleActions, selectedRows: selectedRows, hasLocalActions: hasLocalActions }),
        React__default.createElement("div", { className: classes.root },
            loading && React__default.createElement(LinearProgress, { className: classes.progress }),
            React__default.createElement(TableContainer, null,
                React__default.createElement(Table, { className: classNames((_a = {}, _a[classes.fixedActionColumn] = hasLocalActions, _a)), style: { borderCollapse: "initial" } },
                    React__default.createElement(DatatableHead, { className: "TableHead", onSort: onSortChange, onToggleAllSelect: toggleAllSelect, columns: columns, columnsVisibility: columnsVisibility, searchCriteria: searchCriteria, displayLocalActions: displayLocalActions, selectedRows: selectedRows, limit: limit, hasMultipleActions: hasMultipleActions, expandedRow: expandedRow, isLocalTable: isLocalTable }),
                    hasFilter &&
                        React__default.createElement(DatatableFilter, { onFilter: onFilterChange, columns: columns, displayLocalActions: displayLocalActions, hasMultipleActions: hasMultipleActions, columnsVisibility: columnsVisibility }),
                    React__default.createElement(DatatableBody, { onToggleSelect: addRowToSelection, columns: columns, columnsVisibility: columnsVisibility, loading: loading, searchResult: searchResult, selectedRows: selectedRows, cellActions: cellActions, hasLocalActions: hasLocalActions, hasMultipleActions: hasMultipleActions, displayLocalActions: displayLocalActions, expandedRow: expandedRow }))),
            !isLocalTable &&
                React__default.createElement(DatatableFooter, { onPageChange: onPageChange, onChangeRowsPerPage: onChangeRowsPerPage, searchResult: searchResult, limit: limit, page: page }))));
};

export { DatatableDisplay as default };
//# sourceMappingURL=DatatableDisplay.js.map
