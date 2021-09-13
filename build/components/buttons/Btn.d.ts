import { MouseEventHandler } from "react";
import { ButtonProps } from "@material-ui/core";
export interface BtnProps {
    /**
     * If `true`, circular progress will be displayed.
     */
    loading?: boolean;
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color?: ButtonProps["color"];
    /**
     * The variant to use.
     */
    variant?: ButtonProps["variant"];
    /**
     * If `true`, the button will be disabled.
     */
    disabled?: boolean;
    /**
     * The content of the button.
     */
    children: ButtonProps["children"];
    /**
     * Element placed before the children.
     */
    startIcon?: ButtonProps["startIcon"];
    /**
     * Element placed after the children.
     */
    endIcon?: ButtonProps["endIcon"];
    /**
     * Fired when the button is clicked
     */
    onClick: MouseEventHandler<any>;
    /**
     * Css class name
     */
    className?: string;
}
export declare const Btn: ({ loading, children, ...props }: BtnProps) => JSX.Element;
