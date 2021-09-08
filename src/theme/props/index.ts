import { ComponentsProps } from "@material-ui/core/styles/props"
import { buttonBase } from "./buttonBase"
import { button } from "./button"
import { buttonGroup } from "./buttonGroup"
import { iconButton } from "./iconButton"
import { textField } from "./textField"
import { inputLabel } from "./inputLabel"
import { outlinedInput } from "./outlinedInput"
import { select } from "./select"
import { checkbox } from "./checkbox"
import { radio } from "./radio"
import { mobileStepper } from "./stepper"

export const props: ComponentsProps = {
  MuiButtonBase    : buttonBase,
  MuiButton        : button,
  MuiButtonGroup   : buttonGroup,
  MuiIconButton    : iconButton,
  MuiTextField     : textField,
  MuiInputLabel    : inputLabel,
  MuiOutlinedInput : outlinedInput,
  MuiSelect        : select,
  MuiCheckbox      : checkbox,
  MuiRadio         : radio,
  MuiMobileStepper : mobileStepper
}
