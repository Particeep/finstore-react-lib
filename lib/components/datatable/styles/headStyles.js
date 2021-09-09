"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHeadStyles = void 0;
var core_1 = require("@material-ui/core");
exports.useHeadStyles = core_1.makeStyles(function (theme) { return ({
    headerRow: {
        "& > th": {
            borderBottom: "1px solid " + theme.palette.divider
        },
        "& > th:first-child": {
            paddingLeft: theme.spacing(2) + "px !important"
        },
        "& > th:last-child": {
            paddingRight: theme.spacing(2) + "px !important"
        }
    },
    actionsCell: {
        background: "transparent !important"
    }
}); });
//# sourceMappingURL=headStyles.js.map