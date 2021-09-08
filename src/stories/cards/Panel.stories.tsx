import React from "react"
import { Story } from "@storybook/react"
import { Btn, Panel, PanelProps } from "../../components"
import { Typography } from "@material-ui/core"

export default {
  title     : "Components/Panel",
  component : Panel
}

const Template: Story<PanelProps> = (args: PanelProps) => <Panel {...args} />

export const Default: any = Template.bind({})
Default.args = {
  children  : <Typography>Content</Typography>,
  header    : "Title",
  subheader : "Sub title",
  actions   : <Btn variant={"contained"}>Submit</Btn>
}

export const WithLoading: any = Template.bind({})
WithLoading.args = {
  children  : <Typography>Content</Typography>,
  header    : "Title",
  subheader : "Sub title",
  actions   : <Btn loading={true}>Submit</Btn>,
  loading   : true
}

export const Expandable: any = Template.bind({})
Expandable.args = {
  children     : <Typography>Content</Typography>,
  header       : "Title",
  subheader    : "Sub title",
  actions      : <Btn color="secondary" variant={"contained"}>Submit</Btn>,
  isExpandable : true
}

export const ExpandableClosedPanel: any = Template.bind({})
ExpandableClosedPanel.args = {
  children      : <Typography>Content</Typography>,
  header        : "Title",
  subheader     : "Sub title",
  actions       : <Btn color="secondary" variant={"contained"}>Submit</Btn>,
  isExpandable  : true,
  defaultClosed : true
}
