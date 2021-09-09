import React__default from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Block from '../../node_modules/@material-ui/icons/esm/Block.js';

var useStyles = makeStyles(function (theme) { return ({
    root: {
        textAlign: "center",
        lineHeight: 1,
        marginTop: theme.spacing()
    }
}); });
var Empty = function (props) {
    var classes = useStyles();
    return (React__default.createElement("div", { className: classes.root },
        React__default.createElement(Block, null),
        React__default.createElement(Typography, null, props.message)));
};

export { Empty as default };
//# sourceMappingURL=Empty.js.map
