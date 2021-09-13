import { StyleRules } from "@material-ui/core/styles/withStyles"
import { CardHeaderClassKey, CardClassKey, CardActionsClassKey } from "@material-ui/core"
import { customTheme } from "../custom"

export const card: Partial<StyleRules<CardClassKey>> = {
  root : {
    borderColor  : customTheme.inputs.border.color,
    borderRadius : customTheme.card.borderRadius,
    boxShadow    : customTheme.card.boxShadow
  }
}

export const cardHeader: Partial<StyleRules<CardHeaderClassKey>> = {
  root : {
    backgroundColor : customTheme.card.header.backgroundColor,
    height          : customTheme.card.header.size.medium
  },
  content : {
    color         : customTheme.palette.text.primary,
    textTransform : "uppercase",
    "&>$title"    : {
      fontSize : customTheme.typography.body1.fontSize
    },
    "&>$subheader" : {
      fontSize : customTheme.typography.body2.fontSize
    }
  }
}

export const cardActions: Partial<StyleRules<CardActionsClassKey>> = {
  root : {
    justifyContent : "flex-end"
  }
}
