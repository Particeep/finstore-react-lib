"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var icons_1 = require("@material-ui/icons");
var formatters_1 = require("../formatters");
var helpers_1 = require("./helpers");
var i18n_1 = require("../../conf/i18n");
var useStyles = core_1.makeStyles(function (theme) { return ({
    root: {
        maxWidth: helpers_1.amountSuggestMaxWidth,
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
    var sharesStyleClass = helpers_1.computeShareStyleClass(amount, sharePrice);
    var minStyleClass = helpers_1.computeMinStyleClass(amount, min);
    var maxStyleClass = helpers_1.computeMaxStyleClass(amount, max);
    return (react_1.default.createElement(core_1.Paper, { elevation: 0, className: classes.root },
        react_1.default.createElement(core_1.Grid, { container: true },
            react_1.default.createElement(core_1.Grid, { item: true, xs: 2, className: classes.helpIcon },
                react_1.default.createElement(icons_1.Info, null)),
            react_1.default.createElement(core_1.Grid, { item: true, xs: 9, className: classes.hints },
                react_1.default.createElement(core_1.Typography, { variant: "subtitle2" },
                    i18n_1.T.amount_suggest.hint.factor_of,
                    react_1.default.createElement("span", { className: classes[sharesStyleClass] },
                        react_1.default.createElement(formatters_1.FormattedNumber, { value: sharePrice, currency: currency, variant: "currency-standard" }))),
                react_1.default.createElement(core_1.Typography, { variant: "subtitle2" },
                    i18n_1.T.amount_suggest.hint.min,
                    react_1.default.createElement("span", { className: classes[minStyleClass] },
                        react_1.default.createElement(formatters_1.FormattedNumber, { value: min, currency: currency, variant: "currency-standard" }))),
                react_1.default.createElement(core_1.Typography, { variant: "subtitle2" },
                    i18n_1.T.amount_suggest.hint.max,
                    react_1.default.createElement("span", { className: classes[maxStyleClass] },
                        react_1.default.createElement(formatters_1.FormattedNumber, { value: max, currency: currency, variant: "currency-standard" })))))));
};
exports.default = SuggestionHint;
//# sourceMappingURL=SuggestionHint.js.map