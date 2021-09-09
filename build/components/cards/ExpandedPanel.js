import React__default from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import ExpandMore from '../../node_modules/@material-ui/icons/esm/ExpandMore.js';

var ExpandedPanel = function (_a) {
    var panels = _a.panels;
    return (React__default.createElement("div", null, panels.filter(function (p) { return !p.hide; })
        .map((function (panel, index) { return (React__default.createElement(Accordion, { key: "panel_" + index },
        React__default.createElement(AccordionSummary, { expandIcon: React__default.createElement(ExpandMore, null) }, panel.title),
        React__default.createElement(AccordionDetails, null, panel.content))); }))));
};

export { ExpandedPanel };
//# sourceMappingURL=ExpandedPanel.js.map
