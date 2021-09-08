import React from "react"
import { FormattedNumber as FormattedNumberReact } from "react-intl"
import { T } from "../../conf/i18n"

interface DisplayAmountProps {
  amount   : number
  currency : string
}

export const DisplayAmount = ({ amount, currency }: DisplayAmountProps): JSX.Element => (
  <FormattedNumber value={amount} currency={currency} variant="currency" />
)

interface DisplayPercentProps {
  value: number
}

export const DisplayPercent = ({ value }: DisplayPercentProps): JSX.Element => (
  <FormattedNumber value={value} variant="percent" />
)

interface FormattedAmountProps {
  row     : any
  value   : number
  variant : string
}

export const FormattedAmount = ({ row, value, variant = "currency" }: FormattedAmountProps): JSX.Element => {
  const currency: string = row.currency ? row.currency : "EUR"
  return <FormattedNumber value={value} currency={currency} variant={variant} />
}

const isValueExist = (value: string|number): boolean => !!value && value !== T.global.nc

interface FormattedNumberProps {
  currency? : string
  value     : number
  variant?  : any
}

export const FormattedNumber = ({ value, variant = "standard", currency = "EUR" }: FormattedNumberProps): JSX.Element => {
  if (value !== 0 && !value) {
    return <React.Fragment />
  }

  if (variant === "currency") {
    return (
      <FormattedNumberReact
        value={isValueExist(value) ? (value / 100) : 0}
        style={variant}
        currency={currency}
      />
    )
  } else if (variant === "currency-standard") {
    return (
      <FormattedNumberReact
        value={isValueExist(value) ? value : 0}
        style="currency"
        currency={currency}
      />
    )
  } else if (variant === "percent") {
    return <FormattedNumberReact value={value / 100} style={variant} minimumFractionDigits={2} />
  } else {
    return <FormattedNumberReact value={value} style={variant} />
  }
}
