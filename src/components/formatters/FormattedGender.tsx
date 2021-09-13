import React from "react"
import { T } from "../../conf/i18n"
import { Gender } from "../../models/User"

interface FormattedGenderProps {
  value: Gender
}

export const FormattedGender = ({ value }: FormattedGenderProps): JSX.Element => {
  if (value === "MAN") {
    return <React.Fragment>{T.user.gender.MAN}</React.Fragment>
  } else if (value === "WOMAN") {
    return <React.Fragment>{T.user.gender.WOMAN}</React.Fragment>
  } else {
    return <React.Fragment>{T.global.nc}</React.Fragment>
  }
}
