import { customTheme } from '../custom.js';

var inputBase = {
    root: {
        fontSize: customTheme.typography.body1.fontSize,
        height: customTheme.inputs.height,
        borderColor: customTheme.inputs.border.color + " !important",
        "&.Mui-focused fieldset": {
            borderColor: customTheme.inputs.border.focus + " !important",
            borderWidth: "1px !important"
        }
    }
};
var outlinedInput = {
    root: {
        borderRadius: customTheme.inputs.border.radius
    },
    input: {
        padding: customTheme.spacing()
    },
    notchedOutline: {
        borderColor: customTheme.inputs.border.color + " !important"
    }
};
var formLabel = {
    root: {
        fontSize: customTheme.typography.body1.fontSize,
        lineHeight: 0
    }
};
var inputLabel = {
    root: {
        fontSize: customTheme.typography.body1.fontSize,
        transform: "none !important",
        "&.Mui-focused": {
            color: "inherit !important"
        }
    },
    formControl: {
        top: customTheme.spacing(-1)
    }
};
var inputAdornment = {
    root: {
        color: customTheme.palette.text.disabled
    }
};

export { formLabel, inputAdornment, inputBase, inputLabel, outlinedInput };
//# sourceMappingURL=textField.js.map
