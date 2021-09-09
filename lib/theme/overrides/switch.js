"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.switchInput = void 0;
var custom_1 = require("../custom");
exports.switchInput = {
    root: {
        width: 42,
        height: 26,
        padding: 0,
        overflow: "visible"
    },
    switchBase: {
        padding: 1,
        "&$checked": {
            transform: "translateX(16px)",
            color: "white !important",
            "& + $track": {
                backgroundColor: custom_1.customTheme.palette.primary.main + " !important",
                opacity: 1,
                border: "none"
            },
            "&$disabled": {
                "& + $track": {
                    opacity: custom_1.customTheme.palette.action.disabledOpacity + " !important"
                }
            }
        },
        "&$disabled": {
            "& + $track": {
                opacity: custom_1.customTheme.palette.action.disabledOpacity + " !important"
            }
        },
        "&$focusVisible $thumb": {
            color: "#52d869 !important",
            border: "6px solid #fff"
        }
    },
    thumb: {
        width: 24,
        height: 24
    },
    track: {
        borderRadius: 26 / 2,
        backgroundColor: custom_1.customTheme.palette.action.disabled + " !important",
        opacity: 1
    },
    checked: {}
};
//# sourceMappingURL=switch.js.map