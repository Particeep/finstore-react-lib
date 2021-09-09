import { __assign } from '../../node_modules/tslib/tslib.es6.js';
import React__default from 'react';
import MUIPlacesAutocomplete from '../../node_modules/mui-places-autocomplete/dist/index.js';
import { makeStyles } from '@material-ui/core/styles';
import { d as dist } from '../../_virtual/index.js_commonjs-module';

var useStyles = makeStyles({
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
            dist.exports.geocodeByPlaceID(suggestion.place_id).then(function (place) {
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
    var renderTarget = function () { return (React__default.createElement("div", null)); };
    return (React__default.createElement("div", { className: classes.root },
        React__default.createElement(MUIPlacesAutocomplete, { onSuggestionSelected: onAddressSelect, initialValue: value, renderTarget: renderTarget, textFieldProps: { placeholder: placeholder, required: required, fullWidth: true } })));
};

export { GeosuggestInput };
//# sourceMappingURL=GeosuggestInput.js.map
