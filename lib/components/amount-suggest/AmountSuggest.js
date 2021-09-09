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
exports.AmountSuggest = void 0;
var react_1 = __importStar(require("react"));
var bignumber_js_1 = require("bignumber.js");
var AmountSuggestDisplay_1 = __importDefault(require("./AmountSuggestDisplay"));
var helpers_1 = require("./helpers");
var utils_1 = require("../../utils");
var AmountSuggest = function (props) {
    var min = props.min, max = props.max, onSelect = props.onSelect, sharePrice = props.sharePrice, currency = props.currency, fundraiseType = props.fundraiseType;
    var windowSize = utils_1.useWindowSize();
    var computeSuggestionNb = function () { return windowSize.width > helpers_1.amountSuggestMaxWidth ? 3 : 2; };
    var _a = react_1.useState(), suggestedTicks = _a[0], setSuggestedTicks = _a[1];
    var _b = react_1.useState(), pickedTick = _b[0], setPickedTick = _b[1];
    var _c = react_1.useState(), typedAmount = _c[0], setTypedAmount = _c[1];
    var _d = react_1.useState(computeSuggestionNb()), suggestionNumber = _d[0], setSuggestionNumber = _d[1];
    var sanitizedPickedTick = pickedTick || suggestedTicks && suggestedTicks[0];
    var onTypedAmountChange = function (event) {
        var amount = +event.target.value;
        setTypedAmount(amount);
        setSuggestion(amount, suggestionNumber);
    };
    react_1.useEffect(function () {
        setSuggestion(0, suggestionNumber);
    }, []);
    react_1.useEffect(function () {
        var suggestionsNb = computeSuggestionNb();
        setSuggestionNumber(suggestionsNb);
        setSuggestion(0, suggestionsNb);
        setTypedAmount(0);
        setPickedTick(0);
    }, [windowSize]);
    var setSuggestion = function (amount, suggestionNumber) {
        var suggestions = helpers_1.computeNewTicks(amount, sharePrice, min, max, suggestionNumber);
        setSuggestedTicks(suggestions.suggestedTicks);
        if (suggestions && amount) {
            pick(suggestions.pickedTick);
        }
    };
    var pick = function (tick) {
        var pickedTick = Math.round(tick);
        var amountPicked = pickedTick * props.sharePrice;
        setPickedTick(pickedTick);
        if (amountPicked) {
            onSelect(amountPicked);
            setTypedAmount(amountPicked);
        }
    };
    var prev = function () {
        if (pickedTick === suggestedTicks[0]) {
            setSuggestedTicks(suggestedTicks.map(function (tick) { return tick - 1; }));
        }
        pick(Math.max(new bignumber_js_1.BigNumber(min).dividedBy(sharePrice).toNumber(), sanitizedPickedTick - 1));
    };
    var next = function () {
        if (pickedTick === suggestedTicks[suggestedTicks.length - 1]) {
            setSuggestedTicks(suggestedTicks.map(function (tick) { return tick + 1; }));
        }
        pick(Math.min(new bignumber_js_1.BigNumber(max).dividedBy(sharePrice).toNumber(), sanitizedPickedTick + 1));
    };
    var canPrev = function () {
        return min <= (sanitizedPickedTick - 1) * sharePrice;
    };
    var canNext = function () {
        return !max || max >= (sanitizedPickedTick + 1) * props.sharePrice;
    };
    return (react_1.default.createElement(AmountSuggestDisplay_1.default, { onAmountChange: onTypedAmountChange, typedAmount: typedAmount, prev: prev, canPrev: canPrev(), next: next, canNext: canNext(), sharePrice: sharePrice, suggestedTicks: suggestedTicks, pick: pick, pickedTick: pickedTick, currency: currency, fundraiseType: fundraiseType, min: min, max: max }));
};
exports.AmountSuggest = AmountSuggest;
//# sourceMappingURL=AmountSuggest.js.map