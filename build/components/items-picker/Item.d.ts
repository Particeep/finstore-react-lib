/// <reference types="react" />
import { ItemsPickerAction } from "./ItemsPicker";
interface ItemProps<T> {
    item: T;
    toggleItem: any;
    action: ItemsPickerAction;
    renderItem: (item: T) => JSX.Element;
}
declare const Item: <A>({ item, action, toggleItem, renderItem }: ItemProps<A>) => JSX.Element;
export default Item;
