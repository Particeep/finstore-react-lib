export declare type StateChipType = "success" | "info" | "warning" | "error";
export interface StateChipProps {
    type: StateChipType;
    label: string;
}
export declare const StateChip: ({ type, label }: StateChipProps) => JSX.Element;
