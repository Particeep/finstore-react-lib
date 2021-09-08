import { SearchCriteria } from "../models/models"

export const defaultSearchCriteria: SearchCriteria = {
  sort_by       : "created_at",
  order_by      : "desc",
  global_search : "",
  limit         : 20,
  offset        : 0
}
