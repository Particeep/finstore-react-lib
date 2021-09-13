import { ChangeEvent } from "react";
interface AmountSuggestDisplayProps {
    onAmountChange: (event: ChangeEvent<HTMLInputElement>) => void;
    typedAmount: number;
    prev: () => void;
    canPrev: boolean;
    next: () => void;
    canNext: boolean;
    sharePrice: number;
    suggestedTicks: Array<number>;
    pick: (amount: number) => void;
    pickedTick: number;
    currency: string;
    fundraiseType: string;
    min: number;
    max: number;
}
declare const AmountSuggestDisplay: (props: AmountSuggestDisplayProps) => JSX.Element;
export default AmountSuggestDisplay;
