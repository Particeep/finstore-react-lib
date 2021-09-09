import { makeStyles } from '@material-ui/core/styles';

var useFilterStyles = makeStyles(function (theme) { return ({
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

export { useFilterStyles };
//# sourceMappingURL=filterStyles.js.map
