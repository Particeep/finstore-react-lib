import { SyntheticEvent } from "react";
import { Column } from "./models/models";
import { SearchResult } from "../../models/SearchModel";
interface DatatableBodyProps<T> {
    columns: Array<Column<T>>;
    columnsVisibility: any;
    loading: boolean;
    searchResult: SearchResult<T>;
    selectedRows: Array<T>;
    onToggleSelect: (row: T) => (e: SyntheticEvent) => void;
    cellActions: (row: T) => JSX.Element;
    hasLocalActions: boolean;
    hasMultipleActions: boolean;
    displayLocalActions: boolean;
    expandedRow: (row: T) => JSX.Element;
}
declare const DatatableBody: <A extends {
    id?: string | undefined;
}>(props: DatatableBodyProps<A>) => JSX.Element;
export default DatatableBody;
