import React from "react"
import { Story } from "@storybook/react"
import { BtnGroup, BtnGroupProps, IBtnGroupItem } from "../../components"
import { ArrowDownward, ArrowUpward } from "@material-ui/icons"

export default {
  title     : "Buttons/Button Group",
  component : BtnGroup
}

const Template: Story<BtnGroupProps> = (args: BtnGroupProps) => <BtnGroup {...args} />

const defaultBtnGroup: Array<IBtnGroupItem> = [
  { label: "Chash out", onClick: () => {console.info("Chash out")} },
  { label: "Chash in",  onClick: () => {console.info("Chash out")} }
]

export const Default: any = Template.bind({})
Default.args = {
  buttons : defaultBtnGroup,
  variant : "outlined",
  color   : "primary"
}

const withIconBtnGroup: Array<IBtnGroupItem> = [
  { label: "Chash out", onClick: () => {console.info("Chash out")}, icon: <ArrowUpward color={"error"} /> },
  { label: "Chash in",  onClick: () => {console.info("Chash out")}, icon: <ArrowDownward color={"action"} /> }
]

export const WithIcon: any = Template.bind({})
WithIcon.args = {
  buttons : withIconBtnGroup,
  variant : "outlined",
  color   : "primary"
}
