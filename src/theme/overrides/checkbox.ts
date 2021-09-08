import { StyleRules } from "@material-ui/core/styles/withStyles"
import { CheckboxClassKey } from "@material-ui/core"
import { customTheme } from "../custom"

export const checkbox: Partial<StyleRules<CheckboxClassKey>> = {
  colorPrimary : {
    "&:hover" : {
      backgroundColor : "transparent !important"
    },
    "&$disabled .MuiBox-root" : {
      opacity : `${customTheme.palette.action.disabledOpacity} !important`
    }
  }
}
