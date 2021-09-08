import React from "react"
import { Story } from "@storybook/react"
import { ParticeepDatePicker, ParticeepDatePickerProps } from "../../components"

export default {
  title     : "Inputs/ParticeepDatePicker",
  component : ParticeepDatePicker
}

const Template: Story<ParticeepDatePickerProps> = (args: ParticeepDatePickerProps) => <ParticeepDatePicker {...args} />

export const Default: any = Template.bind({})
Default.args = {
  value : ""
}
