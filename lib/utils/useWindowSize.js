"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWindowSize = void 0;
var react_1 = __importDefault(require("react"));
var useWindowSize = function () {
    var _a = react_1.default.useState({
        width: window.innerWidth,
        height: window.innerHeight
    }), windowSize = _a[0], setWindowSize = _a[1];
    function changeWindowSize() {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }
    react_1.default.useEffect(function () {
        window.addEventListener("resize", changeWindowSize);
        return function () {
            window.removeEventListener("resize", changeWindowSize);
        };
    }, []);
    return windowSize;
};
exports.useWindowSize = useWindowSize;
//# sourceMappingURL=useWindowSize.js.map