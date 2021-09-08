import React from "react"
import MUIPlacesAutocomplete,  { geocodeByPlaceID }  from  "mui-places-autocomplete"
import { makeStyles } from "@material-ui/core/styles"
import { ClassNameMap } from "@material-ui/core/styles/withStyles"

const useStyles: (props?: any) => ClassNameMap<any> = makeStyles({
  root : {
    position : "relative",
    width    : "100%"
  }
})

export interface GoogleAddress {
  street_number: string
  route: string
  postal_code: string
  locality: string
  country: string
}

const googleAddressMap: GoogleAddress = {
  street_number : "short_name",
  route         : "long_name",
  locality      : "long_name",
  country       : "short_name",
  postal_code   : "short_name"
}

export interface GeosuggestInputProps {
  /**
  * Callback fired when address is selected
  */
  onPlaceChanged: (address: GoogleAddress) => void
  /**
   * Initial address in the field
   */
  value: string
  /**
   * Field placeholder
   */
  placeholder: string
  /**
   * Set the field as required
   */
  required: boolean
}

export const GeosuggestInput = ({ onPlaceChanged, value, placeholder, required }: GeosuggestInputProps): JSX.Element => {
  const classes: ClassNameMap<any> = useStyles()

  const onAddressSelect = (suggestion: any): void => {
    if (suggestion) {
      geocodeByPlaceID(suggestion.place_id).then((place: string | any[]) => {
        if (place.length > 0 ) {
          onPlaceChanged(buildAddress(place[0]))
        }
      })
    }
  }

  const buildAddress = (place: any): GoogleAddress => {
    return place.address_components.reduce((acc: any, addressItem: any): any => {
      const addressType: any = addressItem.types[0]
      return {
        ...acc,
        [addressType] : addressItem[googleAddressMap[addressType]]
      }
    }, {})
  }

  const renderTarget = (): JSX.Element => (<div />)

  return (
    <div className={classes.root}>
      <MUIPlacesAutocomplete
        onSuggestionSelected={onAddressSelect}
        initialValue={value}
        renderTarget= {renderTarget}
        textFieldProps={{ placeholder, required, fullWidth: true }}
      />
    </div>
  )
}
