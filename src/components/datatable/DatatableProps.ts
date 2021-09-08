import { Column, SearchCriteria } from "./models/models"
import { SearchResult } from "../../models/SearchModel"
import { ActionMultiple } from "../types"

export interface DatatableProps<T> {
  /**
   * Table name, useful for column visibility local config
   */
  name: string
  /**
   * Table name displayed in the top of the table
   */
  title?: string
  /**
   * Id of the user connected, useful for column visibility local config
   */
  userId: string
  /**
   * Consumer key of the current platform, useful for column visibility local config
   */
  consumerKey: string
  /**
   * If `true` a progress bar is displayed in the top the table
   */
  loading: boolean
  /**
   * List of table columns
   */
  columns: Array<Column<T>>
  /**
   * Data displayed on the table
   */
  searchResult: SearchResult<T>
  /**
   * If `true` the Datatable will use local storage to save the configuration of column visibility
   */
  useLocalStorage: boolean
  /**
   * Current search criteria
   */
  searchCriteria: SearchCriteria
  /**
   * Fired when search criteria is updated
   * @param criteria
   */
  updateCriteria?: (criteria: SearchCriteria) => void
  /**
   * If `true` a field is displayed at the top of the table for a textual search on the data of the table
   */
  globalSearch: boolean
  /**
   * Render the grouped actions list
   */
  multipleActions?: Array<ActionMultiple<T>>
  /**
   * Render the actions list for each table row
   * @param {T} row - Data table row
   */
  cellActions: (row: T) => JSX.Element
  /**
   * Render a custom block below each line
   * @param {T} row - Data table row
   */
  expandedRow?: (row: T) => JSX.Element
}
