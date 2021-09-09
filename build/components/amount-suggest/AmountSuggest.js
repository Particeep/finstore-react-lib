import React__default, { useState, useEffect } from 'react';
import { BigNumber } from '../../node_modules/bignumber.js/bignumber.mjs.js';
import AmountSuggestDisplay from './AmountSuggestDisplay.js';
import { amountSuggestMaxWidth, computeNewTicks } from './helpers.js';
import { useWindowSize } from '../../utils/useWindowSize.js';

var AmountSuggest = function (props) {
    var min = props.min, max = props.max, onSelect = props.onSelect, sharePrice = props.sharePrice, currency = props.currency, fundraiseType = props.fundraiseType;
    var windowSize = useWindowSize();
    var computeSuggestionNb = function () { return windowSize.width > amountSuggestMaxWidth ? 3 : 2; };
    var _a = useState(), suggestedTicks = _a[0], setSuggestedTicks = _a[1];
    var _b = useState(), pickedTick = _b[0], setPickedTick = _b[1];
    var _c = useState(), typedAmount = _c[0], setTypedAmount = _c[1];
    var _d = useState(computeSuggestionNb()), suggestionNumber = _d[0], setSuggestionNumber = _d[1];
    var sanitizedPickedTick = pickedTick || suggestedTicks && suggestedTicks[0];
    var onTypedAmountChange = function (event) {
        var amount = +event.target.value;
        setTypedAmount(amount);
        setSuggestion(amount, suggestionNumber);
    };
    useEffect(function () {
        setSuggestion(0, suggestionNumber);
    }, []);
    useEffect(function () {
        var suggestionsNb = computeSuggestionNb();
        setSuggestionNumber(suggestionsNb);
        setSuggestion(0, suggestionsNb);
        setTypedAmount(0);
        setPickedTick(0);
    }, [windowSize]);
    var setSuggestion = function (amount, suggestionNumber) {
        var suggestions = computeNewTicks(amount, sharePrice, min, max, suggestionNumber);
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
        pick(Math.max(new BigNumber(min).dividedBy(sharePrice).toNumber(), sanitizedPickedTick - 1));
    };
    var next = function () {
        if (pickedTick === suggestedTicks[suggestedTicks.length - 1]) {
            setSuggestedTicks(suggestedTicks.map(function (tick) { return tick + 1; }));
        }
        pick(Math.min(new BigNumber(max).dividedBy(sharePrice).toNumber(), sanitizedPickedTick + 1));
    };
    var canPrev = function () {
        return min <= (sanitizedPickedTick - 1) * sharePrice;
    };
    var canNext = function () {
        return !max || max >= (sanitizedPickedTick + 1) * props.sharePrice;
    };
    return (React__default.createElement(AmountSuggestDisplay, { onAmountChange: onTypedAmountChange, typedAmount: typedAmount, prev: prev, canPrev: canPrev(), next: next, canNext: canNext(), sharePrice: sharePrice, suggestedTicks: suggestedTicks, pick: pick, pickedTick: pickedTick, currency: currency, fundraiseType: fundraiseType, min: min, max: max }));
};

export { AmountSuggest };
//# sourceMappingURL=AmountSuggest.js.map
