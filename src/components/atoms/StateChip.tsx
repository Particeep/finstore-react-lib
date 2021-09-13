import React from "react"
import { Chip, fade, makeStyles } from "@material-ui/core"
import { Theme } from "@material-ui/core/styles"
import { ClassNameMap } from "@material-ui/core/styles/withStyles"

const useStyles: (props?: any) => ClassNameMap<any> = makeStyles((theme: Theme) => ({
  root : (props: StateChipProps) => {
    const color: string = theme.palette[props.type].main
    return ({
      fontSize        : 12,
      borderRadius    : 4,
      fontWeight      : "bold",
      padding         : theme.spacing(0.7, 0),
      color           : color,
      backgroundColor : fade(color, 0.10)
    })
  }
}))

export type StateChipType = "success" | "info" | "warning" | "error"

export interface StateChipProps {
  type: StateChipType
  label: string
}

export const StateChip = ({ type, label }: StateChipProps): JSX.Element => {
  const classes: ClassNameMap<any> = useStyles({ type })
  return (
    <Chip
      label={label}
      className={classes.root}
      size="small"
    />
  )
}
