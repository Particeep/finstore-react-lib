/// <reference types="react" />
import { DatatableProps } from "./DatatableProps";
declare const Datatable: <A extends {
    id?: string | undefined;
}>(props: DatatableProps<A>) => JSX.Element;
export default Datatable;
