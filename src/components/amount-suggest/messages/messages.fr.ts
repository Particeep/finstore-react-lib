import { amount_suggest_msg_en } from "./messages.en"

export const amount_suggest_msg_fr: typeof amount_suggest_msg_en = {
  pick : {
    label : {
      EQUITY : "Parts",
      LOAN   : "Titres",
      FUND   : "Parts"
    }
  },
  amount : {
    label : "Montant à investir"
  },
  hint : {
    factor_of : "Tranche de : ",
    min       : "Montant minimum : ",
    max       : "Montant maximum : "
  }
}
