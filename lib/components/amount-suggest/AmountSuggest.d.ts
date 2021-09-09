/// <reference types="react" />
export interface AmountSuggestProps {
    sharePrice: number;
    currency: string;
    fundraiseType: string;
    max: number;
    min: number;
    onSelect: (amount: number) => void;
}
export declare const AmountSuggest: (props: AmountSuggestProps) => JSX.Element;
