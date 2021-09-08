import React from "react"
import { Story } from "@storybook/react"
import { Link, Typography } from "@material-ui/core"
import { TypographyProps } from "@material-ui/core/Typography/Typography"

export default {
  title     : "Typography/Typography",
  component : Typography
}

const Template: Story<TypographyProps> = () => <div>
  <Typography variant={"h5"}>Headline</Typography>
  <Typography variant={"h6"}>Title</Typography>
  <Typography variant={"body1"}>Body</Typography>
  <Typography variant={"body2"}>Paragraph</Typography>
  <Typography variant={"caption"}><Link href={"#"}>Link</Link></Typography>
</div>

export const All: any = Template.bind({})
