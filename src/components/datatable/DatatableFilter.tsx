import React, { useState } from "react"
import { TableHead, TableCell, TableRow } from "@material-ui/core"
import { FiltersBoolean, FiltersArrayCustom, FiltersDate, defaultDateFilter } from "./filters/filters"
import update from "immutability-helper"
import { useFilterStyles } from "./styles/filterStyles"
import { Column } from "./models/models"
import { ClassNameMap } from "@material-ui/core/styles/withStyles"
import { IObject, ReactState } from "../types"

const getDefaultFilter = <B, >(col: Column<B>) => {
  switch (col.filter) {
  case "DATE":
    return defaultDateFilter
  default:
    return null
  }
}

interface DatatableFilterProps<T> {
  columns: Array<Column<T>>
  onFilter: (filters: IObject) => void
  displayLocalActions: boolean
  hasMultipleActions: boolean
  columnsVisibility: any
}

const DatatableFilter = <A, >({ columns, displayLocalActions, hasMultipleActions, columnsVisibility, onFilter }: DatatableFilterProps<A>) => {
  const classes: ClassNameMap<any> = useFilterStyles()
  const initialFilter: IObject = columns.filter((c: Column<A>) => c.filter).reduce((acc: IObject, cur: Column<A>) => ({
    ...acc,
    [cur.field_name] : getDefaultFilter<A>(cur)
  }), {})

  const [ filtered, setFiltered ]: ReactState<IObject> = useState(initialFilter)

  const handleFilter = (name: string, value: string|boolean): void => {
    const newFilteredValue: IObject = {
      ...filtered,
      [name] : value
    }
    setFiltered(newFilteredValue)
    onFilter(newFilteredValue)
  }

  const handleJsonFieldsFilter = (name: string, value: string|boolean): void => {
    const subField: string = name.split(".")[1]
    const newFilteredValue: IObject = {
      ...filtered,
      custom_field : subField,
      custom_value : value
    }
    setFiltered(newFilteredValue)
    onFilter(newFilteredValue)
  }

  const handleFilterDate = (name: string, type: string, value: string|boolean): void => {
    const newFilteredValue: IObject = update(filtered, {
      [name] : {
        [type] : { $set: value }
      }
    })
    setFiltered(newFilteredValue)
    onFilter(newFilteredValue)
  }

  const filterRendering = (col: Column<A>): JSX.Element => {
    switch (col.filter) {
    case "BOOLEAN":
      return (
        <FiltersBoolean
          key={`filters-boolean-${col.field_name}`}
          name={col.field_name}
          onFilter={handleFilter}
          filter={filtered[col.field_name]}
        />
      )
    case "CUSTOM":
      return (
        <FiltersArrayCustom
          key={`filters-custom-${col.field_name}`}
          name={col.field_name}
          onFilter={handleFilter}
          options={col.filterOptions}
          filter={filtered[col.field_name]}
          {...col.withAllOption !== undefined && { withAllOption: col.withAllOption }}
        />
      )
    case "DATE":
      return (
        <FiltersDate
          key={`filters-date-${col.field_name}`}
          name={col.field_name}
          onFilter={handleFilterDate}
          after={filtered[col.field_name].after}
          before={filtered[col.field_name].before}
        />
      )
    case "JSON":
      return (
        <FiltersArrayCustom
          key={`filters-custom-${col.field_name}`}
          name={col.field_name}
          onFilter={handleJsonFieldsFilter}
          options={col.filterOptions}
          filter={filtered[col.field_name]}
          {...col.withAllOption !== undefined && { withAllOption: col.withAllOption }}
        />
      )
    default:
      return <></>
    }
  }

  return (
    <TableHead classes={{ root: classes.root }}>
      <TableRow className={classes.filterRow}>
        {hasMultipleActions && <TableCell>&nbsp;</TableCell>}
        {columns
          .filter((col: Column<A>) => !!columnsVisibility[col.field_name])
          .map((col: Column<A>) => <TableCell key={`filter-cell-${col.field_name}`} className={classes.filterCell}> {filterRendering(col)} </TableCell> )}
        {displayLocalActions && <TableCell>&nbsp;</TableCell>}
      </TableRow>
    </TableHead>
  )
}

export default DatatableFilter
