import { ReactNode } from "react";
export interface ExpandedPanelItem {
    title: ReactNode;
    content: ReactNode;
    hide?: boolean;
}
export interface ExpandedPanelProps {
    /**
     * List of expanded panels
     */
    panels: Array<ExpandedPanelItem>;
}
export declare const ExpandedPanel: ({ panels }: ExpandedPanelProps) => JSX.Element;
