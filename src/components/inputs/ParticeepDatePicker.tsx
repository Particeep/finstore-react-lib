import React from "react"
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date"
import { ParsableDate } from "@material-ui/pickers/constants/prop-types"
import moment from "moment/moment"
import { DatePicker } from "@material-ui/pickers"
import { T } from "../../conf/i18n"

export interface ParticeepDatePickerProps {
  /**
   * Displayed in the input before the user enters a value
   */
  label: string
  /**
   * Max selectable date
   */
  maxDate?: ParsableDate
  /**
   * Min selectable date
   */
  minDate?: ParsableDate
  /**
   * Fired on a new selected date
   * @param {MaterialUiPickersDate} date Selected date
   */
  onChange: (date: MaterialUiPickersDate) => void
  /**
   * Date picker value
   */
  value: ParsableDate
  /**
   * Show clear action in picker dialog
   */
  clearable?: boolean
  /**
   * Css class name
   */
  className?: string
}

const dateFormat: string = moment().localeData().longDateFormat("L")

export const ParticeepDatePicker = (props: ParticeepDatePickerProps): JSX.Element => {
  const { label, value, onChange, minDate, maxDate, clearable, className }: ParticeepDatePickerProps = props

  return (
    <DatePicker
      className={className}
      placeholder={label}
      format={dateFormat}
      value={value}
      onChange={onChange}
      {...minDate && { minDate: minDate }}
      {...maxDate && { maxDate: maxDate }}
      clearable={clearable || false}
      cancelLabel={T.global.cancel}
      clearLabel={T.global.clear}
      style={{ width: "100%" }}
    />
  )
}
