interface DisplayAmountProps {
    amount: number;
    currency: string;
}
export declare const DisplayAmount: ({ amount, currency }: DisplayAmountProps) => JSX.Element;
interface DisplayPercentProps {
    value: number;
}
export declare const DisplayPercent: ({ value }: DisplayPercentProps) => JSX.Element;
interface FormattedAmountProps {
    row: any;
    value: number;
    variant: string;
}
export declare const FormattedAmount: ({ row, value, variant }: FormattedAmountProps) => JSX.Element;
interface FormattedNumberProps {
    currency?: string;
    value: number;
    variant?: any;
}
export declare const FormattedNumber: ({ value, variant, currency }: FormattedNumberProps) => JSX.Element;
export {};
