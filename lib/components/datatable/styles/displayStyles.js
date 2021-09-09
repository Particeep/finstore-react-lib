"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDisplayStyles = void 0;
var styles_1 = require("@material-ui/core/styles");
exports.useDisplayStyles = styles_1.makeStyles(function (theme) { return ({
    root: {
        position: "relative",
        maxWidth: "100%",
        "& .TableHead tr th": {
            height: 44,
            padding: theme.spacing(0, 1),
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            background: "white"
        }
    },
    progress: {
        position: "absolute",
        left: 0,
        right: 0
    },
    fixedActionColumn: {
        "& tbody tr td:last-child": {
            position: "sticky",
            right: 0,
            zIndex: 999,
            textAlign: "right",
            width: 100
        }
    }
}); });
//# sourceMappingURL=displayStyles.js.map