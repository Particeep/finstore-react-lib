import { customTheme } from '../custom.js';

var button = {
    root: {
        borderRadius: customTheme.btn.borderRadius,
        textTransform: "capitalize"
    },
    iconSizeMedium: {
        "& > *:first-child": {
            fontSize: customTheme.btn.iconSize
        }
    },
    label: {
        fontSize: customTheme.typography.body1.fontSize
    }
};

export { button };
//# sourceMappingURL=button.js.map
