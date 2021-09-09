"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tableBody = exports.tableFooter = exports.tablePagination = exports.tableCell = void 0;
var custom_1 = require("../custom");
exports.tableCell = {
    root: {
        borderBottomWidth: 0
    }
};
exports.tablePagination = {
    root: {
        float: "right"
    }
};
exports.tableFooter = {
    root: {
        display: "block",
        width: "100%"
    }
};
exports.tableBody = {
    root: {
        "& tr td": {
            height: 44,
            padding: custom_1.customTheme.spacing(0, 1),
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
        }
    }
};
//# sourceMappingURL=table.js.map