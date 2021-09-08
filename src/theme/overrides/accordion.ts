import { StyleRules } from "@material-ui/core/styles/withStyles"
import { AccordionClassKey, AccordionSummaryClassKey, AccordionDetailsClassKey } from "@material-ui/core"
import { customTheme } from "../custom"

export const accordion: Partial<StyleRules<AccordionClassKey>> = {
  root : {
    borderColor  : customTheme.inputs.border.color,
    boxShadow    : customTheme.card.boxShadow,
    "&$expanded" : {
      margin : 0
    },
    "&:not(:first-child):not(:last-child)" : {
      borderBottom : "none",
      borderTop    : "none"
    }
  },
  rounded : {
    overflow        : "hidden",
    "&:first-child" : {
      borderTopLeftRadius  : customTheme.card.borderRadius,
      borderTopRightRadius : customTheme.card.borderRadius
    },
    "&:last-child" : {
      borderBottomLeftRadius  : customTheme.card.borderRadius,
      borderBottomRightRadius : customTheme.card.borderRadius
    }
  }
}

export const accordionSummary: Partial<StyleRules<AccordionSummaryClassKey>> = {
  content : {
    textTransform : "uppercase"
  }
}

export const accordionDetails: Partial<StyleRules<AccordionDetailsClassKey>> = {
  root : {
    backgroundColor : customTheme.palette.background.default
  }
}
