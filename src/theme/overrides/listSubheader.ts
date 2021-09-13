import { StyleRules } from "@material-ui/core/styles/withStyles"
import { ListSubheaderClassKey } from "@material-ui/core"
import { customTheme } from "../custom"

export const listSubheader: Partial<StyleRules<ListSubheaderClassKey>> = {
  root : {
    lineHeight   : "20px",
    marginTop    : customTheme.spacing(),
    marginBottom : customTheme.spacing()
  },
  gutters : {
    paddingLeft  : customTheme.spacing(1.5),
    paddingRight : customTheme.spacing(1.5)
  }
}
