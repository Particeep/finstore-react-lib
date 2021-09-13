import { MouseEventHandler } from "react";
import { IconButtonProps } from "@material-ui/core";
export interface IconBtnProps {
    loading?: boolean;
    disabled?: boolean;
    title?: IconButtonProps["title"];
    color?: IconButtonProps["color"];
    children: IconButtonProps["children"];
    onClick: MouseEventHandler<any>;
    className?: string;
}
export declare const IconBtn: ({ loading, children, disabled, title, ...props }: IconBtnProps) => JSX.Element;
