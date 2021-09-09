import React__default from 'react';
import { T } from '../../conf/i18n.js';
import Empty from '../atoms/Empty.js';
import { makeStyles } from '@material-ui/core';
import '../buttons/IconBtn.js';
import '../buttons/ActionMenu.js';
import '../inputs/AutocompleteInput.js';
import '../inputs/GeosuggestInput.js';
import '../inputs/ParticeepDatePicker.js';
import '../../node_modules/classnames/index.js';
import '../datatable/filters/filters.js';
import '../datatable/styles/headStyles.js';
import '../../node_modules/moment/moment.js';
import '../datatable/styles/bodyStyles.js';
import '../../node_modules/immutability-helper/index.js';
import '../datatable/styles/filterStyles.js';
import '../datatable/styles/toolbarStyles.js';
import '../datatable/styles/displayStyles.js';
import '../modal/ParticeepDialog.js';
import '../../node_modules/bignumber.js/bignumber.mjs.js';
import '../amount-suggest/AmountSuggestDisplay.js';
import '../cards/Panel.js';
import '../stepper/TunnelStepper.js';
import '../stepper/TunnelStep.js';
import '../stepper/MobileStepper.js';
import './ItemsPickerDisplay.js';
import Item from './Item.js';
import TransitionGroup from '../../node_modules/react-transition-group/esm/TransitionGroup.js';
import CSSTransition from '../../node_modules/react-transition-group/esm/CSSTransition.js';

var useStyles = makeStyles(function (theme) { return ({
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
        return (React__default.createElement(React__default.Fragment, null,
            React__default.createElement(TransitionGroup, null, items.map(function (item) { return (React__default.createElement(CSSTransition, { key: item.id, timeout: 500, classNames: {
                    enter: classes.enter,
                    enterActive: classes.enterActive,
                    exit: classes.exit,
                    exitActive: classes.exitActive
                } },
                React__default.createElement(Item, { key: item.id, item: item, action: action, toggleItem: toggleItem, renderItem: renderItem }))); }))));
    }
    return React__default.createElement(Empty, { message: T.items_pickers.empty });
};

export { ItemsList as default };
//# sourceMappingURL=ItemsList.js.map
