import { __spreadArray } from '../../../node_modules/tslib/tslib.es6.js';
import { T } from '../../../conf/i18n.js';

var compareKeys = function (a, b) {
    var aKeys = Object.keys(a).sort();
    var bKeys = Object.keys(b).sort();
    return JSON.stringify(aKeys) === JSON.stringify(bKeys);
};
var computeInitialPage = function (searchCriteria) {
    if (!!searchCriteria && !!searchCriteria.limit && searchCriteria.limit > 0) {
        return searchCriteria.offset / searchCriteria.limit;
    }
    else {
        return 0;
    }
};
var isRowSelected = function (id, selected) { return selected.map(function (s) { return s.id; }).includes(id); };
var computeEmptyCellColSpan = function (columns, hasMultipleActions, expandedRow, hasLocalActions) {
    return __spreadArray([hasMultipleActions, expandedRow, hasLocalActions], columns.map(function (c) { return c.visible; })).filter(function (v) { return v; }).length;
};
var renderDisplayedRows = function (_a) {
    var from = _a.from, to = _a.to, count = _a.count;
    return T.datatable.table_displayed_rows(from, to, count);
};

export { compareKeys, computeEmptyCellColSpan, computeInitialPage, isRowSelected, renderDisplayedRows };
//# sourceMappingURL=helpers.js.map
