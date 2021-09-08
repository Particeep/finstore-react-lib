import React from "react"
import { Story } from "@storybook/react"
import { ParticeepDialog, ParticeepDialogProps } from "../../components"
import { Button, Typography } from "@material-ui/core"

export default {
  title     : "Components/Particeep Dialog",
  component : ParticeepDialog
}

const Template: Story<ParticeepDialogProps> = (args: ParticeepDialogProps) => <ParticeepDialog {...args} />

export const Default: any = Template.bind({})
Default.args = {
  title       : "Lorem ipsum dolor sit amet",
  description : "description",
  isOpen      : true,
  children    : <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>,
  action      : <Button color={"primary"} variant={"contained"}>Action</Button>
}

export const FullScreen: any = Template.bind({})
FullScreen.args = {
  fullScreen  : true,
  title       : "Lorem ipsum dolor sit amet",
  description : "description",
  isOpen      : true,
  children    : <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>,
  action      : <Button color={"primary"}>Action</Button>
}
