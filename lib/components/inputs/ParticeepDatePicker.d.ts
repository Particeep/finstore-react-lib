/// <reference types="react" />
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { ParsableDate } from "@material-ui/pickers/constants/prop-types";
export interface ParticeepDatePickerProps {
    /**
     * Displayed in the input before the user enters a value
     */
    label: string;
    /**
     * Max selectable date
     */
    maxDate?: ParsableDate;
    /**
     * Min selectable date
     */
    minDate?: ParsableDate;
    /**
     * Fired on a new selected date
     * @param {MaterialUiPickersDate} date Selected date
     */
    onChange: (date: MaterialUiPickersDate) => void;
    /**
     * Date picker value
     */
    value: ParsableDate;
    /**
     * Show clear action in picker dialog
     */
    clearable?: boolean;
    /**
     * Css class name
     */
    className?: string;
}
export declare const ParticeepDatePicker: (props: ParticeepDatePickerProps) => JSX.Element;
