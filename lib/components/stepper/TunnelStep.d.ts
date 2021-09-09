/// <reference types="react" />
import { IStep } from "./TunnelStepper";
interface TunnelStepProps {
    step: IStep;
    next: (id: string, data: any) => Promise<any>;
    prev: () => void;
    loading: boolean;
    isLast: boolean;
    isMobile: boolean;
}
declare const TunnelStep: ({ step, prev, loading, next, isLast, isMobile }: TunnelStepProps) => JSX.Element;
export default TunnelStep;
