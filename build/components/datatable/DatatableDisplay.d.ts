import { SyntheticEvent } from "react";
import { Column, SearchCriteria } from "./models/models";
import { SearchResult } from "../../models/SearchModel";
import { ActionMultiple } from "../types";
interface DatatableDisplayProps<T> {
    title?: string;
    searchResult: SearchResult<T>;
    callback: (value: SearchCriteria, page?: number) => void;
    loading: boolean;
    isLocalTable: boolean;
    searchCriteria: SearchCriteria;
    columns: Array<Column<T>>;
    columnsVisibility: any;
    toggleColumnVisibility: (col: Column<T>) => (e: SyntheticEvent) => void;
    toggleAllSelect: () => void;
    addRowToSelection: (row: T) => (e: SyntheticEvent) => void;
    hasGlobalSearch: boolean;
    hasLocalActions: boolean;
    hasMultipleActions: boolean;
    multipleActions?: Array<ActionMultiple<T>>;
    selectedRows?: Array<T>;
    cellActions: (row: T) => JSX.Element;
    expandedRow?: (row: T) => JSX.Element;
    limit: number;
    page: number;
}
declare const DatatableDisplay: <B>(props: DatatableDisplayProps<B>) => JSX.Element;
export default DatatableDisplay;
