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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var core_1 = require("@material-ui/core");
var icons_1 = require("@material-ui/icons");
var classnames_1 = __importDefault(require("classnames"));
var i18n_1 = require("../../conf/i18n");
var toolbarStyles_1 = require("./styles/toolbarStyles");
var buttons_1 = require("../buttons");
var MultipleActions = function (_a) {
    var multipleActions = _a.multipleActions, selectedRows = _a.selectedRows;
    return (react_1.default.createElement(buttons_1.ActionMenu, { actionLabel: i18n_1.T.datatable.grouped_actions.label, variant: "contained", color: "primary", actions: multipleActions.map(function (a) { return ({
            label: a.label,
            onClick: a.action(selectedRows),
            visible: true
        }); }) }));
};
var DatatableToolbar = function (props) {
    var _a;
    var classes = toolbarStyles_1.useToolbarStyles();
    var _b = react_1.useState(null), anchorEl = _b[0], setAnchorEl = _b[1];
    var onSearch = props.onSearch, columns = props.columns, title = props.title, hasGlobalSearch = props.hasGlobalSearch, onToggleColumnVisibility = props.onToggleColumnVisibility, columnsVisibility = props.columnsVisibility, multipleActions = props.multipleActions, selectedRows = props.selectedRows;
    var numSelectedRows = selectedRows ? selectedRows.length : 0;
    var onSearchHandler = function (event) {
        onSearch({ global_search: event.target.value });
    };
    var handleClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
    };
    var displayMultipleActions = numSelectedRows > 0;
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(core_1.Toolbar, { className: classnames_1.default(classes.root, (_a = {}, _a[classes.highlight] = numSelectedRows > 0, _a)) },
            displayMultipleActions &&
                react_1.default.createElement(core_1.Fade, { in: displayMultipleActions },
                    react_1.default.createElement("div", { className: classes.actionsContainer },
                        react_1.default.createElement("div", { className: classes.title },
                            react_1.default.createElement(core_1.Typography, { color: "inherit", variant: "subtitle1" },
                                " ",
                                i18n_1.T.datatable.grouped_actions.rows_selected(numSelectedRows))),
                        react_1.default.createElement(MultipleActions, { multipleActions: multipleActions, selectedRows: selectedRows }))),
            !displayMultipleActions &&
                react_1.default.createElement(core_1.Fade, { in: !displayMultipleActions },
                    react_1.default.createElement("div", { className: classes.actionsContainer },
                        react_1.default.createElement("div", { className: classes.title },
                            react_1.default.createElement(core_1.Typography, { variant: "h6", id: "tableTitle" }, title)),
                        react_1.default.createElement("div", { className: classes.actions },
                            react_1.default.createElement("div", null,
                                react_1.default.createElement(buttons_1.IconBtn, { title: i18n_1.T.datatable.show_column_chooser, "aria-owns": anchorEl ? "column-visibility" : undefined, "aria-haspopup": "true", onClick: handleClick },
                                    react_1.default.createElement(icons_1.VisibilityOff, null)),
                                react_1.default.createElement(core_1.Menu, { id: "column-visibility", anchorEl: anchorEl, open: Boolean(anchorEl), onClose: handleClose }, columns.map(function (col) {
                                    return react_1.default.createElement(core_1.ListItem, { key: col.field_name, dense: true, button: true, onClick: onToggleColumnVisibility(col), className: classes.columnVisibilityListItems },
                                        react_1.default.createElement(core_1.Checkbox, { checked: columnsVisibility[col.field_name], tabIndex: -1, disableRipple: true }),
                                        react_1.default.createElement(core_1.ListItemText, { primary: col.label, className: classes.noPadding }));
                                }))),
                            hasGlobalSearch &&
                                react_1.default.createElement("div", { className: classes.actions },
                                    react_1.default.createElement(core_1.TextField, { type: i18n_1.T.global.search, className: classes.textField, onChange: onSearchHandler, InputProps: {
                                            startAdornment: (react_1.default.createElement(core_1.InputAdornment, { position: "start" },
                                                react_1.default.createElement(icons_1.Search, null)))
                                        } }))))))));
};
exports.default = DatatableToolbar;
//# sourceMappingURL=DatatableToolbar.js.map