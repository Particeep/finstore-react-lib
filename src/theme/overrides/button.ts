import { StyleRules } from "@material-ui/core/styles/withStyles"
import { ButtonClassKey } from "@material-ui/core/Button"
import { customTheme } from "../custom"

export const button: Partial<StyleRules<ButtonClassKey>> = {
  root : {
    borderRadius  : customTheme.btn.borderRadius,
    textTransform : "capitalize"
  },
  iconSizeMedium : {
    "& > *:first-child" : {
      fontSize : customTheme.btn.iconSize
    }
  },
  label : {
    fontSize : customTheme.typography.body1.fontSize
  }
}
