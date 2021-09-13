import { SelectProps } from "@material-ui/core"

export const select: SelectProps = {
  variant   : "outlined",
  MenuProps : {
    anchorOrigin : {
      vertical   : "bottom",
      horizontal : "left"
    },
    transformOrigin : {
      vertical   : "top",
      horizontal : "left"
    },
    getContentAnchorEl : null
  }
}
