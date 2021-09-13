import React from "react"
import { FormattedNumber as FormattedNumberReact } from "react-intl"

interface FormattedNumberProps {
  value: number
}

export const FormattedNumbr = ({ value }: FormattedNumberProps): JSX.Element => (
  <FormattedNumberReact value={value} />
)
