import React from "react"
import { Story } from "@storybook/react"
import { AmountSuggest, AmountSuggestProps } from "../../components"

export default {
  title     : "Components/Amount Suggest",
  component : AmountSuggest
}

const Template: Story<AmountSuggestProps> = (args: AmountSuggestProps) => <AmountSuggest {...args} />

const pickAmount = (selectedAmount: number) => {
  console.info("Selected amount : ", selectedAmount)
}

export const Default: any = Template.bind({})
Default.args = {
  currency      : "EUR",
  fundraiseType : "EQUITY",
  max           : 1000,
  min           : 50,
  sharePrice    : 50,
  onSelect      : pickAmount
}
