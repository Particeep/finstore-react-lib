import { ChangeEvent, SyntheticEvent } from "react";
import { SearchResult } from "../../models/SearchModel";
interface DatatableFooterProps<T> {
    searchResult: SearchResult<T>;
    limit: number;
    page: number;
    onPageChange: (event: SyntheticEvent, page: number) => void;
    onChangeRowsPerPage: (event: ChangeEvent<HTMLInputElement>) => void;
}
declare const DatatableFooter: <A>(props: DatatableFooterProps<A>) => JSX.Element;
export default DatatableFooter;
