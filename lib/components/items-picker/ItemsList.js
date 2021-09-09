"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var i18n_1 = require("../../conf/i18n");
var components_1 = require("../../components");
var Item_1 = __importDefault(require("./Item"));
var react_transition_group_1 = require("react-transition-group");
var core_1 = require("@material-ui/core");
var useStyles = core_1.makeStyles(function (theme) { return ({
    enter: {
        opacity: 0
    },
    enterActive: {
        opacity: 1,
        transition: theme.transitions.create("opacity", { duration: theme.transitions.duration.standard })
    },
    exit: {
        opacity: 1
    },
    exitActive: {
        opacity: 0,
        transition: theme.transitions.create("opacity", { duration: theme.transitions.duration.standard })
    }
}); });
var ItemsList = function (_a) {
    var items = _a.items, action = _a.action, toggleItem = _a.toggleItem, renderItem = _a.renderItem;
    var classes = useStyles();
    if (items.length > 0) {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(react_transition_group_1.TransitionGroup, null, items.map(function (item) { return (react_1.default.createElement(react_transition_group_1.CSSTransition, { key: item.id, timeout: 500, classNames: {
                    enter: classes.enter,
                    enterActive: classes.enterActive,
                    exit: classes.exit,
                    exitActive: classes.exitActive
                } },
                react_1.default.createElement(Item_1.default, { key: item.id, item: item, action: action, toggleItem: toggleItem, renderItem: renderItem }))); }))));
    }
    return react_1.default.createElement(components_1.Empty, { message: i18n_1.T.items_pickers.empty });
};
exports.default = ItemsList;
//# sourceMappingURL=ItemsList.js.map