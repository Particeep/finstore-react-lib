import React from "react"
import { Box, CheckboxProps } from "@material-ui/core"
import { BoxProps } from "@material-ui/core/Box/Box"
import { customTheme } from "../custom"
import { Done, Remove } from "@material-ui/icons"

const CheckboxDefaultBox = (props: BoxProps) => (
  <Box
    borderRadius={4}
    height={15}
    width={15}
    border={1}
    display={"flex"}
    {...props}
  />
)

const iconStyle: any = {
  color    : "white",
  position : "relative",
  left     : -1,
  top      : -1,
  fontSize : 15
}

export const checkbox: CheckboxProps = {
  color : "primary",
  icon  : <CheckboxDefaultBox
    borderColor={customTheme.inputs.border.focus}
  />,
  checkedIcon : <CheckboxDefaultBox
    borderColor={customTheme.palette.primary.main}
    bgcolor={customTheme.palette.primary.main}
  >
    <Done style={iconStyle} />
  </CheckboxDefaultBox>,
  indeterminateIcon : <CheckboxDefaultBox
    borderColor={customTheme.palette.primary.main}
    bgcolor={customTheme.palette.primary.main}
  >
    <Remove style={iconStyle} />
  </CheckboxDefaultBox>
}
