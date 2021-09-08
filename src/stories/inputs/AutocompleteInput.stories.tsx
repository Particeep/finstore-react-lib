import React from "react"
import { Story } from "@storybook/react"
import { AutocompleteInput, AutocompleteData, AutocompleteInputProps } from "../../components"

export default {
  title     : "Inputs/Autocomplete Input",
  component : AutocompleteInput
}

const Template: Story<AutocompleteInputProps> = (args: AutocompleteInputProps) => <AutocompleteInput {...args} />

export const Default: any = Template.bind({})
Default.args = {
  options     : [],
  id          : "autocomplete-default",
  placeholder : "Search",
  onChange    : (data: string) => console.info(data),
  onSelect    : (data: AutocompleteData) => console.info(data)
}

const data: Array<AutocompleteData> = [
  { label: "test 01", value: "test 01", text: "test 01" },
  { label: "test 02", value: "test 02", text: "test 02" },
  { label: "test 03", value: "test 03", text: "test 03" }
]

export const WithData: any = Template.bind({})
WithData.args = {
  options     : data,
  id          : "autocomplete-default",
  placeholder : "Search",
  onChange    : (data: string) => console.info(data),
  onSelect    : (data: AutocompleteData) => console.info(data)
}
