import React from "react"
import { T } from "../../conf/i18n"
import { Empty, ItemsPickerAction } from "../../components"
import Item from "./Item"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { makeStyles } from "@material-ui/core"
import { ClassNameMap } from "@material-ui/core/styles/withStyles"
import { Theme } from "@material-ui/core/styles"

interface ItemsListProps<T> {
  items: Array<T>
  toggleItem: any
  action: ItemsPickerAction
  renderItem: (item: T) => JSX.Element
}

const useStyles: (props?: any) => ClassNameMap<any> = makeStyles((theme: Theme) => ({
  enter : {
    opacity : 0
  },
  enterActive : {
    opacity    : 1,
    transition : theme.transitions.create("opacity", { duration: theme.transitions.duration.standard })
  },
  exit : {
    opacity : 1
  },
  exitActive : {
    opacity    : 0,
    transition : theme.transitions.create("opacity", { duration: theme.transitions.duration.standard })
  }
}))

const ItemsList = <A extends { id?: string } >({ items, action, toggleItem, renderItem }: ItemsListProps<A>): JSX.Element => {
  const classes: ClassNameMap<any> = useStyles()

  if (items.length > 0) {
    return (
      <React.Fragment>
        <TransitionGroup>
          {items.map((item: A) => (
            <CSSTransition
              key={item.id}
              timeout={500}
              classNames={{
                enter       : classes.enter,
                enterActive : classes.enterActive,
                exit        : classes.exit,
                exitActive  : classes.exitActive
              }}
            >
              <Item
                key={item.id}
                item={item}
                action={action}
                toggleItem={toggleItem}
                renderItem={renderItem}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </React.Fragment>
    )
  }
  return <Empty message={T.items_pickers.empty} />
}

export default ItemsList
