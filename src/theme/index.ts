import { createMuiTheme } from "@material-ui/core/styles"
import { Theme } from "@material-ui/core/styles/createMuiTheme"
import { customTheme } from "./custom"
import { props } from "./props"
import { overrides } from "./overrides"

export const finstoreTheme: Theme = createMuiTheme({
  props     : props,
  overrides : overrides,
  ...customTheme
})
