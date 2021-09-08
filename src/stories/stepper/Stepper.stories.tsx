import React from "react"
import { Story } from "@storybook/react"
import { IStep, TunnelStepper, TunnelStepperProps } from "../../components"
import { Typography } from "@material-ui/core"

export default {
  title     : "Components/Stepper",
  component : TunnelStepper
}

const Template: Story<TunnelStepperProps> = (args: TunnelStepperProps) => <TunnelStepper {...args} />

const onNext = (id: string, data: any): Promise<any> => {
  console.info(`Data from step ${id} : `, data)
  return new Promise((resolve: any) => {
    setTimeout(() => {
      if (id === "STEP_3") alert("Stepper finished !")
      resolve("")
    }, 1500)
  })
}

const steps: Array<IStep> = [
  { id: "STEP_1", name: "Step 1", content: <Typography>step 1 content</Typography> },
  { id: "STEP_2", name: "Step 2", content: <Typography>step 2 content</Typography> },
  { id: "STEP_3", name: "Step 3", content: <Typography>step 3 content</Typography> }
]

export const Default: any = Template.bind({})
Default.args = {
  steps  : steps,
  onNext : onNext
}
