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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeosuggestInput = void 0;
var react_1 = __importDefault(require("react"));
var mui_places_autocomplete_1 = __importStar(require("mui-places-autocomplete"));
var styles_1 = require("@material-ui/core/styles");
var useStyles = styles_1.makeStyles({
    root: {
        position: "relative",
        width: "100%"
    }
});
var googleAddressMap = {
    street_number: "short_name",
    route: "long_name",
    locality: "long_name",
    country: "short_name",
    postal_code: "short_name"
};
var GeosuggestInput = function (_a) {
    var onPlaceChanged = _a.onPlaceChanged, value = _a.value, placeholder = _a.placeholder, required = _a.required;
    var classes = useStyles();
    var onAddressSelect = function (suggestion) {
        if (suggestion) {
            mui_places_autocomplete_1.geocodeByPlaceID(suggestion.place_id).then(function (place) {
                if (place.length > 0) {
                    onPlaceChanged(buildAddress(place[0]));
                }
            });
        }
    };
    var buildAddress = function (place) {
        return place.address_components.reduce(function (acc, addressItem) {
            var _a;
            var addressType = addressItem.types[0];
            return __assign(__assign({}, acc), (_a = {}, _a[addressType] = addressItem[googleAddressMap[addressType]], _a));
        }, {});
    };
    var renderTarget = function () { return (react_1.default.createElement("div", null)); };
    return (react_1.default.createElement("div", { className: classes.root },
        react_1.default.createElement(mui_places_autocomplete_1.default, { onSuggestionSelected: onAddressSelect, initialValue: value, renderTarget: renderTarget, textFieldProps: { placeholder: placeholder, required: required, fullWidth: true } })));
};
exports.GeosuggestInput = GeosuggestInput;
//# sourceMappingURL=GeosuggestInput.js.map