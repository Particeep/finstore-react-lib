import { MouseEventHandler, ReactNode } from "react";
import { ButtonProps } from "@material-ui/core";
export interface IBtnGroupItem {
    label: string;
    icon?: ReactNode;
    onClick: MouseEventHandler<any>;
}
export interface BtnGroupProps {
    buttons: Array<IBtnGroupItem>;
    variant: ButtonProps["variant"];
    color: ButtonProps["color"];
}
export declare const BtnGroup: (props: BtnGroupProps) => JSX.Element;
