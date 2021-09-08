import { StyleRules } from "@material-ui/core/styles/withStyles"
import { RadioClassKey } from "@material-ui/core"
import { customTheme } from "../custom"

export const radio: Partial<StyleRules<RadioClassKey>> = {
  colorPrimary : {
    "&:hover" : {
      backgroundColor : "transparent !important"
    },
    "&$disabled .MuiBox-root" : {
      opacity : `${customTheme.palette.action.disabledOpacity} !important`
    }
  }
}
