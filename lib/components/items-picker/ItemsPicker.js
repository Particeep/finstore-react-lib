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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemsPicker = void 0;
var react_1 = __importStar(require("react"));
var ItemsPickerDisplay_1 = require("./ItemsPickerDisplay");
var ItemsPicker = function (props) {
    var title = props.title, items = props.items, updateCriteria = props.updateCriteria, onChange = props.onChange, renderItem = props.renderItem;
    var _a = react_1.useState([]), selectedItems = _a[0], setSelectedItem = _a[1];
    react_1.useEffect(function () {
        onChange(selectedItems);
    }, [selectedItems]);
    var isAlreadySelected = function (p) { return !selectedItems.some(function (sp) { return sp.id === p.id; }); };
    var selectableItems = items.filter(isAlreadySelected);
    var searchItems = function (event) {
        var text = event.target.value;
        updateCriteria({ global_search: text });
    };
    var loadMoreItems = function () {
        var limit = items.length + 5;
        updateCriteria({ limit: limit });
    };
    var selectAllItems = function () {
        setSelectedItem(__spreadArray(__spreadArray([], selectedItems), selectableItems));
    };
    var removeAllItems = function () {
        setSelectedItem([]);
    };
    var toggleItem = function (item, action) { return function () {
        if (action === "SELECT") {
            setSelectedItem(__spreadArray(__spreadArray([], selectedItems), [item]));
        }
        else {
            setSelectedItem(selectedItems.filter(function (i) { return i.id !== item.id; }));
        }
    }; };
    return (react_1.default.createElement(ItemsPickerDisplay_1.ItemsPickerDisplay, { title: title, items: selectableItems, selectedItems: selectedItems, searchItems: searchItems, loadMoreItems: loadMoreItems, selectAllItems: selectAllItems, removeAllItems: removeAllItems, toggleItem: toggleItem, renderItem: renderItem }));
};
exports.ItemsPicker = ItemsPicker;
//# sourceMappingURL=ItemsPicker.js.map