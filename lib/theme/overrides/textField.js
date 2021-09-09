"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inputAdornment = exports.inputLabel = exports.formLabel = exports.outlinedInput = exports.inputBase = void 0;
var custom_1 = require("../custom");
exports.inputBase = {
    root: {
        fontSize: custom_1.customTheme.typography.body1.fontSize,
        height: custom_1.customTheme.inputs.height,
        borderColor: custom_1.customTheme.inputs.border.color + " !important",
        "&.Mui-focused fieldset": {
            borderColor: custom_1.customTheme.inputs.border.focus + " !important",
            borderWidth: "1px !important"
        }
    }
};
exports.outlinedInput = {
    root: {
        borderRadius: custom_1.customTheme.inputs.border.radius
    },
    input: {
        padding: custom_1.customTheme.spacing()
    },
    notchedOutline: {
        borderColor: custom_1.customTheme.inputs.border.color + " !important"
    }
};
exports.formLabel = {
    root: {
        fontSize: custom_1.customTheme.typography.body1.fontSize,
        lineHeight: 0
    }
};
exports.inputLabel = {
    root: {
        fontSize: custom_1.customTheme.typography.body1.fontSize,
        transform: "none !important",
        "&.Mui-focused": {
            color: "inherit !important"
        }
    },
    formControl: {
        top: custom_1.customTheme.spacing(-1)
    }
};
exports.inputAdornment = {
    root: {
        color: custom_1.customTheme.palette.text.disabled
    }
};
//# sourceMappingURL=textField.js.map