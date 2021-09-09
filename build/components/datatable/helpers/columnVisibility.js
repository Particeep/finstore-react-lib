import { __assign } from '../../../node_modules/tslib/tslib.es6.js';
import update from 'immutability-helper';

var CONSUMER_TABLES = [
    "partnersOnEntity", "PartnerCommissions", "webhooks", "transactionsWallet", "users",
    "UserRelatives", "transactionsBis", "transactionsSignatures", "subadmins", "financialProducts",
    "signaturesSimple", "signaturesMultiple", "partners", "news", "partnersWaiting", "partnerUsers",
    "transactions", "partnerProjects", "fundraises", "succeededScheduler", "repaymentDetails",
    "classicScheduler", "fundraiseDocuments", "manageMembers", "appEnterprises", "documents", "funds",
    "fundsInvestDocs", "fundsDealDocs", "groupUsers"
];
var storageKey = function (consumerKey) { return "config-" + consumerKey; };
var buildLocalConfig = function (consumerKey, connectedUserId) {
    if (!isExistLocalConfig(consumerKey, connectedUserId)) {
        buildLocalConfigTable(consumerKey, connectedUserId, CONSUMER_TABLES);
    }
};
var isExistLocalConfig = function (consumerKey, connectedUserId) {
    var storage = JSON.parse(localStorage.getItem(storageKey(consumerKey)));
    return !!storage && !!storage[connectedUserId];
};
var buildLocalConfigTable = function (consumerKey, connectedUserId, tables) {
    var _a;
    var configTables = tables.reduce(function (acc, cur) {
        var _a;
        return (__assign(__assign({}, acc), (_a = {}, _a[cur] = { VISIBILITY: null }, _a)));
    }, {});
    var initialColumnVisibility = (_a = {}, _a[connectedUserId] = { tables: configTables }, _a);
    localStorage.setItem(storageKey(consumerKey), JSON.stringify(initialColumnVisibility));
};
var initColumnsVisibilityWithLocalStorage = function (tableName, columns, consumerKey, userId) {
    var mapColumnsVisibility = columns.reduce(function (acc, cur) {
        var _a;
        return (__assign(__assign({}, acc), (_a = {}, _a[cur.field_name] = cur.visible, _a)));
    }, {});
    if (consumerKey && userId) {
        var defaultHidden = getColumnNameVisible(mapColumnsVisibility);
        var localVisibility_1 = getStorageConfigTable(consumerKey, userId, tableName, "VISIBILITY");
        if (!!localVisibility_1 && localVisibility_1.length > 0) {
            Object.keys(mapColumnsVisibility).map(function (key) { return mapColumnsVisibility[key] = localVisibility_1.includes(key); });
        }
        else {
            updateStorageConfigTable(consumerKey, userId, tableName, "VISIBILITY", defaultHidden);
        }
    }
    return mapColumnsVisibility;
};
var getColumnNameVisible = function (columnsVisibility) {
    return Object.keys(columnsVisibility).filter(function (key) { return columnsVisibility[key]; });
};
var getStorageConfigTable = function (consumerKey, connectedUserId, tableName, configName) {
    try {
        var storage = JSON.parse(localStorage.getItem(storageKey(consumerKey)));
        return configName ? storage[connectedUserId].tables[tableName][configName] : storage[connectedUserId].tables[tableName];
    }
    catch (err) {
        console.error(err);
        return void (0);
    }
};
var updateStorageConfigTable = function (consumerKey, connectedUserId, tableName, type, values) {
    var _a, _b, _c;
    try {
        var configName = storageKey(consumerKey);
        var storage = JSON.parse(localStorage.getItem(configName));
        if (storage && storage[connectedUserId]) {
            var newObject = update(storage, (_a = {},
                _a[connectedUserId] = {
                    tables: (_b = {},
                        _b[tableName] = (_c = {},
                            _c[type] = { $set: values },
                            _c),
                        _b)
                },
                _a));
            localStorage.setItem(configName, JSON.stringify(newObject));
        }
    }
    catch (err) {
        console.error(err);
    }
};

export { buildLocalConfig, getColumnNameVisible, getStorageConfigTable, initColumnsVisibilityWithLocalStorage, updateStorageConfigTable };
//# sourceMappingURL=columnVisibility.js.map
