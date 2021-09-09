import { makeStyles } from '@material-ui/core';

var useHeadStyles = makeStyles(function (theme) { return ({
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

export { useHeadStyles };
//# sourceMappingURL=headStyles.js.map
