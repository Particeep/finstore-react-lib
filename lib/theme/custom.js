"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customTheme = void 0;
var palette_1 = require("./palette");
var createTypography_1 = __importDefault(require("@material-ui/core/styles/createTypography"));
var createSpacing_1 = __importDefault(require("@material-ui/core/styles/createSpacing"));
var transitions_1 = __importDefault(require("@material-ui/core/styles/transitions"));
exports.customTheme = {
    palette: palette_1.palette,
    transitions: transitions_1.default,
    typography: createTypography_1.default(palette_1.palette, {
        fontFamily: "'Inter UI', Roboto",
        allVariants: {
            color: "#1c0b33"
        },
        body1: {
            fontSize: 14
        },
        body2: {
            fontSize: 12
        }
    }),
    spacing: createSpacing_1.default(8),
    list: {
        item: {
            height: 33
        }
    },
    btn: {
        borderRadius: 8,
        iconSize: 16
    },
    inputs: {
        height: 40,
        border: {
            color: "#dfe1e5",
            focus: "#aeb4be",
            radius: 6
        }
    },
    link: {
        color: "#2182c3"
    },
    card: {
        boxShadow: "0 2px 7px 0 rgba(0, 0, 0, 0.04)",
        borderRadius: 9,
        header: {
            backgroundColor: "#f9f9fa",
            size: {
                big: 70,
                medium: 60
            }
        }
    }
};
//# sourceMappingURL=custom.js.map