import React from "react"
import { Story } from "@storybook/react"
import { SelectInput, SelectInputProps, SelectOption } from "../../components"

export default {
  title     : "Inputs/Select",
  component : SelectInput
}

const Template: Story<SelectInputProps> = (args: SelectInputProps) => <SelectInput {...args} />

const options: Array<SelectOption> = [
  { value: "A", label: "A" },
  { value: "B", label: "B" },
  { value: "C", label: "C" }
]

export const Default: any = Template.bind({})
Default.args = {
  label   : "Label",
  options : options
}

export const Disabled: any = Template.bind({})
Disabled.args = {
  label    : "Label",
  options  : options,
  disabled : true
}
