import { ReactElement } from "react";
export interface IStep {
    id: string;
    name: string;
    content: ReactElement;
}
export interface TunnelStepperProps {
    /**
     * List of steps to display in the stepper
     */
    steps: Array<IStep>;
    /**
     * Fired when we go to the next step
     * @param {string} id : Id of the current step, useful to process the data with the suitable action
     * @param {any} data : Data sent by the current step
     */
    onNext: (id: string, data: any) => Promise<any>;
    /**
     * initial current step
     */
    current?: number;
}
export declare const TunnelStepper: (props: TunnelStepperProps) => JSX.Element;
