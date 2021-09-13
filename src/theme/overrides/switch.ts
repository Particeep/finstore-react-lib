import { StyleRules } from "@material-ui/core/styles/withStyles"
import { SwitchClassKey } from "@material-ui/core"
import { customTheme } from "../custom"

export const switchInput: Partial<StyleRules<SwitchClassKey>> = {
  root : {
    width    : 42,
    height   : 26,
    padding  : 0,
    overflow : "visible"
  },
  switchBase : {
    padding     : 1,
    "&$checked" : {
      transform    : "translateX(16px)",
      color        : "white !important",
      "& + $track" : {
        backgroundColor : `${customTheme.palette.primary.main} !important`,
        opacity         : 1,
        border          : "none"
      },
      "&$disabled" : {
        "& + $track" : {
          opacity : `${customTheme.palette.action.disabledOpacity} !important`
        }
      }
    },
    "&$disabled" : {
      "& + $track" : {
        opacity : `${customTheme.palette.action.disabledOpacity} !important`
      }
    },
    "&$focusVisible $thumb" : {
      color  : "#52d869 !important",
      border : "6px solid #fff"
    }
  },
  thumb : {
    width  : 24,
    height : 24
  },
  track : {
    borderRadius    : 26 / 2,
    backgroundColor : `${customTheme.palette.action.disabled} !important`,
    opacity         : 1
  },
  checked : {}
}
