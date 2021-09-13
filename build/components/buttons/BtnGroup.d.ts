import { MouseEventHandler, ReactNode } from "react";
import { ButtonProps } from "@material-ui/core";
export interface IBtnGroupItem {
    label: string;
    icon?: ReactNode;
    onClick: MouseEventHandler<any>;
}
export interface BtnGroupProps {
    /**
     * Group buttons list
     */
    buttons: Array<IBtnGroupItem>;
    /**
     * Button group variant
     */
    variant: ButtonProps["variant"];
    /**
     * Button group color
     */
    color: ButtonProps["color"];
}
export declare const BtnGroup: (props: BtnGroupProps) => JSX.Element;
