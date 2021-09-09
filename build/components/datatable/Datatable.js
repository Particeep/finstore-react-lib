import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import React__default, { useState, useEffect } from 'react';
import { defaultSearchCriteria } from './helpers/defaultSearchCriteria.js';
import DatatableDisplay from './DatatableDisplay.js';
import { computeInitialPage } from './helpers/helpers.js';
import { initColumnsVisibilityWithLocalStorage, updateStorageConfigTable, getColumnNameVisible } from './helpers/columnVisibility.js';

var Datatable = function (props) {
    var name = props.name, columns = props.columns, consumerKey = props.consumerKey, userId = props.userId, searchCriteria = props.searchCriteria, searchResult = props.searchResult, useLocalStorage = props.useLocalStorage, updateCriteria = props.updateCriteria, globalSearch = props.globalSearch, multipleActions = props.multipleActions, cellActions = props.cellActions;
    var isLocalTable = !searchCriteria && !updateCriteria;
    var initialPage = computeInitialPage(searchCriteria);
    var initialColumnsVisibility = initColumnsVisibilityWithLocalStorage(name, columns, consumerKey, userId);
    var _a = useState(initialColumnsVisibility), columnsVisibility = _a[0], setColumnsVisibility = _a[1];
    var _b = useState(initialPage), page = _b[0], setPage = _b[1];
    var _c = useState([]), selectedRows = _c[0], setSelectedRows = _c[1];
    var basicProps = __assign({ columnsVisibility: columnsVisibility, page: page, isLocalTable: isLocalTable, hasLocalActions: !!cellActions, hasMultipleActions: !!multipleActions, hasGlobalSearch: !!globalSearch }, !isLocalTable && {
        limit: searchResult.limit || searchCriteria.limit || 20
    });
    useEffect(function () {
        return function () {
            if (searchCriteria && updateCriteria) {
                updateCriteria(defaultSearchCriteria);
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
                updateStorageConfigTable(consumerKey, userId, name, "VISIBILITY", getColumnNameVisible(newColumnsVisibility));
            }
        };
    };
    var onChange = function (value, page) {
        updateCriteria(value);
        if (page) {
            setPage(page);
        }
    };
    return (React__default.createElement(DatatableDisplay, __assign({}, props, basicProps, { callback: onChange, toggleColumnVisibility: toggleColumnVisibility, selectedRows: selectedRows, addRowToSelection: addRowToSelection, toggleAllSelect: toggleAllSelect })));
};

export { Datatable as default };
//# sourceMappingURL=Datatable.js.map
