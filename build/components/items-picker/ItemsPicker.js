import { __spreadArray } from '../../node_modules/tslib/tslib.es6.js';
import React__default, { useState, useEffect } from 'react';
import { ItemsPickerDisplay } from './ItemsPickerDisplay.js';

var ItemsPicker = function (props) {
    var title = props.title, items = props.items, updateCriteria = props.updateCriteria, onChange = props.onChange, renderItem = props.renderItem;
    var _a = useState([]), selectedItems = _a[0], setSelectedItem = _a[1];
    useEffect(function () {
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
    return (React__default.createElement(ItemsPickerDisplay, { title: title, items: selectableItems, selectedItems: selectedItems, searchItems: searchItems, loadMoreItems: loadMoreItems, selectAllItems: selectAllItems, removeAllItems: removeAllItems, toggleItem: toggleItem, renderItem: renderItem }));
};

export { ItemsPicker };
//# sourceMappingURL=ItemsPicker.js.map
