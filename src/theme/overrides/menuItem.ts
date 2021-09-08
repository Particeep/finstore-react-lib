import { StyleRules } from "@material-ui/core/styles/withStyles"
import { MenuItemClassKey } from "@material-ui/core"
import { customTheme } from "../custom"

export const menuItem: Partial<StyleRules<MenuItemClassKey>> = {
  root : {
    fontSize : customTheme.typography.body1.fontSize,
    height   : customTheme.list.item.height
  }
}
