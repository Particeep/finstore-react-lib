"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.overrides = void 0;
var button_1 = require("./button");
var iconButton_1 = require("./iconButton");
var paper_1 = require("./paper");
var list_1 = require("./list");
var listSubheader_1 = require("./listSubheader");
var menuItem_1 = require("./menuItem");
var textField_1 = require("./textField");
var switch_1 = require("./switch");
var popover_1 = require("./popover");
var checkbox_1 = require("./checkbox");
var radio_1 = require("./radio");
var accordion_1 = require("./accordion");
var card_1 = require("./card");
var stepper_1 = require("./stepper");
var dialog_1 = require("./dialog");
var table_1 = require("./table");
var cssBaseLine_1 = require("./cssBaseLine");
var link_1 = require("./link");
exports.overrides = {
    MuiButton: button_1.button,
    MuiIconButton: iconButton_1.iconButton,
    MuiPaper: paper_1.paper,
    MuiList: list_1.list,
    MuiListSubheader: listSubheader_1.listSubheader,
    MuiMenuItem: menuItem_1.menuItem,
    MuiInputBase: textField_1.inputBase,
    MuiOutlinedInput: textField_1.outlinedInput,
    MuiFormLabel: textField_1.formLabel,
    MuiInputLabel: textField_1.inputLabel,
    MuiInputAdornment: textField_1.inputAdornment,
    MuiSwitch: switch_1.switchInput,
    MuiPopover: popover_1.popover,
    MuiCheckbox: checkbox_1.checkbox,
    MuiRadio: radio_1.radio,
    MuiAccordion: accordion_1.accordion,
    MuiAccordionSummary: accordion_1.accordionSummary,
    MuiAccordionDetails: accordion_1.accordionDetails,
    MuiCard: card_1.card,
    MuiCardHeader: card_1.cardHeader,
    MuiCardActions: card_1.cardActions,
    MuiDialogTitle: dialog_1.dialogTitle,
    MuiDialogActions: dialog_1.dialogActions,
    MuiDialogContent: dialog_1.dialogContent,
    MuiStep: stepper_1.step,
    MuiStepConnector: stepper_1.stepConnector,
    MuiStepLabel: stepper_1.stepLabel,
    MuiStepper: stepper_1.stepper,
    MuiStepIcon: stepper_1.stepIcon,
    MuiMobileStepper: stepper_1.mobileStepper,
    MuiTableCell: table_1.tableCell,
    MuiTablePagination: table_1.tablePagination,
    MuiTableFooter: table_1.tableFooter,
    MuiTableBody: table_1.tableBody,
    MuiCssBaseline: cssBaseLine_1.cssBaseLine,
    MuiLink: link_1.link
};
//# sourceMappingURL=index.js.map