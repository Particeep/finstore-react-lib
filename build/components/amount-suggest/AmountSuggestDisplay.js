import React__default from 'react';
import { makeStyles, Grid, TextField, InputAdornment, Typography } from '@material-ui/core';
import SuggestionBox from './SuggestionBox.js';
import SuggestionHint from './SuggestionHint.js';
import { T } from '../../conf/i18n.js';
import { amountSuggestMaxWidth } from './helpers.js';
import { IconBtn } from '../buttons/IconBtn.js';
import '../buttons/ActionMenu.js';
import Remove from '../../node_modules/@material-ui/icons/esm/Remove.js';
import Add from '../../node_modules/@material-ui/icons/esm/Add.js';

var useStyles = makeStyles(function (theme) { return ({
    centerContent: {
        textAlign: "center",
        display: "grid"
    },
    field: {
        maxWidth: amountSuggestMaxWidth
    },
    input: {
        color: theme.palette.text.primary,
        fontSize: theme.typography.subtitle1.fontSize
    },
    switchAction: {
        alignSelf: "center",
        height: "30px !important",
        width: "30px !important"
    },
    suggestionContainer: {
        display: "inline-flex",
        margin: theme.spacing(2, 0),
        maxWidth: amountSuggestMaxWidth,
        justifyContent: "center"
    }
}); });
var AmountSuggestDisplay = function (props) {
    var classes = useStyles();
    var onAmountChange = props.onAmountChange, typedAmount = props.typedAmount, prev = props.prev, canPrev = props.canPrev, next = props.next, canNext = props.canNext, sharePrice = props.sharePrice, suggestedTicks = props.suggestedTicks, pick = props.pick, pickedTick = props.pickedTick, currency = props.currency, fundraiseType = props.fundraiseType, min = props.min, max = props.max;
    return (React__default.createElement(Grid, { container: true },
        React__default.createElement(Grid, { item: true, xs: 12, md: 12, className: classes.centerContent },
            React__default.createElement(TextField, { label: T.amount_suggest.amount.label, value: typedAmount, onChange: onAmountChange, classes: { root: classes.field }, InputProps: {
                    classes: { input: classes.input },
                    endAdornment: (React__default.createElement(InputAdornment, { position: "end" },
                        React__default.createElement(Typography, { variant: "subtitle1", classes: { root: classes.input } }, T.currency.symbol[currency])))
                } })),
        React__default.createElement(Grid, { item: true, xs: 12, md: 12, className: classes.centerContent },
            React__default.createElement("div", { className: classes.suggestionContainer },
                React__default.createElement(IconBtn, { className: classes.switchAction, onClick: prev, disabled: !canPrev },
                    React__default.createElement(Remove, null)),
                suggestedTicks && suggestedTicks.map(function (suggestion, index) { return (React__default.createElement(SuggestionBox, { key: "suggestion-" + index, pick: pick, pickedTick: pickedTick, currency: currency, fundraiseType: fundraiseType, sharePrice: sharePrice, suggestion: suggestion })); }),
                React__default.createElement(IconBtn, { className: classes.switchAction, onClick: next, disabled: !canNext },
                    React__default.createElement(Add, null)))),
        React__default.createElement(Grid, { item: true, xs: 12, md: 12, className: classes.centerContent },
            React__default.createElement(SuggestionHint, { amount: typedAmount, sharePrice: sharePrice, currency: currency, min: min, max: max }))));
};

export { AmountSuggestDisplay as default };
//# sourceMappingURL=AmountSuggestDisplay.js.map
