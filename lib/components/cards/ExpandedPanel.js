"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpandedPanel = void 0;
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var icons_1 = require("@material-ui/icons");
var ExpandedPanel = function (_a) {
    var panels = _a.panels;
    return (react_1.default.createElement("div", null, panels.filter(function (p) { return !p.hide; })
        .map((function (panel, index) { return (react_1.default.createElement(core_1.Accordion, { key: "panel_" + index },
        react_1.default.createElement(core_1.AccordionSummary, { expandIcon: react_1.default.createElement(icons_1.ExpandMore, null) }, panel.title),
        react_1.default.createElement(core_1.AccordionDetails, null, panel.content))); }))));
};
exports.ExpandedPanel = ExpandedPanel;
//# sourceMappingURL=ExpandedPanel.js.map