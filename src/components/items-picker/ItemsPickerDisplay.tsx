import React, { ChangeEvent } from "react"
import { T } from "../../conf/i18n"
import { makeStyles, Grid, Button, Typography, TextField, useMediaQuery } from "@material-ui/core"
import ItemsList from "./ItemsList"
import { ClassNameMap } from "@material-ui/core/styles/withStyles"
import { Theme } from "@material-ui/core/styles"
import { ItemsPickerAction } from "./ItemsPicker"
import ItemsPickerHead from "./ItemsPickerHead"
import classNames from "classnames"

const useStyles: (props?: any) => ClassNameMap<any> = makeStyles((theme: Theme) => ({
  root : {
    justifyContent : "center",
    display        : "block"
  },
  grid : {
    border : `1px solid ${theme.palette.divider}`
  },
  itemsList : {
    height   : 400,
    overflow : "auto"
  },
  header : {
    padding               : theme.spacing(),
    display               : "flex",
    borderBottom          : `1px solid ${theme.palette.divider}`,
    height                : 60,
    alignItems            : "center",
    "& > div:first-child" : {
      flex : 1
    }
  },
  smallHeader : {
    flexFlow   : "column",
    alignItems : "normal",
    height     : "unset"
  },
  searchField : {
    margin : theme.spacing(0, 1)
  },
  loadMore : {
    textAlign : "center",
    padding   : theme.spacing()
  },
  action : {
    float : "right"
  },
  title : {
    fontWeight : 600,
    padding    : theme.spacing(1, 2)
  }
}))

export interface ItemsPickerDisplayProps<T> {
  title: string
  items: Array<T>
  selectedItems: Array<T>
  searchItems: (event: ChangeEvent<HTMLInputElement>) => void
  loadMoreItems: () => void
  selectAllItems: () => void
  removeAllItems: () => void
  toggleItem: (item: T, action: ItemsPickerAction) => void
  renderItem: (item: T) => JSX.Element
}

export const ItemsPickerDisplay = <A extends { id?: string }>(props: ItemsPickerDisplayProps<A>): JSX.Element => {
  const classes: ClassNameMap<any> = useStyles()
  const { title, items, selectedItems, searchItems, loadMoreItems, selectAllItems, removeAllItems, toggleItem, renderItem }: ItemsPickerDisplayProps<A> = props
  const isSmallScreen: boolean = useMediaQuery("(max-width: 500px)")

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>{title}</Typography>
      <Grid container>
        <Grid item md={6} xs={12} sm={12} className={classes.grid}>
          <div className={classNames(classes.header, {
            [classes.smallHeader] : isSmallScreen
          })}>
            <ItemsPickerHead
              title={T.items_pickers.item.to_select.label}
              itemsSize={items.length}
              action={selectAllItems}
              actionLabel={T.items_pickers.select_all}
            />
            <TextField className={classes.searchField} placeholder={T.global.search} onChange={searchItems} />
          </div>
          <div className={classes.itemsList}>
            <ItemsList<A>
              items={items}
              action={"SELECT"}
              toggleItem={toggleItem}
              renderItem={renderItem}
            />
            <div className={classes.loadMore}>
              <Button
                color={"primary"}
                onClick={loadMoreItems}>{T.global.load_more}
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item md={6} xs={12} sm={12} className={classes.grid}>
          <div className={classes.header}>
            <ItemsPickerHead
              title={T.items_pickers.item.selected.label}
              itemsSize={selectedItems.length}
              action={removeAllItems}
              actionLabel={T.items_pickers.deselect_all}
            />
          </div>
          <div className={classes.itemsList}>
            <ItemsList<A>
              items={selectedItems}
              action={"DESELECT"}
              toggleItem={toggleItem}
              renderItem={renderItem}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
