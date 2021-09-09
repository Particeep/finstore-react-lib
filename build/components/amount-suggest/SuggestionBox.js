import React__default from 'react';
import { makeStyles, Button } from '@material-ui/core';
import { FormattedNumber } from '../formatters/FormattedAmount.js';
import { T } from '../../conf/i18n.js';
import 'moment';

var useStyles = makeStyles(function (theme) { return ({
    root: {
        minWidth: 108,
        margin: theme.spacing(0, 1),
        padding: theme.spacing(1, 0.5),
        borderColor: theme.inputs.border.color
    },
    default: {
        color: "white"
    },
    selected: {
        color: theme.typography.body1.color
    },
    amount: {
        display: "block",
        fontSize: 16,
        fontWeight: 500
    },
    sharesNumber: {
        textTransform: "lowercase"
    }
}); });
var SuggestionBox = function (props) {
    var classes = useStyles();
    var suggestion = props.suggestion, pickedTick = props.pickedTick, sharePrice = props.sharePrice, currency = props.currency, pick = props.pick, fundraiseType = props.fundraiseType;
    var onClick = function (suggestion) { return function () {
        pick(suggestion);
    }; };
    var actionVariant = suggestion === pickedTick ? "contained" : "outlined";
    var actionColor = suggestion === pickedTick ? "primary" : "default";
    var labelColor = suggestion === pickedTick ? classes.default : classes.selected;
    return (React__default.createElement(Button, { onClick: onClick(suggestion), variant: actionVariant, color: actionColor, className: classes.root, classes: { label: labelColor } },
        React__default.createElement("div", null,
            React__default.createElement("span", { className: classes.amount },
                React__default.createElement(FormattedNumber, { value: suggestion * sharePrice, currency: currency, variant: "currency-standard" })),
            React__default.createElement("span", { className: classes.sharesNumber },
                suggestion,
                " ",
                T.amount_suggest.pick.label[fundraiseType]))));
};

export { SuggestionBox as default };
//# sourceMappingURL=SuggestionBox.js.map
