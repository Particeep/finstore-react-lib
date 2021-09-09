import { interUI } from '../fonts/InterUI.js';
import { interUIBold } from '../fonts/InterUIBold.js';

var cssBaseLine = {
    "@global": {
        "@font-face": [interUI, interUIBold],
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

export { cssBaseLine };
//# sourceMappingURL=cssBaseLine.js.map
