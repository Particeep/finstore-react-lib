import { __assign, __spreadArray } from '../../node_modules/tslib/tslib.es6.js';
import React__default, { useState } from 'react';
import { makeStyles, TextField } from '@material-ui/core';
import { paper } from '../../theme/overrides/paper.js';
import Autocomplete from '../../node_modules/@material-ui/lab/esm/Autocomplete/Autocomplete.js';

var useStyles = makeStyles({
    root: {
        width: "100%"
    },
    highlightedPart: {
        fontWeight: 600
    },
    input: {
        padding: "0px !important"
    },
    listbox: {
        padding: 0
    },
    paper: paper
});
var splitOn = function (slicable) {
    var indices = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        indices[_i - 1] = arguments[_i];
    }
    return __spreadArray([0], indices).map(function (position, index, array) { return slicable.slice(position, array[index + 1]); });
};
var AutocompleteInput = function (_a) {
    var options = _a.options, placeholder = _a.placeholder, id = _a.id, onChange = _a.onChange, onSelect = _a.onSelect;
    var classes = useStyles();
    var _b = useState(""), inputValue = _b[0], setInputValue = _b[1];
    var renderInput = function (params) { return (React__default.createElement(TextField, __assign({}, params, { fullWidth: true, placeholder: placeholder }))); };
    var renderOption = function (option) {
        var position = option.label.toLowerCase().indexOf(inputValue.toLowerCase());
        var result = splitOn(option.label, position, position + inputValue.length);
        return (React__default.createElement("div", null, result.map(function (part, index) {
            if (index === 1) {
                return React__default.createElement("span", { key: String(index), className: classes.highlightedPart }, part);
            }
            else {
                return React__default.createElement("span", { key: String(index) }, part);
            }
        })));
    };
    var getOptionLabel = function (option) {
        return option.label;
    };
    var handleInputChange = function (event, newInputValue) {
        onChange(newInputValue);
        setInputValue(newInputValue);
    };
    var handleChange = function (event, newValue) {
        onSelect(newValue);
        if (!newValue) {
            setInputValue("");
        }
    };
    return (React__default.createElement(Autocomplete, __assign({ className: classes.root, classes: {
            inputRoot: classes.input,
            listbox: classes.listbox,
            paper: classes.paper
        }, autoSelect: true, options: options, onInputChange: handleInputChange, onChange: handleChange, renderInput: renderInput, renderOption: renderOption, getOptionLabel: getOptionLabel }, id)));
};

export { AutocompleteInput };
//# sourceMappingURL=AutocompleteInput.js.map
