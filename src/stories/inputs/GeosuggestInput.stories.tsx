import React from "react"
import { Story } from "@storybook/react"
import { GeosuggestInput, GeosuggestInputProps, GoogleAddress } from "../../components"

export default {
  title     : "Inputs/Geosuggest Input",
  component : GeosuggestInput
}

const Template: Story<GeosuggestInputProps> = (args: GeosuggestInputProps) => <GeosuggestInput {...args} />

export const Default: any = Template.bind({})
Default.args = {
  placeholder    : "Search place",
  required       : true,
  value          : "",
  onPlaceChanged : (address: GoogleAddress) => console.info(address)
}

export const WithInitialValue: any = Template.bind({})
WithInitialValue.args = {
  placeholder    : "Search place",
  required       : true,
  value          : "15 Rue de l'École de Médecine, Paris, France",
  onPlaceChanged : (address: GoogleAddress) => console.info(address)
}
