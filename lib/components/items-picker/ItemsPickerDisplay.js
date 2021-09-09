"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemsPickerDisplay = void 0;
var react_1 = __importDefault(require("react"));
var i18n_1 = require("../../conf/i18n");
var core_1 = require("@material-ui/core");
var ItemsList_1 = __importDefault(require("./ItemsList"));
var ItemsPickerHead_1 = __importDefault(require("./ItemsPickerHead"));
var classnames_1 = __importDefault(require("classnames"));
var useStyles = core_1.makeStyles(function (theme) { return ({
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
    var isSmallScreen = core_1.useMediaQuery("(max-width: 500px)");
    return (react_1.default.createElement("div", { className: classes.root },
        react_1.default.createElement(core_1.Typography, { className: classes.title }, title),
        react_1.default.createElement(core_1.Grid, { container: true },
            react_1.default.createElement(core_1.Grid, { item: true, md: 6, xs: 12, sm: 12, className: classes.grid },
                react_1.default.createElement("div", { className: classnames_1.default(classes.header, (_a = {},
                        _a[classes.smallHeader] = isSmallScreen,
                        _a)) },
                    react_1.default.createElement(ItemsPickerHead_1.default, { title: i18n_1.T.items_pickers.item.to_select.label, itemsSize: items.length, action: selectAllItems, actionLabel: i18n_1.T.items_pickers.select_all }),
                    react_1.default.createElement(core_1.TextField, { className: classes.searchField, placeholder: i18n_1.T.global.search, onChange: searchItems })),
                react_1.default.createElement("div", { className: classes.itemsList },
                    react_1.default.createElement(ItemsList_1.default, { items: items, action: "SELECT", toggleItem: toggleItem, renderItem: renderItem }),
                    react_1.default.createElement("div", { className: classes.loadMore },
                        react_1.default.createElement(core_1.Button, { color: "primary", onClick: loadMoreItems }, i18n_1.T.global.load_more)))),
            react_1.default.createElement(core_1.Grid, { item: true, md: 6, xs: 12, sm: 12, className: classes.grid },
                react_1.default.createElement("div", { className: classes.header },
                    react_1.default.createElement(ItemsPickerHead_1.default, { title: i18n_1.T.items_pickers.item.selected.label, itemsSize: selectedItems.length, action: removeAllItems, actionLabel: i18n_1.T.items_pickers.deselect_all })),
                react_1.default.createElement("div", { className: classes.itemsList },
                    react_1.default.createElement(ItemsList_1.default, { items: selectedItems, action: "DESELECT", toggleItem: toggleItem, renderItem: renderItem }))))));
};
exports.ItemsPickerDisplay = ItemsPickerDisplay;
//# sourceMappingURL=ItemsPickerDisplay.js.map