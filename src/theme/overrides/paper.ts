import { StyleRules } from "@material-ui/core/styles/withStyles"
import { PaperClassKey } from "@material-ui/core"
import { customTheme } from "../custom"

const defaultPaper:any = {
  boxShadow    : "none",
  borderWidth  : 1,
  borderStyle  : "solid",
  borderColor  : customTheme.inputs.border.color,
  borderRadius : customTheme.inputs.border.radius,
  background   : customTheme.palette.background.paper
}

export const paper: Partial<StyleRules<PaperClassKey>> = {
  elevation1 : {
    ...defaultPaper
  },
  elevation8 : {
    ...defaultPaper
  }
}
