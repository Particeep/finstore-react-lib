import { FormControlLabelProps } from "@material-ui/core"

export type ReactState<T> = [ T, ((value: (((prevState: T) => T) | T)) => void) ]

export type IObject<T = any> = { [key: string]: T }

export type ActionMultiple<T> = {
  label: string
  action: (rows: Array<T>) => () => void
}

export type InputWithLabelProps<T> = T & FormControlLabelProps
