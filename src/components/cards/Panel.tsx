import React, { ReactNode, useState } from "react"
import { ReactState } from "../types"
import clsx from "clsx"
import { Card, CardActions, CardContent, CardHeader, LinearProgress, makeStyles, Collapse, IconButton } from "@material-ui/core"
import { Theme } from "@material-ui/core/styles"
import { ClassNameMap } from "@material-ui/core/styles/withStyles"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"


const useStyles: (props?: any) => ClassNameMap<any> = makeStyles((theme: Theme) => ({
  noPadding : {
    padding : 0
  },
  expand : {
    transform  : "rotate(0deg)",
    marginLeft : "auto",
    transition : theme.transitions.create("transform", {
      duration : theme.transitions.duration.shortest
    })
  },
  expandOpen : {
    transform : "rotate(180deg)"
  }
}))

export interface PanelProps {
  /**
   * The content of the Panel
   */
  children: ReactNode
  /**
   * Header of the Panel, displayed on the top of the Panel
   */
  header: ReactNode
  /**
   * Subheader of the Panel, displayed below header
   */
  subheader?: ReactNode
  /**
   *  Actions on the Panel, displayed at the bottom right
   */
  actions?: ReactNode
  /**
   * If `true` content padding would be disabled
   */
  noPadding: boolean
  /**
   * If `true` progress bar would be displayed below header
   */
  loading?: boolean
  /**
   * If `true` the panel will be expandable   
   */
  isExpandable?: boolean
    /**
   * If `true` panel would be closed by default but only if isExpandable is `true`
   */
  defaultClosed?: boolean
}

export const Panel = (props: PanelProps): JSX.Element => {
  const classes: ClassNameMap<any> = useStyles()
  const { children, header, subheader, actions, noPadding, loading, isExpandable, defaultClosed }: PanelProps = props
  const [ expanded, setExpanded ]: ReactState<boolean> = useState(!isExpandable || (isExpandable && !defaultClosed))

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card>
      <CardHeader
        title={header}
        subheader={subheader}
        action={ isExpandable &&
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen] : expanded
            })}
            onClick={handleExpandClick}
          >
            <ExpandMoreIcon />
          </IconButton>
        }
      />
      {loading &&
      <LinearProgress />
      }
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent
          classes={{ root: noPadding && classes.noPadding }}
        >
          {children}
        </CardContent>
        {actions &&
        <CardActions>
          {actions}
        </CardActions>
        }
      </Collapse>
    </Card>
  )
}
