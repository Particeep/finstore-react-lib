import {
  FormLabelClassKey,
  InputAdornmentClassKey,
  InputBaseClassKey,
  InputLabelClassKey,
  StyleRules
} from "@material-ui/core"
import { OutlinedInputClassKey } from "@material-ui/core/OutlinedInput"
import { customTheme } from "../custom"

export const inputBase: Partial<StyleRules<InputBaseClassKey>> = {
  root : {
    fontSize                 : customTheme.typography.body1.fontSize,
    height                   : customTheme.inputs.height,
    borderColor              : `${customTheme.inputs.border.color} !important`,
    "&.Mui-focused fieldset" : {
      borderColor : `${customTheme.inputs.border.focus} !important`,
      borderWidth : "1px !important"
    }
  }
}

export const outlinedInput: Partial<StyleRules<OutlinedInputClassKey>> = {
  root : {
    borderRadius : customTheme.inputs.border.radius
  },
  input : {
    padding : customTheme.spacing()
  },
  notchedOutline : {
    borderColor : `${customTheme.inputs.border.color} !important`
  }
}

export const formLabel: Partial<StyleRules<FormLabelClassKey>> = {
  root : {
    fontSize   : customTheme.typography.body1.fontSize,
    lineHeight : 0
  }
}

export const inputLabel: Partial<StyleRules<InputLabelClassKey>> = {
  root : {
    fontSize        : customTheme.typography.body1.fontSize,
    transform       : "none !important",
    "&.Mui-focused" : {
      color : "inherit !important"
    }
  },
  formControl : {
    top : customTheme.spacing(-1)
  }
}

export const inputAdornment: Partial<StyleRules<InputAdornmentClassKey>> = {
  root : {
    color : customTheme.palette.text.disabled
  }
}
