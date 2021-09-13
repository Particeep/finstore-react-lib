import { MouseEventHandler, ReactNode } from "react";
export interface ParticeepDialogProps {
    /**
     * Title displayed on the top of the dialog
     */
    title?: string;
    /**
     * Description displayed under title
     */
    description?: string;
    /**
     * If `true` the dialog is opened
     */
    isOpen: boolean;
    /**
     * Fired when the component requests to be closed
     */
    onClose: MouseEventHandler<any>;
    /**
     * If `true` the dialog will be full-screen
     */
    fullScreen?: boolean;
    /**
     * Determine the max-width of the dialog
     */
    maxWidth?: any;
    /**
     * Dialog action, displayed on the bottom of the dialog
     */
    action?: ReactNode;
    /**
     * Dialog content, displayed on the body of the dialog
     */
    children: ReactNode;
    /**
     * Css class name
     */
    className?: string;
}
export declare const ParticeepDialog: (props: ParticeepDialogProps) => JSX.Element;
