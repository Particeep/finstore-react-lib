import React, { ChangeEvent } from "react"
import { Grid, InputAdornment, makeStyles, TextField, Typography } from "@material-ui/core"
import { Add, Remove } from "@material-ui/icons"
import { ClassNameMap } from "@material-ui/core/styles/withStyles"
import { Theme } from "@material-ui/core/styles"
import SuggestionBox from "./SuggestionBox"
import SuggestionHint from "./SuggestionHint"
import { T } from "../../conf/i18n"
import { amountSuggestMaxWidth } from "./helpers"
import { IconBtn } from "../buttons"

const useStyles: (props?: any) => ClassNameMap<any> = makeStyles((theme: Theme) => ({
  centerContent : {
    textAlign : "center",
    display   : "grid"
  },
  field : {
    maxWidth : amountSuggestMaxWidth
  },
  input : {
    color    : theme.palette.text.primary,
    fontSize : theme.typography.subtitle1.fontSize
  },
  switchAction : {
    alignSelf : "center",
    height    : "30px !important",
    width     : "30px !important"
  },
  suggestionContainer : {
    display        : "inline-flex",
    margin         : theme.spacing(2, 0),
    maxWidth       : amountSuggestMaxWidth,
    justifyContent : "center"
  }
}))

interface AmountSuggestDisplayProps {
  onAmountChange: (event: ChangeEvent<HTMLInputElement>) => void
  typedAmount: number
  prev: () => void
  canPrev: boolean
  next: () => void
  canNext: boolean
  sharePrice: number
  suggestedTicks: Array<number>
  pick: (amount: number) => void
  pickedTick: number
  currency: string
  fundraiseType: string
  min: number
  max: number
}

const AmountSuggestDisplay = (props: AmountSuggestDisplayProps): JSX.Element => {
  const classes: ClassNameMap<any> = useStyles()
  const { onAmountChange, typedAmount, prev, canPrev, next, canNext, sharePrice, suggestedTicks, pick, pickedTick,
    currency, fundraiseType, min, max }: AmountSuggestDisplayProps = props

  return (
    <Grid container>
      <Grid item xs={12} md={12} className={classes.centerContent}>
        <TextField
          label={T.amount_suggest.amount.label}
          value={typedAmount}
          onChange={onAmountChange}
          classes={{ root: classes.field }}
          InputProps={{
            classes      : { input: classes.input },
            endAdornment : (
              <InputAdornment position="end">
                <Typography variant={"subtitle1"} classes={{ root: classes.input }}>
                  {T.currency.symbol[currency]}
                </Typography>
              </InputAdornment>
            )
          }}
        />
      </Grid>
      <Grid item xs={12} md={12} className={classes.centerContent}>
        <div className={classes.suggestionContainer}>
          <IconBtn
            className={classes.switchAction}
            onClick={prev}
            disabled={!canPrev}
          ><Remove />
          </IconBtn>
          {suggestedTicks && suggestedTicks.map((suggestion: number, index: number) => (
            <SuggestionBox
              key={`suggestion-${index}`}
              pick={pick}
              pickedTick={pickedTick}
              currency={currency}
              fundraiseType={fundraiseType}
              sharePrice={sharePrice}
              suggestion={suggestion}
            />
          ))}
          <IconBtn
            className={classes.switchAction}
            onClick={next}
            disabled={!canNext}
          ><Add />
          </IconBtn>
        </div>
      </Grid>
      <Grid item xs={12} md={12} className={classes.centerContent}>
        <SuggestionHint
          amount={typedAmount}
          sharePrice={sharePrice}
          currency={currency}
          min={min}
          max={max}
        />
      </Grid>
    </Grid>
  )
}

export default AmountSuggestDisplay
