import { customTheme } from '../custom.js';

var card = {
    root: {
        borderColor: customTheme.inputs.border.color,
        borderRadius: customTheme.card.borderRadius,
        boxShadow: customTheme.card.boxShadow
    }
};
var cardHeader = {
    root: {
        backgroundColor: customTheme.card.header.backgroundColor,
        height: customTheme.card.header.size.medium
    },
    content: {
        color: customTheme.palette.text.primary,
        textTransform: "uppercase",
        "&>$title": {
            fontSize: customTheme.typography.body1.fontSize
        },
        "&>$subheader": {
            fontSize: customTheme.typography.body2.fontSize
        }
    }
};
var cardActions = {
    root: {
        justifyContent: "flex-end"
    }
};

export { card, cardActions, cardHeader };
//# sourceMappingURL=card.js.map
