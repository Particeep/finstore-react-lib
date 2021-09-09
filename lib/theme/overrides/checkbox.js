"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkbox = void 0;
var custom_1 = require("../custom");
exports.checkbox = {
    colorPrimary: {
        "&:hover": {
            backgroundColor: "transparent !important"
        },
        "&$disabled .MuiBox-root": {
            opacity: custom_1.customTheme.palette.action.disabledOpacity + " !important"
        }
    }
};
//# sourceMappingURL=checkbox.js.map