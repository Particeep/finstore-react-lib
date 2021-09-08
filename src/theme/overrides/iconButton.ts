import { StyleRules } from "@material-ui/core/styles/withStyles"
import { IconButtonClassKey } from "@material-ui/core"
import { customTheme } from "../custom"

export const iconButton: Partial<StyleRules<IconButtonClassKey>> = {
  root : {
    "&:hover" : {
      backgroundColor : `${customTheme.palette.action.hover} !important`
    }
  }
}
