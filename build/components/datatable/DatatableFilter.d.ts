/// <reference types="react" />
import { Column } from "./models/models";
import { IObject } from "../types";
interface DatatableFilterProps<T> {
    columns: Array<Column<T>>;
    onFilter: (filters: IObject) => void;
    displayLocalActions: boolean;
    hasMultipleActions: boolean;
    columnsVisibility: any;
}
declare const DatatableFilter: <A>({ columns, displayLocalActions, hasMultipleActions, columnsVisibility, onFilter }: DatatableFilterProps<A>) => JSX.Element;
export default DatatableFilter;
