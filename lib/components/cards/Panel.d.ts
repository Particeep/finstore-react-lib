import { ReactNode } from "react";
export interface PanelProps {
    /**
     * The content of the Panel
     */
    children: ReactNode;
    /**
     * Header of the Panel, displayed on the top of the Panel
     */
    header: ReactNode;
    /**
     * Subheader of the Panel, displayed below header
     */
    subheader?: ReactNode;
    /**
     *  Actions on the Panel, displayed at the bottom right
     */
    actions?: ReactNode;
    /**
     * If `true` content padding would be disabled
     */
    noPadding: boolean;
    /**
     * If `true` progress bar would be displayed below header
     */
    loading?: boolean;
    /**
     * If `true` the panel will be expandable
     */
    isExpandable?: boolean;
    /**
   * If `true` panel would be closed by default but only if isExpandable is `true`
   */
    defaultClosed?: boolean;
}
export declare const Panel: (props: PanelProps) => JSX.Element;
