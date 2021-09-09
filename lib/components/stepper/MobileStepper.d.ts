import { MouseEventHandler } from "react";
interface MobileStepperProps {
    stepsSize: number;
    onPrev: MouseEventHandler<any>;
    currentStep: number;
    stepName: string;
}
declare const MobileStepper: ({ stepsSize, currentStep, stepName, onPrev }: MobileStepperProps) => JSX.Element;
export default MobileStepper;
