/// <reference types="react" />
import { FiltersArrayCustomProps, FiltersBooleanProps, FiltersDateProps } from "../models/models";
import { IObject } from "../../types";
export declare const defaultDateFilter: IObject;
export declare const FiltersBoolean: ({ name, onFilter, filter }: FiltersBooleanProps) => JSX.Element;
export declare const FiltersArrayCustom: ({ name, options, onFilter, filter, withAllOption }: FiltersArrayCustomProps) => JSX.Element;
export declare const FiltersDate: ({ name, onFilter, after, before }: FiltersDateProps) => JSX.Element;
export declare const buildFilterValues: any;
