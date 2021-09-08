import React, { MouseEventHandler } from "react"
import { IconButton, CircularProgress, Tooltip, IconButtonProps, makeStyles } from "@material-ui/core"
import { ClassNameMap } from "@material-ui/core/styles/withStyles"

const useStyles: (props?: any) => ClassNameMap<any> = makeStyles(() => ({
  root : {
    color  : "inherit",
    width  : 40,
    height : 40
  }
}))

export interface IconBtnProps {
  /**
   * If `true`, circular progress will be displayed.
   */
  loading?: boolean
  /**
   * If `true`, the button will be disabled.
   */
  disabled?: boolean
  /**
   * Button title displayed on hover.
   */
  title?: IconButtonProps["title"]
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color?: IconButtonProps["color"]
  /**
   * The content of the button.
   */
  children: IconButtonProps["children"]
  /**
   * Fired when the button is clicked
   */
  onClick: MouseEventHandler<any>
  /**
   * Css class name
   */
  className?: string
}

export const IconBtn = ({ loading, children, disabled, title, ...props }: IconBtnProps): JSX.Element => {
  const classes: ClassNameMap<any> = useStyles()

  return (
    <Tooltip title={title} disableHoverListener={!title} disableFocusListener={!title}>
      <IconButton disabled={disabled || loading} classes={{ root: classes.root }} {...props}>
        {!loading && children}
        {loading && <CircularProgress size={23} /> }
      </IconButton>
    </Tooltip>
  )
}
