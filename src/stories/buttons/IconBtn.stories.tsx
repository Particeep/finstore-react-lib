import React from "react"
import { Story } from "@storybook/react"
import { IconBtn, IconBtnProps } from "../../components"
import { Save } from "@material-ui/icons"

export default {
  title     : "Buttons/Icon Button",
  component : IconBtn
}

export const AllButtons = (args: IconBtnProps) => {
  return (
    <div style={{ display: "flex" }}>
      <IconBtn {...args} color={"primary"} title={"Button"}><Save /></IconBtn>
      <IconBtn {...args} color={"primary"} title={"Button"} loading={true}><Save /></IconBtn>
      <IconBtn {...args} color={"primary"} title={"Button"} disabled><Save /></IconBtn>
    </div>
  )
}

const Template: Story<IconBtnProps> = (args: IconBtnProps) => <IconBtn {...args} />

export const WithIconAndTitle: any = Template.bind({})
WithIconAndTitle.args = {
  title    : "Button",
  loading  : false,
  color    : "primary",
  children : <Save />
}

export const Loading: any = Template.bind({})
Loading.args = {
  title    : "Button",
  loading  : true,
  color    : "primary",
  children : <Save />
}

export const Disabled: any = Template.bind({})
Disabled.args = {
  disabled : true,
  title    : "Button",
  loading  : false,
  color    : "secondary",
  children : <Save />
}
