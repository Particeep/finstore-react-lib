/// <reference types="react" />
import { SelectInputProps as MuiSelectInputProps } from "@material-ui/core/Select/SelectInput";
export interface SelectOption {
    value: any;
    label: string;
}
export interface SelectInputProps {
    label: string;
    name?: string;
    placeholder?: string;
    value: any;
    options: Array<SelectOption>;
    onChange: MuiSelectInputProps["onChange"];
    disabled?: boolean;
    fullWidth?: boolean;
}
export declare const SelectInput: ({ label, options, fullWidth, ...others }: SelectInputProps) => JSX.Element;
