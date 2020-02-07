import { createMuiTheme } from "@material-ui/core/styles";
import palette from "./palette";

declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {
    customPalette: {
      success: {
        main: string;
      };
      info: {
        main: string;
      };
      warning: {
        main: string;
      };
    };
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    customPalette?: {
      success?: {
        main: string;
      };
      info: {
        main: string;
      };
      warning: {
        main: string;
      };
    };
  }
}

const themeDefault = createMuiTheme({
  palette
});

export default themeDefault;
