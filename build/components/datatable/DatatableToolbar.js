import React__default, { useState } from 'react';
import { Toolbar, Fade, Typography, Menu, ListItem, Checkbox, ListItemText, TextField, InputAdornment } from '@material-ui/core';
import classNames from 'classnames';
import { T } from '../../conf/i18n.js';
import { useToolbarStyles } from './styles/toolbarStyles.js';
import { IconBtn } from '../buttons/IconBtn.js';
import { ActionMenu } from '../buttons/ActionMenu.js';
import VisibilityOff from '../../node_modules/@material-ui/icons/esm/VisibilityOff.js';
import Search from '../../node_modules/@material-ui/icons/esm/Search.js';

var MultipleActions = function (_a) {
    var multipleActions = _a.multipleActions, selectedRows = _a.selectedRows;
    return (React__default.createElement(ActionMenu, { actionLabel: T.datatable.grouped_actions.label, variant: "contained", color: "primary", actions: multipleActions.map(function (a) { return ({
            label: a.label,
            onClick: a.action(selectedRows),
            visible: true
        }); }) }));
};
var DatatableToolbar = function (props) {
    var _a;
    var classes = useToolbarStyles();
    var _b = useState(null), anchorEl = _b[0], setAnchorEl = _b[1];
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
    return (React__default.createElement("div", null,
        React__default.createElement(Toolbar, { className: classNames(classes.root, (_a = {}, _a[classes.highlight] = numSelectedRows > 0, _a)) },
            displayMultipleActions &&
                React__default.createElement(Fade, { in: displayMultipleActions },
                    React__default.createElement("div", { className: classes.actionsContainer },
                        React__default.createElement("div", { className: classes.title },
                            React__default.createElement(Typography, { color: "inherit", variant: "subtitle1" },
                                " ",
                                T.datatable.grouped_actions.rows_selected(numSelectedRows))),
                        React__default.createElement(MultipleActions, { multipleActions: multipleActions, selectedRows: selectedRows }))),
            !displayMultipleActions &&
                React__default.createElement(Fade, { in: !displayMultipleActions },
                    React__default.createElement("div", { className: classes.actionsContainer },
                        React__default.createElement("div", { className: classes.title },
                            React__default.createElement(Typography, { variant: "h6", id: "tableTitle" }, title)),
                        React__default.createElement("div", { className: classes.actions },
                            React__default.createElement("div", null,
                                React__default.createElement(IconBtn, { title: T.datatable.show_column_chooser, "aria-owns": anchorEl ? "column-visibility" : undefined, "aria-haspopup": "true", onClick: handleClick },
                                    React__default.createElement(VisibilityOff, null)),
                                React__default.createElement(Menu, { id: "column-visibility", anchorEl: anchorEl, open: Boolean(anchorEl), onClose: handleClose }, columns.map(function (col) {
                                    return React__default.createElement(ListItem, { key: col.field_name, dense: true, button: true, onClick: onToggleColumnVisibility(col), className: classes.columnVisibilityListItems },
                                        React__default.createElement(Checkbox, { checked: columnsVisibility[col.field_name], tabIndex: -1, disableRipple: true }),
                                        React__default.createElement(ListItemText, { primary: col.label, className: classes.noPadding }));
                                }))),
                            hasGlobalSearch &&
                                React__default.createElement("div", { className: classes.actions },
                                    React__default.createElement(TextField, { type: T.global.search, className: classes.textField, onChange: onSearchHandler, InputProps: {
                                            startAdornment: (React__default.createElement(InputAdornment, { position: "start" },
                                                React__default.createElement(Search, null)))
                                        } }))))))));
};

export { DatatableToolbar as default };
//# sourceMappingURL=DatatableToolbar.js.map
