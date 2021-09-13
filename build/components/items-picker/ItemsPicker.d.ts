/// <reference types="react" />
import { SearchCriteria } from "../datatable";
export interface ItemsPickerProps<T> {
    title: string;
    items: Array<T>;
    onChange: (items: Array<T>) => () => void;
    updateCriteria?: (criteria: SearchCriteria) => void;
    renderItem: (item: T) => JSX.Element;
}
export declare type ItemsPickerAction = "SELECT" | "DESELECT";
export declare const ItemsPicker: <A extends {
    id?: string;
}>(props: ItemsPickerProps<A>) => JSX.Element;
