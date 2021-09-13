export interface GoogleAddress {
    street_number: string;
    route: string;
    postal_code: string;
    locality: string;
    country: string;
}
export interface GeosuggestInputProps {
    onPlaceChanged: (address: GoogleAddress) => void;
    value: string;
    placeholder: string;
    required: boolean;
}
export declare const GeosuggestInput: ({ onPlaceChanged, value, placeholder, required }: GeosuggestInputProps) => JSX.Element;
