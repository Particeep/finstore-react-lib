import { palette } from './palette/palette.js';
import createTypography from '@material-ui/core/styles/createTypography';
import createSpacing from '@material-ui/core/styles/createSpacing';
import transitions from '@material-ui/core/styles/transitions';

var customTheme = {
    palette: palette,
    transitions: transitions,
    typography: createTypography(palette, {
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
    spacing: createSpacing(8),
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

export { customTheme };
//# sourceMappingURL=custom.js.map
