"use strict";
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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var core_1 = require("@material-ui/core");
var formatters_1 = require("../formatters");
var buttons_1 = require("../buttons");
var icons_1 = require("@material-ui/icons");
var i18n_1 = require("../../conf/i18n");
var bodyStyles_1 = require("./styles/bodyStyles");
var helpers_1 = require("./helpers/helpers");
var EmptyRow = function (props) {
    var classes = bodyStyles_1.useBodyStyles();
    return (react_1.default.createElement(core_1.TableBody, null,
        react_1.default.createElement(core_1.TableRow, null,
            react_1.default.createElement(core_1.TableCell, { align: "center", colSpan: props.colSpan },
                react_1.default.createElement("div", null,
                    react_1.default.createElement(core_1.Icon, { color: "disabled", className: classes.emptyCellIcon }, "block")),
                react_1.default.createElement(core_1.Typography, { variant: "caption" }, i18n_1.T.datatable.empty)))));
};
var buildCell = function (row_value, type_of, row, index) {
    var cell_id = row.id + "--" + index;
    switch (type_of) {
        case "number":
            return react_1.default.createElement(core_1.TableCell, { key: cell_id },
                react_1.default.createElement(formatters_1.FormattedNumber, { value: row_value }));
        case "currency":
            return react_1.default.createElement(core_1.TableCell, { key: cell_id },
                react_1.default.createElement(formatters_1.FormattedAmount, { value: row_value, row: row, variant: "currency" }));
        case "currency-standard":
            return react_1.default.createElement(core_1.TableCell, { key: cell_id },
                react_1.default.createElement(formatters_1.FormattedAmount, { value: row_value, row: row, variant: "currency-standard" }));
        case "percentage":
            return react_1.default.createElement(core_1.TableCell, { key: cell_id },
                react_1.default.createElement(formatters_1.FormattedAmount, { value: row_value, row: row, variant: "percent" }));
        case "boolean":
            return react_1.default.createElement(core_1.TableCell, { key: cell_id },
                react_1.default.createElement(formatters_1.FormattedBoolean, { value: row_value }));
        case "date":
            return react_1.default.createElement(core_1.TableCell, { key: cell_id },
                react_1.default.createElement(formatters_1.FormattedDate, { value: row_value }));
        case "datetime":
            return react_1.default.createElement(core_1.TableCell, { key: cell_id },
                react_1.default.createElement(formatters_1.FormattedDateTime, { value: row_value }));
        case "gender":
            return react_1.default.createElement(core_1.TableCell, { key: cell_id },
                react_1.default.createElement(formatters_1.FormattedGender, { value: row_value }));
        case "legalType":
            return react_1.default.createElement(core_1.TableCell, { key: cell_id },
                react_1.default.createElement(formatters_1.FormattedLegalType, { value: row_value }));
        default:
            return react_1.default.createElement(core_1.TableCell, { key: cell_id, scope: "row" }, row_value);
    }
};
var buildRow = function (row, columns, columnsVisibility) {
    var result = [];
    columns.map(function (col, index) {
        var formatter = col.formatter ? col.formatter : function (c) { return c; };
        var value_formatted = formatter(row[col.field_name], row);
        var row_value = value_formatted !== undefined ? value_formatted : i18n_1.T.global.nc;
        var type_of = col.type ? col.type : (typeof row_value);
        if (!!columnsVisibility[col.field_name]) {
            result.push(buildCell(row_value, type_of, row, index));
        }
    });
    return result;
};
var DatatableBody = function (props) {
    var columns = props.columns, columnsVisibility = props.columnsVisibility, loading = props.loading, searchResult = props.searchResult, selectedRows = props.selectedRows, onToggleSelect = props.onToggleSelect, cellActions = props.cellActions, hasLocalActions = props.hasLocalActions, hasMultipleActions = props.hasMultipleActions, displayLocalActions = props.displayLocalActions, expandedRow = props.expandedRow;
    var _a = react_1.useState([]), rowExpanded = _a[0], setRowExpanded = _a[1];
    var classes = bodyStyles_1.useBodyStyles();
    var toggleExpand = function (rowId) { return function () {
        if (rowExpanded.includes(rowId)) {
            setRowExpanded(__spreadArray([], rowExpanded.filter(function (r) { return r !== rowId; })));
        }
        else {
            setRowExpanded(__spreadArray([rowId], rowExpanded));
        }
    }; };
    if (searchResult.data && searchResult.data.length === 0 && !loading) {
        var colSpan = helpers_1.computeEmptyCellColSpan(columns, hasMultipleActions, expandedRow, hasLocalActions);
        return (react_1.default.createElement(EmptyRow, { colSpan: colSpan }));
    }
    return (react_1.default.createElement(core_1.TableBody, null, searchResult.data.map(function (row) {
        var isSelected = selectedRows ? helpers_1.isRowSelected(row.id, selectedRows) : false;
        var isExpanded = rowExpanded.includes(row.id);
        return (react_1.default.createElement(react_1.default.Fragment, { key: row.id },
            react_1.default.createElement(core_1.TableRow, { hover: true, role: "checkbox", tabIndex: -1, selected: isSelected, className: classes.tableRow, classes: { root: classes.root } },
                hasMultipleActions &&
                    react_1.default.createElement(core_1.TableCell, { className: classes.checkboxCell },
                        react_1.default.createElement(core_1.Checkbox, { checked: isSelected, onClick: onToggleSelect(row) })),
                expandedRow &&
                    react_1.default.createElement(core_1.TableCell, { className: classes.expandedCell },
                        react_1.default.createElement(buttons_1.IconBtn, { onClick: toggleExpand(row.id) }, isExpanded ? react_1.default.createElement(icons_1.KeyboardArrowUp, null) : react_1.default.createElement(icons_1.KeyboardArrowDown, null))),
                buildRow(row, columns, columnsVisibility),
                displayLocalActions &&
                    react_1.default.createElement(core_1.Fade, { in: displayLocalActions },
                        react_1.default.createElement(core_1.TableCell, { className: classes.actionCell }, cellActions(row)))),
            isExpanded &&
                react_1.default.createElement(core_1.Fade, { in: isExpanded },
                    react_1.default.createElement(core_1.TableRow, { key: "expanded-row-" + row.id, hover: true },
                        react_1.default.createElement(core_1.TableCell, { style: { textAlign: "left" }, colSpan: 100 }, expandedRow(row))))));
    })));
};
exports.default = DatatableBody;
//# sourceMappingURL=DatatableBody.js.map