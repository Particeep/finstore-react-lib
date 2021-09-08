import React from "react"
import { Story } from "@storybook/react"
import { ExpandedPanel, ExpandedPanelItem, ExpandedPanelProps } from "../../components"
import { Typography } from "@material-ui/core"

export default {
  title     : "Components/Expanded Panel",
  component : ExpandedPanel
}

const Template: Story<ExpandedPanelProps> = (args: ExpandedPanelProps) => <ExpandedPanel {...args} />

const panels: Array<ExpandedPanelItem> = [
  { title: <Typography>Accordion 1</Typography>, content: <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography> },
  { title: <Typography>Accordion 2</Typography>, content: <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography> },
  { title: <Typography>Accordion 3</Typography>, content: <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography> }
]

export const Default: any = Template.bind({})
Default.args = {
  panels : panels
}
