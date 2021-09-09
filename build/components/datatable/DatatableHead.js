import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import { TableHead, TableRow, TableCell, Checkbox, Tooltip, TableSortLabel } from '@material-ui/core';
import { useHeadStyles } from './styles/headStyles.js';

var CellWithSort = function (_a) {
    var col = _a.col, sortHandler = _a.sortHandler, sortCriteria = _a.sortCriteria;
    var canSort = col.canSort !== undefined ? col.canSort : true;
    if (canSort) {
        return (React__default.createElement(Tooltip, { title: "Sort", placement: col.type === "number" ? "bottom-end" : "bottom-start", enterDelay: 300 },
            React__default.createElement(TableSortLabel, { active: sortCriteria.sort_by === col.field_name, direction: sortCriteria.order_by, onClick: sortHandler }, col.label)));
    }
    else {
        return (React__default.createElement("span", null, col.label));
    }
};
var DatatableHead = function (props) {
    var columns = props.columns, columnsVisibility = props.columnsVisibility, searchCriteria = props.searchCriteria, onSort = props.onSort, displayLocalActions = props.displayLocalActions, selectedRows = props.selectedRows, onToggleAllSelect = props.onToggleAllSelect, limit = props.limit, hasMultipleActions = props.hasMultipleActions, expandedRow = props.expandedRow, isLocalTable = props.isLocalTable, className = props.className;
    var classes = useHeadStyles();
    var createSortHandler = function (col) { return function () {
        var sort_by = searchCriteria.sort_by, order_by = searchCriteria.order_by;
        var order = "desc";
        if (sort_by === col.field_name && order_by === "desc") {
            order = "asc";
        }
        onSort({ sort_by: col.field_name, order_by: order });
    }; };
    var cellRender = function (visibility, col) {
        if (visibility) {
            return (React__default.createElement(TableCell, __assign({ key: col.field_name, align: col.type === "number" ? "right" : "left" }, !isLocalTable && { sortDirection: searchCriteria.sort_by === col.field_name ? searchCriteria.order_by : false }),
                !isLocalTable &&
                    React__default.createElement(CellWithSort, { col: col, sortHandler: createSortHandler(col), sortCriteria: {
                            order_by: searchCriteria.order_by,
                            sort_by: searchCriteria.sort_by
                        } }),
                isLocalTable && React__default.createElement("span", null, col.label)));
        }
        else {
            return React__default.createElement(React__default.Fragment, { key: col.field_name });
        }
    };
    return (React__default.createElement(TableHead, __assign({}, { className: className }),
        React__default.createElement(TableRow, { className: classes.headerRow },
            hasMultipleActions &&
                React__default.createElement(TableCell, { padding: "checkbox" },
                    React__default.createElement(Checkbox, { indeterminate: selectedRows.length > 0 && selectedRows.length < limit, checked: selectedRows.length === limit, onChange: onToggleAllSelect, style: { paddingTop: 0, paddingBottom: 0 } })),
            expandedRow &&
                React__default.createElement(TableCell, { style: { width: 30 } }, "\u00A0"),
            columns.map(function (col) { return cellRender(!!columnsVisibility[col.field_name], col); }),
            displayLocalActions && React__default.createElement(TableCell, { className: classes.actionsCell }, "\u00A0"))));
};

export { DatatableHead as default };
//# sourceMappingURL=DatatableHead.js.map
