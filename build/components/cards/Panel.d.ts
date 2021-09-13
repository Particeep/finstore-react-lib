import { ReactNode } from "react";
export interface PanelProps {
    children: ReactNode;
    header: ReactNode;
    subheader?: ReactNode;
    actions?: ReactNode;
    noPadding: boolean;
    loading?: boolean;
    isExpandable?: boolean;
    defaultClosed?: boolean;
}
export declare const Panel: (props: PanelProps) => JSX.Element;
