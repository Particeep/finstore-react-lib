import { Address } from "./User"

export interface BankAccount {
  id: string
  created_at?: string
  wallet_id?: string
  status?: BankAccountStatus
  bank_name: string
  iban: string
  bic?: string
  holder_name?: string
  acct_num?: string
  aba_num?: string
  transit_num?: string
  account_type?: string
  justificatory_document?: string
  address?: Address
}

export enum BankAccountStatus {
  PENDING = "PENDING",
  VALIDATED = "VALIDATED",
  REFUSED = "REFUSED",
  DEACTIVATED = "DEACTIVATED"
}
