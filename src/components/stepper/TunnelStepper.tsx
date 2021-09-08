import React, { ReactElement, useState } from "react"
import { Stepper, Step, StepLabel, makeStyles, useMediaQuery } from "@material-ui/core"
import { ClassNameMap } from "@material-ui/core/styles/withStyles"
import { Theme } from "@material-ui/core/styles"
import { ReactState } from "../types"
import { TunnelStep, MobileStepper } from "./index"

const useStyles: (props?: any) => ClassNameMap<any> = makeStyles((theme: Theme) => ({
  root : {
    border       : `1px solid ${theme.inputs.border.color}`,
    borderRadius : theme.card.borderRadius,
    boxShadow    : theme.card.boxShadow,
    overflow     : "hidden"
  }
}))

export interface IStep {
  id: string
  name: string
  content : ReactElement
}

export interface TunnelStepperProps {
  /**
   * List of steps to display in the stepper
   */
  steps: Array<IStep>
  /**
   * Fired when we go to the next step
   * @param {string} id : Id of the current step, useful to process the data with the suitable action
   * @param {any} data : Data sent by the current step
   */
  onNext : (id: string, data: any) => Promise<any>
  /**
   * initial current step
   */
  current? : number
}

export const TunnelStepper = (props: TunnelStepperProps): JSX.Element => {
  const classes: ClassNameMap<any> = useStyles()
  const isMobile: boolean = useMediaQuery("(max-width: 450px)")

  const { steps, current, onNext }: TunnelStepperProps = props
  const initialStep: number = current ? current : 0

  const [ loading, setLoading ]: ReactState<boolean> = useState<boolean>()
  const [ currentStep, setCurrentStep ]: ReactState<number> = useState(initialStep)
  const isLast: boolean = currentStep + 1 === steps.length

  const prev = () => {
    if (currentStep > 0 ) {
      setCurrentStep(currentStep - 1)
    }
  }

  const next  = (stepId: string, data: any): Promise<any> => {
    setLoading(true)

    return onNext(stepId, data).then(() => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1 )
      }
      setLoading(false)
    })
  }

  return (
    <div className = {classes.root}>
      {!isMobile ?
        <Stepper activeStep={currentStep}>
          {steps.map((step: IStep) =>
            <Step key={`step_${step.id}`}>
              <StepLabel>
                {step.name}
              </StepLabel>
            </Step>
          )}
        </Stepper> :
        <MobileStepper
          currentStep={currentStep}
          stepsSize={steps.length}
          onPrev={prev}
          stepName={steps[currentStep].name}
        />
      }
      <TunnelStep
        step={steps[currentStep]}
        next={next}
        prev={prev}
        loading={loading}
        isLast={isLast}
        isMobile={isMobile}
      />
    </div>
  )
}
