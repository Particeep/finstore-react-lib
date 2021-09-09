import { ChangeEvent } from "react";
import { ItemsPickerAction } from "./ItemsPicker";
export interface ItemsPickerDisplayProps<T> {
    title: string;
    items: Array<T>;
    selectedItems: Array<T>;
    searchItems: (event: ChangeEvent<HTMLInputElement>) => void;
    loadMoreItems: () => void;
    selectAllItems: () => void;
    removeAllItems: () => void;
    toggleItem: (item: T, action: ItemsPickerAction) => void;
    renderItem: (item: T) => JSX.Element;
}
export declare const ItemsPickerDisplay: <A extends {
    id?: string | undefined;
}>(props: ItemsPickerDisplayProps<A>) => JSX.Element;
