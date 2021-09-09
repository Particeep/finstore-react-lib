/// <reference types="react" />
interface SuggestionBoxProps {
    suggestion: number;
    pickedTick: number;
    sharePrice: number;
    currency: string;
    pick: (amount: number) => void;
    fundraiseType: string;
}
declare const SuggestionBox: (props: SuggestionBoxProps) => JSX.Element;
export default SuggestionBox;
