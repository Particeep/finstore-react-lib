"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.button = void 0;
var custom_1 = require("../custom");
exports.button = {
    root: {
        borderRadius: custom_1.customTheme.btn.borderRadius,
        textTransform: "capitalize"
    },
    iconSizeMedium: {
        "& > *:first-child": {
            fontSize: custom_1.customTheme.btn.iconSize
        }
    },
    label: {
        fontSize: custom_1.customTheme.typography.body1.fontSize
    }
};
//# sourceMappingURL=button.js.map