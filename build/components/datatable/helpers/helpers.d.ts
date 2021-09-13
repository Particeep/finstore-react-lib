import { Column, SearchCriteria } from "../models/models";
export declare const compareKeys: (a: {
    [key: string]: any;
}, b: {
    [key: string]: any;
}) => boolean;
export declare const computeInitialPage: (searchCriteria: SearchCriteria) => number;
export declare const isRowSelected: <T extends {
    id?: string;
}>(id: string, selected: T[]) => boolean;
export declare const computeEmptyCellColSpan: <T>(columns: Column<T>[], hasMultipleActions: boolean, expandedRow: (row: T) => JSX.Element, hasLocalActions: boolean) => number;
export interface DisplayedRowsProps {
    from: number;
    to: number;
    count: number;
}
export declare const renderDisplayedRows: ({ from, to, count }: DisplayedRowsProps) => string;
