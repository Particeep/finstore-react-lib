import React__default, { useState } from 'react';
import clsx from '../../node_modules/clsx/dist/clsx.m.js';
import { makeStyles, Card, CardHeader, IconButton, LinearProgress, Collapse, CardContent, CardActions } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

var useStyles = makeStyles(function (theme) { return ({
    noPadding: {
        padding: 0
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest
        })
    },
    expandOpen: {
        transform: "rotate(180deg)"
    }
}); });
var Panel = function (props) {
    var _a;
    var classes = useStyles();
    var children = props.children, header = props.header, subheader = props.subheader, actions = props.actions, noPadding = props.noPadding, loading = props.loading, isExpandable = props.isExpandable, defaultClosed = props.defaultClosed;
    var _b = useState(!isExpandable || (isExpandable && !defaultClosed)), expanded = _b[0], setExpanded = _b[1];
    var handleExpandClick = function () {
        setExpanded(!expanded);
    };
    return (React__default.createElement(Card, null,
        React__default.createElement(CardHeader, { title: header, subheader: subheader, action: isExpandable &&
                React__default.createElement(IconButton, { className: clsx(classes.expand, (_a = {},
                        _a[classes.expandOpen] = expanded,
                        _a)), onClick: handleExpandClick },
                    React__default.createElement(ExpandMoreIcon, null)) }),
        loading &&
            React__default.createElement(LinearProgress, null),
        React__default.createElement(Collapse, { in: expanded, timeout: "auto", unmountOnExit: true },
            React__default.createElement(CardContent, { classes: { root: noPadding && classes.noPadding } }, children),
            actions &&
                React__default.createElement(CardActions, null, actions))));
};

export { Panel };
//# sourceMappingURL=Panel.js.map
