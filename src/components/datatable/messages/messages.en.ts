// eslint-disable-next-line @typescript-eslint/typedef
export const datatable_msg_en = {
  empty                : "No data to display",
  rows_per_page        : "Rows per page",
  table_displayed_rows : (from: number, to: number, count: number): string => `${from}-${to} to ${count}`,
  frozen_action        : "Freeze the Actions column",
  show_column_chooser  : "Show column selector",
  grouped_actions      : {
    label         : "Grouped actions",
    rows_selected : (num: number): string => `${num} selected line(s)`
  },
  filter : {
    after  : "After",
    before : "Before"
  }
}
