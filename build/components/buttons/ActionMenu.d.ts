import { MouseEventHandler, ReactNode } from "react";
import { ButtonProps } from "@material-ui/core";
export interface IAction {
    onClick?: MouseEventHandler<any>;
    label?: string;
    visible: boolean;
    separator?: string;
}
export interface ActionMenuProps {
    actions: Array<IAction>;
    actionLabel: string;
    icon?: ReactNode;
    variant?: ButtonProps["variant"];
    color?: ButtonProps["color"];
}
export declare const ActionMenu: (props: ActionMenuProps) => JSX.Element;
