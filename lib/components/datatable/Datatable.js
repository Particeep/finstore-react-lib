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
var defaultSearchCriteria_1 = require("./helpers/defaultSearchCriteria");
var DatatableDisplay_1 = __importDefault(require("./DatatableDisplay"));
var helpers_1 = require("./helpers/helpers");
var columnVisibility_1 = require("./helpers/columnVisibility");
var Datatable = function (props) {
    var name = props.name, columns = props.columns, consumerKey = props.consumerKey, userId = props.userId, searchCriteria = props.searchCriteria, searchResult = props.searchResult, useLocalStorage = props.useLocalStorage, updateCriteria = props.updateCriteria, globalSearch = props.globalSearch, multipleActions = props.multipleActions, cellActions = props.cellActions;
    var isLocalTable = !searchCriteria && !updateCriteria;
    var initialPage = helpers_1.computeInitialPage(searchCriteria);
    var initialColumnsVisibility = columnVisibility_1.initColumnsVisibilityWithLocalStorage(name, columns, consumerKey, userId);
    var _a = react_1.useState(initialColumnsVisibility), columnsVisibility = _a[0], setColumnsVisibility = _a[1];
    var _b = react_1.useState(initialPage), page = _b[0], setPage = _b[1];
    var _c = react_1.useState([]), selectedRows = _c[0], setSelectedRows = _c[1];
    var basicProps = __assign({ columnsVisibility: columnsVisibility, page: page, isLocalTable: isLocalTable, hasLocalActions: !!cellActions, hasMultipleActions: !!multipleActions, hasGlobalSearch: !!globalSearch }, !isLocalTable && {
        limit: searchResult.limit || searchCriteria.limit || 20
    });
    react_1.useEffect(function () {
        return function () {
            if (searchCriteria && updateCriteria) {
                updateCriteria(defaultSearchCriteria_1.defaultSearchCriteria);
            }
        };
    }, []);
    var addRowToSelection = function (row) {
        return function (event) {
            event.stopPropagation();
            var isSelected = selectedRows.map(function (s) { return s.id; }).indexOf(row.id) >= 0;
            setSelectedRows(isSelected ? selectedRows.filter(function (x) { return x.id !== row.id; }) : selectedRows.concat(row));
        };
    };
    var toggleAllSelect = function () {
        var allRowsChecked = selectedRows.length === searchResult.data.length;
        if (!allRowsChecked) {
            setSelectedRows(searchResult.data);
        }
        else {
            setSelectedRows([]);
        }
    };
    var toggleColumnVisibility = function (col) {
        return function (event) {
            var _a;
            event.stopPropagation();
            var valueChange = !columnsVisibility[col.field_name];
            var newColumnsVisibility = __assign(__assign({}, columnsVisibility), (_a = {}, _a[col.field_name] = valueChange, _a));
            setColumnsVisibility(newColumnsVisibility);
            if ([undefined, null, true].includes(useLocalStorage)) {
                columnVisibility_1.updateStorageConfigTable(consumerKey, userId, name, "VISIBILITY", columnVisibility_1.getColumnNameVisible(newColumnsVisibility));
            }
        };
    };
    var onChange = function (value, page) {
        updateCriteria(value);
        if (page) {
            setPage(page);
        }
    };
    return (react_1.default.createElement(DatatableDisplay_1.default, __assign({}, props, basicProps, { callback: onChange, toggleColumnVisibility: toggleColumnVisibility, selectedRows: selectedRows, addRowToSelection: addRowToSelection, toggleAllSelect: toggleAllSelect })));
};
exports.default = Datatable;
//# sourceMappingURL=Datatable.js.map