/// <reference types="react" />
import { Column, SearchCriteria } from "./models/models";
interface DatatableHeadProps<T> {
    columns: Array<Column<T>>;
    columnsVisibility: any;
    searchCriteria: SearchCriteria;
    onSort: (sorting: SearchCriteria) => void;
    displayLocalActions: boolean;
    selectedRows: Array<T>;
    onToggleAllSelect: () => void;
    limit: number;
    hasMultipleActions: boolean;
    expandedRow: (row: T) => JSX.Element;
    isLocalTable: boolean;
    className: string;
}
declare const DatatableHead: <C>(props: DatatableHeadProps<C>) => JSX.Element;
export default DatatableHead;
