import React, { ChangeEvent, useState, useEffect } from "react"
import { ReactState } from "../types"
import { SearchCriteria } from "../datatable"
import { ItemsPickerDisplay } from "./ItemsPickerDisplay"

export interface ItemsPickerProps<T> {
  /**
  * List of selectable items
  */
  title: string
  /**
   * List of selectable items
   */
  items: Array<T>
  /**
   * Fired when the selected items was updated
   * @param {Array<T>} items - Selected items
   */
  onChange: (items: Array<T>) => () => void
  /**
   * Update the list items
   * @param {SearchCriteria} criteria - Search criteria
   */
  updateCriteria?: (criteria: SearchCriteria) => void
  /**
   * Customize the rendering of the items in the list
   * @param {T} item - Item to render
   */
  renderItem: (item: T) => JSX.Element
}

export type ItemsPickerAction = "SELECT" | "DESELECT"

export const ItemsPicker = <A extends { id?: string }>(props: ItemsPickerProps<A>): JSX.Element => {
  const { title, items, updateCriteria, onChange, renderItem }: ItemsPickerProps<A> = props
  const [ selectedItems, setSelectedItem ]: ReactState<Array<A>> = useState<Array<A>>([])

  useEffect(() => {
    onChange(selectedItems)
  }, [ selectedItems ])

  const isAlreadySelected = (p: A) => !selectedItems.some((sp: A) => sp.id === p.id)
  const selectableItems: Array<A> = items.filter(isAlreadySelected)

  const searchItems = (event: ChangeEvent<HTMLInputElement>) => {
    const text: string = event.target.value
    updateCriteria({ global_search: text })
  }

  const loadMoreItems = () => {
    const limit: number = items.length + 5
    updateCriteria({ limit: limit })
  }

  const selectAllItems = () => {
    setSelectedItem([ ...selectedItems, ...selectableItems ])
  }

  const removeAllItems = () => {
    setSelectedItem([])
  }

  const toggleItem = (item: A, action: ItemsPickerAction) => () => {
    if (action === "SELECT") {
      setSelectedItem([ ...selectedItems, item ])
    } else {
      setSelectedItem(selectedItems.filter((i: A) => i.id !== item.id))
    }
  }

  return (
    <ItemsPickerDisplay<A>
      title={title}
      items={selectableItems}
      selectedItems={selectedItems}
      searchItems={searchItems}
      loadMoreItems={loadMoreItems}
      selectAllItems={selectAllItems}
      removeAllItems={removeAllItems}
      toggleItem={toggleItem}
      renderItem={renderItem}
    />
  )
}
