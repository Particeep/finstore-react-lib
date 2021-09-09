"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var formatters_1 = require("../formatters");
var i18n_1 = require("../../conf/i18n");
var useStyles = core_1.makeStyles(function (theme) { return ({
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
    return (react_1.default.createElement(core_1.Button, { onClick: onClick(suggestion), variant: actionVariant, color: actionColor, className: classes.root, classes: { label: labelColor } },
        react_1.default.createElement("div", null,
            react_1.default.createElement("span", { className: classes.amount },
                react_1.default.createElement(formatters_1.FormattedNumber, { value: suggestion * sharePrice, currency: currency, variant: "currency-standard" })),
            react_1.default.createElement("span", { className: classes.sharesNumber },
                suggestion,
                " ",
                i18n_1.T.amount_suggest.pick.label[fundraiseType]))));
};
exports.default = SuggestionBox;
//# sourceMappingURL=SuggestionBox.js.map