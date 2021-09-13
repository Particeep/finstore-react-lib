import { MouseEventHandler, ReactNode } from "react";
export interface ParticeepDialogProps {
    title?: string;
    description?: string;
    isOpen: boolean;
    onClose: MouseEventHandler<any>;
    fullScreen?: boolean;
    maxWidth?: any;
    action?: ReactNode;
    children: ReactNode;
    className?: string;
}
export declare const ParticeepDialog: (props: ParticeepDialogProps) => JSX.Element;
