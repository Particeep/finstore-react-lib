import React from "react"
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core"
import { SelectInputProps as MuiSelectInputProps } from "@material-ui/core/Select/SelectInput"

export interface SelectOption {
  value: any
  label: string
}

export interface SelectInputProps {
  label: string
  name?: string
  placeholder?: string
  value: any
  options: Array<SelectOption>
  onChange: MuiSelectInputProps["onChange"]
  disabled?: boolean
  fullWidth?: boolean
}

export const SelectInput = ({ label, options, fullWidth, ...others }: SelectInputProps): JSX.Element => {
  const isFullWidth: boolean = typeof fullWidth !== "undefined" ? fullWidth : true
  return (
    <FormControl fullWidth={isFullWidth}>
      <InputLabel>{label}</InputLabel>
      <Select
        {...others}
      >
        {options.map((o: SelectOption, index: number) =>
          <MenuItem
            key={`${index}_${o.label}`}
            value={o.value}>
            {o.label}
          </MenuItem>)
        }
      </Select>
    </FormControl>
  )
}
