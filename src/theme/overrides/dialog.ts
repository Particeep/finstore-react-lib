import { StyleRules } from "@material-ui/core/styles/withStyles"
import { DialogTitleClassKey, DialogActionsClassKey, DialogContentClassKey } from "@material-ui/core"
import { customTheme } from "../custom"

export const dialogTitle: Partial<StyleRules<DialogTitleClassKey>> = {
  root : {
    backgroundColor : customTheme.palette.background.default
  }
}

export const dialogContent: Partial<StyleRules<DialogContentClassKey>> = {
  root : {
    marginTop : customTheme.spacing(2)
  }
}

export const dialogActions: Partial<StyleRules<DialogActionsClassKey>> = {
  root : {
    padding : customTheme.spacing(2.5)
  }
}

