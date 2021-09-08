import React from "react"
import { Story } from "@storybook/react"
import { FormattedDateTime, ItemsPicker, ItemsPickerProps } from "../../components"
import { User } from "../../models/User"
import { usersSearchResult } from "../datatable/fixtures/fixtures"
import { Typography } from "@material-ui/core"

export default {
  title      : "Components/Items picker",
  component  : ItemsPicker,
  parameters : {
    layout : "fullscreen"
  }
}

const Template: Story<ItemsPickerProps<User>> = (args: ItemsPickerProps<User>) => <ItemsPicker {...args} />

const submitSelectedUsers = (users: Array<User>) => {
  console.info("Selected users : ", users)
}

const renderUserItem = (user: User) => (
  <div>
    <Typography variant={"caption"}>Nom : {user.last_name}</Typography><br />
    <Typography variant={"caption"}>Prénom : {user.first_name}</Typography><br />
    <Typography variant={"caption"}>Date d'inscription : <FormattedDateTime value={user.created_at} /></Typography>
  </div>
)

export const Default: any = Template.bind({})
Default.args = {
  title      : "Partners",
  items      : usersSearchResult.data,
  onChange   : submitSelectedUsers,
  renderItem : renderUserItem
}
