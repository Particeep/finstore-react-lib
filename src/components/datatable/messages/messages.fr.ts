import { datatable_msg_en } from "./messages.en"

export const datatable_msg_fr: typeof datatable_msg_en = {
  empty                : "Aucune donnée à afficher",
  rows_per_page        : "Lignes par page",
  table_displayed_rows : (from: number, to: number, count: number): string => `${from}-${to} de ${count}`,
  frozen_action        : "Fixer la colonne Actions",
  show_column_chooser  : "Afficher le sélecteur de colonne",
  grouped_actions      : {
    label         : "Actions groupées",
    rows_selected : (num: number): string => `${num} ligne(s) sélectionnée(s)`
  },
  filter : {
    after  : "Après",
    before : "Avant"
  }
}
