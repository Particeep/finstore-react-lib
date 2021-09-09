"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mobileStepper = exports.stepIcon = exports.stepper = exports.stepLabel = exports.stepConnector = exports.step = void 0;
var custom_1 = require("../custom");
exports.step = {
    horizontal: {
        backgroundColor: custom_1.customTheme.card.header.backgroundColor,
        display: "flex",
        justifyContent: "center",
        height: custom_1.customTheme.card.header.size.big,
        position: "relative",
        width: "-webkit-fill-available",
        borderBottom: "1px solid " + custom_1.customTheme.inputs.border.color,
        "&:not(:first-child):after": {
            content: "close-quote",
            position: "absolute",
            left: 0,
            bottom: 0,
            width: 0,
            height: 0,
            borderLeft: "16px solid " + custom_1.customTheme.inputs.border.color,
            borderTop: "36px solid transparent",
            borderBottom: "36px solid transparent"
        },
        "&:not(:last-child):before": {
            content: "close-quote",
            position: "absolute",
            right: -15,
            bottom: 0,
            width: 0,
            height: 0,
            borderLeft: "16px solid " + custom_1.customTheme.card.header.backgroundColor,
            borderTop: "36px solid transparent",
            borderBottom: "36px solid transparent",
            zIndex: 1
        }
    }
};
exports.stepConnector = {
    horizontal: {
        display: "none"
    }
};
exports.stepLabel = {
    labelContainer: {
        "& >span:first-child": {
            display: "flex",
            alignItems: "center"
        }
    },
    label: {
        fontWeight: 600,
        fontSize: custom_1.customTheme.typography.body1.fontSize,
        "&$active": {
            fontWeight: 600
        },
        "&$completed": {
            fontWeight: 600
        }
    }
};
exports.stepper = {
    root: {
        padding: 0
    }
};
exports.stepIcon = {
    root: {
        height: 22,
        width: 22,
        transition: custom_1.customTheme.transitions.create("all", { duration: custom_1.customTheme.transitions.duration.short }),
        fontWeight: 600,
        "&$active": {
            color: custom_1.customTheme.palette.secondary.main
        },
        "&$completed": {
            color: custom_1.customTheme.palette.secondary.main
        }
    },
    text: {
        fontSize: custom_1.customTheme.typography.body1.fontSize
    }
};
exports.mobileStepper = {
    root: {
        height: custom_1.customTheme.card.header.size.big,
        display: "block",
        padding: 0,
        backgroundColor: custom_1.customTheme.card.header.backgroundColor
    },
    progress: {
        width: "100%"
    }
};
//# sourceMappingURL=stepper.js.map