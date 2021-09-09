"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutocompleteInput = void 0;
var react_1 = __importStar(require("react"));
var Autocomplete_1 = __importDefault(require("@material-ui/lab/Autocomplete"));
var core_1 = require("@material-ui/core");
var paper_1 = require("../../theme/overrides/paper");
var useStyles = core_1.makeStyles({
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
    paper: paper_1.paper
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
    var _b = react_1.useState(""), inputValue = _b[0], setInputValue = _b[1];
    var renderInput = function (params) { return (react_1.default.createElement(core_1.TextField, __assign({}, params, { fullWidth: true, placeholder: placeholder }))); };
    var renderOption = function (option) {
        var position = option.label.toLowerCase().indexOf(inputValue.toLowerCase());
        var result = splitOn(option.label, position, position + inputValue.length);
        return (react_1.default.createElement("div", null, result.map(function (part, index) {
            if (index === 1) {
                return react_1.default.createElement("span", { key: String(index), className: classes.highlightedPart }, part);
            }
            else {
                return react_1.default.createElement("span", { key: String(index) }, part);
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
    return (react_1.default.createElement(Autocomplete_1.default, __assign({ className: classes.root, classes: {
            inputRoot: classes.input,
            listbox: classes.listbox,
            paper: classes.paper
        }, autoSelect: true, options: options, onInputChange: handleInputChange, onChange: handleChange, renderInput: renderInput, renderOption: renderOption, getOptionLabel: getOptionLabel }, id)));
};
exports.AutocompleteInput = AutocompleteInput;
//# sourceMappingURL=AutocompleteInput.js.map