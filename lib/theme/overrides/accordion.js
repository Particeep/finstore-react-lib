"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accordionDetails = exports.accordionSummary = exports.accordion = void 0;
var custom_1 = require("../custom");
exports.accordion = {
    root: {
        borderColor: custom_1.customTheme.inputs.border.color,
        boxShadow: custom_1.customTheme.card.boxShadow,
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
            borderTopLeftRadius: custom_1.customTheme.card.borderRadius,
            borderTopRightRadius: custom_1.customTheme.card.borderRadius
        },
        "&:last-child": {
            borderBottomLeftRadius: custom_1.customTheme.card.borderRadius,
            borderBottomRightRadius: custom_1.customTheme.card.borderRadius
        }
    }
};
exports.accordionSummary = {
    content: {
        textTransform: "uppercase"
    }
};
exports.accordionDetails = {
    root: {
        backgroundColor: custom_1.customTheme.palette.background.default
    }
};
//# sourceMappingURL=accordion.js.map