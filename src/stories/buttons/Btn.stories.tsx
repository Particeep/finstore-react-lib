import React from "react"
import { Btn, BtnProps } from "../../components"
import { Story } from "@storybook/react"
import { AddCircle } from "@material-ui/icons"

export default {
  title     : "Buttons/Button",
  component : Btn
}

export const AllButtons = (args: BtnProps) => {
  return (
    <div>
      <Btn {...args} variant={"contained"} color={"primary"}>Button</Btn>&nbsp;
      <Btn {...args} variant={"contained"} color={"primary"} startIcon={<AddCircle />}>Button</Btn>&nbsp;
      <Btn {...args} variant={"contained"} color={"primary"} endIcon={<AddCircle />}>Button</Btn>&nbsp;
      <Btn {...args} variant={"text"}>Button</Btn>&nbsp;
      <Btn {...args} variant={"contained"} color={"primary"} loading={true}>Button</Btn>&nbsp;
      <Btn {...args} variant={"contained"} color={"primary"} disabled={true}>Button</Btn>
    </div>
  )
}

const Template: Story<BtnProps> = (args: BtnProps) => <Btn {...args} />

export const Default: any = Template.bind({})
Default.args = {
  loading  : false,
  color    : "default",
  variant  : "contained",
  children : "Button"
}

export const Primary: any = Template.bind({})
Primary.args = {
  loading  : false,
  color    : "primary",
  variant  : "contained",
  children : "Button"
}

export const Secondary: any = Template.bind({})
Secondary.args = {
  loading  : false,
  color    : "secondary",
  variant  : "contained",
  children : "Button"
}

export const StartIcon: any = Template.bind({})
StartIcon.args = {
  loading   : false,
  startIcon : <AddCircle />,
  color     : "secondary",
  variant   : "contained",
  children  : "Button"
}

export const EndIcon: any = Template.bind({})
EndIcon.args = {
  loading  : false,
  endIcon  : <AddCircle />,
  color    : "secondary",
  variant  : "contained",
  children : "Button"
}

export const Loading: any = Template.bind({})
Loading.args = {
  loading  : true,
  color    : "primary",
  variant  : "contained",
  children : "Button"
}

export const Disabled: any = Template.bind({})
Disabled.args = {
  disabled : true,
  color    : "secondary",
  variant  : "contained",
  children : "Button"
}
