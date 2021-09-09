import React__default from 'react';
import { T } from '../../conf/i18n.js';
import { makeStyles, useMediaQuery, Typography, Grid, TextField, Button } from '@material-ui/core';
import ItemsList from './ItemsList.js';
import ItemsPickerHead from './ItemsPickerHead.js';
import classNames from '../../node_modules/classnames/index.js';

var useStyles = makeStyles(function (theme) { return ({
    root: {
        justifyContent: "center",
        display: "block"
    },
    grid: {
        border: "1px solid " + theme.palette.divider
    },
    itemsList: {
        height: 400,
        overflow: "auto"
    },
    header: {
        padding: theme.spacing(),
        display: "flex",
        borderBottom: "1px solid " + theme.palette.divider,
        height: 60,
        alignItems: "center",
        "& > div:first-child": {
            flex: 1
        }
    },
    smallHeader: {
        flexFlow: "column",
        alignItems: "normal",
        height: "unset"
    },
    searchField: {
        margin: theme.spacing(0, 1)
    },
    loadMore: {
        textAlign: "center",
        padding: theme.spacing()
    },
    action: {
        float: "right"
    },
    title: {
        fontWeight: 600,
        padding: theme.spacing(1, 2)
    }
}); });
var ItemsPickerDisplay = function (props) {
    var _a;
    var classes = useStyles();
    var title = props.title, items = props.items, selectedItems = props.selectedItems, searchItems = props.searchItems, loadMoreItems = props.loadMoreItems, selectAllItems = props.selectAllItems, removeAllItems = props.removeAllItems, toggleItem = props.toggleItem, renderItem = props.renderItem;
    var isSmallScreen = useMediaQuery("(max-width: 500px)");
    return (React__default.createElement("div", { className: classes.root },
        React__default.createElement(Typography, { className: classes.title }, title),
        React__default.createElement(Grid, { container: true },
            React__default.createElement(Grid, { item: true, md: 6, xs: 12, sm: 12, className: classes.grid },
                React__default.createElement("div", { className: classNames(classes.header, (_a = {},
                        _a[classes.smallHeader] = isSmallScreen,
                        _a)) },
                    React__default.createElement(ItemsPickerHead, { title: T.items_pickers.item.to_select.label, itemsSize: items.length, action: selectAllItems, actionLabel: T.items_pickers.select_all }),
                    React__default.createElement(TextField, { className: classes.searchField, placeholder: T.global.search, onChange: searchItems })),
                React__default.createElement("div", { className: classes.itemsList },
                    React__default.createElement(ItemsList, { items: items, action: "SELECT", toggleItem: toggleItem, renderItem: renderItem }),
                    React__default.createElement("div", { className: classes.loadMore },
                        React__default.createElement(Button, { color: "primary", onClick: loadMoreItems }, T.global.load_more)))),
            React__default.createElement(Grid, { item: true, md: 6, xs: 12, sm: 12, className: classes.grid },
                React__default.createElement("div", { className: classes.header },
                    React__default.createElement(ItemsPickerHead, { title: T.items_pickers.item.selected.label, itemsSize: selectedItems.length, action: removeAllItems, actionLabel: T.items_pickers.deselect_all })),
                React__default.createElement("div", { className: classes.itemsList },
                    React__default.createElement(ItemsList, { items: selectedItems, action: "DESELECT", toggleItem: toggleItem, renderItem: renderItem }))))));
};

export { ItemsPickerDisplay };
//# sourceMappingURL=ItemsPickerDisplay.js.map
