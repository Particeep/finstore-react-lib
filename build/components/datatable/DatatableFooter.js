import React__default from 'react';
import { TableFooter, TablePagination } from '@material-ui/core';
import { T } from '../../conf/i18n.js';
import { renderDisplayedRows } from './helpers/helpers.js';

var DatatableFooter = function (props) {
    var searchResult = props.searchResult, limit = props.limit, page = props.page, onPageChange = props.onPageChange, onChangeRowsPerPage = props.onChangeRowsPerPage;
    var rowsPerPageOptions = searchResult.total_size >= 10 ? [10, 20, 50, 100] : [];
    return (React__default.createElement(TableFooter, null,
        React__default.createElement(TablePagination, { labelRowsPerPage: T.datatable.rows_per_page, labelDisplayedRows: renderDisplayedRows, rowsPerPageOptions: rowsPerPageOptions, count: searchResult.total_size || 0, rowsPerPage: limit, page: page, onChangePage: onPageChange, onChangeRowsPerPage: onChangeRowsPerPage })));
};

export { DatatableFooter as default };
//# sourceMappingURL=DatatableFooter.js.map
