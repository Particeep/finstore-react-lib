import React, { ChangeEvent } from "react"
import { T } from "../../../conf/i18n"
import { Select, MenuItem, makeStyles } from "@material-ui/core"
import { compareKeys } from "../helpers/helpers"
import { ParticeepDatePicker } from "../../inputs"
import moment, { MomentInput } from "moment"
import { FilterOption, FiltersArrayCustomProps, FiltersBooleanProps, FiltersDateProps } from "../models/models"
import { IObject } from "../../types"
import { ClassNameMap } from "@material-ui/core/styles/withStyles"
import { Theme } from "@material-ui/core/styles/createMuiTheme"

const filterHeight: number = 33

const useStyles: (props?: any) => ClassNameMap<any> = makeStyles((theme: Theme) => ({
  root : {
    height : filterHeight
  },
  dateAfter : {
    height       : filterHeight,
    marginBottom : theme.spacing(0.3)
  },
  dateBefore : {
    height : filterHeight
  }
}))

export const defaultDateFilter: IObject = {
  after  : null,
  before : null
}

const valueToFilter = (value: string): boolean | string => {
  switch (value) {
  case  "true":
    return true
  case "false":
    return false
  default:
    return "all"
  }
}

const filterToValue = (filter: boolean): string => {
  switch (filter) {
  case true:
    return "true"
  case false:
    return "false"
  default:
    return "all"
  }
}

export const FiltersBoolean = ({ name, onFilter, filter }: FiltersBooleanProps): JSX.Element => {
  const classes: ClassNameMap<any> = useStyles()
  const onChange = (e: ChangeEvent<{ value: any }>) => onFilter(name, valueToFilter(e.target.value))
  return (
    <Select
      className={classes.root}
      style={{ width: "100%" }}
      value={filterToValue(filter)}
      onChange={onChange}
    >
      <MenuItem value="all" />
      <MenuItem value="false">{T.global.no}</MenuItem>
      <MenuItem value="true">{T.global.yes}</MenuItem>
    </Select>
  )
}

export const FiltersArrayCustom = ({ name, options, onFilter, filter, withAllOption = true }: FiltersArrayCustomProps): JSX.Element => {
  const classes: ClassNameMap<any> = useStyles()
  const onChange = (e: ChangeEvent<{ value: any }>) => onFilter(name, e.target.value ? e.target.value : null)
  return (
    <Select
      className={classes.root}
      style={{ width: "100%" }}
      value={filter ? filter : ""}
      onChange={onChange}
    >
      {withAllOption &&
        <MenuItem value="all" />
      }
      {options.map((o: FilterOption, index: number) => <MenuItem key={`${name}-${index}`} value={o.value}>{o.label}</MenuItem>)}
    </Select>
  )
}

export const FiltersDate = ({ name, onFilter, after, before }: FiltersDateProps): JSX.Element => {
  const classes: ClassNameMap<any> = useStyles()
  const onChange = (type: string) => (date: MomentInput) => onFilter(name, type, moment(date).toISOString())
  return (
    <div>
      <ParticeepDatePicker
        className={classes.dateAfter}
        label={T.datatable.filter.after}
        value={after ? after : null}
        {...before && { maxDate: new Date(before) }}
        onChange={onChange("after")}
        clearable={true}
      />
      <ParticeepDatePicker
        className={classes.dateBefore}
        label={T.datatable.filter.before}
        value={before ? before : null}
        {...after && { minDate: new Date(after) }}
        onChange={onChange("before")}
        clearable={true}
      />
    </div>
  )
}

export const buildFilterValues: any = (filters: IObject): IObject => {
  const clone: IObject = Object.assign({}, filters)
  Object.keys(filters).forEach((key: string) => {
    if (filters[key] === null || filters[key] === undefined || (filters[key] && filters[key].length === 0)) {
      delete clone[key]
    } else {
      if (compareKeys(filters[key], defaultDateFilter)) {
        clone[`${key.replace("_at", "_after")}`] =  filters[key].after ? filters[key].after : ""
        clone[`${key.replace("_at", "_before")}`] = filters[key].before ? filters[key].before : ""
        delete clone[key]
      }
      if (filters[key] === "all") {
        clone[key] = ""
      }
    }
  })
  return clone
}
