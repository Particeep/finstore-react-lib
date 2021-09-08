import React, { ChangeEvent, useEffect, useState } from "react"
import { BigNumber } from "bignumber.js"
import { ReactState } from "../types"
import AmountSuggestDisplay from "./AmountSuggestDisplay"
import { amountSuggestMaxWidth, computeNewTicks, ISuggestions } from "./helpers"
import { IWindowSize, useWindowSize } from "../../utils"

export interface AmountSuggestProps {
  sharePrice: number
  currency: string
  fundraiseType: string
  max: number
  min: number
  onSelect: (amount: number) => void
}

export const AmountSuggest = (props: AmountSuggestProps): JSX.Element => {
  const { min, max, onSelect, sharePrice, currency, fundraiseType }: AmountSuggestProps = props
  const windowSize: IWindowSize = useWindowSize()
  const computeSuggestionNb = (): number => windowSize.width > amountSuggestMaxWidth ? 3 : 2

  const [ suggestedTicks, setSuggestedTicks ]: ReactState<Array<number>> = useState()
  const [ pickedTick, setPickedTick ]: ReactState<number> = useState()
  const [ typedAmount, setTypedAmount ]: ReactState<number> = useState()
  const [ suggestionNumber, setSuggestionNumber ]: ReactState<number> = useState(computeSuggestionNb())

  const sanitizedPickedTick: number = pickedTick || suggestedTicks && suggestedTicks[0]

  const onTypedAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    const amount: number = +event.target.value
    setTypedAmount(amount)
    setSuggestion(amount, suggestionNumber)
  }

  useEffect(() => {
    setSuggestion(0, suggestionNumber)
  }, [])

  useEffect(() => {
    const suggestionsNb: number = computeSuggestionNb()
    setSuggestionNumber(suggestionsNb)
    setSuggestion(0, suggestionsNb)
    setTypedAmount(0)
    setPickedTick(0)
  }, [ windowSize ])

  const setSuggestion = (amount: number, suggestionNumber: number) => {
    const suggestions: ISuggestions = computeNewTicks(amount, sharePrice, min, max, suggestionNumber)
    setSuggestedTicks(suggestions.suggestedTicks)
    if (suggestions && amount) {
      pick(suggestions.pickedTick)
    }
  }

  const pick = (tick: number) => {
    const pickedTick: number = Math.round(tick)
    const amountPicked: number = pickedTick * props.sharePrice
    setPickedTick(pickedTick)
    if (amountPicked) {
      onSelect(amountPicked)
      setTypedAmount(amountPicked)
    }
  }

  const prev = () => {
    if (pickedTick === suggestedTicks[0]) {
      setSuggestedTicks(suggestedTicks.map((tick: number) => tick - 1))
    }
    pick(Math.max(new BigNumber(min).dividedBy(sharePrice).toNumber(), sanitizedPickedTick - 1))
  }

  const next = () => {
    if (pickedTick === suggestedTicks[suggestedTicks.length - 1]) {
      setSuggestedTicks(suggestedTicks.map((tick: number) => tick + 1))
    }
    pick(Math.min(new BigNumber(max).dividedBy(sharePrice).toNumber(), sanitizedPickedTick + 1))
  }

  const canPrev = () => {
    return min <= (sanitizedPickedTick - 1) * sharePrice
  }

  const canNext = () => {
    return !max || max >= (sanitizedPickedTick + 1) * props.sharePrice
  }

  return (
    <AmountSuggestDisplay
      onAmountChange={onTypedAmountChange}
      typedAmount={typedAmount}
      prev={prev}
      canPrev={canPrev()}
      next={next}
      canNext={canNext()}
      sharePrice={sharePrice}
      suggestedTicks={suggestedTicks}
      pick={pick}
      pickedTick={pickedTick}
      currency={currency}
      fundraiseType={fundraiseType}
      min={min}
      max={max}
    />
  )
}
