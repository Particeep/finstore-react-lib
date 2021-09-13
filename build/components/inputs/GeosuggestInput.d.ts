export interface GoogleAddress {
    street_number: string;
    route: string;
    postal_code: string;
    locality: string;
    country: string;
}
export interface GeosuggestInputProps {
    /**
    * Callback fired when address is selected
    */
    onPlaceChanged: (address: GoogleAddress) => void;
    /**
     * Initial address in the field
     */
    value: string;
    /**
     * Field placeholder
     */
    placeholder: string;
    /**
     * Set the field as required
     */
    required: boolean;
}
export declare const GeosuggestInput: ({ onPlaceChanged, value, placeholder, required }: GeosuggestInputProps) => JSX.Element;
