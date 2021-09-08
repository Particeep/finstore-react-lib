import { Overrides } from "@material-ui/core/styles/overrides"
import { button } from "./button"
import { iconButton } from "./iconButton"
import { paper } from "./paper"
import { list } from "./list"
import { listSubheader } from "./listSubheader"
import { menuItem } from "./menuItem"
import { formLabel, inputAdornment, inputBase, inputLabel, outlinedInput } from "./textField"
import { switchInput } from "./switch"
import { popover } from "./popover"
import { checkbox } from "./checkbox"
import { radio } from "./radio"
import { accordion, accordionSummary, accordionDetails } from "./accordion"
import { card, cardHeader, cardActions } from "./card"
import { step, stepConnector, stepLabel, stepper, stepIcon, mobileStepper } from "./stepper"
import { dialogTitle, dialogActions, dialogContent } from "./dialog"
import { tableBody, tableCell, tableFooter, tablePagination } from "./table"
import { cssBaseLine } from "./cssBaseLine"
import { link } from "./link"

export const overrides: Overrides = {
  MuiButton           : button,
  MuiIconButton       : iconButton,
  MuiPaper            : paper,
  MuiList             : list,
  MuiListSubheader    : listSubheader,
  MuiMenuItem         : menuItem,
  MuiInputBase        : inputBase,
  MuiOutlinedInput    : outlinedInput,
  MuiFormLabel        : formLabel,
  MuiInputLabel       : inputLabel,
  MuiInputAdornment   : inputAdornment,
  MuiSwitch           : switchInput,
  MuiPopover          : popover,
  MuiCheckbox         : checkbox,
  MuiRadio            : radio,
  MuiAccordion        : accordion,
  MuiAccordionSummary : accordionSummary,
  MuiAccordionDetails : accordionDetails,
  MuiCard             : card,
  MuiCardHeader       : cardHeader,
  MuiCardActions      : cardActions,
  MuiDialogTitle      : dialogTitle,
  MuiDialogActions    : dialogActions,
  MuiDialogContent    : dialogContent,
  MuiStep             : step,
  MuiStepConnector    : stepConnector,
  MuiStepLabel        : stepLabel,
  MuiStepper          : stepper,
  MuiStepIcon         : stepIcon,
  MuiMobileStepper    : mobileStepper,
  MuiTableCell        : tableCell,
  MuiTablePagination  : tablePagination,
  MuiTableFooter      : tableFooter,
  MuiTableBody        : tableBody,
  MuiCssBaseline      : cssBaseLine,
  MuiLink             : link
}
