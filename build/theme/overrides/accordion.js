import { customTheme } from '../custom.js';

var accordion = {
    root: {
        borderColor: customTheme.inputs.border.color,
        boxShadow: customTheme.card.boxShadow,
        "&$expanded": {
            margin: 0
        },
        "&:not(:first-child):not(:last-child)": {
            borderBottom: "none",
            borderTop: "none"
        }
    },
    rounded: {
        overflow: "hidden",
        "&:first-child": {
            borderTopLeftRadius: customTheme.card.borderRadius,
            borderTopRightRadius: customTheme.card.borderRadius
        },
        "&:last-child": {
            borderBottomLeftRadius: customTheme.card.borderRadius,
            borderBottomRightRadius: customTheme.card.borderRadius
        }
    }
};
var accordionSummary = {
    content: {
        textTransform: "uppercase"
    }
};
var accordionDetails = {
    root: {
        backgroundColor: customTheme.palette.background.default
    }
};

export { accordion, accordionDetails, accordionSummary };
//# sourceMappingURL=accordion.js.map
