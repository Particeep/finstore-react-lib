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
var headStyles_1 = require("./styles/headStyles");
var CellWithSort = function (_a) {
    var col = _a.col, sortHandler = _a.sortHandler, sortCriteria = _a.sortCriteria;
    var canSort = col.canSort !== undefined ? col.canSort : true;
    if (canSort) {
        return (react_1.default.createElement(core_1.Tooltip, { title: "Sort", placement: col.type === "number" ? "bottom-end" : "bottom-start", enterDelay: 300 },
            react_1.default.createElement(core_1.TableSortLabel, { active: sortCriteria.sort_by === col.field_name, direction: sortCriteria.order_by, onClick: sortHandler }, col.label)));
    }
    else {
        return (react_1.default.createElement("span", null, col.label));
    }
};
var DatatableHead = function (props) {
    var columns = props.columns, columnsVisibility = props.columnsVisibility, searchCriteria = props.searchCriteria, onSort = props.onSort, displayLocalActions = props.displayLocalActions, selectedRows = props.selectedRows, onToggleAllSelect = props.onToggleAllSelect, limit = props.limit, hasMultipleActions = props.hasMultipleActions, expandedRow = props.expandedRow, isLocalTable = props.isLocalTable, className = props.className;
    var classes = headStyles_1.useHeadStyles();
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
            return (react_1.default.createElement(core_1.TableCell, __assign({ key: col.field_name, align: col.type === "number" ? "right" : "left" }, !isLocalTable && { sortDirection: searchCriteria.sort_by === col.field_name ? searchCriteria.order_by : false }),
                !isLocalTable &&
                    react_1.default.createElement(CellWithSort, { col: col, sortHandler: createSortHandler(col), sortCriteria: {
                            order_by: searchCriteria.order_by,
                            sort_by: searchCriteria.sort_by
                        } }),
                isLocalTable && react_1.default.createElement("span", null, col.label)));
        }
        else {
            return react_1.default.createElement(react_1.default.Fragment, { key: col.field_name });
        }
    };
    return (react_1.default.createElement(core_1.TableHead, __assign({}, { className: className }),
        react_1.default.createElement(core_1.TableRow, { className: classes.headerRow },
            hasMultipleActions &&
                react_1.default.createElement(core_1.TableCell, { padding: "checkbox" },
                    react_1.default.createElement(core_1.Checkbox, { indeterminate: selectedRows.length > 0 && selectedRows.length < limit, checked: selectedRows.length === limit, onChange: onToggleAllSelect, style: { paddingTop: 0, paddingBottom: 0 } })),
            expandedRow &&
                react_1.default.createElement(core_1.TableCell, { style: { width: 30 } }, "\u00A0"),
            columns.map(function (col) { return cellRender(!!columnsVisibility[col.field_name], col); }),
            displayLocalActions && react_1.default.createElement(core_1.TableCell, { className: classes.actionsCell }, "\u00A0"))));
};
exports.default = DatatableHead;
//# sourceMappingURL=DatatableHead.js.map