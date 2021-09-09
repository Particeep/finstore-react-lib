import { __spreadArray } from '../../node_modules/tslib/tslib.es6.js';
import React__default, { useState } from 'react';
import { TableBody, TableRow, TableCell, Checkbox, Fade, Icon, Typography } from '@material-ui/core';
import { FormattedAmount, FormattedNumber } from '../formatters/FormattedAmount.js';
import { FormattedBoolean } from '../formatters/FormattedBoolean.js';
import { FormattedDateTime } from '../formatters/FormattedDateTime.js';
import { FormattedDate } from '../formatters/FormattedDate.js';
import { FormattedLegalType } from '../formatters/FormattedLegalType.js';
import { FormattedGender } from '../formatters/FormattedGender.js';
import { IconBtn } from '../buttons/IconBtn.js';
import '../buttons/ActionMenu.js';
import { T } from '../../conf/i18n.js';
import { useBodyStyles } from './styles/bodyStyles.js';
import { computeEmptyCellColSpan, isRowSelected } from './helpers/helpers.js';
import KeyboardArrowUp from '../../node_modules/@material-ui/icons/esm/KeyboardArrowUp.js';
import KeyboardArrowDown from '../../node_modules/@material-ui/icons/esm/KeyboardArrowDown.js';

var EmptyRow = function (props) {
    var classes = useBodyStyles();
    return (React__default.createElement(TableBody, null,
        React__default.createElement(TableRow, null,
            React__default.createElement(TableCell, { align: "center", colSpan: props.colSpan },
                React__default.createElement("div", null,
                    React__default.createElement(Icon, { color: "disabled", className: classes.emptyCellIcon }, "block")),
                React__default.createElement(Typography, { variant: "caption" }, T.datatable.empty)))));
};
var buildCell = function (row_value, type_of, row, index) {
    var cell_id = row.id + "--" + index;
    switch (type_of) {
        case "number":
            return React__default.createElement(TableCell, { key: cell_id },
                React__default.createElement(FormattedNumber, { value: row_value }));
        case "currency":
            return React__default.createElement(TableCell, { key: cell_id },
                React__default.createElement(FormattedAmount, { value: row_value, row: row, variant: "currency" }));
        case "currency-standard":
            return React__default.createElement(TableCell, { key: cell_id },
                React__default.createElement(FormattedAmount, { value: row_value, row: row, variant: "currency-standard" }));
        case "percentage":
            return React__default.createElement(TableCell, { key: cell_id },
                React__default.createElement(FormattedAmount, { value: row_value, row: row, variant: "percent" }));
        case "boolean":
            return React__default.createElement(TableCell, { key: cell_id },
                React__default.createElement(FormattedBoolean, { value: row_value }));
        case "date":
            return React__default.createElement(TableCell, { key: cell_id },
                React__default.createElement(FormattedDate, { value: row_value }));
        case "datetime":
            return React__default.createElement(TableCell, { key: cell_id },
                React__default.createElement(FormattedDateTime, { value: row_value }));
        case "gender":
            return React__default.createElement(TableCell, { key: cell_id },
                React__default.createElement(FormattedGender, { value: row_value }));
        case "legalType":
            return React__default.createElement(TableCell, { key: cell_id },
                React__default.createElement(FormattedLegalType, { value: row_value }));
        default:
            return React__default.createElement(TableCell, { key: cell_id, scope: "row" }, row_value);
    }
};
var buildRow = function (row, columns, columnsVisibility) {
    var result = [];
    columns.map(function (col, index) {
        var formatter = col.formatter ? col.formatter : function (c) { return c; };
        var value_formatted = formatter(row[col.field_name], row);
        var row_value = value_formatted !== undefined ? value_formatted : T.global.nc;
        var type_of = col.type ? col.type : (typeof row_value);
        if (!!columnsVisibility[col.field_name]) {
            result.push(buildCell(row_value, type_of, row, index));
        }
    });
    return result;
};
var DatatableBody = function (props) {
    var columns = props.columns, columnsVisibility = props.columnsVisibility, loading = props.loading, searchResult = props.searchResult, selectedRows = props.selectedRows, onToggleSelect = props.onToggleSelect, cellActions = props.cellActions, hasLocalActions = props.hasLocalActions, hasMultipleActions = props.hasMultipleActions, displayLocalActions = props.displayLocalActions, expandedRow = props.expandedRow;
    var _a = useState([]), rowExpanded = _a[0], setRowExpanded = _a[1];
    var classes = useBodyStyles();
    var toggleExpand = function (rowId) { return function () {
        if (rowExpanded.includes(rowId)) {
            setRowExpanded(__spreadArray([], rowExpanded.filter(function (r) { return r !== rowId; })));
        }
        else {
            setRowExpanded(__spreadArray([rowId], rowExpanded));
        }
    }; };
    if (searchResult.data && searchResult.data.length === 0 && !loading) {
        var colSpan = computeEmptyCellColSpan(columns, hasMultipleActions, expandedRow, hasLocalActions);
        return (React__default.createElement(EmptyRow, { colSpan: colSpan }));
    }
    return (React__default.createElement(TableBody, null, searchResult.data.map(function (row) {
        var isSelected = selectedRows ? isRowSelected(row.id, selectedRows) : false;
        var isExpanded = rowExpanded.includes(row.id);
        return (React__default.createElement(React__default.Fragment, { key: row.id },
            React__default.createElement(TableRow, { hover: true, role: "checkbox", tabIndex: -1, selected: isSelected, className: classes.tableRow, classes: { root: classes.root } },
                hasMultipleActions &&
                    React__default.createElement(TableCell, { className: classes.checkboxCell },
                        React__default.createElement(Checkbox, { checked: isSelected, onClick: onToggleSelect(row) })),
                expandedRow &&
                    React__default.createElement(TableCell, { className: classes.expandedCell },
                        React__default.createElement(IconBtn, { onClick: toggleExpand(row.id) }, isExpanded ? React__default.createElement(KeyboardArrowUp, null) : React__default.createElement(KeyboardArrowDown, null))),
                buildRow(row, columns, columnsVisibility),
                displayLocalActions &&
                    React__default.createElement(Fade, { in: displayLocalActions },
                        React__default.createElement(TableCell, { className: classes.actionCell }, cellActions(row)))),
            isExpanded &&
                React__default.createElement(Fade, { in: isExpanded },
                    React__default.createElement(TableRow, { key: "expanded-row-" + row.id, hover: true },
                        React__default.createElement(TableCell, { style: { textAlign: "left" }, colSpan: 100 }, expandedRow(row))))));
    })));
};

export { DatatableBody as default };
//# sourceMappingURL=DatatableBody.js.map
