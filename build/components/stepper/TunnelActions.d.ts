interface StepperActionsProps {
    handleNext: (data: any) => void;
    handlePrev: (data: any) => void;
    isValid: boolean;
    isLast: boolean;
    loading: boolean;
    isMobile: boolean;
}
declare const TunnelActions: (props: StepperActionsProps) => JSX.Element;
export default TunnelActions;
