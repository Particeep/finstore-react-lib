"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var i18n_1 = require("../../conf/i18n");
var helpers_1 = require("./helpers/helpers");
var DatatableFooter = function (props) {
    var searchResult = props.searchResult, limit = props.limit, page = props.page, onPageChange = props.onPageChange, onChangeRowsPerPage = props.onChangeRowsPerPage;
    var rowsPerPageOptions = searchResult.total_size >= 10 ? [10, 20, 50, 100] : [];
    return (react_1.default.createElement(core_1.TableFooter, null,
        react_1.default.createElement(core_1.TablePagination, { labelRowsPerPage: i18n_1.T.datatable.rows_per_page, labelDisplayedRows: helpers_1.renderDisplayedRows, rowsPerPageOptions: rowsPerPageOptions, count: searchResult.total_size || 0, rowsPerPage: limit, page: page, onChangePage: onPageChange, onChangeRowsPerPage: onChangeRowsPerPage })));
};
exports.default = DatatableFooter;
//# sourceMappingURL=DatatableFooter.js.map