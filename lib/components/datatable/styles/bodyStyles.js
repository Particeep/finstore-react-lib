"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBodyStyles = void 0;
var core_1 = require("@material-ui/core");
exports.useBodyStyles = core_1.makeStyles(function (theme) { return ({
    root: {
        "&:nth-of-type(odd)": {
            backgroundColor: "#fbfbfc"
        },
        "&:nth-of-type(even)": {
            backgroundColor: "white"
        },
        "&:nth-of-type(odd).Mui-selected, &:nth-of-type(even).Mui-selected": {
            backgroundColor: core_1.fade(theme.palette.secondary.light, theme.palette.action.selectedOpacity)
        }
    },
    tableRow: {
        "& > td:first-child": {
            paddingLeft: theme.spacing(2) + "px !important"
        },
        "& > td:last-child": {
            paddingRight: theme.spacing(2) + "px !important"
        }
    },
    expandedCell: {
        width: 30,
        "& > .MuiIconButton-sizeSmall": {
            height: "30px !important",
            width: "30px !important"
        }
    },
    expandedRow: {
        textAlign: "left"
    },
    checkboxCell: {
        width: 45,
        minHeight: 40,
        padding: theme.spacing(0.5, 1) + " !important"
    },
    actionCell: {
        textAlign: "right",
        padding: theme.spacing(0.5, 1) + " !important"
    },
    emptyCellIcon: {
        fontSize: 35
    }
}); });
//# sourceMappingURL=bodyStyles.js.map