import React from "react"
import { Story } from "@storybook/react"
import { ActionMenu, ActionMenuProps, IAction } from "../../components"
import { AddCircle } from "@material-ui/icons"

export default {
  title     : "Buttons/Action Menu",
  component : ActionMenu
}

const Template: Story<ActionMenuProps> = (args: ActionMenuProps) => <ActionMenu {...args} />

const defaultActions: Array<IAction> = [
  { label: "Profile",  onClick: () => {console.info("Profile")},  visible: true },
  { label: "Settings", onClick: () => {console.info("Settings")}, visible: true },
  { label: "Logout",   onClick: () => {console.info("Logout")},   visible: true }
]

export const Default: any = Template.bind({})
Default.args = {
  actions     : defaultActions,
  actionLabel : "Menu",
  color       : "primary"
}

export const WithIcon: any = Template.bind({})
WithIcon.args = {
  actions     : defaultActions,
  actionLabel : "Menu",
  icon        : <AddCircle />,
  variant     : "contained",
  color       : "primary"
}

const withSeparatorActions: Array<IAction> = [
  { separator: "Separator label", visible: true },
  ...defaultActions
]

export const WithMenuSeparator: any = Template.bind({})
WithMenuSeparator.args = {
  actions     : withSeparatorActions,
  actionLabel : "Menu",
  color       : "primary"
}
