import { StyleRules } from "@material-ui/core/styles/withStyles"
import { StepClasskey, StepConnectorClasskey, StepLabelClasskey, StepperClasskey, StepIconClasskey, MobileStepperClassKey } from "@material-ui/core"
import { customTheme } from "../custom"

export const step: Partial<StyleRules<StepClasskey>> = {
  horizontal : {
    backgroundColor             : customTheme.card.header.backgroundColor,
    display                     : "flex",
    justifyContent              : "center",
    height                      : customTheme.card.header.size.big,
    position                    : "relative",
    width                       : "-webkit-fill-available",
    borderBottom                : `1px solid ${customTheme.inputs.border.color}`,
    "&:not(:first-child):after" : {
      content      : "close-quote",
      position     : "absolute",
      left         : 0,
      bottom       : 0,
      width        : 0,
      height       : 0,
      borderLeft   : `16px solid ${customTheme.inputs.border.color}`,
      borderTop    : "36px solid transparent",
      borderBottom : "36px solid transparent"
    },
    "&:not(:last-child):before" : {
      content      : "close-quote",
      position     : "absolute",
      right        : -15,
      bottom       : 0,
      width        : 0,
      height       : 0,
      borderLeft   : `16px solid ${customTheme.card.header.backgroundColor}`,
      borderTop    : "36px solid transparent",
      borderBottom : "36px solid transparent",
      zIndex       : 1
    }
  }
}

export const stepConnector: Partial<StyleRules<StepConnectorClasskey>> = {
  horizontal : {
    display : "none"
  }
}

export const stepLabel: Partial<StyleRules<StepLabelClasskey>> = {
  labelContainer : {
    "& >span:first-child" : {
      display    : "flex",
      alignItems : "center"
    }
  },

  label : {
    fontWeight : 600,
    fontSize   : customTheme.typography.body1.fontSize,
    "&$active" : {
      fontWeight : 600
    },
    "&$completed" : {
      fontWeight : 600
    }
  }

}

export const stepper: Partial<StyleRules<StepperClasskey>> = {
  root : {
    padding : 0
  }
}

export const stepIcon : Partial <StyleRules<StepIconClasskey>> = {
  root : {
    height     : 22,
    width      : 22,
    transition : customTheme.transitions.create("all", { duration: customTheme.transitions.duration.short }),
    fontWeight : 600,
    "&$active" : {
      color : customTheme.palette.secondary.main
    },
    "&$completed" : {
      color : customTheme.palette.secondary.main
    }
  },
  text : {
    fontSize : customTheme.typography.body1.fontSize
  }
}

export const mobileStepper : Partial <StyleRules<MobileStepperClassKey>> = {
  root : {
    height          : customTheme.card.header.size.big,
    display         : "block",
    padding         : 0,
    backgroundColor : customTheme.card.header.backgroundColor
  },
  progress : {
    width : "100%"
  }
}
