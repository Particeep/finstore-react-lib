import React from "react"
import { FormattedDate as FormattedDateReact } from "react-intl"

interface FormattedDateProps {
  value: string
}

export const FormattedDate = ({ value }: FormattedDateProps): JSX.Element => (
  <FormattedDateReact
    value={value}
    year="2-digit"
    month="2-digit"
    day="2-digit"
  />
)
