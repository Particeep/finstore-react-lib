import { customTheme } from '../custom.js';

var radio = {
    colorPrimary: {
        "&:hover": {
            backgroundColor: "transparent !important"
        },
        "&$disabled .MuiBox-root": {
            opacity: customTheme.palette.action.disabledOpacity + " !important"
        }
    }
};

export { radio };
//# sourceMappingURL=radio.js.map
