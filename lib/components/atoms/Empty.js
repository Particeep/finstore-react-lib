"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/core/styles");
var icons_1 = require("@material-ui/icons");
var useStyles = styles_1.makeStyles(function (theme) { return ({
    root: {
        textAlign: "center",
        lineHeight: 1,
        marginTop: theme.spacing()
    }
}); });
var Empty = function (props) {
    var classes = useStyles();
    return (react_1.default.createElement("div", { className: classes.root },
        react_1.default.createElement(icons_1.Block, null),
        react_1.default.createElement(core_1.Typography, null, props.message)));
};
exports.default = Empty;
//# sourceMappingURL=Empty.js.map