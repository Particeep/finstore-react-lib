import { StyleRules } from "@material-ui/core/styles/withStyles"
import { LinkClassKey } from "@material-ui/core"
import { customTheme } from "../custom"

export const link: Partial<StyleRules<LinkClassKey>> = {
  root : {
    color : customTheme.link.color
  }
}
