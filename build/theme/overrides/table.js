import { customTheme } from '../custom.js';

var tableCell = {
    root: {
        borderBottomWidth: 0
    }
};
var tablePagination = {
    root: {
        float: "right"
    }
};
var tableFooter = {
    root: {
        display: "block",
        width: "100%"
    }
};
var tableBody = {
    root: {
        "& tr td": {
            height: 44,
            padding: customTheme.spacing(0, 1),
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
        }
    }
};

export { tableBody, tableCell, tableFooter, tablePagination };
//# sourceMappingURL=table.js.map
