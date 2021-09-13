import React, { useState, SyntheticEvent } from "react"

import { makeStyles, TextField } from "@material-ui/core"
import { ClassNameMap } from "@material-ui/core/styles/withStyles"
import { paper } from "../../theme/overrides/paper"

const useStyles: (props?: any) => ClassNameMap<any> = makeStyles({
  root : {
    width : "100%"
  },
  highlightedPart : {
    fontWeight : 600
  },
  input : {
    padding : "0px !important"
  },
  listbox : {
    padding : 0
  },
  paper : paper
})

export interface AutocompleteData {
  value?: string
  text?: string
  label: string
}

export interface AutocompleteInputProps {
  /**
   * Search results to display in drop down
   */
  options: Array<AutocompleteData>
  /**
   * Field placeholder
   */
  placeholder: string
  /**
   * Field unique identifier
   */
  id: string
  /**
   * Callback fired when text value is changed
   */
  onChange: (text: string) => void
  /**
   * Callback fired when one item is selected
   */
  onSelect: (data: AutocompleteData) => void
}

const splitOn = (slicable: string, ...indices: Array<number>): Array<string> => {
  return [ 0, ...indices ].map((position: number, index: number, array: Array<number>) => slicable.slice(position, array[index + 1]))
}

export const AutocompleteInput = ({ options, placeholder, id, onChange, onSelect }: AutocompleteInputProps): JSX.Element => {
  const classes: ClassNameMap<any> = useStyles()

  const [ inputValue, setInputValue ]: Array<any> = useState<string>("")

  //const renderInput = (params: AutocompleteRenderInputParams): JSX.Element => (<TextField {...params} fullWidth placeholder={placeholder} />)

  const renderOption = (option: AutocompleteData): JSX.Element => {
    const position: number = option.label.toLowerCase().indexOf(inputValue.toLowerCase())
    const result: Array<string> = splitOn(option.label, position, position + inputValue.length)
    return (
      <div>
        {result.map((part: string, index: number) => {
          if (index === 1) {
            return <span key={String(index)} className={classes.highlightedPart}>{part}</span>
          } else {
            return <span key={String(index)}>{part}</span>
          }
        })}
      </div>
    )
  }

  const getOptionLabel = (option: AutocompleteData): string => {
    return option.label
  }

  const handleInputChange = (event: SyntheticEvent<any>, newInputValue: string): void => {
    onChange(newInputValue)
    setInputValue(newInputValue)
  }

  const handleChange = (event: SyntheticEvent<any>, newValue: any): void => {
    onSelect(newValue)
    if (!newValue) {
      setInputValue("")
    }
  }

  return (
      <div>
        {/*<Autocomplete
      className={classes.root}
      classes={{
        inputRoot : classes.input,
        listbox   : classes.listbox,
        paper     : classes.paper
      }}
      autoSelect={true}
      options={options}
      onInputChange={handleInputChange}
      onChange={handleChange}
      renderInput={renderInput}
      renderOption={renderOption}
      getOptionLabel={getOptionLabel}
      {...id}
    />*/}
      </div>
  )
}
