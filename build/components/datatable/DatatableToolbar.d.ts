import { SyntheticEvent } from "react";
import { Column, SearchCriteria } from "./models/models";
import { ActionMultiple } from "../types";
interface DatatableToolbarProps<T> {
    columns: Array<Column<T>>;
    title: string;
    hasGlobalSearch: boolean;
    onToggleColumnVisibility: (col: Column<T>) => (e: SyntheticEvent) => void;
    columnsVisibility: any;
    multipleActions?: Array<ActionMultiple<T>>;
    selectedRows: Array<T>;
    hasLocalActions: boolean;
    onSearch: (criteria: SearchCriteria) => void;
}
declare const DatatableToolbar: <A>(props: DatatableToolbarProps<A>) => JSX.Element;
export default DatatableToolbar;
