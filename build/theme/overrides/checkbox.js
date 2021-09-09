import { customTheme } from '../custom.js';

var checkbox = {
    colorPrimary: {
        "&:hover": {
            backgroundColor: "transparent !important"
        },
        "&$disabled .MuiBox-root": {
            opacity: customTheme.palette.action.disabledOpacity + " !important"
        }
    }
};

export { checkbox };
//# sourceMappingURL=checkbox.js.map
