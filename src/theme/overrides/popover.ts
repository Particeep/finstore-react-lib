import { StyleRules } from "@material-ui/core/styles/withStyles"
import { PopoverClassKey } from "@material-ui/core"
import { customTheme } from "../custom"

export const popover: Partial<StyleRules<PopoverClassKey>> = {
  paper : {
    marginTop : customTheme.spacing()
  }
}
