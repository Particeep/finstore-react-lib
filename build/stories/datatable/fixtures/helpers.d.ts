/// <reference types="react" />
import { User } from "../../../models/User";
import { ActionMultiple, Column } from "../../../components";
export declare const renderLastLogin: (cell: string, row: User) => any;
export declare const renderRowActions: (row: User) => JSX.Element;
export declare const groupedActions: Array<ActionMultiple<User>>;
export declare const renderExpandedRow: (row: User) => JSX.Element;
export declare const buildDefaultColumn: () => Array<Column<User>>;
export declare const buildColumnWithFilters: () => Array<Column<User>>;
