import React, { ChangeEvent, SyntheticEvent } from "react"
import { TableFooter, TablePagination } from "@material-ui/core"
import { T } from "../../conf/i18n"
import { SearchResult } from "../../models/SearchModel"
import { renderDisplayedRows } from "./helpers/helpers"

interface DatatableFooterProps<T> {
  searchResult: SearchResult<T>
  limit: number
  page: number
  onPageChange: (event: SyntheticEvent, page: number) => void
  onChangeRowsPerPage: (event: ChangeEvent<HTMLInputElement>) => void
}

const DatatableFooter = <A, >(props: DatatableFooterProps<A>): JSX.Element => {
  const { searchResult, limit, page, onPageChange, onChangeRowsPerPage }: DatatableFooterProps<A> = props
  const rowsPerPageOptions: Array<number> = searchResult.total_size >= 10 ? [ 10, 20, 50, 100 ] : []

  return (
    <TableFooter>
      <TablePagination
        labelRowsPerPage={T.datatable.rows_per_page}
        labelDisplayedRows={renderDisplayedRows}
        rowsPerPageOptions={rowsPerPageOptions}
        count={searchResult.total_size || 0}
        rowsPerPage={limit}
        page={page}
        onChangePage={onPageChange}
        onChangeRowsPerPage={onChangeRowsPerPage}
      />
    </TableFooter>
  )
}

export default DatatableFooter
