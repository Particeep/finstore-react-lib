"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cssBaseLine = void 0;
var fonts_1 = require("../fonts");
exports.cssBaseLine = {
    "@global": {
        "@font-face": [fonts_1.interUI, fonts_1.interUIBold],
        "*": {
            scrollbarColor: "light",
            scrollbarWidth: "thin"
        },
        "*::-webkit-scrollbar": {
            width: 7,
            height: 7
        },
        "*::-webkit-scrollbar-track": {
            backgroundColor: "rgba(93, 101, 115, 0.1)"
        },
        "*::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(93, 101, 115, 0.4)",
            borderRadius: 5
        },
        "*::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "rgba(93, 101, 115, 0.6) !important",
            borderRadius: 5
        }
    }
};
//# sourceMappingURL=cssBaseLine.js.map