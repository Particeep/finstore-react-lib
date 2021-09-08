import React, { MouseEventHandler } from "react"
import { ClassNameMap } from "@material-ui/core/styles/withStyles"
import { Theme } from "@material-ui/core/styles"
import {
  AppBar, DialogTitle as MuiDialogTitle, IconButton, makeStyles, Toolbar, Typography
} from "@material-ui/core"
import { Close } from "@material-ui/icons"

const useStyles: (props?: DialogTitleProps) => ClassNameMap<any> = makeStyles((theme: Theme) => ({
  closeButton : {
    position : "absolute",
    right    : theme.spacing(),
    top      : theme.spacing(),
    color    : theme.palette.grey[500]
  },
  title : {
    fontWeight : 600
  },
  description : {
    color : theme.palette.text.secondary
  },
  toolBar : {
    color : "white"
  }
}))

interface DialogTitleProps {
  onClose: MouseEventHandler<any>
  fullScreen: boolean
  title: string
  description: string
}

const ParticeepDialogTitle = (props: DialogTitleProps): JSX.Element => {
  const classes: ClassNameMap<any> = useStyles()
  const { onClose, fullScreen, title, description }: DialogTitleProps = props

  return (
    <MuiDialogTitle className={classes.root}>
      {fullScreen ?
        <AppBar>
          <Toolbar className={classes.toolBar}>
            <IconButton color="inherit" onClick={onClose}>
              <Close />
            </IconButton>
            {title}
          </Toolbar>
        </AppBar> :
        <div>
          <Typography className={classes.title}>{title}</Typography>
          <Typography className={classes.description}>{description}</Typography>
          {onClose ? (
            <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
              <Close />
            </IconButton>
          ) : <React.Fragment />}
        </div>
      }
    </MuiDialogTitle>
  )
}

export default ParticeepDialogTitle
