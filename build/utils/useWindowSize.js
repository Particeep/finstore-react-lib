import React__default from 'react';

var useWindowSize = function () {
    var _a = React__default.useState({
        width: window.innerWidth,
        height: window.innerHeight
    }), windowSize = _a[0], setWindowSize = _a[1];
    function changeWindowSize() {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }
    React__default.useEffect(function () {
        window.addEventListener("resize", changeWindowSize);
        return function () {
            window.removeEventListener("resize", changeWindowSize);
        };
    }, []);
    return windowSize;
};

export { useWindowSize };
//# sourceMappingURL=useWindowSize.js.map
