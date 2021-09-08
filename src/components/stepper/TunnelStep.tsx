import React, { ChangeEvent, useState } from "react"
import { ReactState } from "../types"
import TunnelActions from "./TunnelActions"
import { IStep } from "./TunnelStepper"
import { Fade, makeStyles } from "@material-ui/core"
import { ClassNameMap } from "@material-ui/core/styles/withStyles"
import { Theme } from "@material-ui/core/styles"

interface TunnelStepProps {
  step: IStep
  next: (id: string, data: any) => Promise<any>
  prev: () => void
  loading: boolean
  isLast: boolean
  isMobile: boolean
}

const useStyles: (props?: any) => ClassNameMap<any> = makeStyles((theme: Theme) => ({
  root : {
    backgroundColor : "white",
    padding         : theme.spacing()
  }
}))

const TunnelStep = ({ step, prev, loading, next, isLast, isMobile }: TunnelStepProps): JSX.Element => {
  const classes: ClassNameMap<any> = useStyles()
  const [ stepData, setStepData ]: ReactState<any> = useState()
  const [ isValid, setIsValid ]: ReactState<boolean> = useState<boolean>(true)

  const handleNext = (event: ChangeEvent<any>): Promise<any> => {
    return next(step.id, stepData)
  }

  const handlePrev = (event: ChangeEvent<any>): void => {
    prev()
  }

  return (
    <div className={classes.root}>
      <Fade in={true}>
        {React.cloneElement(step.content, {
          stepData, setStepData, setIsValid
        })}
      </Fade>
      <TunnelActions
        handleNext={handleNext}
        handlePrev={handlePrev}
        isValid={isValid}
        isLast={isLast}
        loading={loading}
        isMobile={isMobile}
      />
    </div>
  )
}

export default TunnelStep
