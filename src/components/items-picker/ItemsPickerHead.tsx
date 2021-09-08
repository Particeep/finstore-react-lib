import { Button, makeStyles, Typography } from "@material-ui/core"
import React from "react"
import { ClassNameMap } from "@material-ui/core/styles/withStyles"
import { Theme } from "@material-ui/core/styles"

const useStyles: (props?: any) => ClassNameMap<any> = makeStyles((theme: Theme) => ({
  title : {
    fontWeight : 600,
    padding    : theme.spacing(0, 1)
  },
  button : {
    textDecorationLine : "underline",
    padding            : theme.spacing(0, 1)
  }
}))

interface ItemsPickerHeadProps {
  title: string
  itemsSize: number
  action: () => void
  actionLabel: string
}

const ItemsPickerHead = ({ title, itemsSize, action, actionLabel }: ItemsPickerHeadProps): JSX.Element => {
  const classes: ClassNameMap<any> = useStyles()
  return (
    <div>
      <Typography
        variant={"subtitle2"}
        display={"inline"}
        className={classes.title}>
        {title} ({itemsSize})
      </Typography>
      <Button
        color={"primary"}
        onClick={action}
        className={classes.button}
        disabled={itemsSize === 0}>{actionLabel}
      </Button>
    </div>
  )
}

export default ItemsPickerHead
