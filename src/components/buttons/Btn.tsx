import React, { MouseEventHandler } from "react"
import { Button, ButtonProps, CircularProgress } from "@material-ui/core"
import { CircularProgressProps } from "@material-ui/core/CircularProgress/CircularProgress"

export interface BtnProps {
  /**
   * If `true`, circular progress will be displayed.
   */
  loading?: boolean
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color?: ButtonProps["color"]
  /**
   * The variant to use.
   */
  variant?: ButtonProps["variant"]
  /**
   * If `true`, the button will be disabled.
   */
  disabled?: boolean
  /**
   * The content of the button.
   */
  children: ButtonProps["children"]
  /**
   * Element placed before the children.
   */
  startIcon?: ButtonProps["startIcon"]
  /**
   * Element placed after the children.
   */
  endIcon?: ButtonProps["endIcon"]
  /**
   * Fired when the button is clicked
   */
  onClick: MouseEventHandler<any>
  /**
   * Css class name
   */
  className?: string
}

export const Btn = ({ loading, children, ...props }: BtnProps): JSX.Element => {

  props.disabled = props.disabled || loading
  const loadingColor: CircularProgressProps["color"] = props.color as CircularProgressProps["color"]
  return (
    <Button
      {...props}
    >
      {!loading && children}
      {loading && <CircularProgress color={loadingColor} size={24} />}
    </Button>
  )
}
