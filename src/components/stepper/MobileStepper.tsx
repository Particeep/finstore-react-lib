import { IconBtn } from "../buttons"
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft"
import { makeStyles, MobileStepper as MuiMobileStepper, StepLabel } from "@material-ui/core"
import React, { MouseEventHandler } from "react"
import { ClassNameMap } from "@material-ui/core/styles/withStyles"
import { Theme } from "@material-ui/core/styles"

const useStyles: (props?: any) => ClassNameMap<any> = makeStyles((theme: Theme) => ({
  root : {
    justifyContent : "end",
    display        : "flex",
    alignItems     : "center",
    padding        : theme.spacing(),
    height         : +theme.card.header.size.big - 4
  },
  labelContainer : {
    justifyContent : "center",
    display        : "flex",
    flexGrow       : 0.5
  },
  label : {
    color : theme.palette.text.primary
  },
  icon : {
    height          : 22,
    width           : 22,
    backgroundColor : theme.palette.secondary.main,
    borderRadius    : "50%",
    textAlign       : "center",
    color           : "white",
    fontWeight      : "bold",
    paddingTop      : theme.spacing(0.4)
  }
}))

interface MobileStepperProps {
  stepsSize: number
  onPrev: MouseEventHandler<any>
  currentStep: number
  stepName: string
}

const MobileStepper = ({ stepsSize, currentStep, stepName, onPrev }: MobileStepperProps): JSX.Element => {
  const classes: ClassNameMap<any> = useStyles()
  return (
    <MuiMobileStepper
      steps={stepsSize}
      activeStep={currentStep}
      backButton={
        <div className = {classes.root}>
          <IconBtn onClick={onPrev} disabled={currentStep === 0}>
            <KeyboardArrowLeft />
          </IconBtn>
          <div className={classes.labelContainer}>
            <StepLabel
              classes={{ label: classes.label }}
              icon={<span className={classes.icon}>{currentStep + 1}</span>}
            >
              {stepName}
            </StepLabel>
          </div>
        </div>
      }
      nextButton={<></>}
    />
  )
}

export default MobileStepper
