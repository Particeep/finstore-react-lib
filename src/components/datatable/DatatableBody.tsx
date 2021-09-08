import React, { SyntheticEvent, useState } from "react"
import { TableCell, TableRow, TableBody, Checkbox, Icon, Typography, Fade } from "@material-ui/core"
import { FormattedAmount, FormattedBoolean, FormattedDate, FormattedDateTime, FormattedNumber, FormattedGender, FormattedLegalType } from "../formatters"
import { IconBtn } from "../buttons"
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons"
import { T } from "../../conf/i18n"
import { useBodyStyles } from "./styles/bodyStyles"
import { Column } from "./models/models"
import { SearchResult } from "../../models/SearchModel"
import { computeEmptyCellColSpan, isRowSelected } from "./helpers/helpers"
import { ClassNameMap } from "@material-ui/core/styles/withStyles"
import { ReactState } from "../types"

const EmptyRow = (props: { colSpan: number }) => {
  const classes: ClassNameMap<any> = useBodyStyles()

  return (
    <TableBody>
      <TableRow>
        <TableCell align={"center"} colSpan={props.colSpan}>
          <div>
            <Icon color={"disabled"} className={classes.emptyCellIcon}>block</Icon>
          </div>
          <Typography variant={"caption"}>{T.datatable.empty}</Typography>
        </TableCell>
      </TableRow>
    </TableBody>
  )
}

const buildCell = <C extends { id?: string }>(row_value: any, type_of: string, row: C, index: number): JSX.Element => {
  const cell_id: string = `${row.id}--${index}`
  switch (type_of) {
  case "number":
    return <TableCell key={cell_id}><FormattedNumber value={row_value} /></TableCell>
  case "currency":
    return <TableCell key={cell_id}><FormattedAmount value={row_value} row={row} variant="currency" /></TableCell>
  case "currency-standard":
    return <TableCell key={cell_id}><FormattedAmount value={row_value} row={row} variant="currency-standard" /></TableCell>
  case "percentage":
    return <TableCell key={cell_id}><FormattedAmount value={row_value} row={row} variant="percent" /></TableCell>
  case "boolean":
    return <TableCell key={cell_id}><FormattedBoolean value={row_value} /></TableCell>
  case "date":
    return <TableCell key={cell_id}><FormattedDate value={row_value} /></TableCell>
  case "datetime":
    return <TableCell key={cell_id}><FormattedDateTime value={row_value} /></TableCell>
  case "gender":
    return <TableCell key={cell_id}><FormattedGender value={row_value} /></TableCell>
  case "legalType":
    return <TableCell key={cell_id}><FormattedLegalType value={row_value} /></TableCell>
  default:
    return <TableCell key={cell_id} scope="row">{row_value}</TableCell>
  }
}

const buildRow = <B, >(row: B, columns: Array<Column<B>>, columnsVisibility: any): Array<any> => {
  const result: Array<any> = []
  columns.map((col: Column<B>, index: number) => {
    const formatter: (cell: string, row: B) => any = col.formatter ? col.formatter : (c: string) => c
    const value_formatted: any = formatter(row[col.field_name], row)
    const row_value: any = value_formatted !== undefined ? value_formatted : T.global.nc
    const type_of: string = col.type ? col.type : (typeof row_value)
    if (!!columnsVisibility[col.field_name]) {
      result.push(buildCell<B>(row_value, type_of, row, index))
    }
  })
  return result
}

interface DatatableBodyProps<T> {
  columns: Array<Column<T>>
  columnsVisibility: any
  loading: boolean
  searchResult: SearchResult<T>
  selectedRows: Array<T>
  onToggleSelect: (row: T) => (e: SyntheticEvent) => void
  cellActions: (row: T) => JSX.Element
  hasLocalActions: boolean
  hasMultipleActions: boolean
  displayLocalActions: boolean
  expandedRow: (row: T) => JSX.Element
}

const DatatableBody = <A extends { id?: string }>(props: DatatableBodyProps<A>): JSX.Element => {

  const { columns, columnsVisibility, loading, searchResult, selectedRows, onToggleSelect, cellActions,
    hasLocalActions, hasMultipleActions, displayLocalActions, expandedRow }: DatatableBodyProps<A> = props

  const [ rowExpanded, setRowExpanded ]: ReactState<Array<string>> = useState<Array<string>>([])
  const classes: ClassNameMap<any> = useBodyStyles()

  const toggleExpand = (rowId: string) => (): void => {
    if (rowExpanded.includes(rowId)) {
      setRowExpanded([ ...rowExpanded.filter((r: string) => r !== rowId) ])
    } else {
      setRowExpanded([ rowId, ...rowExpanded ])
    }
  }

  if (searchResult.data && searchResult.data.length === 0 && !loading) {
    const colSpan: number = computeEmptyCellColSpan(columns, hasMultipleActions, expandedRow, hasLocalActions)
    return (
      <EmptyRow colSpan={colSpan} />
    )
  }

  return (
    <TableBody>
      {searchResult.data.map((row: A) => {
        const isSelected: boolean = selectedRows ? isRowSelected(row.id, selectedRows) : false
        const isExpanded: boolean = rowExpanded.includes(row.id)
        return (
          <React.Fragment key={row.id}>
            <TableRow
              hover
              role="checkbox"
              tabIndex={-1}
              selected={isSelected}
              className={classes.tableRow}
              classes={{ root: classes.root }}
            >
              {hasMultipleActions &&
              <TableCell className={classes.checkboxCell}>
                <Checkbox checked={isSelected} onClick={onToggleSelect(row)} />
              </TableCell>
              }
              {expandedRow &&
              <TableCell className={classes.expandedCell}>
                <IconBtn
                  onClick={toggleExpand(row.id)}
                >
                  {isExpanded ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                </IconBtn>
              </TableCell>
              }
              {buildRow(row, columns, columnsVisibility)}
              {displayLocalActions &&
                <Fade in={displayLocalActions}>
                  <TableCell className={classes.actionCell}>
                    {cellActions(row)}
                  </TableCell>
                </Fade>
              }
            </TableRow>
            {isExpanded &&
            <Fade in={isExpanded}>
              <TableRow
                key={`expanded-row-${row.id}`}
                hover
              >
                <TableCell style={{ textAlign: "left" }} colSpan={100}>
                  {expandedRow(row)}
                </TableCell>
              </TableRow>
            </Fade>
            }
          </React.Fragment>
        )
      })}
    </TableBody>
  )
}

export default DatatableBody
