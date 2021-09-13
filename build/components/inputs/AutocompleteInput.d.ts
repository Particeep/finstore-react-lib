export interface AutocompleteData {
    value?: string;
    text?: string;
    label: string;
}
export interface AutocompleteInputProps {
    /**
     * Search results to display in drop down
     */
    options: Array<AutocompleteData>;
    /**
     * Field placeholder
     */
    placeholder: string;
    /**
     * Field unique identifier
     */
    id: string;
    /**
     * Callback fired when text value is changed
     */
    onChange: (text: string) => void;
    /**
     * Callback fired when one item is selected
     */
    onSelect: (data: AutocompleteData) => void;
}
export declare const AutocompleteInput: ({ options, placeholder, id, onChange, onSelect }: AutocompleteInputProps) => JSX.Element;
