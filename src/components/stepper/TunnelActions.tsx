import { makeStyles } from "@material-ui/core"
import React from "react"
import { Btn } from "../buttons"
import { ClassNameMap } from "@material-ui/core/styles/withStyles"
import { Theme } from "@material-ui/core/styles"

const useStyles: (props?: any) => ClassNameMap<any> = makeStyles((theme: Theme) => ({
  root : {
    display        : "flex",
    justifyContent : "flex-end"
  },
  previous : {
    marginRight : theme.spacing()
  }
}))

interface StepperActionsProps {
  handleNext: (data: any) => void
  handlePrev: (data: any) => void
  isValid: boolean
  isLast: boolean
  loading: boolean
  isMobile: boolean
}

const TunnelActions = (props: StepperActionsProps): JSX.Element => {
  const classes: ClassNameMap<any> = useStyles()
  const { handleNext, handlePrev, isValid, isLast, loading, isMobile }: StepperActionsProps = props

  return (
    <div className = {classes.root}>
      {!isMobile &&
      <Btn
        onClick={handlePrev}
        color={"secondary"}
        className={classes.previous}
      >
        Previous
      </Btn>
      }
      <Btn
        onClick={handleNext}
        disabled={!isValid}
        loading={loading}
        color={"secondary"}
        variant={"contained"}
      >
        {isLast ? "Finish" : "Next"}
      </Btn>
    </div>
  )
}

export default TunnelActions
