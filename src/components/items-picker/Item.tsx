import React from "react"
import { IconBtn } from "../buttons"
import { AddCircle, RemoveCircle } from "@material-ui/icons"
import { makeStyles } from "@material-ui/core"
import { ClassNameMap } from "@material-ui/core/styles/withStyles"
import { Theme } from "@material-ui/core/styles"
import { ItemsPickerAction } from "./ItemsPicker"

const useStyles: (props?: any) => ClassNameMap<any> = makeStyles((theme: Theme) => ({
  root : {
    display      : "flex",
    alignItems   : "center",
    minHeight    : 60,
    borderBottom : `1px solid ${theme.palette.divider}`,
    padding      : theme.spacing(0, 2)
  },
  itemDesc : {
    display : "flex",
    padding : theme.spacing(),
    flex    : 1
  },
  addIcon : {
    color : theme.palette.success.main
  },
  removeIcon : {
    color : theme.palette.error.main
  }
}))

interface ItemProps<T> {
  item: T
  toggleItem: any
  action : ItemsPickerAction
  renderItem: (item: T) => JSX.Element
}

const Item = <A, >({ item, action, toggleItem, renderItem }: ItemProps<A>): JSX.Element => {
  const classes: ClassNameMap<any> = useStyles()
  return (
    <div className={classes.root}
    >
      <div className={classes.itemDesc}>
        {renderItem(item)}
      </div>
      <IconBtn onClick={toggleItem(item, action)}>
        {action === "SELECT" ?
          <AddCircle classes={{ root: classes.addIcon }} />
          : <RemoveCircle classes={{ root: classes.removeIcon }} />
        }
      </IconBtn>
    </div>
  )
}

export default Item
