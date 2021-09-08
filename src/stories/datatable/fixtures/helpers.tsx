import React from "react"
import { User } from "../../../models/User"
import { ActionMultiple, FormattedDateTime, Column, IAction, ActionMenu } from "../../../components"
import { T } from "../../../conf/i18n"
import { Link, Typography } from "@material-ui/core"

const getEmailUser          = (cell: string, row: User) => (<Link href="#">{row.email}</Link>)
const displayInvestorType   = (cell: string) => T.user.investor.type[cell]
const getIdStatus           = (cell: string, row: User) => (row.custom && row.custom.is_ID_verified) ? T.global.valid : T.global.invalid
const displayCreator        = (cell: string, row: User) => (row.custom && row.custom.created_by) ? row.custom.created_by.creator_name : T.global.nc
const displayUserScore      = (cell: string) => cell || T.global.nc
const displayKycStatus      = (cell: string, row: User) => row.account_validation_status ? T.user.kyc.status[row.account_validation_status] : T.global.nc
const getWalletStatus       = (cell: string, row: User) => row.status ? <Link href="#">{T.wallet.status[row.status]}</Link> : T.wallet.status.null
const getProfessionStatus   = (cell: string, row: User) => row.is_pro === undefined ? T.global.nc : row.is_pro === true ? T.global.yes : T.global.no

const getRoleUsers          = (cell: string) => ({
  validated          : T.user.investor.status.validated,
  waiting_validation : T.user.investor.status.waiting_validation
}[cell] || T.user.investor.status.not_validated)

const filterInvestorTypeOptions: Array<any> = [
  { value: "NATURAL",   label: T.user.investor.type.NATURAL },
  { value: "LEGAL",     label: T.user.investor.type.LEGAL   }
]

const filterWalletStatusOptions: Array<any> = [
  { value: "LIGHT",        label: T.wallet.status.LIGHT     },
  { value: "CONFIRMED",    label: T.wallet.status.CONFIRMED },
  { value: "null",         label: T.wallet.status.null      }
]

const filterUserRoleOptions: Array<any> = [
  { value: "validated",          label: T.user.investor.status.validated           },
  { value: "waiting_validation", label: T.user.investor.status.waiting_validation  },
  { value: "null",               label: T.user.investor.status.not_validated       }
]

const filterUserAccountValidationStatusOptions: Array<any> = [ "IN_REVIEW", "WAITING_INFO", "WAITING_COUNTERPARTY", "WAITING_VALIDATION", "WAITING_FUNDING" ]
  .map((o: string) => ({ value: o, label: T.user.kyc.status[o] }))

export const renderLastLogin = (cell: string, row: User): any => {
  if (row.custom && row.custom.ips && row.custom.ips.length > 0) {
    return new Date(Math.max(...row.custom.ips.map((ip: any) => new Date(ip.date))))
  }
  return T.global.nc
}

const rowDefaultActions: Array<IAction> = [
  { label: "Voir",      onClick: () => {console.info("Voir")},      visible: true },
  { label: "Editer",    onClick: () => {console.info("Editer")},    visible: true },
  { label: "Supprimer", onClick: () => {console.info("Supprimer")}, visible: true }
]

export const renderRowActions = (row: User) => <ActionMenu variant={"contained"} color={"primary"} actions={rowDefaultActions} actionLabel={"Actions"} />

const deleteMultiple = (users: Array<User>) => (): void => { console.info("Users to delete : ", users) }
const updateMultiple = (users: Array<User>) => (): void => { console.info("Users to update : ", users) }

export const groupedActions: Array<ActionMultiple<User>> = [
  { label: "Delete selection", action: deleteMultiple },
  { label: "Update selection", action: updateMultiple }
]

export const renderExpandedRow = (row: User) => (
  <div>
    <Typography>Nom: {row.last_name}</Typography>
    <Typography>Prénom: {row.first_name}</Typography>
    <Typography>E-mail: {row.email}</Typography>
    <Typography>Date d'inscription: <FormattedDateTime value={row.created_at} /></Typography>
  </div>
)

