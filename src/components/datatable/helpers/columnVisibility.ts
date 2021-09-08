import update from "immutability-helper"
import { Column, ColumnVisibilityData } from "../models/models"
import { IObject } from "../../types"

const CONSUMER_TABLES: Array<string> = [
  "partnersOnEntity", "PartnerCommissions", "webhooks", "transactionsWallet", "users",
  "UserRelatives", "transactionsBis", "transactionsSignatures", "subadmins", "financialProducts",
  "signaturesSimple", "signaturesMultiple", "partners", "news", "partnersWaiting", "partnerUsers",
  "transactions", "partnerProjects", "fundraises", "succeededScheduler", "repaymentDetails",
  "classicScheduler", "fundraiseDocuments", "manageMembers", "appEnterprises", "documents", "funds",
  "fundsInvestDocs", "fundsDealDocs", "groupUsers"
]

const storageKey = (consumerKey: string): string => `config-${consumerKey}`

export const buildLocalConfig = (consumerKey: string, connectedUserId: string): void => {
  if (!isExistLocalConfig(consumerKey, connectedUserId)) {
    buildLocalConfigTable(consumerKey, connectedUserId, CONSUMER_TABLES)
  }
}

const isExistLocalConfig = (consumerKey: string, connectedUserId: string): boolean => {
  const storage: IObject = JSON.parse(localStorage.getItem(storageKey(consumerKey)))
  return !!storage && !!storage[connectedUserId]
}

const buildLocalConfigTable = (consumerKey: string, connectedUserId: string, tables: Array<string>): void => {
  const configTables: IObject = tables.reduce((acc: IObject, cur: string) => ({ ...acc, [cur]: { VISIBILITY: null } }), {})
  const initialColumnVisibility: ColumnVisibilityData = { [connectedUserId]: { tables: configTables } } as ColumnVisibilityData
  localStorage.setItem(storageKey(consumerKey), JSON.stringify(initialColumnVisibility))
}

export interface ColumnsVisibilityMap {
  [key: string]: boolean
}

export const initColumnsVisibilityWithLocalStorage = <T>(tableName:string, columns: Array<Column<T>>, consumerKey: string, userId: string): ColumnsVisibilityMap => {
  const mapColumnsVisibility: ColumnsVisibilityMap = columns.reduce((acc: ColumnsVisibilityMap, cur: Column<T>) => ({ ...acc, [cur.field_name]: cur.visible }), {})
  if (consumerKey && userId) {
    const defaultHidden: Array<string> = getColumnNameVisible(mapColumnsVisibility)
    const localVisibility: any = getStorageConfigTable(consumerKey, userId, tableName, "VISIBILITY")
    if (!!localVisibility && localVisibility.length > 0) {
      Object.keys(mapColumnsVisibility).map((key: string) => mapColumnsVisibility[key] = localVisibility.includes(key))
    } else {
      updateStorageConfigTable(consumerKey, userId, tableName, "VISIBILITY", defaultHidden)
    }
  }
  return mapColumnsVisibility
}

export const getColumnNameVisible = (columnsVisibility: ColumnsVisibilityMap): Array<string> => {
  return Object.keys(columnsVisibility).filter((key: string) => columnsVisibility[key])
}

export const getStorageConfigTable = (consumerKey: string, connectedUserId: string, tableName: string, configName: string) => {
  try {
    const storage: any = JSON.parse(localStorage.getItem(storageKey(consumerKey)))
    return configName ? storage[connectedUserId].tables[tableName][configName] : storage[connectedUserId].tables[tableName]
  } catch (err) {
    console.error(err)
    return void(0)
  }
}

export const updateStorageConfigTable = (consumerKey: string, connectedUserId: string, tableName: string, type: string, values: Array<string>): void => {
  try {
    const configName: string = storageKey(consumerKey)
    const storage: any = JSON.parse(localStorage.getItem(configName))
    if (storage && storage[connectedUserId]) {
      const newObject: IObject = update(storage, {
        [connectedUserId] : {
          tables : {
            [tableName] : {
              [type] : { $set: values }
            }
          }
        }
      })
      localStorage.setItem(configName, JSON.stringify(newObject))
    }
  } catch (err) {
    console.error(err)
  }
}
