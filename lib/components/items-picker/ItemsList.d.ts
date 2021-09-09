/// <reference types="react" />
import { ItemsPickerAction } from "../../components";
interface ItemsListProps<T> {
    items: Array<T>;
    toggleItem: any;
    action: ItemsPickerAction;
    renderItem: (item: T) => JSX.Element;
}
declare const ItemsList: <A extends {
    id?: string | undefined;
}>({ items, action, toggleItem, renderItem }: ItemsListProps<A>) => JSX.Element;
export default ItemsList;
