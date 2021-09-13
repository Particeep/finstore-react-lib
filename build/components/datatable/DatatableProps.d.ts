/// <reference types="react" />
import { Column, SearchCriteria } from "./models/models";
import { SearchResult } from "../../models/SearchModel";
import { ActionMultiple } from "../types";
export interface DatatableProps<T> {
    name: string;
    title?: string;
    userId: string;
    consumerKey: string;
    loading: boolean;
    columns: Array<Column<T>>;
    searchResult: SearchResult<T>;
    useLocalStorage: boolean;
    searchCriteria: SearchCriteria;
    updateCriteria?: (criteria: SearchCriteria) => void;
    globalSearch: boolean;
    multipleActions?: Array<ActionMultiple<T>>;
    cellActions: (row: T) => JSX.Element;
    expandedRow?: (row: T) => JSX.Element;
}
