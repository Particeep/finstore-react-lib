export interface AutocompleteData {
    value?: string;
    text?: string;
    label: string;
}
export interface AutocompleteInputProps {
    options: Array<AutocompleteData>;
    placeholder: string;
    id: string;
    onChange: (text: string) => void;
    onSelect: (data: AutocompleteData) => void;
}
export declare const AutocompleteInput: ({ options, placeholder, id, onChange, onSelect }: AutocompleteInputProps) => JSX.Element;
