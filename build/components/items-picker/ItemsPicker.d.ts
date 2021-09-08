/// <reference types="react" />
import { SearchCriteria } from "../datatable";
export interface ItemsPickerProps<T> {
    /**
    * List of selectable items
    */
    title: string;
    /**
     * List of selectable items
     */
    items: Array<T>;
    /**
     * Fired when the selected items was updated
     * @param {Array<T>} items - Selected items
     */
    onChange: (items: Array<T>) => () => void;
    /**
     * Update the list items
     * @param {SearchCriteria} criteria - Search criteria
     */
    updateCriteria?: (criteria: SearchCriteria) => void;
    /**
     * Customize the rendering of the items in the list
     * @param {T} item - Item to render
     */
    renderItem: (item: T) => JSX.Element;
}
export declare type ItemsPickerAction = "SELECT" | "DESELECT";
export declare const ItemsPicker: <A extends {
    id?: string;
}>(props: ItemsPickerProps<A>) => JSX.Element;
