import React from "react"
import { FormattedDate, FormattedTime } from "react-intl"
import moment from "moment"
import { T } from "../../conf/i18n"

interface FormattedDateTimeProps {
  value: string
}

export const FormattedDateTime = ({ value }: FormattedDateTimeProps): JSX.Element => {
  if (value && moment(value).isValid()) {
    return (
      <React.Fragment>
        <FormattedDate value={value} /> <FormattedTime value={value} format="24hour" />
      </React.Fragment>
    )
  } else {
    return (<React.Fragment>{T.global.nc}</React.Fragment>)
  }
}
