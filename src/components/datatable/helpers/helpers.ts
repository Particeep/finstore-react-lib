import { Column, SearchCriteria } from "../models/models"
import { T } from "../../../conf/i18n"

export const compareKeys = (a: { [key: string]: any }, b: { [key: string]: any }): boolean => {
  const aKeys: string[] = Object.keys(a).sort()
  const bKeys: string[] = Object.keys(b).sort()
  return JSON.stringify(aKeys) === JSON.stringify(bKeys)
}

export const computeInitialPage = (searchCriteria: SearchCriteria): number => {
  if (!!searchCriteria && !!searchCriteria.limit && searchCriteria.limit > 0) {
    return searchCriteria.offset / searchCriteria.limit
  } else {
    return 0
  }
}

export const isRowSelected = <T extends {id?: string}>(id: string, selected: Array<T>): boolean => selected.map((s: T) => s.id).includes(id)

export const computeEmptyCellColSpan = <T>(
  columns: Array<Column<T>>,
  hasMultipleActions: boolean,
  expandedRow: (row: T) => JSX.Element,
  hasLocalActions: boolean
): number => {
  return [ hasMultipleActions, expandedRow, hasLocalActions, ...columns.map((c: Column<T>) => c.visible) ]
    .filter((v: boolean | ((row: T) => JSX.Element)) => v).length
}

export interface DisplayedRowsProps {
  from: number
  to: number
  count: number
}

export const renderDisplayedRows = ({ from, to, count }: DisplayedRowsProps): string => T.datatable.table_displayed_rows(from, to, count)
