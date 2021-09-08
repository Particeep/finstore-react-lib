import React, { useState, useEffect, SyntheticEvent } from "react"
import { defaultSearchCriteria } from "./helpers/defaultSearchCriteria"
import DatatableDisplay from "./DatatableDisplay"
import { Column, SearchCriteria } from "./models/models"
import { computeInitialPage } from "./helpers/helpers"
import {
  ColumnsVisibilityMap,
  getColumnNameVisible,
  initColumnsVisibilityWithLocalStorage,
  updateStorageConfigTable
} from "./helpers/columnVisibility"
import { DatatableProps } from "./DatatableProps"
import { ReactState } from "../types"

interface BasicProps {
  isLocalTable: boolean
  hasLocalActions: boolean
  hasMultipleActions: boolean
  hasGlobalSearch: boolean
  columnsVisibility: any
  limit: number
  page: number
}

const Datatable = <A extends { id?: string }>(props: DatatableProps<A>): JSX.Element => {

  const { name, columns, consumerKey, userId, searchCriteria, searchResult,
    useLocalStorage, updateCriteria, globalSearch, multipleActions, cellActions }: DatatableProps<A> = props

  const isLocalTable: boolean = !searchCriteria && !updateCriteria
  const initialPage: number = computeInitialPage(searchCriteria)
  const initialColumnsVisibility: ColumnsVisibilityMap = initColumnsVisibilityWithLocalStorage(name, columns, consumerKey, userId)

  const [ columnsVisibility, setColumnsVisibility ]: ReactState<ColumnsVisibilityMap> = useState<ColumnsVisibilityMap>(initialColumnsVisibility)
  const [ page, setPage ]: ReactState<number> = useState<number>(initialPage)
  const [ selectedRows, setSelectedRows ]: ReactState<Array<A>> = useState<Array<A>>([])

  const basicProps: BasicProps = {
    columnsVisibility, page, isLocalTable,
    hasLocalActions    : !!cellActions,
    hasMultipleActions : !!multipleActions,
    hasGlobalSearch    : !!globalSearch,
    ...!isLocalTable && {
      limit : searchResult.limit || searchCriteria.limit || 20
    }
  }

  useEffect(() => {
    return () => {
      if (searchCriteria && updateCriteria) {
        updateCriteria(defaultSearchCriteria)
      }
    }
  }, [])

  const addRowToSelection  = (row: A): (e: SyntheticEvent) => void => {
    return (event: SyntheticEvent): void => {
      event.stopPropagation()
      const isSelected: boolean = selectedRows.map((s: A) => s.id).indexOf(row.id) >= 0
      setSelectedRows(isSelected ? selectedRows.filter((x: A) => x.id !== row.id) : selectedRows.concat(row))
    }
  }

  const toggleAllSelect = (): void => {
    const allRowsChecked: boolean = selectedRows.length === searchResult.data.length
    if (!allRowsChecked) {
      setSelectedRows(searchResult.data)
    } else {
      setSelectedRows([])
    }
  }

  const toggleColumnVisibility = (col: Column<A>): (e: SyntheticEvent) => void => {
    return (event: React.SyntheticEvent<Element, Event>): void => {
      event.stopPropagation()
      const valueChange: boolean = !columnsVisibility[col.field_name]
      const newColumnsVisibility: ColumnsVisibilityMap = {
        ...columnsVisibility,
        [col.field_name] : valueChange
      }
      setColumnsVisibility(newColumnsVisibility)
      if ( [ undefined, null, true ].includes(useLocalStorage) ) {
        updateStorageConfigTable(consumerKey, userId, name, "VISIBILITY", getColumnNameVisible(newColumnsVisibility))
      }
    }
  }

  const onChange = (value: SearchCriteria, page?: number): void => {
    updateCriteria(value)
    if (page) {
      setPage(page)
    }
  }

  return (
    <DatatableDisplay<A>
      {...props}
      {...basicProps}
      callback={onChange}
      toggleColumnVisibility={toggleColumnVisibility}
      selectedRows={selectedRows}
      addRowToSelection={addRowToSelection}
      toggleAllSelect={toggleAllSelect}
    />
  )
}

export default Datatable
