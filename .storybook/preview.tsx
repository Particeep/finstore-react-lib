import React from "react"
import MomentUtils from "@date-io/moment"
import { MuiPickersUtilsProvider } from "@material-ui/pickers"
import { IntlProvider } from "react-intl"
import { formats } from "../src/conf/config"
import { jsxDecorator } from "storybook-addon-jsx"
import { initializeWorker, mswDecorator } from "msw-storybook-addon"
import { ThemeProvider } from "@material-ui/core/styles"
import { finstoreTheme } from "../src/theme"
import {CssBaseline} from "@material-ui/core";

export const parameters = {
  actions: {
    argTypesRegex: "^on[A-Z].*"
  },
  html: {
    prettier: {
      tabWidth: 2,
      useTabs: false,
      htmlWhitespaceSensitivity: "strict"
    },
    removeEmptyComments: true,
    highlighter: {
      showLineNumbers: true
    }
  }
}


export const decorators = [
  mswDecorator,
  jsxDecorator,
  (Story) => (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <IntlProvider locale={"fr"} formats={formats}>
        <ThemeProvider theme={finstoreTheme}>
          <CssBaseline />
          <Story />
        </ThemeProvider>
      </IntlProvider>
    </MuiPickersUtilsProvider>
  )
]

//initializeWorker({
//  serviceWorker: {
//    url: "/public/mockServiceWorker.js"
//  }
//})
