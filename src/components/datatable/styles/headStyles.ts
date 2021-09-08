import { makeStyles } from "@material-ui/core"
import { Theme } from "@material-ui/core/styles"
import { ClassNameMap } from "@material-ui/core/styles/withStyles"

export const useHeadStyles: (props?: any) => ClassNameMap<any> = makeStyles((theme: Theme) => ({
  headerRow : {
    "& > th" : {
      borderBottom : `1px solid ${theme.palette.divider}`
    },
    "& > th:first-child" : {
      paddingLeft : `${theme.spacing(2)}px !important`
    },
    "& > th:last-child" : {
      paddingRight : `${theme.spacing(2)}px !important`
    }
  },
  actionsCell : {
    background : "transparent !important"
  }
}))
