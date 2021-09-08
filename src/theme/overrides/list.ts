import { StyleRules } from "@material-ui/core/styles/withStyles"
import { ListClassKey } from "@material-ui/core"
import { customTheme } from "../custom"

export const list: Partial<StyleRules<ListClassKey>> = {
  root : {
    boxShadow    : "none",
    borderWidth  : 0,
    borderStyle  : "solid",
    borderColor  : customTheme.inputs.border.color,
    background   : customTheme.palette.background.paper,
    borderRadius : customTheme.btn.borderRadius
  },
  padding : {
    padding : "0px !important"
  }
}
