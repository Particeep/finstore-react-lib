import React from "react"
import { Grid, makeStyles, Paper, Typography } from "@material-ui/core"
import { ClassNameMap } from "@material-ui/core/styles/withStyles"
import { Theme } from "@material-ui/core/styles"
import { Info } from "@material-ui/icons"
import { FormattedNumber } from "../formatters"
import { amountSuggestMaxWidth, computeMaxStyleClass, computeMinStyleClass, computeShareStyleClass } from "./helpers"
import { T } from "../../conf/i18n"

const useStyles: (props?: any) => ClassNameMap<any> = makeStyles((theme: Theme) => ({
  root : {
    maxWidth     : amountSuggestMaxWidth,
    display      : "inline-block",
    padding      : theme.spacing(1, 0),
    border       : `1px solid ${theme.inputs.border.color}`,
    borderRadius : theme.inputs.border.radius
  },
  helpIcon : {
    color     : theme.typography.body1.color,
    alignSelf : "center"
  },
  hints : {
    textAlign : "left"
  },
  error : {
    color : theme.palette.error.main
  },
  success : {
    color : theme.palette.success.main
  }
}))

interface SuggestionHintProps {
  amount: number
  sharePrice: number
  min: number
  max: number
  currency: string
}

const SuggestionHint = ({ amount, sharePrice, min, max, currency }: SuggestionHintProps): JSX.Element => {
  const classes: ClassNameMap<any> = useStyles()

  const sharesStyleClass: string = computeShareStyleClass(amount, sharePrice)
  const minStyleClass: string = computeMinStyleClass(amount, min)
  const maxStyleClass: string = computeMaxStyleClass(amount, max)

  return (
    <Paper elevation={0} className={classes.root}>
      <Grid container>
        <Grid item xs={2} className={classes.helpIcon}>
          <Info />
        </Grid>
        <Grid item xs={9} className={classes.hints}>
          <Typography variant={"subtitle2"}>
            {T.amount_suggest.hint.factor_of}
            <span className={classes[sharesStyleClass]}>
              <FormattedNumber value={sharePrice} currency={currency} variant={"currency-standard"} />
            </span>
          </Typography>
          <Typography variant={"subtitle2"}>
            {T.amount_suggest.hint.min}
            <span className={classes[minStyleClass]}>
              <FormattedNumber value={min} currency={currency} variant={"currency-standard"} />
            </span>
          </Typography>
          <Typography variant={"subtitle2"}>
            {T.amount_suggest.hint.max}
            <span className={classes[maxStyleClass]}>
              <FormattedNumber value={max} currency={currency} variant={"currency-standard"} />
            </span>
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default SuggestionHint
