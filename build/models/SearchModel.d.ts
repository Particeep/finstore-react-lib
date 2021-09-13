export interface SearchResult<T> {
    page_current: number;
    pages_total: number;
    current_size: number;
    limit: number;
    total_size: number;
    offset?: number;
    data: Array<T>;
}
