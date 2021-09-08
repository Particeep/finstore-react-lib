import React, { ChangeEvent, SyntheticEvent } from "react"
import { Table, LinearProgress, TableContainer } from "@material-ui/core"
import classNames from "classnames"
import { buildFilterValues } from "./filters/filters"
import DatatableFooter from "./DatatableFooter"
import DatatableHead from "./DatatableHead"
import DatatableBody from "./DatatableBody"
import DatatableFilter from "./DatatableFilter"
import DatatableToolbar from "./DatatableToolbar"
import { Column, SearchCriteria } from "./models/models"
import { useDisplayStyles } from "./styles/displayStyles"
import { SearchResult } from "../../models/SearchModel"
import { ClassNameMap } from "@material-ui/core/styles/withStyles"
import { ActionMultiple, IObject } from "../types"

interface DatatableDisplayProps<T> {
  title?: string
  searchResult: SearchResult<T>
  callback: (value: SearchCriteria, page?: number) => void
  loading: boolean
  isLocalTable: boolean
  searchCriteria: SearchCriteria
  columns: Array<Column<T>>
  columnsVisibility: any
  toggleColumnVisibility: (col: Column<T>) => (e: SyntheticEvent) => void
  toggleAllSelect: () => void
  addRowToSelection: (row: T) => (e: SyntheticEvent) => void
  hasGlobalSearch: boolean
  hasLocalActions: boolean
  hasMultipleActions: boolean
  multipleActions?: Array<ActionMultiple<T>>
  selectedRows?: Array<T>
  cellActions: (row: T) => JSX.Element
  expandedRow?: (row: T) => JSX.Element
  limit: number
  page: number
}

const DatatableDisplay = <B, >(props: DatatableDisplayProps<B>): JSX.Element => {
  const classes: ClassNameMap<any> = useDisplayStyles()
  const { callback, loading, isLocalTable, searchCriteria, columns, columnsVisibility, toggleColumnVisibility, toggleAllSelect,
    addRowToSelection, title, hasGlobalSearch, multipleActions, selectedRows, hasLocalActions, hasMultipleActions, limit, expandedRow, searchResult, cellActions, page }: DatatableDisplayProps<B> = props

  const  checkVisibilityFilter = (): boolean => {
    return !columns.filter((c: Column<B>) => !!c.filter)
      .map((c: Column<B>) => c.field_name)
      .map((c: string) => columnsVisibility[c])
      .every((c: any) => !c)
  }

  const onPageChange = (event: SyntheticEvent, page: number): void => {
    const newSearchCriteria: SearchCriteria = { ...searchCriteria, offset: page * searchCriteria.limit } as SearchCriteria
    callback(newSearchCriteria, page)
  }

  const onChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>): void =>  {
    const newSearchCriteria: SearchCriteria = { ...searchCriteria, limit: +event.target.value }
    callback(newSearchCriteria)
  }

  const onSearchChange = (searching: SearchCriteria): void => {
    callback(searching)
  }

  const onSortChange = (sorting: SearchCriteria): void => {
    callback(sorting)
  }

  const onFilterChange = (filters: IObject): void => {
    callback(buildFilterValues(filters))
  }

  const hasFilter: boolean = checkVisibilityFilter()

  const displayLocalActions: boolean = hasLocalActions && selectedRows.length === 0

  return (
    <div className={classes.root}>
      <DatatableToolbar<B>
        onSearch                 = {onSearchChange}
        onToggleColumnVisibility = {toggleColumnVisibility}
        columns                  = {columns}
        title                    = {title}
        hasGlobalSearch          = {hasGlobalSearch}
        columnsVisibility        = {columnsVisibility}
        multipleActions          = {multipleActions}
        selectedRows             = {selectedRows}
        hasLocalActions          = {hasLocalActions}
      />
      <div className={classes.root}>
        {loading && <LinearProgress className={classes.progress} />}
        <TableContainer>
          <Table
            className={classNames({ [classes.fixedActionColumn]: hasLocalActions })}
            style={{ borderCollapse: "initial" }} // Fix bug when apply transform on <tr>
          >
            <DatatableHead<B>
              className           = "TableHead"
              onSort              = {onSortChange}
              onToggleAllSelect   = {toggleAllSelect}
              columns             = {columns}
              columnsVisibility   = {columnsVisibility}
              searchCriteria      = {searchCriteria}
              displayLocalActions = {displayLocalActions}
              selectedRows        = {selectedRows}
              limit               = {limit}
              hasMultipleActions  = {hasMultipleActions}
              expandedRow         = {expandedRow}
              isLocalTable        = {isLocalTable}
            />
            {hasFilter &&
            <DatatableFilter<B>
              onFilter            = {onFilterChange}
              columns             = {columns}
              displayLocalActions = {displayLocalActions}
              hasMultipleActions  = {hasMultipleActions}
              columnsVisibility   = {columnsVisibility}
            />
            }
            <DatatableBody<B>
              onToggleSelect      = {addRowToSelection}
              columns             = {columns}
              columnsVisibility   = {columnsVisibility}
              loading             = {loading}
              searchResult        = {searchResult}
              selectedRows        = {selectedRows}
              cellActions         = {cellActions}
              hasLocalActions     = {hasLocalActions}
              hasMultipleActions  = {hasMultipleActions}
              displayLocalActions ={displayLocalActions}
              expandedRow         = {expandedRow}
            />
          </Table>
        </TableContainer>
        {!isLocalTable &&
        <DatatableFooter
          onPageChange        = {onPageChange}
          onChangeRowsPerPage = {onChangeRowsPerPage}
          searchResult        = {searchResult}
          limit               = {limit}
          page                = {page}
        />
        }
      </div>
    </div>
  )
}

export default DatatableDisplay
