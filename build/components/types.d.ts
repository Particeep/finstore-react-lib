import { FormControlLabelProps } from "@material-ui/core";
export declare type ReactState<T> = [T, ((value: (((prevState: T) => T) | T)) => void)];
export declare type IObject<T = any> = {
    [key: string]: T;
};
export declare type ActionMultiple<T> = {
    label: string;
    action: (rows: Array<T>) => () => void;
};
export declare type InputWithLabelProps<T> = T & FormControlLabelProps;
