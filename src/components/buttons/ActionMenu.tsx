import React, { ChangeEvent, MouseEventHandler, ReactNode } from "react"
import { ListSubheader, MenuItem, ButtonProps, Menu, makeStyles } from "@material-ui/core"
import { Btn } from "./Btn"
import { ReactState } from "../types"
import { ClassNameMap } from "@material-ui/core/styles/withStyles"
import { Theme } from "@material-ui/core/styles/createMuiTheme"

export interface IAction {
  onClick?: MouseEventHandler<any>
  label?: string
  visible: boolean
  separator?: string
}

export interface ActionMenuProps {
  /**
   * Actions displayed in the menu
   */
  actions: Array<IAction>
  /**
   * Label of the open menu button
   */
  actionLabel: string
  /**
   * Icon of the open menu button
   */
  icon?: ReactNode
  /**
   * Style of the open menu button
   */
  variant?: ButtonProps["variant"]
  /**
   * Color of the open menu button
   */
  color?: ButtonProps["color"]
}

const useStyles: (props?: any) => ClassNameMap<any> = makeStyles((theme: Theme) => ({
  paper : {
    marginTop : theme.spacing(4.2)
  }
}))

const renderActions = (actions: Array<IAction>): Array<JSX.Element> => {
  return actions.filter((a: IAction) => a.visible).map((action: IAction, index: number) => {
    if (action.separator) {
      return <ListSubheader key={`separator-${index}`} component="div">{action.separator}</ListSubheader>
    } else {
      return <MenuItem key={`${action.label}-${index}`} onClick={action.onClick}>{action.label}</MenuItem>
    }
  })
}

export const ActionMenu = (props: ActionMenuProps): JSX.Element => {
  const classes: ClassNameMap<any> = useStyles()
  const [ anchorEl, setAnchorEl ]: ReactState<HTMLInputElement> = React.useState<HTMLInputElement>(undefined)
  const { actions, actionLabel, icon, variant, color }: ActionMenuProps = props

  const handleToggle = (event: ChangeEvent<any>): void => {
    if (!Boolean(anchorEl)) {
      setAnchorEl(event.currentTarget)
      event.preventDefault()
      event.stopPropagation()
    } else {
      setAnchorEl(undefined)
    }
  }

  return (
    <div>
      <Btn
        endIcon={icon}
        color={color}
        variant={variant}
        onClick={handleToggle}
      >{actionLabel}</Btn>
      <Menu
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClick={handleToggle}
        anchorOrigin={{
          vertical   : "bottom",
          horizontal : "center"
        }}
        transformOrigin={{
          vertical   : "top",
          horizontal : "center"
        }}
        classes={{ paper: classes.paper }}
        disableScrollLock
      >
        {renderActions(actions)}
      </Menu>
    </div>
  )
}