export const buildDefaultColumn = (): Array<Column<User>> => [
  { type: "text", field_name: "id",  label: "Référence", canSort: true,  visible: false },
  { type: "datetime", field_name: "created_at",  label: "Inscription", canSort: true,  visible: true },
  { type: "text", field_name: "email",  label: "Email", canSort: true,  visible: true,  formatter: getEmailUser },
  { type: "text", field_name: "last_name", label: "Nom",  canSort: true,  visible: true },
  { type: "text", field_name: "first_name", label: "Prénom", canSort: true,  visible: true },
  { type: "text", field_name: "phone",  label: "Téléphone", canSort: true,  visible: true },
  { type: "text", field_name: "id_card", label: "Carte d'identité", canSort: true,  visible: true,  formatter: getIdStatus },
  { type: "datetime", field_name: "last_login",  label: "Dernière connexion", canSort: false, visible: false, formatter: renderLastLogin },
  { type: "text", field_name: "investor_type", label: "Type", canSort: true,  visible: true,  formatter: displayInvestorType },
  { type: "text", field_name: "creator_name", label: "Créateur",  canSort: false, visible: true,  formatter: displayCreator },
  { type: "text", field_name: "status", label: "Porte-monnaie",  canSort: true,  visible: true,  formatter: getWalletStatus },
  { type: "text", field_name: "investor_score", label: "Score", canSort: false, visible: false, formatter: displayUserScore },
  { type: "text", field_name: "roles", label: "statut", canSort: false, visible: true, formatter: getRoleUsers },
  { type: "boolean", field_name: "does_pay_taxes", label: "Paiement des taxes", canSort: true,  visible: true },
  { type: "text", field_name: "is_pro", label: "Professionnel",  canSort: true,  visible: false, formatter: getProfessionStatus },
  { type: "text", field_name: "account_validation_status", label: "Etat de validation du compte", canSort: true,  visible: true,  formatter: displayKycStatus },
  { type: "text", field_name: "tag", label: "Profil de risque", canSort: false, visible: true }
]

export const buildColumnWithFilters = (): Array<Column<User>> => [
  { type: "text", field_name: "id",  label: "Référence", canSort: true,  visible: false },
  { type: "datetime", field_name: "created_at",  label: "Inscription", canSort: true,  visible: true,  filter: "DATE" },
  { type: "text", field_name: "email",  label: "Email", canSort: true,  visible: true,  formatter: getEmailUser },
  { type: "text", field_name: "last_name", label: "Nom",  canSort: true,  visible: true },
  { type: "text", field_name: "first_name", label: "Prénom", canSort: true,  visible: true },
  { type: "text", field_name: "phone",  label: "Téléphone", canSort: true,  visible: true },
  { type: "text", field_name: "id_card", label: "Carte d'identité", canSort: true,  visible: true,  formatter: getIdStatus },
  { type: "datetime", field_name: "last_login",  label: "Dernière connexion", canSort: false, visible: false, formatter: renderLastLogin },
  { type: "text", field_name: "investor_type", label: "Type", canSort: true,  visible: true,  formatter: displayInvestorType, filter: "CUSTOM", filterOptions: filterInvestorTypeOptions },
  { type: "text", field_name: "creator_name", label: "Créateur",  canSort: false, visible: true,  formatter: displayCreator },
  { type: "text", field_name: "status", label: "Porte-monnaie",  canSort: true,  visible: true,  formatter: getWalletStatus,  filter: "CUSTOM", filterOptions: filterWalletStatusOptions },
  { type: "text", field_name: "investor_score", label: "Score", canSort: false, visible: false, formatter: displayUserScore },
  { type: "text", field_name: "roles", label: "statut", canSort: false, visible: true, formatter: getRoleUsers, filter: "CUSTOM", filterOptions: filterUserRoleOptions },
  { type: "boolean", field_name: "does_pay_taxes", label: "Paiement des taxes", canSort: true,  visible: true, filter: "BOOLEAN" },
  { type: "text", field_name: "is_pro", label: "Professionnel",  canSort: true,  visible: false, formatter: getProfessionStatus, filter: "BOOLEAN" },
  { type: "text", field_name: "account_validation_status", label: "Etat de validation du compte", canSort: true,  visible: true,  formatter: displayKycStatus, filter: "CUSTOM", filterOptions: filterUserAccountValidationStatusOptions },
  { type: "text", field_name: "tag", label: "Profil de risque", canSort: false, visible: true }
]
