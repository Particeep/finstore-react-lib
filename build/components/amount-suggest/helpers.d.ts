export declare const amountSuggestMaxWidth: number;
export interface ISuggestions {
    suggestedTicks: Array<number>;
    pickedTick: number;
}
export declare const computeInitialSuggestedTicks: (amount: number, sharePrice: number, nbSuggestions: number) => Array<number>;
export declare const computeNewTicks: (amount: number, sharePrice: number, min: number, max: number, nbSuggestions: number) => ISuggestions;
export declare const computeShareStyleClass: (amount: number, sharePrice: number) => string;
export declare const computeMinStyleClass: (amount: number, min: number) => string;
export declare const computeMaxStyleClass: (amount: number, max: number) => string;
