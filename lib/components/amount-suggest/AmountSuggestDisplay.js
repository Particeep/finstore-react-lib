"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var icons_1 = require("@material-ui/icons");
var SuggestionBox_1 = __importDefault(require("./SuggestionBox"));
var SuggestionHint_1 = __importDefault(require("./SuggestionHint"));
var i18n_1 = require("../../conf/i18n");
var helpers_1 = require("./helpers");
var buttons_1 = require("../buttons");
var useStyles = core_1.makeStyles(function (theme) { return ({
    centerContent: {
        textAlign: "center",
        display: "grid"
    },
    field: {
        maxWidth: helpers_1.amountSuggestMaxWidth
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
        maxWidth: helpers_1.amountSuggestMaxWidth,
        justifyContent: "center"
    }
}); });
var AmountSuggestDisplay = function (props) {
    var classes = useStyles();
    var onAmountChange = props.onAmountChange, typedAmount = props.typedAmount, prev = props.prev, canPrev = props.canPrev, next = props.next, canNext = props.canNext, sharePrice = props.sharePrice, suggestedTicks = props.suggestedTicks, pick = props.pick, pickedTick = props.pickedTick, currency = props.currency, fundraiseType = props.fundraiseType, min = props.min, max = props.max;
    return (react_1.default.createElement(core_1.Grid, { container: true },
        react_1.default.createElement(core_1.Grid, { item: true, xs: 12, md: 12, className: classes.centerContent },
            react_1.default.createElement(core_1.TextField, { label: i18n_1.T.amount_suggest.amount.label, value: typedAmount, onChange: onAmountChange, classes: { root: classes.field }, InputProps: {
                    classes: { input: classes.input },
                    endAdornment: (react_1.default.createElement(core_1.InputAdornment, { position: "end" },
                        react_1.default.createElement(core_1.Typography, { variant: "subtitle1", classes: { root: classes.input } }, i18n_1.T.currency.symbol[currency])))
                } })),
        react_1.default.createElement(core_1.Grid, { item: true, xs: 12, md: 12, className: classes.centerContent },
            react_1.default.createElement("div", { className: classes.suggestionContainer },
                react_1.default.createElement(buttons_1.IconBtn, { className: classes.switchAction, onClick: prev, disabled: !canPrev },
                    react_1.default.createElement(icons_1.Remove, null)),
                suggestedTicks && suggestedTicks.map(function (suggestion, index) { return (react_1.default.createElement(SuggestionBox_1.default, { key: "suggestion-" + index, pick: pick, pickedTick: pickedTick, currency: currency, fundraiseType: fundraiseType, sharePrice: sharePrice, suggestion: suggestion })); }),
                react_1.default.createElement(buttons_1.IconBtn, { className: classes.switchAction, onClick: next, disabled: !canNext },
                    react_1.default.createElement(icons_1.Add, null)))),
        react_1.default.createElement(core_1.Grid, { item: true, xs: 12, md: 12, className: classes.centerContent },
            react_1.default.createElement(SuggestionHint_1.default, { amount: typedAmount, sharePrice: sharePrice, currency: currency, min: min, max: max }))));
};
exports.default = AmountSuggestDisplay;
//# sourceMappingURL=AmountSuggestDisplay.js.map