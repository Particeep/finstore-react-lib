import { MobileStepperProps } from "@material-ui/core/MobileStepper"

export const mobileStepper: MobileStepperProps = {
  variant             : "progress",
  position            : "static",
  LinearProgressProps : {
    color : "secondary"

  },
  backButton : {},
  nextButton : {},
  steps      : undefined
}
