import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { ParsableDate } from "@material-ui/pickers/constants/prop-types";
export interface ParticeepDatePickerProps {
    label: string;
    maxDate?: ParsableDate;
    minDate?: ParsableDate;
    onChange: (date: MaterialUiPickersDate) => void;
    value: ParsableDate;
    clearable?: boolean;
    className?: string;
}
export declare const ParticeepDatePicker: (props: ParticeepDatePickerProps) => JSX.Element;
