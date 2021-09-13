import { Theme, ThemeOptions } from "@material-ui/core/styles/createMuiTheme";
interface CustomTheme extends ThemeOptions {
    typography: Theme["typography"];
    spacing: Theme["spacing"];
    palette: Theme["palette"];
    transitions: Theme["transitions"];
}
export declare const customTheme: CustomTheme;
export {};
