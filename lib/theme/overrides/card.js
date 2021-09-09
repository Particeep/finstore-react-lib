"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cardActions = exports.cardHeader = exports.card = void 0;
var custom_1 = require("../custom");
exports.card = {
    root: {
        borderColor: custom_1.customTheme.inputs.border.color,
        borderRadius: custom_1.customTheme.card.borderRadius,
        boxShadow: custom_1.customTheme.card.boxShadow
    }
};
exports.cardHeader = {
    root: {
        backgroundColor: custom_1.customTheme.card.header.backgroundColor,
        height: custom_1.customTheme.card.header.size.medium
    },
    content: {
        color: custom_1.customTheme.palette.text.primary,
        textTransform: "uppercase",
        "&>$title": {
            fontSize: custom_1.customTheme.typography.body1.fontSize
        },
        "&>$subheader": {
            fontSize: custom_1.customTheme.typography.body2.fontSize
        }
    }
};
exports.cardActions = {
    root: {
        justifyContent: "flex-end"
    }
};
//# sourceMappingURL=card.js.map