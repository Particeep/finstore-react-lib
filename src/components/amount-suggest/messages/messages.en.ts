import { IObject } from "../../types"

export const amount_suggest_msg_en: IObject = {
  pick : {
    label : {
      EQUITY : "Shares",
      LOAN   : "Bonds",
      FUND   : "Shares"
    }
  },
  amount : {
    label : "Amount to invest"
  },
  hint : {
    factor_of : "Factor of : ",
    min       : "Minimum amount : ",
    max       : "Maximum amount : "
  }
}
