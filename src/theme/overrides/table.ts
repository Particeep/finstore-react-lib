import { StyleRules } from "@material-ui/core/styles/withStyles"
import { TableBodyClassKey, TableCellClassKey, TableFooterClassKey, TablePaginationClassKey } from "@material-ui/core"
import { customTheme } from "../custom"

export const tableCell: Partial<StyleRules<TableCellClassKey>> = {
  root : {
    borderBottomWidth : 0
  }
}

export const tablePagination: Partial<StyleRules<TablePaginationClassKey>> = {
  root : {
    float : "right"
  }
}

export const tableFooter: Partial<StyleRules<TableFooterClassKey>> = {
  root : {
    display : "block",
    width   : "100%"
  }
}

export const tableBody: Partial<StyleRules<TableBodyClassKey>> = {
  root : {
    "& tr td" : {
      height       : 44,
      padding      : customTheme.spacing(0, 1),
      overflow     : "hidden",
      textOverflow : "ellipsis",
      whiteSpace   : "nowrap"
    }
  }
}
