import { BigNumber } from "bignumber.js"
//TODO: add unit tests for functions below

export const amountSuggestMaxWidth : number = 430

export interface ISuggestions {
  suggestedTicks: Array<number>
  pickedTick: number
}

const buildInitialSuggestionPositions = (nbSuggestions: number): Array<number> => {
  return Array(nbSuggestions).fill(0)
    .map((a: number, index:number) => index - Math.floor(nbSuggestions / 2) )
}

export const computeInitialSuggestedTicks = (amount: number, sharePrice: number, nbSuggestions: number): Array<number> => {
  const numberTicks: number = Math.ceil(new BigNumber(amount).dividedBy(sharePrice).toNumber())
  const ticksPositions: Array<number> = buildInitialSuggestionPositions(nbSuggestions)
  return ticksPositions.map((p: number) => p + numberTicks)
}

const canPick = (amount: number, tickToPick: number, sharePrice: number): boolean => {
  return amount && new BigNumber(tickToPick).multipliedBy(sharePrice).isEqualTo(amount)
}

const maybePickOneTick = (amount: number, tickToPick: number, sharePrice: number): number => {
  if (canPick(amount, tickToPick, sharePrice)) {
    return tickToPick
  }
  return undefined
}

const computeSuggestionsTendTowardsMin = (amount: number, suggestedTicks: Array<number>, sharePrice: number, min: number): ISuggestions => {
  const newSuggestedTicks: Array<number> = suggestedTicks.map((tick: number) => tick + 1)
  if ((newSuggestedTicks[0] * sharePrice) < min) {
    return computeSuggestionsTendTowardsMin(amount, newSuggestedTicks, sharePrice, min)
  } else {
    return {
      suggestedTicks : newSuggestedTicks,
      pickedTick     : maybePickOneTick(amount, newSuggestedTicks[0], sharePrice)
    }
  }
}

const computeSuggestionsTendTowardsMax = (amount: number, suggestedTicks: Array<number>, sharePrice: number, max: number): ISuggestions => {
  const newSuggestedTicks: Array<number> = suggestedTicks.map((tick: number) => tick - 1)
  if ((newSuggestedTicks[newSuggestedTicks.length - 1] * sharePrice) > max) {
    return computeSuggestionsTendTowardsMax(amount, newSuggestedTicks, sharePrice, max)
  } else {
    return {
      suggestedTicks : newSuggestedTicks,
      pickedTick     : maybePickOneTick(amount, newSuggestedTicks[newSuggestedTicks.length - 1], sharePrice)
    }
  }
}

export const computeNewTicks = (amount: number, sharePrice: number, min: number, max: number, nbSuggestions: number): ISuggestions => {
  const sanitizedAmount: number = amount || min || 0
  const initialSuggestedTicks: Array<number> = computeInitialSuggestedTicks(sanitizedAmount, sharePrice, nbSuggestions)
  if (initialSuggestedTicks[0] * sharePrice < min) {
    return computeSuggestionsTendTowardsMin(sanitizedAmount, initialSuggestedTicks, sharePrice, min)
  } else if (initialSuggestedTicks[initialSuggestedTicks.length - 1] * sharePrice > max) {
    return  computeSuggestionsTendTowardsMax(sanitizedAmount, initialSuggestedTicks, sharePrice, max)
  } else {
    return {
      suggestedTicks : initialSuggestedTicks,
      pickedTick     : maybePickOneTick(amount, initialSuggestedTicks[1], sharePrice)
    }
  }
}

const isFactorOf = (factor: number, number: number): boolean => {
  return new BigNumber(factor).dividedBy(number).isInteger()
}

export const computeShareStyleClass = (amount: number, sharePrice: number): string => {
  if (!amount) {
    return ""
  }
  if (isFactorOf(amount, sharePrice)) {
    return "success"
  } else {
    return "error"
  }
}

export const computeMinStyleClass = (amount: number, min: number): string => {
  if (!amount) {
    return ""
  }
  if (amount >= min) {
    return "success"
  } else {
    return "error"
  }
}

export const computeMaxStyleClass = (amount: number, max: number): string => {
  if (!amount) {
    return ""
  }
  if (amount <= max) {
    return "success"
  } else {
    return "error"
  }
}
