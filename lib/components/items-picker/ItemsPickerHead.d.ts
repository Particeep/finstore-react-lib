/// <reference types="react" />
interface ItemsPickerHeadProps {
    title: string;
    itemsSize: number;
    action: () => void;
    actionLabel: string;
}
declare const ItemsPickerHead: ({ title, itemsSize, action, actionLabel }: ItemsPickerHeadProps) => JSX.Element;
export default ItemsPickerHead;
