import React from "react"
import { Story } from "@storybook/react"
import { FormControlLabel, Switch, SwitchProps } from "@material-ui/core"
import { InputWithLabelProps } from "../../components"

export default {
  title     : "Inputs/Switch",
  component : Switch
}

const Template: Story<InputWithLabelProps<SwitchProps>> = (args: InputWithLabelProps<SwitchProps>) => <FormControlLabel control={<Switch {...args} />} {...args} />

export const Default: any = Template.bind({})
Default.args = {
  checked : false,
  label   : "Label"
}

export const DefaultDisabled: any = Template.bind({})
DefaultDisabled.args = {
  checked  : false,
  disabled : true,
  label    : "Label"
}

export const Checked: any = Template.bind({})
Checked.args = {
  checked : true,
  label   : "Label"
}

export const CheckedDisabled: any = Template.bind({})
CheckedDisabled.args = {
  checked  : true,
  disabled : true,
  label    : "Label"
}
