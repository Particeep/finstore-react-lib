import { MouseEventHandler, ReactNode } from "react";
import { ButtonProps } from "@material-ui/core";
export interface IAction {
    onClick?: MouseEventHandler<any>;
    label?: string;
    visible: boolean;
    separator?: string;
}
export interface ActionMenuProps {
    /**
     * Actions displayed in the menu
     */
    actions: Array<IAction>;
    /**
     * Label of the open menu button
     */
    actionLabel: string;
    /**
     * Icon of the open menu button
     */
    icon?: ReactNode;
    /**
     * Style of the open menu button
     */
    variant?: ButtonProps["variant"];
    /**
     * Color of the open menu button
     */
    color?: ButtonProps["color"];
}
export declare const ActionMenu: (props: ActionMenuProps) => JSX.Element;
