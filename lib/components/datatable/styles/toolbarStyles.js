"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useToolbarStyles = void 0;
var styles_1 = require("@material-ui/core/styles");
var colorManipulator_1 = require("@material-ui/core/styles/colorManipulator");
exports.useToolbarStyles = styles_1.makeStyles(function (theme) { return ({
    root: {
        borderBottom: "1px solid " + theme.palette.divider,
        backgroundColor: "white",
        transition: theme.transitions.create("background-color", { duration: theme.transitions.duration.short })
    },
    actionsContainer: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between"
    },
    actions: {
        margin: 0,
        display: "flex",
        alignItems: "center",
        color: theme.palette.text.secondary,
        cursor: "pointer",
        "&:hover": {
            color: theme.palette.primary.main
        }
    },
    highlight: {
        color: theme.palette.secondary.main,
        backgroundColor: colorManipulator_1.lighten(theme.palette.secondary.light, 0.85)
    },
    textField: {
        marginLeft: theme.spacing(),
        marginRight: theme.spacing(),
        width: 200
    },
    noPadding: {
        padding: 0
    },
    title: {
        flex: "0 0 auto",
        alignSelf: "center"
    },
    columnVisibilityListItems: {
        paddingLeft: 0
    }
}); });
//# sourceMappingURL=toolbarStyles.js.map