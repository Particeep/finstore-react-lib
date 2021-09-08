import React, { ChangeEvent, SyntheticEvent, useState } from "react"
import {
  Toolbar, Typography, TextField, InputAdornment, Menu,
  ListItem, Checkbox, ListItemText, Fade
} from "@material-ui/core"
import { VisibilityOff, Search } from "@material-ui/icons"
import { Column, SearchCriteria } from "./models/models"
import classNames from "classnames"
import { T } from "../../conf/i18n"
import { useToolbarStyles } from "./styles/toolbarStyles"
import { ClassNameMap } from "@material-ui/core/styles/withStyles"
import { ActionMultiple, ReactState } from "../types"
import { ActionMenu, IconBtn } from "../buttons"

interface DatatableToolbarProps<T> {
  columns: Array<Column<T>>
  title: string
  hasGlobalSearch: boolean
  onToggleColumnVisibility: (col: Column<T>) => (e: SyntheticEvent) => void
  columnsVisibility: any
  multipleActions?: Array<ActionMultiple<T>>
  selectedRows: Array<T>
  hasLocalActions: boolean
  onSearch: (criteria: SearchCriteria) => void
}

interface MultipleActionsProps<T> {
  multipleActions?: Array<ActionMultiple<T>>
  selectedRows: Array<T>
}

const MultipleActions = <A, >({ multipleActions, selectedRows }: MultipleActionsProps<A>): JSX.Element => {
  return (
    <ActionMenu
      actionLabel={T.datatable.grouped_actions.label}
      variant={"contained"}
      color={"primary"}
      actions={multipleActions.map((a: ActionMultiple<A>) => ({
        label   : a.label,
        onClick : a.action(selectedRows),
        visible : true
      }))}
    />
  )
}

const DatatableToolbar = <A, >(props: DatatableToolbarProps<A>): JSX.Element => {
  const classes: ClassNameMap<any> = useToolbarStyles()
  const [ anchorEl, setAnchorEl ]: ReactState<any> = useState(null)

  const { onSearch, columns, title, hasGlobalSearch, onToggleColumnVisibility, columnsVisibility, multipleActions,
    selectedRows }: DatatableToolbarProps<A> = props
  const numSelectedRows: number = selectedRows ? selectedRows.length : 0

  const onSearchHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    onSearch({ global_search: event.target.value })
  }

  const handleClick = (event: SyntheticEvent): void => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (): void => {
    setAnchorEl(null)
  }

  const displayMultipleActions: boolean = numSelectedRows > 0

  return (
    <div>
      <Toolbar className={classNames(classes.root, { [classes.highlight]: numSelectedRows > 0 })}>
        {displayMultipleActions &&
        <Fade in={displayMultipleActions}>
          <div className={classes.actionsContainer}>
            <div className={classes.title}>
              <Typography color="inherit" variant="subtitle1"> {T.datatable.grouped_actions.rows_selected(numSelectedRows)}</Typography>
            </div>
            <MultipleActions
              multipleActions={multipleActions}
              selectedRows={selectedRows}
            />
          </div>
        </Fade>
        }
        {!displayMultipleActions &&
        <Fade in={!displayMultipleActions}>
          <div className={classes.actionsContainer}>
            <div className={classes.title}>
              <Typography variant="h6" id="tableTitle">{title}</Typography>
            </div>
            <div className={classes.actions}>
              <div>
                <IconBtn
                  title={T.datatable.show_column_chooser}
                  aria-owns={anchorEl ? "column-visibility" : undefined}
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <VisibilityOff />
                </IconBtn>
                <Menu
                  id="column-visibility"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  {columns.map((col: Column<A>) =>
                    <ListItem key={col.field_name} dense button onClick={onToggleColumnVisibility(col)} className={classes.columnVisibilityListItems}>
                      <Checkbox
                        checked={columnsVisibility[col.field_name]}
                        tabIndex={-1}
                        disableRipple
                      />
                      <ListItemText primary={col.label} className={classes.noPadding} />
                    </ListItem>
                  )}
                </Menu>
              </div>
              {hasGlobalSearch &&
              <div className={classes.actions}>
                <TextField
                  type={T.global.search}
                  className={classes.textField}
                  onChange={onSearchHandler}
                  InputProps={{
                    startAdornment : (
                      <InputAdornment position="start">
                        <Search />
                      </InputAdornment>
                    )
                  }}
                />
              </div>
              }
            </div>
          </div>
        </Fade>
        }
      </Toolbar>
    </div>
  )
}

export default DatatableToolbar
