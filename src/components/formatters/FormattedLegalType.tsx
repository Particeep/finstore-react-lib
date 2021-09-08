import React  from "react"
import { T } from "../../conf/i18n"
import { RelativeType } from "../../models/User"

interface FormattedLegalTypeProps {
  value: RelativeType
}

export const FormattedLegalType = ({ value }: FormattedLegalTypeProps): JSX.Element => {
  if (value === "CONJOINT") {
    return <React.Fragment>{T.user.cosuscriber.type.CONJOINT}</React.Fragment>
  } else if (value === "USUFRUCTUARY") {
    return <React.Fragment>{T.user.cosuscriber.type.USUFRUCTUARY}</React.Fragment>
  } else {
    return <React.Fragment>{T.global.nc}</React.Fragment>
  }
}
