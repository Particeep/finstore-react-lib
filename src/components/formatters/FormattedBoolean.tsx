import React from "react"
import { T } from "../../conf/i18n"

interface FormattedBooleanProps {
  value: boolean
}

export const FormattedBoolean = ({ value }: FormattedBooleanProps): JSX.Element => {
  if (value) {
    return <React.Fragment>{T.global.yes}</React.Fragment>
  } else {
    return <React.Fragment>{T.global.no}</React.Fragment>
  }
}
