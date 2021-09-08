import React, { MouseEventHandler, ReactNode } from "react"
import { Button, ButtonGroup, ButtonProps } from "@material-ui/core"

export interface IBtnGroupItem {
  label: string
  icon?: ReactNode
  onClick: MouseEventHandler<any>
}

export interface BtnGroupProps {
  /**
   * Group buttons list
   */
  buttons: Array<IBtnGroupItem>
  /**
   * Button group variant
   */
  variant: ButtonProps["variant"]
  /**
   * Button group color
   */
  color: ButtonProps["color"]
}

export const BtnGroup = (props: BtnGroupProps): JSX.Element => {
  const { buttons, variant, color }: BtnGroupProps = props
  return (
    <ButtonGroup variant={variant} color={color}>
      {buttons.map((button: IBtnGroupItem) => (
        <Button key={button.label} onClick={button.onClick} endIcon={button.icon}>{button.label}</Button>
      ))
      }
    </ButtonGroup>
  )
}
