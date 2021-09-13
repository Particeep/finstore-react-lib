import { MouseEventHandler } from "react";
import { ButtonProps } from "@material-ui/core";
export interface BtnProps {
    loading?: boolean;
    color?: ButtonProps["color"];
    variant?: ButtonProps["variant"];
    disabled?: boolean;
    children: ButtonProps["children"];
    startIcon?: ButtonProps["startIcon"];
    endIcon?: ButtonProps["endIcon"];
    onClick: MouseEventHandler<any>;
    className?: string;
}
export declare const Btn: ({ loading, children, ...props }: BtnProps) => JSX.Element;
