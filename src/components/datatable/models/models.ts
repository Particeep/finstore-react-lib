import { IObject } from "../../types"

export interface FilterOption {
  value: string
  label: string
}

export interface Column<A> {
  type: string
  field_name: string
  label: string
  canSort: boolean
  visible: boolean
  filter?: string
  filterOptions?: Array<FilterOption>
  withAllOption?: boolean
  formatter?: (cell: string, row: A) => any
}

export type OrderType = "asc" | "desc"

export interface SearchCriteria extends IObject {
  sort_by?: string
  order_by?: OrderType
  global_search?: string
  limit?: number
  offset?: number
}

export interface FiltersBooleanProps {
  name: string
  onFilter: (name: string, value: string|boolean) => void
  filter: boolean
}

export interface FiltersArrayCustomProps {
  name: string
  onFilter: (name: string, value: string|boolean) => void
  filter: boolean
  options: Array<FilterOption>
  withAllOption: boolean
}

export interface FiltersDateProps {
  name: string
  onFilter: (name: string, type: string, value: string|boolean) => void
  after: string
  before: string
}

interface VisibilityTableEntity {
  [tableName: string]: {
    VISIBILITY: Array<string>
  }
}

export interface ColumnVisibilityData {
  [consumerKey: string]: {
    tables: Array<VisibilityTableEntity>
  }
}
