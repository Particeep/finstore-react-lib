"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStorageConfigTable = exports.getStorageConfigTable = exports.getColumnNameVisible = exports.initColumnsVisibilityWithLocalStorage = exports.buildLocalConfig = void 0;
var immutability_helper_1 = __importDefault(require("immutability-helper"));
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
exports.buildLocalConfig = buildLocalConfig;
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
        var defaultHidden = exports.getColumnNameVisible(mapColumnsVisibility);
        var localVisibility_1 = exports.getStorageConfigTable(consumerKey, userId, tableName, "VISIBILITY");
        if (!!localVisibility_1 && localVisibility_1.length > 0) {
            Object.keys(mapColumnsVisibility).map(function (key) { return mapColumnsVisibility[key] = localVisibility_1.includes(key); });
        }
        else {
            exports.updateStorageConfigTable(consumerKey, userId, tableName, "VISIBILITY", defaultHidden);
        }
    }
    return mapColumnsVisibility;
};
exports.initColumnsVisibilityWithLocalStorage = initColumnsVisibilityWithLocalStorage;
var getColumnNameVisible = function (columnsVisibility) {
    return Object.keys(columnsVisibility).filter(function (key) { return columnsVisibility[key]; });
};
exports.getColumnNameVisible = getColumnNameVisible;
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
exports.getStorageConfigTable = getStorageConfigTable;
var updateStorageConfigTable = function (consumerKey, connectedUserId, tableName, type, values) {
    var _a, _b, _c;
    try {
        var configName = storageKey(consumerKey);
        var storage = JSON.parse(localStorage.getItem(configName));
        if (storage && storage[connectedUserId]) {
            var newObject = immutability_helper_1.default(storage, (_a = {},
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
exports.updateStorageConfigTable = updateStorageConfigTable;
//# sourceMappingURL=columnVisibility.js.map