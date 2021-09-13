import React from "react"
import { Typography } from "@material-ui/core"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { ClassNameMap } from "@material-ui/core/styles/withStyles"
import { Block } from "@material-ui/icons"

const useStyles: (props?: any) => ClassNameMap<any> = makeStyles((theme: Theme) => ({
  root : {
    textAlign  : "center",
    lineHeight : 1,
    marginTop  : theme.spacing()
  }
}))

interface EmptyProps {
  message: string
}

const Empty = (props: EmptyProps): JSX.Element => {
  const classes: ClassNameMap<any> = useStyles()
  return (
    <div className={classes.root}>
      <Block />
      <Typography>{props.message}</Typography>
    </div>
  )
}

export default Empty
