import { ReactElement } from "react";
export interface IStep {
    id: string;
    name: string;
    content: ReactElement;
}
export interface TunnelStepperProps {
    steps: Array<IStep>;
    onNext: (id: string, data: any) => Promise<any>;
    current?: number;
}
export declare const TunnelStepper: (props: TunnelStepperProps) => JSX.Element;
