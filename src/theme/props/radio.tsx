import React from "react"
import { Box, RadioProps } from "@material-ui/core"
import { BoxProps } from "@material-ui/core/Box/Box"
import { customTheme } from "../custom"

const RadioDefaultBox = (props: BoxProps) => (
  <Box
    borderRadius={"50%"}
    height={16}
    width={16}
    border={1}
    {...props}
  />
)

export const radio: RadioProps = {
  color : "primary",
  icon  : <RadioDefaultBox
    borderColor={customTheme.inputs.border.focus}
  />,
  checkedIcon : <RadioDefaultBox
    borderColor={customTheme.palette.primary.main}
    bgcolor={customTheme.palette.primary.main}
  >
    <Box
      width={6}
      height={6}
      borderRadius="50%"
      bgcolor="white"
      style={{
        position : "relative",
        top      : 4,
        left     : 4
      }}
    />
  </RadioDefaultBox>
}
