import { MouseEventHandler } from "react";
import { IconButtonProps } from "@material-ui/core";
export interface IconBtnProps {
    /**
     * If `true`, circular progress will be displayed.
     */
    loading?: boolean;
    /**
     * If `true`, the button will be disabled.
     */
    disabled?: boolean;
    /**
     * Button title displayed on hover.
     */
    title?: IconButtonProps["title"];
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color?: IconButtonProps["color"];
    /**
     * The content of the button.
     */
    children: IconButtonProps["children"];
    /**
     * Fired when the button is clicked
     */
    onClick: MouseEventHandler<any>;
    /**
     * Css class name
     */
    className?: string;
}
export declare const IconBtn: ({ loading, children, disabled, title, ...props }: IconBtnProps) => JSX.Element;
