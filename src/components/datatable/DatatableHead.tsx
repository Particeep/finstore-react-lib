import React from "react"
import { TableHead, TableCell, TableRow, TableSortLabel, Tooltip, Checkbox } from "@material-ui/core"
import { useHeadStyles } from "./styles/headStyles"
import { Column, OrderType, SearchCriteria } from "./models/models"
import { ClassNameMap } from "@material-ui/core/styles/withStyles"

interface CellWithSortProps<D> {
  col: Column<D>
  sortHandler: () => void
  sortCriteria: SearchCriteria
}

const CellWithSort = <E, >({ col, sortHandler, sortCriteria }: CellWithSortProps<E>) => {
  const canSort: boolean = col.canSort !== undefined ? col.canSort : true
  if (canSort) {
    return (
      <Tooltip
        title="Sort"
        placement={col.type === "number" ? "bottom-end" : "bottom-start"}
        enterDelay={300}
      >
        <TableSortLabel
          active={sortCriteria.sort_by === col.field_name}
          direction={sortCriteria.order_by}
          onClick={sortHandler}
        >
          {col.label}
        </TableSortLabel>
      </Tooltip>
    )
  } else {
    return (<span>{col.label}</span>)
  }
}

interface DatatableHeadProps<T> {
  columns: Array<Column<T>>
  columnsVisibility: any
  searchCriteria: SearchCriteria
  onSort: (sorting: SearchCriteria) => void
  displayLocalActions: boolean
  selectedRows: Array<T>
  onToggleAllSelect: () => void
  limit: number
  hasMultipleActions: boolean
  expandedRow: (row: T) => JSX.Element
  isLocalTable: boolean
  className: string
}

const DatatableHead = <C, >(props: DatatableHeadProps<C>): JSX.Element => {

  const { columns, columnsVisibility, searchCriteria, onSort, displayLocalActions, selectedRows, onToggleAllSelect, limit,
    hasMultipleActions, expandedRow, isLocalTable, className }: DatatableHeadProps<C> = props

  const classes: ClassNameMap<any> = useHeadStyles()

  const createSortHandler = (col: Column<C>) => () => {
    const { sort_by, order_by }: SearchCriteria = searchCriteria
    let order: OrderType = "desc"
    if (sort_by === col.field_name && order_by === "desc") {
      order = "asc"
    }
    onSort({ sort_by: col.field_name, order_by: order })
  }

  const cellRender = (visibility: boolean, col: Column<C>): JSX.Element => {
    if (visibility) {
      return (
        <TableCell
          key={col.field_name}
          align={col.type === "number" ? "right" : "left"}
          {...!isLocalTable && { sortDirection: searchCriteria.sort_by === col.field_name ? searchCriteria.order_by : false }}
        >
          {!isLocalTable &&
          <CellWithSort<C>
            col={col}
            sortHandler={createSortHandler(col)}
            sortCriteria={{
              order_by : searchCriteria.order_by,
              sort_by  : searchCriteria.sort_by
            }} />
          }
          {isLocalTable && <span>{col.label}</span>}
        </TableCell>
      )
    } else {
      return <React.Fragment key={col.field_name} />
    }
  }

  return (
    <TableHead {...{ className }}>
      <TableRow className={classes.headerRow}>
        {hasMultipleActions &&
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={selectedRows.length > 0 && selectedRows.length < limit}
            checked={selectedRows.length === limit}
            onChange={onToggleAllSelect}
            style={{ paddingTop: 0, paddingBottom: 0 }}
          />
        </TableCell>
        }
        {expandedRow &&
        <TableCell style={{ width: 30 }}>&nbsp;</TableCell>
        }
        {columns.map((col: Column<C>) => cellRender(!!columnsVisibility[col.field_name], col))}
        {displayLocalActions && <TableCell className={classes.actionsCell}>&nbsp;</TableCell>}
      </TableRow>
    </TableHead>
  )
}

export default DatatableHead
