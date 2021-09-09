import React__default from 'react';
import { makeStyles, Paper, Grid, Typography } from '@material-ui/core';
import { FormattedNumber } from '../formatters/FormattedAmount.js';
import { T } from '../../conf/i18n.js';
import '../../node_modules/moment/moment.js';
import { amountSuggestMaxWidth, computeShareStyleClass, computeMinStyleClass, computeMaxStyleClass } from './helpers.js';
import Info from '../../node_modules/@material-ui/icons/esm/Info.js';

var useStyles = makeStyles(function (theme) { return ({
    root: {
        maxWidth: amountSuggestMaxWidth,
        display: "inline-block",
        padding: theme.spacing(1, 0),
        border: "1px solid " + theme.inputs.border.color,
        borderRadius: theme.inputs.border.radius
    },
    helpIcon: {
        color: theme.typography.body1.color,
        alignSelf: "center"
    },
    hints: {
        textAlign: "left"
    },
    error: {
        color: theme.palette.error.main
    },
    success: {
        color: theme.palette.success.main
    }
}); });
var SuggestionHint = function (_a) {
    var amount = _a.amount, sharePrice = _a.sharePrice, min = _a.min, max = _a.max, currency = _a.currency;
    var classes = useStyles();
    var sharesStyleClass = computeShareStyleClass(amount, sharePrice);
    var minStyleClass = computeMinStyleClass(amount, min);
    var maxStyleClass = computeMaxStyleClass(amount, max);
    return (React__default.createElement(Paper, { elevation: 0, className: classes.root },
        React__default.createElement(Grid, { container: true },
            React__default.createElement(Grid, { item: true, xs: 2, className: classes.helpIcon },
                React__default.createElement(Info, null)),
            React__default.createElement(Grid, { item: true, xs: 9, className: classes.hints },
                React__default.createElement(Typography, { variant: "subtitle2" },
                    T.amount_suggest.hint.factor_of,
                    React__default.createElement("span", { className: classes[sharesStyleClass] },
                        React__default.createElement(FormattedNumber, { value: sharePrice, currency: currency, variant: "currency-standard" }))),
                React__default.createElement(Typography, { variant: "subtitle2" },
                    T.amount_suggest.hint.min,
                    React__default.createElement("span", { className: classes[minStyleClass] },
                        React__default.createElement(FormattedNumber, { value: min, currency: currency, variant: "currency-standard" }))),
                React__default.createElement(Typography, { variant: "subtitle2" },
                    T.amount_suggest.hint.max,
                    React__default.createElement("span", { className: classes[maxStyleClass] },
                        React__default.createElement(FormattedNumber, { value: max, currency: currency, variant: "currency-standard" })))))));
};

export { SuggestionHint as default };
//# sourceMappingURL=SuggestionHint.js.map
