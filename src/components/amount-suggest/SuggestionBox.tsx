import React from "react"
import { Button, ButtonProps, makeStyles } from "@material-ui/core"
import { FormattedNumber } from "../formatters"
import { T } from "../../conf/i18n"
import { ClassNameMap } from "@material-ui/core/styles/withStyles"
import { Theme } from "@material-ui/core/styles"

const useStyles: (props?: any) => ClassNameMap<any> = makeStyles((theme: Theme) => ({
  root : {
    minWidth    : 108,
    margin      : theme.spacing(0, 1),
    padding     : theme.spacing(1, 0.5),
    borderColor : theme.inputs.border.color
  },
  default : {
    color : "white"
  },
  selected : {
    color : theme.typography.body1.color
  },
  amount : {
    display    : "block",
    fontSize   : 16,
    fontWeight : 500
  },
  sharesNumber : {
    textTransform : "lowercase"
  }
}))

interface SuggestionBoxProps {
  suggestion: number
  pickedTick: number
  sharePrice: number
  currency: string
  pick: (amount: number) => void
  fundraiseType: string
}

const SuggestionBox = (props: SuggestionBoxProps): JSX.Element => {
  const classes: ClassNameMap<any> = useStyles()
  const { suggestion, pickedTick, sharePrice, currency, pick, fundraiseType }: SuggestionBoxProps = props

  const onClick = (suggestion: number) => () => {
    pick(suggestion)
  }

  const actionVariant: ButtonProps["variant"] = suggestion === pickedTick ? "contained" : "outlined"
  const actionColor: ButtonProps["color"] = suggestion === pickedTick ? "primary" : "default"
  const labelColor: string = suggestion === pickedTick ?  classes.default : classes.selected

  return (
    <Button
      onClick={onClick(suggestion)}
      variant={actionVariant}
      color={actionColor}
      className={classes.root}
      classes={{ label: labelColor }}
    >
      <div>
        <span className={classes.amount}>
          <FormattedNumber
            value={suggestion * sharePrice}
            currency={currency}
            variant={"currency-standard"}
          />
        </span>
        <span className={classes.sharesNumber}>
          {suggestion} {T.amount_suggest.pick.label[fundraiseType]}
        </span>
      </div>
    </Button>
  )
}

export default SuggestionBox
