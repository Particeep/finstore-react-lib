"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderDisplayedRows = exports.computeEmptyCellColSpan = exports.isRowSelected = exports.computeInitialPage = exports.compareKeys = void 0;
var i18n_1 = require("../../../conf/i18n");
var compareKeys = function (a, b) {
    var aKeys = Object.keys(a).sort();
    var bKeys = Object.keys(b).sort();
    return JSON.stringify(aKeys) === JSON.stringify(bKeys);
};
exports.compareKeys = compareKeys;
var computeInitialPage = function (searchCriteria) {
    if (!!searchCriteria && !!searchCriteria.limit && searchCriteria.limit > 0) {
        return searchCriteria.offset / searchCriteria.limit;
    }
    else {
        return 0;
    }
};
exports.computeInitialPage = computeInitialPage;
var isRowSelected = function (id, selected) { return selected.map(function (s) { return s.id; }).includes(id); };
exports.isRowSelected = isRowSelected;
var computeEmptyCellColSpan = function (columns, hasMultipleActions, expandedRow, hasLocalActions) {
    return __spreadArray([hasMultipleActions, expandedRow, hasLocalActions], columns.map(function (c) { return c.visible; })).filter(function (v) { return v; }).length;
};
exports.computeEmptyCellColSpan = computeEmptyCellColSpan;
var renderDisplayedRows = function (_a) {
    var from = _a.from, to = _a.to, count = _a.count;
    return i18n_1.T.datatable.table_displayed_rows(from, to, count);
};
exports.renderDisplayedRows = renderDisplayedRows;
//# sourceMappingURL=helpers.js.map