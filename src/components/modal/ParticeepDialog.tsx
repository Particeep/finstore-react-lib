import React, { MouseEventHandler, ReactNode } from "react"
import { Dialog, DialogActions, DialogContent } from "@material-ui/core"
import ParticeepDialogTitle from "./ParticeepDialogTitle"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { ClassNameMap } from "@material-ui/core/styles/withStyles"

const useStyles: (props?: ParticeepDialogProps) => ClassNameMap<any> = makeStyles((theme: Theme) => ({
  content : {
    paddingTop : (props: ParticeepDialogProps) => props.fullScreen ? theme.spacing(5) : 0
  }
}))

export interface ParticeepDialogProps {
  /**
   * Title displayed on the top of the dialog
   */
  title? : string
  /**
   * Description displayed under title
   */
  description? : string
  /**
   * If `true` the dialog is opened
   */
  isOpen: boolean
  /**
   * Fired when the component requests to be closed
   */
  onClose: MouseEventHandler<any>
  /**
   * If `true` the dialog will be full-screen
   */
  fullScreen?: boolean
  /**
   * Determine the max-width of the dialog
   */
  maxWidth?: any
  /**
   * Dialog action, displayed on the bottom of the dialog
   */
  action?: ReactNode
  /**
   * Dialog content, displayed on the body of the dialog
   */
  children: ReactNode
  /**
   * Css class name
   */
  className?: string
}

export const ParticeepDialog = (props : ParticeepDialogProps): JSX.Element => {
  const classes: ClassNameMap<any> = useStyles(props)
  const { title, onClose, isOpen, fullScreen, maxWidth, children, action, className, description }: ParticeepDialogProps = props

  return (
    <Dialog
      open={isOpen}
      maxWidth={maxWidth || "sm"}
      className={className}
      fullScreen={fullScreen}
      disableEnforceFocus
      fullWidth
    >
      {title &&
      <ParticeepDialogTitle 
        onClose={onClose} 
        fullScreen={fullScreen} 
        title={title} 
        description={description} />
      }
      <DialogContent className={classes.content}>
        {children}
      </DialogContent>
      {action &&
      <DialogActions>
        {action}
      </DialogActions>
      }
    </Dialog>
  )
}
