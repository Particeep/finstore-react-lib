import React from "react"
import { Story } from "@storybook/react"
import { TextField, TextFieldProps } from "@material-ui/core"

export default {
  title     : "Inputs/TextField",
  component : TextField
}

const Template: Story<TextFieldProps> = (args: TextFieldProps) => <TextField {...args} />

export const Default: any = Template.bind({})
Default.args = {
  label       : "Label",
  placeholder : "placeholder"
}

export const Disabled: any = Template.bind({})
Disabled.args = {
  disabled : true,
  label    : "Label"
}
