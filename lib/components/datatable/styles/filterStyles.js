"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFilterStyles = void 0;
var styles_1 = require("@material-ui/core/styles");
exports.useFilterStyles = styles_1.makeStyles(function (theme) { return ({
    root: {
        backgroundColor: theme.palette.background.default,
        opacity: 0.7
    },
    filterCell: {
        padding: theme.spacing(),
        borderBottom: "1px solid " + theme.palette.divider
    },
    filterRow: {
        "& > th:first-child": {
            paddingLeft: theme.spacing(2) + "px !important",
            borderBottom: "1px solid " + theme.palette.divider
        },
        "& > th:last-child": {
            paddingRight: theme.spacing(2) + "px !important",
            borderBottom: "1px solid " + theme.palette.divider
        }
    }
}); });
//# sourceMappingURL=filterStyles.js.map