import { makeStyles, Theme } from "@material-ui/core/styles"
import { lighten } from "@material-ui/core/styles/colorManipulator"
import { ClassNameMap } from "@material-ui/core/styles/withStyles"

export const useToolbarStyles: (props?: any) => ClassNameMap<any> = makeStyles((theme: Theme) => ({
  root : {
    borderBottom    : `1px solid ${theme.palette.divider}`,
    backgroundColor : "white",
    transition      : theme.transitions.create("background-color", { duration: theme.transitions.duration.short })
  },
  actionsContainer : {
    display        : "flex",
    width          : "100%",
    justifyContent : "space-between"
  },
  actions : {
    margin     : 0,
    display    : "flex",
    alignItems : "center",
    color      : theme.palette.text.secondary,
    cursor     : "pointer",
    "&:hover"  : {
      color : theme.palette.primary.main
    }
  },
  highlight : {
    color           : theme.palette.secondary.main,
    backgroundColor : lighten(theme.palette.secondary.light, 0.85)
  },
  textField : {
    marginLeft  : theme.spacing(),
    marginRight : theme.spacing(),
    width       : 200
  },
  noPadding : {
    padding : 0
  },
  title : {
    flex      : "0 0 auto",
    alignSelf : "center"
  },
  columnVisibilityListItems : {
    paddingLeft : 0
  }
}))
