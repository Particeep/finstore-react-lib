"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeMaxStyleClass = exports.computeMinStyleClass = exports.computeShareStyleClass = exports.computeNewTicks = exports.computeInitialSuggestedTicks = exports.amountSuggestMaxWidth = void 0;
var bignumber_js_1 = require("bignumber.js");
//TODO: add unit tests for functions below
exports.amountSuggestMaxWidth = 430;
var buildInitialSuggestionPositions = function (nbSuggestions) {
    return Array(nbSuggestions).fill(0)
        .map(function (a, index) { return index - Math.floor(nbSuggestions / 2); });
};
var computeInitialSuggestedTicks = function (amount, sharePrice, nbSuggestions) {
    var numberTicks = Math.ceil(new bignumber_js_1.BigNumber(amount).dividedBy(sharePrice).toNumber());
    var ticksPositions = buildInitialSuggestionPositions(nbSuggestions);
    return ticksPositions.map(function (p) { return p + numberTicks; });
};
exports.computeInitialSuggestedTicks = computeInitialSuggestedTicks;
var canPick = function (amount, tickToPick, sharePrice) {
    return amount && new bignumber_js_1.BigNumber(tickToPick).multipliedBy(sharePrice).isEqualTo(amount);
};
var maybePickOneTick = function (amount, tickToPick, sharePrice) {
    if (canPick(amount, tickToPick, sharePrice)) {
        return tickToPick;
    }
    return undefined;
};
var computeSuggestionsTendTowardsMin = function (amount, suggestedTicks, sharePrice, min) {
    var newSuggestedTicks = suggestedTicks.map(function (tick) { return tick + 1; });
    if ((newSuggestedTicks[0] * sharePrice) < min) {
        return computeSuggestionsTendTowardsMin(amount, newSuggestedTicks, sharePrice, min);
    }
    else {
        return {
            suggestedTicks: newSuggestedTicks,
            pickedTick: maybePickOneTick(amount, newSuggestedTicks[0], sharePrice)
        };
    }
};
var computeSuggestionsTendTowardsMax = function (amount, suggestedTicks, sharePrice, max) {
    var newSuggestedTicks = suggestedTicks.map(function (tick) { return tick - 1; });
    if ((newSuggestedTicks[newSuggestedTicks.length - 1] * sharePrice) > max) {
        return computeSuggestionsTendTowardsMax(amount, newSuggestedTicks, sharePrice, max);
    }
    else {
        return {
            suggestedTicks: newSuggestedTicks,
            pickedTick: maybePickOneTick(amount, newSuggestedTicks[newSuggestedTicks.length - 1], sharePrice)
        };
    }
};
var computeNewTicks = function (amount, sharePrice, min, max, nbSuggestions) {
    var sanitizedAmount = amount || min || 0;
    var initialSuggestedTicks = exports.computeInitialSuggestedTicks(sanitizedAmount, sharePrice, nbSuggestions);
    if (initialSuggestedTicks[0] * sharePrice < min) {
        return computeSuggestionsTendTowardsMin(sanitizedAmount, initialSuggestedTicks, sharePrice, min);
    }
    else if (initialSuggestedTicks[initialSuggestedTicks.length - 1] * sharePrice > max) {
        return computeSuggestionsTendTowardsMax(sanitizedAmount, initialSuggestedTicks, sharePrice, max);
    }
    else {
        return {
            suggestedTicks: initialSuggestedTicks,
            pickedTick: maybePickOneTick(amount, initialSuggestedTicks[1], sharePrice)
        };
    }
};
exports.computeNewTicks = computeNewTicks;
var isFactorOf = function (factor, number) {
    return new bignumber_js_1.BigNumber(factor).dividedBy(number).isInteger();
};
var computeShareStyleClass = function (amount, sharePrice) {
    if (!amount) {
        return "";
    }
    if (isFactorOf(amount, sharePrice)) {
        return "success";
    }
    else {
        return "error";
    }
};
exports.computeShareStyleClass = computeShareStyleClass;
var computeMinStyleClass = function (amount, min) {
    if (!amount) {
        return "";
    }
    if (amount >= min) {
        return "success";
    }
    else {
        return "error";
    }
};
exports.computeMinStyleClass = computeMinStyleClass;
var computeMaxStyleClass = function (amount, max) {
    if (!amount) {
        return "";
    }
    if (amount <= max) {
        return "success";
    }
    else {
        return "error";
    }
};
exports.computeMaxStyleClass = computeMaxStyleClass;
//# sourceMappingURL=helpers.js.map