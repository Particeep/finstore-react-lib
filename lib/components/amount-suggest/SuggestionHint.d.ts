/// <reference types="react" />
interface SuggestionHintProps {
    amount: number;
    sharePrice: number;
    min: number;
    max: number;
    currency: string;
}
declare const SuggestionHint: ({ amount, sharePrice, min, max, currency }: SuggestionHintProps) => JSX.Element;
export default SuggestionHint;
