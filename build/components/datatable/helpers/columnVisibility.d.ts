import { Column } from "../models/models";
export declare const buildLocalConfig: (consumerKey: string, connectedUserId: string) => void;
export interface ColumnsVisibilityMap {
    [key: string]: boolean;
}
export declare const initColumnsVisibilityWithLocalStorage: <T>(tableName: string, columns: Column<T>[], consumerKey: string, userId: string) => ColumnsVisibilityMap;
export declare const getColumnNameVisible: (columnsVisibility: ColumnsVisibilityMap) => Array<string>;
export declare const getStorageConfigTable: (consumerKey: string, connectedUserId: string, tableName: string, configName: string) => any;
export declare const updateStorageConfigTable: (consumerKey: string, connectedUserId: string, tableName: string, type: string, values: Array<string>) => void;
