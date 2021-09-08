import React from "react"
import { Story } from "@storybook/react"
import { Datatable, DatatableProps, defaultSearchCriteria } from "../../components"
import { User } from "../../models/User"
import {
  buildColumnWithFilters,
  buildDefaultColumn,
  renderExpandedRow,
  groupedActions,
  renderRowActions
} from "./fixtures/helpers"
import { usersSearchResult } from "./fixtures/fixtures"

export default {
  title      : "Components/Datatable",
  component  : Datatable,
  parameters : {
    layout : "fullscreen"
  }
}

const Template: Story<DatatableProps<User>> = (args: DatatableProps<User>) => <Datatable<User> {...args} />

export const Default: any = Template.bind({})
Default.args = {
  name            : "Investors",
  title           : "Investors",
  consumerKey     : "52c5a6c5-accd-4b94-9e6a-fd2c8cc819e1",
  userId          : "0097860d-dfe7-49e4-a8c6-2e7d6f204c25",
  columns         : buildDefaultColumn(),
  useLocalStorage : false,
  searchResult    : usersSearchResult,
  globalSearch    : true,
  searchCriteria  : defaultSearchCriteria,
  cellActions     : renderRowActions
}

export const WithLoading: any = Template.bind({})
WithLoading.args = {
  name            : "Investors",
  title           : "Investors",
  consumerKey     : "52c5a6c5-accd-4b94-9e6a-fd2c8cc819e1",
  userId          : "0097860d-dfe7-49e4-a8c6-2e7d6f204c25",
  columns         : buildDefaultColumn(),
  useLocalStorage : false,
  loading         : true,
  searchResult    : usersSearchResult,
  globalSearch    : true,
  searchCriteria  : defaultSearchCriteria,
  cellActions     : renderRowActions
}

export const WithFilters: any = Template.bind({})
WithFilters.args = {
  name            : "Investors",
  title           : "Investors",
  consumerKey     : "52c5a6c5-accd-4b94-9e6a-fd2c8cc819e1",
  userId          : "0097860d-dfe7-49e4-a8c6-2e7d6f204c25",
  columns         : buildColumnWithFilters(),
  useLocalStorage : false,
  searchResult    : usersSearchResult,
  globalSearch    : true,
  searchCriteria  : defaultSearchCriteria,
  cellActions     : renderRowActions
}

export const WithGroupedActions: any = Template.bind({})
WithGroupedActions.args = {
  name            : "Investors",
  title           : "Investors",
  consumerKey     : "52c5a6c5-accd-4b94-9e6a-fd2c8cc819e1",
  userId          : "0097860d-dfe7-49e4-a8c6-2e7d6f204c25",
  columns         : buildDefaultColumn(),
  useLocalStorage : false,
  searchResult    : usersSearchResult,
  globalSearch    : true,
  searchCriteria  : defaultSearchCriteria,
  cellActions     : renderRowActions,
  multipleActions : groupedActions
}

export const WithExpandedRow: any = Template.bind({})
WithExpandedRow.args = {
  name            : "Investors",
  title           : "Investors",
  consumerKey     : "52c5a6c5-accd-4b94-9e6a-fd2c8cc819e1",
  userId          : "0097860d-dfe7-49e4-a8c6-2e7d6f204c25",
  columns         : buildDefaultColumn(),
  useLocalStorage : false,
  searchResult    : usersSearchResult,
  globalSearch    : true,
  searchCriteria  : defaultSearchCriteria,
  cellActions     : renderRowActions,
  expandedRow     : renderExpandedRow
}
