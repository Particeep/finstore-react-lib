import * as React$2 from 'react';
import React__default, { useState, Component, useEffect, Children, isValidElement, cloneElement } from 'react';
import { Typography, Button, CircularProgress, makeStyles as makeStyles$1, Tooltip, IconButton, Menu, ListSubheader, MenuItem, ButtonGroup, TextField, FormControl, InputLabel, Select, TableFooter, TablePagination, TableHead, TableRow, TableCell, Checkbox, TableSortLabel, fade, TableBody, Fade, Icon, Toolbar, ListItem, ListItemText, InputAdornment, LinearProgress, TableContainer, Table, DialogTitle, AppBar, Dialog, DialogContent, DialogActions, Paper as Paper$1, Grid, Card, CardHeader, Collapse, CardContent, CardActions, Accordion, AccordionSummary, AccordionDetails, useMediaQuery, Stepper, Step, StepLabel, MobileStepper as MobileStepper$1, Box } from '@material-ui/core';
import { makeStyles, withStyles, createMuiTheme } from '@material-ui/core/styles';
import { Block, KeyboardArrowUp, KeyboardArrowDown, VisibilityOff, Search, Close, Info, Remove, Add, ExpandMore as ExpandMore$1, AddCircle, RemoveCircle, Done } from '@material-ui/icons';
import createPalette from '@material-ui/core/styles/createPalette';
import createTypography from '@material-ui/core/styles/createTypography';
import createSpacing from '@material-ui/core/styles/createSpacing';
import transitions from '@material-ui/core/styles/transitions';
import Popper$3 from '@material-ui/core/Popper';
import ListSubheader$1 from '@material-ui/core/ListSubheader';
import Paper from '@material-ui/core/Paper';
import IconButton$1 from '@material-ui/core/IconButton';
import Chip from '@material-ui/core/Chip';
import require$$0, { createSvgIcon as createSvgIcon$1, unstable_useId, useControlled, useEventCallback, setRef } from '@material-ui/core/utils';
import require$$5 from '@material-ui/core/Grow';
import require$$6 from '@material-ui/core/MenuList';
import require$$7 from '@material-ui/core/MenuItem';
import require$$9 from '@material-ui/core/TextField';
import { DatePicker } from '@material-ui/pickers';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import ReactDOM from 'react-dom';

var useStyles$j = makeStyles(function (theme) { return ({
    root: {
        textAlign: "center",
        lineHeight: 1,
        marginTop: theme.spacing()
    }
}); });
var Empty = function (props) {
    var classes = useStyles$j();
    return (React__default.createElement("div", { className: classes.root },
        React__default.createElement(Block, null),
        React__default.createElement(Typography, null, props.message)));
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

var Btn = function (_a) {
    var loading = _a.loading, children = _a.children, props = __rest(_a, ["loading", "children"]);
    props.disabled = props.disabled || loading;
    var loadingColor = props.color;
    return (React__default.createElement(Button, __assign({}, props),
        !loading && children,
        loading && React__default.createElement(CircularProgress, { color: loadingColor, size: 24 })));
};

var useStyles$i = makeStyles$1(function () { return ({
    root: {
        color: "inherit",
        width: 40,
        height: 40
    }
}); });
var IconBtn = function (_a) {
    var loading = _a.loading, children = _a.children, disabled = _a.disabled, title = _a.title, props = __rest(_a, ["loading", "children", "disabled", "title"]);
    var classes = useStyles$i();
    return (React__default.createElement(Tooltip, { title: title, disableHoverListener: !title, disableFocusListener: !title },
        React__default.createElement(IconButton, __assign({ disabled: disabled || loading, classes: { root: classes.root } }, props),
            !loading && children,
            loading && React__default.createElement(CircularProgress, { size: 23 }))));
};

var useStyles$h = makeStyles$1(function (theme) { return ({
    paper: {
        marginTop: theme.spacing(4.2)
    }
}); });
var renderActions = function (actions) {
    return actions.filter(function (a) { return a.visible; }).map(function (action, index) {
        if (action.separator) {
            return React__default.createElement(ListSubheader, { key: "separator-" + index, component: "div" }, action.separator);
        }
        else {
            return React__default.createElement(MenuItem, { key: action.label + "-" + index, onClick: action.onClick }, action.label);
        }
    });
};
var ActionMenu = function (props) {
    var classes = useStyles$h();
    var _a = React__default.useState(undefined), anchorEl = _a[0], setAnchorEl = _a[1];
    var actions = props.actions, actionLabel = props.actionLabel, icon = props.icon, variant = props.variant, color = props.color;
    var handleToggle = function (event) {
        if (!Boolean(anchorEl)) {
            setAnchorEl(event.currentTarget);
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            setAnchorEl(undefined);
        }
    };
    return (React__default.createElement("div", null,
        React__default.createElement(Btn, { endIcon: icon, color: color, variant: variant, onClick: handleToggle }, actionLabel),
        React__default.createElement(Menu, { open: Boolean(anchorEl), anchorEl: anchorEl, onClick: handleToggle, anchorOrigin: {
                vertical: "bottom",
                horizontal: "center"
            }, transformOrigin: {
                vertical: "top",
                horizontal: "center"
            }, classes: { paper: classes.paper }, disableScrollLock: true }, renderActions(actions))));
};

var BtnGroup = function (props) {
    var buttons = props.buttons, variant = props.variant, color = props.color;
    return (React__default.createElement(ButtonGroup, { variant: variant, color: color }, buttons.map(function (button) { return (React__default.createElement(Button, { key: button.label, onClick: button.onClick, endIcon: button.icon }, button.label)); })));
};

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties$4(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends$5() {
  _extends$5 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$5.apply(this, arguments);
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getAugmentedNamespace(n) {
	if (n.__esModule) return n;
	var a = Object.defineProperty({}, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

function commonjsRequire (path) {
	throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}

var propTypes = {exports: {}};

var reactIs$2 = {exports: {}};

var reactIs_production_min$1 = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$1="function"===typeof Symbol&&Symbol.for,c$1=b$1?Symbol.for("react.element"):60103,d$1=b$1?Symbol.for("react.portal"):60106,e$1=b$1?Symbol.for("react.fragment"):60107,f$1=b$1?Symbol.for("react.strict_mode"):60108,g$1=b$1?Symbol.for("react.profiler"):60114,h$1=b$1?Symbol.for("react.provider"):60109,k$1=b$1?Symbol.for("react.context"):60110,l$1=b$1?Symbol.for("react.async_mode"):60111,m$1=b$1?Symbol.for("react.concurrent_mode"):60111,n$1=b$1?Symbol.for("react.forward_ref"):60112,p$1=b$1?Symbol.for("react.suspense"):60113,q$1=b$1?
Symbol.for("react.suspense_list"):60120,r$1=b$1?Symbol.for("react.memo"):60115,t$1=b$1?Symbol.for("react.lazy"):60116,v$1=b$1?Symbol.for("react.block"):60121,w$1=b$1?Symbol.for("react.fundamental"):60117,x$1=b$1?Symbol.for("react.responder"):60118,y$1=b$1?Symbol.for("react.scope"):60119;
function z$1(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c$1:switch(a=a.type,a){case l$1:case m$1:case e$1:case g$1:case f$1:case p$1:return a;default:switch(a=a&&a.$$typeof,a){case k$1:case n$1:case t$1:case r$1:case h$1:return a;default:return u}}case d$1:return u}}}function A$1(a){return z$1(a)===m$1}reactIs_production_min$1.AsyncMode=l$1;reactIs_production_min$1.ConcurrentMode=m$1;reactIs_production_min$1.ContextConsumer=k$1;reactIs_production_min$1.ContextProvider=h$1;reactIs_production_min$1.Element=c$1;reactIs_production_min$1.ForwardRef=n$1;reactIs_production_min$1.Fragment=e$1;reactIs_production_min$1.Lazy=t$1;reactIs_production_min$1.Memo=r$1;reactIs_production_min$1.Portal=d$1;
reactIs_production_min$1.Profiler=g$1;reactIs_production_min$1.StrictMode=f$1;reactIs_production_min$1.Suspense=p$1;reactIs_production_min$1.isAsyncMode=function(a){return A$1(a)||z$1(a)===l$1};reactIs_production_min$1.isConcurrentMode=A$1;reactIs_production_min$1.isContextConsumer=function(a){return z$1(a)===k$1};reactIs_production_min$1.isContextProvider=function(a){return z$1(a)===h$1};reactIs_production_min$1.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c$1};reactIs_production_min$1.isForwardRef=function(a){return z$1(a)===n$1};reactIs_production_min$1.isFragment=function(a){return z$1(a)===e$1};reactIs_production_min$1.isLazy=function(a){return z$1(a)===t$1};
reactIs_production_min$1.isMemo=function(a){return z$1(a)===r$1};reactIs_production_min$1.isPortal=function(a){return z$1(a)===d$1};reactIs_production_min$1.isProfiler=function(a){return z$1(a)===g$1};reactIs_production_min$1.isStrictMode=function(a){return z$1(a)===f$1};reactIs_production_min$1.isSuspense=function(a){return z$1(a)===p$1};
reactIs_production_min$1.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e$1||a===m$1||a===g$1||a===f$1||a===p$1||a===q$1||"object"===typeof a&&null!==a&&(a.$$typeof===t$1||a.$$typeof===r$1||a.$$typeof===h$1||a.$$typeof===k$1||a.$$typeof===n$1||a.$$typeof===w$1||a.$$typeof===x$1||a.$$typeof===y$1||a.$$typeof===v$1)};reactIs_production_min$1.typeOf=z$1;

var reactIs_development$1 = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

reactIs_development$1.AsyncMode = AsyncMode;
reactIs_development$1.ConcurrentMode = ConcurrentMode;
reactIs_development$1.ContextConsumer = ContextConsumer;
reactIs_development$1.ContextProvider = ContextProvider;
reactIs_development$1.Element = Element;
reactIs_development$1.ForwardRef = ForwardRef;
reactIs_development$1.Fragment = Fragment;
reactIs_development$1.Lazy = Lazy;
reactIs_development$1.Memo = Memo;
reactIs_development$1.Portal = Portal;
reactIs_development$1.Profiler = Profiler;
reactIs_development$1.StrictMode = StrictMode;
reactIs_development$1.Suspense = Suspense;
reactIs_development$1.isAsyncMode = isAsyncMode;
reactIs_development$1.isConcurrentMode = isConcurrentMode;
reactIs_development$1.isContextConsumer = isContextConsumer;
reactIs_development$1.isContextProvider = isContextProvider;
reactIs_development$1.isElement = isElement;
reactIs_development$1.isForwardRef = isForwardRef;
reactIs_development$1.isFragment = isFragment;
reactIs_development$1.isLazy = isLazy;
reactIs_development$1.isMemo = isMemo;
reactIs_development$1.isPortal = isPortal;
reactIs_development$1.isProfiler = isProfiler;
reactIs_development$1.isStrictMode = isStrictMode;
reactIs_development$1.isSuspense = isSuspense;
reactIs_development$1.isValidElementType = isValidElementType;
reactIs_development$1.typeOf = typeOf;
  })();
}

if (process.env.NODE_ENV === 'production') {
  reactIs$2.exports = reactIs_production_min$1;
} else {
  reactIs$2.exports = reactIs_development$1;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$3 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret$3;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var printWarning$2 = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$2 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning$2 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes$1(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has$1(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$2);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning$2(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning$2(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes$1.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes$1;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactIs$1 = reactIs$2.exports;
var assign = objectAssign;

var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
var checkPropTypes = checkPropTypes_1;

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret$1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret$1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs$1.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret$1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = ReactPropTypesSecret_1;

function emptyFunction$2() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction$2;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction$2
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs$2.exports;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  propTypes.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  propTypes.exports = factoryWithThrowingShims();
}

var PropTypes = propTypes.exports;

function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

function clsx () {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x;
			}
		}
	}
	return str;
}

/**
 * @ignore - internal component.
 */

var CloseIcon = createSvgIcon$1( /*#__PURE__*/React$2.createElement("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), 'Close');

/**
 * @ignore - internal component.
 */

var ArrowDropDownIcon = createSvgIcon$1( /*#__PURE__*/React$2.createElement("path", {
  d: "M7 10l5 5 5-5z"
}), 'ArrowDropDown');

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _typeof$1(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$1 = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof$1 = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof$1(obj);
}

// Give up on IE 11 support for this feature

function stripDiacritics(string) {
  return typeof string.normalize !== 'undefined' ? string.normalize('NFD').replace(/[\u0300-\u036f]/g, '') : string;
}

function createFilterOptions() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _config$ignoreAccents = config.ignoreAccents,
      ignoreAccents = _config$ignoreAccents === void 0 ? true : _config$ignoreAccents,
      _config$ignoreCase = config.ignoreCase,
      ignoreCase = _config$ignoreCase === void 0 ? true : _config$ignoreCase,
      limit = config.limit,
      _config$matchFrom = config.matchFrom,
      matchFrom = _config$matchFrom === void 0 ? 'any' : _config$matchFrom,
      stringify = config.stringify,
      _config$trim = config.trim,
      trim = _config$trim === void 0 ? false : _config$trim;
  return function (options, _ref) {
    var inputValue = _ref.inputValue,
        getOptionLabel = _ref.getOptionLabel;
    var input = trim ? inputValue.trim() : inputValue;

    if (ignoreCase) {
      input = input.toLowerCase();
    }

    if (ignoreAccents) {
      input = stripDiacritics(input);
    }

    var filteredOptions = options.filter(function (option) {
      var candidate = (stringify || getOptionLabel)(option);

      if (ignoreCase) {
        candidate = candidate.toLowerCase();
      }

      if (ignoreAccents) {
        candidate = stripDiacritics(candidate);
      }

      return matchFrom === 'start' ? candidate.indexOf(input) === 0 : candidate.indexOf(input) > -1;
    });
    return typeof limit === 'number' ? filteredOptions.slice(0, limit) : filteredOptions;
  };
} // To replace with .findIndex() once we stop IE 11 support.

function findIndex$1(array, comp) {
  for (var i = 0; i < array.length; i += 1) {
    if (comp(array[i])) {
      return i;
    }
  }

  return -1;
}

var defaultFilterOptions = createFilterOptions(); // Number of options to jump in list box when pageup and pagedown keys are used.

var pageSize = 5;
function useAutocomplete(props) {
  var _props$autoComplete = props.autoComplete,
      autoComplete = _props$autoComplete === void 0 ? false : _props$autoComplete,
      _props$autoHighlight = props.autoHighlight,
      autoHighlight = _props$autoHighlight === void 0 ? false : _props$autoHighlight,
      _props$autoSelect = props.autoSelect,
      autoSelect = _props$autoSelect === void 0 ? false : _props$autoSelect,
      _props$blurOnSelect = props.blurOnSelect,
      blurOnSelect = _props$blurOnSelect === void 0 ? false : _props$blurOnSelect,
      _props$clearOnBlur = props.clearOnBlur,
      clearOnBlur = _props$clearOnBlur === void 0 ? !props.freeSolo : _props$clearOnBlur,
      _props$clearOnEscape = props.clearOnEscape,
      clearOnEscape = _props$clearOnEscape === void 0 ? false : _props$clearOnEscape,
      _props$componentName = props.componentName,
      componentName = _props$componentName === void 0 ? 'useAutocomplete' : _props$componentName,
      _props$debug = props.debug,
      debug = _props$debug === void 0 ? false : _props$debug,
      _props$defaultValue = props.defaultValue,
      defaultValue = _props$defaultValue === void 0 ? props.multiple ? [] : null : _props$defaultValue,
      _props$disableClearab = props.disableClearable,
      disableClearable = _props$disableClearab === void 0 ? false : _props$disableClearab,
      _props$disableCloseOn = props.disableCloseOnSelect,
      disableCloseOnSelect = _props$disableCloseOn === void 0 ? false : _props$disableCloseOn,
      _props$disabledItemsF = props.disabledItemsFocusable,
      disabledItemsFocusable = _props$disabledItemsF === void 0 ? false : _props$disabledItemsF,
      _props$disableListWra = props.disableListWrap,
      disableListWrap = _props$disableListWra === void 0 ? false : _props$disableListWra,
      _props$filterOptions = props.filterOptions,
      filterOptions = _props$filterOptions === void 0 ? defaultFilterOptions : _props$filterOptions,
      _props$filterSelected = props.filterSelectedOptions,
      filterSelectedOptions = _props$filterSelected === void 0 ? false : _props$filterSelected,
      _props$freeSolo = props.freeSolo,
      freeSolo = _props$freeSolo === void 0 ? false : _props$freeSolo,
      getOptionDisabled = props.getOptionDisabled,
      _props$getOptionLabel = props.getOptionLabel,
      getOptionLabelProp = _props$getOptionLabel === void 0 ? function (option) {
    return option;
  } : _props$getOptionLabel,
      _props$getOptionSelec = props.getOptionSelected,
      getOptionSelected = _props$getOptionSelec === void 0 ? function (option, value) {
    return option === value;
  } : _props$getOptionSelec,
      groupBy = props.groupBy,
      _props$handleHomeEndK = props.handleHomeEndKeys,
      handleHomeEndKeys = _props$handleHomeEndK === void 0 ? !props.freeSolo : _props$handleHomeEndK,
      idProp = props.id,
      _props$includeInputIn = props.includeInputInList,
      includeInputInList = _props$includeInputIn === void 0 ? false : _props$includeInputIn,
      inputValueProp = props.inputValue,
      _props$multiple = props.multiple,
      multiple = _props$multiple === void 0 ? false : _props$multiple,
      onChange = props.onChange,
      onClose = props.onClose,
      onHighlightChange = props.onHighlightChange,
      onInputChange = props.onInputChange,
      onOpen = props.onOpen,
      openProp = props.open,
      _props$openOnFocus = props.openOnFocus,
      openOnFocus = _props$openOnFocus === void 0 ? false : _props$openOnFocus,
      options = props.options,
      _props$selectOnFocus = props.selectOnFocus,
      selectOnFocus = _props$selectOnFocus === void 0 ? !props.freeSolo : _props$selectOnFocus,
      valueProp = props.value;
  var id = unstable_useId(idProp);
  var getOptionLabel = getOptionLabelProp;

  if (process.env.NODE_ENV !== 'production') {
    getOptionLabel = function getOptionLabel(option) {
      var optionLabel = getOptionLabelProp(option);

      if (typeof optionLabel !== 'string') {
        var erroneousReturn = optionLabel === undefined ? 'undefined' : "".concat(_typeof$1(optionLabel), " (").concat(optionLabel, ")");
        console.error("Material-UI: The `getOptionLabel` method of ".concat(componentName, " returned ").concat(erroneousReturn, " instead of a string for ").concat(JSON.stringify(option), "."));
      }

      return optionLabel;
    };
  }

  var ignoreFocus = React$2.useRef(false);
  var firstFocus = React$2.useRef(true);
  var inputRef = React$2.useRef(null);
  var listboxRef = React$2.useRef(null);

  var _React$useState = React$2.useState(null),
      anchorEl = _React$useState[0],
      setAnchorEl = _React$useState[1];

  var _React$useState2 = React$2.useState(-1),
      focusedTag = _React$useState2[0],
      setFocusedTag = _React$useState2[1];

  var defaultHighlighted = autoHighlight ? 0 : -1;
  var highlightedIndexRef = React$2.useRef(defaultHighlighted);

  var _useControlled = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: componentName
  }),
      _useControlled2 = _slicedToArray(_useControlled, 2),
      value = _useControlled2[0],
      setValue = _useControlled2[1];

  var _useControlled3 = useControlled({
    controlled: inputValueProp,
    default: '',
    name: componentName,
    state: 'inputValue'
  }),
      _useControlled4 = _slicedToArray(_useControlled3, 2),
      inputValue = _useControlled4[0],
      setInputValue = _useControlled4[1];

  var _React$useState3 = React$2.useState(false),
      focused = _React$useState3[0],
      setFocused = _React$useState3[1];

  var resetInputValue = useEventCallback(function (event, newValue) {
    var newInputValue;

    if (multiple) {
      newInputValue = '';
    } else if (newValue == null) {
      newInputValue = '';
    } else {
      var optionLabel = getOptionLabel(newValue);
      newInputValue = typeof optionLabel === 'string' ? optionLabel : '';
    }

    if (inputValue === newInputValue) {
      return;
    }

    setInputValue(newInputValue);

    if (onInputChange) {
      onInputChange(event, newInputValue, 'reset');
    }
  });
  React$2.useEffect(function () {
    resetInputValue(null, value);
  }, [value, resetInputValue]);

  var _useControlled5 = useControlled({
    controlled: openProp,
    default: false,
    name: componentName,
    state: 'open'
  }),
      _useControlled6 = _slicedToArray(_useControlled5, 2),
      open = _useControlled6[0],
      setOpenState = _useControlled6[1];

  var inputValueIsSelectedValue = !multiple && value != null && inputValue === getOptionLabel(value);
  var popupOpen = open;
  var filteredOptions = popupOpen ? filterOptions(options.filter(function (option) {
    if (filterSelectedOptions && (multiple ? value : [value]).some(function (value2) {
      return value2 !== null && getOptionSelected(option, value2);
    })) {
      return false;
    }

    return true;
  }), // we use the empty string to manipulate `filterOptions` to not filter any options
  // i.e. the filter predicate always returns true
  {
    inputValue: inputValueIsSelectedValue ? '' : inputValue,
    getOptionLabel: getOptionLabel
  }) : [];

  if (process.env.NODE_ENV !== 'production') {
    if (value !== null && !freeSolo && options.length > 0) {
      var missingValue = (multiple ? value : [value]).filter(function (value2) {
        return !options.some(function (option) {
          return getOptionSelected(option, value2);
        });
      });

      if (missingValue.length > 0) {
        console.warn(["Material-UI: The value provided to ".concat(componentName, " is invalid."), "None of the options match with `".concat(missingValue.length > 1 ? JSON.stringify(missingValue) : JSON.stringify(missingValue[0]), "`."), 'You can use the `getOptionSelected` prop to customize the equality test.'].join('\n'));
      }
    }
  }

  var focusTag = useEventCallback(function (tagToFocus) {
    if (tagToFocus === -1) {
      inputRef.current.focus();
    } else {
      anchorEl.querySelector("[data-tag-index=\"".concat(tagToFocus, "\"]")).focus();
    }
  }); // Ensure the focusedTag is never inconsistent

  React$2.useEffect(function () {
    if (multiple && focusedTag > value.length - 1) {
      setFocusedTag(-1);
      focusTag(-1);
    }
  }, [value, multiple, focusedTag, focusTag]);

  function validOptionIndex(index, direction) {
    if (!listboxRef.current || index === -1) {
      return -1;
    }

    var nextFocus = index;

    while (true) {
      // Out of range
      if (direction === 'next' && nextFocus === filteredOptions.length || direction === 'previous' && nextFocus === -1) {
        return -1;
      }

      var option = listboxRef.current.querySelector("[data-option-index=\"".concat(nextFocus, "\"]")); // Same logic as MenuList.js

      var nextFocusDisabled = disabledItemsFocusable ? false : option && (option.disabled || option.getAttribute('aria-disabled') === 'true');

      if (option && !option.hasAttribute('tabindex') || nextFocusDisabled) {
        // Move to the next element.
        nextFocus += direction === 'next' ? 1 : -1;
      } else {
        return nextFocus;
      }
    }
  }

  var setHighlightedIndex = useEventCallback(function (_ref2) {
    var event = _ref2.event,
        index = _ref2.index,
        _ref2$reason = _ref2.reason,
        reason = _ref2$reason === void 0 ? 'auto' : _ref2$reason;
    highlightedIndexRef.current = index; // does the index exist?

    if (index === -1) {
      inputRef.current.removeAttribute('aria-activedescendant');
    } else {
      inputRef.current.setAttribute('aria-activedescendant', "".concat(id, "-option-").concat(index));
    }

    if (onHighlightChange) {
      onHighlightChange(event, index === -1 ? null : filteredOptions[index], reason);
    }

    if (!listboxRef.current) {
      return;
    }

    var prev = listboxRef.current.querySelector('[data-focus]');

    if (prev) {
      prev.removeAttribute('data-focus');
    }

    var listboxNode = listboxRef.current.parentElement.querySelector('[role="listbox"]'); // "No results"

    if (!listboxNode) {
      return;
    }

    if (index === -1) {
      listboxNode.scrollTop = 0;
      return;
    }

    var option = listboxRef.current.querySelector("[data-option-index=\"".concat(index, "\"]"));

    if (!option) {
      return;
    }

    option.setAttribute('data-focus', 'true'); // Scroll active descendant into view.
    // Logic copied from https://www.w3.org/TR/wai-aria-practices/examples/listbox/js/listbox.js
    //
    // Consider this API instead once it has a better browser support:
    // .scrollIntoView({ scrollMode: 'if-needed', block: 'nearest' });

    if (listboxNode.scrollHeight > listboxNode.clientHeight && reason !== 'mouse') {
      var element = option;
      var scrollBottom = listboxNode.clientHeight + listboxNode.scrollTop;
      var elementBottom = element.offsetTop + element.offsetHeight;

      if (elementBottom > scrollBottom) {
        listboxNode.scrollTop = elementBottom - listboxNode.clientHeight;
      } else if (element.offsetTop - element.offsetHeight * (groupBy ? 1.3 : 0) < listboxNode.scrollTop) {
        listboxNode.scrollTop = element.offsetTop - element.offsetHeight * (groupBy ? 1.3 : 0);
      }
    }
  });
  var changeHighlightedIndex = useEventCallback(function (_ref3) {
    var event = _ref3.event,
        diff = _ref3.diff,
        _ref3$direction = _ref3.direction,
        direction = _ref3$direction === void 0 ? 'next' : _ref3$direction,
        _ref3$reason = _ref3.reason,
        reason = _ref3$reason === void 0 ? 'auto' : _ref3$reason;

    if (!popupOpen) {
      return;
    }

    var getNextIndex = function getNextIndex() {
      var maxIndex = filteredOptions.length - 1;

      if (diff === 'reset') {
        return defaultHighlighted;
      }

      if (diff === 'start') {
        return 0;
      }

      if (diff === 'end') {
        return maxIndex;
      }

      var newIndex = highlightedIndexRef.current + diff;

      if (newIndex < 0) {
        if (newIndex === -1 && includeInputInList) {
          return -1;
        }

        if (disableListWrap && highlightedIndexRef.current !== -1 || Math.abs(diff) > 1) {
          return 0;
        }

        return maxIndex;
      }

      if (newIndex > maxIndex) {
        if (newIndex === maxIndex + 1 && includeInputInList) {
          return -1;
        }

        if (disableListWrap || Math.abs(diff) > 1) {
          return maxIndex;
        }

        return 0;
      }

      return newIndex;
    };

    var nextIndex = validOptionIndex(getNextIndex(), direction);
    setHighlightedIndex({
      index: nextIndex,
      reason: reason,
      event: event
    }); // Sync the content of the input with the highlighted option.

    if (autoComplete && diff !== 'reset') {
      if (nextIndex === -1) {
        inputRef.current.value = inputValue;
      } else {
        var option = getOptionLabel(filteredOptions[nextIndex]);
        inputRef.current.value = option; // The portion of the selected suggestion that has not been typed by the user,
        // a completion string, appears inline after the input cursor in the textbox.

        var index = option.toLowerCase().indexOf(inputValue.toLowerCase());

        if (index === 0 && inputValue.length > 0) {
          inputRef.current.setSelectionRange(inputValue.length, option.length);
        }
      }
    }
  });
  var syncHighlightedIndex = React$2.useCallback(function () {
    if (!popupOpen) {
      return;
    }

    var valueItem = multiple ? value[0] : value; // The popup is empty, reset

    if (filteredOptions.length === 0 || valueItem == null) {
      changeHighlightedIndex({
        diff: 'reset'
      });
      return;
    }

    if (!listboxRef.current) {
      return;
    } // Synchronize the value with the highlighted index


    if (!filterSelectedOptions && valueItem != null) {
      var currentOption = filteredOptions[highlightedIndexRef.current]; // Keep the current highlighted index if possible

      if (multiple && currentOption && findIndex$1(value, function (val) {
        return getOptionSelected(currentOption, val);
      }) !== -1) {
        return;
      }

      var itemIndex = findIndex$1(filteredOptions, function (optionItem) {
        return getOptionSelected(optionItem, valueItem);
      });

      if (itemIndex === -1) {
        changeHighlightedIndex({
          diff: 'reset'
        });
      } else {
        setHighlightedIndex({
          index: itemIndex
        });
      }

      return;
    } // Prevent the highlighted index to leak outside the boundaries.


    if (highlightedIndexRef.current >= filteredOptions.length - 1) {
      setHighlightedIndex({
        index: filteredOptions.length - 1
      });
      return;
    } // Restore the focus to the previous index.


    setHighlightedIndex({
      index: highlightedIndexRef.current
    }); // Ignore filteredOptions (and options, getOptionSelected, getOptionLabel) not to break the scroll position
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [// Only sync the highlighted index when the option switch between empty and not
  // eslint-disable-next-line react-hooks/exhaustive-deps
  filteredOptions.length === 0, // Don't sync the highlighted index with the value when multiple
  // eslint-disable-next-line react-hooks/exhaustive-deps
  multiple ? false : value, filterSelectedOptions, changeHighlightedIndex, setHighlightedIndex, popupOpen, inputValue, multiple]);
  var handleListboxRef = useEventCallback(function (node) {
    setRef(listboxRef, node);

    if (!node) {
      return;
    }

    syncHighlightedIndex();
  });
  React$2.useEffect(function () {
    syncHighlightedIndex();
  }, [syncHighlightedIndex]);

  var handleOpen = function handleOpen(event) {
    if (open) {
      return;
    }

    setOpenState(true);

    if (onOpen) {
      onOpen(event);
    }
  };

  var handleClose = function handleClose(event, reason) {
    if (!open) {
      return;
    }

    setOpenState(false);

    if (onClose) {
      onClose(event, reason);
    }
  };

  var handleValue = function handleValue(event, newValue, reason, details) {
    if (value === newValue) {
      return;
    }

    if (onChange) {
      onChange(event, newValue, reason, details);
    }

    setValue(newValue);
  };

  var isTouch = React$2.useRef(false);

  var selectNewValue = function selectNewValue(event, option) {
    var reasonProp = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'select-option';
    var origin = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'options';
    var reason = reasonProp;
    var newValue = option;

    if (multiple) {
      newValue = Array.isArray(value) ? value.slice() : [];

      if (process.env.NODE_ENV !== 'production') {
        var matches = newValue.filter(function (val) {
          return getOptionSelected(option, val);
        });

        if (matches.length > 1) {
          console.error(["Material-UI: The `getOptionSelected` method of ".concat(componentName, " do not handle the arguments correctly."), "The component expects a single value to match a given option but found ".concat(matches.length, " matches.")].join('\n'));
        }
      }

      var itemIndex = findIndex$1(newValue, function (valueItem) {
        return getOptionSelected(option, valueItem);
      });

      if (itemIndex === -1) {
        newValue.push(option);
      } else if (origin !== 'freeSolo') {
        newValue.splice(itemIndex, 1);
        reason = 'remove-option';
      }
    }

    resetInputValue(event, newValue);
    handleValue(event, newValue, reason, {
      option: option
    });

    if (!disableCloseOnSelect) {
      handleClose(event, reason);
    }

    if (blurOnSelect === true || blurOnSelect === 'touch' && isTouch.current || blurOnSelect === 'mouse' && !isTouch.current) {
      inputRef.current.blur();
    }
  };

  function validTagIndex(index, direction) {
    if (index === -1) {
      return -1;
    }

    var nextFocus = index;

    while (true) {
      // Out of range
      if (direction === 'next' && nextFocus === value.length || direction === 'previous' && nextFocus === -1) {
        return -1;
      }

      var option = anchorEl.querySelector("[data-tag-index=\"".concat(nextFocus, "\"]")); // Same logic as MenuList.js

      if (option && (!option.hasAttribute('tabindex') || option.disabled || option.getAttribute('aria-disabled') === 'true')) {
        nextFocus += direction === 'next' ? 1 : -1;
      } else {
        return nextFocus;
      }
    }
  }

  var handleFocusTag = function handleFocusTag(event, direction) {
    if (!multiple) {
      return;
    }

    handleClose(event, 'toggleInput');
    var nextTag = focusedTag;

    if (focusedTag === -1) {
      if (inputValue === '' && direction === 'previous') {
        nextTag = value.length - 1;
      }
    } else {
      nextTag += direction === 'next' ? 1 : -1;

      if (nextTag < 0) {
        nextTag = 0;
      }

      if (nextTag === value.length) {
        nextTag = -1;
      }
    }

    nextTag = validTagIndex(nextTag, direction);
    setFocusedTag(nextTag);
    focusTag(nextTag);
  };

  var handleClear = function handleClear(event) {
    ignoreFocus.current = true;
    setInputValue('');

    if (onInputChange) {
      onInputChange(event, '', 'clear');
    }

    handleValue(event, multiple ? [] : null, 'clear');
  };

  var handleKeyDown = function handleKeyDown(other) {
    return function (event) {
      if (focusedTag !== -1 && ['ArrowLeft', 'ArrowRight'].indexOf(event.key) === -1) {
        setFocusedTag(-1);
        focusTag(-1);
      }

      switch (event.key) {
        case 'Home':
          if (popupOpen && handleHomeEndKeys) {
            // Prevent scroll of the page
            event.preventDefault();
            changeHighlightedIndex({
              diff: 'start',
              direction: 'next',
              reason: 'keyboard',
              event: event
            });
          }

          break;

        case 'End':
          if (popupOpen && handleHomeEndKeys) {
            // Prevent scroll of the page
            event.preventDefault();
            changeHighlightedIndex({
              diff: 'end',
              direction: 'previous',
              reason: 'keyboard',
              event: event
            });
          }

          break;

        case 'PageUp':
          // Prevent scroll of the page
          event.preventDefault();
          changeHighlightedIndex({
            diff: -pageSize,
            direction: 'previous',
            reason: 'keyboard',
            event: event
          });
          handleOpen(event);
          break;

        case 'PageDown':
          // Prevent scroll of the page
          event.preventDefault();
          changeHighlightedIndex({
            diff: pageSize,
            direction: 'next',
            reason: 'keyboard',
            event: event
          });
          handleOpen(event);
          break;

        case 'ArrowDown':
          // Prevent cursor move
          event.preventDefault();
          changeHighlightedIndex({
            diff: 1,
            direction: 'next',
            reason: 'keyboard',
            event: event
          });
          handleOpen(event);
          break;

        case 'ArrowUp':
          // Prevent cursor move
          event.preventDefault();
          changeHighlightedIndex({
            diff: -1,
            direction: 'previous',
            reason: 'keyboard',
            event: event
          });
          handleOpen(event);
          break;

        case 'ArrowLeft':
          handleFocusTag(event, 'previous');
          break;

        case 'ArrowRight':
          handleFocusTag(event, 'next');
          break;

        case 'Enter':
          // Wait until IME is settled.
          if (event.which === 229) {
            break;
          }

          if (highlightedIndexRef.current !== -1 && popupOpen) {
            var option = filteredOptions[highlightedIndexRef.current];
            var disabled = getOptionDisabled ? getOptionDisabled(option) : false; // We don't want to validate the form.

            event.preventDefault();

            if (disabled) {
              return;
            }

            selectNewValue(event, option, 'select-option'); // Move the selection to the end.

            if (autoComplete) {
              inputRef.current.setSelectionRange(inputRef.current.value.length, inputRef.current.value.length);
            }
          } else if (freeSolo && inputValue !== '' && inputValueIsSelectedValue === false) {
            if (multiple) {
              // Allow people to add new values before they submit the form.
              event.preventDefault();
            }

            selectNewValue(event, inputValue, 'create-option', 'freeSolo');
          }

          break;

        case 'Escape':
          if (popupOpen) {
            // Avoid Opera to exit fullscreen mode.
            event.preventDefault(); // Avoid the Modal to handle the event.

            event.stopPropagation();
            handleClose(event, 'escape');
          } else if (clearOnEscape && (inputValue !== '' || multiple && value.length > 0)) {
            // Avoid Opera to exit fullscreen mode.
            event.preventDefault(); // Avoid the Modal to handle the event.

            event.stopPropagation();
            handleClear(event);
          }

          break;

        case 'Backspace':
          if (multiple && inputValue === '' && value.length > 0) {
            var index = focusedTag === -1 ? value.length - 1 : focusedTag;
            var newValue = value.slice();
            newValue.splice(index, 1);
            handleValue(event, newValue, 'remove-option', {
              option: value[index]
            });
          }

          break;
      }

      if (other.onKeyDown) {
        other.onKeyDown(event);
      }
    };
  };

  var handleFocus = function handleFocus(event) {
    setFocused(true);

    if (openOnFocus && !ignoreFocus.current) {
      handleOpen(event);
    }
  };

  var handleBlur = function handleBlur(event) {
    // Ignore the event when using the scrollbar with IE 11
    if (listboxRef.current !== null && document.activeElement === listboxRef.current.parentElement) {
      inputRef.current.focus();
      return;
    }

    setFocused(false);
    firstFocus.current = true;
    ignoreFocus.current = false;

    if (debug && inputValue !== '') {
      return;
    }

    if (autoSelect && highlightedIndexRef.current !== -1 && popupOpen) {
      selectNewValue(event, filteredOptions[highlightedIndexRef.current], 'blur');
    } else if (autoSelect && freeSolo && inputValue !== '') {
      selectNewValue(event, inputValue, 'blur', 'freeSolo');
    } else if (clearOnBlur) {
      resetInputValue(event, value);
    }

    handleClose(event, 'blur');
  };

  var handleInputChange = function handleInputChange(event) {
    var newValue = event.target.value;

    if (inputValue !== newValue) {
      setInputValue(newValue);

      if (onInputChange) {
        onInputChange(event, newValue, 'input');
      }
    }

    if (newValue === '') {
      if (!disableClearable && !multiple) {
        handleValue(event, null, 'clear');
      }
    } else {
      handleOpen(event);
    }
  };

  var handleOptionMouseOver = function handleOptionMouseOver(event) {
    setHighlightedIndex({
      event: event,
      index: Number(event.currentTarget.getAttribute('data-option-index')),
      reason: 'mouse'
    });
  };

  var handleOptionTouchStart = function handleOptionTouchStart() {
    isTouch.current = true;
  };

  var handleOptionClick = function handleOptionClick(event) {
    var index = Number(event.currentTarget.getAttribute('data-option-index'));
    selectNewValue(event, filteredOptions[index], 'select-option');
    isTouch.current = false;
  };

  var handleTagDelete = function handleTagDelete(index) {
    return function (event) {
      var newValue = value.slice();
      newValue.splice(index, 1);
      handleValue(event, newValue, 'remove-option', {
        option: value[index]
      });
    };
  };

  var handlePopupIndicator = function handlePopupIndicator(event) {
    if (open) {
      handleClose(event, 'toggleInput');
    } else {
      handleOpen(event);
    }
  }; // Prevent input blur when interacting with the combobox


  var handleMouseDown = function handleMouseDown(event) {
    if (event.target.getAttribute('id') !== id) {
      event.preventDefault();
    }
  }; // Focus the input when interacting with the combobox


  var handleClick = function handleClick() {
    inputRef.current.focus();

    if (selectOnFocus && firstFocus.current && inputRef.current.selectionEnd - inputRef.current.selectionStart === 0) {
      inputRef.current.select();
    }

    firstFocus.current = false;
  };

  var handleInputMouseDown = function handleInputMouseDown(event) {
    if (inputValue === '' || !open) {
      handlePopupIndicator(event);
    }
  };

  var dirty = freeSolo && inputValue.length > 0;
  dirty = dirty || (multiple ? value.length > 0 : value !== null);
  var groupedOptions = filteredOptions;

  if (groupBy) {
    // used to keep track of key and indexes in the result array
    var indexBy = new Map();
    var warn = false;
    groupedOptions = filteredOptions.reduce(function (acc, option, index) {
      var group = groupBy(option);

      if (acc.length > 0 && acc[acc.length - 1].group === group) {
        acc[acc.length - 1].options.push(option);
      } else {
        if (process.env.NODE_ENV !== 'production') {
          if (indexBy.get(group) && !warn) {
            console.warn("Material-UI: The options provided combined with the `groupBy` method of ".concat(componentName, " returns duplicated headers."), 'You can solve the issue by sorting the options with the output of `groupBy`.');
            warn = true;
          }

          indexBy.set(group, true);
        }

        acc.push({
          key: index,
          index: index,
          group: group,
          options: [option]
        });
      }

      return acc;
    }, []);
  }

  return {
    getRootProps: function getRootProps() {
      var other = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return _extends$5({
        'aria-owns': popupOpen ? "".concat(id, "-popup") : null,
        role: 'combobox',
        'aria-expanded': popupOpen
      }, other, {
        onKeyDown: handleKeyDown(other),
        onMouseDown: handleMouseDown,
        onClick: handleClick
      });
    },
    getInputLabelProps: function getInputLabelProps() {
      return {
        id: "".concat(id, "-label"),
        htmlFor: id
      };
    },
    getInputProps: function getInputProps() {
      return {
        id: id,
        value: inputValue,
        onBlur: handleBlur,
        onFocus: handleFocus,
        onChange: handleInputChange,
        onMouseDown: handleInputMouseDown,
        // if open then this is handled imperativeley so don't let react override
        // only have an opinion about this when closed
        'aria-activedescendant': popupOpen ? '' : null,
        'aria-autocomplete': autoComplete ? 'both' : 'list',
        'aria-controls': popupOpen ? "".concat(id, "-popup") : null,
        // Disable browser's suggestion that might overlap with the popup.
        // Handle autocomplete but not autofill.
        autoComplete: 'off',
        ref: inputRef,
        autoCapitalize: 'none',
        spellCheck: 'false'
      };
    },
    getClearProps: function getClearProps() {
      return {
        tabIndex: -1,
        onClick: handleClear
      };
    },
    getPopupIndicatorProps: function getPopupIndicatorProps() {
      return {
        tabIndex: -1,
        onClick: handlePopupIndicator
      };
    },
    getTagProps: function getTagProps(_ref4) {
      var index = _ref4.index;
      return {
        key: index,
        'data-tag-index': index,
        tabIndex: -1,
        onDelete: handleTagDelete(index)
      };
    },
    getListboxProps: function getListboxProps() {
      return {
        role: 'listbox',
        id: "".concat(id, "-popup"),
        'aria-labelledby': "".concat(id, "-label"),
        ref: handleListboxRef,
        onMouseDown: function onMouseDown(event) {
          // Prevent blur
          event.preventDefault();
        }
      };
    },
    getOptionProps: function getOptionProps(_ref5) {
      var index = _ref5.index,
          option = _ref5.option;
      var selected = (multiple ? value : [value]).some(function (value2) {
        return value2 != null && getOptionSelected(option, value2);
      });
      var disabled = getOptionDisabled ? getOptionDisabled(option) : false;
      return {
        key: index,
        tabIndex: -1,
        role: 'option',
        id: "".concat(id, "-option-").concat(index),
        onMouseOver: handleOptionMouseOver,
        onClick: handleOptionClick,
        onTouchStart: handleOptionTouchStart,
        'data-option-index': index,
        'aria-disabled': disabled,
        'aria-selected': selected
      };
    },
    id: id,
    inputValue: inputValue,
    value: value,
    dirty: dirty,
    popupOpen: popupOpen,
    focused: focused || focusedTag !== -1,
    anchorEl: anchorEl,
    setAnchorEl: setAnchorEl,
    focusedTag: focusedTag,
    groupedOptions: groupedOptions
  };
}

var styles = function styles(theme) {
  var _option;

  return {
    /* Styles applied to the root element. */
    root: {
      '&$focused $clearIndicatorDirty': {
        visibility: 'visible'
      },

      /* Avoid double tap issue on iOS */
      '@media (pointer: fine)': {
        '&:hover $clearIndicatorDirty': {
          visibility: 'visible'
        }
      }
    },

    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {
      width: '100%'
    },

    /* Pseudo-class applied to the root element if focused. */
    focused: {},

    /* Styles applied to the tag elements, e.g. the chips. */
    tag: {
      margin: 3,
      maxWidth: 'calc(100% - 6px)'
    },

    /* Styles applied to the tag elements, e.g. the chips if `size="small"`. */
    tagSizeSmall: {
      margin: 2,
      maxWidth: 'calc(100% - 4px)'
    },

    /* Styles applied when the popup icon is rendered. */
    hasPopupIcon: {},

    /* Styles applied when the clear icon is rendered. */
    hasClearIcon: {},

    /* Styles applied to the Input element. */
    inputRoot: {
      flexWrap: 'wrap',
      '$hasPopupIcon &, $hasClearIcon &': {
        paddingRight: 26 + 4
      },
      '$hasPopupIcon$hasClearIcon &': {
        paddingRight: 52 + 4
      },
      '& $input': {
        width: 0,
        minWidth: 30
      },
      '&[class*="MuiInput-root"]': {
        paddingBottom: 1,
        '& $input': {
          padding: 4
        },
        '& $input:first-child': {
          padding: '6px 0'
        }
      },
      '&[class*="MuiInput-root"][class*="MuiInput-marginDense"]': {
        '& $input': {
          padding: '4px 4px 5px'
        },
        '& $input:first-child': {
          padding: '3px 0 6px'
        }
      },
      '&[class*="MuiOutlinedInput-root"]': {
        padding: 9,
        '$hasPopupIcon &, $hasClearIcon &': {
          paddingRight: 26 + 4 + 9
        },
        '$hasPopupIcon$hasClearIcon &': {
          paddingRight: 52 + 4 + 9
        },
        '& $input': {
          padding: '9.5px 4px'
        },
        '& $input:first-child': {
          paddingLeft: 6
        },
        '& $endAdornment': {
          right: 9
        }
      },
      '&[class*="MuiOutlinedInput-root"][class*="MuiOutlinedInput-marginDense"]': {
        padding: 6,
        '& $input': {
          padding: '4.5px 4px'
        }
      },
      '&[class*="MuiFilledInput-root"]': {
        paddingTop: 19,
        paddingLeft: 8,
        '$hasPopupIcon &, $hasClearIcon &': {
          paddingRight: 26 + 4 + 9
        },
        '$hasPopupIcon$hasClearIcon &': {
          paddingRight: 52 + 4 + 9
        },
        '& $input': {
          padding: '9px 4px'
        },
        '& $endAdornment': {
          right: 9
        }
      },
      '&[class*="MuiFilledInput-root"][class*="MuiFilledInput-marginDense"]': {
        paddingBottom: 1,
        '& $input': {
          padding: '4.5px 4px'
        }
      }
    },

    /* Styles applied to the input element. */
    input: {
      flexGrow: 1,
      textOverflow: 'ellipsis',
      opacity: 0
    },

    /* Styles applied to the input element if tag focused. */
    inputFocused: {
      opacity: 1
    },

    /* Styles applied to the endAdornment element. */
    endAdornment: {
      // We use a position absolute to support wrapping tags.
      position: 'absolute',
      right: 0,
      top: 'calc(50% - 14px)' // Center vertically

    },

    /* Styles applied to the clear indicator. */
    clearIndicator: {
      marginRight: -2,
      padding: 4,
      visibility: 'hidden'
    },

    /* Styles applied to the clear indicator if the input is dirty. */
    clearIndicatorDirty: {},

    /* Styles applied to the popup indicator. */
    popupIndicator: {
      padding: 2,
      marginRight: -2
    },

    /* Styles applied to the popup indicator if the popup is open. */
    popupIndicatorOpen: {
      transform: 'rotate(180deg)'
    },

    /* Styles applied to the popper element. */
    popper: {
      zIndex: theme.zIndex.modal
    },

    /* Styles applied to the popper element if `disablePortal={true}`. */
    popperDisablePortal: {
      position: 'absolute'
    },

    /* Styles applied to the `Paper` component. */
    paper: _extends$5({}, theme.typography.body1, {
      overflow: 'hidden',
      margin: '4px 0'
    }),

    /* Styles applied to the `listbox` component. */
    listbox: {
      listStyle: 'none',
      margin: 0,
      padding: '8px 0',
      maxHeight: '40vh',
      overflow: 'auto'
    },

    /* Styles applied to the loading wrapper. */
    loading: {
      color: theme.palette.text.secondary,
      padding: '14px 16px'
    },

    /* Styles applied to the no option wrapper. */
    noOptions: {
      color: theme.palette.text.secondary,
      padding: '14px 16px'
    },

    /* Styles applied to the option elements. */
    option: (_option = {
      minHeight: 48,
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      cursor: 'pointer',
      paddingTop: 6,
      boxSizing: 'border-box',
      outline: '0',
      WebkitTapHighlightColor: 'transparent',
      paddingBottom: 6,
      paddingLeft: 16,
      paddingRight: 16
    }, _defineProperty(_option, theme.breakpoints.up('sm'), {
      minHeight: 'auto'
    }), _defineProperty(_option, '&[aria-selected="true"]', {
      backgroundColor: theme.palette.action.selected
    }), _defineProperty(_option, '&[data-focus="true"]', {
      backgroundColor: theme.palette.action.hover
    }), _defineProperty(_option, '&:active', {
      backgroundColor: theme.palette.action.selected
    }), _defineProperty(_option, '&[aria-disabled="true"]', {
      opacity: theme.palette.action.disabledOpacity,
      pointerEvents: 'none'
    }), _option),

    /* Styles applied to the group's label elements. */
    groupLabel: {
      backgroundColor: theme.palette.background.paper,
      top: -8
    },

    /* Styles applied to the group's ul elements. */
    groupUl: {
      padding: 0,
      '& $option': {
        paddingLeft: 24
      }
    }
  };
};

function DisablePortal(props) {
  // eslint-disable-next-line react/prop-types
  props.anchorEl;
      props.open;
      var other = _objectWithoutProperties$4(props, ["anchorEl", "open"]);

  return /*#__PURE__*/React$2.createElement("div", other);
}

var _ref = /*#__PURE__*/React$2.createElement(CloseIcon, {
  fontSize: "small"
});

var _ref2 = /*#__PURE__*/React$2.createElement(ArrowDropDownIcon, null);

var Autocomplete = /*#__PURE__*/React$2.forwardRef(function Autocomplete(props, ref) {
  /* eslint-disable no-unused-vars */
  props.autoComplete;
      props.autoHighlight;
      props.autoSelect;
      props.blurOnSelect;
      var ChipProps = props.ChipProps,
      classes = props.classes,
      className = props.className,
      _props$clearOnBlur = props.clearOnBlur;
      _props$clearOnBlur === void 0 ? !props.freeSolo : _props$clearOnBlur;
      props.clearOnEscape;
      var _props$clearText = props.clearText,
      clearText = _props$clearText === void 0 ? 'Clear' : _props$clearText,
      _props$closeIcon = props.closeIcon,
      closeIcon = _props$closeIcon === void 0 ? _ref : _props$closeIcon,
      _props$closeText = props.closeText,
      closeText = _props$closeText === void 0 ? 'Close' : _props$closeText;
      props.debug;
      var _props$defaultValue = props.defaultValue;
      _props$defaultValue === void 0 ? props.multiple ? [] : null : _props$defaultValue;
      var _props$disableClearab = props.disableClearable,
      disableClearable = _props$disableClearab === void 0 ? false : _props$disableClearab;
      props.disableCloseOnSelect;
      var _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled;
      props.disabledItemsFocusable;
      props.disableListWrap;
      var _props$disablePortal = props.disablePortal,
      disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal;
      props.filterOptions;
      props.filterSelectedOptions;
      var _props$forcePopupIcon = props.forcePopupIcon,
      forcePopupIcon = _props$forcePopupIcon === void 0 ? 'auto' : _props$forcePopupIcon,
      _props$freeSolo = props.freeSolo,
      freeSolo = _props$freeSolo === void 0 ? false : _props$freeSolo,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      _props$getLimitTagsTe = props.getLimitTagsText,
      getLimitTagsText = _props$getLimitTagsTe === void 0 ? function (more) {
    return "+".concat(more);
  } : _props$getLimitTagsTe;
      props.getOptionDisabled;
      var _props$getOptionLabel = props.getOptionLabel,
      getOptionLabel = _props$getOptionLabel === void 0 ? function (x) {
    return x;
  } : _props$getOptionLabel;
      props.getOptionSelected;
      var groupBy = props.groupBy,
      _props$handleHomeEndK = props.handleHomeEndKeys;
      _props$handleHomeEndK === void 0 ? !props.freeSolo : _props$handleHomeEndK;
      props.id;
      props.includeInputInList;
      props.inputValue;
      var _props$limitTags = props.limitTags,
      limitTags = _props$limitTags === void 0 ? -1 : _props$limitTags,
      _props$ListboxCompone = props.ListboxComponent,
      ListboxComponent = _props$ListboxCompone === void 0 ? 'ul' : _props$ListboxCompone,
      ListboxProps = props.ListboxProps,
      _props$loading = props.loading,
      loading = _props$loading === void 0 ? false : _props$loading,
      _props$loadingText = props.loadingText,
      loadingText = _props$loadingText === void 0 ? 'Loading…' : _props$loadingText,
      _props$multiple = props.multiple,
      multiple = _props$multiple === void 0 ? false : _props$multiple,
      _props$noOptionsText = props.noOptionsText,
      noOptionsText = _props$noOptionsText === void 0 ? 'No options' : _props$noOptionsText;
      props.onChange;
      props.onClose;
      props.onHighlightChange;
      props.onInputChange;
      props.onOpen;
      props.open;
      props.openOnFocus;
      var _props$openText = props.openText,
      openText = _props$openText === void 0 ? 'Open' : _props$openText;
      props.options;
      var _props$PaperComponent = props.PaperComponent,
      PaperComponent = _props$PaperComponent === void 0 ? Paper : _props$PaperComponent,
      _props$PopperComponen = props.PopperComponent,
      PopperComponentProp = _props$PopperComponen === void 0 ? Popper$3 : _props$PopperComponen,
      _props$popupIcon = props.popupIcon,
      popupIcon = _props$popupIcon === void 0 ? _ref2 : _props$popupIcon,
      renderGroupProp = props.renderGroup,
      renderInput = props.renderInput,
      renderOptionProp = props.renderOption,
      renderTags = props.renderTags,
      _props$selectOnFocus = props.selectOnFocus;
      _props$selectOnFocus === void 0 ? !props.freeSolo : _props$selectOnFocus;
      var _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size;
      props.value;
      var other = _objectWithoutProperties$4(props, ["autoComplete", "autoHighlight", "autoSelect", "blurOnSelect", "ChipProps", "classes", "className", "clearOnBlur", "clearOnEscape", "clearText", "closeIcon", "closeText", "debug", "defaultValue", "disableClearable", "disableCloseOnSelect", "disabled", "disabledItemsFocusable", "disableListWrap", "disablePortal", "filterOptions", "filterSelectedOptions", "forcePopupIcon", "freeSolo", "fullWidth", "getLimitTagsText", "getOptionDisabled", "getOptionLabel", "getOptionSelected", "groupBy", "handleHomeEndKeys", "id", "includeInputInList", "inputValue", "limitTags", "ListboxComponent", "ListboxProps", "loading", "loadingText", "multiple", "noOptionsText", "onChange", "onClose", "onHighlightChange", "onInputChange", "onOpen", "open", "openOnFocus", "openText", "options", "PaperComponent", "PopperComponent", "popupIcon", "renderGroup", "renderInput", "renderOption", "renderTags", "selectOnFocus", "size", "value"]);
  /* eslint-enable no-unused-vars */


  var PopperComponent = disablePortal ? DisablePortal : PopperComponentProp;

  var _useAutocomplete = useAutocomplete(_extends$5({}, props, {
    componentName: 'Autocomplete'
  })),
      getRootProps = _useAutocomplete.getRootProps,
      getInputProps = _useAutocomplete.getInputProps,
      getInputLabelProps = _useAutocomplete.getInputLabelProps,
      getPopupIndicatorProps = _useAutocomplete.getPopupIndicatorProps,
      getClearProps = _useAutocomplete.getClearProps,
      getTagProps = _useAutocomplete.getTagProps,
      getListboxProps = _useAutocomplete.getListboxProps,
      getOptionProps = _useAutocomplete.getOptionProps,
      value = _useAutocomplete.value,
      dirty = _useAutocomplete.dirty,
      id = _useAutocomplete.id,
      popupOpen = _useAutocomplete.popupOpen,
      focused = _useAutocomplete.focused,
      focusedTag = _useAutocomplete.focusedTag,
      anchorEl = _useAutocomplete.anchorEl,
      setAnchorEl = _useAutocomplete.setAnchorEl,
      inputValue = _useAutocomplete.inputValue,
      groupedOptions = _useAutocomplete.groupedOptions;

  var startAdornment;

  if (multiple && value.length > 0) {
    var getCustomizedTagProps = function getCustomizedTagProps(params) {
      return _extends$5({
        className: clsx(classes.tag, size === 'small' && classes.tagSizeSmall),
        disabled: disabled
      }, getTagProps(params));
    };

    if (renderTags) {
      startAdornment = renderTags(value, getCustomizedTagProps);
    } else {
      startAdornment = value.map(function (option, index) {
        return /*#__PURE__*/React$2.createElement(Chip, _extends$5({
          label: getOptionLabel(option),
          size: size
        }, getCustomizedTagProps({
          index: index
        }), ChipProps));
      });
    }
  }

  if (limitTags > -1 && Array.isArray(startAdornment)) {
    var more = startAdornment.length - limitTags;

    if (!focused && more > 0) {
      startAdornment = startAdornment.splice(0, limitTags);
      startAdornment.push( /*#__PURE__*/React$2.createElement("span", {
        className: classes.tag,
        key: startAdornment.length
      }, getLimitTagsText(more)));
    }
  }

  var defaultRenderGroup = function defaultRenderGroup(params) {
    return /*#__PURE__*/React$2.createElement("li", {
      key: params.key
    }, /*#__PURE__*/React$2.createElement(ListSubheader$1, {
      className: classes.groupLabel,
      component: "div"
    }, params.group), /*#__PURE__*/React$2.createElement("ul", {
      className: classes.groupUl
    }, params.children));
  };

  var renderGroup = renderGroupProp || defaultRenderGroup;
  var renderOption = renderOptionProp || getOptionLabel;

  var renderListOption = function renderListOption(option, index) {
    var optionProps = getOptionProps({
      option: option,
      index: index
    });
    return /*#__PURE__*/React$2.createElement("li", _extends$5({}, optionProps, {
      className: classes.option
    }), renderOption(option, {
      selected: optionProps['aria-selected'],
      inputValue: inputValue
    }));
  };

  var hasClearIcon = !disableClearable && !disabled;
  var hasPopupIcon = (!freeSolo || forcePopupIcon === true) && forcePopupIcon !== false;
  return /*#__PURE__*/React$2.createElement(React$2.Fragment, null, /*#__PURE__*/React$2.createElement("div", _extends$5({
    ref: ref,
    className: clsx(classes.root, className, focused && classes.focused, fullWidth && classes.fullWidth, hasClearIcon && classes.hasClearIcon, hasPopupIcon && classes.hasPopupIcon)
  }, getRootProps(other)), renderInput({
    id: id,
    disabled: disabled,
    fullWidth: true,
    size: size === 'small' ? 'small' : undefined,
    InputLabelProps: getInputLabelProps(),
    InputProps: {
      ref: setAnchorEl,
      className: classes.inputRoot,
      startAdornment: startAdornment,
      endAdornment: /*#__PURE__*/React$2.createElement("div", {
        className: classes.endAdornment
      }, hasClearIcon ? /*#__PURE__*/React$2.createElement(IconButton$1, _extends$5({}, getClearProps(), {
        "aria-label": clearText,
        title: clearText,
        className: clsx(classes.clearIndicator, dirty && classes.clearIndicatorDirty)
      }), closeIcon) : null, hasPopupIcon ? /*#__PURE__*/React$2.createElement(IconButton$1, _extends$5({}, getPopupIndicatorProps(), {
        disabled: disabled,
        "aria-label": popupOpen ? closeText : openText,
        title: popupOpen ? closeText : openText,
        className: clsx(classes.popupIndicator, popupOpen && classes.popupIndicatorOpen)
      }), popupIcon) : null)
    },
    inputProps: _extends$5({
      className: clsx(classes.input, focusedTag === -1 && classes.inputFocused),
      disabled: disabled
    }, getInputProps())
  })), popupOpen && anchorEl ? /*#__PURE__*/React$2.createElement(PopperComponent, {
    className: clsx(classes.popper, disablePortal && classes.popperDisablePortal),
    style: {
      width: anchorEl ? anchorEl.clientWidth : null
    },
    role: "presentation",
    anchorEl: anchorEl,
    open: true
  }, /*#__PURE__*/React$2.createElement(PaperComponent, {
    className: classes.paper
  }, loading && groupedOptions.length === 0 ? /*#__PURE__*/React$2.createElement("div", {
    className: classes.loading
  }, loadingText) : null, groupedOptions.length === 0 && !freeSolo && !loading ? /*#__PURE__*/React$2.createElement("div", {
    className: classes.noOptions
  }, noOptionsText) : null, groupedOptions.length > 0 ? /*#__PURE__*/React$2.createElement(ListboxComponent, _extends$5({
    className: classes.listbox
  }, getListboxProps(), ListboxProps), groupedOptions.map(function (option, index) {
    if (groupBy) {
      return renderGroup({
        key: option.key,
        group: option.group,
        children: option.options.map(function (option2, index2) {
          return renderListOption(option2, option.index + index2);
        })
      });
    }

    return renderListOption(option, index);
  })) : null)) : null);
});
process.env.NODE_ENV !== "production" ? Autocomplete.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * If `true`, the portion of the selected suggestion that has not been typed by the user,
   * known as the completion string, appears inline after the input cursor in the textbox.
   * The inline completion string is visually highlighted and has a selected state.
   */
  autoComplete: PropTypes.bool,

  /**
   * If `true`, the first option is automatically highlighted.
   */
  autoHighlight: PropTypes.bool,

  /**
   * If `true`, the selected option becomes the value of the input
   * when the Autocomplete loses focus unless the user chooses
   * a different option or changes the character string in the input.
   */
  autoSelect: PropTypes.bool,

  /**
   * Control if the input should be blurred when an option is selected:
   *
   * - `false` the input is not blurred.
   * - `true` the input is always blurred.
   * - `touch` the input is blurred after a touch event.
   * - `mouse` the input is blurred after a mouse event.
   */
  blurOnSelect: PropTypes.oneOfType([PropTypes.oneOf(['mouse', 'touch']), PropTypes.bool]),

  /**
   * Props applied to the [`Chip`](/api/chip/) element.
   */
  ChipProps: PropTypes.object,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes.object,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * If `true`, the input's text will be cleared on blur if no value is selected.
   *
   * Set to `true` if you want to help the user enter a new value.
   * Set to `false` if you want to help the user resume his search.
   */
  clearOnBlur: PropTypes.bool,

  /**
   * If `true`, clear all values when the user presses escape and the popup is closed.
   */
  clearOnEscape: PropTypes.bool,

  /**
   * Override the default text for the *clear* icon button.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   */
  clearText: PropTypes.string,

  /**
   * The icon to display in place of the default close icon.
   */
  closeIcon: PropTypes.node,

  /**
   * Override the default text for the *close popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   */
  closeText: PropTypes.string,

  /**
   * If `true`, the popup will ignore the blur event if the input is filled.
   * You can inspect the popup markup with your browser tools.
   * Consider this option when you need to customize the component.
   */
  debug: PropTypes.bool,

  /**
   * The default input value. Use when the component is not controlled.
   */
  defaultValue: PropTypes.any,

  /**
   * If `true`, the input can't be cleared.
   */
  disableClearable: PropTypes
  /* @typescript-to-proptypes-ignore */
  .bool,

  /**
   * If `true`, the popup won't close when a value is selected.
   */
  disableCloseOnSelect: PropTypes.bool,

  /**
   * If `true`, the input will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * If `true`, will allow focus on disabled items.
   */
  disabledItemsFocusable: PropTypes.bool,

  /**
   * If `true`, the list box in the popup will not wrap focus.
   */
  disableListWrap: PropTypes.bool,

  /**
   * Disable the portal behavior.
   * The children stay within it's parent DOM hierarchy.
   */
  disablePortal: PropTypes.bool,

  /**
   * A filter function that determines the options that are eligible.
   *
   * @param {T[]} options The options to render.
   * @param {object} state The state of the component.
   * @returns {T[]}
   */
  filterOptions: PropTypes.func,

  /**
   * If `true`, hide the selected options from the list box.
   */
  filterSelectedOptions: PropTypes.bool,

  /**
   * Force the visibility display of the popup icon.
   */
  forcePopupIcon: PropTypes.oneOfType([PropTypes.oneOf(['auto']), PropTypes.bool]),

  /**
   * If `true`, the Autocomplete is free solo, meaning that the user input is not bound to provided options.
   */
  freeSolo: PropTypes
  /* @typescript-to-proptypes-ignore */
  .bool,

  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,

  /**
   * The label to display when the tags are truncated (`limitTags`).
   *
   * @param {number} more The number of truncated tags.
   * @returns {ReactNode}
   */
  getLimitTagsText: PropTypes.func,

  /**
   * Used to determine the disabled state for a given option.
   *
   * @param {T} option The option to test.
   * @returns {boolean}
   */
  getOptionDisabled: PropTypes.func,

  /**
   * Used to determine the string value for a given option.
   * It's used to fill the input (and the list box options if `renderOption` is not provided).
   *
   * @param {T} option
   * @returns {string}
   */
  getOptionLabel: PropTypes.func,

  /**
   * Used to determine if an option is selected, considering the current value.
   * Uses strict equality by default.
   *
   * @param {T} option The option to test.
   * @param {T} value The value to test against.
   * @returns {boolean}
   */
  getOptionSelected: PropTypes.func,

  /**
   * If provided, the options will be grouped under the returned string.
   * The groupBy value is also used as the text for group headings when `renderGroup` is not provided.
   *
   * @param {T} options The options to group.
   * @returns {string}
   */
  groupBy: PropTypes.func,

  /**
   * If `true`, the component handles the "Home" and "End" keys when the popup is open.
   * It should move focus to the first option and last option, respectively.
   */
  handleHomeEndKeys: PropTypes.bool,

  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide this prop. It falls back to a randomly generated id.
   */
  id: PropTypes.string,

  /**
   * If `true`, the highlight can move to the input.
   */
  includeInputInList: PropTypes.bool,

  /**
   * The input value.
   */
  inputValue: PropTypes.string,

  /**
   * The maximum number of tags that will be visible when not focused.
   * Set `-1` to disable the limit.
   */
  limitTags: PropTypes.number,

  /**
   * The component used to render the listbox.
   */
  ListboxComponent: PropTypes.elementType,

  /**
   * Props applied to the Listbox element.
   */
  ListboxProps: PropTypes.object,

  /**
   * If `true`, the component is in a loading state.
   */
  loading: PropTypes.bool,

  /**
   * Text to display when in a loading state.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   */
  loadingText: PropTypes.node,

  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: PropTypes
  /* @typescript-to-proptypes-ignore */
  .bool,

  /**
   * Text to display when there are no options.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   */
  noOptionsText: PropTypes.node,

  /**
   * Callback fired when the value changes.
   *
   * @param {object} event The event source of the callback.
   * @param {T|T[]} value The new value of the component.
   * @param {string} reason One of "create-option", "select-option", "remove-option", "blur" or "clear".
   */
  onChange: PropTypes.func,

  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"toggleInput"`, `"escape"`, `"select-option"`, `"blur"`.
   */
  onClose: PropTypes.func,

  /**
   * Callback fired when the highlight option changes.
   *
   * @param {object} event The event source of the callback.
   * @param {T} option The highlighted option.
   * @param {string} reason Can be: `"keyboard"`, `"auto"`, `"mouse"`.
   */
  onHighlightChange: PropTypes.func,

  /**
   * Callback fired when the input value changes.
   *
   * @param {object} event The event source of the callback.
   * @param {string} value The new value of the text input.
   * @param {string} reason Can be: `"input"` (user input), `"reset"` (programmatic change), `"clear"`.
   */
  onInputChange: PropTypes.func,

  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: PropTypes.func,

  /**
   * Control the popup` open state.
   */
  open: PropTypes.bool,

  /**
   * If `true`, the popup will open on input focus.
   */
  openOnFocus: PropTypes.bool,

  /**
   * Override the default text for the *open popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   */
  openText: PropTypes.string,

  /**
   * Array of options.
   */
  options: PropTypes.array.isRequired,

  /**
   * The component used to render the body of the popup.
   */
  PaperComponent: PropTypes.elementType,

  /**
   * The component used to position the popup.
   */
  PopperComponent: PropTypes.elementType,

  /**
   * The icon to display in place of the default popup icon.
   */
  popupIcon: PropTypes.node,

  /**
   * Render the group.
   *
   * @param {any} option The group to render.
   * @returns {ReactNode}
   */
  renderGroup: PropTypes.func,

  /**
   * Render the input.
   *
   * @param {object} params
   * @returns {ReactNode}
   */
  renderInput: PropTypes.func.isRequired,

  /**
   * Render the option, use `getOptionLabel` by default.
   *
   * @param {T} option The option to render.
   * @param {object} state The state of the component.
   * @returns {ReactNode}
   */
  renderOption: PropTypes.func,

  /**
   * Render the selected value.
   *
   * @param {T[]} value The `value` provided to the component.
   * @param {function} getTagProps A tag props getter.
   * @returns {ReactNode}
   */
  renderTags: PropTypes.func,

  /**
   * If `true`, the input's text will be selected on focus.
   * It helps the user clear the selected value.
   */
  selectOnFocus: PropTypes.bool,

  /**
   * The size of the autocomplete.
   */
  size: PropTypes.oneOf(['medium', 'small']),

  /**
   * The value of the autocomplete.
   *
   * The value must have reference equality with the option in order to be selected.
   * You can customize the equality behavior with the `getOptionSelected` prop.
   */
  value: PropTypes.any
} : void 0;
var Autocomplete$1 = withStyles(styles, {
  name: 'MuiAutocomplete'
})(Autocomplete);

var palette = createPalette({
    primary: {
        main: "#5702BC"
    },
    secondary: {
        main: "#ff3f1a"
    },
    success: {
        main: "#02bc79"
    },
    info: {
        main: "#2196f3"
    },
    warning: {
        main: "#ffb920"
    },
    error: {
        main: "#ff5047"
    },
    background: {
        default: "#fbfbfb"
    },
    divider: "#eaeaea",
    text: {
        primary: "#1c0b33"
    }
});

var customTheme = {
    palette: palette,
    transitions: transitions,
    typography: createTypography(palette, {
        fontFamily: "'Inter UI', Roboto",
        allVariants: {
            color: "#1c0b33"
        },
        body1: {
            fontSize: 14
        },
        body2: {
            fontSize: 12
        }
    }),
    spacing: createSpacing(8),
    list: {
        item: {
            height: 33
        }
    },
    btn: {
        borderRadius: 8,
        iconSize: 16
    },
    inputs: {
        height: 40,
        border: {
            color: "#dfe1e5",
            focus: "#aeb4be",
            radius: 6
        }
    },
    link: {
        color: "#2182c3"
    },
    card: {
        boxShadow: "0 2px 7px 0 rgba(0, 0, 0, 0.04)",
        borderRadius: 9,
        header: {
            backgroundColor: "#f9f9fa",
            size: {
                big: 70,
                medium: 60
            }
        }
    }
};

var defaultPaper = {
    boxShadow: "none",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: customTheme.inputs.border.color,
    borderRadius: customTheme.inputs.border.radius,
    background: customTheme.palette.background.paper
};
var paper = {
    elevation1: __assign({}, defaultPaper),
    elevation8: __assign({}, defaultPaper)
};

var useStyles$g = makeStyles$1({
    root: {
        width: "100%"
    },
    highlightedPart: {
        fontWeight: 600
    },
    input: {
        padding: "0px !important"
    },
    listbox: {
        padding: 0
    },
    paper: paper
});
var splitOn = function (slicable) {
    var indices = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        indices[_i - 1] = arguments[_i];
    }
    return __spreadArray([0], indices).map(function (position, index, array) { return slicable.slice(position, array[index + 1]); });
};
var AutocompleteInput = function (_a) {
    var options = _a.options, placeholder = _a.placeholder, id = _a.id, onChange = _a.onChange, onSelect = _a.onSelect;
    var classes = useStyles$g();
    var _b = useState(""), inputValue = _b[0], setInputValue = _b[1];
    var renderInput = function (params) { return (React__default.createElement(TextField, __assign({}, params, { fullWidth: true, placeholder: placeholder }))); };
    var renderOption = function (option) {
        var position = option.label.toLowerCase().indexOf(inputValue.toLowerCase());
        var result = splitOn(option.label, position, position + inputValue.length);
        return (React__default.createElement("div", null, result.map(function (part, index) {
            if (index === 1) {
                return React__default.createElement("span", { key: String(index), className: classes.highlightedPart }, part);
            }
            else {
                return React__default.createElement("span", { key: String(index) }, part);
            }
        })));
    };
    var getOptionLabel = function (option) {
        return option.label;
    };
    var handleInputChange = function (event, newInputValue) {
        onChange(newInputValue);
        setInputValue(newInputValue);
    };
    var handleChange = function (event, newValue) {
        onSelect(newValue);
        if (!newValue) {
            setInputValue("");
        }
    };
    return (React__default.createElement(Autocomplete$1, __assign({ className: classes.root, classes: {
            inputRoot: classes.input,
            listbox: classes.listbox,
            paper: classes.paper
        }, autoSelect: true, options: options, onInputChange: handleInputChange, onChange: handleChange, renderInput: renderInput, renderOption: renderOption, getOptionLabel: getOptionLabel }, id)));
};

var dist = {exports: {}};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var validateFormat = process.env.NODE_ENV !== "production" ? function (format) {
  if (format === undefined) {
    throw new Error('invariant(...): Second argument must be a string.');
  }
} : function (format) {};
/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments to provide
 * information about what broke and what you were expecting.
 *
 * The invariant message will be stripped in production, but the invariant will
 * remain to ensure logic does not differ in production.
 */

function invariant$1(condition, format) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  validateFormat(format);

  if (!condition) {
    var error;

    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return String(args[argIndex++]);
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // Skip invariant's own stack frame.

    throw error;
  }
}

var invariant_1 = invariant$1;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}
/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */


var emptyFunction$1 = function emptyFunction() {};

emptyFunction$1.thatReturns = makeEmptyFunction;
emptyFunction$1.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction$1.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction$1.thatReturnsNull = makeEmptyFunction(null);

emptyFunction$1.thatReturnsThis = function () {
  return this;
};

emptyFunction$1.thatReturnsArgument = function (arg) {
  return arg;
};

var emptyFunction_1 = emptyFunction$1;

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

var emptyFunction = emptyFunction_1;
/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */


function printWarning(format) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var argIndex = 0;
  var message = 'Warning: ' + format.replace(/%s/g, function () {
    return args[argIndex++];
  });

  if (typeof console !== 'undefined') {
    console.error(message);
  }

  try {
    // --- Welcome to debugging React ---
    // This error was thrown as a convenience so that you can use this stack
    // to find the callsite that caused this warning to fire.
    throw new Error(message);
  } catch (x) {}
}

var warning = process.env.NODE_ENV !== "production" ? function (condition, format) {
  if (format === undefined) {
    throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
  }

  if (!condition) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      args[_key2 - 2] = arguments[_key2];
    }

    printWarning.apply(void 0, [format].concat(args));
  }
} : emptyFunction;
var warning_1 = warning;

// istanbul ignore next
var statusDiv = typeof document === 'undefined' ? null : document.getElementById('a11y-status-message');

var statuses = [];

function setStatus(status) {
  var isSameAsLast = statuses[statuses.length - 1] === status;
  if (isSameAsLast) {
    statuses = [].concat(statuses, [status]);
  } else {
    statuses = [status];
  }
  var div = getStatusDiv();

  // Remove previous children
  while (div.lastChild) {
    div.removeChild(div.firstChild);
  }

  statuses.filter(Boolean).forEach(function (statusItem, index) {
    div.appendChild(getStatusChildDiv(statusItem, index));
  });
}

function getStatusChildDiv(status, index) {
  var display = index === statuses.length - 1 ? 'block' : 'none';

  var childDiv = document.createElement('div');
  childDiv.style.display = display;
  childDiv.textContent = status;

  return childDiv;
}

function getStatusDiv() {
  if (statusDiv) {
    return statusDiv;
  }
  statusDiv = document.createElement('div');
  statusDiv.setAttribute('id', 'a11y-status-message');
  statusDiv.setAttribute('role', 'status');
  statusDiv.setAttribute('aria-live', 'assertive');
  statusDiv.setAttribute('aria-relevant', 'additions text');
  Object.assign(statusDiv.style, {
    border: '0',
    clip: 'rect(0 0 0 0)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: '0',
    position: 'absolute',
    width: '1px'
  });
  document.body.appendChild(statusDiv);
  return statusDiv;
}

var idCounter = 0;

/**
 * Accepts a parameter and returns it if it's a function
 * or a noop function if it's not. This allows us to
 * accept a callback, but not worry about it if it's not
 * passed.
 * @param {Function} cb the callback
 * @return {Function} a function
 */
function cbToCb(cb) {
  return typeof cb === 'function' ? cb : noop$1;
}
function noop$1() {}

function findParent(finder, node, rootNode) {
  if (node !== null && node !== rootNode.parentNode) {
    if (finder(node)) {
      if (node === document.body && node.scrollTop === 0) {
        // in chrome body.scrollTop always return 0
        return document.documentElement;
      }
      return node;
    } else {
      return findParent(finder, node.parentNode, rootNode);
    }
  } else {
    return null;
  }
}

/**
 * Get the closest element that scrolls
 * @param {HTMLElement} node - the child element to start searching for scroll parent at
 * @param {HTMLElement} rootNode - the root element of the component
 * @return {HTMLElement} the closest parentNode that scrolls
 */
var getClosestScrollParent = findParent.bind(null, function (node) {
  return node.scrollHeight > node.clientHeight;
});

/**
 * Scroll node into view if necessary
 * @param {HTMLElement} node - the element that should scroll into view
 * @param {HTMLElement} rootNode - the root element of the component
 * @param {Boolean} alignToTop - align element to the top of the visible area of the scrollable ancestor
 */
// eslint-disable-next-line complexity
function scrollIntoView(node, rootNode) {
  var scrollParent = getClosestScrollParent(node, rootNode);
  if (scrollParent === null) {
    return;
  }
  var scrollParentStyles = getComputedStyle(scrollParent);
  var scrollParentRect = scrollParent.getBoundingClientRect();
  var scrollParentBorderTopWidth = parseInt(scrollParentStyles.borderTopWidth, 10);
  var scrollParentBorderBottomWidth = parseInt(scrollParentStyles.borderBottomWidth, 10);
  var bordersWidth = scrollParentBorderTopWidth + scrollParentBorderBottomWidth;
  var scrollParentTop = scrollParentRect.top + scrollParentBorderTopWidth;
  var nodeRect = node.getBoundingClientRect();

  if (nodeRect.top < 0 && scrollParentRect.top < 0) {
    scrollParent.scrollTop += nodeRect.top;
    return;
  }

  if (nodeRect.top < 0) {
    // the item is above the viewport and the parent is not above the viewport
    scrollParent.scrollTop += nodeRect.top - scrollParentTop;
    return;
  }

  if (nodeRect.top > 0 && scrollParentRect.top < 0) {
    if (scrollParentRect.bottom > 0 && nodeRect.bottom + bordersWidth > scrollParentRect.bottom) {
      // the item is below scrollable area
      scrollParent.scrollTop += nodeRect.bottom - scrollParentRect.bottom + bordersWidth;
    }
    // item and parent top are on different sides of view top border (do nothing)
    return;
  }

  var nodeOffsetTop = nodeRect.top + scrollParent.scrollTop;
  var nodeTop = nodeOffsetTop - scrollParentTop;
  if (nodeTop < scrollParent.scrollTop) {
    // the item is above the scrollable area
    scrollParent.scrollTop = nodeTop;
  } else if (nodeTop + nodeRect.height + bordersWidth > scrollParent.scrollTop + scrollParentRect.height) {
    // the item is below the scrollable area
    scrollParent.scrollTop = nodeTop + nodeRect.height - scrollParentRect.height + bordersWidth;
  }
  // the item is within the scrollable area (do nothing)
}

/**
 * @param {HTMLElement} parent the parent node
 * @param {HTMLElement} child the child node
 * @return {Boolean} whether the parent is the child or the child is in the parent
 */
function isOrContainsNode(parent, child) {
  return parent === child || parent.contains(child);
}

/**
 * Simple debounce implementation. Will call the given
 * function once after the time given has passed since
 * it was last called.
 * @param {Function} fn the function to call after the time
 * @param {Number} time the time to wait
 * @return {Function} the debounced function
 */
function debounce$1(fn, time) {
  var timeoutId = void 0;
  return wrapper;
  function wrapper() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(function () {
      timeoutId = null;
      fn.apply(undefined, args);
    }, time);
  }
}

/**
 * This is intended to be used to compose event handlers.
 * They are executed in order until one of them sets
 * `event.preventDownshiftDefault = true`.
 * @param {Function} fns the event handler functions
 * @return {Function} the event handler to add to an element
 */
function composeEventHandlers() {
  for (var _len2 = arguments.length, fns = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    fns[_key2] = arguments[_key2];
  }

  return function (event) {
    for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }

    return fns.some(function (fn) {
      fn && fn.apply(undefined, [event].concat(args));
      // TODO: remove everything after the || in the next breaking change
      return event.preventDownshiftDefault || event.defaultPrevented;
    });
  };
}

/**
 * This generates a unique ID for an instance of Downshift
 * @return {String} the unique ID
 */
function generateId() {
  return String(idCounter++);
}

/**
 * Resets idCounter to 0. Used for SSR.
 */
function resetIdCounter() {
  idCounter = 0;
}

/**
 * Returns the first argument that is not undefined
 * @param {...*} args the arguments
 * @return {*} the defined value
 */
function firstDefined() {
  for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    args[_key4] = arguments[_key4];
  }

  return args.find(function (a) {
    return typeof a !== 'undefined';
  });
}

// eslint-disable-next-line complexity
function getA11yStatusMessage(_ref) {
  var isOpen = _ref.isOpen,
      highlightedItem = _ref.highlightedItem,
      selectedItem = _ref.selectedItem,
      resultCount = _ref.resultCount,
      previousResultCount = _ref.previousResultCount,
      itemToString = _ref.itemToString;

  if (!isOpen) {
    if (selectedItem) {
      return itemToString(selectedItem);
    } else {
      return '';
    }
  }

  if (!resultCount) {
    return 'No results.';
  } else if (!highlightedItem || resultCount !== previousResultCount) {
    return resultCount + ' ' + (resultCount === 1 ? 'result is' : 'results are') + ' available, use up and down arrow keys to navigate.';
  }
  return itemToString(highlightedItem);
}

/**
 * Takes an argument and if it's an array, returns the first item in the array
 * otherwise returns the argument
 * @param {*} arg the maybe-array
 * @param {*} defaultValue the value if arg is falsey not defined
 * @return {*} the arg or it's first item
 */
function unwrapArray(arg, defaultValue) {
  arg = Array.isArray(arg) ? /* istanbul ignore next (preact) */arg[0] : arg;
  if (!arg && defaultValue) {
    return defaultValue;
  } else {
    return arg;
  }
}

/**
 * @param {Object} element (P)react element
 * @return {Boolean} whether it's a DOM element
 */
function isDOMElement(element) {
  /* istanbul ignore if */
  if (element.nodeName) {
    // then this is preact
    return typeof element.nodeName === 'string';
  } else {
    // then we assume this is react
    return typeof element.type === 'string';
  }
}

/**
 * @param {Object} element (P)react element
 * @return {Object} the props
 */
function getElementProps(element) {
  // props for react, attributes for preact
  return element.props || /* istanbul ignore next (preact) */element.attributes;
}

/**
 * Throws a helpful error message for required properties. Useful
 * to be used as a default in destructuring or object params.
 * @param {String} fnName the function name
 * @param {String} propName the prop name
 */
function requiredProp(fnName, propName) {
  throw new Error('The property "' + propName + '" is required in "' + fnName + '"');
}

var stateKeys = ['highlightedIndex', 'inputValue', 'isOpen', 'selectedItem', 'type'];
/**
 * @param {Object} state The state object
 * @return {Object} State that is relevant to downshift
 */
function pickState() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var result = {};
  stateKeys.forEach(function (k) {
    if (state.hasOwnProperty(k)) {
      result[k] = state[k];
    }
  });
  return result;
}

/**
 * Normalizes the 'key' property of a KeyboardEvent in IE/Edge
 * @param {Object} event a KeyboardEvent object
 * @return {String} keyboard key
 */
function normalizeArrowKey(event) {
  var key = event.key,
      keyCode = event.keyCode;
  /* istanbul ignore next (ie) */

  if (keyCode >= 37 && keyCode <= 40 && key.indexOf('Arrow') !== 0) {
    return 'Arrow' + key;
  }
  return key;
}

/**
 * Simple check if the value passed is object literal
 * @param {*} obj any things
 * @return {Boolean} whether it's object literal
 */
function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

var classCallCheck$1 = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var _extends$4 = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

/* eslint camelcase:0 */

var Downshift = function (_Component) {
  inherits(Downshift, _Component);

  function Downshift() {
    classCallCheck$1(this, Downshift);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args)));

    _initialiseProps.call(_this);

    var state = _this.getState({
      highlightedIndex: _this.props.defaultHighlightedIndex,
      isOpen: _this.props.defaultIsOpen,
      inputValue: _this.props.defaultInputValue,
      selectedItem: _this.props.defaultSelectedItem
    });
    if (state.selectedItem != null) {
      state.inputValue = _this.props.itemToString(state.selectedItem);
    }
    _this.state = state;
    _this.id = _this.props.id || 'downshift-' + generateId();
    return _this;
  }
  // itemCount can be changed asynchronously
  // from within downshift (so it can't come from a prop)
  // this is why we store it as an instance and use
  // getItemCount rather than just use items.length
  // (to support windowing + async)


  /**
   * Gets the state based on internal state or props
   * If a state value is passed via props, then that
   * is the value given, otherwise it's retrieved from
   * stateToMerge
   *
   * This will perform a shallow merge of the given state object
   * with the state coming from props
   * (for the controlled component scenario)
   * This is used in state updater functions so they're referencing
   * the right state regardless of where it comes from.
   *
   * @param {Object} stateToMerge defaults to this.state
   * @return {Object} the state
   */
  Downshift.prototype.getState = function getState() {
    var _this2 = this;

    var stateToMerge = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;

    return Object.keys(stateToMerge).reduce(function (state, key) {
      state[key] = _this2.isControlledProp(key) ? _this2.props[key] : stateToMerge[key];
      return state;
    }, {});
  };

  /**
   * This determines whether a prop is a "controlled prop" meaning it is
   * state which is controlled by the outside of this component rather
   * than within this component.
   * @param {String} key the key to check
   * @return {Boolean} whether it is a controlled controlled prop
   */


  Downshift.prototype.isControlledProp = function isControlledProp(key) {
    return this.props[key] !== undefined;
  };

  Downshift.prototype.getItemCount = function getItemCount() {
    // things read better this way. They're in priority order:
    // 1. `this.itemCount`
    // 2. `this.props.itemCount`
    // 3. `this.items.length`
    /* eslint-disable no-negated-condition */
    if (this.itemCount != null) {
      return this.itemCount;
    } else if (this.props.itemCount !== undefined) {
      return this.props.itemCount;
    } else {
      return this.items.length;
    }
    /* eslint-enable no-negated-condition */
  };

  Downshift.prototype.getItemNodeFromIndex = function getItemNodeFromIndex(index) {
    return this.props.environment.document.getElementById(this.getItemId(index));
  };

  Downshift.prototype.scrollHighlightedItemIntoView = function scrollHighlightedItemIntoView() {
    /* istanbul ignore else (react-native) */
    {
      var node = this.getItemNodeFromIndex(this.getState().highlightedIndex);
      scrollIntoView(node, this._rootNode);
    }
  };

  Downshift.prototype.moveHighlightedIndex = function moveHighlightedIndex(amount, otherStateToSet) {
    if (this.getState().isOpen) {
      this.changeHighlightedIndex(amount, otherStateToSet);
    } else {
      this.setHighlightedIndex(undefined, _extends$4({ isOpen: true }, otherStateToSet));
    }
  };

  // eslint-disable-next-line complexity


  Downshift.prototype.changeHighlightedIndex = function changeHighlightedIndex(moveAmount, otherStateToSet) {
    var itemsLastIndex = this.getItemCount() - 1;
    if (itemsLastIndex < 0) {
      return;
    }

    var _getState = this.getState(),
        highlightedIndex = _getState.highlightedIndex;

    var baseIndex = highlightedIndex;
    if (baseIndex === null) {
      baseIndex = moveAmount > 0 ? -1 : itemsLastIndex + 1;
    }
    var newIndex = baseIndex + moveAmount;
    if (newIndex < 0) {
      newIndex = itemsLastIndex;
    } else if (newIndex > itemsLastIndex) {
      newIndex = 0;
    }
    this.setHighlightedIndex(newIndex, otherStateToSet);
  };

  // any piece of our state can live in two places:
  // 1. Uncontrolled: it's internal (this.state)
  //    We will call this.setState to update that state
  // 2. Controlled: it's external (this.props)
  //    We will call this.props.onStateChange to update that state
  //
  // In addition, we'll call this.props.onChange if the
  // selectedItem is changed.


  Downshift.prototype.getStateAndHelpers = function getStateAndHelpers() {
    var _getState2 = this.getState(),
        highlightedIndex = _getState2.highlightedIndex,
        inputValue = _getState2.inputValue,
        selectedItem = _getState2.selectedItem,
        isOpen = _getState2.isOpen;

    var itemToString = this.props.itemToString;
    var id = this.id;
    var getRootProps = this.getRootProps,
        getButtonProps = this.getButtonProps,
        getToggleButtonProps = this.getToggleButtonProps,
        getLabelProps = this.getLabelProps,
        getInputProps = this.getInputProps,
        getItemProps = this.getItemProps,
        openMenu = this.openMenu,
        closeMenu = this.closeMenu,
        toggleMenu = this.toggleMenu,
        selectItem = this.selectItem,
        selectItemAtIndex = this.selectItemAtIndex,
        selectHighlightedItem = this.selectHighlightedItem,
        setHighlightedIndex = this.setHighlightedIndex,
        clearSelection = this.clearSelection,
        clearItems = this.clearItems,
        reset = this.reset,
        setItemCount = this.setItemCount,
        unsetItemCount = this.unsetItemCount,
        setState = this.internalSetState;

    return {
      // prop getters
      getRootProps: getRootProps,
      getButtonProps: getButtonProps,
      getToggleButtonProps: getToggleButtonProps,
      getLabelProps: getLabelProps,
      getInputProps: getInputProps,
      getItemProps: getItemProps,

      // actions
      reset: reset,
      openMenu: openMenu,
      closeMenu: closeMenu,
      toggleMenu: toggleMenu,
      selectItem: selectItem,
      selectItemAtIndex: selectItemAtIndex,
      selectHighlightedItem: selectHighlightedItem,
      setHighlightedIndex: setHighlightedIndex,
      clearSelection: clearSelection,
      clearItems: clearItems,
      setItemCount: setItemCount,
      unsetItemCount: unsetItemCount,
      setState: setState,

      //props
      itemToString: itemToString,

      //derived
      id: id,

      // state
      highlightedIndex: highlightedIndex,
      inputValue: inputValue,
      isOpen: isOpen,
      selectedItem: selectedItem
    };
  };

  //////////////////////////// ROOT

  //\\\\\\\\\\\\\\\\\\\\\\\\\\ ROOT

  //////////////////////////// BUTTON

  // TODO: remove this in 2.0.0 and just call it `getToggleButtonProps`


  //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ BUTTON

  /////////////////////////////// LABEL

  //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ LABEL

  /////////////////////////////// INPUT

  //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ INPUT

  /////////////////////////////// ITEM
  Downshift.prototype.getItemId = function getItemId(index) {
    return this.id + '-item-' + index;
  };
  //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ ITEM

  Downshift.prototype.componentDidMount = function componentDidMount() {
    var _this3 = this;

    // the _isMounted property is because we have `updateStatus` in a `debounce`
    // and we don't want to update the status if the component has been umounted
    this._isMounted = true;
    /* istanbul ignore if (react-native) */
    {
      // this.isMouseDown helps us track whether the mouse is currently held down.
      // This is useful when the user clicks on an item in the list, but holds the mouse
      // down long enough for the list to disappear (because the blur event fires on the input)
      // this.isMouseDown is used in the blur handler on the input to determine whether the blur event should
      // trigger hiding the menu.
      var onMouseDown = function () {
        _this3.isMouseDown = true;
      };
      var onMouseUp = function (event) {
        var document = _this3.props.environment.document;

        _this3.isMouseDown = false;
        var targetInDownshift = _this3._rootNode && isOrContainsNode(_this3._rootNode, event.target);
        var activeElementInDownshift = _this3._rootNode && isOrContainsNode(_this3._rootNode, document.activeElement);
        if (!targetInDownshift && !activeElementInDownshift && _this3.getState().isOpen) {
          _this3.reset({ type: Downshift.stateChangeTypes.mouseUp }, function () {
            return _this3.props.onOuterClick(_this3.getStateAndHelpers());
          });
        }
      };
      // Touching an element in iOS gives focus and hover states, but touching out of
      // the element will remove hover, and persist the focus state, resulting in the
      // blur event not being triggered.
      var onTouchStart = function (event) {
        var targetInDownshift = _this3._rootNode && isOrContainsNode(_this3._rootNode, event.target);
        if (!targetInDownshift && _this3.getState().isOpen) {
          _this3.reset({ type: Downshift.stateChangeTypes.touchStart }, function () {
            return _this3.props.onOuterClick(_this3.getStateAndHelpers());
          });
        }
      };

      this.props.environment.addEventListener('mousedown', onMouseDown);
      this.props.environment.addEventListener('mouseup', onMouseUp);
      this.props.environment.addEventListener('touchstart', onTouchStart);

      this.cleanup = function () {
        _this3._isMounted = false;
        _this3.props.environment.removeEventListener('mousedown', onMouseDown);
        _this3.props.environment.removeEventListener('mouseup', onMouseUp);
        _this3.props.environment.removeEventListener('touchstart', onTouchStart);
      };
    }
  };

  Downshift.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (this.isControlledProp('selectedItem') && this.props.selectedItemChanged(prevProps.selectedItem, this.props.selectedItem)) {
      this.internalSetState({
        type: Downshift.stateChangeTypes.controlledPropUpdatedSelectedItem,
        inputValue: this.props.itemToString(this.props.selectedItem)
      });
    }

    var current = this.props.highlightedIndex === undefined ? this.state : this.props;
    var prev = prevProps.highlightedIndex === undefined ? prevState : prevProps;

    if (current.highlightedIndex !== prev.highlightedIndex && !this.avoidScrolling) {
      this.scrollHighlightedItemIntoView();
    }

    this.updateStatus();
  };

  Downshift.prototype.componentWillUnmount = function componentWillUnmount() {
    this.cleanup(); // avoids memory leak
  };

  // eslint-disable-next-line complexity


  Downshift.prototype.render = function render() {
    var children = unwrapArray(this.props.render || this.props.children, noop$1);
    // because the items are rerendered every time we call the children
    // we clear this out each render and
    this.clearItems();
    // we reset this so we know whether the user calls getRootProps during
    // this render. If they do then we don't need to do anything,
    // if they don't then we need to clone the element they return and
    // apply the props for them.
    this.getRootProps.called = false;
    this.getRootProps.refKey = undefined;
    this.getRootProps.suppressRefError = undefined;
    // we do something similar for getLabelProps
    this.getLabelProps.called = false;
    // and something similar for getInputProps
    this.getInputProps.called = false;
    var element = unwrapArray(children(this.getStateAndHelpers()));
    if (!element) {
      return null;
    }
    if (this.getRootProps.called) {
      if (!this.getRootProps.suppressRefError) {
        validateGetRootPropsCalledCorrectly(element, this.getRootProps);
      }
      return element;
    } else if (isDOMElement(element)) {
      // they didn't apply the root props, but we can clone
      // this and apply the props ourselves
      return React__default.cloneElement(element, this.getRootProps(getElementProps(element)));
    } else {
      // they didn't apply the root props, but they need to
      // otherwise we can't query around the autocomplete
      throw new Error('downshift: If you return a non-DOM element, you must use apply the getRootProps function');
    }
  };

  return Downshift;
}(Component);

Downshift.defaultProps = {
  defaultHighlightedIndex: null,
  defaultSelectedItem: null,
  defaultInputValue: '',
  defaultIsOpen: false,
  getA11yStatusMessage: getA11yStatusMessage,
  itemToString: function itemToString(i) {
    if (i == null) {
      return '';
    }
    if (process.env.NODE_ENV !== 'production' && isPlainObject(i)) {
      //eslint-disable-next-line no-console
      console.warn('downshift: An object was passed to the default implementation of `itemToString`. You should probably provide your own `itemToString` implementation. Please refer to the `itemToString` API documentation.', 'The object that was passed:', i);
    }
    return String(i);
  },
  onStateChange: function onStateChange() {},
  onInputValueChange: function onInputValueChange() {},
  onUserAction: function onUserAction() {},
  onChange: function onChange() {},
  onSelect: function onSelect() {},
  onOuterClick: function onOuterClick() {},
  selectedItemChanged: function selectedItemChanged(prevItem, item) {
    return prevItem !== item;
  },
  environment: typeof window === 'undefined' /* istanbul ignore next (ssr) */
  ? {} : window,
  stateReducer: function stateReducer(state, stateToSet) {
    return stateToSet;
  },
  breakingChanges: {}
};
Downshift.stateChangeTypes = {
  unknown: '__autocomplete_unknown__',
  mouseUp: '__autocomplete_mouseup__',
  itemMouseEnter: '__autocomplete_item_mouseenter__',
  keyDownArrowUp: '__autocomplete_keydown_arrow_up__',
  keyDownArrowDown: '__autocomplete_keydown_arrow_down__',
  keyDownEscape: '__autocomplete_keydown_escape__',
  keyDownEnter: '__autocomplete_keydown_enter__',
  clickItem: '__autocomplete_click_item__',
  blurInput: '__autocomplete_blur_input__',
  changeInput: '__autocomplete_change_input__',
  keyDownSpaceButton: '__autocomplete_keydown_space_button__',
  clickButton: '__autocomplete_click_button__',
  blurButton: '__autocomplete_blur_button__',
  controlledPropUpdatedSelectedItem: '__autocomplete_controlled_prop_updated_selected_item__',
  touchStart: '__autocomplete_touchstart__'
};

var _initialiseProps = function () {
  var _this4 = this;

  this.input = null;
  this.items = [];
  this.itemCount = null;
  this.previousResultCount = 0;

  this.setItemCount = function (count) {
    return _this4.itemCount = count;
  };

  this.unsetItemCount = function () {
    return _this4.itemCount = null;
  };

  this.setHighlightedIndex = function () {
    var highlightedIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this4.props.defaultHighlightedIndex;
    var otherStateToSet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    otherStateToSet = pickState(otherStateToSet);
    _this4.internalSetState(_extends$4({ highlightedIndex: highlightedIndex }, otherStateToSet));
  };

  this.clearSelection = function (cb) {
    _this4.internalSetState({
      selectedItem: null,
      inputValue: '',
      isOpen: false
    }, cb);
  };

  this.selectItem = function (item, otherStateToSet, cb) {
    otherStateToSet = pickState(otherStateToSet);
    _this4.internalSetState(_extends$4({
      isOpen: false,
      highlightedIndex: _this4.props.defaultHighlightedIndex,
      selectedItem: item,
      inputValue: _this4.isControlledProp('selectedItem') && _this4.props.breakingChanges.resetInputOnSelection ? _this4.props.defaultInputValue : _this4.props.itemToString(item)
    }, otherStateToSet), cb);
  };

  this.selectItemAtIndex = function (itemIndex, otherStateToSet, cb) {
    var item = _this4.items[itemIndex];
    if (item == null) {
      return;
    }
    _this4.selectItem(item, otherStateToSet, cb);
  };

  this.selectHighlightedItem = function (otherStateToSet, cb) {
    return _this4.selectItemAtIndex(_this4.getState().highlightedIndex, otherStateToSet, cb);
  };

  this.internalSetState = function (stateToSet, cb) {
    var isItemSelected = void 0,
        onChangeArg = void 0;

    var onStateChangeArg = {};
    var isStateToSetFunction = typeof stateToSet === 'function';

    // we want to call `onInputValueChange` before the `setState` call
    // so someone controlling the `inputValue` state gets notified of
    // the input change as soon as possible. This avoids issues with
    // preserving the cursor position.
    // See https://github.com/paypal/downshift/issues/217 for more info.
    if (!isStateToSetFunction && stateToSet.hasOwnProperty('inputValue')) {
      _this4.props.onInputValueChange(stateToSet.inputValue, _extends$4({}, _this4.getStateAndHelpers(), stateToSet));
    }
    return _this4.setState(function (state) {
      state = _this4.getState(state);
      var newStateToSet = isStateToSetFunction ? stateToSet(state) : stateToSet;

      // Your own function that could modify the state that will be set.
      newStateToSet = _this4.props.stateReducer(state, newStateToSet);

      // checks if an item is selected, regardless of if it's different from
      // what was selected before
      // used to determine if onSelect and onChange callbacks should be called
      isItemSelected = newStateToSet.hasOwnProperty('selectedItem');
      // this keeps track of the object we want to call with setState
      var nextState = {};
      // this is just used to tell whether the state changed
      var nextFullState = {};
      // we need to call on change if the outside world is controlling any of our state
      // and we're trying to update that state. OR if the selection has changed and we're
      // trying to update the selection
      if (isItemSelected && newStateToSet.selectedItem !== state.selectedItem) {
        onChangeArg = newStateToSet.selectedItem;
      }
      newStateToSet.type = newStateToSet.type || Downshift.stateChangeTypes.unknown;

      Object.keys(newStateToSet).forEach(function (key) {
        // onStateChangeArg should only have the state that is
        // actually changing
        if (state[key] !== newStateToSet[key]) {
          onStateChangeArg[key] = newStateToSet[key];
        }
        // the type is useful for the onStateChangeArg
        // but we don't actually want to set it in internal state.
        // this is an undocumented feature for now... Not all internalSetState
        // calls support it and I'm not certain we want them to yet.
        // But it enables users controlling the isOpen state to know when
        // the isOpen state changes due to mouseup events which is quite handy.
        if (key === 'type') {
          return;
        }
        nextFullState[key] = newStateToSet[key];
        // if it's coming from props, then we don't care to set it internally
        if (!_this4.isControlledProp(key)) {
          nextState[key] = newStateToSet[key];
        }
      });

      // if stateToSet is a function, then we weren't able to call onInputValueChange
      // earlier, so we'll call it now that we know what the inputValue state will be.
      if (isStateToSetFunction && newStateToSet.hasOwnProperty('inputValue')) {
        _this4.props.onInputValueChange(newStateToSet.inputValue, _extends$4({}, _this4.getStateAndHelpers(), newStateToSet));
      }

      return nextState;
    }, function () {
      // call the provided callback if it's a callback
      cbToCb(cb)();

      // only call the onStateChange and onChange callbacks if
      // we have relevant information to pass them.
      var hasMoreStateThanType = Object.keys(onStateChangeArg).length > 1;
      if (hasMoreStateThanType) {
        _this4.props.onStateChange(onStateChangeArg, _this4.getStateAndHelpers());
      }

      if (isItemSelected) {
        _this4.props.onSelect(stateToSet.selectedItem, _this4.getStateAndHelpers());
      }

      if (onChangeArg !== undefined) {
        _this4.props.onChange(onChangeArg, _this4.getStateAndHelpers());
      }
      // this is currently undocumented and therefore subject to change
      // We'll try to not break it, but just be warned.
      _this4.props.onUserAction(onStateChangeArg, _this4.getStateAndHelpers());
    });
  };

  this.rootRef = function (node) {
    return _this4._rootNode = node;
  };

  this.getRootProps = function () {
    var _babelHelpers$extends;

    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref3$suppressRefErro = _ref3.suppressRefError,
        suppressRefError = _ref3$suppressRefErro === undefined ? false : _ref3$suppressRefErro;

    var _ref2$refKey = _ref2.refKey,
        refKey = _ref2$refKey === undefined ? 'ref' : _ref2$refKey,
        rest = objectWithoutProperties(_ref2, ['refKey']);

    // this is used in the render to know whether the user has called getRootProps.
    // It uses that to know whether to apply the props automatically
    _this4.getRootProps.called = true;
    _this4.getRootProps.refKey = refKey;
    _this4.getRootProps.suppressRefError = suppressRefError;
    return _extends$4((_babelHelpers$extends = {}, _babelHelpers$extends[refKey] = _this4.rootRef, _babelHelpers$extends), rest);
  };

  this.keyDownHandlers = {
    ArrowDown: function ArrowDown(event) {
      event.preventDefault();
      var amount = event.shiftKey ? 5 : 1;
      this.moveHighlightedIndex(amount, {
        type: Downshift.stateChangeTypes.keyDownArrowDown
      });
    },
    ArrowUp: function ArrowUp(event) {
      event.preventDefault();
      var amount = event.shiftKey ? -5 : -1;
      this.moveHighlightedIndex(amount, {
        type: Downshift.stateChangeTypes.keyDownArrowUp
      });
    },
    Enter: function Enter(event) {
      if (this.getState().isOpen) {
        event.preventDefault();
        var itemIndex = this.getState().highlightedIndex;
        var item = this.items[itemIndex];
        var itemNode = this.getItemNodeFromIndex(itemIndex);
        if (item == null || itemNode && itemNode.hasAttribute('disabled')) {
          return;
        }
        this.selectHighlightedItem({
          type: Downshift.stateChangeTypes.keyDownEnter
        });
      }
    },
    Escape: function Escape(event) {
      event.preventDefault();
      this.reset({ type: Downshift.stateChangeTypes.keyDownEscape });
    }
  };
  this.buttonKeyDownHandlers = _extends$4({}, this.keyDownHandlers, {
    ' ': function _(event) {
      event.preventDefault();
      this.toggleMenu({ type: Downshift.stateChangeTypes.keyDownSpaceButton });
    }
  });

  this.getToggleButtonProps = function () {
    var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var onClick = _ref4.onClick,
        onKeyDown = _ref4.onKeyDown,
        onBlur = _ref4.onBlur,
        rest = objectWithoutProperties(_ref4, ['onClick', 'onKeyDown', 'onBlur']);

    var _getState3 = _this4.getState(),
        isOpen = _getState3.isOpen;

    var enabledEventHandlers = {
      onClick: composeEventHandlers(onClick, _this4.button_handleClick),
      onKeyDown: composeEventHandlers(onKeyDown, _this4.button_handleKeyDown),
      onBlur: composeEventHandlers(onBlur, _this4.button_handleBlur)
    };
    var eventHandlers = rest.disabled ? {} : enabledEventHandlers;
    return _extends$4({
      type: 'button',
      role: 'button',
      'aria-label': isOpen ? 'close menu' : 'open menu',
      'aria-expanded': isOpen,
      'aria-haspopup': true,
      'data-toggle': true
    }, eventHandlers, rest);
  };

  this.getButtonProps = this.getToggleButtonProps;

  this.button_handleKeyDown = function (event) {
    var key = normalizeArrowKey(event);
    if (_this4.buttonKeyDownHandlers[key]) {
      _this4.buttonKeyDownHandlers[key].call(_this4, event);
    }
  };

  this.button_handleClick = function (event) {
    event.preventDefault();
    // handle odd case for Safari and Firefox which
    // don't give the button the focus properly.
    /* istanbul ignore if (can't reasonably test this) */
    if (_this4.props.environment.document.activeElement === _this4.props.environment.document.body) {
      event.target.focus();
    }
    // to simplify testing components that use downshift, we'll not wrap this in a setTimeout
    // if the NODE_ENV is test. With the proper build system, this should be dead code eliminated
    // when building for production and should therefore have no impact on production code.
    if (process.env.NODE_ENV === 'test') {
      _this4.toggleMenu({ type: Downshift.stateChangeTypes.clickButton });
    } else {
      // Ensure that toggle of menu occurs after the potential blur event in iOS
      setTimeout(function () {
        return _this4.toggleMenu({ type: Downshift.stateChangeTypes.clickButton });
      });
    }
  };

  this.button_handleBlur = function (event) {
    var blurTarget = event.target; // Save blur target for comparison with activeElement later
    // Need setTimeout, so that when the user presses Tab, the activeElement is the next focused element, not body element
    setTimeout(function () {
      if (!_this4.isMouseDown && (_this4.props.environment.document.activeElement == null || _this4.props.environment.document.activeElement.id !== _this4.inputId) && _this4.props.environment.document.activeElement !== blurTarget // Do nothing if we refocus the same element again (to solve issue in Safari on iOS)
      ) {
          _this4.reset({ type: Downshift.stateChangeTypes.blurButton });
        }
    });
  };

  this.getLabelProps = function () {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _this4.getLabelProps.called = true;
    if (_this4.getInputProps.called && props.htmlFor && props.htmlFor !== _this4.inputId) {
      throw new Error('downshift: You provided the htmlFor of "' + props.htmlFor + '" for your label, but the id of your input is "' + _this4.inputId + '". You must either remove the id from your input or set the htmlFor of the label equal to the input id.');
    }
    _this4.inputId = firstDefined(_this4.inputId, props.htmlFor, _this4.id + '-input');
    return _extends$4({}, props, {
      htmlFor: _this4.inputId
    });
  };

  this.getInputProps = function () {
    var _ref6;

    var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var onKeyDown = _ref5.onKeyDown,
        onBlur = _ref5.onBlur,
        onChange = _ref5.onChange,
        onInput = _ref5.onInput,
        rest = objectWithoutProperties(_ref5, ['onKeyDown', 'onBlur', 'onChange', 'onInput']);

    _this4.getInputProps.called = true;
    if (_this4.getLabelProps.called && rest.id && rest.id !== _this4.inputId) {
      throw new Error('downshift: You provided the id of "' + rest.id + '" for your input, but the htmlFor of your label is "' + _this4.inputId + '". You must either remove the id from your input or set the htmlFor of the label equal to the input id.');
    }
    _this4.inputId = firstDefined(_this4.inputId, rest.id, _this4.id + '-input');
    var onChangeKey = void 0;
    /* istanbul ignore next (preact) */
    onChangeKey = 'onChange';

    var _getState4 = _this4.getState(),
        inputValue = _getState4.inputValue,
        isOpen = _getState4.isOpen,
        highlightedIndex = _getState4.highlightedIndex;

    var eventHandlers = rest.disabled ? {} : (_ref6 = {}, _ref6[onChangeKey] = composeEventHandlers(onChange, onInput, _this4.input_handleChange), _ref6.onKeyDown = composeEventHandlers(onKeyDown, _this4.input_handleKeyDown), _ref6.onBlur = composeEventHandlers(onBlur, _this4.input_handleBlur), _ref6);
    return _extends$4({
      role: 'combobox',
      'aria-autocomplete': 'list',
      'aria-expanded': isOpen,
      'aria-activedescendant': isOpen && typeof highlightedIndex === 'number' && highlightedIndex >= 0 ? _this4.getItemId(highlightedIndex) : null,
      autoComplete: 'off',
      value: inputValue
    }, eventHandlers, rest, {
      id: _this4.inputId
    });
  };

  this.input_handleKeyDown = function (event) {
    var key = normalizeArrowKey(event);
    if (key && _this4.keyDownHandlers[key]) {
      _this4.keyDownHandlers[key].call(_this4, event);
    }
  };

  this.input_handleChange = function (event) {
    _this4.internalSetState({
      type: Downshift.stateChangeTypes.changeInput,
      isOpen: true,
      inputValue: event.target.value
    });
  };

  this.input_handleBlur = function () {
    // Need setTimeout, so that when the user presses Tab, the activeElement is the next focused element, not the body element
    setTimeout(function () {
      var downshiftButtonIsActive = _this4.props.environment.document.activeElement.dataset.toggle && _this4._rootNode && _this4._rootNode.contains(_this4.props.environment.document.activeElement);
      if (!_this4.isMouseDown && !downshiftButtonIsActive) {
        _this4.reset({ type: Downshift.stateChangeTypes.blurInput });
      }
    });
  };

  this.getItemProps = function () {
    var _enabledEventHandlers;

    var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var onMouseMove = _ref7.onMouseMove,
        onMouseDown = _ref7.onMouseDown,
        onClick = _ref7.onClick,
        index = _ref7.index,
        _ref7$item = _ref7.item,
        item = _ref7$item === undefined ? requiredProp('getItemProps', 'item') : _ref7$item,
        rest = objectWithoutProperties(_ref7, ['onMouseMove', 'onMouseDown', 'onClick', 'index', 'item']);

    if (index === undefined) {
      _this4.items.push(item);
      index = _this4.items.indexOf(item);
    } else {
      _this4.items[index] = item;
    }

    var onSelectKey = 'onClick';

    var enabledEventHandlers = (_enabledEventHandlers = {
      // onMouseMove is used over onMouseEnter here. onMouseMove
      // is only triggered on actual mouse movement while onMouseEnter
      // can fire on DOM changes, interrupting keyboard navigation
      onMouseMove: composeEventHandlers(onMouseMove, function () {
        if (index === _this4.getState().highlightedIndex) {
          return;
        }
        _this4.setHighlightedIndex(index, {
          type: Downshift.stateChangeTypes.itemMouseEnter
        });

        // We never want to manually scroll when changing state based
        // on `onMouseMove` because we will be moving the element out
        // from under the user which is currently scrolling/moving the
        // cursor
        _this4.avoidScrolling = true;
        setTimeout(function () {
          return _this4.avoidScrolling = false;
        }, 250);
      }),
      onMouseDown: composeEventHandlers(onMouseDown, function (event) {
        // This prevents the activeElement from being changed
        // to the item so it can remain with the current activeElement
        // which is a more common use case.
        event.preventDefault();
      })
    }, _enabledEventHandlers[onSelectKey] = composeEventHandlers(onClick, function () {
      _this4.selectItemAtIndex(index, {
        type: Downshift.stateChangeTypes.clickItem
      });
    }), _enabledEventHandlers);

    var eventHandlers = rest.disabled ? {} : enabledEventHandlers;

    return _extends$4({
      id: _this4.getItemId(index)
    }, eventHandlers, rest);
  };

  this.clearItems = function () {
    _this4.items = [];
  };

  this.reset = function () {
    var otherStateToSet = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var cb = arguments[1];

    otherStateToSet = pickState(otherStateToSet);
    _this4.internalSetState(function (_ref8) {
      var selectedItem = _ref8.selectedItem;
      return _extends$4({
        isOpen: false,
        highlightedIndex: _this4.props.defaultHighlightedIndex,
        inputValue: _this4.props.itemToString(selectedItem)
      }, otherStateToSet);
    }, cbToCb(cb));
  };

  this.toggleMenu = function () {
    var otherStateToSet = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var cb = arguments[1];

    otherStateToSet = pickState(otherStateToSet);
    _this4.internalSetState(function (_ref9) {
      var isOpen = _ref9.isOpen;

      return _extends$4({ isOpen: !isOpen }, otherStateToSet);
    }, function () {
      var _getState5 = _this4.getState(),
          isOpen = _getState5.isOpen;

      if (isOpen) {
        // highlight default index
        _this4.setHighlightedIndex(undefined, otherStateToSet);
      }
      cbToCb(cb)();
    });
  };

  this.openMenu = function (cb) {
    _this4.internalSetState({ isOpen: true }, cbToCb(cb));
  };

  this.closeMenu = function (cb) {
    _this4.internalSetState({ isOpen: false }, cbToCb(cb));
  };

  this.updateStatus = debounce$1(function () {
    if (!_this4._isMounted) {
      return;
    }
    var state = _this4.getState();
    var item = _this4.items[state.highlightedIndex];
    var resultCount = _this4.getItemCount();
    var status = _this4.props.getA11yStatusMessage(_extends$4({
      itemToString: _this4.props.itemToString,
      previousResultCount: _this4.previousResultCount,
      resultCount: resultCount,
      highlightedItem: item
    }, state));
    _this4.previousResultCount = resultCount;
    /* istanbul ignore else (react-native) */
    setStatus(status);
  }, 200);
};

process.env.NODE_ENV !== "production" ? Downshift.propTypes = {
  children: PropTypes.func,
  render: PropTypes.func,
  defaultHighlightedIndex: PropTypes.number,
  defaultSelectedItem: PropTypes.any,
  defaultInputValue: PropTypes.string,
  defaultIsOpen: PropTypes.bool,
  getA11yStatusMessage: PropTypes.func,
  itemToString: PropTypes.func,
  onChange: PropTypes.func,
  onSelect: PropTypes.func,
  onStateChange: PropTypes.func,
  onInputValueChange: PropTypes.func,
  onUserAction: PropTypes.func,
  onOuterClick: PropTypes.func,
  selectedItemChanged: PropTypes.func,
  stateReducer: PropTypes.func,
  itemCount: PropTypes.number,
  id: PropTypes.string,
  environment: PropTypes.shape({
    addEventListener: PropTypes.func,
    removeEventListener: PropTypes.func,
    document: PropTypes.shape({
      getElementById: PropTypes.func,
      activeElement: PropTypes.any,
      body: PropTypes.any
    })
  }),
  // things we keep in state for uncontrolled components
  // but can accept as props for controlled components
  /* eslint-disable react/no-unused-prop-types */
  selectedItem: PropTypes.any,
  isOpen: PropTypes.bool,
  inputValue: PropTypes.string,
  highlightedIndex: PropTypes.number,
  breakingChanges: PropTypes.shape({
    resetInputOnSelection: PropTypes.bool
  })
  /* eslint-enable */
} : void 0;

function validateGetRootPropsCalledCorrectly(element, _ref) {
  var refKey = _ref.refKey;

  var refKeySpecified = refKey !== 'ref';
  var isComposite = !isDOMElement(element);
  if (isComposite && !refKeySpecified) {
    throw new Error('downshift: You returned a non-DOM element. You must specify a refKey in getRootProps');
  } else if (!isComposite && refKeySpecified) {
    throw new Error('downshift: You returned a DOM element. You should not specify a refKey in getRootProps. You specified "' + refKey + '"');
  }
  if (!getElementProps(element)[refKey]) {
    throw new Error('downshift: You must apply the ref prop "' + refKey + '" from getRootProps onto your root element.');
  }
}

/*
 * Fix importing in typescript after rollup compilation
 * https://github.com/rollup/rollup/issues/1156
 * https://github.com/Microsoft/TypeScript/issues/13017#issuecomment-268657860
 */
Downshift.default = Downshift;
Downshift.resetIdCounter = resetIdCounter;

var downshift_esm = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': Downshift
});

var require$$10 = /*@__PURE__*/getAugmentedNamespace(downshift_esm);

var reactPopper = {};

var Manager$1 = {};

Object.defineProperty(Manager$1, "__esModule", {
  value: true
});

var _createClass$1 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react$3 = React__default;

var _propTypes$3 = propTypes.exports;

var _propTypes2$3 = _interopRequireDefault$6(_propTypes$3);

function _interopRequireDefault$6(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties$3(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Manager = function (_Component) {
  _inherits$1(Manager, _Component);

  function Manager() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck$1(this, Manager);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn$1(this, (_ref = Manager.__proto__ || Object.getPrototypeOf(Manager)).call.apply(_ref, [this].concat(args))), _this), _this._setTargetNode = function (node) {
      _this._targetNode = node;
    }, _this._getTargetNode = function () {
      return _this._targetNode;
    }, _temp), _possibleConstructorReturn$1(_this, _ret);
  }

  _createClass$1(Manager, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        popperManager: {
          setTargetNode: this._setTargetNode,
          getTargetNode: this._getTargetNode
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          tag = _props.tag,
          children = _props.children,
          restProps = _objectWithoutProperties$3(_props, ['tag', 'children']);

      if (tag !== false) {
        return (0, _react$3.createElement)(tag, restProps, children);
      } else {
        return children;
      }
    }
  }]);

  return Manager;
}(_react$3.Component);

Manager.childContextTypes = {
  popperManager: _propTypes2$3.default.object.isRequired
};
Manager.propTypes = {
  tag: _propTypes2$3.default.oneOfType([_propTypes2$3.default.string, _propTypes2$3.default.bool]),
  children: _propTypes2$3.default.oneOfType([_propTypes2$3.default.node, _propTypes2$3.default.func])
};
Manager.defaultProps = {
  tag: 'div'
};
Manager$1.default = Manager;

var Target$1 = {};

Object.defineProperty(Target$1, "__esModule", {
  value: true
});

var _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react$2 = React__default;

var _propTypes$2 = propTypes.exports;

var _propTypes2$2 = _interopRequireDefault$5(_propTypes$2);

function _interopRequireDefault$5(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties$2(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Target = function Target(props, context) {
  var _props$component = props.component,
      component = _props$component === undefined ? 'div' : _props$component,
      innerRef = props.innerRef,
      children = props.children,
      restProps = _objectWithoutProperties$2(props, ['component', 'innerRef', 'children']);

  var popperManager = context.popperManager;

  var targetRef = function targetRef(node) {
    popperManager.setTargetNode(node);
    if (typeof innerRef === 'function') {
      innerRef(node);
    }
  };

  if (typeof children === 'function') {
    var targetProps = { ref: targetRef };
    return children({ targetProps: targetProps, restProps: restProps });
  }

  var componentProps = _extends$3({}, restProps);

  if (typeof component === 'string') {
    componentProps.ref = targetRef;
  } else {
    componentProps.innerRef = targetRef;
  }

  return (0, _react$2.createElement)(component, componentProps, children);
};

Target.contextTypes = {
  popperManager: _propTypes2$2.default.object.isRequired
};

Target.propTypes = {
  component: _propTypes2$2.default.oneOfType([_propTypes2$2.default.node, _propTypes2$2.default.func]),
  innerRef: _propTypes2$2.default.func,
  children: _propTypes2$2.default.oneOfType([_propTypes2$2.default.node, _propTypes2$2.default.func])
};

Target$1.default = Target;

var Popper$2 = {};

/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

var timeoutDuration = function () {
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }
  return 0;
}();

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */
function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends$2 = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends$2({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop);
    var marginLeft = parseFloat(styles.marginLeft);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends$2({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update$1() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicitly asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric$1(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric$1(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends$2({}, attributes, data.attributes);
  data.styles = _extends$2({}, styles, data.styles);
  data.arrowStyles = _extends$2({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

    // flips variation if reference element overflows boundaries
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    // flips variation if popper content overflows boundaries
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends$2({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric$1(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric$1(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends$2({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends$2({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper$1 = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends$2({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends$2({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends$2({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends$2({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update$1.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper$1.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper$1.placements = placements;
Popper$1.Defaults = Defaults;

var popper = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': Popper$1
});

var require$$2 = /*@__PURE__*/getAugmentedNamespace(popper);

Object.defineProperty(Popper$2, "__esModule", {
  value: true
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react$1 = React__default;

var _propTypes$1 = propTypes.exports;

var _propTypes2$1 = _interopRequireDefault$4(_propTypes$1);

var _popper = require$$2;

var _popper2 = _interopRequireDefault$4(_popper);

function _interopRequireDefault$4(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties$1(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Popper = function (_Component) {
  _inherits(Popper, _Component);

  function Popper() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Popper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Popper.__proto__ || Object.getPrototypeOf(Popper)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this._setArrowNode = function (node) {
      _this._arrowNode = node;
    }, _this._getTargetNode = function () {
      return _this.context.popperManager.getTargetNode();
    }, _this._getOffsets = function (data) {
      return Object.keys(data.offsets).map(function (key) {
        return data.offsets[key];
      });
    }, _this._isDataDirty = function (data) {
      if (_this.state.data) {
        return JSON.stringify(_this._getOffsets(_this.state.data)) !== JSON.stringify(_this._getOffsets(data));
      } else {
        return true;
      }
    }, _this._updateStateModifier = {
      enabled: true,
      order: 900,
      fn: function fn(data) {
        if (_this._isDataDirty(data)) {
          _this.setState({ data: data });
        }
        return data;
      }
    }, _this._getPopperStyle = function () {
      var data = _this.state.data;


      if (!_this._popper || !data) {
        return {
          position: 'absolute',
          pointerEvents: 'none',
          opacity: 0
        };
      }

      return _extends$1({
        position: data.offsets.popper.position
      }, data.styles);
    }, _this._getPopperPlacement = function () {
      return _this.state.data ? _this.state.data.placement : undefined;
    }, _this._getPopperHide = function () {
      return !!_this.state.data && _this.state.data.hide ? '' : undefined;
    }, _this._getArrowStyle = function () {
      if (!_this.state.data || !_this.state.data.offsets.arrow) {
        return {};
      } else {
        var _this$state$data$offs = _this.state.data.offsets.arrow,
            top = _this$state$data$offs.top,
            left = _this$state$data$offs.left;

        return { top: top, left: left };
      }
    }, _this._handlePopperRef = function (node) {
      _this._popperNode = node;
      if (node) {
        _this._createPopper();
      } else {
        _this._destroyPopper();
      }
      if (_this.props.innerRef) {
        _this.props.innerRef(node);
      }
    }, _this._scheduleUpdate = function () {
      _this._popper && _this._popper.scheduleUpdate();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Popper, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        popper: {
          setArrowNode: this._setArrowNode,
          getArrowStyle: this._getArrowStyle
        }
      };
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(lastProps) {
      if (lastProps.placement !== this.props.placement || lastProps.eventsEnabled !== this.props.eventsEnabled) {
        this._destroyPopper();
        this._createPopper();
      }
      if (lastProps.children !== this.props.children) {
        this._scheduleUpdate();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._destroyPopper();
    }
  }, {
    key: '_createPopper',
    value: function _createPopper() {
      var _this2 = this;

      var _props = this.props,
          placement = _props.placement,
          eventsEnabled = _props.eventsEnabled;

      var modifiers = _extends$1({}, this.props.modifiers, {
        applyStyle: { enabled: false },
        updateState: this._updateStateModifier
      });
      if (this._arrowNode) {
        modifiers.arrow = {
          element: this._arrowNode
        };
      }
      this._popper = new _popper2.default(this._getTargetNode(), this._popperNode, {
        placement: placement,
        eventsEnabled: eventsEnabled,
        modifiers: modifiers
      });

      // TODO: look into setTimeout scheduleUpdate call, without it, the popper will not position properly on creation
      setTimeout(function () {
        return _this2._scheduleUpdate();
      });
    }
  }, {
    key: '_destroyPopper',
    value: function _destroyPopper() {
      if (this._popper) {
        this._popper.destroy();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          component = _props2.component;
          _props2.innerRef;
          _props2.placement;
          _props2.eventsEnabled;
          _props2.modifiers;
          var children = _props2.children,
          restProps = _objectWithoutProperties$1(_props2, ['component', 'innerRef', 'placement', 'eventsEnabled', 'modifiers', 'children']);

      var popperStyle = this._getPopperStyle();
      var popperPlacement = this._getPopperPlacement();
      var popperHide = this._getPopperHide();

      if (typeof children === 'function') {
        var popperProps = {
          ref: this._handlePopperRef,
          style: popperStyle,
          'data-placement': popperPlacement,
          'data-x-out-of-boundaries': popperHide
        };
        return children({
          popperProps: popperProps,
          restProps: restProps,
          scheduleUpdate: this._scheduleUpdate
        });
      }

      var componentProps = _extends$1({}, restProps, {
        style: _extends$1({}, restProps.style, popperStyle),
        'data-placement': popperPlacement,
        'data-x-out-of-boundaries': popperHide
      });

      if (typeof component === 'string') {
        componentProps.ref = this._handlePopperRef;
      } else {
        componentProps.innerRef = this._handlePopperRef;
      }

      return (0, _react$1.createElement)(component, componentProps, children);
    }
  }]);

  return Popper;
}(_react$1.Component);

Popper.contextTypes = {
  popperManager: _propTypes2$1.default.object.isRequired
};
Popper.childContextTypes = {
  popper: _propTypes2$1.default.object.isRequired
};
Popper.propTypes = {
  component: _propTypes2$1.default.oneOfType([_propTypes2$1.default.node, _propTypes2$1.default.func]),
  innerRef: _propTypes2$1.default.func,
  placement: _propTypes2$1.default.oneOf(_popper2.default.placements),
  eventsEnabled: _propTypes2$1.default.bool,
  modifiers: _propTypes2$1.default.object,
  children: _propTypes2$1.default.oneOfType([_propTypes2$1.default.node, _propTypes2$1.default.func])
};
Popper.defaultProps = {
  component: 'div',
  placement: 'bottom',
  eventsEnabled: true,
  modifiers: {}
};
Popper$2.default = Popper;

var Arrow$1 = {};

Object.defineProperty(Arrow$1, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = React__default;

var _propTypes = propTypes.exports;

var _propTypes2 = _interopRequireDefault$3(_propTypes);

function _interopRequireDefault$3(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Arrow = function Arrow(props, context) {
  var _props$component = props.component,
      component = _props$component === undefined ? 'span' : _props$component,
      innerRef = props.innerRef,
      children = props.children,
      restProps = _objectWithoutProperties(props, ['component', 'innerRef', 'children']);

  var popper = context.popper;

  var arrowRef = function arrowRef(node) {
    popper.setArrowNode(node);
    if (typeof innerRef === 'function') {
      innerRef(node);
    }
  };
  var arrowStyle = popper.getArrowStyle();

  if (typeof children === 'function') {
    var arrowProps = {
      ref: arrowRef,
      style: arrowStyle
    };
    return children({ arrowProps: arrowProps, restProps: restProps });
  }

  var componentProps = _extends({}, restProps, {
    style: _extends({}, arrowStyle, restProps.style)
  });

  if (typeof component === 'string') {
    componentProps.ref = arrowRef;
  } else {
    componentProps.innerRef = arrowRef;
  }

  return (0, _react.createElement)(component, componentProps, children);
};

Arrow.contextTypes = {
  popper: _propTypes2.default.object.isRequired
};

Arrow.propTypes = {
  component: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]),
  innerRef: _propTypes2.default.func,
  children: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func])
};

Arrow$1.default = Arrow;

Object.defineProperty(reactPopper, "__esModule", {
  value: true
});
reactPopper.Arrow = reactPopper.Popper = reactPopper.Target = reactPopper.Manager = undefined;

var _Manager2 = Manager$1;

var _Manager3 = _interopRequireDefault$2(_Manager2);

var _Target2 = Target$1;

var _Target3 = _interopRequireDefault$2(_Target2);

var _Popper2 = Popper$2;

var _Popper3 = _interopRequireDefault$2(_Popper2);

var _Arrow2 = Arrow$1;

var _Arrow3 = _interopRequireDefault$2(_Arrow2);

function _interopRequireDefault$2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

reactPopper.Manager = _Manager3.default;
reactPopper.Target = _Target3.default;
reactPopper.Popper = _Popper3.default;
reactPopper.Arrow = _Arrow3.default;

var diacritics = {exports: {}};

(function (module) {
// Diacritics.js
// 
// Started as something to be an equivalent of the Google Java Library diacritics library for JavaScript.
// Found this: http://jsperf.com/diacritics/6 and converted it into a reusable module.
// 
// @author Nijiko Yonskai
// @license MIT
// @copyright Nijikokun 2013 <nijikokun@gmail.com>
(function (name, definition) {
  if (module.exports) module.exports = definition();
  else this[name] = definition();
})('Diacritics', function () {
  // Create public object
  var output = {
    map: {}
  };

  // Create private reference map.
  var reference = [
    {'base':' ',    'letters':'\u00A0'},
    {'base':'A',    'letters':'\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F'},
    {'base':'AA',   'letters':'\uA732'},
    {'base':'AE',   'letters':'\u00C6\u01FC\u01E2'},
    {'base':'AO',   'letters':'\uA734'},
    {'base':'AU',   'letters':'\uA736'},
    {'base':'AV',   'letters':'\uA738\uA73A'},
    {'base':'AY',   'letters':'\uA73C'},
    {'base':'B',    'letters':'\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181'},
    {'base':'C',    'letters':'\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E'},
    {'base':'D',    'letters':'\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779'},
    {'base':'DZ',   'letters':'\u01F1\u01C4'},
    {'base':'Dz',   'letters':'\u01F2\u01C5'},
    {'base':'E',    'letters':'\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E'},
    {'base':'F',    'letters':'\u0046\u24BB\uFF26\u1E1E\u0191\uA77B'},
    {'base':'G',    'letters':'\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E'},
    {'base':'H',    'letters':'\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D'},
    {'base':'I',    'letters':'\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197'},
    {'base':'J',    'letters':'\u004A\u24BF\uFF2A\u0134\u0248'},
    {'base':'K',    'letters':'\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2'},
    {'base':'L',    'letters':'\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780'},
    {'base':'LJ',   'letters':'\u01C7'},
    {'base':'Lj',   'letters':'\u01C8'},
    {'base':'M',    'letters':'\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C'},
    {'base':'N',    'letters':'\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4'},
    {'base':'NJ',   'letters':'\u01CA'},
    {'base':'Nj',   'letters':'\u01CB'},
    {'base':'O',    'letters':'\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C'},
    {'base':'OI',   'letters':'\u01A2'},
    {'base':'OO',   'letters':'\uA74E'},
    {'base':'OU',   'letters':'\u0222'},
    {'base':'P',    'letters':'\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754'},
    {'base':'Q',    'letters':'\u0051\u24C6\uFF31\uA756\uA758\u024A'},
    {'base':'R',    'letters':'\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782'},
    {'base':'S',    'letters':'\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784'},
    {'base':'T',    'letters':'\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786'},
    {'base':'Th',   'letters':'\u00DE'},
    {'base':'TZ',   'letters':'\uA728'},
    {'base':'U',    'letters':'\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244'},
    {'base':'V',    'letters':'\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245'},
    {'base':'VY',   'letters':'\uA760'},
    {'base':'W',    'letters':'\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72'},
    {'base':'X',    'letters':'\u0058\u24CD\uFF38\u1E8A\u1E8C'},
    {'base':'Y',    'letters':'\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE'},
    {'base':'Z',    'letters':'\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762'},
    {'base':'a',    'letters':'\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250\u0251'},
    {'base':'aa',   'letters':'\uA733'},
    {'base':'ae',   'letters':'\u00E6\u01FD\u01E3'},
    {'base':'ao',   'letters':'\uA735'},
    {'base':'au',   'letters':'\uA737'},
    {'base':'av',   'letters':'\uA739\uA73B'},
    {'base':'ay',   'letters':'\uA73D'},
    {'base':'b',    'letters':'\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253'},
    {'base':'c',    'letters':'\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184'},
    {'base':'d',    'letters':'\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A'},
    {'base':'dz',   'letters':'\u01F3\u01C6'},
    {'base':'e',    'letters':'\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD'},
    {'base':'f',    'letters':'\u0066\u24D5\uFF46\u1E1F\u0192\uA77C'},
    {'base':'ff',   'letters':'\uFB00'},
    {'base':'fi',   'letters':'\uFB01'},
    {'base':'fl',   'letters':'\uFB02'},
    {'base':'ffi',  'letters':'\uFB03'},
    {'base':'ffl',  'letters':'\uFB04'},
    {'base':'g',    'letters':'\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F'},
    {'base':'h',    'letters':'\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265'},
    {'base':'hv',   'letters':'\u0195'},
    {'base':'i',    'letters':'\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131'},
    {'base':'j',    'letters':'\u006A\u24D9\uFF4A\u0135\u01F0\u0249'},
    {'base':'k',    'letters':'\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3'},
    {'base':'l',    'letters':'\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747'},
    {'base':'lj',   'letters':'\u01C9'},
    {'base':'m',    'letters':'\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F'},
    {'base':'n',    'letters':'\x6E\xF1\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5\u043B\u0509'},
    {'base':'nj',   'letters':'\u01CC'},
    {'base':'o',    'letters':'\u07C0\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275'},
    {'base':'oe',   'letters':'\u0152\u0153'},
    {'base':'oi',   'letters':'\u01A3'},
    {'base':'ou',   'letters':'\u0223'},
    {'base':'oo',   'letters':'\uA74F'},
    {'base':'p',    'letters':'\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755'},
    {'base':'q',    'letters':'\u0071\u24E0\uFF51\u024B\uA757\uA759'},
    {'base':'r',    'letters':'\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783'},
    {'base':'s',    'letters':'\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B'},
    {'base':'ss',   'letters':'\xDF'},
    {'base':'t',    'letters':'\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787'},
    {'base':'th',   'letters':'\u00FE'},
    {'base':'tz',   'letters':'\uA729'},
    {'base':'u',    'letters': '\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289'},
    {'base':'v',    'letters':'\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C'},
    {'base':'vy',   'letters':'\uA761'},
    {'base':'w',    'letters':'\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73'},
    {'base':'x',    'letters':'\u0078\u24E7\uFF58\u1E8B\u1E8D'},
    {'base':'y',    'letters':'\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF'},
    {'base':'z',    'letters':'\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763'}
  ];

  // Generate reference mapping
  for (var i = 0, refLength = reference.length; i < refLength; i++){
    var letters = reference[i].letters.split("");

    for (var j = 0, letLength = letters.length; j < letLength; j++){
      output.map[letters[j]] = reference[i].base;
    }
  }

  /**
   * Clean accents (diacritics) from string.
   * 
   * @param  {String} input String to be cleaned of diacritics.
   * @return {String}
   */
  output.clean = function (input) {
    if (!input || !input.length || input.length < 1) {
      return "";
    }

    var string = "";
    var letters = input.split("");
    var index = 0;
    var length = letters.length;
    var letter;

    for (; index < length; index++) {
      letter = letters[index];
      string += letter in output.map ? output.map[letter] : letter;
    }

    return string;
  };

  return output;
});
}(diacritics));

var removeDiacritics = diacritics.exports.clean;

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_special_characters
var specialCharsRegex = /[.*+?^${}()|[\]\\]/g;

// http://www.ecma-international.org/ecma-262/5.1/#sec-15.10.2.6
var wordCharacterRegex = /[a-z0-9_]/i;

var whitespacesRegex = /\s+/;

function escapeRegexCharacters(str) {
  return str.replace(specialCharsRegex, '\\$&');
}

var match = function match(text, query) {
  text = removeDiacritics(text);
  query = removeDiacritics(query);

  return (
    query
      .trim()
      .split(whitespacesRegex)
      // If query is blank, we'll get empty string here, so let's filter it out.
      .filter(function(word) {
        return word.length > 0;
      })
      .reduce(function(result, word) {
        var wordLen = word.length;
        var prefix = wordCharacterRegex.test(word[0]) ? '\\b' : '';
        var regex = new RegExp(prefix + escapeRegexCharacters(word), 'i');
        var index = text.search(regex);

        if (index > -1) {
          result.push([index, index + wordLen]);

          // Replace what we just found with spaces so we don't find it again.
          text =
            text.slice(0, index) +
            new Array(wordLen + 1).join(' ') +
            text.slice(index + wordLen);
        }

        return result;
      }, [])
      .sort(function(match1, match2) {
        return match1[0] - match2[0];
      })
  );
};

var parse = function parse(text, matches) {
  var result = [];

  if (matches.length === 0) {
    result.push({
      text: text,
      highlight: false
    });
  } else {
    if (matches[0][0] > 0) {
      result.push({
        text: text.slice(0, matches[0][0]),
        highlight: false
      });
    }
  }

  matches.forEach(function(match, i) {
    var startIndex = match[0];
    var endIndex = match[1];

    result.push({
      text: text.slice(startIndex, endIndex),
      highlight: true
    });

    if (i === matches.length - 1) {
      if (endIndex < text.length) {
        result.push({
          text: text.slice(endIndex, text.length),
          highlight: false
        });
      }
    } else if (endIndex < matches[i + 1][0]) {
      result.push({
        text: text.slice(endIndex, matches[i + 1][0]),
        highlight: false
      });
    }
  });

  return result;
};

(function (module, exports) {
(function webpackUniversalModuleDefinition(root, factory) {
	module.exports = factory();
})(commonjsGlobal, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ());
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] };

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = invariant_1;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = emptyFunction_1;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = warning_1;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.geocodeBySuggestion = exports.geocodeByPlaceID = undefined;

var _MUIPlacesAutocomplete = __webpack_require__(6);

var _MUIPlacesAutocomplete2 = _interopRequireDefault(_MUIPlacesAutocomplete);

var _geocode = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.geocodeByPlaceID = _geocode.geocodeByPlaceID;
exports.geocodeBySuggestion = _geocode.geocodeBySuggestion;
exports.default = _MUIPlacesAutocomplete2.default;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Grow = __webpack_require__(13);

var _Grow2 = _interopRequireDefault(_Grow);

var _MenuList = __webpack_require__(14);

var _MenuList2 = _interopRequireDefault(_MenuList);

var _MenuItem = __webpack_require__(15);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Paper = __webpack_require__(16);

var _Paper2 = _interopRequireDefault(_Paper);

var _TextField = __webpack_require__(17);

var _TextField2 = _interopRequireDefault(_TextField);

var _downshift = __webpack_require__(18);

var _downshift2 = _interopRequireDefault(_downshift);

var _reactPopper = __webpack_require__(19);

var _match = __webpack_require__(20);

var _match2 = _interopRequireDefault(_match);

var _parse = __webpack_require__(21);

var _parse2 = _interopRequireDefault(_parse);

var _googleLogoOnWhiteBg = __webpack_require__(22);

var _googleLogoOnWhiteBg2 = _interopRequireDefault(_googleLogoOnWhiteBg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MUIPlacesAutocomplete = function (_React$Component) {
  _inherits(MUIPlacesAutocomplete, _React$Component);

  _createClass(MUIPlacesAutocomplete, null, [{
    key: 'renderSuggestionsContainer',

    // Renders the container that will hold the suggestions and defers to other methods to render the
    // suggestions themselves. This method should only be called if you do indeed plan on rendering
    // the suggestions. In our case this is when 'isOpen' Downshift render prop is 'true'. Thats
    // because the methods that are used to render the suggestions invoke the 'getItemProps' prop
    // getter from Downshift which is an impure function. In otherwords even if you don't render the
    // suggestions container Downshift will still think we are rendering suggestions.
    //
    // The 'downshiftRenderProps' argument expects an object of props that Downshift passes to the
    // function which is set as the value of the 'render' prop on the <Downshift> component. Currently
    // the following Downshift render props are expected on the value provided to the
    // 'downshiftRenderProps' argument:
    // * getItemProps - function that returns the props that ought to be applied to menu item elements
    // that are rendered
    // * inputValue - current value of the controlled <input> element
    // * highlightedIndex - index of the currently highlighted menu item elements that have been
    // rendered
    value: function renderSuggestionsContainer(suggestions, downshiftRenderProps) {
      // Return null here if there are no suggestions to render. If we don't we will show a little box
      // that is empty and popped over the render target. This handles the case where a suggestion is
      // selected, the input value is updated, and then the user deletes the input value. This
      // behavior is attributed to setting the suggestions to the empty array in the
      // 'onInputValueChange' method.
      //
      // Be sure we return null here before we render any of our suggestions lest we invoke the impure
      // 'getItemProps' function.
      if (suggestions.length === 0) {
        return null;
      }

      // The autocomplete service can return multiple of the same predictions. This can sometimes be
      // seen after someone selects a suggestion and starts to delete/backspace the input value which
      // contains their selected suggestion. Here we will ensure uniqueness amongst suggestions using
      // an ES6 Map so that we don't get duplicate key errors when we render our suggestions.
      var uniqueSuggestions = new Map(suggestions.map(function (suggestion) {
        return [suggestion.description, suggestion];
      }));

      var renderedSuggestions = MUIPlacesAutocomplete.renderSuggestions([].concat(_toConsumableArray(uniqueSuggestions.values())), downshiftRenderProps);

      // On the <Popper> component we enable the 'inner' modifier. This is needed as Popper JS will
      // try to change the position of the popover depending on if it deems the popover is in or out
      // of view. The result of enabling the 'inner' modifier means that the position of the popover
      // won't change at all regardless of if the popover is in or out of view.
      //
      // Typically the <Popper> receives actual nodes for its children but in our case we opted to
      // provided a function that creats a <div> with styles applied to it at the top-level. This
      // <div> with the styles applied is to account for issues that arise when testing. Without it we
      // will get the following warnings: NaN is an invalid value for the top/left css style property.
      // This is because the DOM provider/implementation we use when testing (jsdom) doesn't return
      // values for bounding client rect.
      return _react2.default.createElement(
        _reactPopper.Popper,
        {
          placement: 'top-start',
          modifiers: { inner: { enabled: true } },
          style: { left: 0, right: 0, zIndex: 1 }
        },
        function (_ref) {
          var popperProps = _ref.popperProps,
              restProps = _ref.restProps;
          return _react2.default.createElement(
            'div',
            _extends({}, popperProps, restProps, {
              style: _extends({}, popperProps.style, {
                top: popperProps.style.top || 0,
                left: popperProps.style.left || 0
              }, restProps.style)
            }),
            _react2.default.createElement(
              _Grow2.default,
              { 'in': true, style: { transformOrigin: '0 0 0' } },
              _react2.default.createElement(
                _Paper2.default,
                null,
                _react2.default.createElement(
                  _MenuList2.default,
                  null,
                  renderedSuggestions,
                  renderedSuggestions.length > 0 ? _react2.default.createElement(
                    'div',
                    { style: { display: 'flex' } },
                    _react2.default.createElement('span', { style: { flex: 1 } }),
                    _react2.default.createElement('img', { src: _googleLogoOnWhiteBg2.default, alt: '' })
                  ) : null
                )
              )
            )
          );
        }
      );
    }

    // Helper method to be called by 'renderSuggestionsContainer'. Returns list of rendered
    // suggestions.

  }, {
    key: 'renderSuggestions',
    value: function renderSuggestions(suggestions, _ref2) {
      var getItemProps = _ref2.getItemProps,
          inputValue = _ref2.inputValue,
          highlightedIndex = _ref2.highlightedIndex;

      return suggestions.map(function (suggestion, index) {
        return MUIPlacesAutocomplete.renderSuggestion(suggestion, { getItemProps: getItemProps, inputValue: inputValue, isHighlighted: index === highlightedIndex });
      });
    }

    // Helper method to be called by 'renderSuggestions'. Renders suggestions where they are
    // highlighted based on the parts of the suggestion that match the query the user entered. This is
    // inline with the Google Maps webapp at the time of writing. This behavior is opposite of how the
    // Google Search bar/component/element works though.

  }, {
    key: 'renderSuggestion',
    value: function renderSuggestion(suggestion, _ref3) {
      var getItemProps = _ref3.getItemProps,
          inputValue = _ref3.inputValue,
          isHighlighted = _ref3.isHighlighted;
      var description = suggestion.description;

      // Calculate the chars to highlight in the suggestion 'description' based on the query
      // ('inputValue') that the user provided us. An array is returned and if any chars ought to be
      // highlighted the array will contain a pair ([a, b]) which denote the indexes of chars to
      // highlight (i.e. text.slice(a, b)).

      var matches = (0, _match2.default)(description, inputValue);

      // Break up the suggestion 'description' based on the parts that matched. An array is returned
      // of parts where each one has an indication of if it ought to be highlighted or not.
      var parts = (0, _parse2.default)(description, matches);

      return _react2.default.createElement(
        _MenuItem2.default,
        _extends({}, getItemProps({ item: suggestion }), {
          key: description,
          selected: isHighlighted,
          component: 'div'
        }),
        _react2.default.createElement(
          'div',
          null,
          parts.map(function (part, index) {
            if (part.highlight) {
              // Since we are further breaking down an array there is nothing unique about the
              // elements in the resulting array so we can disable the react/no-array-index-key
              // ESLint rule when rendering our suggestion
              // eslint-disable-next-line react/no-array-index-key
              return _react2.default.createElement(
                'strong',
                { key: index, style: { fontWeight: 500 } },
                part.text
              );
            }

            // Since we are further breaking down an array there is nothing unique about the
            // elements in the resulting array so we can disable the react/no-array-index-key
            // ESLint rule when rendering our suggestion
            // eslint-disable-next-line react/no-array-index-key
            return _react2.default.createElement(
              'span',
              { key: index, style: { fontWeight: 300 } },
              part.text
            );
          })
        )
      );
    }
  }]);

  function MUIPlacesAutocomplete() {
    _classCallCheck(this, MUIPlacesAutocomplete);

    // Control the <input> element/<Autosuggest> component and make this React component the source
    // of truth for their state.
    var _this = _possibleConstructorReturn(this, (MUIPlacesAutocomplete.__proto__ || Object.getPrototypeOf(MUIPlacesAutocomplete)).call(this));

    _this.state = {
      suggestions: []
    };

    _this.onInputValueChange = _this.onInputValueChange.bind(_this);
    _this.onSuggestionSelected = _this.onSuggestionSelected.bind(_this);
    _this.renderAutocomplete = _this.renderAutocomplete.bind(_this);
    return _this;
  }

  _createClass(MUIPlacesAutocomplete, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // After the component is mounted it is safe to create a new instance of the autocomplete
      // service client. That's because at this point the Google Maps JavaScript API has been loaded.
      // Also if we do it before the component is mounted (i.e. in 'componentWillMount()') we won't be
      // safe to render on the server (SSR) as the 'window' object isn't available.
      this.autocompleteService = new window.google.maps.places.AutocompleteService();
    }

    // This function is called whenever Downshift detects that the input value, well, has changed.
    // Although we only use a single argument in our function signature Downshift documents the
    // function signature as:
    // onInputValueChange(inputValue: string, stateAndHelpers: object)

  }, {
    key: 'onInputValueChange',
    value: function onInputValueChange(inputValue) {
      var _this2 = this;

      // If the inputs value is empty we can return as we will get an error if we provide the empty
      // string when we perform a search. Set our suggestions to empty here as well so we don't render
      // the old suggestions.
      if (inputValue === '') {
        this.setState({ suggestions: [] });
        return;
      }

      var createAutocompleteRequest = this.props.createAutocompleteRequest;


      this.autocompleteService.getPlacePredictions(createAutocompleteRequest(inputValue), function (predictions, serviceStatus) {
        // If the response doesn't contain a valid result then set our state as if no suggestions
        // were returned
        if (serviceStatus !== window.google.maps.places.PlacesServiceStatus.OK) {
          _this2.setState({ suggestions: [] });
          return;
        }

        _this2.setState({ suggestions: predictions });
      });
    }

    // This function is called whenever Downshift detects that a rendered suggestion has been
    // selected. Although we only use a single argument in our function signature Downshift documents
    // the function signature as:
    // onSelect(selectedItem: any, stateAndHelpers: object)

  }, {
    key: 'onSuggestionSelected',
    value: function onSuggestionSelected(suggestion) {
      var onSuggestionSelected = this.props.onSuggestionSelected;


      if (onSuggestionSelected) {
        onSuggestionSelected(suggestion);
      }
    }
  }, {
    key: 'renderAutocomplete',
    value: function renderAutocomplete(_ref4) {
      var getInputProps = _ref4.getInputProps,
          getItemProps = _ref4.getItemProps,
          isOpen = _ref4.isOpen,
          inputValue = _ref4.inputValue,
          highlightedIndex = _ref4.highlightedIndex;
      var suggestions = this.state.suggestions;
      var _props = this.props,
          renderTarget = _props.renderTarget,
          textFieldProps = _props.textFieldProps;

      // We set the value of 'tag' on the <Manager> component to false to allow the rendering of
      // children instead of a specific DOM element.
      //
      // We only want to render our suggestions container if Downshift says we are open AND there are
      // suggestions to actually render. There may not be suggestions yet due to the async nature of
      // requesting them from the Google Maps/Places service.
      //
      // Provide an 'id' to the input props (see <TextField>) to accommodate SSR. If we don't then we
      // will see checksum errors with the 'id' prop of the <input> element not matching what was
      // rendered on the server vs. what was rendered on the client after rehydration due to automatic
      // 'id' prop generation by <Downshift>.

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactPopper.Manager,
          { tag: false },
          _react2.default.createElement(_TextField2.default, getInputProps(_extends({ id: 'mui-places-autocomplete-input' }, textFieldProps))),
          _react2.default.createElement(
            _reactPopper.Target,
            null,
            renderTarget()
          ),
          isOpen ? MUIPlacesAutocomplete.renderSuggestionsContainer(suggestions, { getItemProps: getItemProps, inputValue: inputValue, highlightedIndex: highlightedIndex }) : null
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      // Check to see if a consumer would like to exert control on the <input> elements state. If so
      // we pass it to the <Downshift> component as the 'inputValue' prop to provide control of the
      // <input> elements state to the consumer.
      var controlProps = this.props.textFieldProps && this.props.textFieldProps.value ? { inputValue: this.props.textFieldProps.value } : {};

      return _react2.default.createElement(_downshift2.default, _extends({
        onSelect: this.onSuggestionSelected,
        onInputValueChange: this.onInputValueChange,
        itemToString: function itemToString(suggestion) {
          return suggestion ? suggestion.description : '';
        },
        render: this.renderAutocomplete
      }, controlProps));
    }
  }]);

  return MUIPlacesAutocomplete;
}(_react2.default.Component);

exports.default = MUIPlacesAutocomplete;


MUIPlacesAutocomplete.propTypes = {
  onSuggestionSelected: _propTypes2.default.func.isRequired,
  renderTarget: _propTypes2.default.func.isRequired,
  createAutocompleteRequest: _propTypes2.default.func,
  textFieldProps: _propTypes2.default.object
};

MUIPlacesAutocomplete.defaultProps = {
  createAutocompleteRequest: function createAutocompleteRequest(inputValue) {
    return { input: inputValue };
  },
  textFieldProps: { autoFocus: false, placeholder: 'Search for a place', fullWidth: true }
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = React__default;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(9)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(12)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)));

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(3);
var invariant = __webpack_require__(1);
var warning = __webpack_require__(4);
var assign = __webpack_require__(10);

var ReactPropTypesSecret = __webpack_require__(2);
var checkPropTypes = __webpack_require__(11);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)));

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = objectAssign;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(1);
  var warning = __webpack_require__(4);
  var ReactPropTypesSecret = __webpack_require__(2);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)));

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(3);
var invariant = __webpack_require__(1);
var ReactPropTypesSecret = __webpack_require__(2);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require$$5;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require$$6;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require$$7;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = Paper;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require$$9;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require$$10;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = reactPopper;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = match;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = parse;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "60e8a8323a1f5c9dc59c6783d5974123.png";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
var geocodeByPlaceID = exports.geocodeByPlaceID = function geocodeByPlaceID(placeId) {
  // After the component is mounted it is safe to create a new instance of the Geocoder client.
  // That's because at this point the Google Maps JavaScript API has been loaded. Also if we do it
  // before the component is mounted (i.e. in 'componentWillMount()') we won't be safe to render
  // on the server (SSR) as the 'window' object isn't available.
  var geocoder = new window.google.maps.Geocoder();

  return new Promise(function (resolve, reject) {
    geocoder.geocode({ placeId: placeId }, function (results, status) {
      if (status !== window.google.maps.GeocoderStatus.OK) {
        reject(new Error("Geocoding query for a place with an ID of '" + placeId + "' failed - response status: " + status));

        return;
      }

      resolve(results);
    });
  });
};

// Disable the ESLint rule camelcase on the next line as the suggestions returned from the Google
// Maps service have properties that are snake cased
// eslint-disable-next-line camelcase
exports.geocodeBySuggestion = function geocodeBySuggestion(_ref) {
  var place_id = _ref.place_id;
  return geocodeByPlaceID(place_id);
};

/***/ })
/******/ ]);
});
}(dist));

var MUIPlacesAutocomplete = /*@__PURE__*/getDefaultExportFromCjs(dist.exports);

var useStyles$f = makeStyles({
    root: {
        position: "relative",
        width: "100%"
    }
});
var googleAddressMap = {
    street_number: "short_name",
    route: "long_name",
    locality: "long_name",
    country: "short_name",
    postal_code: "short_name"
};
var GeosuggestInput = function (_a) {
    var onPlaceChanged = _a.onPlaceChanged, value = _a.value, placeholder = _a.placeholder, required = _a.required;
    var classes = useStyles$f();
    var onAddressSelect = function (suggestion) {
        if (suggestion) {
            dist.exports.geocodeByPlaceID(suggestion.place_id).then(function (place) {
                if (place.length > 0) {
                    onPlaceChanged(buildAddress(place[0]));
                }
            });
        }
    };
    var buildAddress = function (place) {
        return place.address_components.reduce(function (acc, addressItem) {
            var _a;
            var addressType = addressItem.types[0];
            return __assign(__assign({}, acc), (_a = {}, _a[addressType] = addressItem[googleAddressMap[addressType]], _a));
        }, {});
    };
    var renderTarget = function () { return (React__default.createElement("div", null)); };
    return (React__default.createElement("div", { className: classes.root },
        React__default.createElement(MUIPlacesAutocomplete, { onSuggestionSelected: onAddressSelect, initialValue: value, renderTarget: renderTarget, textFieldProps: { placeholder: placeholder, required: required, fullWidth: true } })));
};

var moment$1 = {exports: {}};

(function (module, exports) {
(function (global, factory) {
    module.exports = factory() ;
}(commonjsGlobal, (function () {
    var hookCallback;

    function hooks() {
        return hookCallback.apply(null, arguments);
    }

    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback(callback) {
        hookCallback = callback;
    }

    function isArray(input) {
        return (
            input instanceof Array ||
            Object.prototype.toString.call(input) === '[object Array]'
        );
    }

    function isObject(input) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return (
            input != null &&
            Object.prototype.toString.call(input) === '[object Object]'
        );
    }

    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }

    function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) {
            return Object.getOwnPropertyNames(obj).length === 0;
        } else {
            var k;
            for (k in obj) {
                if (hasOwnProp(obj, k)) {
                    return false;
                }
            }
            return true;
        }
    }

    function isUndefined(input) {
        return input === void 0;
    }

    function isNumber(input) {
        return (
            typeof input === 'number' ||
            Object.prototype.toString.call(input) === '[object Number]'
        );
    }

    function isDate(input) {
        return (
            input instanceof Date ||
            Object.prototype.toString.call(input) === '[object Date]'
        );
    }

    function map(arr, fn) {
        var res = [],
            i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function createUTC(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty: false,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: false,
            invalidEra: null,
            invalidMonth: null,
            invalidFormat: false,
            userInvalidated: false,
            iso: false,
            parsedDateParts: [],
            era: null,
            meridiem: null,
            rfc2822: false,
            weekdayMismatch: false,
        };
    }

    function getParsingFlags(m) {
        if (m._pf == null) {
            m._pf = defaultParsingFlags();
        }
        return m._pf;
    }

    var some;
    if (Array.prototype.some) {
        some = Array.prototype.some;
    } else {
        some = function (fun) {
            var t = Object(this),
                len = t.length >>> 0,
                i;

            for (i = 0; i < len; i++) {
                if (i in t && fun.call(this, t[i], i, t)) {
                    return true;
                }
            }

            return false;
        };
    }

    function isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m),
                parsedParts = some.call(flags.parsedDateParts, function (i) {
                    return i != null;
                }),
                isNowValid =
                    !isNaN(m._d.getTime()) &&
                    flags.overflow < 0 &&
                    !flags.empty &&
                    !flags.invalidEra &&
                    !flags.invalidMonth &&
                    !flags.invalidWeekday &&
                    !flags.weekdayMismatch &&
                    !flags.nullInput &&
                    !flags.invalidFormat &&
                    !flags.userInvalidated &&
                    (!flags.meridiem || (flags.meridiem && parsedParts));

            if (m._strict) {
                isNowValid =
                    isNowValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
            }

            if (Object.isFrozen == null || !Object.isFrozen(m)) {
                m._isValid = isNowValid;
            } else {
                return isNowValid;
            }
        }
        return m._isValid;
    }

    function createInvalid(flags) {
        var m = createUTC(NaN);
        if (flags != null) {
            extend(getParsingFlags(m), flags);
        } else {
            getParsingFlags(m).userInvalidated = true;
        }

        return m;
    }

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    var momentProperties = (hooks.momentProperties = []),
        updateInProgress = false;

    function copyConfig(to, from) {
        var i, prop, val;

        if (!isUndefined(from._isAMomentObject)) {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (!isUndefined(from._i)) {
            to._i = from._i;
        }
        if (!isUndefined(from._f)) {
            to._f = from._f;
        }
        if (!isUndefined(from._l)) {
            to._l = from._l;
        }
        if (!isUndefined(from._strict)) {
            to._strict = from._strict;
        }
        if (!isUndefined(from._tzm)) {
            to._tzm = from._tzm;
        }
        if (!isUndefined(from._isUTC)) {
            to._isUTC = from._isUTC;
        }
        if (!isUndefined(from._offset)) {
            to._offset = from._offset;
        }
        if (!isUndefined(from._pf)) {
            to._pf = getParsingFlags(from);
        }
        if (!isUndefined(from._locale)) {
            to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
            for (i = 0; i < momentProperties.length; i++) {
                prop = momentProperties[i];
                val = from[prop];
                if (!isUndefined(val)) {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) {
            this._d = new Date(NaN);
        }
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
        }
    }

    function isMoment(obj) {
        return (
            obj instanceof Moment || (obj != null && obj._isAMomentObject != null)
        );
    }

    function warn(msg) {
        if (
            hooks.suppressDeprecationWarnings === false &&
            typeof console !== 'undefined' &&
            console.warn
        ) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;

        return extend(function () {
            if (hooks.deprecationHandler != null) {
                hooks.deprecationHandler(null, msg);
            }
            if (firstTime) {
                var args = [],
                    arg,
                    i,
                    key;
                for (i = 0; i < arguments.length; i++) {
                    arg = '';
                    if (typeof arguments[i] === 'object') {
                        arg += '\n[' + i + '] ';
                        for (key in arguments[0]) {
                            if (hasOwnProp(arguments[0], key)) {
                                arg += key + ': ' + arguments[0][key] + ', ';
                            }
                        }
                        arg = arg.slice(0, -2); // Remove trailing comma and space
                    } else {
                        arg = arguments[i];
                    }
                    args.push(arg);
                }
                warn(
                    msg +
                        '\nArguments: ' +
                        Array.prototype.slice.call(args).join('') +
                        '\n' +
                        new Error().stack
                );
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    var deprecations = {};

    function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(name, msg);
        }
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }

    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;

    function isFunction(input) {
        return (
            (typeof Function !== 'undefined' && input instanceof Function) ||
            Object.prototype.toString.call(input) === '[object Function]'
        );
    }

    function set(config) {
        var prop, i;
        for (i in config) {
            if (hasOwnProp(config, i)) {
                prop = config[i];
                if (isFunction(prop)) {
                    this[i] = prop;
                } else {
                    this['_' + i] = prop;
                }
            }
        }
        this._config = config;
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
        // TODO: Remove "ordinalParse" fallback in next major release.
        this._dayOfMonthOrdinalParseLenient = new RegExp(
            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
                '|' +
                /\d{1,2}/.source
        );
    }

    function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig),
            prop;
        for (prop in childConfig) {
            if (hasOwnProp(childConfig, prop)) {
                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                    res[prop] = {};
                    extend(res[prop], parentConfig[prop]);
                    extend(res[prop], childConfig[prop]);
                } else if (childConfig[prop] != null) {
                    res[prop] = childConfig[prop];
                } else {
                    delete res[prop];
                }
            }
        }
        for (prop in parentConfig) {
            if (
                hasOwnProp(parentConfig, prop) &&
                !hasOwnProp(childConfig, prop) &&
                isObject(parentConfig[prop])
            ) {
                // make sure changes to properties don't modify parent config
                res[prop] = extend({}, res[prop]);
            }
        }
        return res;
    }

    function Locale(config) {
        if (config != null) {
            this.set(config);
        }
    }

    var keys;

    if (Object.keys) {
        keys = Object.keys;
    } else {
        keys = function (obj) {
            var i,
                res = [];
            for (i in obj) {
                if (hasOwnProp(obj, i)) {
                    res.push(i);
                }
            }
            return res;
        };
    }

    var defaultCalendar = {
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        sameElse: 'L',
    };

    function calendar(key, mom, now) {
        var output = this._calendar[key] || this._calendar['sameElse'];
        return isFunction(output) ? output.call(mom, now) : output;
    }

    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (
            (sign ? (forceSign ? '+' : '') : '-') +
            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) +
            absNumber
        );
    }

    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        formatFunctions = {},
        formatTokenFunctions = {};

    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken(token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') {
            func = function () {
                return this[callback]();
            };
        }
        if (token) {
            formatTokenFunctions[token] = func;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
                return this.localeData().ordinal(
                    func.apply(this, arguments),
                    token
                );
            };
        }
    }

    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens),
            i,
            length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '',
                i;
            for (i = 0; i < length; i++) {
                output += isFunction(array[i])
                    ? array[i].call(mom, format)
                    : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] =
            formatFunctions[format] || makeFormatFunction(format);

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(
                localFormattingTokens,
                replaceLongDateFormatTokens
            );
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }

    var defaultLongDateFormat = {
        LTS: 'h:mm:ss A',
        LT: 'h:mm A',
        L: 'MM/DD/YYYY',
        LL: 'MMMM D, YYYY',
        LLL: 'MMMM D, YYYY h:mm A',
        LLLL: 'dddd, MMMM D, YYYY h:mm A',
    };

    function longDateFormat(key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
            return format;
        }

        this._longDateFormat[key] = formatUpper
            .match(formattingTokens)
            .map(function (tok) {
                if (
                    tok === 'MMMM' ||
                    tok === 'MM' ||
                    tok === 'DD' ||
                    tok === 'dddd'
                ) {
                    return tok.slice(1);
                }
                return tok;
            })
            .join('');

        return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate() {
        return this._invalidDate;
    }

    var defaultOrdinal = '%d',
        defaultDayOfMonthOrdinalParse = /\d{1,2}/;

    function ordinal(number) {
        return this._ordinal.replace('%d', number);
    }

    var defaultRelativeTime = {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        ss: '%d seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        w: 'a week',
        ww: '%d weeks',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years',
    };

    function relativeTime(number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return isFunction(output)
            ? output(number, withoutSuffix, string, isFuture)
            : output.replace(/%d/i, number);
    }

    function pastFuture(diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }

    var aliases = {};

    function addUnitAlias(unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }

    function normalizeUnits(units) {
        return typeof units === 'string'
            ? aliases[units] || aliases[units.toLowerCase()]
            : undefined;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    var priorities = {};

    function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
    }

    function getPrioritizedUnits(unitsObj) {
        var units = [],
            u;
        for (u in unitsObj) {
            if (hasOwnProp(unitsObj, u)) {
                units.push({ unit: u, priority: priorities[u] });
            }
        }
        units.sort(function (a, b) {
            return a.priority - b.priority;
        });
        return units;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    function absFloor(number) {
        if (number < 0) {
            // -0 -> 0
            return Math.ceil(number) || 0;
        } else {
            return Math.floor(number);
        }
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }

        return value;
    }

    function makeGetSet(unit, keepTime) {
        return function (value) {
            if (value != null) {
                set$1(this, unit, value);
                hooks.updateOffset(this, keepTime);
                return this;
            } else {
                return get(this, unit);
            }
        };
    }

    function get(mom, unit) {
        return mom.isValid()
            ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]()
            : NaN;
    }

    function set$1(mom, unit, value) {
        if (mom.isValid() && !isNaN(value)) {
            if (
                unit === 'FullYear' &&
                isLeapYear(mom.year()) &&
                mom.month() === 1 &&
                mom.date() === 29
            ) {
                value = toInt(value);
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](
                    value,
                    mom.month(),
                    daysInMonth(value, mom.month())
                );
            } else {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
            }
        }
    }

    // MOMENTS

    function stringGet(units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units]();
        }
        return this;
    }

    function stringSet(units, value) {
        if (typeof units === 'object') {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units),
                i;
            for (i = 0; i < prioritized.length; i++) {
                this[prioritized[i].unit](units[prioritized[i].unit]);
            }
        } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
                return this[units](value);
            }
        }
        return this;
    }

    var match1 = /\d/, //       0 - 9
        match2 = /\d\d/, //      00 - 99
        match3 = /\d{3}/, //     000 - 999
        match4 = /\d{4}/, //    0000 - 9999
        match6 = /[+-]?\d{6}/, // -999999 - 999999
        match1to2 = /\d\d?/, //       0 - 99
        match3to4 = /\d\d\d\d?/, //     999 - 9999
        match5to6 = /\d\d\d\d\d\d?/, //   99999 - 999999
        match1to3 = /\d{1,3}/, //       0 - 999
        match1to4 = /\d{1,4}/, //       0 - 9999
        match1to6 = /[+-]?\d{1,6}/, // -999999 - 999999
        matchUnsigned = /\d+/, //       0 - inf
        matchSigned = /[+-]?\d+/, //    -inf - inf
        matchOffset = /Z|[+-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
        matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, // +00 -00 +00:00 -00:00 +0000 -0000 or Z
        matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123
        // any word (or two) characters or numbers including two/three word month in arabic.
        // includes scottish gaelic two word and hyphenated months
        matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
        regexes;

    regexes = {};

    function addRegexToken(token, regex, strictRegex) {
        regexes[token] = isFunction(regex)
            ? regex
            : function (isStrict, localeData) {
                  return isStrict && strictRegex ? strictRegex : regex;
              };
    }

    function getParseRegexForToken(token, config) {
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return regexEscape(
            s
                .replace('\\', '')
                .replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (
                    matched,
                    p1,
                    p2,
                    p3,
                    p4
                ) {
                    return p1 || p2 || p3 || p4;
                })
        );
    }

    function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    var tokens = {};

    function addParseToken(token, callback) {
        var i,
            func = callback;
        if (typeof token === 'string') {
            token = [token];
        }
        if (isNumber(callback)) {
            func = function (input, array) {
                array[callback] = toInt(input);
            };
        }
        for (i = 0; i < token.length; i++) {
            tokens[token[i]] = func;
        }
    }

    function addWeekParseToken(token, callback) {
        addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }

    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
    }

    var YEAR = 0,
        MONTH = 1,
        DATE = 2,
        HOUR = 3,
        MINUTE = 4,
        SECOND = 5,
        MILLISECOND = 6,
        WEEK = 7,
        WEEKDAY = 8;

    function mod(n, x) {
        return ((n % x) + x) % x;
    }

    var indexOf;

    if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function (o) {
            // I know
            var i;
            for (i = 0; i < this.length; ++i) {
                if (this[i] === o) {
                    return i;
                }
            }
            return -1;
        };
    }

    function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) {
            return NaN;
        }
        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1
            ? isLeapYear(year)
                ? 29
                : 28
            : 31 - ((modMonth % 7) % 2);
    }

    // FORMATTING

    addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
    });

    addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
    });

    addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
    });

    // ALIASES

    addUnitAlias('month', 'M');

    // PRIORITY

    addUnitPriority('month', 8);

    // PARSING

    addRegexToken('M', match1to2);
    addRegexToken('MM', match1to2, match2);
    addRegexToken('MMM', function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });

    addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
    });

    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        } else {
            getParsingFlags(config).invalidMonth = input;
        }
    });

    // LOCALES

    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
            '_'
        ),
        defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split(
            '_'
        ),
        MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        defaultMonthsShortRegex = matchWord,
        defaultMonthsRegex = matchWord;

    function localeMonths(m, format) {
        if (!m) {
            return isArray(this._months)
                ? this._months
                : this._months['standalone'];
        }
        return isArray(this._months)
            ? this._months[m.month()]
            : this._months[
                  (this._months.isFormat || MONTHS_IN_FORMAT).test(format)
                      ? 'format'
                      : 'standalone'
              ][m.month()];
    }

    function localeMonthsShort(m, format) {
        if (!m) {
            return isArray(this._monthsShort)
                ? this._monthsShort
                : this._monthsShort['standalone'];
        }
        return isArray(this._monthsShort)
            ? this._monthsShort[m.month()]
            : this._monthsShort[
                  MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'
              ][m.month()];
    }

    function handleStrictParse(monthName, format, strict) {
        var i,
            ii,
            mom,
            llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
                mom = createUTC([2000, i]);
                this._shortMonthsParse[i] = this.monthsShort(
                    mom,
                    ''
                ).toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeMonthsParse(monthName, format, strict) {
        var i, mom, regex;

        if (this._monthsParseExact) {
            return handleStrictParse.call(this, monthName, format, strict);
        }

        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }

        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp(
                    '^' + this.months(mom, '').replace('.', '') + '$',
                    'i'
                );
                this._shortMonthsParse[i] = new RegExp(
                    '^' + this.monthsShort(mom, '').replace('.', '') + '$',
                    'i'
                );
            }
            if (!strict && !this._monthsParse[i]) {
                regex =
                    '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (
                strict &&
                format === 'MMMM' &&
                this._longMonthsParse[i].test(monthName)
            ) {
                return i;
            } else if (
                strict &&
                format === 'MMM' &&
                this._shortMonthsParse[i].test(monthName)
            ) {
                return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function setMonth(mom, value) {
        var dayOfMonth;

        if (!mom.isValid()) {
            // No op
            return mom;
        }

        if (typeof value === 'string') {
            if (/^\d+$/.test(value)) {
                value = toInt(value);
            } else {
                value = mom.localeData().monthsParse(value);
                // TODO: Another silent failure?
                if (!isNumber(value)) {
                    return mom;
                }
            }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function getSetMonth(value) {
        if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
        } else {
            return get(this, 'Month');
        }
    }

    function getDaysInMonth() {
        return daysInMonth(this.year(), this.month());
    }

    function monthsShortRegex(isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsShortStrictRegex;
            } else {
                return this._monthsShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsShortRegex')) {
                this._monthsShortRegex = defaultMonthsShortRegex;
            }
            return this._monthsShortStrictRegex && isStrict
                ? this._monthsShortStrictRegex
                : this._monthsShortRegex;
        }
    }

    function monthsRegex(isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsStrictRegex;
            } else {
                return this._monthsRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsRegex')) {
                this._monthsRegex = defaultMonthsRegex;
            }
            return this._monthsStrictRegex && isStrict
                ? this._monthsStrictRegex
                : this._monthsRegex;
        }
    }

    function computeMonthsParse() {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var shortPieces = [],
            longPieces = [],
            mixedPieces = [],
            i,
            mom;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            shortPieces.push(this.monthsShort(mom, ''));
            longPieces.push(this.months(mom, ''));
            mixedPieces.push(this.months(mom, ''));
            mixedPieces.push(this.monthsShort(mom, ''));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
        }
        for (i = 0; i < 24; i++) {
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp(
            '^(' + longPieces.join('|') + ')',
            'i'
        );
        this._monthsShortStrictRegex = new RegExp(
            '^(' + shortPieces.join('|') + ')',
            'i'
        );
    }

    // FORMATTING

    addFormatToken('Y', 0, 0, function () {
        var y = this.year();
        return y <= 9999 ? zeroFill(y, 4) : '+' + y;
    });

    addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
    });

    addFormatToken(0, ['YYYY', 4], 0, 'year');
    addFormatToken(0, ['YYYYY', 5], 0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

    // ALIASES

    addUnitAlias('year', 'y');

    // PRIORITIES

    addUnitPriority('year', 1);

    // PARSING

    addRegexToken('Y', matchSigned);
    addRegexToken('YY', match1to2, match2);
    addRegexToken('YYYY', match1to4, match4);
    addRegexToken('YYYYY', match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);

    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
        array[YEAR] =
            input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function (input, array) {
        array[YEAR] = parseInt(input, 10);
    });

    // HELPERS

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    // HOOKS

    hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    // MOMENTS

    var getSetYear = makeGetSet('FullYear', true);

    function getIsLeapYear() {
        return isLeapYear(this.year());
    }

    function createDate(y, m, d, h, M, s, ms) {
        // can't just apply() to create a date:
        // https://stackoverflow.com/q/181348
        var date;
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            date = new Date(y + 400, m, d, h, M, s, ms);
            if (isFinite(date.getFullYear())) {
                date.setFullYear(y);
            }
        } else {
            date = new Date(y, m, d, h, M, s, ms);
        }

        return date;
    }

    function createUTCDate(y) {
        var date, args;
        // the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            args = Array.prototype.slice.call(arguments);
            // preserve leap years using a full 400 year cycle, then reset
            args[0] = y + 400;
            date = new Date(Date.UTC.apply(null, args));
            if (isFinite(date.getUTCFullYear())) {
                date.setUTCFullYear(y);
            }
        } else {
            date = new Date(Date.UTC.apply(null, arguments));
        }

        return date;
    }

    // start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
            fwd = 7 + dow - doy,
            // first-week day local weekday -- which local weekday is fwd
            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

        return -fwdlw + fwd - 1;
    }

    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7,
            weekOffset = firstWeekOffset(year, dow, doy),
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
            resYear,
            resDayOfYear;

        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        } else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }

        return {
            year: resYear,
            dayOfYear: resDayOfYear,
        };
    }

    function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
            resWeek,
            resYear;

        if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
        } else {
            resYear = mom.year();
            resWeek = week;
        }

        return {
            week: resWeek,
            year: resYear,
        };
    }

    function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy),
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }

    // FORMATTING

    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

    // ALIASES

    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');

    // PRIORITIES

    addUnitPriority('week', 5);
    addUnitPriority('isoWeek', 5);

    // PARSING

    addRegexToken('w', match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W', match1to2);
    addRegexToken('WW', match1to2, match2);

    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (
        input,
        week,
        config,
        token
    ) {
        week[token.substr(0, 1)] = toInt(input);
    });

    // HELPERS

    // LOCALES

    function localeWeek(mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
        dow: 0, // Sunday is the first day of the week.
        doy: 6, // The week that contains Jan 6th is the first week of the year.
    };

    function localeFirstDayOfWeek() {
        return this._week.dow;
    }

    function localeFirstDayOfYear() {
        return this._week.doy;
    }

    // MOMENTS

    function getSetWeek(input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek(input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    // FORMATTING

    addFormatToken('d', 0, 'do', 'day');

    addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
    });

    addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
    });

    addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
    });

    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');

    // ALIASES

    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');

    // PRIORITY
    addUnitPriority('day', 11);
    addUnitPriority('weekday', 11);
    addUnitPriority('isoWeekday', 11);

    // PARSING

    addRegexToken('d', match1to2);
    addRegexToken('e', match1to2);
    addRegexToken('E', match1to2);
    addRegexToken('dd', function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd', function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd', function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
    });

    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week.d = weekday;
        } else {
            getParsingFlags(config).invalidWeekday = input;
        }
    });

    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
    });

    // HELPERS

    function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
            return input;
        }

        if (!isNaN(input)) {
            return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);
        if (typeof input === 'number') {
            return input;
        }

        return null;
    }

    function parseIsoWeekday(input, locale) {
        if (typeof input === 'string') {
            return locale.weekdaysParse(input) % 7 || 7;
        }
        return isNaN(input) ? null : input;
    }

    // LOCALES
    function shiftWeekdays(ws, n) {
        return ws.slice(n, 7).concat(ws.slice(0, n));
    }

    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
            '_'
        ),
        defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        defaultWeekdaysRegex = matchWord,
        defaultWeekdaysShortRegex = matchWord,
        defaultWeekdaysMinRegex = matchWord;

    function localeWeekdays(m, format) {
        var weekdays = isArray(this._weekdays)
            ? this._weekdays
            : this._weekdays[
                  m && m !== true && this._weekdays.isFormat.test(format)
                      ? 'format'
                      : 'standalone'
              ];
        return m === true
            ? shiftWeekdays(weekdays, this._week.dow)
            : m
            ? weekdays[m.day()]
            : weekdays;
    }

    function localeWeekdaysShort(m) {
        return m === true
            ? shiftWeekdays(this._weekdaysShort, this._week.dow)
            : m
            ? this._weekdaysShort[m.day()]
            : this._weekdaysShort;
    }

    function localeWeekdaysMin(m) {
        return m === true
            ? shiftWeekdays(this._weekdaysMin, this._week.dow)
            : m
            ? this._weekdaysMin[m.day()]
            : this._weekdaysMin;
    }

    function handleStrictParse$1(weekdayName, format, strict) {
        var i,
            ii,
            mom,
            llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];

            for (i = 0; i < 7; ++i) {
                mom = createUTC([2000, 1]).day(i);
                this._minWeekdaysParse[i] = this.weekdaysMin(
                    mom,
                    ''
                ).toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(
                    mom,
                    ''
                ).toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeWeekdaysParse(weekdayName, format, strict) {
        var i, mom, regex;

        if (this._weekdaysParseExact) {
            return handleStrictParse$1.call(this, weekdayName, format, strict);
        }

        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }

        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already

            mom = createUTC([2000, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp(
                    '^' + this.weekdays(mom, '').replace('.', '\\.?') + '$',
                    'i'
                );
                this._shortWeekdaysParse[i] = new RegExp(
                    '^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$',
                    'i'
                );
                this._minWeekdaysParse[i] = new RegExp(
                    '^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$',
                    'i'
                );
            }
            if (!this._weekdaysParse[i]) {
                regex =
                    '^' +
                    this.weekdays(mom, '') +
                    '|^' +
                    this.weekdaysShort(mom, '') +
                    '|^' +
                    this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (
                strict &&
                format === 'dddd' &&
                this._fullWeekdaysParse[i].test(weekdayName)
            ) {
                return i;
            } else if (
                strict &&
                format === 'ddd' &&
                this._shortWeekdaysParse[i].test(weekdayName)
            ) {
                return i;
            } else if (
                strict &&
                format === 'dd' &&
                this._minWeekdaysParse[i].test(weekdayName)
            ) {
                return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function getSetDayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else {
            return day;
        }
    }

    function getSetLocaleDayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }

        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.

        if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else {
            return this.day() || 7;
        }
    }

    function weekdaysRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysStrictRegex;
            } else {
                return this._weekdaysRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                this._weekdaysRegex = defaultWeekdaysRegex;
            }
            return this._weekdaysStrictRegex && isStrict
                ? this._weekdaysStrictRegex
                : this._weekdaysRegex;
        }
    }

    function weekdaysShortRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysShortStrictRegex;
            } else {
                return this._weekdaysShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            }
            return this._weekdaysShortStrictRegex && isStrict
                ? this._weekdaysShortStrictRegex
                : this._weekdaysShortRegex;
        }
    }

    function weekdaysMinRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysMinStrictRegex;
            } else {
                return this._weekdaysMinRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            }
            return this._weekdaysMinStrictRegex && isStrict
                ? this._weekdaysMinStrictRegex
                : this._weekdaysMinRegex;
        }
    }

    function computeWeekdaysParse() {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var minPieces = [],
            shortPieces = [],
            longPieces = [],
            mixedPieces = [],
            i,
            mom,
            minp,
            shortp,
            longp;
        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, 1]).day(i);
            minp = regexEscape(this.weekdaysMin(mom, ''));
            shortp = regexEscape(this.weekdaysShort(mom, ''));
            longp = regexEscape(this.weekdays(mom, ''));
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
        }
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);

        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;

        this._weekdaysStrictRegex = new RegExp(
            '^(' + longPieces.join('|') + ')',
            'i'
        );
        this._weekdaysShortStrictRegex = new RegExp(
            '^(' + shortPieces.join('|') + ')',
            'i'
        );
        this._weekdaysMinStrictRegex = new RegExp(
            '^(' + minPieces.join('|') + ')',
            'i'
        );
    }

    // FORMATTING

    function hFormat() {
        return this.hours() % 12 || 12;
    }

    function kFormat() {
        return this.hours() || 24;
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, hFormat);
    addFormatToken('k', ['kk', 2], 0, kFormat);

    addFormatToken('hmm', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });

    addFormatToken('hmmss', 0, 0, function () {
        return (
            '' +
            hFormat.apply(this) +
            zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2)
        );
    });

    addFormatToken('Hmm', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
    });

    addFormatToken('Hmmss', 0, 0, function () {
        return (
            '' +
            this.hours() +
            zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2)
        );
    });

    function meridiem(token, lowercase) {
        addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(
                this.hours(),
                this.minutes(),
                lowercase
            );
        });
    }

    meridiem('a', true);
    meridiem('A', false);

    // ALIASES

    addUnitAlias('hour', 'h');

    // PRIORITY
    addUnitPriority('hour', 13);

    // PARSING

    function matchMeridiem(isStrict, locale) {
        return locale._meridiemParse;
    }

    addRegexToken('a', matchMeridiem);
    addRegexToken('A', matchMeridiem);
    addRegexToken('H', match1to2);
    addRegexToken('h', match1to2);
    addRegexToken('k', match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);
    addRegexToken('kk', match1to2, match2);

    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);

    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['k', 'kk'], function (input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function (input, array, config) {
        var pos1 = input.length - 4,
            pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function (input, array, config) {
        var pos1 = input.length - 4,
            pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
    });

    // LOCALES

    function localeIsPM(input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return (input + '').toLowerCase().charAt(0) === 'p';
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i,
        // Setting the hour should keep the time, because the user explicitly
        // specified which hour they want. So trying to maintain the same hour (in
        // a new timezone) makes sense. Adding/subtracting hours does not follow
        // this rule.
        getSetHour = makeGetSet('Hours', true);

    function localeMeridiem(hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    }

    var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,

        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,

        week: defaultLocaleWeek,

        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,

        meridiemParse: defaultLocaleMeridiemParse,
    };

    // internal storage for locale config files
    var locales = {},
        localeFamilies = {},
        globalLocale;

    function commonPrefix(arr1, arr2) {
        var i,
            minl = Math.min(arr1.length, arr2.length);
        for (i = 0; i < minl; i += 1) {
            if (arr1[i] !== arr2[i]) {
                return i;
            }
        }
        return minl;
    }

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0,
            j,
            next,
            locale,
            split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (
                    next &&
                    next.length >= j &&
                    commonPrefix(split, next) >= j - 1
                ) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return globalLocale;
    }

    function loadLocale(name) {
        var oldLocale = null,
            aliasedRequire;
        // TODO: Find a better way to register and load all the locales in Node
        if (
            locales[name] === undefined &&
            'object' !== 'undefined' &&
            module &&
            module.exports
        ) {
            try {
                oldLocale = globalLocale._abbr;
                aliasedRequire = commonjsRequire;
                aliasedRequire('./locale/' + name);
                getSetGlobalLocale(oldLocale);
            } catch (e) {
                // mark as not found to avoid repeating expensive file require call causing high CPU
                // when trying to find en-US, en_US, en-us for every format call
                locales[name] = null; // null means not found
            }
        }
        return locales[name];
    }

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function getSetGlobalLocale(key, values) {
        var data;
        if (key) {
            if (isUndefined(values)) {
                data = getLocale(key);
            } else {
                data = defineLocale(key, values);
            }

            if (data) {
                // moment.duration._locale = moment._locale = data;
                globalLocale = data;
            } else {
                if (typeof console !== 'undefined' && console.warn) {
                    //warn user if arguments are passed but the locale could not be set
                    console.warn(
                        'Locale ' + key + ' not found. Did you forget to load it?'
                    );
                }
            }
        }

        return globalLocale._abbr;
    }

    function defineLocale(name, config) {
        if (config !== null) {
            var locale,
                parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
                deprecateSimple(
                    'defineLocaleOverride',
                    'use moment.updateLocale(localeName, config) to change ' +
                        'an existing locale. moment.defineLocale(localeName, ' +
                        'config) should only be used for creating a new locale ' +
                        'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.'
                );
                parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
                if (locales[config.parentLocale] != null) {
                    parentConfig = locales[config.parentLocale]._config;
                } else {
                    locale = loadLocale(config.parentLocale);
                    if (locale != null) {
                        parentConfig = locale._config;
                    } else {
                        if (!localeFamilies[config.parentLocale]) {
                            localeFamilies[config.parentLocale] = [];
                        }
                        localeFamilies[config.parentLocale].push({
                            name: name,
                            config: config,
                        });
                        return null;
                    }
                }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));

            if (localeFamilies[name]) {
                localeFamilies[name].forEach(function (x) {
                    defineLocale(x.name, x.config);
                });
            }

            // backwards compat for now: also set the locale
            // make sure we set the locale AFTER all child locales have been
            // created, so we won't end up with the child locale set.
            getSetGlobalLocale(name);

            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }

    function updateLocale(name, config) {
        if (config != null) {
            var locale,
                tmpLocale,
                parentConfig = baseConfig;

            if (locales[name] != null && locales[name].parentLocale != null) {
                // Update existing child locale in-place to avoid memory-leaks
                locales[name].set(mergeConfigs(locales[name]._config, config));
            } else {
                // MERGE
                tmpLocale = loadLocale(name);
                if (tmpLocale != null) {
                    parentConfig = tmpLocale._config;
                }
                config = mergeConfigs(parentConfig, config);
                if (tmpLocale == null) {
                    // updateLocale is called for creating a new locale
                    // Set abbr so it will have a name (getters return
                    // undefined otherwise).
                    config.abbr = name;
                }
                locale = new Locale(config);
                locale.parentLocale = locales[name];
                locales[name] = locale;
            }

            // backwards compat for now: also set the locale
            getSetGlobalLocale(name);
        } else {
            // pass null for config to unupdate, useful for tests
            if (locales[name] != null) {
                if (locales[name].parentLocale != null) {
                    locales[name] = locales[name].parentLocale;
                    if (name === getSetGlobalLocale()) {
                        getSetGlobalLocale(name);
                    }
                } else if (locales[name] != null) {
                    delete locales[name];
                }
            }
        }
        return locales[name];
    }

    // returns locale data
    function getLocale(key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return globalLocale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    }

    function listLocales() {
        return keys(locales);
    }

    function checkOverflow(m) {
        var overflow,
            a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
            overflow =
                a[MONTH] < 0 || a[MONTH] > 11
                    ? MONTH
                    : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH])
                    ? DATE
                    : a[HOUR] < 0 ||
                      a[HOUR] > 24 ||
                      (a[HOUR] === 24 &&
                          (a[MINUTE] !== 0 ||
                              a[SECOND] !== 0 ||
                              a[MILLISECOND] !== 0))
                    ? HOUR
                    : a[MINUTE] < 0 || a[MINUTE] > 59
                    ? MINUTE
                    : a[SECOND] < 0 || a[SECOND] > 59
                    ? SECOND
                    : a[MILLISECOND] < 0 || a[MILLISECOND] > 999
                    ? MILLISECOND
                    : -1;

            if (
                getParsingFlags(m)._overflowDayOfYear &&
                (overflow < YEAR || overflow > DATE)
            ) {
                overflow = DATE;
            }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                overflow = WEEK;
            }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                overflow = WEEKDAY;
            }

            getParsingFlags(m).overflow = overflow;
        }

        return m;
    }

    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        tzRegex = /Z|[+-]\d\d(?::?\d\d)?/,
        isoDates = [
            ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
            ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
            ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
            ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
            ['YYYY-DDD', /\d{4}-\d{3}/],
            ['YYYY-MM', /\d{4}-\d\d/, false],
            ['YYYYYYMMDD', /[+-]\d{10}/],
            ['YYYYMMDD', /\d{8}/],
            ['GGGG[W]WWE', /\d{4}W\d{3}/],
            ['GGGG[W]WW', /\d{4}W\d{2}/, false],
            ['YYYYDDD', /\d{7}/],
            ['YYYYMM', /\d{6}/, false],
            ['YYYY', /\d{4}/, false],
        ],
        // iso time formats and regexes
        isoTimes = [
            ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
            ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
            ['HH:mm:ss', /\d\d:\d\d:\d\d/],
            ['HH:mm', /\d\d:\d\d/],
            ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
            ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
            ['HHmmss', /\d\d\d\d\d\d/],
            ['HHmm', /\d\d\d\d/],
            ['HH', /\d\d/],
        ],
        aspNetJsonRegex = /^\/?Date\((-?\d+)/i,
        // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
        rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
        obsOffsets = {
            UT: 0,
            GMT: 0,
            EDT: -4 * 60,
            EST: -5 * 60,
            CDT: -5 * 60,
            CST: -6 * 60,
            MDT: -6 * 60,
            MST: -7 * 60,
            PDT: -7 * 60,
            PST: -8 * 60,
        };

    // date from iso format
    function configFromISO(config) {
        var i,
            l,
            string = config._i,
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
            allowTime,
            dateFormat,
            timeFormat,
            tzFormat;

        if (match) {
            getParsingFlags(config).iso = true;

            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(match[1])) {
                    dateFormat = isoDates[i][0];
                    allowTime = isoDates[i][2] !== false;
                    break;
                }
            }
            if (dateFormat == null) {
                config._isValid = false;
                return;
            }
            if (match[3]) {
                for (i = 0, l = isoTimes.length; i < l; i++) {
                    if (isoTimes[i][1].exec(match[3])) {
                        // match[2] should be 'T' or space
                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
                        break;
                    }
                }
                if (timeFormat == null) {
                    config._isValid = false;
                    return;
                }
            }
            if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
            }
            if (match[4]) {
                if (tzRegex.exec(match[4])) {
                    tzFormat = 'Z';
                } else {
                    config._isValid = false;
                    return;
                }
            }
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    function extractFromRFC2822Strings(
        yearStr,
        monthStr,
        dayStr,
        hourStr,
        minuteStr,
        secondStr
    ) {
        var result = [
            untruncateYear(yearStr),
            defaultLocaleMonthsShort.indexOf(monthStr),
            parseInt(dayStr, 10),
            parseInt(hourStr, 10),
            parseInt(minuteStr, 10),
        ];

        if (secondStr) {
            result.push(parseInt(secondStr, 10));
        }

        return result;
    }

    function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);
        if (year <= 49) {
            return 2000 + year;
        } else if (year <= 999) {
            return 1900 + year;
        }
        return year;
    }

    function preprocessRFC2822(s) {
        // Remove comments and folding whitespace and replace multiple-spaces with a single space
        return s
            .replace(/\([^)]*\)|[\n\t]/g, ' ')
            .replace(/(\s\s+)/g, ' ')
            .replace(/^\s\s*/, '')
            .replace(/\s\s*$/, '');
    }

    function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
            // TODO: Replace the vanilla JS Date object with an independent day-of-week check.
            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
                weekdayActual = new Date(
                    parsedInput[0],
                    parsedInput[1],
                    parsedInput[2]
                ).getDay();
            if (weekdayProvided !== weekdayActual) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return false;
            }
        }
        return true;
    }

    function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
            return obsOffsets[obsOffset];
        } else if (militaryOffset) {
            // the only allowed military tz is Z
            return 0;
        } else {
            var hm = parseInt(numOffset, 10),
                m = hm % 100,
                h = (hm - m) / 100;
            return h * 60 + m;
        }
    }

    // date and time from ref 2822 format
    function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i)),
            parsedArray;
        if (match) {
            parsedArray = extractFromRFC2822Strings(
                match[4],
                match[3],
                match[2],
                match[5],
                match[6],
                match[7]
            );
            if (!checkWeekday(match[1], parsedArray, config)) {
                return;
            }

            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);

            config._d = createUTCDate.apply(null, config._a);
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

            getParsingFlags(config).rfc2822 = true;
        } else {
            config._isValid = false;
        }
    }

    // date from 1) ASP.NET, 2) ISO, 3) RFC 2822 formats, or 4) optional fallback if parsing isn't strict
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);
        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }

        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        configFromRFC2822(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        if (config._strict) {
            config._isValid = false;
        } else {
            // Final attempt, use Input Fallback
            hooks.createFromInputFallback(config);
        }
    }

    hooks.createFromInputFallback = deprecate(
        'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
            'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
            'discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }

    function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(hooks.now());
        if (config._useUTC) {
            return [
                nowValue.getUTCFullYear(),
                nowValue.getUTCMonth(),
                nowValue.getUTCDate(),
            ];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray(config) {
        var i,
            date,
            input = [],
            currentDate,
            expectedWeekday,
            yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (
                config._dayOfYear > daysInYear(yearToUse) ||
                config._dayOfYear === 0
            ) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }

            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] =
                config._a[i] == null ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // Check for 24:00:00.000
        if (
            config._a[HOUR] === 24 &&
            config._a[MINUTE] === 0 &&
            config._a[SECOND] === 0 &&
            config._a[MILLISECOND] === 0
        ) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(
            null,
            input
        );
        expectedWeekday = config._useUTC
            ? config._d.getUTCDay()
            : config._d.getDay();

        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }

        // check for mismatching day of week
        if (
            config._w &&
            typeof config._w.d !== 'undefined' &&
            config._w.d !== expectedWeekday
        ) {
            getParsingFlags(config).weekdayMismatch = true;
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(
                w.GG,
                config._a[YEAR],
                weekOfYear(createLocal(), 1, 4).year
            );
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
                weekdayOverflow = true;
            }
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            curWeek = weekOfYear(createLocal(), dow, doy);

            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

            // Default to current week.
            week = defaults(w.w, curWeek.week);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) {
                    weekdayOverflow = true;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from beginning of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) {
                    weekdayOverflow = true;
                }
            } else {
                // default to beginning of week
                weekday = dow;
            }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
        } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
    }

    // constant that refers to the ISO standard
    hooks.ISO_8601 = function () {};

    // constant that refers to the RFC 2822 form
    hooks.RFC_2822 = function () {};

    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
        }
        if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i,
            parsedInput,
            tokens,
            token,
            skipped,
            stringLength = string.length,
            totalParsedInputLength = 0,
            era;

        tokens =
            expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) ||
                [])[0];
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(
                    string.indexOf(parsedInput) + parsedInput.length
                );
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                } else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            } else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver =
            stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (
            config._a[HOUR] <= 12 &&
            getParsingFlags(config).bigHour === true &&
            config._a[HOUR] > 0
        ) {
            getParsingFlags(config).bigHour = undefined;
        }

        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(
            config._locale,
            config._a[HOUR],
            config._meridiem
        );

        // handle era
        era = getParsingFlags(config).era;
        if (era !== null) {
            config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
        }

        configFromArray(config);
        checkOverflow(config);
    }

    function meridiemFixWrap(locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // this is not supposed to happen
            return hour;
        }
    }

    // date from string and array of format strings
    function configFromStringAndArray(config) {
        var tempConfig,
            bestMoment,
            scoreToBeat,
            i,
            currentScore,
            validFormatFound,
            bestFormatIsValid = false;

        if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            validFormatFound = false;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (isValid(tempConfig)) {
                validFormatFound = true;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;

            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

            getParsingFlags(tempConfig).score = currentScore;

            if (!bestFormatIsValid) {
                if (
                    scoreToBeat == null ||
                    currentScore < scoreToBeat ||
                    validFormatFound
                ) {
                    scoreToBeat = currentScore;
                    bestMoment = tempConfig;
                    if (validFormatFound) {
                        bestFormatIsValid = true;
                    }
                }
            } else {
                if (currentScore < scoreToBeat) {
                    scoreToBeat = currentScore;
                    bestMoment = tempConfig;
                }
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
        if (config._d) {
            return;
        }

        var i = normalizeObjectUnits(config._i),
            dayOrDate = i.day === undefined ? i.date : i.day;
        config._a = map(
            [i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond],
            function (obj) {
                return obj && parseInt(obj, 10);
            }
        );

        configFromArray(config);
    }

    function createFromConfig(config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    function prepareConfig(config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || getLocale(config._l);

        if (input === null || (format === undefined && input === '')) {
            return createInvalid({ nullInput: true });
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        } else if (isDate(input)) {
            config._d = input;
        } else if (isArray(format)) {
            configFromStringAndArray(config);
        } else if (format) {
            configFromStringAndFormat(config);
        } else {
            configFromInput(config);
        }

        if (!isValid(config)) {
            config._d = null;
        }

        return config;
    }

    function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) {
            config._d = new Date(hooks.now());
        } else if (isDate(input)) {
            config._d = new Date(input.valueOf());
        } else if (typeof input === 'string') {
            configFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (isObject(input)) {
            configFromObject(config);
        } else if (isNumber(input)) {
            // from milliseconds
            config._d = new Date(input);
        } else {
            hooks.createFromInputFallback(config);
        }
    }

    function createLocalOrUTC(input, format, locale, strict, isUTC) {
        var c = {};

        if (format === true || format === false) {
            strict = format;
            format = undefined;
        }

        if (locale === true || locale === false) {
            strict = locale;
            locale = undefined;
        }

        if (
            (isObject(input) && isObjectEmpty(input)) ||
            (isArray(input) && input.length === 0)
        ) {
            input = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;

        return createFromConfig(c);
    }

    function createLocal(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate(
            'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
            function () {
                var other = createLocal.apply(null, arguments);
                if (this.isValid() && other.isValid()) {
                    return other < this ? this : other;
                } else {
                    return createInvalid();
                }
            }
        ),
        prototypeMax = deprecate(
            'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
            function () {
                var other = createLocal.apply(null, arguments);
                if (this.isValid() && other.isValid()) {
                    return other > this ? this : other;
                } else {
                    return createInvalid();
                }
            }
        );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    // TODO: Use [].sort instead?
    function min() {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    }

    function max() {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    }

    var now = function () {
        return Date.now ? Date.now() : +new Date();
    };

    var ordering = [
        'year',
        'quarter',
        'month',
        'week',
        'day',
        'hour',
        'minute',
        'second',
        'millisecond',
    ];

    function isDurationValid(m) {
        var key,
            unitHasDecimal = false,
            i;
        for (key in m) {
            if (
                hasOwnProp(m, key) &&
                !(
                    indexOf.call(ordering, key) !== -1 &&
                    (m[key] == null || !isNaN(m[key]))
                )
            ) {
                return false;
            }
        }

        for (i = 0; i < ordering.length; ++i) {
            if (m[ordering[i]]) {
                if (unitHasDecimal) {
                    return false; // only allow non-integers for smallest unit
                }
                if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                    unitHasDecimal = true;
                }
            }
        }

        return true;
    }

    function isValid$1() {
        return this._isValid;
    }

    function createInvalid$1() {
        return createDuration(NaN);
    }

    function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        this._isValid = isDurationValid(normalizedInput);

        // representation for dateAddRemove
        this._milliseconds =
            +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days + weeks * 7;
        // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months + quarters * 3 + years * 12;

        this._data = {};

        this._locale = getLocale();

        this._bubble();
    }

    function isDuration(obj) {
        return obj instanceof Duration;
    }

    function absRound(number) {
        if (number < 0) {
            return Math.round(-1 * number) * -1;
        } else {
            return Math.round(number);
        }
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if (
                (dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))
            ) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    // FORMATTING

    function offset(token, separator) {
        addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset(),
                sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return (
                sign +
                zeroFill(~~(offset / 60), 2) +
                separator +
                zeroFill(~~offset % 60, 2)
            );
        });
    }

    offset('Z', ':');
    offset('ZZ', '');

    // PARSING

    addRegexToken('Z', matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
    });

    // HELPERS

    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(matcher, string) {
        var matches = (string || '').match(matcher),
            chunk,
            parts,
            minutes;

        if (matches === null) {
            return null;
        }

        chunk = matches[matches.length - 1] || [];
        parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        minutes = +(parts[1] * 60) + toInt(parts[2]);

        return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff =
                (isMoment(input) || isDate(input)
                    ? input.valueOf()
                    : createLocal(input).valueOf()) - res.valueOf();
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(res._d.valueOf() + diff);
            hooks.updateOffset(res, false);
            return res;
        } else {
            return createLocal(input).local();
        }
    }

    function getDateOffset(m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset());
    }

    // HOOKS

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    hooks.updateOffset = function () {};

    // MOMENTS

    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset(input, keepLocalTime, keepMinutes) {
        var offset = this._offset || 0,
            localAdjust;
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(matchShortOffset, input);
                if (input === null) {
                    return this;
                }
            } else if (Math.abs(input) < 16 && !keepMinutes) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, 'm');
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    addSubtract(
                        this,
                        createDuration(input - offset, 'm'),
                        1,
                        false
                    );
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }

    function getSetZone(input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') {
                input = -input;
            }

            this.utcOffset(input, keepLocalTime);

            return this;
        } else {
            return -this.utcOffset();
        }
    }

    function setOffsetToUTC(keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal(keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
                this.subtract(getDateOffset(this), 'm');
            }
        }
        return this;
    }

    function setOffsetToParsedOffset() {
        if (this._tzm != null) {
            this.utcOffset(this._tzm, false, true);
        } else if (typeof this._i === 'string') {
            var tZone = offsetFromString(matchOffset, this._i);
            if (tZone != null) {
                this.utcOffset(tZone);
            } else {
                this.utcOffset(0, true);
            }
        }
        return this;
    }

    function hasAlignedHourOffset(input) {
        if (!this.isValid()) {
            return false;
        }
        input = input ? createLocal(input).utcOffset() : 0;

        return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime() {
        return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
        );
    }

    function isDaylightSavingTimeShifted() {
        if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
        }

        var c = {},
            other;

        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
            other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted =
                this.isValid() && compareArrays(c._a, other.toArray()) > 0;
        } else {
            this._isDSTShifted = false;
        }

        return this._isDSTShifted;
    }

    function isLocal() {
        return this.isValid() ? !this._isUTC : false;
    }

    function isUtcOffset() {
        return this.isValid() ? this._isUTC : false;
    }

    function isUtc() {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }

    // ASP.NET json date format regex
    var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
        // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
        // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
        // and further modified to allow for strings containing both week and day
        isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function createDuration(input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
            duration = {
                ms: input._milliseconds,
                d: input._days,
                M: input._months,
            };
        } else if (isNumber(input) || !isNaN(+input)) {
            duration = {};
            if (key) {
                duration[key] = +input;
            } else {
                duration.milliseconds = +input;
            }
        } else if ((match = aspNetRegex.exec(input))) {
            sign = match[1] === '-' ? -1 : 1;
            duration = {
                y: 0,
                d: toInt(match[DATE]) * sign,
                h: toInt(match[HOUR]) * sign,
                m: toInt(match[MINUTE]) * sign,
                s: toInt(match[SECOND]) * sign,
                ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign, // the millisecond decimal point is included in the match
            };
        } else if ((match = isoRegex.exec(input))) {
            sign = match[1] === '-' ? -1 : 1;
            duration = {
                y: parseIso(match[2], sign),
                M: parseIso(match[3], sign),
                w: parseIso(match[4], sign),
                d: parseIso(match[5], sign),
                h: parseIso(match[6], sign),
                m: parseIso(match[7], sign),
                s: parseIso(match[8], sign),
            };
        } else if (duration == null) {
            // checks for null or undefined
            duration = {};
        } else if (
            typeof duration === 'object' &&
            ('from' in duration || 'to' in duration)
        ) {
            diffRes = momentsDifference(
                createLocal(duration.from),
                createLocal(duration.to)
            );

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        if (isDuration(input) && hasOwnProp(input, '_isValid')) {
            ret._isValid = input._isValid;
        }

        return ret;
    }

    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;

    function parseIso(inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
        var res = {};

        res.months =
            other.month() - base.month() + (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +base.clone().add(res.months, 'M');

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
            return { milliseconds: 0, months: 0 };
        }

        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(
                    name,
                    'moment().' +
                        name +
                        '(period, number) is deprecated. Please use moment().' +
                        name +
                        '(number, period). ' +
                        'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.'
                );
                tmp = val;
                val = period;
                period = tmp;
            }

            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
        };
    }

    function addSubtract(mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = absRound(duration._days),
            months = absRound(duration._months);

        if (!mom.isValid()) {
            // No op
            return;
        }

        updateOffset = updateOffset == null ? true : updateOffset;

        if (months) {
            setMonth(mom, get(mom, 'Month') + months * isAdding);
        }
        if (days) {
            set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
        }
        if (milliseconds) {
            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        }
        if (updateOffset) {
            hooks.updateOffset(mom, days || months);
        }
    }

    var add = createAdder(1, 'add'),
        subtract = createAdder(-1, 'subtract');

    function isString(input) {
        return typeof input === 'string' || input instanceof String;
    }

    // type MomentInput = Moment | Date | string | number | (number | string)[] | MomentInputObject | void; // null | undefined
    function isMomentInput(input) {
        return (
            isMoment(input) ||
            isDate(input) ||
            isString(input) ||
            isNumber(input) ||
            isNumberOrStringArray(input) ||
            isMomentInputObject(input) ||
            input === null ||
            input === undefined
        );
    }

    function isMomentInputObject(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input),
            propertyTest = false,
            properties = [
                'years',
                'year',
                'y',
                'months',
                'month',
                'M',
                'days',
                'day',
                'd',
                'dates',
                'date',
                'D',
                'hours',
                'hour',
                'h',
                'minutes',
                'minute',
                'm',
                'seconds',
                'second',
                's',
                'milliseconds',
                'millisecond',
                'ms',
            ],
            i,
            property;

        for (i = 0; i < properties.length; i += 1) {
            property = properties[i];
            propertyTest = propertyTest || hasOwnProp(input, property);
        }

        return objectTest && propertyTest;
    }

    function isNumberOrStringArray(input) {
        var arrayTest = isArray(input),
            dataTypeTest = false;
        if (arrayTest) {
            dataTypeTest =
                input.filter(function (item) {
                    return !isNumber(item) && isString(input);
                }).length === 0;
        }
        return arrayTest && dataTypeTest;
    }

    function isCalendarSpec(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input),
            propertyTest = false,
            properties = [
                'sameDay',
                'nextDay',
                'lastDay',
                'nextWeek',
                'lastWeek',
                'sameElse',
            ],
            i,
            property;

        for (i = 0; i < properties.length; i += 1) {
            property = properties[i];
            propertyTest = propertyTest || hasOwnProp(input, property);
        }

        return objectTest && propertyTest;
    }

    function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, 'days', true);
        return diff < -6
            ? 'sameElse'
            : diff < -1
            ? 'lastWeek'
            : diff < 0
            ? 'lastDay'
            : diff < 1
            ? 'sameDay'
            : diff < 2
            ? 'nextDay'
            : diff < 7
            ? 'nextWeek'
            : 'sameElse';
    }

    function calendar$1(time, formats) {
        // Support for single parameter, formats only overload to the calendar function
        if (arguments.length === 1) {
            if (!arguments[0]) {
                time = undefined;
                formats = undefined;
            } else if (isMomentInput(arguments[0])) {
                time = arguments[0];
                formats = undefined;
            } else if (isCalendarSpec(arguments[0])) {
                formats = arguments[0];
                time = undefined;
            }
        }
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            format = hooks.calendarFormat(this, sod) || 'sameElse',
            output =
                formats &&
                (isFunction(formats[format])
                    ? formats[format].call(this, now)
                    : formats[format]);

        return this.format(
            output || this.localeData().calendar(format, this, createLocal(now))
        );
    }

    function clone() {
        return new Moment(this);
    }

    function isAfter(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() > localInput.valueOf();
        } else {
            return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
    }

    function isBefore(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() < localInput.valueOf();
        } else {
            return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
    }

    function isBetween(from, to, units, inclusivity) {
        var localFrom = isMoment(from) ? from : createLocal(from),
            localTo = isMoment(to) ? to : createLocal(to);
        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
            return false;
        }
        inclusivity = inclusivity || '()';
        return (
            (inclusivity[0] === '('
                ? this.isAfter(localFrom, units)
                : !this.isBefore(localFrom, units)) &&
            (inclusivity[1] === ')'
                ? this.isBefore(localTo, units)
                : !this.isAfter(localTo, units))
        );
    }

    function isSame(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input),
            inputMs;
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() === localInput.valueOf();
        } else {
            inputMs = localInput.valueOf();
            return (
                this.clone().startOf(units).valueOf() <= inputMs &&
                inputMs <= this.clone().endOf(units).valueOf()
            );
        }
    }

    function isSameOrAfter(input, units) {
        return this.isSame(input, units) || this.isAfter(input, units);
    }

    function isSameOrBefore(input, units) {
        return this.isSame(input, units) || this.isBefore(input, units);
    }

    function diff(input, units, asFloat) {
        var that, zoneDelta, output;

        if (!this.isValid()) {
            return NaN;
        }

        that = cloneWithOffset(input, this);

        if (!that.isValid()) {
            return NaN;
        }

        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

        units = normalizeUnits(units);

        switch (units) {
            case 'year':
                output = monthDiff(this, that) / 12;
                break;
            case 'month':
                output = monthDiff(this, that);
                break;
            case 'quarter':
                output = monthDiff(this, that) / 3;
                break;
            case 'second':
                output = (this - that) / 1e3;
                break; // 1000
            case 'minute':
                output = (this - that) / 6e4;
                break; // 1000 * 60
            case 'hour':
                output = (this - that) / 36e5;
                break; // 1000 * 60 * 60
            case 'day':
                output = (this - that - zoneDelta) / 864e5;
                break; // 1000 * 60 * 60 * 24, negate dst
            case 'week':
                output = (this - that - zoneDelta) / 6048e5;
                break; // 1000 * 60 * 60 * 24 * 7, negate dst
            default:
                output = this - that;
        }

        return asFloat ? output : absFloor(output);
    }

    function monthDiff(a, b) {
        if (a.date() < b.date()) {
            // end-of-month calculations work correct when the start month has more
            // days than the end month.
            return -monthDiff(b, a);
        }
        // difference in months
        var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2,
            adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        //check for negative zero, return zero if negative zero
        return -(wholeMonthDiff + adjust) || 0;
    }

    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

    function toString() {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function toISOString(keepOffset) {
        if (!this.isValid()) {
            return null;
        }
        var utc = keepOffset !== true,
            m = utc ? this.clone().utc() : this;
        if (m.year() < 0 || m.year() > 9999) {
            return formatMoment(
                m,
                utc
                    ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]'
                    : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ'
            );
        }
        if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            if (utc) {
                return this.toDate().toISOString();
            } else {
                return new Date(this.valueOf() + this.utcOffset() * 60 * 1000)
                    .toISOString()
                    .replace('Z', formatMoment(m, 'Z'));
            }
        }
        return formatMoment(
            m,
            utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ'
        );
    }

    /**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */
    function inspect() {
        if (!this.isValid()) {
            return 'moment.invalid(/* ' + this._i + ' */)';
        }
        var func = 'moment',
            zone = '',
            prefix,
            year,
            datetime,
            suffix;
        if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
            zone = 'Z';
        }
        prefix = '[' + func + '("]';
        year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
        datetime = '-MM-DD[T]HH:mm:ss.SSS';
        suffix = zone + '[")]';

        return this.format(prefix + year + datetime + suffix);
    }

    function format(inputString) {
        if (!inputString) {
            inputString = this.isUtc()
                ? hooks.defaultFormatUtc
                : hooks.defaultFormat;
        }
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
    }

    function from(time, withoutSuffix) {
        if (
            this.isValid() &&
            ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
        ) {
            return createDuration({ to: this, from: time })
                .locale(this.locale())
                .humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function fromNow(withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
    }

    function to(time, withoutSuffix) {
        if (
            this.isValid() &&
            ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
        ) {
            return createDuration({ from: this, to: time })
                .locale(this.locale())
                .humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function toNow(withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
    }

    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function locale(key) {
        var newLocaleData;

        if (key === undefined) {
            return this._locale._abbr;
        } else {
            newLocaleData = getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }

    var lang = deprecate(
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {
            if (key === undefined) {
                return this.localeData();
            } else {
                return this.locale(key);
            }
        }
    );

    function localeData() {
        return this._locale;
    }

    var MS_PER_SECOND = 1000,
        MS_PER_MINUTE = 60 * MS_PER_SECOND,
        MS_PER_HOUR = 60 * MS_PER_MINUTE,
        MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

    // actual modulo - handles negative numbers (for dates before 1970):
    function mod$1(dividend, divisor) {
        return ((dividend % divisor) + divisor) % divisor;
    }

    function localStartOfDate(y, m, d) {
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return new Date(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return new Date(y, m, d).valueOf();
        }
    }

    function utcStartOfDate(y, m, d) {
        // Date.UTC remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return Date.UTC(y, m, d);
        }
    }

    function startOf(units) {
        var time, startOfDate;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year(), 0, 1);
                break;
            case 'quarter':
                time = startOfDate(
                    this.year(),
                    this.month() - (this.month() % 3),
                    1
                );
                break;
            case 'month':
                time = startOfDate(this.year(), this.month(), 1);
                break;
            case 'week':
                time = startOfDate(
                    this.year(),
                    this.month(),
                    this.date() - this.weekday()
                );
                break;
            case 'isoWeek':
                time = startOfDate(
                    this.year(),
                    this.month(),
                    this.date() - (this.isoWeekday() - 1)
                );
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date());
                break;
            case 'hour':
                time = this._d.valueOf();
                time -= mod$1(
                    time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                    MS_PER_HOUR
                );
                break;
            case 'minute':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_MINUTE);
                break;
            case 'second':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_SECOND);
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function endOf(units) {
        var time, startOfDate;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year() + 1, 0, 1) - 1;
                break;
            case 'quarter':
                time =
                    startOfDate(
                        this.year(),
                        this.month() - (this.month() % 3) + 3,
                        1
                    ) - 1;
                break;
            case 'month':
                time = startOfDate(this.year(), this.month() + 1, 1) - 1;
                break;
            case 'week':
                time =
                    startOfDate(
                        this.year(),
                        this.month(),
                        this.date() - this.weekday() + 7
                    ) - 1;
                break;
            case 'isoWeek':
                time =
                    startOfDate(
                        this.year(),
                        this.month(),
                        this.date() - (this.isoWeekday() - 1) + 7
                    ) - 1;
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
                break;
            case 'hour':
                time = this._d.valueOf();
                time +=
                    MS_PER_HOUR -
                    mod$1(
                        time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                        MS_PER_HOUR
                    ) -
                    1;
                break;
            case 'minute':
                time = this._d.valueOf();
                time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
                break;
            case 'second':
                time = this._d.valueOf();
                time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function valueOf() {
        return this._d.valueOf() - (this._offset || 0) * 60000;
    }

    function unix() {
        return Math.floor(this.valueOf() / 1000);
    }

    function toDate() {
        return new Date(this.valueOf());
    }

    function toArray() {
        var m = this;
        return [
            m.year(),
            m.month(),
            m.date(),
            m.hour(),
            m.minute(),
            m.second(),
            m.millisecond(),
        ];
    }

    function toObject() {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds(),
        };
    }

    function toJSON() {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
    }

    function isValid$2() {
        return isValid(this);
    }

    function parsingFlags() {
        return extend({}, getParsingFlags(this));
    }

    function invalidAt() {
        return getParsingFlags(this).overflow;
    }

    function creationData() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict,
        };
    }

    addFormatToken('N', 0, 0, 'eraAbbr');
    addFormatToken('NN', 0, 0, 'eraAbbr');
    addFormatToken('NNN', 0, 0, 'eraAbbr');
    addFormatToken('NNNN', 0, 0, 'eraName');
    addFormatToken('NNNNN', 0, 0, 'eraNarrow');

    addFormatToken('y', ['y', 1], 'yo', 'eraYear');
    addFormatToken('y', ['yy', 2], 0, 'eraYear');
    addFormatToken('y', ['yyy', 3], 0, 'eraYear');
    addFormatToken('y', ['yyyy', 4], 0, 'eraYear');

    addRegexToken('N', matchEraAbbr);
    addRegexToken('NN', matchEraAbbr);
    addRegexToken('NNN', matchEraAbbr);
    addRegexToken('NNNN', matchEraName);
    addRegexToken('NNNNN', matchEraNarrow);

    addParseToken(['N', 'NN', 'NNN', 'NNNN', 'NNNNN'], function (
        input,
        array,
        config,
        token
    ) {
        var era = config._locale.erasParse(input, token, config._strict);
        if (era) {
            getParsingFlags(config).era = era;
        } else {
            getParsingFlags(config).invalidEra = input;
        }
    });

    addRegexToken('y', matchUnsigned);
    addRegexToken('yy', matchUnsigned);
    addRegexToken('yyy', matchUnsigned);
    addRegexToken('yyyy', matchUnsigned);
    addRegexToken('yo', matchEraYearOrdinal);

    addParseToken(['y', 'yy', 'yyy', 'yyyy'], YEAR);
    addParseToken(['yo'], function (input, array, config, token) {
        var match;
        if (config._locale._eraYearOrdinalRegex) {
            match = input.match(config._locale._eraYearOrdinalRegex);
        }

        if (config._locale.eraYearOrdinalParse) {
            array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
        } else {
            array[YEAR] = parseInt(input, 10);
        }
    });

    function localeEras(m, format) {
        var i,
            l,
            date,
            eras = this._eras || getLocale('en')._eras;
        for (i = 0, l = eras.length; i < l; ++i) {
            switch (typeof eras[i].since) {
                case 'string':
                    // truncate time
                    date = hooks(eras[i].since).startOf('day');
                    eras[i].since = date.valueOf();
                    break;
            }

            switch (typeof eras[i].until) {
                case 'undefined':
                    eras[i].until = +Infinity;
                    break;
                case 'string':
                    // truncate time
                    date = hooks(eras[i].until).startOf('day').valueOf();
                    eras[i].until = date.valueOf();
                    break;
            }
        }
        return eras;
    }

    function localeErasParse(eraName, format, strict) {
        var i,
            l,
            eras = this.eras(),
            name,
            abbr,
            narrow;
        eraName = eraName.toUpperCase();

        for (i = 0, l = eras.length; i < l; ++i) {
            name = eras[i].name.toUpperCase();
            abbr = eras[i].abbr.toUpperCase();
            narrow = eras[i].narrow.toUpperCase();

            if (strict) {
                switch (format) {
                    case 'N':
                    case 'NN':
                    case 'NNN':
                        if (abbr === eraName) {
                            return eras[i];
                        }
                        break;

                    case 'NNNN':
                        if (name === eraName) {
                            return eras[i];
                        }
                        break;

                    case 'NNNNN':
                        if (narrow === eraName) {
                            return eras[i];
                        }
                        break;
                }
            } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
                return eras[i];
            }
        }
    }

    function localeErasConvertYear(era, year) {
        var dir = era.since <= era.until ? +1 : -1;
        if (year === undefined) {
            return hooks(era.since).year();
        } else {
            return hooks(era.since).year() + (year - era.offset) * dir;
        }
    }

    function getEraName() {
        var i,
            l,
            val,
            eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
            // truncate time
            val = this.clone().startOf('day').valueOf();

            if (eras[i].since <= val && val <= eras[i].until) {
                return eras[i].name;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
                return eras[i].name;
            }
        }

        return '';
    }

    function getEraNarrow() {
        var i,
            l,
            val,
            eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
            // truncate time
            val = this.clone().startOf('day').valueOf();

            if (eras[i].since <= val && val <= eras[i].until) {
                return eras[i].narrow;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
                return eras[i].narrow;
            }
        }

        return '';
    }

    function getEraAbbr() {
        var i,
            l,
            val,
            eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
            // truncate time
            val = this.clone().startOf('day').valueOf();

            if (eras[i].since <= val && val <= eras[i].until) {
                return eras[i].abbr;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
                return eras[i].abbr;
            }
        }

        return '';
    }

    function getEraYear() {
        var i,
            l,
            dir,
            val,
            eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
            dir = eras[i].since <= eras[i].until ? +1 : -1;

            // truncate time
            val = this.clone().startOf('day').valueOf();

            if (
                (eras[i].since <= val && val <= eras[i].until) ||
                (eras[i].until <= val && val <= eras[i].since)
            ) {
                return (
                    (this.year() - hooks(eras[i].since).year()) * dir +
                    eras[i].offset
                );
            }
        }

        return this.year();
    }

    function erasNameRegex(isStrict) {
        if (!hasOwnProp(this, '_erasNameRegex')) {
            computeErasParse.call(this);
        }
        return isStrict ? this._erasNameRegex : this._erasRegex;
    }

    function erasAbbrRegex(isStrict) {
        if (!hasOwnProp(this, '_erasAbbrRegex')) {
            computeErasParse.call(this);
        }
        return isStrict ? this._erasAbbrRegex : this._erasRegex;
    }

    function erasNarrowRegex(isStrict) {
        if (!hasOwnProp(this, '_erasNarrowRegex')) {
            computeErasParse.call(this);
        }
        return isStrict ? this._erasNarrowRegex : this._erasRegex;
    }

    function matchEraAbbr(isStrict, locale) {
        return locale.erasAbbrRegex(isStrict);
    }

    function matchEraName(isStrict, locale) {
        return locale.erasNameRegex(isStrict);
    }

    function matchEraNarrow(isStrict, locale) {
        return locale.erasNarrowRegex(isStrict);
    }

    function matchEraYearOrdinal(isStrict, locale) {
        return locale._eraYearOrdinalRegex || matchUnsigned;
    }

    function computeErasParse() {
        var abbrPieces = [],
            namePieces = [],
            narrowPieces = [],
            mixedPieces = [],
            i,
            l,
            eras = this.eras();

        for (i = 0, l = eras.length; i < l; ++i) {
            namePieces.push(regexEscape(eras[i].name));
            abbrPieces.push(regexEscape(eras[i].abbr));
            narrowPieces.push(regexEscape(eras[i].narrow));

            mixedPieces.push(regexEscape(eras[i].name));
            mixedPieces.push(regexEscape(eras[i].abbr));
            mixedPieces.push(regexEscape(eras[i].narrow));
        }

        this._erasRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._erasNameRegex = new RegExp('^(' + namePieces.join('|') + ')', 'i');
        this._erasAbbrRegex = new RegExp('^(' + abbrPieces.join('|') + ')', 'i');
        this._erasNarrowRegex = new RegExp(
            '^(' + narrowPieces.join('|') + ')',
            'i'
        );
    }

    // FORMATTING

    addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
    });

    addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken(token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg', 'weekYear');
    addWeekYearFormatToken('ggggg', 'weekYear');
    addWeekYearFormatToken('GGGG', 'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

    // ALIASES

    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');

    // PRIORITY

    addUnitPriority('weekYear', 1);
    addUnitPriority('isoWeekYear', 1);

    // PARSING

    addRegexToken('G', matchSigned);
    addRegexToken('g', matchSigned);
    addRegexToken('GG', match1to2, match2);
    addRegexToken('gg', match1to2, match2);
    addRegexToken('GGGG', match1to4, match4);
    addRegexToken('gggg', match1to4, match4);
    addRegexToken('GGGGG', match1to6, match6);
    addRegexToken('ggggg', match1to6, match6);

    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (
        input,
        week,
        config,
        token
    ) {
        week[token.substr(0, 2)] = toInt(input);
    });

    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input);
    });

    // MOMENTS

    function getSetWeekYear(input) {
        return getSetWeekYearHelper.call(
            this,
            input,
            this.week(),
            this.weekday(),
            this.localeData()._week.dow,
            this.localeData()._week.doy
        );
    }

    function getSetISOWeekYear(input) {
        return getSetWeekYearHelper.call(
            this,
            input,
            this.isoWeek(),
            this.isoWeekday(),
            1,
            4
        );
    }

    function getISOWeeksInYear() {
        return weeksInYear(this.year(), 1, 4);
    }

    function getISOWeeksInISOWeekYear() {
        return weeksInYear(this.isoWeekYear(), 1, 4);
    }

    function getWeeksInYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    function getWeeksInWeekYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
    }

    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
            return weekOfYear(this, dow, doy).year;
        } else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
                week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
    }

    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
    }

    // FORMATTING

    addFormatToken('Q', 0, 'Qo', 'quarter');

    // ALIASES

    addUnitAlias('quarter', 'Q');

    // PRIORITY

    addUnitPriority('quarter', 7);

    // PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });

    // MOMENTS

    function getSetQuarter(input) {
        return input == null
            ? Math.ceil((this.month() + 1) / 3)
            : this.month((input - 1) * 3 + (this.month() % 3));
    }

    // FORMATTING

    addFormatToken('D', ['DD', 2], 'Do', 'date');

    // ALIASES

    addUnitAlias('date', 'D');

    // PRIORITY
    addUnitPriority('date', 9);

    // PARSING

    addRegexToken('D', match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        // TODO: Remove "ordinalParse" fallback in next major release.
        return isStrict
            ? locale._dayOfMonthOrdinalParse || locale._ordinalParse
            : locale._dayOfMonthOrdinalParseLenient;
    });

    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
    });

    // MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true);

    // FORMATTING

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

    // ALIASES

    addUnitAlias('dayOfYear', 'DDD');

    // PRIORITY
    addUnitPriority('dayOfYear', 4);

    // PARSING

    addRegexToken('DDD', match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
    });

    // HELPERS

    // MOMENTS

    function getSetDayOfYear(input) {
        var dayOfYear =
            Math.round(
                (this.clone().startOf('day') - this.clone().startOf('year')) / 864e5
            ) + 1;
        return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
    }

    // FORMATTING

    addFormatToken('m', ['mm', 2], 0, 'minute');

    // ALIASES

    addUnitAlias('minute', 'm');

    // PRIORITY

    addUnitPriority('minute', 14);

    // PARSING

    addRegexToken('m', match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);

    // MOMENTS

    var getSetMinute = makeGetSet('Minutes', false);

    // FORMATTING

    addFormatToken('s', ['ss', 2], 0, 'second');

    // ALIASES

    addUnitAlias('second', 's');

    // PRIORITY

    addUnitPriority('second', 15);

    // PARSING

    addRegexToken('s', match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);

    // MOMENTS

    var getSetSecond = makeGetSet('Seconds', false);

    // FORMATTING

    addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
    });

    addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
    });

    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
    });

    // ALIASES

    addUnitAlias('millisecond', 'ms');

    // PRIORITY

    addUnitPriority('millisecond', 16);

    // PARSING

    addRegexToken('S', match1to3, match1);
    addRegexToken('SS', match1to3, match2);
    addRegexToken('SSS', match1to3, match3);

    var token, getSetMillisecond;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }

    getSetMillisecond = makeGetSet('Milliseconds', false);

    // FORMATTING

    addFormatToken('z', 0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');

    // MOMENTS

    function getZoneAbbr() {
        return this._isUTC ? 'UTC' : '';
    }

    function getZoneName() {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var proto = Moment.prototype;

    proto.add = add;
    proto.calendar = calendar$1;
    proto.clone = clone;
    proto.diff = diff;
    proto.endOf = endOf;
    proto.format = format;
    proto.from = from;
    proto.fromNow = fromNow;
    proto.to = to;
    proto.toNow = toNow;
    proto.get = stringGet;
    proto.invalidAt = invalidAt;
    proto.isAfter = isAfter;
    proto.isBefore = isBefore;
    proto.isBetween = isBetween;
    proto.isSame = isSame;
    proto.isSameOrAfter = isSameOrAfter;
    proto.isSameOrBefore = isSameOrBefore;
    proto.isValid = isValid$2;
    proto.lang = lang;
    proto.locale = locale;
    proto.localeData = localeData;
    proto.max = prototypeMax;
    proto.min = prototypeMin;
    proto.parsingFlags = parsingFlags;
    proto.set = stringSet;
    proto.startOf = startOf;
    proto.subtract = subtract;
    proto.toArray = toArray;
    proto.toObject = toObject;
    proto.toDate = toDate;
    proto.toISOString = toISOString;
    proto.inspect = inspect;
    if (typeof Symbol !== 'undefined' && Symbol.for != null) {
        proto[Symbol.for('nodejs.util.inspect.custom')] = function () {
            return 'Moment<' + this.format() + '>';
        };
    }
    proto.toJSON = toJSON;
    proto.toString = toString;
    proto.unix = unix;
    proto.valueOf = valueOf;
    proto.creationData = creationData;
    proto.eraName = getEraName;
    proto.eraNarrow = getEraNarrow;
    proto.eraAbbr = getEraAbbr;
    proto.eraYear = getEraYear;
    proto.year = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week = proto.weeks = getSetWeek;
    proto.isoWeek = proto.isoWeeks = getSetISOWeek;
    proto.weeksInYear = getWeeksInYear;
    proto.weeksInWeekYear = getWeeksInWeekYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
    proto.date = getSetDayOfMonth;
    proto.day = proto.days = getSetDayOfWeek;
    proto.weekday = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset = getSetOffset;
    proto.utc = setOffsetToUTC;
    proto.local = setOffsetToLocal;
    proto.parseZone = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST = isDaylightSavingTime;
    proto.isLocal = isLocal;
    proto.isUtcOffset = isUtcOffset;
    proto.isUtc = isUtc;
    proto.isUTC = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates = deprecate(
        'dates accessor is deprecated. Use date instead.',
        getSetDayOfMonth
    );
    proto.months = deprecate(
        'months accessor is deprecated. Use month instead',
        getSetMonth
    );
    proto.years = deprecate(
        'years accessor is deprecated. Use year instead',
        getSetYear
    );
    proto.zone = deprecate(
        'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
        getSetZone
    );
    proto.isDSTShifted = deprecate(
        'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
        isDaylightSavingTimeShifted
    );

    function createUnix(input) {
        return createLocal(input * 1000);
    }

    function createInZone() {
        return createLocal.apply(null, arguments).parseZone();
    }

    function preParsePostFormat(string) {
        return string;
    }

    var proto$1 = Locale.prototype;

    proto$1.calendar = calendar;
    proto$1.longDateFormat = longDateFormat;
    proto$1.invalidDate = invalidDate;
    proto$1.ordinal = ordinal;
    proto$1.preparse = preParsePostFormat;
    proto$1.postformat = preParsePostFormat;
    proto$1.relativeTime = relativeTime;
    proto$1.pastFuture = pastFuture;
    proto$1.set = set;
    proto$1.eras = localeEras;
    proto$1.erasParse = localeErasParse;
    proto$1.erasConvertYear = localeErasConvertYear;
    proto$1.erasAbbrRegex = erasAbbrRegex;
    proto$1.erasNameRegex = erasNameRegex;
    proto$1.erasNarrowRegex = erasNarrowRegex;

    proto$1.months = localeMonths;
    proto$1.monthsShort = localeMonthsShort;
    proto$1.monthsParse = localeMonthsParse;
    proto$1.monthsRegex = monthsRegex;
    proto$1.monthsShortRegex = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;

    proto$1.weekdays = localeWeekdays;
    proto$1.weekdaysMin = localeWeekdaysMin;
    proto$1.weekdaysShort = localeWeekdaysShort;
    proto$1.weekdaysParse = localeWeekdaysParse;

    proto$1.weekdaysRegex = weekdaysRegex;
    proto$1.weekdaysShortRegex = weekdaysShortRegex;
    proto$1.weekdaysMinRegex = weekdaysMinRegex;

    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;

    function get$1(format, index, field, setter) {
        var locale = getLocale(),
            utc = createUTC().set(setter, index);
        return locale[field](utc, format);
    }

    function listMonthsImpl(format, index, field) {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';

        if (index != null) {
            return get$1(format, index, field, 'month');
        }

        var i,
            out = [];
        for (i = 0; i < 12; i++) {
            out[i] = get$1(format, i, field, 'month');
        }
        return out;
    }

    // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)
    function listWeekdaysImpl(localeSorted, format, index, field) {
        if (typeof localeSorted === 'boolean') {
            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        } else {
            format = localeSorted;
            index = format;
            localeSorted = false;

            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        }

        var locale = getLocale(),
            shift = localeSorted ? locale._week.dow : 0,
            i,
            out = [];

        if (index != null) {
            return get$1(format, (index + shift) % 7, field, 'day');
        }

        for (i = 0; i < 7; i++) {
            out[i] = get$1(format, (i + shift) % 7, field, 'day');
        }
        return out;
    }

    function listMonths(format, index) {
        return listMonthsImpl(format, index, 'months');
    }

    function listMonthsShort(format, index) {
        return listMonthsImpl(format, index, 'monthsShort');
    }

    function listWeekdays(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
    }

    function listWeekdaysShort(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
    }

    function listWeekdaysMin(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
    }

    getSetGlobalLocale('en', {
        eras: [
            {
                since: '0001-01-01',
                until: +Infinity,
                offset: 1,
                name: 'Anno Domini',
                narrow: 'AD',
                abbr: 'AD',
            },
            {
                since: '0000-12-31',
                until: -Infinity,
                offset: 1,
                name: 'Before Christ',
                narrow: 'BC',
                abbr: 'BC',
            },
        ],
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function (number) {
            var b = number % 10,
                output =
                    toInt((number % 100) / 10) === 1
                        ? 'th'
                        : b === 1
                        ? 'st'
                        : b === 2
                        ? 'nd'
                        : b === 3
                        ? 'rd'
                        : 'th';
            return number + output;
        },
    });

    // Side effect imports

    hooks.lang = deprecate(
        'moment.lang is deprecated. Use moment.locale instead.',
        getSetGlobalLocale
    );
    hooks.langData = deprecate(
        'moment.langData is deprecated. Use moment.localeData instead.',
        getLocale
    );

    var mathAbs = Math.abs;

    function abs() {
        var data = this._data;

        this._milliseconds = mathAbs(this._milliseconds);
        this._days = mathAbs(this._days);
        this._months = mathAbs(this._months);

        data.milliseconds = mathAbs(data.milliseconds);
        data.seconds = mathAbs(data.seconds);
        data.minutes = mathAbs(data.minutes);
        data.hours = mathAbs(data.hours);
        data.months = mathAbs(data.months);
        data.years = mathAbs(data.years);

        return this;
    }

    function addSubtract$1(duration, input, value, direction) {
        var other = createDuration(input, value);

        duration._milliseconds += direction * other._milliseconds;
        duration._days += direction * other._days;
        duration._months += direction * other._months;

        return duration._bubble();
    }

    // supports only 2.0-style add(1, 's') or add(duration)
    function add$1(input, value) {
        return addSubtract$1(this, input, value, 1);
    }

    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function subtract$1(input, value) {
        return addSubtract$1(this, input, value, -1);
    }

    function absCeil(number) {
        if (number < 0) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    }

    function bubble() {
        var milliseconds = this._milliseconds,
            days = this._days,
            months = this._months,
            data = this._data,
            seconds,
            minutes,
            hours,
            years,
            monthsFromDays;

        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (
            !(
                (milliseconds >= 0 && days >= 0 && months >= 0) ||
                (milliseconds <= 0 && days <= 0 && months <= 0)
            )
        ) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;

        seconds = absFloor(milliseconds / 1000);
        data.seconds = seconds % 60;

        minutes = absFloor(seconds / 60);
        data.minutes = minutes % 60;

        hours = absFloor(minutes / 60);
        data.hours = hours % 24;

        days += absFloor(hours / 24);

        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        data.days = days;
        data.months = months;
        data.years = years;

        return this;
    }

    function daysToMonths(days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return (days * 4800) / 146097;
    }

    function monthsToDays(months) {
        // the reverse of daysToMonths
        return (months * 146097) / 4800;
    }

    function as(units) {
        if (!this.isValid()) {
            return NaN;
        }
        var days,
            months,
            milliseconds = this._milliseconds;

        units = normalizeUnits(units);

        if (units === 'month' || units === 'quarter' || units === 'year') {
            days = this._days + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            switch (units) {
                case 'month':
                    return months;
                case 'quarter':
                    return months / 3;
                case 'year':
                    return months / 12;
            }
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
                case 'week':
                    return days / 7 + milliseconds / 6048e5;
                case 'day':
                    return days + milliseconds / 864e5;
                case 'hour':
                    return days * 24 + milliseconds / 36e5;
                case 'minute':
                    return days * 1440 + milliseconds / 6e4;
                case 'second':
                    return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond':
                    return Math.floor(days * 864e5) + milliseconds;
                default:
                    throw new Error('Unknown unit ' + units);
            }
        }
    }

    // TODO: Use this.as('ms')?
    function valueOf$1() {
        if (!this.isValid()) {
            return NaN;
        }
        return (
            this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6
        );
    }

    function makeAs(alias) {
        return function () {
            return this.as(alias);
        };
    }

    var asMilliseconds = makeAs('ms'),
        asSeconds = makeAs('s'),
        asMinutes = makeAs('m'),
        asHours = makeAs('h'),
        asDays = makeAs('d'),
        asWeeks = makeAs('w'),
        asMonths = makeAs('M'),
        asQuarters = makeAs('Q'),
        asYears = makeAs('y');

    function clone$1() {
        return createDuration(this);
    }

    function get$2(units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + 's']() : NaN;
    }

    function makeGetter(name) {
        return function () {
            return this.isValid() ? this._data[name] : NaN;
        };
    }

    var milliseconds = makeGetter('milliseconds'),
        seconds = makeGetter('seconds'),
        minutes = makeGetter('minutes'),
        hours = makeGetter('hours'),
        days = makeGetter('days'),
        months = makeGetter('months'),
        years = makeGetter('years');

    function weeks() {
        return absFloor(this.days() / 7);
    }

    var round = Math.round,
        thresholds = {
            ss: 44, // a few seconds to seconds
            s: 45, // seconds to minute
            m: 45, // minutes to hour
            h: 22, // hours to day
            d: 26, // days to month/week
            w: null, // weeks to month
            M: 11, // months to year
        };

    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime$1(posNegDuration, withoutSuffix, thresholds, locale) {
        var duration = createDuration(posNegDuration).abs(),
            seconds = round(duration.as('s')),
            minutes = round(duration.as('m')),
            hours = round(duration.as('h')),
            days = round(duration.as('d')),
            months = round(duration.as('M')),
            weeks = round(duration.as('w')),
            years = round(duration.as('y')),
            a =
                (seconds <= thresholds.ss && ['s', seconds]) ||
                (seconds < thresholds.s && ['ss', seconds]) ||
                (minutes <= 1 && ['m']) ||
                (minutes < thresholds.m && ['mm', minutes]) ||
                (hours <= 1 && ['h']) ||
                (hours < thresholds.h && ['hh', hours]) ||
                (days <= 1 && ['d']) ||
                (days < thresholds.d && ['dd', days]);

        if (thresholds.w != null) {
            a =
                a ||
                (weeks <= 1 && ['w']) ||
                (weeks < thresholds.w && ['ww', weeks]);
        }
        a = a ||
            (months <= 1 && ['M']) ||
            (months < thresholds.M && ['MM', months]) ||
            (years <= 1 && ['y']) || ['yy', years];

        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }

    // This function allows you to set the rounding function for relative time strings
    function getSetRelativeTimeRounding(roundingFunction) {
        if (roundingFunction === undefined) {
            return round;
        }
        if (typeof roundingFunction === 'function') {
            round = roundingFunction;
            return true;
        }
        return false;
    }

    // This function allows you to set a threshold for relative time strings
    function getSetRelativeTimeThreshold(threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        if (threshold === 's') {
            thresholds.ss = limit - 1;
        }
        return true;
    }

    function humanize(argWithSuffix, argThresholds) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var withSuffix = false,
            th = thresholds,
            locale,
            output;

        if (typeof argWithSuffix === 'object') {
            argThresholds = argWithSuffix;
            argWithSuffix = false;
        }
        if (typeof argWithSuffix === 'boolean') {
            withSuffix = argWithSuffix;
        }
        if (typeof argThresholds === 'object') {
            th = Object.assign({}, thresholds, argThresholds);
            if (argThresholds.s != null && argThresholds.ss == null) {
                th.ss = argThresholds.s - 1;
            }
        }

        locale = this.localeData();
        output = relativeTime$1(this, !withSuffix, th, locale);

        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
    }

    var abs$1 = Math.abs;

    function sign(x) {
        return (x > 0) - (x < 0) || +x;
    }

    function toISOString$1() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var seconds = abs$1(this._milliseconds) / 1000,
            days = abs$1(this._days),
            months = abs$1(this._months),
            minutes,
            hours,
            years,
            s,
            total = this.asSeconds(),
            totalSign,
            ymSign,
            daysSign,
            hmsSign;

        if (!total) {
            // this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return 'P0D';
        }

        // 3600 seconds -> 60 minutes -> 1 hour
        minutes = absFloor(seconds / 60);
        hours = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';

        totalSign = total < 0 ? '-' : '';
        ymSign = sign(this._months) !== sign(total) ? '-' : '';
        daysSign = sign(this._days) !== sign(total) ? '-' : '';
        hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

        return (
            totalSign +
            'P' +
            (years ? ymSign + years + 'Y' : '') +
            (months ? ymSign + months + 'M' : '') +
            (days ? daysSign + days + 'D' : '') +
            (hours || minutes || seconds ? 'T' : '') +
            (hours ? hmsSign + hours + 'H' : '') +
            (minutes ? hmsSign + minutes + 'M' : '') +
            (seconds ? hmsSign + s + 'S' : '')
        );
    }

    var proto$2 = Duration.prototype;

    proto$2.isValid = isValid$1;
    proto$2.abs = abs;
    proto$2.add = add$1;
    proto$2.subtract = subtract$1;
    proto$2.as = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds = asSeconds;
    proto$2.asMinutes = asMinutes;
    proto$2.asHours = asHours;
    proto$2.asDays = asDays;
    proto$2.asWeeks = asWeeks;
    proto$2.asMonths = asMonths;
    proto$2.asQuarters = asQuarters;
    proto$2.asYears = asYears;
    proto$2.valueOf = valueOf$1;
    proto$2._bubble = bubble;
    proto$2.clone = clone$1;
    proto$2.get = get$2;
    proto$2.milliseconds = milliseconds;
    proto$2.seconds = seconds;
    proto$2.minutes = minutes;
    proto$2.hours = hours;
    proto$2.days = days;
    proto$2.weeks = weeks;
    proto$2.months = months;
    proto$2.years = years;
    proto$2.humanize = humanize;
    proto$2.toISOString = toISOString$1;
    proto$2.toString = toISOString$1;
    proto$2.toJSON = toISOString$1;
    proto$2.locale = locale;
    proto$2.localeData = localeData;

    proto$2.toIsoString = deprecate(
        'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
        toISOString$1
    );
    proto$2.lang = lang;

    // FORMATTING

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');

    // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input) * 1000);
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
    });

    //! moment.js

    hooks.version = '2.29.1';

    setHookCallback(createLocal);

    hooks.fn = proto;
    hooks.min = min;
    hooks.max = max;
    hooks.now = now;
    hooks.utc = createUTC;
    hooks.unix = createUnix;
    hooks.months = listMonths;
    hooks.isDate = isDate;
    hooks.locale = getSetGlobalLocale;
    hooks.invalid = createInvalid;
    hooks.duration = createDuration;
    hooks.isMoment = isMoment;
    hooks.weekdays = listWeekdays;
    hooks.parseZone = createInZone;
    hooks.localeData = getLocale;
    hooks.isDuration = isDuration;
    hooks.monthsShort = listMonthsShort;
    hooks.weekdaysMin = listWeekdaysMin;
    hooks.defineLocale = defineLocale;
    hooks.updateLocale = updateLocale;
    hooks.locales = listLocales;
    hooks.weekdaysShort = listWeekdaysShort;
    hooks.normalizeUnits = normalizeUnits;
    hooks.relativeTimeRounding = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat = getCalendarFormat;
    hooks.prototype = proto;

    // currently HTML5 input type only supports 24-hour formats
    hooks.HTML5_FMT = {
        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm', // <input type="datetime-local" />
        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss', // <input type="datetime-local" step="1" />
        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS', // <input type="datetime-local" step="0.001" />
        DATE: 'YYYY-MM-DD', // <input type="date" />
        TIME: 'HH:mm', // <input type="time" />
        TIME_SECONDS: 'HH:mm:ss', // <input type="time" step="1" />
        TIME_MS: 'HH:mm:ss.SSS', // <input type="time" step="0.001" />
        WEEK: 'GGGG-[W]WW', // <input type="week" />
        MONTH: 'YYYY-MM', // <input type="month" />
    };

    return hooks;

})));
}(moment$1));

var moment = moment$1.exports;

var amount_suggest_msg_fr = {
    pick: {
        label: {
            EQUITY: "Parts",
            LOAN: "Titres",
            FUND: "Parts"
        }
    },
    amount: {
        label: "Montant à investir"
    },
    hint: {
        factor_of: "Tranche de : ",
        min: "Montant minimum : ",
        max: "Montant maximum : "
    }
};

var item_pickers_msg_fr = {
    empty: "Aucun élément à afficher",
    item: {
        to_select: {
            label: "Elements sélectionnables"
        },
        selected: {
            label: "Elements sélectionnés"
        }
    },
    select_all: "Tout sélectionner",
    deselect_all: "Tout retirer",
    select: "Ajouter",
    deselect: "Retirer"
};

var datatable_msg_fr = {
    empty: "Aucune donnée à afficher",
    rows_per_page: "Lignes par page",
    table_displayed_rows: function (from, to, count) { return from + "-" + to + " de " + count; },
    frozen_action: "Fixer la colonne Actions",
    show_column_chooser: "Afficher le sélecteur de colonne",
    grouped_actions: {
        label: "Actions groupées",
        rows_selected: function (num) { return num + " ligne(s) s\u00E9lectionn\u00E9e(s)"; }
    },
    filter: {
        after: "Après",
        before: "Avant"
    }
};

//TODO: add i18n in this repo
var messages_fr = {
    global: {
        nc: "-",
        no: "Non",
        yes: "Oui",
        actions: "Actions",
        search: "Rechercher",
        cancel: "Annuler",
        clear: "Vider",
        valid: "Valide",
        invalid: "Invalid",
        load_more: "Charger plus",
        next: "Suivant"
    },
    datatable: datatable_msg_fr,
    amount_suggest: amount_suggest_msg_fr,
    items_pickers: item_pickers_msg_fr,
    currency: {
        symbol: {
            EUR: "€",
            USD: "$",
            GBP: "£",
            AUD: "AU$",
            BRL: "R$",
            CAD: "CA$",
            CHF: "Fr",
            SEK: "SEkr",
            JPY: "¥",
            SAR: "SAR",
            TCH: "{E,}"
        }
    },
    user: {
        gender: {
            MAN: "Homme",
            WOMAN: "Femme"
        },
        investor: {
            type: {
                NATURAL: "Personne physique",
                LEGAL: "Personne morale"
            },
            status: {
                validated: "Validé",
                waiting_validation: "En attente",
                not_validated: "Non validé"
            }
        },
        kyc: {
            status: {
                IN_REVIEW: "En cours de revue",
                WAITING_INFO: "En attente de pièces",
                WAITING_COUNTERPARTY: "En attente de contrepartie",
                WAITING_VALIDATION: "En attente de validation",
                WAITING_FUNDING: "En attente de financement"
            }
        },
        cosuscriber: {
            type: {
                CONJOINT: "Co-souscripteur",
                USUFRUCTUARY: "Usufruitier"
            }
        }
    },
    wallet: {
        status: {
            LIGHT: "Créé",
            CONFIRMED: "Validé",
            REJECTED: "Rejeté",
            null: "Non Créé"
        }
    }
};
var T = messages_fr;

var dateFormat = moment().localeData().longDateFormat("L");
var ParticeepDatePicker = function (props) {
    var label = props.label, value = props.value, onChange = props.onChange, minDate = props.minDate, maxDate = props.maxDate, clearable = props.clearable, className = props.className;
    return (React__default.createElement(DatePicker, __assign({ className: className, placeholder: label, format: dateFormat, value: value, onChange: onChange }, minDate && { minDate: minDate }, maxDate && { maxDate: maxDate }, { clearable: clearable || false, cancelLabel: T.global.cancel, clearLabel: T.global.clear, style: { width: "100%" } })));
};

var SelectInput = function (_a) {
    var label = _a.label, options = _a.options, fullWidth = _a.fullWidth, others = __rest(_a, ["label", "options", "fullWidth"]);
    var isFullWidth = typeof fullWidth !== "undefined" ? fullWidth : true;
    return (React__default.createElement(FormControl, { fullWidth: isFullWidth },
        React__default.createElement(InputLabel, null, label),
        React__default.createElement(Select, __assign({}, others), options.map(function (o, index) {
            return React__default.createElement(MenuItem, { key: index + "_" + o.label, value: o.value }, o.label);
        }))));
};

var defaultSearchCriteria = {
    sort_by: "created_at",
    order_by: "desc",
    global_search: "",
    limit: 20,
    offset: 0
};

var classnames = {exports: {}};

/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

(function (module) {
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
}(classnames));

var classNames = classnames.exports;

var compareKeys = function (a, b) {
    var aKeys = Object.keys(a).sort();
    var bKeys = Object.keys(b).sort();
    return JSON.stringify(aKeys) === JSON.stringify(bKeys);
};
var computeInitialPage = function (searchCriteria) {
    if (!!searchCriteria && !!searchCriteria.limit && searchCriteria.limit > 0) {
        return searchCriteria.offset / searchCriteria.limit;
    }
    else {
        return 0;
    }
};
var isRowSelected = function (id, selected) { return selected.map(function (s) { return s.id; }).includes(id); };
var computeEmptyCellColSpan = function (columns, hasMultipleActions, expandedRow, hasLocalActions) {
    return __spreadArray([hasMultipleActions, expandedRow, hasLocalActions], columns.map(function (c) { return c.visible; })).filter(function (v) { return v; }).length;
};
var renderDisplayedRows = function (_a) {
    var from = _a.from, to = _a.to, count = _a.count;
    return T.datatable.table_displayed_rows(from, to, count);
};

var filterHeight = 33;
var useStyles$e = makeStyles$1(function (theme) { return ({
    root: {
        height: filterHeight
    },
    dateAfter: {
        height: filterHeight,
        marginBottom: theme.spacing(0.3)
    },
    dateBefore: {
        height: filterHeight
    }
}); });
var defaultDateFilter = {
    after: null,
    before: null
};
var valueToFilter = function (value) {
    switch (value) {
        case "true":
            return true;
        case "false":
            return false;
        default:
            return "all";
    }
};
var filterToValue = function (filter) {
    switch (filter) {
        case true:
            return "true";
        case false:
            return "false";
        default:
            return "all";
    }
};
var FiltersBoolean = function (_a) {
    var name = _a.name, onFilter = _a.onFilter, filter = _a.filter;
    var classes = useStyles$e();
    var onChange = function (e) { return onFilter(name, valueToFilter(e.target.value)); };
    return (React__default.createElement(Select, { className: classes.root, style: { width: "100%" }, value: filterToValue(filter), onChange: onChange },
        React__default.createElement(MenuItem, { value: "all" }),
        React__default.createElement(MenuItem, { value: "false" }, T.global.no),
        React__default.createElement(MenuItem, { value: "true" }, T.global.yes)));
};
var FiltersArrayCustom = function (_a) {
    var name = _a.name, options = _a.options, onFilter = _a.onFilter, filter = _a.filter, _b = _a.withAllOption, withAllOption = _b === void 0 ? true : _b;
    var classes = useStyles$e();
    var onChange = function (e) { return onFilter(name, e.target.value ? e.target.value : null); };
    return (React__default.createElement(Select, { className: classes.root, style: { width: "100%" }, value: filter ? filter : "", onChange: onChange },
        withAllOption &&
            React__default.createElement(MenuItem, { value: "all" }),
        options.map(function (o, index) { return React__default.createElement(MenuItem, { key: name + "-" + index, value: o.value }, o.label); })));
};
var FiltersDate = function (_a) {
    var name = _a.name, onFilter = _a.onFilter, after = _a.after, before = _a.before;
    var classes = useStyles$e();
    var onChange = function (type) { return function (date) { return onFilter(name, type, moment(date).toISOString()); }; };
    return (React__default.createElement("div", null,
        React__default.createElement(ParticeepDatePicker, __assign({ className: classes.dateAfter, label: T.datatable.filter.after, value: after ? after : null }, before && { maxDate: new Date(before) }, { onChange: onChange("after"), clearable: true })),
        React__default.createElement(ParticeepDatePicker, __assign({ className: classes.dateBefore, label: T.datatable.filter.before, value: before ? before : null }, after && { minDate: new Date(after) }, { onChange: onChange("before"), clearable: true }))));
};
var buildFilterValues = function (filters) {
    var clone = Object.assign({}, filters);
    Object.keys(filters).forEach(function (key) {
        if (filters[key] === null || filters[key] === undefined || (filters[key] && filters[key].length === 0)) {
            delete clone[key];
        }
        else {
            if (compareKeys(filters[key], defaultDateFilter)) {
                clone["" + key.replace("_at", "_after")] = filters[key].after ? filters[key].after : "";
                clone["" + key.replace("_at", "_before")] = filters[key].before ? filters[key].before : "";
                delete clone[key];
            }
            if (filters[key] === "all") {
                clone[key] = "";
            }
        }
    });
    return clone;
};

var DatatableFooter = function (props) {
    var searchResult = props.searchResult, limit = props.limit, page = props.page, onPageChange = props.onPageChange, onChangeRowsPerPage = props.onChangeRowsPerPage;
    var rowsPerPageOptions = searchResult.total_size >= 10 ? [10, 20, 50, 100] : [];
    return (React__default.createElement(TableFooter, null,
        React__default.createElement(TablePagination, { labelRowsPerPage: T.datatable.rows_per_page, labelDisplayedRows: renderDisplayedRows, rowsPerPageOptions: rowsPerPageOptions, count: searchResult.total_size || 0, rowsPerPage: limit, page: page, onChangePage: onPageChange, onChangeRowsPerPage: onChangeRowsPerPage })));
};

var useHeadStyles = makeStyles$1(function (theme) { return ({
    headerRow: {
        "& > th": {
            borderBottom: "1px solid " + theme.palette.divider
        },
        "& > th:first-child": {
            paddingLeft: theme.spacing(2) + "px !important"
        },
        "& > th:last-child": {
            paddingRight: theme.spacing(2) + "px !important"
        }
    },
    actionsCell: {
        background: "transparent !important"
    }
}); });

var CellWithSort = function (_a) {
    var col = _a.col, sortHandler = _a.sortHandler, sortCriteria = _a.sortCriteria;
    var canSort = col.canSort !== undefined ? col.canSort : true;
    if (canSort) {
        return (React__default.createElement(Tooltip, { title: "Sort", placement: col.type === "number" ? "bottom-end" : "bottom-start", enterDelay: 300 },
            React__default.createElement(TableSortLabel, { active: sortCriteria.sort_by === col.field_name, direction: sortCriteria.order_by, onClick: sortHandler }, col.label)));
    }
    else {
        return (React__default.createElement("span", null, col.label));
    }
};
var DatatableHead = function (props) {
    var columns = props.columns, columnsVisibility = props.columnsVisibility, searchCriteria = props.searchCriteria, onSort = props.onSort, displayLocalActions = props.displayLocalActions, selectedRows = props.selectedRows, onToggleAllSelect = props.onToggleAllSelect, limit = props.limit, hasMultipleActions = props.hasMultipleActions, expandedRow = props.expandedRow, isLocalTable = props.isLocalTable, className = props.className;
    var classes = useHeadStyles();
    var createSortHandler = function (col) { return function () {
        var sort_by = searchCriteria.sort_by, order_by = searchCriteria.order_by;
        var order = "desc";
        if (sort_by === col.field_name && order_by === "desc") {
            order = "asc";
        }
        onSort({ sort_by: col.field_name, order_by: order });
    }; };
    var cellRender = function (visibility, col) {
        if (visibility) {
            return (React__default.createElement(TableCell, __assign({ key: col.field_name, align: col.type === "number" ? "right" : "left" }, !isLocalTable && { sortDirection: searchCriteria.sort_by === col.field_name ? searchCriteria.order_by : false }),
                !isLocalTable &&
                    React__default.createElement(CellWithSort, { col: col, sortHandler: createSortHandler(col), sortCriteria: {
                            order_by: searchCriteria.order_by,
                            sort_by: searchCriteria.sort_by
                        } }),
                isLocalTable && React__default.createElement("span", null, col.label)));
        }
        else {
            return React__default.createElement(React__default.Fragment, { key: col.field_name });
        }
    };
    return (React__default.createElement(TableHead, __assign({}, { className: className }),
        React__default.createElement(TableRow, { className: classes.headerRow },
            hasMultipleActions &&
                React__default.createElement(TableCell, { padding: "checkbox" },
                    React__default.createElement(Checkbox, { indeterminate: selectedRows.length > 0 && selectedRows.length < limit, checked: selectedRows.length === limit, onChange: onToggleAllSelect, style: { paddingTop: 0, paddingBottom: 0 } })),
            expandedRow &&
                React__default.createElement(TableCell, { style: { width: 30 } }, "\u00A0"),
            columns.map(function (col) { return cellRender(!!columnsVisibility[col.field_name], col); }),
            displayLocalActions && React__default.createElement(TableCell, { className: classes.actionsCell }, "\u00A0"))));
};

var reactIs$1 = {exports: {}};

var reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;
reactIs_production_min.Profiler=g;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p;reactIs_production_min.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min.isConcurrentMode=A;reactIs_production_min.isContextConsumer=function(a){return z(a)===k};reactIs_production_min.isContextProvider=function(a){return z(a)===h};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min.isForwardRef=function(a){return z(a)===n};reactIs_production_min.isFragment=function(a){return z(a)===e};reactIs_production_min.isLazy=function(a){return z(a)===t};
reactIs_production_min.isMemo=function(a){return z(a)===r};reactIs_production_min.isPortal=function(a){return z(a)===d};reactIs_production_min.isProfiler=function(a){return z(a)===g};reactIs_production_min.isStrictMode=function(a){return z(a)===f};reactIs_production_min.isSuspense=function(a){return z(a)===p};
reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min.typeOf=z;

var reactIs_development = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

reactIs_development.AsyncMode = AsyncMode;
reactIs_development.ConcurrentMode = ConcurrentMode;
reactIs_development.ContextConsumer = ContextConsumer;
reactIs_development.ContextProvider = ContextProvider;
reactIs_development.Element = Element;
reactIs_development.ForwardRef = ForwardRef;
reactIs_development.Fragment = Fragment;
reactIs_development.Lazy = Lazy;
reactIs_development.Memo = Memo;
reactIs_development.Portal = Portal;
reactIs_development.Profiler = Profiler;
reactIs_development.StrictMode = StrictMode;
reactIs_development.Suspense = Suspense;
reactIs_development.isAsyncMode = isAsyncMode;
reactIs_development.isConcurrentMode = isConcurrentMode;
reactIs_development.isContextConsumer = isContextConsumer;
reactIs_development.isContextProvider = isContextProvider;
reactIs_development.isElement = isElement;
reactIs_development.isForwardRef = isForwardRef;
reactIs_development.isFragment = isFragment;
reactIs_development.isLazy = isLazy;
reactIs_development.isMemo = isMemo;
reactIs_development.isPortal = isPortal;
reactIs_development.isProfiler = isProfiler;
reactIs_development.isStrictMode = isStrictMode;
reactIs_development.isSuspense = isSuspense;
reactIs_development.isValidElementType = isValidElementType;
reactIs_development.typeOf = typeOf;
  })();
}

if (process.env.NODE_ENV === 'production') {
  reactIs$1.exports = reactIs_production_min;
} else {
  reactIs$1.exports = reactIs_development;
}

var reactIs = reactIs$1.exports;
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

/**
 * Cannot do Math.log(x) / Math.log(10) bc if IEEE floating point issue
 * @param x number
 */
function invariant(condition, message, Err) {
    if (Err === void 0) { Err = Error; }
    if (!condition) {
        throw new Err(message);
    }
}

var src = {exports: {}};

//
// Main
//

function memoize (fn, options) {
  var cache = options && options.cache
    ? options.cache
    : cacheDefault;

  var serializer = options && options.serializer
    ? options.serializer
    : serializerDefault;

  var strategy = options && options.strategy
    ? options.strategy
    : strategyDefault;

  return strategy(fn, {
    cache: cache,
    serializer: serializer
  })
}

//
// Strategy
//

function isPrimitive (value) {
  return value == null || typeof value === 'number' || typeof value === 'boolean' // || typeof value === "string" 'unsafe' primitive for our needs
}

function monadic (fn, cache, serializer, arg) {
  var cacheKey = isPrimitive(arg) ? arg : serializer(arg);

  var computedValue = cache.get(cacheKey);
  if (typeof computedValue === 'undefined') {
    computedValue = fn.call(this, arg);
    cache.set(cacheKey, computedValue);
  }

  return computedValue
}

function variadic (fn, cache, serializer) {
  var args = Array.prototype.slice.call(arguments, 3);
  var cacheKey = serializer(args);

  var computedValue = cache.get(cacheKey);
  if (typeof computedValue === 'undefined') {
    computedValue = fn.apply(this, args);
    cache.set(cacheKey, computedValue);
  }

  return computedValue
}

function assemble (fn, context, strategy, cache, serialize) {
  return strategy.bind(
    context,
    fn,
    cache,
    serialize
  )
}

function strategyDefault (fn, options) {
  var strategy = fn.length === 1 ? monadic : variadic;

  return assemble(
    fn,
    this,
    strategy,
    options.cache.create(),
    options.serializer
  )
}

function strategyVariadic (fn, options) {
  var strategy = variadic;

  return assemble(
    fn,
    this,
    strategy,
    options.cache.create(),
    options.serializer
  )
}

function strategyMonadic (fn, options) {
  var strategy = monadic;

  return assemble(
    fn,
    this,
    strategy,
    options.cache.create(),
    options.serializer
  )
}

//
// Serializer
//

function serializerDefault () {
  return JSON.stringify(arguments)
}

//
// Cache
//

function ObjectWithoutPrototypeCache () {
  this.cache = Object.create(null);
}

ObjectWithoutPrototypeCache.prototype.has = function (key) {
  return (key in this.cache)
};

ObjectWithoutPrototypeCache.prototype.get = function (key) {
  return this.cache[key]
};

ObjectWithoutPrototypeCache.prototype.set = function (key, value) {
  this.cache[key] = value;
};

var cacheDefault = {
  create: function create () {
    return new ObjectWithoutPrototypeCache()
  }
};

//
// API
//

src.exports = memoize;
src.exports.strategies = {
  variadic: strategyVariadic,
  monadic: strategyMonadic
};

var defaultErrorHandler = function (error) {
    if (process.env.NODE_ENV !== 'production') {
        console.error(error);
    }
};
var DEFAULT_INTL_CONFIG = {
    formats: {},
    messages: {},
    timeZone: undefined,
    defaultLocale: 'en',
    defaultFormats: {},
    onError: defaultErrorHandler,
};

function invariantIntlContext(intl) {
    invariant(intl, '[React Intl] Could not find required `intl` object. ' +
        '<IntlProvider> needs to exist in the component ancestry.');
}
__assign(__assign({}, DEFAULT_INTL_CONFIG), { textComponent: React$2.Fragment });

// TODO: We should provide initial value here
var IntlContext = React$2.createContext(null);
IntlContext.Consumer; IntlContext.Provider;
var Context = IntlContext;

function useIntl() {
    var intl = React$2.useContext(Context);
    invariantIntlContext(intl);
    return intl;
}

var DisplayName;
(function (DisplayName) {
    DisplayName["formatDate"] = "FormattedDate";
    DisplayName["formatTime"] = "FormattedTime";
    DisplayName["formatNumber"] = "FormattedNumber";
    DisplayName["formatList"] = "FormattedList";
    // Note that this DisplayName is the locale display name, not to be confused with
    // the name of the enum, which is for React component display name in dev tools.
    DisplayName["formatDisplayName"] = "FormattedDisplayName";
})(DisplayName || (DisplayName = {}));
var DisplayNameParts;
(function (DisplayNameParts) {
    DisplayNameParts["formatDate"] = "FormattedDateParts";
    DisplayNameParts["formatTime"] = "FormattedTimeParts";
    DisplayNameParts["formatNumber"] = "FormattedNumberParts";
    DisplayNameParts["formatList"] = "FormattedListParts";
})(DisplayNameParts || (DisplayNameParts = {}));
function createFormattedComponent(name) {
    var Component = function (props) {
        var intl = useIntl();
        var value = props.value, children = props.children, formatProps = __rest(props
        // TODO: fix TS type definition for localeMatcher upstream
        , ["value", "children"]);
        // TODO: fix TS type definition for localeMatcher upstream
        var formattedValue = intl[name](value, formatProps);
        if (typeof children === 'function') {
            return children(formattedValue);
        }
        var Text = intl.textComponent || React$2.Fragment;
        return React$2.createElement(Text, null, formattedValue);
    };
    Component.displayName = DisplayName[name];
    return Component;
}

// IMPORTANT: Explicit here to prevent api-extractor from outputing `import('./src/types').CustomFormatConfig`
var FormattedDate$1 = createFormattedComponent('formatDate');
var FormattedTime = createFormattedComponent('formatTime');
var FormattedNumber$1 = createFormattedComponent('formatNumber');
createFormattedComponent('formatList');
createFormattedComponent('formatDisplayName');

var DisplayAmount = function (_a) {
    var amount = _a.amount, currency = _a.currency;
    return (React__default.createElement(FormattedNumber, { value: amount, currency: currency, variant: "currency" }));
};
var DisplayPercent = function (_a) {
    var value = _a.value;
    return (React__default.createElement(FormattedNumber, { value: value, variant: "percent" }));
};
var FormattedAmount = function (_a) {
    var row = _a.row, value = _a.value, _b = _a.variant, variant = _b === void 0 ? "currency" : _b;
    var currency = row.currency ? row.currency : "EUR";
    return React__default.createElement(FormattedNumber, { value: value, currency: currency, variant: variant });
};
var isValueExist = function (value) { return !!value && value !== T.global.nc; };
var FormattedNumber = function (_a) {
    var value = _a.value, _b = _a.variant, variant = _b === void 0 ? "standard" : _b, _c = _a.currency, currency = _c === void 0 ? "EUR" : _c;
    if (value !== 0 && !value) {
        return React__default.createElement(React__default.Fragment, null);
    }
    if (variant === "currency") {
        return (React__default.createElement(FormattedNumber$1, { value: isValueExist(value) ? (value / 100) : 0, style: variant, currency: currency }));
    }
    else if (variant === "currency-standard") {
        return (React__default.createElement(FormattedNumber$1, { value: isValueExist(value) ? value : 0, style: "currency", currency: currency }));
    }
    else if (variant === "percent") {
        return React__default.createElement(FormattedNumber$1, { value: value / 100, style: variant, minimumFractionDigits: 2 });
    }
    else {
        return React__default.createElement(FormattedNumber$1, { value: value, style: variant });
    }
};

var FormattedBoolean = function (_a) {
    var value = _a.value;
    if (value) {
        return React__default.createElement(React__default.Fragment, null, T.global.yes);
    }
    else {
        return React__default.createElement(React__default.Fragment, null, T.global.no);
    }
};

var FormattedDateTime = function (_a) {
    var value = _a.value;
    if (value && moment(value).isValid()) {
        return (React__default.createElement(React__default.Fragment, null,
            React__default.createElement(FormattedDate$1, { value: value }),
            " ",
            React__default.createElement(FormattedTime, { value: value, format: "24hour" })));
    }
    else {
        return (React__default.createElement(React__default.Fragment, null, T.global.nc));
    }
};

var FormattedNumbr = function (_a) {
    var value = _a.value;
    return (React__default.createElement(FormattedNumber$1, { value: value }));
};

var FormattedDate = function (_a) {
    var value = _a.value;
    return (React__default.createElement(FormattedDate$1, { value: value, year: "2-digit", month: "2-digit", day: "2-digit" }));
};

var FormattedLegalType = function (_a) {
    var value = _a.value;
    if (value === "CONJOINT") {
        return React__default.createElement(React__default.Fragment, null, T.user.cosuscriber.type.CONJOINT);
    }
    else if (value === "USUFRUCTUARY") {
        return React__default.createElement(React__default.Fragment, null, T.user.cosuscriber.type.USUFRUCTUARY);
    }
    else {
        return React__default.createElement(React__default.Fragment, null, T.global.nc);
    }
};

var FormattedGender = function (_a) {
    var value = _a.value;
    if (value === "MAN") {
        return React__default.createElement(React__default.Fragment, null, T.user.gender.MAN);
    }
    else if (value === "WOMAN") {
        return React__default.createElement(React__default.Fragment, null, T.user.gender.WOMAN);
    }
    else {
        return React__default.createElement(React__default.Fragment, null, T.global.nc);
    }
};

var useBodyStyles = makeStyles$1(function (theme) { return ({
    root: {
        "&:nth-of-type(odd)": {
            backgroundColor: "#fbfbfc"
        },
        "&:nth-of-type(even)": {
            backgroundColor: "white"
        },
        "&:nth-of-type(odd).Mui-selected, &:nth-of-type(even).Mui-selected": {
            backgroundColor: fade(theme.palette.secondary.light, theme.palette.action.selectedOpacity)
        }
    },
    tableRow: {
        "& > td:first-child": {
            paddingLeft: theme.spacing(2) + "px !important"
        },
        "& > td:last-child": {
            paddingRight: theme.spacing(2) + "px !important"
        }
    },
    expandedCell: {
        width: 30,
        "& > .MuiIconButton-sizeSmall": {
            height: "30px !important",
            width: "30px !important"
        }
    },
    expandedRow: {
        textAlign: "left"
    },
    checkboxCell: {
        width: 45,
        minHeight: 40,
        padding: theme.spacing(0.5, 1) + " !important"
    },
    actionCell: {
        textAlign: "right",
        padding: theme.spacing(0.5, 1) + " !important"
    },
    emptyCellIcon: {
        fontSize: 35
    }
}); });

var EmptyRow = function (props) {
    var classes = useBodyStyles();
    return (React__default.createElement(TableBody, null,
        React__default.createElement(TableRow, null,
            React__default.createElement(TableCell, { align: "center", colSpan: props.colSpan },
                React__default.createElement("div", null,
                    React__default.createElement(Icon, { color: "disabled", className: classes.emptyCellIcon }, "block")),
                React__default.createElement(Typography, { variant: "caption" }, T.datatable.empty)))));
};
var buildCell = function (row_value, type_of, row, index) {
    var cell_id = row.id + "--" + index;
    switch (type_of) {
        case "number":
            return React__default.createElement(TableCell, { key: cell_id },
                React__default.createElement(FormattedNumber, { value: row_value }));
        case "currency":
            return React__default.createElement(TableCell, { key: cell_id },
                React__default.createElement(FormattedAmount, { value: row_value, row: row, variant: "currency" }));
        case "currency-standard":
            return React__default.createElement(TableCell, { key: cell_id },
                React__default.createElement(FormattedAmount, { value: row_value, row: row, variant: "currency-standard" }));
        case "percentage":
            return React__default.createElement(TableCell, { key: cell_id },
                React__default.createElement(FormattedAmount, { value: row_value, row: row, variant: "percent" }));
        case "boolean":
            return React__default.createElement(TableCell, { key: cell_id },
                React__default.createElement(FormattedBoolean, { value: row_value }));
        case "date":
            return React__default.createElement(TableCell, { key: cell_id },
                React__default.createElement(FormattedDate, { value: row_value }));
        case "datetime":
            return React__default.createElement(TableCell, { key: cell_id },
                React__default.createElement(FormattedDateTime, { value: row_value }));
        case "gender":
            return React__default.createElement(TableCell, { key: cell_id },
                React__default.createElement(FormattedGender, { value: row_value }));
        case "legalType":
            return React__default.createElement(TableCell, { key: cell_id },
                React__default.createElement(FormattedLegalType, { value: row_value }));
        default:
            return React__default.createElement(TableCell, { key: cell_id, scope: "row" }, row_value);
    }
};
var buildRow = function (row, columns, columnsVisibility) {
    var result = [];
    columns.map(function (col, index) {
        var formatter = col.formatter ? col.formatter : function (c) { return c; };
        var value_formatted = formatter(row[col.field_name], row);
        var row_value = value_formatted !== undefined ? value_formatted : T.global.nc;
        var type_of = col.type ? col.type : (typeof row_value);
        if (!!columnsVisibility[col.field_name]) {
            result.push(buildCell(row_value, type_of, row, index));
        }
    });
    return result;
};
var DatatableBody = function (props) {
    var columns = props.columns, columnsVisibility = props.columnsVisibility, loading = props.loading, searchResult = props.searchResult, selectedRows = props.selectedRows, onToggleSelect = props.onToggleSelect, cellActions = props.cellActions, hasLocalActions = props.hasLocalActions, hasMultipleActions = props.hasMultipleActions, displayLocalActions = props.displayLocalActions, expandedRow = props.expandedRow;
    var _a = useState([]), rowExpanded = _a[0], setRowExpanded = _a[1];
    var classes = useBodyStyles();
    var toggleExpand = function (rowId) { return function () {
        if (rowExpanded.includes(rowId)) {
            setRowExpanded(__spreadArray([], rowExpanded.filter(function (r) { return r !== rowId; })));
        }
        else {
            setRowExpanded(__spreadArray([rowId], rowExpanded));
        }
    }; };
    if (searchResult.data && searchResult.data.length === 0 && !loading) {
        var colSpan = computeEmptyCellColSpan(columns, hasMultipleActions, expandedRow, hasLocalActions);
        return (React__default.createElement(EmptyRow, { colSpan: colSpan }));
    }
    return (React__default.createElement(TableBody, null, searchResult.data.map(function (row) {
        var isSelected = selectedRows ? isRowSelected(row.id, selectedRows) : false;
        var isExpanded = rowExpanded.includes(row.id);
        return (React__default.createElement(React__default.Fragment, { key: row.id },
            React__default.createElement(TableRow, { hover: true, role: "checkbox", tabIndex: -1, selected: isSelected, className: classes.tableRow, classes: { root: classes.root } },
                hasMultipleActions &&
                    React__default.createElement(TableCell, { className: classes.checkboxCell },
                        React__default.createElement(Checkbox, { checked: isSelected, onClick: onToggleSelect(row) })),
                expandedRow &&
                    React__default.createElement(TableCell, { className: classes.expandedCell },
                        React__default.createElement(IconBtn, { onClick: toggleExpand(row.id) }, isExpanded ? React__default.createElement(KeyboardArrowUp, null) : React__default.createElement(KeyboardArrowDown, null))),
                buildRow(row, columns, columnsVisibility),
                displayLocalActions &&
                    React__default.createElement(Fade, { in: displayLocalActions },
                        React__default.createElement(TableCell, { className: classes.actionCell }, cellActions(row)))),
            isExpanded &&
                React__default.createElement(Fade, { in: isExpanded },
                    React__default.createElement(TableRow, { key: "expanded-row-" + row.id, hover: true },
                        React__default.createElement(TableCell, { style: { textAlign: "left" }, colSpan: 100 }, expandedRow(row))))));
    })));
};

var immutabilityHelper = {exports: {}};

(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
function stringifiable(obj) {
    // Safely stringify Object.create(null)
    /* istanbul ignore next */
    return typeof obj === 'object' && !('toString' in obj) ?
        Object.prototype.toString.call(obj).slice(8, -1) :
        obj;
}
var isProduction = typeof process === 'object' && process.env.NODE_ENV === 'production';
function invariant(condition, message) {
    if (!condition) {
        /* istanbul ignore next */
        if (isProduction) {
            throw new Error('Invariant failed');
        }
        throw new Error(message());
    }
}
exports.invariant = invariant;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var splice = Array.prototype.splice;
var toString = Object.prototype.toString;
function type(obj) {
    return toString.call(obj).slice(8, -1);
}
var assign = Object.assign || /* istanbul ignore next */ (function (target, source) {
    getAllKeys(source).forEach(function (key) {
        if (hasOwnProperty.call(source, key)) {
            target[key] = source[key];
        }
    });
    return target;
});
var getAllKeys = typeof Object.getOwnPropertySymbols === 'function'
    ? function (obj) { return Object.keys(obj).concat(Object.getOwnPropertySymbols(obj)); }
    /* istanbul ignore next */
    : function (obj) { return Object.keys(obj); };
function copy(object) {
    return Array.isArray(object)
        ? assign(object.constructor(object.length), object)
        : (type(object) === 'Map')
            ? new Map(object)
            : (type(object) === 'Set')
                ? new Set(object)
                : (object && typeof object === 'object')
                    ? assign(Object.create(Object.getPrototypeOf(object)), object)
                    /* istanbul ignore next */
                    : object;
}
var Context = /** @class */ (function () {
    function Context() {
        this.commands = assign({}, defaultCommands);
        this.update = this.update.bind(this);
        // Deprecated: update.extend, update.isEquals and update.newContext
        this.update.extend = this.extend = this.extend.bind(this);
        this.update.isEquals = function (x, y) { return x === y; };
        this.update.newContext = function () { return new Context().update; };
    }
    Object.defineProperty(Context.prototype, "isEquals", {
        get: function () {
            return this.update.isEquals;
        },
        set: function (value) {
            this.update.isEquals = value;
        },
        enumerable: true,
        configurable: true
    });
    Context.prototype.extend = function (directive, fn) {
        this.commands[directive] = fn;
    };
    Context.prototype.update = function (object, $spec) {
        var _this = this;
        var spec = (typeof $spec === 'function') ? { $apply: $spec } : $spec;
        if (!(Array.isArray(object) && Array.isArray(spec))) {
            invariant(!Array.isArray(spec), function () { return "update(): You provided an invalid spec to update(). The spec may " +
                "not contain an array except as the value of $set, $push, $unshift, " +
                "$splice or any custom command allowing an array value."; });
        }
        invariant(typeof spec === 'object' && spec !== null, function () { return "update(): You provided an invalid spec to update(). The spec and " +
            "every included key path must be plain objects containing one of the " +
            ("following commands: " + Object.keys(_this.commands).join(', ') + "."); });
        var nextObject = object;
        getAllKeys(spec).forEach(function (key) {
            if (hasOwnProperty.call(_this.commands, key)) {
                var objectWasNextObject = object === nextObject;
                nextObject = _this.commands[key](spec[key], nextObject, spec, object);
                if (objectWasNextObject && _this.isEquals(nextObject, object)) {
                    nextObject = object;
                }
            }
            else {
                var nextValueForKey = type(object) === 'Map'
                    ? _this.update(object.get(key), spec[key])
                    : _this.update(object[key], spec[key]);
                var nextObjectValue = type(nextObject) === 'Map'
                    ? nextObject.get(key)
                    : nextObject[key];
                if (!_this.isEquals(nextValueForKey, nextObjectValue)
                    || typeof nextValueForKey === 'undefined'
                        && !hasOwnProperty.call(object, key)) {
                    if (nextObject === object) {
                        nextObject = copy(object);
                    }
                    if (type(nextObject) === 'Map') {
                        nextObject.set(key, nextValueForKey);
                    }
                    else {
                        nextObject[key] = nextValueForKey;
                    }
                }
            }
        });
        return nextObject;
    };
    return Context;
}());
exports.Context = Context;
var defaultCommands = {
    $push: function (value, nextObject, spec) {
        invariantPushAndUnshift(nextObject, spec, '$push');
        return value.length ? nextObject.concat(value) : nextObject;
    },
    $unshift: function (value, nextObject, spec) {
        invariantPushAndUnshift(nextObject, spec, '$unshift');
        return value.length ? value.concat(nextObject) : nextObject;
    },
    $splice: function (value, nextObject, spec, originalObject) {
        invariantSplices(nextObject, spec);
        value.forEach(function (args) {
            invariantSplice(args);
            if (nextObject === originalObject && args.length) {
                nextObject = copy(originalObject);
            }
            splice.apply(nextObject, args);
        });
        return nextObject;
    },
    $set: function (value, _nextObject, spec) {
        invariantSet(spec);
        return value;
    },
    $toggle: function (targets, nextObject) {
        invariantSpecArray(targets, '$toggle');
        var nextObjectCopy = targets.length ? copy(nextObject) : nextObject;
        targets.forEach(function (target) {
            nextObjectCopy[target] = !nextObject[target];
        });
        return nextObjectCopy;
    },
    $unset: function (value, nextObject, _spec, originalObject) {
        invariantSpecArray(value, '$unset');
        value.forEach(function (key) {
            if (Object.hasOwnProperty.call(nextObject, key)) {
                if (nextObject === originalObject) {
                    nextObject = copy(originalObject);
                }
                delete nextObject[key];
            }
        });
        return nextObject;
    },
    $add: function (values, nextObject, _spec, originalObject) {
        invariantMapOrSet(nextObject, '$add');
        invariantSpecArray(values, '$add');
        if (type(nextObject) === 'Map') {
            values.forEach(function (_a) {
                var key = _a[0], value = _a[1];
                if (nextObject === originalObject && nextObject.get(key) !== value) {
                    nextObject = copy(originalObject);
                }
                nextObject.set(key, value);
            });
        }
        else {
            values.forEach(function (value) {
                if (nextObject === originalObject && !nextObject.has(value)) {
                    nextObject = copy(originalObject);
                }
                nextObject.add(value);
            });
        }
        return nextObject;
    },
    $remove: function (value, nextObject, _spec, originalObject) {
        invariantMapOrSet(nextObject, '$remove');
        invariantSpecArray(value, '$remove');
        value.forEach(function (key) {
            if (nextObject === originalObject && nextObject.has(key)) {
                nextObject = copy(originalObject);
            }
            nextObject.delete(key);
        });
        return nextObject;
    },
    $merge: function (value, nextObject, _spec, originalObject) {
        invariantMerge(nextObject, value);
        getAllKeys(value).forEach(function (key) {
            if (value[key] !== nextObject[key]) {
                if (nextObject === originalObject) {
                    nextObject = copy(originalObject);
                }
                nextObject[key] = value[key];
            }
        });
        return nextObject;
    },
    $apply: function (value, original) {
        invariantApply(value);
        return value(original);
    },
};
var defaultContext = new Context();
exports.isEquals = defaultContext.update.isEquals;
exports.extend = defaultContext.extend;
exports.default = defaultContext.update;
// @ts-ignore
exports.default.default = module.exports = assign(exports.default, exports);
// invariants
function invariantPushAndUnshift(value, spec, command) {
    invariant(Array.isArray(value), function () { return "update(): expected target of " + stringifiable(command) + " to be an array; got " + stringifiable(value) + "."; });
    invariantSpecArray(spec[command], command);
}
function invariantSpecArray(spec, command) {
    invariant(Array.isArray(spec), function () { return "update(): expected spec of " + stringifiable(command) + " to be an array; got " + stringifiable(spec) + ". " +
        "Did you forget to wrap your parameter in an array?"; });
}
function invariantSplices(value, spec) {
    invariant(Array.isArray(value), function () { return "Expected $splice target to be an array; got " + stringifiable(value); });
    invariantSplice(spec.$splice);
}
function invariantSplice(value) {
    invariant(Array.isArray(value), function () { return "update(): expected spec of $splice to be an array of arrays; got " + stringifiable(value) + ". " +
        "Did you forget to wrap your parameters in an array?"; });
}
function invariantApply(fn) {
    invariant(typeof fn === 'function', function () { return "update(): expected spec of $apply to be a function; got " + stringifiable(fn) + "."; });
}
function invariantSet(spec) {
    invariant(Object.keys(spec).length === 1, function () { return "Cannot have more than one key in an object with $set"; });
}
function invariantMerge(target, specValue) {
    invariant(specValue && typeof specValue === 'object', function () { return "update(): $merge expects a spec of type 'object'; got " + stringifiable(specValue); });
    invariant(target && typeof target === 'object', function () { return "update(): $merge expects a target of type 'object'; got " + stringifiable(target); });
}
function invariantMapOrSet(target, command) {
    var typeOfTarget = type(target);
    invariant(typeOfTarget === 'Map' || typeOfTarget === 'Set', function () { return "update(): " + stringifiable(command) + " expects a target of type Set or Map; got " + stringifiable(typeOfTarget); });
}
}(immutabilityHelper, immutabilityHelper.exports));

var update = /*@__PURE__*/getDefaultExportFromCjs(immutabilityHelper.exports);

var useFilterStyles = makeStyles(function (theme) { return ({
    root: {
        backgroundColor: theme.palette.background.default,
        opacity: 0.7
    },
    filterCell: {
        padding: theme.spacing(),
        borderBottom: "1px solid " + theme.palette.divider
    },
    filterRow: {
        "& > th:first-child": {
            paddingLeft: theme.spacing(2) + "px !important",
            borderBottom: "1px solid " + theme.palette.divider
        },
        "& > th:last-child": {
            paddingRight: theme.spacing(2) + "px !important",
            borderBottom: "1px solid " + theme.palette.divider
        }
    }
}); });

var getDefaultFilter = function (col) {
    switch (col.filter) {
        case "DATE":
            return defaultDateFilter;
        default:
            return null;
    }
};
var DatatableFilter = function (_a) {
    var columns = _a.columns, displayLocalActions = _a.displayLocalActions, hasMultipleActions = _a.hasMultipleActions, columnsVisibility = _a.columnsVisibility, onFilter = _a.onFilter;
    var classes = useFilterStyles();
    var initialFilter = columns.filter(function (c) { return c.filter; }).reduce(function (acc, cur) {
        var _a;
        return (__assign(__assign({}, acc), (_a = {}, _a[cur.field_name] = getDefaultFilter(cur), _a)));
    }, {});
    var _b = useState(initialFilter), filtered = _b[0], setFiltered = _b[1];
    var handleFilter = function (name, value) {
        var _a;
        var newFilteredValue = __assign(__assign({}, filtered), (_a = {}, _a[name] = value, _a));
        setFiltered(newFilteredValue);
        onFilter(newFilteredValue);
    };
    var handleJsonFieldsFilter = function (name, value) {
        var subField = name.split(".")[1];
        var newFilteredValue = __assign(__assign({}, filtered), { custom_field: subField, custom_value: value });
        setFiltered(newFilteredValue);
        onFilter(newFilteredValue);
    };
    var handleFilterDate = function (name, type, value) {
        var _a, _b;
        var newFilteredValue = update(filtered, (_a = {},
            _a[name] = (_b = {},
                _b[type] = { $set: value },
                _b),
            _a));
        setFiltered(newFilteredValue);
        onFilter(newFilteredValue);
    };
    var filterRendering = function (col) {
        switch (col.filter) {
            case "BOOLEAN":
                return (React__default.createElement(FiltersBoolean, { key: "filters-boolean-" + col.field_name, name: col.field_name, onFilter: handleFilter, filter: filtered[col.field_name] }));
            case "CUSTOM":
                return (React__default.createElement(FiltersArrayCustom, __assign({ key: "filters-custom-" + col.field_name, name: col.field_name, onFilter: handleFilter, options: col.filterOptions, filter: filtered[col.field_name] }, col.withAllOption !== undefined && { withAllOption: col.withAllOption })));
            case "DATE":
                return (React__default.createElement(FiltersDate, { key: "filters-date-" + col.field_name, name: col.field_name, onFilter: handleFilterDate, after: filtered[col.field_name].after, before: filtered[col.field_name].before }));
            case "JSON":
                return (React__default.createElement(FiltersArrayCustom, __assign({ key: "filters-custom-" + col.field_name, name: col.field_name, onFilter: handleJsonFieldsFilter, options: col.filterOptions, filter: filtered[col.field_name] }, col.withAllOption !== undefined && { withAllOption: col.withAllOption })));
            default:
                return React__default.createElement(React__default.Fragment, null);
        }
    };
    return (React__default.createElement(TableHead, { classes: { root: classes.root } },
        React__default.createElement(TableRow, { className: classes.filterRow },
            hasMultipleActions && React__default.createElement(TableCell, null, "\u00A0"),
            columns
                .filter(function (col) { return !!columnsVisibility[col.field_name]; })
                .map(function (col) { return React__default.createElement(TableCell, { key: "filter-cell-" + col.field_name, className: classes.filterCell },
                " ",
                filterRendering(col),
                " "); }),
            displayLocalActions && React__default.createElement(TableCell, null, "\u00A0"))));
};

var useToolbarStyles = makeStyles(function (theme) { return ({
    root: {
        borderBottom: "1px solid " + theme.palette.divider,
        backgroundColor: "white",
        transition: theme.transitions.create("background-color", { duration: theme.transitions.duration.short })
    },
    actionsContainer: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between"
    },
    actions: {
        margin: 0,
        display: "flex",
        alignItems: "center",
        color: theme.palette.text.secondary,
        cursor: "pointer",
        "&:hover": {
            color: theme.palette.primary.main
        }
    },
    highlight: {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0.85)
    },
    textField: {
        marginLeft: theme.spacing(),
        marginRight: theme.spacing(),
        width: 200
    },
    noPadding: {
        padding: 0
    },
    title: {
        flex: "0 0 auto",
        alignSelf: "center"
    },
    columnVisibilityListItems: {
        paddingLeft: 0
    }
}); });

var MultipleActions = function (_a) {
    var multipleActions = _a.multipleActions, selectedRows = _a.selectedRows;
    return (React__default.createElement(ActionMenu, { actionLabel: T.datatable.grouped_actions.label, variant: "contained", color: "primary", actions: multipleActions.map(function (a) { return ({
            label: a.label,
            onClick: a.action(selectedRows),
            visible: true
        }); }) }));
};
var DatatableToolbar = function (props) {
    var _a;
    var classes = useToolbarStyles();
    var _b = useState(null), anchorEl = _b[0], setAnchorEl = _b[1];
    var onSearch = props.onSearch, columns = props.columns, title = props.title, hasGlobalSearch = props.hasGlobalSearch, onToggleColumnVisibility = props.onToggleColumnVisibility, columnsVisibility = props.columnsVisibility, multipleActions = props.multipleActions, selectedRows = props.selectedRows;
    var numSelectedRows = selectedRows ? selectedRows.length : 0;
    var onSearchHandler = function (event) {
        onSearch({ global_search: event.target.value });
    };
    var handleClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
    };
    var displayMultipleActions = numSelectedRows > 0;
    return (React__default.createElement("div", null,
        React__default.createElement(Toolbar, { className: classNames(classes.root, (_a = {}, _a[classes.highlight] = numSelectedRows > 0, _a)) },
            displayMultipleActions &&
                React__default.createElement(Fade, { in: displayMultipleActions },
                    React__default.createElement("div", { className: classes.actionsContainer },
                        React__default.createElement("div", { className: classes.title },
                            React__default.createElement(Typography, { color: "inherit", variant: "subtitle1" },
                                " ",
                                T.datatable.grouped_actions.rows_selected(numSelectedRows))),
                        React__default.createElement(MultipleActions, { multipleActions: multipleActions, selectedRows: selectedRows }))),
            !displayMultipleActions &&
                React__default.createElement(Fade, { in: !displayMultipleActions },
                    React__default.createElement("div", { className: classes.actionsContainer },
                        React__default.createElement("div", { className: classes.title },
                            React__default.createElement(Typography, { variant: "h6", id: "tableTitle" }, title)),
                        React__default.createElement("div", { className: classes.actions },
                            React__default.createElement("div", null,
                                React__default.createElement(IconBtn, { title: T.datatable.show_column_chooser, "aria-owns": anchorEl ? "column-visibility" : undefined, "aria-haspopup": "true", onClick: handleClick },
                                    React__default.createElement(VisibilityOff, null)),
                                React__default.createElement(Menu, { id: "column-visibility", anchorEl: anchorEl, open: Boolean(anchorEl), onClose: handleClose }, columns.map(function (col) {
                                    return React__default.createElement(ListItem, { key: col.field_name, dense: true, button: true, onClick: onToggleColumnVisibility(col), className: classes.columnVisibilityListItems },
                                        React__default.createElement(Checkbox, { checked: columnsVisibility[col.field_name], tabIndex: -1, disableRipple: true }),
                                        React__default.createElement(ListItemText, { primary: col.label, className: classes.noPadding }));
                                }))),
                            hasGlobalSearch &&
                                React__default.createElement("div", { className: classes.actions },
                                    React__default.createElement(TextField, { type: T.global.search, className: classes.textField, onChange: onSearchHandler, InputProps: {
                                            startAdornment: (React__default.createElement(InputAdornment, { position: "start" },
                                                React__default.createElement(Search, null)))
                                        } }))))))));
};

var useDisplayStyles = makeStyles(function (theme) { return ({
    root: {
        position: "relative",
        maxWidth: "100%",
        "& .TableHead tr th": {
            height: 44,
            padding: theme.spacing(0, 1),
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            background: "white"
        }
    },
    progress: {
        position: "absolute",
        left: 0,
        right: 0
    },
    fixedActionColumn: {
        "& tbody tr td:last-child": {
            position: "sticky",
            right: 0,
            zIndex: 999,
            textAlign: "right",
            width: 100
        }
    }
}); });

var DatatableDisplay = function (props) {
    var _a;
    var classes = useDisplayStyles();
    var callback = props.callback, loading = props.loading, isLocalTable = props.isLocalTable, searchCriteria = props.searchCriteria, columns = props.columns, columnsVisibility = props.columnsVisibility, toggleColumnVisibility = props.toggleColumnVisibility, toggleAllSelect = props.toggleAllSelect, addRowToSelection = props.addRowToSelection, title = props.title, hasGlobalSearch = props.hasGlobalSearch, multipleActions = props.multipleActions, selectedRows = props.selectedRows, hasLocalActions = props.hasLocalActions, hasMultipleActions = props.hasMultipleActions, limit = props.limit, expandedRow = props.expandedRow, searchResult = props.searchResult, cellActions = props.cellActions, page = props.page;
    var checkVisibilityFilter = function () {
        return !columns.filter(function (c) { return !!c.filter; })
            .map(function (c) { return c.field_name; })
            .map(function (c) { return columnsVisibility[c]; })
            .every(function (c) { return !c; });
    };
    var onPageChange = function (event, page) {
        var newSearchCriteria = __assign(__assign({}, searchCriteria), { offset: page * searchCriteria.limit });
        callback(newSearchCriteria, page);
    };
    var onChangeRowsPerPage = function (event) {
        var newSearchCriteria = __assign(__assign({}, searchCriteria), { limit: +event.target.value });
        callback(newSearchCriteria);
    };
    var onSearchChange = function (searching) {
        callback(searching);
    };
    var onSortChange = function (sorting) {
        callback(sorting);
    };
    var onFilterChange = function (filters) {
        callback(buildFilterValues(filters));
    };
    var hasFilter = checkVisibilityFilter();
    var displayLocalActions = hasLocalActions && selectedRows.length === 0;
    return (React__default.createElement("div", { className: classes.root },
        React__default.createElement(DatatableToolbar, { onSearch: onSearchChange, onToggleColumnVisibility: toggleColumnVisibility, columns: columns, title: title, hasGlobalSearch: hasGlobalSearch, columnsVisibility: columnsVisibility, multipleActions: multipleActions, selectedRows: selectedRows, hasLocalActions: hasLocalActions }),
        React__default.createElement("div", { className: classes.root },
            loading && React__default.createElement(LinearProgress, { className: classes.progress }),
            React__default.createElement(TableContainer, null,
                React__default.createElement(Table, { className: classNames((_a = {}, _a[classes.fixedActionColumn] = hasLocalActions, _a)), style: { borderCollapse: "initial" } },
                    React__default.createElement(DatatableHead, { className: "TableHead", onSort: onSortChange, onToggleAllSelect: toggleAllSelect, columns: columns, columnsVisibility: columnsVisibility, searchCriteria: searchCriteria, displayLocalActions: displayLocalActions, selectedRows: selectedRows, limit: limit, hasMultipleActions: hasMultipleActions, expandedRow: expandedRow, isLocalTable: isLocalTable }),
                    hasFilter &&
                        React__default.createElement(DatatableFilter, { onFilter: onFilterChange, columns: columns, displayLocalActions: displayLocalActions, hasMultipleActions: hasMultipleActions, columnsVisibility: columnsVisibility }),
                    React__default.createElement(DatatableBody, { onToggleSelect: addRowToSelection, columns: columns, columnsVisibility: columnsVisibility, loading: loading, searchResult: searchResult, selectedRows: selectedRows, cellActions: cellActions, hasLocalActions: hasLocalActions, hasMultipleActions: hasMultipleActions, displayLocalActions: displayLocalActions, expandedRow: expandedRow }))),
            !isLocalTable &&
                React__default.createElement(DatatableFooter, { onPageChange: onPageChange, onChangeRowsPerPage: onChangeRowsPerPage, searchResult: searchResult, limit: limit, page: page }))));
};

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

var Datatable = function (props) {
    var name = props.name, columns = props.columns, consumerKey = props.consumerKey, userId = props.userId, searchCriteria = props.searchCriteria, searchResult = props.searchResult, useLocalStorage = props.useLocalStorage, updateCriteria = props.updateCriteria, globalSearch = props.globalSearch, multipleActions = props.multipleActions, cellActions = props.cellActions;
    var isLocalTable = !searchCriteria && !updateCriteria;
    var initialPage = computeInitialPage(searchCriteria);
    var initialColumnsVisibility = initColumnsVisibilityWithLocalStorage(name, columns, consumerKey, userId);
    var _a = useState(initialColumnsVisibility), columnsVisibility = _a[0], setColumnsVisibility = _a[1];
    var _b = useState(initialPage), page = _b[0], setPage = _b[1];
    var _c = useState([]), selectedRows = _c[0], setSelectedRows = _c[1];
    var basicProps = __assign({ columnsVisibility: columnsVisibility, page: page, isLocalTable: isLocalTable, hasLocalActions: !!cellActions, hasMultipleActions: !!multipleActions, hasGlobalSearch: !!globalSearch }, !isLocalTable && {
        limit: searchResult.limit || searchCriteria.limit || 20
    });
    useEffect(function () {
        return function () {
            if (searchCriteria && updateCriteria) {
                updateCriteria(defaultSearchCriteria);
            }
        };
    }, []);
    var addRowToSelection = function (row) {
        return function (event) {
            event.stopPropagation();
            var isSelected = selectedRows.map(function (s) { return s.id; }).indexOf(row.id) >= 0;
            setSelectedRows(isSelected ? selectedRows.filter(function (x) { return x.id !== row.id; }) : selectedRows.concat(row));
        };
    };
    var toggleAllSelect = function () {
        var allRowsChecked = selectedRows.length === searchResult.data.length;
        if (!allRowsChecked) {
            setSelectedRows(searchResult.data);
        }
        else {
            setSelectedRows([]);
        }
    };
    var toggleColumnVisibility = function (col) {
        return function (event) {
            var _a;
            event.stopPropagation();
            var valueChange = !columnsVisibility[col.field_name];
            var newColumnsVisibility = __assign(__assign({}, columnsVisibility), (_a = {}, _a[col.field_name] = valueChange, _a));
            setColumnsVisibility(newColumnsVisibility);
            if ([undefined, null, true].includes(useLocalStorage)) {
                updateStorageConfigTable(consumerKey, userId, name, "VISIBILITY", getColumnNameVisible(newColumnsVisibility));
            }
        };
    };
    var onChange = function (value, page) {
        updateCriteria(value);
        if (page) {
            setPage(page);
        }
    };
    return (React__default.createElement(DatatableDisplay, __assign({}, props, basicProps, { callback: onChange, toggleColumnVisibility: toggleColumnVisibility, selectedRows: selectedRows, addRowToSelection: addRowToSelection, toggleAllSelect: toggleAllSelect })));
};

var useStyles$d = makeStyles$1(function (theme) { return ({
    closeButton: {
        position: "absolute",
        right: theme.spacing(),
        top: theme.spacing(),
        color: theme.palette.grey[500]
    },
    title: {
        fontWeight: 600
    },
    description: {
        color: theme.palette.text.secondary
    },
    toolBar: {
        color: "white"
    }
}); });
var ParticeepDialogTitle = function (props) {
    var classes = useStyles$d();
    var onClose = props.onClose, fullScreen = props.fullScreen, title = props.title, description = props.description;
    return (React__default.createElement(DialogTitle, { className: classes.root }, fullScreen ?
        React__default.createElement(AppBar, null,
            React__default.createElement(Toolbar, { className: classes.toolBar },
                React__default.createElement(IconButton, { color: "inherit", onClick: onClose },
                    React__default.createElement(Close, null)),
                title)) :
        React__default.createElement("div", null,
            React__default.createElement(Typography, { className: classes.title }, title),
            React__default.createElement(Typography, { className: classes.description }, description),
            onClose ? (React__default.createElement(IconButton, { "aria-label": "Close", className: classes.closeButton, onClick: onClose },
                React__default.createElement(Close, null))) : React__default.createElement(React__default.Fragment, null))));
};

var useStyles$c = makeStyles(function (theme) { return ({
    content: {
        paddingTop: function (props) { return props.fullScreen ? theme.spacing(5) : 0; }
    }
}); });
var ParticeepDialog = function (props) {
    var classes = useStyles$c(props);
    var title = props.title, onClose = props.onClose, isOpen = props.isOpen, fullScreen = props.fullScreen, maxWidth = props.maxWidth, children = props.children, action = props.action, className = props.className, description = props.description;
    return (React__default.createElement(Dialog, { open: isOpen, maxWidth: maxWidth || "sm", className: className, fullScreen: fullScreen, disableEnforceFocus: true, fullWidth: true },
        title &&
            React__default.createElement(ParticeepDialogTitle, { onClose: onClose, fullScreen: fullScreen, title: title, description: description }),
        React__default.createElement(DialogContent, { className: classes.content }, children),
        action &&
            React__default.createElement(DialogActions, null, action)));
};

/*
 *      bignumber.js v9.0.1
 *      A JavaScript library for arbitrary-precision arithmetic.
 *      https://github.com/MikeMcl/bignumber.js
 *      Copyright (c) 2020 Michael Mclaughlin <M8ch88l@gmail.com>
 *      MIT Licensed.
 *
 *      BigNumber.prototype methods     |  BigNumber methods
 *                                      |
 *      absoluteValue            abs    |  clone
 *      comparedTo                      |  config               set
 *      decimalPlaces            dp     |      DECIMAL_PLACES
 *      dividedBy                div    |      ROUNDING_MODE
 *      dividedToIntegerBy       idiv   |      EXPONENTIAL_AT
 *      exponentiatedBy          pow    |      RANGE
 *      integerValue                    |      CRYPTO
 *      isEqualTo                eq     |      MODULO_MODE
 *      isFinite                        |      POW_PRECISION
 *      isGreaterThan            gt     |      FORMAT
 *      isGreaterThanOrEqualTo   gte    |      ALPHABET
 *      isInteger                       |  isBigNumber
 *      isLessThan               lt     |  maximum              max
 *      isLessThanOrEqualTo      lte    |  minimum              min
 *      isNaN                           |  random
 *      isNegative                      |  sum
 *      isPositive                      |
 *      isZero                          |
 *      minus                           |
 *      modulo                   mod    |
 *      multipliedBy             times  |
 *      negated                         |
 *      plus                            |
 *      precision                sd     |
 *      shiftedBy                       |
 *      squareRoot               sqrt   |
 *      toExponential                   |
 *      toFixed                         |
 *      toFormat                        |
 *      toFraction                      |
 *      toJSON                          |
 *      toNumber                        |
 *      toPrecision                     |
 *      toString                        |
 *      valueOf                         |
 *
 */


var
  isNumeric = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,

  mathceil = Math.ceil,
  mathfloor = Math.floor,

  bignumberError = '[BigNumber Error] ',
  tooManyDigits = bignumberError + 'Number primitive has more than 15 significant digits: ',

  BASE = 1e14,
  LOG_BASE = 14,
  MAX_SAFE_INTEGER = 0x1fffffffffffff,         // 2^53 - 1
  // MAX_INT32 = 0x7fffffff,                   // 2^31 - 1
  POWS_TEN = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
  SQRT_BASE = 1e7,

  // EDITABLE
  // The limit on the value of DECIMAL_PLACES, TO_EXP_NEG, TO_EXP_POS, MIN_EXP, MAX_EXP, and
  // the arguments to toExponential, toFixed, toFormat, and toPrecision.
  MAX = 1E9;                                   // 0 to MAX_INT32


/*
 * Create and return a BigNumber constructor.
 */
function clone(configObject) {
  var div, convertBase, parseNumeric,
    P = BigNumber.prototype = { constructor: BigNumber, toString: null, valueOf: null },
    ONE = new BigNumber(1),


    //----------------------------- EDITABLE CONFIG DEFAULTS -------------------------------


    // The default values below must be integers within the inclusive ranges stated.
    // The values can also be changed at run-time using BigNumber.set.

    // The maximum number of decimal places for operations involving division.
    DECIMAL_PLACES = 20,                     // 0 to MAX

    // The rounding mode used when rounding to the above decimal places, and when using
    // toExponential, toFixed, toFormat and toPrecision, and round (default value).
    // UP         0 Away from zero.
    // DOWN       1 Towards zero.
    // CEIL       2 Towards +Infinity.
    // FLOOR      3 Towards -Infinity.
    // HALF_UP    4 Towards nearest neighbour. If equidistant, up.
    // HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
    // HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
    // HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
    // HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
    ROUNDING_MODE = 4,                       // 0 to 8

    // EXPONENTIAL_AT : [TO_EXP_NEG , TO_EXP_POS]

    // The exponent value at and beneath which toString returns exponential notation.
    // Number type: -7
    TO_EXP_NEG = -7,                         // 0 to -MAX

    // The exponent value at and above which toString returns exponential notation.
    // Number type: 21
    TO_EXP_POS = 21,                         // 0 to MAX

    // RANGE : [MIN_EXP, MAX_EXP]

    // The minimum exponent value, beneath which underflow to zero occurs.
    // Number type: -324  (5e-324)
    MIN_EXP = -1e7,                          // -1 to -MAX

    // The maximum exponent value, above which overflow to Infinity occurs.
    // Number type:  308  (1.7976931348623157e+308)
    // For MAX_EXP > 1e7, e.g. new BigNumber('1e100000000').plus(1) may be slow.
    MAX_EXP = 1e7,                           // 1 to MAX

    // Whether to use cryptographically-secure random number generation, if available.
    CRYPTO = false,                          // true or false

    // The modulo mode used when calculating the modulus: a mod n.
    // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
    // The remainder (r) is calculated as: r = a - n * q.
    //
    // UP        0 The remainder is positive if the dividend is negative, else is negative.
    // DOWN      1 The remainder has the same sign as the dividend.
    //             This modulo mode is commonly known as 'truncated division' and is
    //             equivalent to (a % n) in JavaScript.
    // FLOOR     3 The remainder has the same sign as the divisor (Python %).
    // HALF_EVEN 6 This modulo mode implements the IEEE 754 remainder function.
    // EUCLID    9 Euclidian division. q = sign(n) * floor(a / abs(n)).
    //             The remainder is always positive.
    //
    // The truncated division, floored division, Euclidian division and IEEE 754 remainder
    // modes are commonly used for the modulus operation.
    // Although the other rounding modes can also be used, they may not give useful results.
    MODULO_MODE = 1,                         // 0 to 9

    // The maximum number of significant digits of the result of the exponentiatedBy operation.
    // If POW_PRECISION is 0, there will be unlimited significant digits.
    POW_PRECISION = 0,                    // 0 to MAX

    // The format specification used by the BigNumber.prototype.toFormat method.
    FORMAT = {
      prefix: '',
      groupSize: 3,
      secondaryGroupSize: 0,
      groupSeparator: ',',
      decimalSeparator: '.',
      fractionGroupSize: 0,
      fractionGroupSeparator: '\xA0',      // non-breaking space
      suffix: ''
    },

    // The alphabet used for base conversion. It must be at least 2 characters long, with no '+',
    // '-', '.', whitespace, or repeated character.
    // '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_'
    ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyz';


  //------------------------------------------------------------------------------------------


  // CONSTRUCTOR


  /*
   * The BigNumber constructor and exported function.
   * Create and return a new instance of a BigNumber object.
   *
   * v {number|string|BigNumber} A numeric value.
   * [b] {number} The base of v. Integer, 2 to ALPHABET.length inclusive.
   */
  function BigNumber(v, b) {
    var alphabet, c, caseChanged, e, i, isNum, len, str,
      x = this;

    // Enable constructor call without `new`.
    if (!(x instanceof BigNumber)) return new BigNumber(v, b);

    if (b == null) {

      if (v && v._isBigNumber === true) {
        x.s = v.s;

        if (!v.c || v.e > MAX_EXP) {
          x.c = x.e = null;
        } else if (v.e < MIN_EXP) {
          x.c = [x.e = 0];
        } else {
          x.e = v.e;
          x.c = v.c.slice();
        }

        return;
      }

      if ((isNum = typeof v == 'number') && v * 0 == 0) {

        // Use `1 / n` to handle minus zero also.
        x.s = 1 / v < 0 ? (v = -v, -1) : 1;

        // Fast path for integers, where n < 2147483648 (2**31).
        if (v === ~~v) {
          for (e = 0, i = v; i >= 10; i /= 10, e++);

          if (e > MAX_EXP) {
            x.c = x.e = null;
          } else {
            x.e = e;
            x.c = [v];
          }

          return;
        }

        str = String(v);
      } else {

        if (!isNumeric.test(str = String(v))) return parseNumeric(x, str, isNum);

        x.s = str.charCodeAt(0) == 45 ? (str = str.slice(1), -1) : 1;
      }

      // Decimal point?
      if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');

      // Exponential form?
      if ((i = str.search(/e/i)) > 0) {

        // Determine exponent.
        if (e < 0) e = i;
        e += +str.slice(i + 1);
        str = str.substring(0, i);
      } else if (e < 0) {

        // Integer.
        e = str.length;
      }

    } else {

      // '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
      intCheck(b, 2, ALPHABET.length, 'Base');

      // Allow exponential notation to be used with base 10 argument, while
      // also rounding to DECIMAL_PLACES as with other bases.
      if (b == 10) {
        x = new BigNumber(v);
        return round(x, DECIMAL_PLACES + x.e + 1, ROUNDING_MODE);
      }

      str = String(v);

      if (isNum = typeof v == 'number') {

        // Avoid potential interpretation of Infinity and NaN as base 44+ values.
        if (v * 0 != 0) return parseNumeric(x, str, isNum, b);

        x.s = 1 / v < 0 ? (str = str.slice(1), -1) : 1;

        // '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
        if (BigNumber.DEBUG && str.replace(/^0\.0*|\./, '').length > 15) {
          throw Error
           (tooManyDigits + v);
        }
      } else {
        x.s = str.charCodeAt(0) === 45 ? (str = str.slice(1), -1) : 1;
      }

      alphabet = ALPHABET.slice(0, b);
      e = i = 0;

      // Check that str is a valid base b number.
      // Don't use RegExp, so alphabet can contain special characters.
      for (len = str.length; i < len; i++) {
        if (alphabet.indexOf(c = str.charAt(i)) < 0) {
          if (c == '.') {

            // If '.' is not the first character and it has not be found before.
            if (i > e) {
              e = len;
              continue;
            }
          } else if (!caseChanged) {

            // Allow e.g. hexadecimal 'FF' as well as 'ff'.
            if (str == str.toUpperCase() && (str = str.toLowerCase()) ||
                str == str.toLowerCase() && (str = str.toUpperCase())) {
              caseChanged = true;
              i = -1;
              e = 0;
              continue;
            }
          }

          return parseNumeric(x, String(v), isNum, b);
        }
      }

      // Prevent later check for length on converted number.
      isNum = false;
      str = convertBase(str, b, 10, x.s);

      // Decimal point?
      if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');
      else e = str.length;
    }

    // Determine leading zeros.
    for (i = 0; str.charCodeAt(i) === 48; i++);

    // Determine trailing zeros.
    for (len = str.length; str.charCodeAt(--len) === 48;);

    if (str = str.slice(i, ++len)) {
      len -= i;

      // '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
      if (isNum && BigNumber.DEBUG &&
        len > 15 && (v > MAX_SAFE_INTEGER || v !== mathfloor(v))) {
          throw Error
           (tooManyDigits + (x.s * v));
      }

       // Overflow?
      if ((e = e - i - 1) > MAX_EXP) {

        // Infinity.
        x.c = x.e = null;

      // Underflow?
      } else if (e < MIN_EXP) {

        // Zero.
        x.c = [x.e = 0];
      } else {
        x.e = e;
        x.c = [];

        // Transform base

        // e is the base 10 exponent.
        // i is where to slice str to get the first element of the coefficient array.
        i = (e + 1) % LOG_BASE;
        if (e < 0) i += LOG_BASE;  // i < 1

        if (i < len) {
          if (i) x.c.push(+str.slice(0, i));

          for (len -= LOG_BASE; i < len;) {
            x.c.push(+str.slice(i, i += LOG_BASE));
          }

          i = LOG_BASE - (str = str.slice(i)).length;
        } else {
          i -= len;
        }

        for (; i--; str += '0');
        x.c.push(+str);
      }
    } else {

      // Zero.
      x.c = [x.e = 0];
    }
  }


  // CONSTRUCTOR PROPERTIES


  BigNumber.clone = clone;

  BigNumber.ROUND_UP = 0;
  BigNumber.ROUND_DOWN = 1;
  BigNumber.ROUND_CEIL = 2;
  BigNumber.ROUND_FLOOR = 3;
  BigNumber.ROUND_HALF_UP = 4;
  BigNumber.ROUND_HALF_DOWN = 5;
  BigNumber.ROUND_HALF_EVEN = 6;
  BigNumber.ROUND_HALF_CEIL = 7;
  BigNumber.ROUND_HALF_FLOOR = 8;
  BigNumber.EUCLID = 9;


  /*
   * Configure infrequently-changing library-wide settings.
   *
   * Accept an object with the following optional properties (if the value of a property is
   * a number, it must be an integer within the inclusive range stated):
   *
   *   DECIMAL_PLACES   {number}           0 to MAX
   *   ROUNDING_MODE    {number}           0 to 8
   *   EXPONENTIAL_AT   {number|number[]}  -MAX to MAX  or  [-MAX to 0, 0 to MAX]
   *   RANGE            {number|number[]}  -MAX to MAX (not zero)  or  [-MAX to -1, 1 to MAX]
   *   CRYPTO           {boolean}          true or false
   *   MODULO_MODE      {number}           0 to 9
   *   POW_PRECISION       {number}           0 to MAX
   *   ALPHABET         {string}           A string of two or more unique characters which does
   *                                     not contain '.'.
   *   FORMAT           {object}           An object with some of the following properties:
   *     prefix                 {string}
   *     groupSize              {number}
   *     secondaryGroupSize     {number}
   *     groupSeparator         {string}
   *     decimalSeparator       {string}
   *     fractionGroupSize      {number}
   *     fractionGroupSeparator {string}
   *     suffix                 {string}
   *
   * (The values assigned to the above FORMAT object properties are not checked for validity.)
   *
   * E.g.
   * BigNumber.config({ DECIMAL_PLACES : 20, ROUNDING_MODE : 4 })
   *
   * Ignore properties/parameters set to null or undefined, except for ALPHABET.
   *
   * Return an object with the properties current values.
   */
  BigNumber.config = BigNumber.set = function (obj) {
    var p, v;

    if (obj != null) {

      if (typeof obj == 'object') {

        // DECIMAL_PLACES {number} Integer, 0 to MAX inclusive.
        // '[BigNumber Error] DECIMAL_PLACES {not a primitive number|not an integer|out of range}: {v}'
        if (obj.hasOwnProperty(p = 'DECIMAL_PLACES')) {
          v = obj[p];
          intCheck(v, 0, MAX, p);
          DECIMAL_PLACES = v;
        }

        // ROUNDING_MODE {number} Integer, 0 to 8 inclusive.
        // '[BigNumber Error] ROUNDING_MODE {not a primitive number|not an integer|out of range}: {v}'
        if (obj.hasOwnProperty(p = 'ROUNDING_MODE')) {
          v = obj[p];
          intCheck(v, 0, 8, p);
          ROUNDING_MODE = v;
        }

        // EXPONENTIAL_AT {number|number[]}
        // Integer, -MAX to MAX inclusive or
        // [integer -MAX to 0 inclusive, 0 to MAX inclusive].
        // '[BigNumber Error] EXPONENTIAL_AT {not a primitive number|not an integer|out of range}: {v}'
        if (obj.hasOwnProperty(p = 'EXPONENTIAL_AT')) {
          v = obj[p];
          if (v && v.pop) {
            intCheck(v[0], -MAX, 0, p);
            intCheck(v[1], 0, MAX, p);
            TO_EXP_NEG = v[0];
            TO_EXP_POS = v[1];
          } else {
            intCheck(v, -MAX, MAX, p);
            TO_EXP_NEG = -(TO_EXP_POS = v < 0 ? -v : v);
          }
        }

        // RANGE {number|number[]} Non-zero integer, -MAX to MAX inclusive or
        // [integer -MAX to -1 inclusive, integer 1 to MAX inclusive].
        // '[BigNumber Error] RANGE {not a primitive number|not an integer|out of range|cannot be zero}: {v}'
        if (obj.hasOwnProperty(p = 'RANGE')) {
          v = obj[p];
          if (v && v.pop) {
            intCheck(v[0], -MAX, -1, p);
            intCheck(v[1], 1, MAX, p);
            MIN_EXP = v[0];
            MAX_EXP = v[1];
          } else {
            intCheck(v, -MAX, MAX, p);
            if (v) {
              MIN_EXP = -(MAX_EXP = v < 0 ? -v : v);
            } else {
              throw Error
               (bignumberError + p + ' cannot be zero: ' + v);
            }
          }
        }

        // CRYPTO {boolean} true or false.
        // '[BigNumber Error] CRYPTO not true or false: {v}'
        // '[BigNumber Error] crypto unavailable'
        if (obj.hasOwnProperty(p = 'CRYPTO')) {
          v = obj[p];
          if (v === !!v) {
            if (v) {
              if (typeof crypto != 'undefined' && crypto &&
               (crypto.getRandomValues || crypto.randomBytes)) {
                CRYPTO = v;
              } else {
                CRYPTO = !v;
                throw Error
                 (bignumberError + 'crypto unavailable');
              }
            } else {
              CRYPTO = v;
            }
          } else {
            throw Error
             (bignumberError + p + ' not true or false: ' + v);
          }
        }

        // MODULO_MODE {number} Integer, 0 to 9 inclusive.
        // '[BigNumber Error] MODULO_MODE {not a primitive number|not an integer|out of range}: {v}'
        if (obj.hasOwnProperty(p = 'MODULO_MODE')) {
          v = obj[p];
          intCheck(v, 0, 9, p);
          MODULO_MODE = v;
        }

        // POW_PRECISION {number} Integer, 0 to MAX inclusive.
        // '[BigNumber Error] POW_PRECISION {not a primitive number|not an integer|out of range}: {v}'
        if (obj.hasOwnProperty(p = 'POW_PRECISION')) {
          v = obj[p];
          intCheck(v, 0, MAX, p);
          POW_PRECISION = v;
        }

        // FORMAT {object}
        // '[BigNumber Error] FORMAT not an object: {v}'
        if (obj.hasOwnProperty(p = 'FORMAT')) {
          v = obj[p];
          if (typeof v == 'object') FORMAT = v;
          else throw Error
           (bignumberError + p + ' not an object: ' + v);
        }

        // ALPHABET {string}
        // '[BigNumber Error] ALPHABET invalid: {v}'
        if (obj.hasOwnProperty(p = 'ALPHABET')) {
          v = obj[p];

          // Disallow if only one character,
          // or if it contains '+', '-', '.', whitespace, or a repeated character.
          if (typeof v == 'string' && !/^.$|[+-.\s]|(.).*\1/.test(v)) {
            ALPHABET = v;
          } else {
            throw Error
             (bignumberError + p + ' invalid: ' + v);
          }
        }

      } else {

        // '[BigNumber Error] Object expected: {v}'
        throw Error
         (bignumberError + 'Object expected: ' + obj);
      }
    }

    return {
      DECIMAL_PLACES: DECIMAL_PLACES,
      ROUNDING_MODE: ROUNDING_MODE,
      EXPONENTIAL_AT: [TO_EXP_NEG, TO_EXP_POS],
      RANGE: [MIN_EXP, MAX_EXP],
      CRYPTO: CRYPTO,
      MODULO_MODE: MODULO_MODE,
      POW_PRECISION: POW_PRECISION,
      FORMAT: FORMAT,
      ALPHABET: ALPHABET
    };
  };


  /*
   * Return true if v is a BigNumber instance, otherwise return false.
   *
   * If BigNumber.DEBUG is true, throw if a BigNumber instance is not well-formed.
   *
   * v {any}
   *
   * '[BigNumber Error] Invalid BigNumber: {v}'
   */
  BigNumber.isBigNumber = function (v) {
    if (!v || v._isBigNumber !== true) return false;
    if (!BigNumber.DEBUG) return true;

    var i, n,
      c = v.c,
      e = v.e,
      s = v.s;

    out: if ({}.toString.call(c) == '[object Array]') {

      if ((s === 1 || s === -1) && e >= -MAX && e <= MAX && e === mathfloor(e)) {

        // If the first element is zero, the BigNumber value must be zero.
        if (c[0] === 0) {
          if (e === 0 && c.length === 1) return true;
          break out;
        }

        // Calculate number of digits that c[0] should have, based on the exponent.
        i = (e + 1) % LOG_BASE;
        if (i < 1) i += LOG_BASE;

        // Calculate number of digits of c[0].
        //if (Math.ceil(Math.log(c[0] + 1) / Math.LN10) == i) {
        if (String(c[0]).length == i) {

          for (i = 0; i < c.length; i++) {
            n = c[i];
            if (n < 0 || n >= BASE || n !== mathfloor(n)) break out;
          }

          // Last element cannot be zero, unless it is the only element.
          if (n !== 0) return true;
        }
      }

    // Infinity/NaN
    } else if (c === null && e === null && (s === null || s === 1 || s === -1)) {
      return true;
    }

    throw Error
      (bignumberError + 'Invalid BigNumber: ' + v);
  };


  /*
   * Return a new BigNumber whose value is the maximum of the arguments.
   *
   * arguments {number|string|BigNumber}
   */
  BigNumber.maximum = BigNumber.max = function () {
    return maxOrMin(arguments, P.lt);
  };


  /*
   * Return a new BigNumber whose value is the minimum of the arguments.
   *
   * arguments {number|string|BigNumber}
   */
  BigNumber.minimum = BigNumber.min = function () {
    return maxOrMin(arguments, P.gt);
  };


  /*
   * Return a new BigNumber with a random value equal to or greater than 0 and less than 1,
   * and with dp, or DECIMAL_PLACES if dp is omitted, decimal places (or less if trailing
   * zeros are produced).
   *
   * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
   *
   * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp}'
   * '[BigNumber Error] crypto unavailable'
   */
  BigNumber.random = (function () {
    var pow2_53 = 0x20000000000000;

    // Return a 53 bit integer n, where 0 <= n < 9007199254740992.
    // Check if Math.random() produces more than 32 bits of randomness.
    // If it does, assume at least 53 bits are produced, otherwise assume at least 30 bits.
    // 0x40000000 is 2^30, 0x800000 is 2^23, 0x1fffff is 2^21 - 1.
    var random53bitInt = (Math.random() * pow2_53) & 0x1fffff
     ? function () { return mathfloor(Math.random() * pow2_53); }
     : function () { return ((Math.random() * 0x40000000 | 0) * 0x800000) +
       (Math.random() * 0x800000 | 0); };

    return function (dp) {
      var a, b, e, k, v,
        i = 0,
        c = [],
        rand = new BigNumber(ONE);

      if (dp == null) dp = DECIMAL_PLACES;
      else intCheck(dp, 0, MAX);

      k = mathceil(dp / LOG_BASE);

      if (CRYPTO) {

        // Browsers supporting crypto.getRandomValues.
        if (crypto.getRandomValues) {

          a = crypto.getRandomValues(new Uint32Array(k *= 2));

          for (; i < k;) {

            // 53 bits:
            // ((Math.pow(2, 32) - 1) * Math.pow(2, 21)).toString(2)
            // 11111 11111111 11111111 11111111 11100000 00000000 00000000
            // ((Math.pow(2, 32) - 1) >>> 11).toString(2)
            //                                     11111 11111111 11111111
            // 0x20000 is 2^21.
            v = a[i] * 0x20000 + (a[i + 1] >>> 11);

            // Rejection sampling:
            // 0 <= v < 9007199254740992
            // Probability that v >= 9e15, is
            // 7199254740992 / 9007199254740992 ~= 0.0008, i.e. 1 in 1251
            if (v >= 9e15) {
              b = crypto.getRandomValues(new Uint32Array(2));
              a[i] = b[0];
              a[i + 1] = b[1];
            } else {

              // 0 <= v <= 8999999999999999
              // 0 <= (v % 1e14) <= 99999999999999
              c.push(v % 1e14);
              i += 2;
            }
          }
          i = k / 2;

        // Node.js supporting crypto.randomBytes.
        } else if (crypto.randomBytes) {

          // buffer
          a = crypto.randomBytes(k *= 7);

          for (; i < k;) {

            // 0x1000000000000 is 2^48, 0x10000000000 is 2^40
            // 0x100000000 is 2^32, 0x1000000 is 2^24
            // 11111 11111111 11111111 11111111 11111111 11111111 11111111
            // 0 <= v < 9007199254740992
            v = ((a[i] & 31) * 0x1000000000000) + (a[i + 1] * 0x10000000000) +
               (a[i + 2] * 0x100000000) + (a[i + 3] * 0x1000000) +
               (a[i + 4] << 16) + (a[i + 5] << 8) + a[i + 6];

            if (v >= 9e15) {
              crypto.randomBytes(7).copy(a, i);
            } else {

              // 0 <= (v % 1e14) <= 99999999999999
              c.push(v % 1e14);
              i += 7;
            }
          }
          i = k / 7;
        } else {
          CRYPTO = false;
          throw Error
           (bignumberError + 'crypto unavailable');
        }
      }

      // Use Math.random.
      if (!CRYPTO) {

        for (; i < k;) {
          v = random53bitInt();
          if (v < 9e15) c[i++] = v % 1e14;
        }
      }

      k = c[--i];
      dp %= LOG_BASE;

      // Convert trailing digits to zeros according to dp.
      if (k && dp) {
        v = POWS_TEN[LOG_BASE - dp];
        c[i] = mathfloor(k / v) * v;
      }

      // Remove trailing elements which are zero.
      for (; c[i] === 0; c.pop(), i--);

      // Zero?
      if (i < 0) {
        c = [e = 0];
      } else {

        // Remove leading elements which are zero and adjust exponent accordingly.
        for (e = -1 ; c[0] === 0; c.splice(0, 1), e -= LOG_BASE);

        // Count the digits of the first element of c to determine leading zeros, and...
        for (i = 1, v = c[0]; v >= 10; v /= 10, i++);

        // adjust the exponent accordingly.
        if (i < LOG_BASE) e -= LOG_BASE - i;
      }

      rand.e = e;
      rand.c = c;
      return rand;
    };
  })();


   /*
   * Return a BigNumber whose value is the sum of the arguments.
   *
   * arguments {number|string|BigNumber}
   */
  BigNumber.sum = function () {
    var i = 1,
      args = arguments,
      sum = new BigNumber(args[0]);
    for (; i < args.length;) sum = sum.plus(args[i++]);
    return sum;
  };


  // PRIVATE FUNCTIONS


  // Called by BigNumber and BigNumber.prototype.toString.
  convertBase = (function () {
    var decimal = '0123456789';

    /*
     * Convert string of baseIn to an array of numbers of baseOut.
     * Eg. toBaseOut('255', 10, 16) returns [15, 15].
     * Eg. toBaseOut('ff', 16, 10) returns [2, 5, 5].
     */
    function toBaseOut(str, baseIn, baseOut, alphabet) {
      var j,
        arr = [0],
        arrL,
        i = 0,
        len = str.length;

      for (; i < len;) {
        for (arrL = arr.length; arrL--; arr[arrL] *= baseIn);

        arr[0] += alphabet.indexOf(str.charAt(i++));

        for (j = 0; j < arr.length; j++) {

          if (arr[j] > baseOut - 1) {
            if (arr[j + 1] == null) arr[j + 1] = 0;
            arr[j + 1] += arr[j] / baseOut | 0;
            arr[j] %= baseOut;
          }
        }
      }

      return arr.reverse();
    }

    // Convert a numeric string of baseIn to a numeric string of baseOut.
    // If the caller is toString, we are converting from base 10 to baseOut.
    // If the caller is BigNumber, we are converting from baseIn to base 10.
    return function (str, baseIn, baseOut, sign, callerIsToString) {
      var alphabet, d, e, k, r, x, xc, y,
        i = str.indexOf('.'),
        dp = DECIMAL_PLACES,
        rm = ROUNDING_MODE;

      // Non-integer.
      if (i >= 0) {
        k = POW_PRECISION;

        // Unlimited precision.
        POW_PRECISION = 0;
        str = str.replace('.', '');
        y = new BigNumber(baseIn);
        x = y.pow(str.length - i);
        POW_PRECISION = k;

        // Convert str as if an integer, then restore the fraction part by dividing the
        // result by its base raised to a power.

        y.c = toBaseOut(toFixedPoint(coeffToString(x.c), x.e, '0'),
         10, baseOut, decimal);
        y.e = y.c.length;
      }

      // Convert the number as integer.

      xc = toBaseOut(str, baseIn, baseOut, callerIsToString
       ? (alphabet = ALPHABET, decimal)
       : (alphabet = decimal, ALPHABET));

      // xc now represents str as an integer and converted to baseOut. e is the exponent.
      e = k = xc.length;

      // Remove trailing zeros.
      for (; xc[--k] == 0; xc.pop());

      // Zero?
      if (!xc[0]) return alphabet.charAt(0);

      // Does str represent an integer? If so, no need for the division.
      if (i < 0) {
        --e;
      } else {
        x.c = xc;
        x.e = e;

        // The sign is needed for correct rounding.
        x.s = sign;
        x = div(x, y, dp, rm, baseOut);
        xc = x.c;
        r = x.r;
        e = x.e;
      }

      // xc now represents str converted to baseOut.

      // THe index of the rounding digit.
      d = e + dp + 1;

      // The rounding digit: the digit to the right of the digit that may be rounded up.
      i = xc[d];

      // Look at the rounding digits and mode to determine whether to round up.

      k = baseOut / 2;
      r = r || d < 0 || xc[d + 1] != null;

      r = rm < 4 ? (i != null || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2))
            : i > k || i == k &&(rm == 4 || r || rm == 6 && xc[d - 1] & 1 ||
             rm == (x.s < 0 ? 8 : 7));

      // If the index of the rounding digit is not greater than zero, or xc represents
      // zero, then the result of the base conversion is zero or, if rounding up, a value
      // such as 0.00001.
      if (d < 1 || !xc[0]) {

        // 1^-dp or 0
        str = r ? toFixedPoint(alphabet.charAt(1), -dp, alphabet.charAt(0)) : alphabet.charAt(0);
      } else {

        // Truncate xc to the required number of decimal places.
        xc.length = d;

        // Round up?
        if (r) {

          // Rounding up may mean the previous digit has to be rounded up and so on.
          for (--baseOut; ++xc[--d] > baseOut;) {
            xc[d] = 0;

            if (!d) {
              ++e;
              xc = [1].concat(xc);
            }
          }
        }

        // Determine trailing zeros.
        for (k = xc.length; !xc[--k];);

        // E.g. [4, 11, 15] becomes 4bf.
        for (i = 0, str = ''; i <= k; str += alphabet.charAt(xc[i++]));

        // Add leading zeros, decimal point and trailing zeros as required.
        str = toFixedPoint(str, e, alphabet.charAt(0));
      }

      // The caller will add the sign.
      return str;
    };
  })();


  // Perform division in the specified base. Called by div and convertBase.
  div = (function () {

    // Assume non-zero x and k.
    function multiply(x, k, base) {
      var m, temp, xlo, xhi,
        carry = 0,
        i = x.length,
        klo = k % SQRT_BASE,
        khi = k / SQRT_BASE | 0;

      for (x = x.slice(); i--;) {
        xlo = x[i] % SQRT_BASE;
        xhi = x[i] / SQRT_BASE | 0;
        m = khi * xlo + xhi * klo;
        temp = klo * xlo + ((m % SQRT_BASE) * SQRT_BASE) + carry;
        carry = (temp / base | 0) + (m / SQRT_BASE | 0) + khi * xhi;
        x[i] = temp % base;
      }

      if (carry) x = [carry].concat(x);

      return x;
    }

    function compare(a, b, aL, bL) {
      var i, cmp;

      if (aL != bL) {
        cmp = aL > bL ? 1 : -1;
      } else {

        for (i = cmp = 0; i < aL; i++) {

          if (a[i] != b[i]) {
            cmp = a[i] > b[i] ? 1 : -1;
            break;
          }
        }
      }

      return cmp;
    }

    function subtract(a, b, aL, base) {
      var i = 0;

      // Subtract b from a.
      for (; aL--;) {
        a[aL] -= i;
        i = a[aL] < b[aL] ? 1 : 0;
        a[aL] = i * base + a[aL] - b[aL];
      }

      // Remove leading zeros.
      for (; !a[0] && a.length > 1; a.splice(0, 1));
    }

    // x: dividend, y: divisor.
    return function (x, y, dp, rm, base) {
      var cmp, e, i, more, n, prod, prodL, q, qc, rem, remL, rem0, xi, xL, yc0,
        yL, yz,
        s = x.s == y.s ? 1 : -1,
        xc = x.c,
        yc = y.c;

      // Either NaN, Infinity or 0?
      if (!xc || !xc[0] || !yc || !yc[0]) {

        return new BigNumber(

         // Return NaN if either NaN, or both Infinity or 0.
         !x.s || !y.s || (xc ? yc && xc[0] == yc[0] : !yc) ? NaN :

          // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
          xc && xc[0] == 0 || !yc ? s * 0 : s / 0
       );
      }

      q = new BigNumber(s);
      qc = q.c = [];
      e = x.e - y.e;
      s = dp + e + 1;

      if (!base) {
        base = BASE;
        e = bitFloor(x.e / LOG_BASE) - bitFloor(y.e / LOG_BASE);
        s = s / LOG_BASE | 0;
      }

      // Result exponent may be one less then the current value of e.
      // The coefficients of the BigNumbers from convertBase may have trailing zeros.
      for (i = 0; yc[i] == (xc[i] || 0); i++);

      if (yc[i] > (xc[i] || 0)) e--;

      if (s < 0) {
        qc.push(1);
        more = true;
      } else {
        xL = xc.length;
        yL = yc.length;
        i = 0;
        s += 2;

        // Normalise xc and yc so highest order digit of yc is >= base / 2.

        n = mathfloor(base / (yc[0] + 1));

        // Not necessary, but to handle odd bases where yc[0] == (base / 2) - 1.
        // if (n > 1 || n++ == 1 && yc[0] < base / 2) {
        if (n > 1) {
          yc = multiply(yc, n, base);
          xc = multiply(xc, n, base);
          yL = yc.length;
          xL = xc.length;
        }

        xi = yL;
        rem = xc.slice(0, yL);
        remL = rem.length;

        // Add zeros to make remainder as long as divisor.
        for (; remL < yL; rem[remL++] = 0);
        yz = yc.slice();
        yz = [0].concat(yz);
        yc0 = yc[0];
        if (yc[1] >= base / 2) yc0++;
        // Not necessary, but to prevent trial digit n > base, when using base 3.
        // else if (base == 3 && yc0 == 1) yc0 = 1 + 1e-15;

        do {
          n = 0;

          // Compare divisor and remainder.
          cmp = compare(yc, rem, yL, remL);

          // If divisor < remainder.
          if (cmp < 0) {

            // Calculate trial digit, n.

            rem0 = rem[0];
            if (yL != remL) rem0 = rem0 * base + (rem[1] || 0);

            // n is how many times the divisor goes into the current remainder.
            n = mathfloor(rem0 / yc0);

            //  Algorithm:
            //  product = divisor multiplied by trial digit (n).
            //  Compare product and remainder.
            //  If product is greater than remainder:
            //    Subtract divisor from product, decrement trial digit.
            //  Subtract product from remainder.
            //  If product was less than remainder at the last compare:
            //    Compare new remainder and divisor.
            //    If remainder is greater than divisor:
            //      Subtract divisor from remainder, increment trial digit.

            if (n > 1) {

              // n may be > base only when base is 3.
              if (n >= base) n = base - 1;

              // product = divisor * trial digit.
              prod = multiply(yc, n, base);
              prodL = prod.length;
              remL = rem.length;

              // Compare product and remainder.
              // If product > remainder then trial digit n too high.
              // n is 1 too high about 5% of the time, and is not known to have
              // ever been more than 1 too high.
              while (compare(prod, rem, prodL, remL) == 1) {
                n--;

                // Subtract divisor from product.
                subtract(prod, yL < prodL ? yz : yc, prodL, base);
                prodL = prod.length;
                cmp = 1;
              }
            } else {

              // n is 0 or 1, cmp is -1.
              // If n is 0, there is no need to compare yc and rem again below,
              // so change cmp to 1 to avoid it.
              // If n is 1, leave cmp as -1, so yc and rem are compared again.
              if (n == 0) {

                // divisor < remainder, so n must be at least 1.
                cmp = n = 1;
              }

              // product = divisor
              prod = yc.slice();
              prodL = prod.length;
            }

            if (prodL < remL) prod = [0].concat(prod);

            // Subtract product from remainder.
            subtract(rem, prod, remL, base);
            remL = rem.length;

             // If product was < remainder.
            if (cmp == -1) {

              // Compare divisor and new remainder.
              // If divisor < new remainder, subtract divisor from remainder.
              // Trial digit n too low.
              // n is 1 too low about 5% of the time, and very rarely 2 too low.
              while (compare(yc, rem, yL, remL) < 1) {
                n++;

                // Subtract divisor from remainder.
                subtract(rem, yL < remL ? yz : yc, remL, base);
                remL = rem.length;
              }
            }
          } else if (cmp === 0) {
            n++;
            rem = [0];
          } // else cmp === 1 and n will be 0

          // Add the next digit, n, to the result array.
          qc[i++] = n;

          // Update the remainder.
          if (rem[0]) {
            rem[remL++] = xc[xi] || 0;
          } else {
            rem = [xc[xi]];
            remL = 1;
          }
        } while ((xi++ < xL || rem[0] != null) && s--);

        more = rem[0] != null;

        // Leading zero?
        if (!qc[0]) qc.splice(0, 1);
      }

      if (base == BASE) {

        // To calculate q.e, first get the number of digits of qc[0].
        for (i = 1, s = qc[0]; s >= 10; s /= 10, i++);

        round(q, dp + (q.e = i + e * LOG_BASE - 1) + 1, rm, more);

      // Caller is convertBase.
      } else {
        q.e = e;
        q.r = +more;
      }

      return q;
    };
  })();


  /*
   * Return a string representing the value of BigNumber n in fixed-point or exponential
   * notation rounded to the specified decimal places or significant digits.
   *
   * n: a BigNumber.
   * i: the index of the last digit required (i.e. the digit that may be rounded up).
   * rm: the rounding mode.
   * id: 1 (toExponential) or 2 (toPrecision).
   */
  function format(n, i, rm, id) {
    var c0, e, ne, len, str;

    if (rm == null) rm = ROUNDING_MODE;
    else intCheck(rm, 0, 8);

    if (!n.c) return n.toString();

    c0 = n.c[0];
    ne = n.e;

    if (i == null) {
      str = coeffToString(n.c);
      str = id == 1 || id == 2 && (ne <= TO_EXP_NEG || ne >= TO_EXP_POS)
       ? toExponential(str, ne)
       : toFixedPoint(str, ne, '0');
    } else {
      n = round(new BigNumber(n), i, rm);

      // n.e may have changed if the value was rounded up.
      e = n.e;

      str = coeffToString(n.c);
      len = str.length;

      // toPrecision returns exponential notation if the number of significant digits
      // specified is less than the number of digits necessary to represent the integer
      // part of the value in fixed-point notation.

      // Exponential notation.
      if (id == 1 || id == 2 && (i <= e || e <= TO_EXP_NEG)) {

        // Append zeros?
        for (; len < i; str += '0', len++);
        str = toExponential(str, e);

      // Fixed-point notation.
      } else {
        i -= ne;
        str = toFixedPoint(str, e, '0');

        // Append zeros?
        if (e + 1 > len) {
          if (--i > 0) for (str += '.'; i--; str += '0');
        } else {
          i += e - len;
          if (i > 0) {
            if (e + 1 == len) str += '.';
            for (; i--; str += '0');
          }
        }
      }
    }

    return n.s < 0 && c0 ? '-' + str : str;
  }


  // Handle BigNumber.max and BigNumber.min.
  function maxOrMin(args, method) {
    var n,
      i = 1,
      m = new BigNumber(args[0]);

    for (; i < args.length; i++) {
      n = new BigNumber(args[i]);

      // If any number is NaN, return NaN.
      if (!n.s) {
        m = n;
        break;
      } else if (method.call(m, n)) {
        m = n;
      }
    }

    return m;
  }


  /*
   * Strip trailing zeros, calculate base 10 exponent and check against MIN_EXP and MAX_EXP.
   * Called by minus, plus and times.
   */
  function normalise(n, c, e) {
    var i = 1,
      j = c.length;

     // Remove trailing zeros.
    for (; !c[--j]; c.pop());

    // Calculate the base 10 exponent. First get the number of digits of c[0].
    for (j = c[0]; j >= 10; j /= 10, i++);

    // Overflow?
    if ((e = i + e * LOG_BASE - 1) > MAX_EXP) {

      // Infinity.
      n.c = n.e = null;

    // Underflow?
    } else if (e < MIN_EXP) {

      // Zero.
      n.c = [n.e = 0];
    } else {
      n.e = e;
      n.c = c;
    }

    return n;
  }


  // Handle values that fail the validity test in BigNumber.
  parseNumeric = (function () {
    var basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
      dotAfter = /^([^.]+)\.$/,
      dotBefore = /^\.([^.]+)$/,
      isInfinityOrNaN = /^-?(Infinity|NaN)$/,
      whitespaceOrPlus = /^\s*\+(?=[\w.])|^\s+|\s+$/g;

    return function (x, str, isNum, b) {
      var base,
        s = isNum ? str : str.replace(whitespaceOrPlus, '');

      // No exception on ±Infinity or NaN.
      if (isInfinityOrNaN.test(s)) {
        x.s = isNaN(s) ? null : s < 0 ? -1 : 1;
      } else {
        if (!isNum) {

          // basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i
          s = s.replace(basePrefix, function (m, p1, p2) {
            base = (p2 = p2.toLowerCase()) == 'x' ? 16 : p2 == 'b' ? 2 : 8;
            return !b || b == base ? p1 : m;
          });

          if (b) {
            base = b;

            // E.g. '1.' to '1', '.1' to '0.1'
            s = s.replace(dotAfter, '$1').replace(dotBefore, '0.$1');
          }

          if (str != s) return new BigNumber(s, base);
        }

        // '[BigNumber Error] Not a number: {n}'
        // '[BigNumber Error] Not a base {b} number: {n}'
        if (BigNumber.DEBUG) {
          throw Error
            (bignumberError + 'Not a' + (b ? ' base ' + b : '') + ' number: ' + str);
        }

        // NaN
        x.s = null;
      }

      x.c = x.e = null;
    }
  })();


  /*
   * Round x to sd significant digits using rounding mode rm. Check for over/under-flow.
   * If r is truthy, it is known that there are more digits after the rounding digit.
   */
  function round(x, sd, rm, r) {
    var d, i, j, k, n, ni, rd,
      xc = x.c,
      pows10 = POWS_TEN;

    // if x is not Infinity or NaN...
    if (xc) {

      // rd is the rounding digit, i.e. the digit after the digit that may be rounded up.
      // n is a base 1e14 number, the value of the element of array x.c containing rd.
      // ni is the index of n within x.c.
      // d is the number of digits of n.
      // i is the index of rd within n including leading zeros.
      // j is the actual index of rd within n (if < 0, rd is a leading zero).
      out: {

        // Get the number of digits of the first element of xc.
        for (d = 1, k = xc[0]; k >= 10; k /= 10, d++);
        i = sd - d;

        // If the rounding digit is in the first element of xc...
        if (i < 0) {
          i += LOG_BASE;
          j = sd;
          n = xc[ni = 0];

          // Get the rounding digit at index j of n.
          rd = n / pows10[d - j - 1] % 10 | 0;
        } else {
          ni = mathceil((i + 1) / LOG_BASE);

          if (ni >= xc.length) {

            if (r) {

              // Needed by sqrt.
              for (; xc.length <= ni; xc.push(0));
              n = rd = 0;
              d = 1;
              i %= LOG_BASE;
              j = i - LOG_BASE + 1;
            } else {
              break out;
            }
          } else {
            n = k = xc[ni];

            // Get the number of digits of n.
            for (d = 1; k >= 10; k /= 10, d++);

            // Get the index of rd within n.
            i %= LOG_BASE;

            // Get the index of rd within n, adjusted for leading zeros.
            // The number of leading zeros of n is given by LOG_BASE - d.
            j = i - LOG_BASE + d;

            // Get the rounding digit at index j of n.
            rd = j < 0 ? 0 : n / pows10[d - j - 1] % 10 | 0;
          }
        }

        r = r || sd < 0 ||

        // Are there any non-zero digits after the rounding digit?
        // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
        // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
         xc[ni + 1] != null || (j < 0 ? n : n % pows10[d - j - 1]);

        r = rm < 4
         ? (rd || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2))
         : rd > 5 || rd == 5 && (rm == 4 || r || rm == 6 &&

          // Check whether the digit to the left of the rounding digit is odd.
          ((i > 0 ? j > 0 ? n / pows10[d - j] : 0 : xc[ni - 1]) % 10) & 1 ||
           rm == (x.s < 0 ? 8 : 7));

        if (sd < 1 || !xc[0]) {
          xc.length = 0;

          if (r) {

            // Convert sd to decimal places.
            sd -= x.e + 1;

            // 1, 0.1, 0.01, 0.001, 0.0001 etc.
            xc[0] = pows10[(LOG_BASE - sd % LOG_BASE) % LOG_BASE];
            x.e = -sd || 0;
          } else {

            // Zero.
            xc[0] = x.e = 0;
          }

          return x;
        }

        // Remove excess digits.
        if (i == 0) {
          xc.length = ni;
          k = 1;
          ni--;
        } else {
          xc.length = ni + 1;
          k = pows10[LOG_BASE - i];

          // E.g. 56700 becomes 56000 if 7 is the rounding digit.
          // j > 0 means i > number of leading zeros of n.
          xc[ni] = j > 0 ? mathfloor(n / pows10[d - j] % pows10[j]) * k : 0;
        }

        // Round up?
        if (r) {

          for (; ;) {

            // If the digit to be rounded up is in the first element of xc...
            if (ni == 0) {

              // i will be the length of xc[0] before k is added.
              for (i = 1, j = xc[0]; j >= 10; j /= 10, i++);
              j = xc[0] += k;
              for (k = 1; j >= 10; j /= 10, k++);

              // if i != k the length has increased.
              if (i != k) {
                x.e++;
                if (xc[0] == BASE) xc[0] = 1;
              }

              break;
            } else {
              xc[ni] += k;
              if (xc[ni] != BASE) break;
              xc[ni--] = 0;
              k = 1;
            }
          }
        }

        // Remove trailing zeros.
        for (i = xc.length; xc[--i] === 0; xc.pop());
      }

      // Overflow? Infinity.
      if (x.e > MAX_EXP) {
        x.c = x.e = null;

      // Underflow? Zero.
      } else if (x.e < MIN_EXP) {
        x.c = [x.e = 0];
      }
    }

    return x;
  }


  function valueOf(n) {
    var str,
      e = n.e;

    if (e === null) return n.toString();

    str = coeffToString(n.c);

    str = e <= TO_EXP_NEG || e >= TO_EXP_POS
      ? toExponential(str, e)
      : toFixedPoint(str, e, '0');

    return n.s < 0 ? '-' + str : str;
  }


  // PROTOTYPE/INSTANCE METHODS


  /*
   * Return a new BigNumber whose value is the absolute value of this BigNumber.
   */
  P.absoluteValue = P.abs = function () {
    var x = new BigNumber(this);
    if (x.s < 0) x.s = 1;
    return x;
  };


  /*
   * Return
   *   1 if the value of this BigNumber is greater than the value of BigNumber(y, b),
   *   -1 if the value of this BigNumber is less than the value of BigNumber(y, b),
   *   0 if they have the same value,
   *   or null if the value of either is NaN.
   */
  P.comparedTo = function (y, b) {
    return compare(this, new BigNumber(y, b));
  };


  /*
   * If dp is undefined or null or true or false, return the number of decimal places of the
   * value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
   *
   * Otherwise, if dp is a number, return a new BigNumber whose value is the value of this
   * BigNumber rounded to a maximum of dp decimal places using rounding mode rm, or
   * ROUNDING_MODE if rm is omitted.
   *
   * [dp] {number} Decimal places: integer, 0 to MAX inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
   */
  P.decimalPlaces = P.dp = function (dp, rm) {
    var c, n, v,
      x = this;

    if (dp != null) {
      intCheck(dp, 0, MAX);
      if (rm == null) rm = ROUNDING_MODE;
      else intCheck(rm, 0, 8);

      return round(new BigNumber(x), dp + x.e + 1, rm);
    }

    if (!(c = x.c)) return null;
    n = ((v = c.length - 1) - bitFloor(this.e / LOG_BASE)) * LOG_BASE;

    // Subtract the number of trailing zeros of the last number.
    if (v = c[v]) for (; v % 10 == 0; v /= 10, n--);
    if (n < 0) n = 0;

    return n;
  };


  /*
   *  n / 0 = I
   *  n / N = N
   *  n / I = 0
   *  0 / n = 0
   *  0 / 0 = N
   *  0 / N = N
   *  0 / I = 0
   *  N / n = N
   *  N / 0 = N
   *  N / N = N
   *  N / I = N
   *  I / n = I
   *  I / 0 = I
   *  I / N = N
   *  I / I = N
   *
   * Return a new BigNumber whose value is the value of this BigNumber divided by the value of
   * BigNumber(y, b), rounded according to DECIMAL_PLACES and ROUNDING_MODE.
   */
  P.dividedBy = P.div = function (y, b) {
    return div(this, new BigNumber(y, b), DECIMAL_PLACES, ROUNDING_MODE);
  };


  /*
   * Return a new BigNumber whose value is the integer part of dividing the value of this
   * BigNumber by the value of BigNumber(y, b).
   */
  P.dividedToIntegerBy = P.idiv = function (y, b) {
    return div(this, new BigNumber(y, b), 0, 1);
  };


  /*
   * Return a BigNumber whose value is the value of this BigNumber exponentiated by n.
   *
   * If m is present, return the result modulo m.
   * If n is negative round according to DECIMAL_PLACES and ROUNDING_MODE.
   * If POW_PRECISION is non-zero and m is not present, round to POW_PRECISION using ROUNDING_MODE.
   *
   * The modular power operation works efficiently when x, n, and m are integers, otherwise it
   * is equivalent to calculating x.exponentiatedBy(n).modulo(m) with a POW_PRECISION of 0.
   *
   * n {number|string|BigNumber} The exponent. An integer.
   * [m] {number|string|BigNumber} The modulus.
   *
   * '[BigNumber Error] Exponent not an integer: {n}'
   */
  P.exponentiatedBy = P.pow = function (n, m) {
    var half, isModExp, i, k, more, nIsBig, nIsNeg, nIsOdd, y,
      x = this;

    n = new BigNumber(n);

    // Allow NaN and ±Infinity, but not other non-integers.
    if (n.c && !n.isInteger()) {
      throw Error
        (bignumberError + 'Exponent not an integer: ' + valueOf(n));
    }

    if (m != null) m = new BigNumber(m);

    // Exponent of MAX_SAFE_INTEGER is 15.
    nIsBig = n.e > 14;

    // If x is NaN, ±Infinity, ±0 or ±1, or n is ±Infinity, NaN or ±0.
    if (!x.c || !x.c[0] || x.c[0] == 1 && !x.e && x.c.length == 1 || !n.c || !n.c[0]) {

      // The sign of the result of pow when x is negative depends on the evenness of n.
      // If +n overflows to ±Infinity, the evenness of n would be not be known.
      y = new BigNumber(Math.pow(+valueOf(x), nIsBig ? 2 - isOdd(n) : +valueOf(n)));
      return m ? y.mod(m) : y;
    }

    nIsNeg = n.s < 0;

    if (m) {

      // x % m returns NaN if abs(m) is zero, or m is NaN.
      if (m.c ? !m.c[0] : !m.s) return new BigNumber(NaN);

      isModExp = !nIsNeg && x.isInteger() && m.isInteger();

      if (isModExp) x = x.mod(m);

    // Overflow to ±Infinity: >=2**1e10 or >=1.0000024**1e15.
    // Underflow to ±0: <=0.79**1e10 or <=0.9999975**1e15.
    } else if (n.e > 9 && (x.e > 0 || x.e < -1 || (x.e == 0
      // [1, 240000000]
      ? x.c[0] > 1 || nIsBig && x.c[1] >= 24e7
      // [80000000000000]  [99999750000000]
      : x.c[0] < 8e13 || nIsBig && x.c[0] <= 9999975e7))) {

      // If x is negative and n is odd, k = -0, else k = 0.
      k = x.s < 0 && isOdd(n) ? -0 : 0;

      // If x >= 1, k = ±Infinity.
      if (x.e > -1) k = 1 / k;

      // If n is negative return ±0, else return ±Infinity.
      return new BigNumber(nIsNeg ? 1 / k : k);

    } else if (POW_PRECISION) {

      // Truncating each coefficient array to a length of k after each multiplication
      // equates to truncating significant digits to POW_PRECISION + [28, 41],
      // i.e. there will be a minimum of 28 guard digits retained.
      k = mathceil(POW_PRECISION / LOG_BASE + 2);
    }

    if (nIsBig) {
      half = new BigNumber(0.5);
      if (nIsNeg) n.s = 1;
      nIsOdd = isOdd(n);
    } else {
      i = Math.abs(+valueOf(n));
      nIsOdd = i % 2;
    }

    y = new BigNumber(ONE);

    // Performs 54 loop iterations for n of 9007199254740991.
    for (; ;) {

      if (nIsOdd) {
        y = y.times(x);
        if (!y.c) break;

        if (k) {
          if (y.c.length > k) y.c.length = k;
        } else if (isModExp) {
          y = y.mod(m);    //y = y.minus(div(y, m, 0, MODULO_MODE).times(m));
        }
      }

      if (i) {
        i = mathfloor(i / 2);
        if (i === 0) break;
        nIsOdd = i % 2;
      } else {
        n = n.times(half);
        round(n, n.e + 1, 1);

        if (n.e > 14) {
          nIsOdd = isOdd(n);
        } else {
          i = +valueOf(n);
          if (i === 0) break;
          nIsOdd = i % 2;
        }
      }

      x = x.times(x);

      if (k) {
        if (x.c && x.c.length > k) x.c.length = k;
      } else if (isModExp) {
        x = x.mod(m);    //x = x.minus(div(x, m, 0, MODULO_MODE).times(m));
      }
    }

    if (isModExp) return y;
    if (nIsNeg) y = ONE.div(y);

    return m ? y.mod(m) : k ? round(y, POW_PRECISION, ROUNDING_MODE, more) : y;
  };


  /*
   * Return a new BigNumber whose value is the value of this BigNumber rounded to an integer
   * using rounding mode rm, or ROUNDING_MODE if rm is omitted.
   *
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {rm}'
   */
  P.integerValue = function (rm) {
    var n = new BigNumber(this);
    if (rm == null) rm = ROUNDING_MODE;
    else intCheck(rm, 0, 8);
    return round(n, n.e + 1, rm);
  };


  /*
   * Return true if the value of this BigNumber is equal to the value of BigNumber(y, b),
   * otherwise return false.
   */
  P.isEqualTo = P.eq = function (y, b) {
    return compare(this, new BigNumber(y, b)) === 0;
  };


  /*
   * Return true if the value of this BigNumber is a finite number, otherwise return false.
   */
  P.isFinite = function () {
    return !!this.c;
  };


  /*
   * Return true if the value of this BigNumber is greater than the value of BigNumber(y, b),
   * otherwise return false.
   */
  P.isGreaterThan = P.gt = function (y, b) {
    return compare(this, new BigNumber(y, b)) > 0;
  };


  /*
   * Return true if the value of this BigNumber is greater than or equal to the value of
   * BigNumber(y, b), otherwise return false.
   */
  P.isGreaterThanOrEqualTo = P.gte = function (y, b) {
    return (b = compare(this, new BigNumber(y, b))) === 1 || b === 0;

  };


  /*
   * Return true if the value of this BigNumber is an integer, otherwise return false.
   */
  P.isInteger = function () {
    return !!this.c && bitFloor(this.e / LOG_BASE) > this.c.length - 2;
  };


  /*
   * Return true if the value of this BigNumber is less than the value of BigNumber(y, b),
   * otherwise return false.
   */
  P.isLessThan = P.lt = function (y, b) {
    return compare(this, new BigNumber(y, b)) < 0;
  };


  /*
   * Return true if the value of this BigNumber is less than or equal to the value of
   * BigNumber(y, b), otherwise return false.
   */
  P.isLessThanOrEqualTo = P.lte = function (y, b) {
    return (b = compare(this, new BigNumber(y, b))) === -1 || b === 0;
  };


  /*
   * Return true if the value of this BigNumber is NaN, otherwise return false.
   */
  P.isNaN = function () {
    return !this.s;
  };


  /*
   * Return true if the value of this BigNumber is negative, otherwise return false.
   */
  P.isNegative = function () {
    return this.s < 0;
  };


  /*
   * Return true if the value of this BigNumber is positive, otherwise return false.
   */
  P.isPositive = function () {
    return this.s > 0;
  };


  /*
   * Return true if the value of this BigNumber is 0 or -0, otherwise return false.
   */
  P.isZero = function () {
    return !!this.c && this.c[0] == 0;
  };


  /*
   *  n - 0 = n
   *  n - N = N
   *  n - I = -I
   *  0 - n = -n
   *  0 - 0 = 0
   *  0 - N = N
   *  0 - I = -I
   *  N - n = N
   *  N - 0 = N
   *  N - N = N
   *  N - I = N
   *  I - n = I
   *  I - 0 = I
   *  I - N = N
   *  I - I = N
   *
   * Return a new BigNumber whose value is the value of this BigNumber minus the value of
   * BigNumber(y, b).
   */
  P.minus = function (y, b) {
    var i, j, t, xLTy,
      x = this,
      a = x.s;

    y = new BigNumber(y, b);
    b = y.s;

    // Either NaN?
    if (!a || !b) return new BigNumber(NaN);

    // Signs differ?
    if (a != b) {
      y.s = -b;
      return x.plus(y);
    }

    var xe = x.e / LOG_BASE,
      ye = y.e / LOG_BASE,
      xc = x.c,
      yc = y.c;

    if (!xe || !ye) {

      // Either Infinity?
      if (!xc || !yc) return xc ? (y.s = -b, y) : new BigNumber(yc ? x : NaN);

      // Either zero?
      if (!xc[0] || !yc[0]) {

        // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
        return yc[0] ? (y.s = -b, y) : new BigNumber(xc[0] ? x :

         // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
         ROUNDING_MODE == 3 ? -0 : 0);
      }
    }

    xe = bitFloor(xe);
    ye = bitFloor(ye);
    xc = xc.slice();

    // Determine which is the bigger number.
    if (a = xe - ye) {

      if (xLTy = a < 0) {
        a = -a;
        t = xc;
      } else {
        ye = xe;
        t = yc;
      }

      t.reverse();

      // Prepend zeros to equalise exponents.
      for (b = a; b--; t.push(0));
      t.reverse();
    } else {

      // Exponents equal. Check digit by digit.
      j = (xLTy = (a = xc.length) < (b = yc.length)) ? a : b;

      for (a = b = 0; b < j; b++) {

        if (xc[b] != yc[b]) {
          xLTy = xc[b] < yc[b];
          break;
        }
      }
    }

    // x < y? Point xc to the array of the bigger number.
    if (xLTy) t = xc, xc = yc, yc = t, y.s = -y.s;

    b = (j = yc.length) - (i = xc.length);

    // Append zeros to xc if shorter.
    // No need to add zeros to yc if shorter as subtract only needs to start at yc.length.
    if (b > 0) for (; b--; xc[i++] = 0);
    b = BASE - 1;

    // Subtract yc from xc.
    for (; j > a;) {

      if (xc[--j] < yc[j]) {
        for (i = j; i && !xc[--i]; xc[i] = b);
        --xc[i];
        xc[j] += BASE;
      }

      xc[j] -= yc[j];
    }

    // Remove leading zeros and adjust exponent accordingly.
    for (; xc[0] == 0; xc.splice(0, 1), --ye);

    // Zero?
    if (!xc[0]) {

      // Following IEEE 754 (2008) 6.3,
      // n - n = +0  but  n - n = -0  when rounding towards -Infinity.
      y.s = ROUNDING_MODE == 3 ? -1 : 1;
      y.c = [y.e = 0];
      return y;
    }

    // No need to check for Infinity as +x - +y != Infinity && -x - -y != Infinity
    // for finite x and y.
    return normalise(y, xc, ye);
  };


  /*
   *   n % 0 =  N
   *   n % N =  N
   *   n % I =  n
   *   0 % n =  0
   *  -0 % n = -0
   *   0 % 0 =  N
   *   0 % N =  N
   *   0 % I =  0
   *   N % n =  N
   *   N % 0 =  N
   *   N % N =  N
   *   N % I =  N
   *   I % n =  N
   *   I % 0 =  N
   *   I % N =  N
   *   I % I =  N
   *
   * Return a new BigNumber whose value is the value of this BigNumber modulo the value of
   * BigNumber(y, b). The result depends on the value of MODULO_MODE.
   */
  P.modulo = P.mod = function (y, b) {
    var q, s,
      x = this;

    y = new BigNumber(y, b);

    // Return NaN if x is Infinity or NaN, or y is NaN or zero.
    if (!x.c || !y.s || y.c && !y.c[0]) {
      return new BigNumber(NaN);

    // Return x if y is Infinity or x is zero.
    } else if (!y.c || x.c && !x.c[0]) {
      return new BigNumber(x);
    }

    if (MODULO_MODE == 9) {

      // Euclidian division: q = sign(y) * floor(x / abs(y))
      // r = x - qy    where  0 <= r < abs(y)
      s = y.s;
      y.s = 1;
      q = div(x, y, 0, 3);
      y.s = s;
      q.s *= s;
    } else {
      q = div(x, y, 0, MODULO_MODE);
    }

    y = x.minus(q.times(y));

    // To match JavaScript %, ensure sign of zero is sign of dividend.
    if (!y.c[0] && MODULO_MODE == 1) y.s = x.s;

    return y;
  };


  /*
   *  n * 0 = 0
   *  n * N = N
   *  n * I = I
   *  0 * n = 0
   *  0 * 0 = 0
   *  0 * N = N
   *  0 * I = N
   *  N * n = N
   *  N * 0 = N
   *  N * N = N
   *  N * I = N
   *  I * n = I
   *  I * 0 = N
   *  I * N = N
   *  I * I = I
   *
   * Return a new BigNumber whose value is the value of this BigNumber multiplied by the value
   * of BigNumber(y, b).
   */
  P.multipliedBy = P.times = function (y, b) {
    var c, e, i, j, k, m, xcL, xlo, xhi, ycL, ylo, yhi, zc,
      base, sqrtBase,
      x = this,
      xc = x.c,
      yc = (y = new BigNumber(y, b)).c;

    // Either NaN, ±Infinity or ±0?
    if (!xc || !yc || !xc[0] || !yc[0]) {

      // Return NaN if either is NaN, or one is 0 and the other is Infinity.
      if (!x.s || !y.s || xc && !xc[0] && !yc || yc && !yc[0] && !xc) {
        y.c = y.e = y.s = null;
      } else {
        y.s *= x.s;

        // Return ±Infinity if either is ±Infinity.
        if (!xc || !yc) {
          y.c = y.e = null;

        // Return ±0 if either is ±0.
        } else {
          y.c = [0];
          y.e = 0;
        }
      }

      return y;
    }

    e = bitFloor(x.e / LOG_BASE) + bitFloor(y.e / LOG_BASE);
    y.s *= x.s;
    xcL = xc.length;
    ycL = yc.length;

    // Ensure xc points to longer array and xcL to its length.
    if (xcL < ycL) zc = xc, xc = yc, yc = zc, i = xcL, xcL = ycL, ycL = i;

    // Initialise the result array with zeros.
    for (i = xcL + ycL, zc = []; i--; zc.push(0));

    base = BASE;
    sqrtBase = SQRT_BASE;

    for (i = ycL; --i >= 0;) {
      c = 0;
      ylo = yc[i] % sqrtBase;
      yhi = yc[i] / sqrtBase | 0;

      for (k = xcL, j = i + k; j > i;) {
        xlo = xc[--k] % sqrtBase;
        xhi = xc[k] / sqrtBase | 0;
        m = yhi * xlo + xhi * ylo;
        xlo = ylo * xlo + ((m % sqrtBase) * sqrtBase) + zc[j] + c;
        c = (xlo / base | 0) + (m / sqrtBase | 0) + yhi * xhi;
        zc[j--] = xlo % base;
      }

      zc[j] = c;
    }

    if (c) {
      ++e;
    } else {
      zc.splice(0, 1);
    }

    return normalise(y, zc, e);
  };


  /*
   * Return a new BigNumber whose value is the value of this BigNumber negated,
   * i.e. multiplied by -1.
   */
  P.negated = function () {
    var x = new BigNumber(this);
    x.s = -x.s || null;
    return x;
  };


  /*
   *  n + 0 = n
   *  n + N = N
   *  n + I = I
   *  0 + n = n
   *  0 + 0 = 0
   *  0 + N = N
   *  0 + I = I
   *  N + n = N
   *  N + 0 = N
   *  N + N = N
   *  N + I = N
   *  I + n = I
   *  I + 0 = I
   *  I + N = N
   *  I + I = I
   *
   * Return a new BigNumber whose value is the value of this BigNumber plus the value of
   * BigNumber(y, b).
   */
  P.plus = function (y, b) {
    var t,
      x = this,
      a = x.s;

    y = new BigNumber(y, b);
    b = y.s;

    // Either NaN?
    if (!a || !b) return new BigNumber(NaN);

    // Signs differ?
     if (a != b) {
      y.s = -b;
      return x.minus(y);
    }

    var xe = x.e / LOG_BASE,
      ye = y.e / LOG_BASE,
      xc = x.c,
      yc = y.c;

    if (!xe || !ye) {

      // Return ±Infinity if either ±Infinity.
      if (!xc || !yc) return new BigNumber(a / 0);

      // Either zero?
      // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
      if (!xc[0] || !yc[0]) return yc[0] ? y : new BigNumber(xc[0] ? x : a * 0);
    }

    xe = bitFloor(xe);
    ye = bitFloor(ye);
    xc = xc.slice();

    // Prepend zeros to equalise exponents. Faster to use reverse then do unshifts.
    if (a = xe - ye) {
      if (a > 0) {
        ye = xe;
        t = yc;
      } else {
        a = -a;
        t = xc;
      }

      t.reverse();
      for (; a--; t.push(0));
      t.reverse();
    }

    a = xc.length;
    b = yc.length;

    // Point xc to the longer array, and b to the shorter length.
    if (a - b < 0) t = yc, yc = xc, xc = t, b = a;

    // Only start adding at yc.length - 1 as the further digits of xc can be ignored.
    for (a = 0; b;) {
      a = (xc[--b] = xc[b] + yc[b] + a) / BASE | 0;
      xc[b] = BASE === xc[b] ? 0 : xc[b] % BASE;
    }

    if (a) {
      xc = [a].concat(xc);
      ++ye;
    }

    // No need to check for zero, as +x + +y != 0 && -x + -y != 0
    // ye = MAX_EXP + 1 possible
    return normalise(y, xc, ye);
  };


  /*
   * If sd is undefined or null or true or false, return the number of significant digits of
   * the value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
   * If sd is true include integer-part trailing zeros in the count.
   *
   * Otherwise, if sd is a number, return a new BigNumber whose value is the value of this
   * BigNumber rounded to a maximum of sd significant digits using rounding mode rm, or
   * ROUNDING_MODE if rm is omitted.
   *
   * sd {number|boolean} number: significant digits: integer, 1 to MAX inclusive.
   *                     boolean: whether to count integer-part trailing zeros: true or false.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
   */
  P.precision = P.sd = function (sd, rm) {
    var c, n, v,
      x = this;

    if (sd != null && sd !== !!sd) {
      intCheck(sd, 1, MAX);
      if (rm == null) rm = ROUNDING_MODE;
      else intCheck(rm, 0, 8);

      return round(new BigNumber(x), sd, rm);
    }

    if (!(c = x.c)) return null;
    v = c.length - 1;
    n = v * LOG_BASE + 1;

    if (v = c[v]) {

      // Subtract the number of trailing zeros of the last element.
      for (; v % 10 == 0; v /= 10, n--);

      // Add the number of digits of the first element.
      for (v = c[0]; v >= 10; v /= 10, n++);
    }

    if (sd && x.e + 1 > n) n = x.e + 1;

    return n;
  };


  /*
   * Return a new BigNumber whose value is the value of this BigNumber shifted by k places
   * (powers of 10). Shift to the right if n > 0, and to the left if n < 0.
   *
   * k {number} Integer, -MAX_SAFE_INTEGER to MAX_SAFE_INTEGER inclusive.
   *
   * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {k}'
   */
  P.shiftedBy = function (k) {
    intCheck(k, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER);
    return this.times('1e' + k);
  };


  /*
   *  sqrt(-n) =  N
   *  sqrt(N) =  N
   *  sqrt(-I) =  N
   *  sqrt(I) =  I
   *  sqrt(0) =  0
   *  sqrt(-0) = -0
   *
   * Return a new BigNumber whose value is the square root of the value of this BigNumber,
   * rounded according to DECIMAL_PLACES and ROUNDING_MODE.
   */
  P.squareRoot = P.sqrt = function () {
    var m, n, r, rep, t,
      x = this,
      c = x.c,
      s = x.s,
      e = x.e,
      dp = DECIMAL_PLACES + 4,
      half = new BigNumber('0.5');

    // Negative/NaN/Infinity/zero?
    if (s !== 1 || !c || !c[0]) {
      return new BigNumber(!s || s < 0 && (!c || c[0]) ? NaN : c ? x : 1 / 0);
    }

    // Initial estimate.
    s = Math.sqrt(+valueOf(x));

    // Math.sqrt underflow/overflow?
    // Pass x to Math.sqrt as integer, then adjust the exponent of the result.
    if (s == 0 || s == 1 / 0) {
      n = coeffToString(c);
      if ((n.length + e) % 2 == 0) n += '0';
      s = Math.sqrt(+n);
      e = bitFloor((e + 1) / 2) - (e < 0 || e % 2);

      if (s == 1 / 0) {
        n = '5e' + e;
      } else {
        n = s.toExponential();
        n = n.slice(0, n.indexOf('e') + 1) + e;
      }

      r = new BigNumber(n);
    } else {
      r = new BigNumber(s + '');
    }

    // Check for zero.
    // r could be zero if MIN_EXP is changed after the this value was created.
    // This would cause a division by zero (x/t) and hence Infinity below, which would cause
    // coeffToString to throw.
    if (r.c[0]) {
      e = r.e;
      s = e + dp;
      if (s < 3) s = 0;

      // Newton-Raphson iteration.
      for (; ;) {
        t = r;
        r = half.times(t.plus(div(x, t, dp, 1)));

        if (coeffToString(t.c).slice(0, s) === (n = coeffToString(r.c)).slice(0, s)) {

          // The exponent of r may here be one less than the final result exponent,
          // e.g 0.0009999 (e-4) --> 0.001 (e-3), so adjust s so the rounding digits
          // are indexed correctly.
          if (r.e < e) --s;
          n = n.slice(s - 3, s + 1);

          // The 4th rounding digit may be in error by -1 so if the 4 rounding digits
          // are 9999 or 4999 (i.e. approaching a rounding boundary) continue the
          // iteration.
          if (n == '9999' || !rep && n == '4999') {

            // On the first iteration only, check to see if rounding up gives the
            // exact result as the nines may infinitely repeat.
            if (!rep) {
              round(t, t.e + DECIMAL_PLACES + 2, 0);

              if (t.times(t).eq(x)) {
                r = t;
                break;
              }
            }

            dp += 4;
            s += 4;
            rep = 1;
          } else {

            // If rounding digits are null, 0{0,4} or 50{0,3}, check for exact
            // result. If not, then there are further digits and m will be truthy.
            if (!+n || !+n.slice(1) && n.charAt(0) == '5') {

              // Truncate to the first rounding digit.
              round(r, r.e + DECIMAL_PLACES + 2, 1);
              m = !r.times(r).eq(x);
            }

            break;
          }
        }
      }
    }

    return round(r, r.e + DECIMAL_PLACES + 1, ROUNDING_MODE, m);
  };


  /*
   * Return a string representing the value of this BigNumber in exponential notation and
   * rounded using ROUNDING_MODE to dp fixed decimal places.
   *
   * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
   */
  P.toExponential = function (dp, rm) {
    if (dp != null) {
      intCheck(dp, 0, MAX);
      dp++;
    }
    return format(this, dp, rm, 1);
  };


  /*
   * Return a string representing the value of this BigNumber in fixed-point notation rounding
   * to dp fixed decimal places using rounding mode rm, or ROUNDING_MODE if rm is omitted.
   *
   * Note: as with JavaScript's number type, (-0).toFixed(0) is '0',
   * but e.g. (-0.00001).toFixed(0) is '-0'.
   *
   * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
   */
  P.toFixed = function (dp, rm) {
    if (dp != null) {
      intCheck(dp, 0, MAX);
      dp = dp + this.e + 1;
    }
    return format(this, dp, rm);
  };


  /*
   * Return a string representing the value of this BigNumber in fixed-point notation rounded
   * using rm or ROUNDING_MODE to dp decimal places, and formatted according to the properties
   * of the format or FORMAT object (see BigNumber.set).
   *
   * The formatting object may contain some or all of the properties shown below.
   *
   * FORMAT = {
   *   prefix: '',
   *   groupSize: 3,
   *   secondaryGroupSize: 0,
   *   groupSeparator: ',',
   *   decimalSeparator: '.',
   *   fractionGroupSize: 0,
   *   fractionGroupSeparator: '\xA0',      // non-breaking space
   *   suffix: ''
   * };
   *
   * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   * [format] {object} Formatting options. See FORMAT pbject above.
   *
   * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
   * '[BigNumber Error] Argument not an object: {format}'
   */
  P.toFormat = function (dp, rm, format) {
    var str,
      x = this;

    if (format == null) {
      if (dp != null && rm && typeof rm == 'object') {
        format = rm;
        rm = null;
      } else if (dp && typeof dp == 'object') {
        format = dp;
        dp = rm = null;
      } else {
        format = FORMAT;
      }
    } else if (typeof format != 'object') {
      throw Error
        (bignumberError + 'Argument not an object: ' + format);
    }

    str = x.toFixed(dp, rm);

    if (x.c) {
      var i,
        arr = str.split('.'),
        g1 = +format.groupSize,
        g2 = +format.secondaryGroupSize,
        groupSeparator = format.groupSeparator || '',
        intPart = arr[0],
        fractionPart = arr[1],
        isNeg = x.s < 0,
        intDigits = isNeg ? intPart.slice(1) : intPart,
        len = intDigits.length;

      if (g2) i = g1, g1 = g2, g2 = i, len -= i;

      if (g1 > 0 && len > 0) {
        i = len % g1 || g1;
        intPart = intDigits.substr(0, i);
        for (; i < len; i += g1) intPart += groupSeparator + intDigits.substr(i, g1);
        if (g2 > 0) intPart += groupSeparator + intDigits.slice(i);
        if (isNeg) intPart = '-' + intPart;
      }

      str = fractionPart
       ? intPart + (format.decimalSeparator || '') + ((g2 = +format.fractionGroupSize)
        ? fractionPart.replace(new RegExp('\\d{' + g2 + '}\\B', 'g'),
         '$&' + (format.fractionGroupSeparator || ''))
        : fractionPart)
       : intPart;
    }

    return (format.prefix || '') + str + (format.suffix || '');
  };


  /*
   * Return an array of two BigNumbers representing the value of this BigNumber as a simple
   * fraction with an integer numerator and an integer denominator.
   * The denominator will be a positive non-zero value less than or equal to the specified
   * maximum denominator. If a maximum denominator is not specified, the denominator will be
   * the lowest value necessary to represent the number exactly.
   *
   * [md] {number|string|BigNumber} Integer >= 1, or Infinity. The maximum denominator.
   *
   * '[BigNumber Error] Argument {not an integer|out of range} : {md}'
   */
  P.toFraction = function (md) {
    var d, d0, d1, d2, e, exp, n, n0, n1, q, r, s,
      x = this,
      xc = x.c;

    if (md != null) {
      n = new BigNumber(md);

      // Throw if md is less than one or is not an integer, unless it is Infinity.
      if (!n.isInteger() && (n.c || n.s !== 1) || n.lt(ONE)) {
        throw Error
          (bignumberError + 'Argument ' +
            (n.isInteger() ? 'out of range: ' : 'not an integer: ') + valueOf(n));
      }
    }

    if (!xc) return new BigNumber(x);

    d = new BigNumber(ONE);
    n1 = d0 = new BigNumber(ONE);
    d1 = n0 = new BigNumber(ONE);
    s = coeffToString(xc);

    // Determine initial denominator.
    // d is a power of 10 and the minimum max denominator that specifies the value exactly.
    e = d.e = s.length - x.e - 1;
    d.c[0] = POWS_TEN[(exp = e % LOG_BASE) < 0 ? LOG_BASE + exp : exp];
    md = !md || n.comparedTo(d) > 0 ? (e > 0 ? d : n1) : n;

    exp = MAX_EXP;
    MAX_EXP = 1 / 0;
    n = new BigNumber(s);

    // n0 = d1 = 0
    n0.c[0] = 0;

    for (; ;)  {
      q = div(n, d, 0, 1);
      d2 = d0.plus(q.times(d1));
      if (d2.comparedTo(md) == 1) break;
      d0 = d1;
      d1 = d2;
      n1 = n0.plus(q.times(d2 = n1));
      n0 = d2;
      d = n.minus(q.times(d2 = d));
      n = d2;
    }

    d2 = div(md.minus(d0), d1, 0, 1);
    n0 = n0.plus(d2.times(n1));
    d0 = d0.plus(d2.times(d1));
    n0.s = n1.s = x.s;
    e = e * 2;

    // Determine which fraction is closer to x, n0/d0 or n1/d1
    r = div(n1, d1, e, ROUNDING_MODE).minus(x).abs().comparedTo(
        div(n0, d0, e, ROUNDING_MODE).minus(x).abs()) < 1 ? [n1, d1] : [n0, d0];

    MAX_EXP = exp;

    return r;
  };


  /*
   * Return the value of this BigNumber converted to a number primitive.
   */
  P.toNumber = function () {
    return +valueOf(this);
  };


  /*
   * Return a string representing the value of this BigNumber rounded to sd significant digits
   * using rounding mode rm or ROUNDING_MODE. If sd is less than the number of digits
   * necessary to represent the integer part of the value in fixed-point notation, then use
   * exponential notation.
   *
   * [sd] {number} Significant digits. Integer, 1 to MAX inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
   */
  P.toPrecision = function (sd, rm) {
    if (sd != null) intCheck(sd, 1, MAX);
    return format(this, sd, rm, 2);
  };


  /*
   * Return a string representing the value of this BigNumber in base b, or base 10 if b is
   * omitted. If a base is specified, including base 10, round according to DECIMAL_PLACES and
   * ROUNDING_MODE. If a base is not specified, and this BigNumber has a positive exponent
   * that is equal to or greater than TO_EXP_POS, or a negative exponent equal to or less than
   * TO_EXP_NEG, return exponential notation.
   *
   * [b] {number} Integer, 2 to ALPHABET.length inclusive.
   *
   * '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
   */
  P.toString = function (b) {
    var str,
      n = this,
      s = n.s,
      e = n.e;

    // Infinity or NaN?
    if (e === null) {
      if (s) {
        str = 'Infinity';
        if (s < 0) str = '-' + str;
      } else {
        str = 'NaN';
      }
    } else {
      if (b == null) {
        str = e <= TO_EXP_NEG || e >= TO_EXP_POS
         ? toExponential(coeffToString(n.c), e)
         : toFixedPoint(coeffToString(n.c), e, '0');
      } else if (b === 10) {
        n = round(new BigNumber(n), DECIMAL_PLACES + e + 1, ROUNDING_MODE);
        str = toFixedPoint(coeffToString(n.c), n.e, '0');
      } else {
        intCheck(b, 2, ALPHABET.length, 'Base');
        str = convertBase(toFixedPoint(coeffToString(n.c), e, '0'), 10, b, s, true);
      }

      if (s < 0 && n.c[0]) str = '-' + str;
    }

    return str;
  };


  /*
   * Return as toString, but do not accept a base argument, and include the minus sign for
   * negative zero.
   */
  P.valueOf = P.toJSON = function () {
    return valueOf(this);
  };


  P._isBigNumber = true;

  P[Symbol.toStringTag] = 'BigNumber';

  // Node.js v10.12.0+
  P[Symbol.for('nodejs.util.inspect.custom')] = P.valueOf;

  if (configObject != null) BigNumber.set(configObject);

  return BigNumber;
}


// PRIVATE HELPER FUNCTIONS

// These functions don't need access to variables,
// e.g. DECIMAL_PLACES, in the scope of the `clone` function above.


function bitFloor(n) {
  var i = n | 0;
  return n > 0 || n === i ? i : i - 1;
}


// Return a coefficient array as a string of base 10 digits.
function coeffToString(a) {
  var s, z,
    i = 1,
    j = a.length,
    r = a[0] + '';

  for (; i < j;) {
    s = a[i++] + '';
    z = LOG_BASE - s.length;
    for (; z--; s = '0' + s);
    r += s;
  }

  // Determine trailing zeros.
  for (j = r.length; r.charCodeAt(--j) === 48;);

  return r.slice(0, j + 1 || 1);
}


// Compare the value of BigNumbers x and y.
function compare(x, y) {
  var a, b,
    xc = x.c,
    yc = y.c,
    i = x.s,
    j = y.s,
    k = x.e,
    l = y.e;

  // Either NaN?
  if (!i || !j) return null;

  a = xc && !xc[0];
  b = yc && !yc[0];

  // Either zero?
  if (a || b) return a ? b ? 0 : -j : i;

  // Signs differ?
  if (i != j) return i;

  a = i < 0;
  b = k == l;

  // Either Infinity?
  if (!xc || !yc) return b ? 0 : !xc ^ a ? 1 : -1;

  // Compare exponents.
  if (!b) return k > l ^ a ? 1 : -1;

  j = (k = xc.length) < (l = yc.length) ? k : l;

  // Compare digit by digit.
  for (i = 0; i < j; i++) if (xc[i] != yc[i]) return xc[i] > yc[i] ^ a ? 1 : -1;

  // Compare lengths.
  return k == l ? 0 : k > l ^ a ? 1 : -1;
}


/*
 * Check that n is a primitive number, an integer, and in range, otherwise throw.
 */
function intCheck(n, min, max, name) {
  if (n < min || n > max || n !== mathfloor(n)) {
    throw Error
     (bignumberError + (name || 'Argument') + (typeof n == 'number'
       ? n < min || n > max ? ' out of range: ' : ' not an integer: '
       : ' not a primitive number: ') + String(n));
  }
}


// Assumes finite n.
function isOdd(n) {
  var k = n.c.length - 1;
  return bitFloor(n.e / LOG_BASE) == k && n.c[k] % 2 != 0;
}


function toExponential(str, e) {
  return (str.length > 1 ? str.charAt(0) + '.' + str.slice(1) : str) +
   (e < 0 ? 'e' : 'e+') + e;
}


function toFixedPoint(str, e, z) {
  var len, zs;

  // Negative exponent?
  if (e < 0) {

    // Prepend zeros.
    for (zs = z + '.'; ++e; zs += z);
    str = zs + str;

  // Positive exponent
  } else {
    len = str.length;

    // Append zeros.
    if (++e > len) {
      for (zs = z, e -= len; --e; zs += z);
      str += zs;
    } else if (e < len) {
      str = str.slice(0, e) + '.' + str.slice(e);
    }
  }

  return str;
}


// EXPORT


var BigNumber = clone();

var useStyles$b = makeStyles$1(function (theme) { return ({
    root: {
        minWidth: 108,
        margin: theme.spacing(0, 1),
        padding: theme.spacing(1, 0.5),
        borderColor: theme.inputs.border.color
    },
    default: {
        color: "white"
    },
    selected: {
        color: theme.typography.body1.color
    },
    amount: {
        display: "block",
        fontSize: 16,
        fontWeight: 500
    },
    sharesNumber: {
        textTransform: "lowercase"
    }
}); });
var SuggestionBox = function (props) {
    var classes = useStyles$b();
    var suggestion = props.suggestion, pickedTick = props.pickedTick, sharePrice = props.sharePrice, currency = props.currency, pick = props.pick, fundraiseType = props.fundraiseType;
    var onClick = function (suggestion) { return function () {
        pick(suggestion);
    }; };
    var actionVariant = suggestion === pickedTick ? "contained" : "outlined";
    var actionColor = suggestion === pickedTick ? "primary" : "default";
    var labelColor = suggestion === pickedTick ? classes.default : classes.selected;
    return (React__default.createElement(Button, { onClick: onClick(suggestion), variant: actionVariant, color: actionColor, className: classes.root, classes: { label: labelColor } },
        React__default.createElement("div", null,
            React__default.createElement("span", { className: classes.amount },
                React__default.createElement(FormattedNumber, { value: suggestion * sharePrice, currency: currency, variant: "currency-standard" })),
            React__default.createElement("span", { className: classes.sharesNumber },
                suggestion,
                " ",
                T.amount_suggest.pick.label[fundraiseType]))));
};

//TODO: add unit tests for functions below
var amountSuggestMaxWidth = 430;
var buildInitialSuggestionPositions = function (nbSuggestions) {
    return Array(nbSuggestions).fill(0)
        .map(function (a, index) { return index - Math.floor(nbSuggestions / 2); });
};
var computeInitialSuggestedTicks = function (amount, sharePrice, nbSuggestions) {
    var numberTicks = Math.ceil(new BigNumber(amount).dividedBy(sharePrice).toNumber());
    var ticksPositions = buildInitialSuggestionPositions(nbSuggestions);
    return ticksPositions.map(function (p) { return p + numberTicks; });
};
var canPick = function (amount, tickToPick, sharePrice) {
    return amount && new BigNumber(tickToPick).multipliedBy(sharePrice).isEqualTo(amount);
};
var maybePickOneTick = function (amount, tickToPick, sharePrice) {
    if (canPick(amount, tickToPick, sharePrice)) {
        return tickToPick;
    }
    return undefined;
};
var computeSuggestionsTendTowardsMin = function (amount, suggestedTicks, sharePrice, min) {
    var newSuggestedTicks = suggestedTicks.map(function (tick) { return tick + 1; });
    if ((newSuggestedTicks[0] * sharePrice) < min) {
        return computeSuggestionsTendTowardsMin(amount, newSuggestedTicks, sharePrice, min);
    }
    else {
        return {
            suggestedTicks: newSuggestedTicks,
            pickedTick: maybePickOneTick(amount, newSuggestedTicks[0], sharePrice)
        };
    }
};
var computeSuggestionsTendTowardsMax = function (amount, suggestedTicks, sharePrice, max) {
    var newSuggestedTicks = suggestedTicks.map(function (tick) { return tick - 1; });
    if ((newSuggestedTicks[newSuggestedTicks.length - 1] * sharePrice) > max) {
        return computeSuggestionsTendTowardsMax(amount, newSuggestedTicks, sharePrice, max);
    }
    else {
        return {
            suggestedTicks: newSuggestedTicks,
            pickedTick: maybePickOneTick(amount, newSuggestedTicks[newSuggestedTicks.length - 1], sharePrice)
        };
    }
};
var computeNewTicks = function (amount, sharePrice, min, max, nbSuggestions) {
    var sanitizedAmount = amount || min || 0;
    var initialSuggestedTicks = computeInitialSuggestedTicks(sanitizedAmount, sharePrice, nbSuggestions);
    if (initialSuggestedTicks[0] * sharePrice < min) {
        return computeSuggestionsTendTowardsMin(sanitizedAmount, initialSuggestedTicks, sharePrice, min);
    }
    else if (initialSuggestedTicks[initialSuggestedTicks.length - 1] * sharePrice > max) {
        return computeSuggestionsTendTowardsMax(sanitizedAmount, initialSuggestedTicks, sharePrice, max);
    }
    else {
        return {
            suggestedTicks: initialSuggestedTicks,
            pickedTick: maybePickOneTick(amount, initialSuggestedTicks[1], sharePrice)
        };
    }
};
var isFactorOf = function (factor, number) {
    return new BigNumber(factor).dividedBy(number).isInteger();
};
var computeShareStyleClass = function (amount, sharePrice) {
    if (!amount) {
        return "";
    }
    if (isFactorOf(amount, sharePrice)) {
        return "success";
    }
    else {
        return "error";
    }
};
var computeMinStyleClass = function (amount, min) {
    if (!amount) {
        return "";
    }
    if (amount >= min) {
        return "success";
    }
    else {
        return "error";
    }
};
var computeMaxStyleClass = function (amount, max) {
    if (!amount) {
        return "";
    }
    if (amount <= max) {
        return "success";
    }
    else {
        return "error";
    }
};

var useStyles$a = makeStyles$1(function (theme) { return ({
    root: {
        maxWidth: amountSuggestMaxWidth,
        display: "inline-block",
        padding: theme.spacing(1, 0),
        border: "1px solid " + theme.inputs.border.color,
        borderRadius: theme.inputs.border.radius
    },
    helpIcon: {
        color: theme.typography.body1.color,
        alignSelf: "center"
    },
    hints: {
        textAlign: "left"
    },
    error: {
        color: theme.palette.error.main
    },
    success: {
        color: theme.palette.success.main
    }
}); });
var SuggestionHint = function (_a) {
    var amount = _a.amount, sharePrice = _a.sharePrice, min = _a.min, max = _a.max, currency = _a.currency;
    var classes = useStyles$a();
    var sharesStyleClass = computeShareStyleClass(amount, sharePrice);
    var minStyleClass = computeMinStyleClass(amount, min);
    var maxStyleClass = computeMaxStyleClass(amount, max);
    return (React__default.createElement(Paper$1, { elevation: 0, className: classes.root },
        React__default.createElement(Grid, { container: true },
            React__default.createElement(Grid, { item: true, xs: 2, className: classes.helpIcon },
                React__default.createElement(Info, null)),
            React__default.createElement(Grid, { item: true, xs: 9, className: classes.hints },
                React__default.createElement(Typography, { variant: "subtitle2" },
                    T.amount_suggest.hint.factor_of,
                    React__default.createElement("span", { className: classes[sharesStyleClass] },
                        React__default.createElement(FormattedNumber, { value: sharePrice, currency: currency, variant: "currency-standard" }))),
                React__default.createElement(Typography, { variant: "subtitle2" },
                    T.amount_suggest.hint.min,
                    React__default.createElement("span", { className: classes[minStyleClass] },
                        React__default.createElement(FormattedNumber, { value: min, currency: currency, variant: "currency-standard" }))),
                React__default.createElement(Typography, { variant: "subtitle2" },
                    T.amount_suggest.hint.max,
                    React__default.createElement("span", { className: classes[maxStyleClass] },
                        React__default.createElement(FormattedNumber, { value: max, currency: currency, variant: "currency-standard" })))))));
};

var useStyles$9 = makeStyles$1(function (theme) { return ({
    centerContent: {
        textAlign: "center",
        display: "grid"
    },
    field: {
        maxWidth: amountSuggestMaxWidth
    },
    input: {
        color: theme.palette.text.primary,
        fontSize: theme.typography.subtitle1.fontSize
    },
    switchAction: {
        alignSelf: "center",
        height: "30px !important",
        width: "30px !important"
    },
    suggestionContainer: {
        display: "inline-flex",
        margin: theme.spacing(2, 0),
        maxWidth: amountSuggestMaxWidth,
        justifyContent: "center"
    }
}); });
var AmountSuggestDisplay = function (props) {
    var classes = useStyles$9();
    var onAmountChange = props.onAmountChange, typedAmount = props.typedAmount, prev = props.prev, canPrev = props.canPrev, next = props.next, canNext = props.canNext, sharePrice = props.sharePrice, suggestedTicks = props.suggestedTicks, pick = props.pick, pickedTick = props.pickedTick, currency = props.currency, fundraiseType = props.fundraiseType, min = props.min, max = props.max;
    return (React__default.createElement(Grid, { container: true },
        React__default.createElement(Grid, { item: true, xs: 12, md: 12, className: classes.centerContent },
            React__default.createElement(TextField, { label: T.amount_suggest.amount.label, value: typedAmount, onChange: onAmountChange, classes: { root: classes.field }, InputProps: {
                    classes: { input: classes.input },
                    endAdornment: (React__default.createElement(InputAdornment, { position: "end" },
                        React__default.createElement(Typography, { variant: "subtitle1", classes: { root: classes.input } }, T.currency.symbol[currency])))
                } })),
        React__default.createElement(Grid, { item: true, xs: 12, md: 12, className: classes.centerContent },
            React__default.createElement("div", { className: classes.suggestionContainer },
                React__default.createElement(IconBtn, { className: classes.switchAction, onClick: prev, disabled: !canPrev },
                    React__default.createElement(Remove, null)),
                suggestedTicks && suggestedTicks.map(function (suggestion, index) { return (React__default.createElement(SuggestionBox, { key: "suggestion-" + index, pick: pick, pickedTick: pickedTick, currency: currency, fundraiseType: fundraiseType, sharePrice: sharePrice, suggestion: suggestion })); }),
                React__default.createElement(IconBtn, { className: classes.switchAction, onClick: next, disabled: !canNext },
                    React__default.createElement(Add, null)))),
        React__default.createElement(Grid, { item: true, xs: 12, md: 12, className: classes.centerContent },
            React__default.createElement(SuggestionHint, { amount: typedAmount, sharePrice: sharePrice, currency: currency, min: min, max: max }))));
};

var useWindowSize = function () {
    var _a = React__default.useState({
        width: window.innerWidth,
        height: window.innerHeight
    }), windowSize = _a[0], setWindowSize = _a[1];
    function changeWindowSize() {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }
    React__default.useEffect(function () {
        window.addEventListener("resize", changeWindowSize);
        return function () {
            window.removeEventListener("resize", changeWindowSize);
        };
    }, []);
    return windowSize;
};

var AmountSuggest = function (props) {
    var min = props.min, max = props.max, onSelect = props.onSelect, sharePrice = props.sharePrice, currency = props.currency, fundraiseType = props.fundraiseType;
    var windowSize = useWindowSize();
    var computeSuggestionNb = function () { return windowSize.width > amountSuggestMaxWidth ? 3 : 2; };
    var _a = useState(), suggestedTicks = _a[0], setSuggestedTicks = _a[1];
    var _b = useState(), pickedTick = _b[0], setPickedTick = _b[1];
    var _c = useState(), typedAmount = _c[0], setTypedAmount = _c[1];
    var _d = useState(computeSuggestionNb()), suggestionNumber = _d[0], setSuggestionNumber = _d[1];
    var sanitizedPickedTick = pickedTick || suggestedTicks && suggestedTicks[0];
    var onTypedAmountChange = function (event) {
        var amount = +event.target.value;
        setTypedAmount(amount);
        setSuggestion(amount, suggestionNumber);
    };
    useEffect(function () {
        setSuggestion(0, suggestionNumber);
    }, []);
    useEffect(function () {
        var suggestionsNb = computeSuggestionNb();
        setSuggestionNumber(suggestionsNb);
        setSuggestion(0, suggestionsNb);
        setTypedAmount(0);
        setPickedTick(0);
    }, [windowSize]);
    var setSuggestion = function (amount, suggestionNumber) {
        var suggestions = computeNewTicks(amount, sharePrice, min, max, suggestionNumber);
        setSuggestedTicks(suggestions.suggestedTicks);
        if (suggestions && amount) {
            pick(suggestions.pickedTick);
        }
    };
    var pick = function (tick) {
        var pickedTick = Math.round(tick);
        var amountPicked = pickedTick * props.sharePrice;
        setPickedTick(pickedTick);
        if (amountPicked) {
            onSelect(amountPicked);
            setTypedAmount(amountPicked);
        }
    };
    var prev = function () {
        if (pickedTick === suggestedTicks[0]) {
            setSuggestedTicks(suggestedTicks.map(function (tick) { return tick - 1; }));
        }
        pick(Math.max(new BigNumber(min).dividedBy(sharePrice).toNumber(), sanitizedPickedTick - 1));
    };
    var next = function () {
        if (pickedTick === suggestedTicks[suggestedTicks.length - 1]) {
            setSuggestedTicks(suggestedTicks.map(function (tick) { return tick + 1; }));
        }
        pick(Math.min(new BigNumber(max).dividedBy(sharePrice).toNumber(), sanitizedPickedTick + 1));
    };
    var canPrev = function () {
        return min <= (sanitizedPickedTick - 1) * sharePrice;
    };
    var canNext = function () {
        return !max || max >= (sanitizedPickedTick + 1) * props.sharePrice;
    };
    return (React__default.createElement(AmountSuggestDisplay, { onAmountChange: onTypedAmountChange, typedAmount: typedAmount, prev: prev, canPrev: canPrev(), next: next, canNext: canNext(), sharePrice: sharePrice, suggestedTicks: suggestedTicks, pick: pick, pickedTick: pickedTick, currency: currency, fundraiseType: fundraiseType, min: min, max: max }));
};

var ExpandMore = {};

var interopRequireDefault = {exports: {}};

(function (module) {
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;
}(interopRequireDefault));

var interopRequireWildcard = {exports: {}};

var _typeof = {exports: {}};

(function (module) {
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;
}(_typeof));

(function (module) {
var _typeof$1 = _typeof.exports["default"];

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof$1(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache(nodeInterop);

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;
module.exports["default"] = module.exports, module.exports.__esModule = true;
}(interopRequireWildcard));

var createSvgIcon = {};

(function (exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _utils.createSvgIcon;
  }
});

var _utils = require$$0;
}(createSvgIcon));

var _interopRequireDefault$1 = interopRequireDefault.exports;

var _interopRequireWildcard$1 = interopRequireWildcard.exports;

Object.defineProperty(ExpandMore, "__esModule", {
  value: true
});
var default_1$1 = ExpandMore.default = void 0;

var React$1 = _interopRequireWildcard$1(React__default);

var _createSvgIcon$1 = _interopRequireDefault$1(createSvgIcon);

var _default$1 = (0, _createSvgIcon$1.default)( /*#__PURE__*/React$1.createElement("path", {
  d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
}), 'ExpandMore');

default_1$1 = ExpandMore.default = _default$1;

var useStyles$8 = makeStyles$1(function (theme) { return ({
    noPadding: {
        padding: 0
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest
        })
    },
    expandOpen: {
        transform: "rotate(180deg)"
    }
}); });
var Panel = function (props) {
    var _a;
    var classes = useStyles$8();
    var children = props.children, header = props.header, subheader = props.subheader, actions = props.actions, noPadding = props.noPadding, loading = props.loading, isExpandable = props.isExpandable, defaultClosed = props.defaultClosed;
    var _b = useState(!isExpandable || (isExpandable && !defaultClosed)), expanded = _b[0], setExpanded = _b[1];
    var handleExpandClick = function () {
        setExpanded(!expanded);
    };
    return (React__default.createElement(Card, null,
        React__default.createElement(CardHeader, { title: header, subheader: subheader, action: isExpandable &&
                React__default.createElement(IconButton, { className: clsx(classes.expand, (_a = {},
                        _a[classes.expandOpen] = expanded,
                        _a)), onClick: handleExpandClick },
                    React__default.createElement(default_1$1, null)) }),
        loading &&
            React__default.createElement(LinearProgress, null),
        React__default.createElement(Collapse, { in: expanded, timeout: "auto", unmountOnExit: true },
            React__default.createElement(CardContent, { classes: { root: noPadding && classes.noPadding } }, children),
            actions &&
                React__default.createElement(CardActions, null, actions))));
};

var ExpandedPanel = function (_a) {
    var panels = _a.panels;
    return (React__default.createElement("div", null, panels.filter(function (p) { return !p.hide; })
        .map((function (panel, index) { return (React__default.createElement(Accordion, { key: "panel_" + index },
        React__default.createElement(AccordionSummary, { expandIcon: React__default.createElement(ExpandMore$1, null) }, panel.title),
        React__default.createElement(AccordionDetails, null, panel.content))); }))));
};

var useStyles$7 = makeStyles$1(function (theme) { return ({
    root: {
        border: "1px solid " + theme.inputs.border.color,
        borderRadius: theme.card.borderRadius,
        boxShadow: theme.card.boxShadow,
        overflow: "hidden"
    }
}); });
var TunnelStepper = function (props) {
    var classes = useStyles$7();
    var isMobile = useMediaQuery("(max-width: 450px)");
    var steps = props.steps, current = props.current, onNext = props.onNext;
    var initialStep = current ? current : 0;
    var _a = useState(), loading = _a[0], setLoading = _a[1];
    var _b = useState(initialStep), currentStep = _b[0], setCurrentStep = _b[1];
    var isLast = currentStep + 1 === steps.length;
    var prev = function () {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };
    var next = function (stepId, data) {
        setLoading(true);
        return onNext(stepId, data).then(function () {
            if (currentStep < steps.length - 1) {
                setCurrentStep(currentStep + 1);
            }
            setLoading(false);
        });
    };
    return (React__default.createElement("div", { className: classes.root },
        !isMobile ?
            React__default.createElement(Stepper, { activeStep: currentStep }, steps.map(function (step) {
                return React__default.createElement(Step, { key: "step_" + step.id },
                    React__default.createElement(StepLabel, null, step.name));
            })) :
            React__default.createElement(MobileStepper, { currentStep: currentStep, stepsSize: steps.length, onPrev: prev, stepName: steps[currentStep].name }),
        React__default.createElement(TunnelStep, { step: steps[currentStep], next: next, prev: prev, loading: loading, isLast: isLast, isMobile: isMobile })));
};

var useStyles$6 = makeStyles$1(function (theme) { return ({
    root: {
        display: "flex",
        justifyContent: "flex-end"
    },
    previous: {
        marginRight: theme.spacing()
    }
}); });
var TunnelActions = function (props) {
    var classes = useStyles$6();
    var handleNext = props.handleNext, handlePrev = props.handlePrev, isValid = props.isValid, isLast = props.isLast, loading = props.loading, isMobile = props.isMobile;
    return (React__default.createElement("div", { className: classes.root },
        !isMobile &&
            React__default.createElement(Btn, { onClick: handlePrev, color: "secondary", className: classes.previous }, "Previous"),
        React__default.createElement(Btn, { onClick: handleNext, disabled: !isValid, loading: loading, color: "secondary", variant: "contained" }, isLast ? "Finish" : "Next")));
};

var useStyles$5 = makeStyles$1(function (theme) { return ({
    root: {
        backgroundColor: "white",
        padding: theme.spacing()
    }
}); });
var TunnelStep = function (_a) {
    var step = _a.step, prev = _a.prev, loading = _a.loading, next = _a.next, isLast = _a.isLast, isMobile = _a.isMobile;
    var classes = useStyles$5();
    var _b = useState(), stepData = _b[0], setStepData = _b[1];
    var _c = useState(true), isValid = _c[0], setIsValid = _c[1];
    var handleNext = function (event) {
        return next(step.id, stepData);
    };
    var handlePrev = function (event) {
        prev();
    };
    return (React__default.createElement("div", { className: classes.root },
        React__default.createElement(Fade, { in: true }, React__default.cloneElement(step.content, {
            stepData: stepData,
            setStepData: setStepData,
            setIsValid: setIsValid
        })),
        React__default.createElement(TunnelActions, { handleNext: handleNext, handlePrev: handlePrev, isValid: isValid, isLast: isLast, loading: loading, isMobile: isMobile })));
};

var KeyboardArrowLeft = {};

var _interopRequireDefault = interopRequireDefault.exports;

var _interopRequireWildcard = interopRequireWildcard.exports;

Object.defineProperty(KeyboardArrowLeft, "__esModule", {
  value: true
});
var default_1 = KeyboardArrowLeft.default = void 0;

var React = _interopRequireWildcard(React__default);

var _createSvgIcon = _interopRequireDefault(createSvgIcon);

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
}), 'KeyboardArrowLeft');

default_1 = KeyboardArrowLeft.default = _default;

var useStyles$4 = makeStyles$1(function (theme) { return ({
    root: {
        justifyContent: "end",
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(),
        height: +theme.card.header.size.big - 4
    },
    labelContainer: {
        justifyContent: "center",
        display: "flex",
        flexGrow: 0.5
    },
    label: {
        color: theme.palette.text.primary
    },
    icon: {
        height: 22,
        width: 22,
        backgroundColor: theme.palette.secondary.main,
        borderRadius: "50%",
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        paddingTop: theme.spacing(0.4)
    }
}); });
var MobileStepper = function (_a) {
    var stepsSize = _a.stepsSize, currentStep = _a.currentStep, stepName = _a.stepName, onPrev = _a.onPrev;
    var classes = useStyles$4();
    return (React__default.createElement(MobileStepper$1, { steps: stepsSize, activeStep: currentStep, backButton: React__default.createElement("div", { className: classes.root },
            React__default.createElement(IconBtn, { onClick: onPrev, disabled: currentStep === 0 },
                React__default.createElement(default_1, null)),
            React__default.createElement("div", { className: classes.labelContainer },
                React__default.createElement(StepLabel, { classes: { label: classes.label }, icon: React__default.createElement("span", { className: classes.icon }, currentStep + 1) }, stepName))), nextButton: React__default.createElement(React__default.Fragment, null) }));
};

var useStyles$3 = makeStyles$1(function (theme) { return ({
    root: {
        display: "flex",
        alignItems: "center",
        minHeight: 60,
        borderBottom: "1px solid " + theme.palette.divider,
        padding: theme.spacing(0, 2)
    },
    itemDesc: {
        display: "flex",
        padding: theme.spacing(),
        flex: 1
    },
    addIcon: {
        color: theme.palette.success.main
    },
    removeIcon: {
        color: theme.palette.error.main
    }
}); });
var Item = function (_a) {
    var item = _a.item, action = _a.action, toggleItem = _a.toggleItem, renderItem = _a.renderItem;
    var classes = useStyles$3();
    return (React__default.createElement("div", { className: classes.root },
        React__default.createElement("div", { className: classes.itemDesc }, renderItem(item)),
        React__default.createElement(IconBtn, { onClick: toggleItem(item, action) }, action === "SELECT" ?
            React__default.createElement(AddCircle, { classes: { root: classes.addIcon } })
            : React__default.createElement(RemoveCircle, { classes: { root: classes.removeIcon } }))));
};

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

/**
 * Checks if a given element has a CSS class.
 * 
 * @param element the element
 * @param className the CSS class name
 */
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

/**
 * Adds a CSS class to a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!hasClass(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}

function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}
/**
 * Removes a CSS class from a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */


function removeClass$1(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}

var config = {
  disabled: false
};

var timeoutsShape = process.env.NODE_ENV !== 'production' ? PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
  enter: PropTypes.number,
  exit: PropTypes.number,
  appear: PropTypes.number
}).isRequired]) : null;
var classNamesShape = process.env.NODE_ENV !== 'production' ? PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
  enter: PropTypes.string,
  exit: PropTypes.string,
  active: PropTypes.string
}), PropTypes.shape({
  enter: PropTypes.string,
  enterDone: PropTypes.string,
  enterActive: PropTypes.string,
  exit: PropTypes.string,
  exitDone: PropTypes.string,
  exitActive: PropTypes.string
})]) : null;

var TransitionGroupContext = React__default.createContext(null);

var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [ReactDOM.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : ReactDOM.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children;
        _this$props.in;
        _this$props.mountOnEnter;
        _this$props.unmountOnExit;
        _this$props.appear;
        _this$props.enter;
        _this$props.exit;
        _this$props.timeout;
        _this$props.addEndListener;
        _this$props.onEnter;
        _this$props.onEntering;
        _this$props.onEntered;
        _this$props.onExit;
        _this$props.onExiting;
        _this$props.onExited;
        _this$props.nodeRef;
        var childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      React__default.createElement(TransitionGroupContext.Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : React__default.cloneElement(React__default.Children.only(children), childProps))
    );
  };

  return Transition;
}(React__default.Component);

Transition.contextType = TransitionGroupContext;
Transition.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: PropTypes.shape({
    current: typeof Element === 'undefined' ? PropTypes.any : function (propValue, key, componentName, location, propFullName, secret) {
      var value = propValue[key];
      return PropTypes.instanceOf(value && 'ownerDocument' in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
    }
  }),

  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: PropTypes.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: PropTypes.bool,

  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: PropTypes.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: PropTypes.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: PropTypes.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: PropTypes.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: PropTypes.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: PropTypes.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: PropTypes.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: PropTypes.func
} : {}; // Name the function so it is clearer in the documentation

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
var Transition$1 = Transition;

var _addClass = function addClass$1(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return addClass(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return removeClass$1(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](https://docs.angularjs.org/api/ngAnimate) library, you should
 * use it if you're using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**, so it's
 * important to add `transition` declaration only to them, otherwise transitions
 * might not behave as intended! This might not be obvious when the transitions
 * are symmetrical, i.e. when `*-enter-active` is the same as `*-exit`, like in
 * the example above (minus `transition`), but it becomes apparent in more
 * complex transitions.
 *
 * **Note**: If you're using the
 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
 * prop, make sure to define styles for `.appear-*` classes as well.
 */


var CSSTransition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };

    _this.onEnter = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument[0],
          appearing = _this$resolveArgument[1];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, appearing ? 'appear' : 'enter', 'base');

      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };

    _this.onEntering = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument2[0],
          appearing = _this$resolveArgument2[1];

      var type = appearing ? 'appear' : 'enter';

      _this.addClass(node, type, 'active');

      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };

    _this.onEntered = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument3[0],
          appearing = _this$resolveArgument3[1];

      var type = appearing ? 'appear' : 'enter';

      _this.removeClasses(node, type);

      _this.addClass(node, type, 'done');

      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };

    _this.onExit = function (maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument4[0];

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      _this.addClass(node, 'exit', 'base');

      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };

    _this.onExiting = function (maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument5[0];

      _this.addClass(node, 'exit', 'active');

      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };

    _this.onExited = function (maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument6[0];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, 'exit', 'done');

      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };

    _this.resolveArguments = function (maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] // here `maybeNode` is actually `appearing`
      : [maybeNode, maybeAppearing];
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + "-" : '';
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
      return {
        baseClassName: baseClassName,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.addClass = function addClass(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];

    var _this$getClassNames = this.getClassNames('enter'),
        doneClassName = _this$getClassNames.doneClassName;

    if (type === 'appear' && phase === 'done' && doneClassName) {
      className += " " + doneClassName;
    } // This is to force a repaint,
    // which is necessary in order to transition styles when adding a class name.


    if (phase === 'active') {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
    }

    if (className) {
      this.appliedClasses[type][phase] = className;

      _addClass(node, className);
    }
  };

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type],
        baseClassName = _this$appliedClasses$.base,
        activeClassName = _this$appliedClasses$.active,
        doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};

    if (baseClassName) {
      removeClass(node, baseClassName);
    }

    if (activeClassName) {
      removeClass(node, activeClassName);
    }

    if (doneClassName) {
      removeClass(node, doneClassName);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props;
        _this$props.classNames;
        var props = _objectWithoutPropertiesLoose(_this$props, ["classNames"]);

    return /*#__PURE__*/React__default.createElement(Transition$1, _extends$5({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(React__default.Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes = process.env.NODE_ENV !== "production" ? _extends$5({}, Transition$1.propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: classNamesShape,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: PropTypes.func
}) : {};
var CSSTransition$1 = CSSTransition;

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */

function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && isValidElement(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */

function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return cloneElement(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!isValidElement(child)) return;
    var hasPrev = (key in prevChildMapping);
    var hasNext = (key in nextChildMapping);
    var prevChild = prevChildMapping[key];
    var isLeaving = isValidElement(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = cloneElement(child, {
        in: false
      });
    } else if (hasNext && hasPrev && isValidElement(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
};
/**
 * The `<TransitionGroup>` component manages a set of transition components
 * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
 * components, `<TransitionGroup>` is a state machine for managing the mounting
 * and unmounting of components over time.
 *
 * Consider the example below. As items are removed or added to the TodoList the
 * `in` prop is toggled automatically by the `<TransitionGroup>`.
 *
 * Note that `<TransitionGroup>`  does not define any animation behavior!
 * Exactly _how_ a list item animates is up to the individual transition
 * component. This means you can mix and match animations across different list
 * items.
 */

var TransitionGroup = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(_assertThisInitialized(_this)); // Initial children should all be entering, dependent on appear


    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  } // node is `undefined` when user provided `nodeRef` prop
  ;

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = getChildMapping(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = _extends$5({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return /*#__PURE__*/React__default.createElement(TransitionGroupContext.Provider, {
        value: contextValue
      }, children);
    }

    return /*#__PURE__*/React__default.createElement(TransitionGroupContext.Provider, {
      value: contextValue
    }, /*#__PURE__*/React__default.createElement(Component, props, children));
  };

  return TransitionGroup;
}(React__default.Component);

TransitionGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: PropTypes.any,

  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: PropTypes.node,

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: PropTypes.bool,

  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: PropTypes.bool,

  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: PropTypes.bool,

  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: PropTypes.func
} : {};
TransitionGroup.defaultProps = defaultProps;
var TransitionGroup$1 = TransitionGroup;

var useStyles$2 = makeStyles$1(function (theme) { return ({
    enter: {
        opacity: 0
    },
    enterActive: {
        opacity: 1,
        transition: theme.transitions.create("opacity", { duration: theme.transitions.duration.standard })
    },
    exit: {
        opacity: 1
    },
    exitActive: {
        opacity: 0,
        transition: theme.transitions.create("opacity", { duration: theme.transitions.duration.standard })
    }
}); });
var ItemsList = function (_a) {
    var items = _a.items, action = _a.action, toggleItem = _a.toggleItem, renderItem = _a.renderItem;
    var classes = useStyles$2();
    if (items.length > 0) {
        return (React__default.createElement(React__default.Fragment, null,
            React__default.createElement(TransitionGroup$1, null, items.map(function (item) { return (React__default.createElement(CSSTransition$1, { key: item.id, timeout: 500, classNames: {
                    enter: classes.enter,
                    enterActive: classes.enterActive,
                    exit: classes.exit,
                    exitActive: classes.exitActive
                } },
                React__default.createElement(Item, { key: item.id, item: item, action: action, toggleItem: toggleItem, renderItem: renderItem }))); }))));
    }
    return React__default.createElement(Empty, { message: T.items_pickers.empty });
};

var useStyles$1 = makeStyles$1(function (theme) { return ({
    title: {
        fontWeight: 600,
        padding: theme.spacing(0, 1)
    },
    button: {
        textDecorationLine: "underline",
        padding: theme.spacing(0, 1)
    }
}); });
var ItemsPickerHead = function (_a) {
    var title = _a.title, itemsSize = _a.itemsSize, action = _a.action, actionLabel = _a.actionLabel;
    var classes = useStyles$1();
    return (React__default.createElement("div", null,
        React__default.createElement(Typography, { variant: "subtitle2", display: "inline", className: classes.title },
            title,
            " (",
            itemsSize,
            ")"),
        React__default.createElement(Button, { color: "primary", onClick: action, className: classes.button, disabled: itemsSize === 0 }, actionLabel)));
};

var useStyles = makeStyles$1(function (theme) { return ({
    root: {
        justifyContent: "center",
        display: "block"
    },
    grid: {
        border: "1px solid " + theme.palette.divider
    },
    itemsList: {
        height: 400,
        overflow: "auto"
    },
    header: {
        padding: theme.spacing(),
        display: "flex",
        borderBottom: "1px solid " + theme.palette.divider,
        height: 60,
        alignItems: "center",
        "& > div:first-child": {
            flex: 1
        }
    },
    smallHeader: {
        flexFlow: "column",
        alignItems: "normal",
        height: "unset"
    },
    searchField: {
        margin: theme.spacing(0, 1)
    },
    loadMore: {
        textAlign: "center",
        padding: theme.spacing()
    },
    action: {
        float: "right"
    },
    title: {
        fontWeight: 600,
        padding: theme.spacing(1, 2)
    }
}); });
var ItemsPickerDisplay = function (props) {
    var _a;
    var classes = useStyles();
    var title = props.title, items = props.items, selectedItems = props.selectedItems, searchItems = props.searchItems, loadMoreItems = props.loadMoreItems, selectAllItems = props.selectAllItems, removeAllItems = props.removeAllItems, toggleItem = props.toggleItem, renderItem = props.renderItem;
    var isSmallScreen = useMediaQuery("(max-width: 500px)");
    return (React__default.createElement("div", { className: classes.root },
        React__default.createElement(Typography, { className: classes.title }, title),
        React__default.createElement(Grid, { container: true },
            React__default.createElement(Grid, { item: true, md: 6, xs: 12, sm: 12, className: classes.grid },
                React__default.createElement("div", { className: classNames(classes.header, (_a = {},
                        _a[classes.smallHeader] = isSmallScreen,
                        _a)) },
                    React__default.createElement(ItemsPickerHead, { title: T.items_pickers.item.to_select.label, itemsSize: items.length, action: selectAllItems, actionLabel: T.items_pickers.select_all }),
                    React__default.createElement(TextField, { className: classes.searchField, placeholder: T.global.search, onChange: searchItems })),
                React__default.createElement("div", { className: classes.itemsList },
                    React__default.createElement(ItemsList, { items: items, action: "SELECT", toggleItem: toggleItem, renderItem: renderItem }),
                    React__default.createElement("div", { className: classes.loadMore },
                        React__default.createElement(Button, { color: "primary", onClick: loadMoreItems }, T.global.load_more)))),
            React__default.createElement(Grid, { item: true, md: 6, xs: 12, sm: 12, className: classes.grid },
                React__default.createElement("div", { className: classes.header },
                    React__default.createElement(ItemsPickerHead, { title: T.items_pickers.item.selected.label, itemsSize: selectedItems.length, action: removeAllItems, actionLabel: T.items_pickers.deselect_all })),
                React__default.createElement("div", { className: classes.itemsList },
                    React__default.createElement(ItemsList, { items: selectedItems, action: "DESELECT", toggleItem: toggleItem, renderItem: renderItem }))))));
};

var ItemsPicker = function (props) {
    var title = props.title, items = props.items, updateCriteria = props.updateCriteria, onChange = props.onChange, renderItem = props.renderItem;
    var _a = useState([]), selectedItems = _a[0], setSelectedItem = _a[1];
    useEffect(function () {
        onChange(selectedItems);
    }, [selectedItems]);
    var isAlreadySelected = function (p) { return !selectedItems.some(function (sp) { return sp.id === p.id; }); };
    var selectableItems = items.filter(isAlreadySelected);
    var searchItems = function (event) {
        var text = event.target.value;
        updateCriteria({ global_search: text });
    };
    var loadMoreItems = function () {
        var limit = items.length + 5;
        updateCriteria({ limit: limit });
    };
    var selectAllItems = function () {
        setSelectedItem(__spreadArray(__spreadArray([], selectedItems, true), selectableItems));
    };
    var removeAllItems = function () {
        setSelectedItem([]);
    };
    var toggleItem = function (item, action) { return function () {
        if (action === "SELECT") {
            setSelectedItem(__spreadArray(__spreadArray([], selectedItems, true), [item]));
        }
        else {
            setSelectedItem(selectedItems.filter(function (i) { return i.id !== item.id; }));
        }
    }; };
    return (React__default.createElement(ItemsPickerDisplay, { title: title, items: selectableItems, selectedItems: selectedItems, searchItems: searchItems, loadMoreItems: loadMoreItems, selectAllItems: selectAllItems, removeAllItems: removeAllItems, toggleItem: toggleItem, renderItem: renderItem }));
};

var buttonBase = {
    disableRipple: true
};

var button$1 = {
    disableRipple: true,
    disableElevation: true
};

var buttonGroup = {
    disableRipple: true
};

var iconButton$1 = {
    disableRipple: true,
    size: "small"
};

var textField = {
    variant: "outlined"
};

var inputLabel$1 = {
    shrink: true
};

var outlinedInput$1 = {
    notched: false
};

var select = {
    variant: "outlined",
    MenuProps: {
        anchorOrigin: {
            vertical: "bottom",
            horizontal: "left"
        },
        transformOrigin: {
            vertical: "top",
            horizontal: "left"
        },
        getContentAnchorEl: null
    }
};

var CheckboxDefaultBox = function (props) { return (React__default.createElement(Box, __assign({ borderRadius: 4, height: 15, width: 15, border: 1, display: "flex" }, props))); };
var iconStyle = {
    color: "white",
    position: "relative",
    left: -1,
    top: -1,
    fontSize: 15
};
var checkbox$1 = {
    color: "primary",
    icon: React__default.createElement(CheckboxDefaultBox, { borderColor: customTheme.inputs.border.focus }),
    checkedIcon: React__default.createElement(CheckboxDefaultBox, { borderColor: customTheme.palette.primary.main, bgcolor: customTheme.palette.primary.main },
        React__default.createElement(Done, { style: iconStyle })),
    indeterminateIcon: React__default.createElement(CheckboxDefaultBox, { borderColor: customTheme.palette.primary.main, bgcolor: customTheme.palette.primary.main },
        React__default.createElement(Remove, { style: iconStyle }))
};

var RadioDefaultBox = function (props) { return (React__default.createElement(Box, __assign({ borderRadius: "50%", height: 16, width: 16, border: 1 }, props))); };
var radio$1 = {
    color: "primary",
    icon: React__default.createElement(RadioDefaultBox, { borderColor: customTheme.inputs.border.focus }),
    checkedIcon: React__default.createElement(RadioDefaultBox, { borderColor: customTheme.palette.primary.main, bgcolor: customTheme.palette.primary.main },
        React__default.createElement(Box, { width: 6, height: 6, borderRadius: "50%", bgcolor: "white", style: {
                position: "relative",
                top: 4,
                left: 4
            } }))
};

var mobileStepper$1 = {
    variant: "progress",
    position: "static",
    LinearProgressProps: {
        color: "secondary"
    },
    backButton: {},
    nextButton: {},
    steps: undefined
};

var props = {
    MuiButtonBase: buttonBase,
    MuiButton: button$1,
    MuiButtonGroup: buttonGroup,
    MuiIconButton: iconButton$1,
    MuiTextField: textField,
    MuiInputLabel: inputLabel$1,
    MuiOutlinedInput: outlinedInput$1,
    MuiSelect: select,
    MuiCheckbox: checkbox$1,
    MuiRadio: radio$1,
    MuiMobileStepper: mobileStepper$1
};

var button = {
    root: {
        borderRadius: customTheme.btn.borderRadius,
        textTransform: "capitalize"
    },
    iconSizeMedium: {
        "& > *:first-child": {
            fontSize: customTheme.btn.iconSize
        }
    },
    label: {
        fontSize: customTheme.typography.body1.fontSize
    }
};

var iconButton = {
    root: {
        "&:hover": {
            backgroundColor: customTheme.palette.action.hover + " !important"
        }
    }
};

var list = {
    root: {
        boxShadow: "none",
        borderWidth: 0,
        borderStyle: "solid",
        borderColor: customTheme.inputs.border.color,
        background: customTheme.palette.background.paper,
        borderRadius: customTheme.btn.borderRadius
    },
    padding: {
        padding: "0px !important"
    }
};

var listSubheader = {
    root: {
        lineHeight: "20px",
        marginTop: customTheme.spacing(),
        marginBottom: customTheme.spacing()
    },
    gutters: {
        paddingLeft: customTheme.spacing(1.5),
        paddingRight: customTheme.spacing(1.5)
    }
};

var menuItem = {
    root: {
        fontSize: customTheme.typography.body1.fontSize,
        height: customTheme.list.item.height
    }
};

var inputBase = {
    root: {
        fontSize: customTheme.typography.body1.fontSize,
        height: customTheme.inputs.height,
        borderColor: customTheme.inputs.border.color + " !important",
        "&.Mui-focused fieldset": {
            borderColor: customTheme.inputs.border.focus + " !important",
            borderWidth: "1px !important"
        }
    }
};
var outlinedInput = {
    root: {
        borderRadius: customTheme.inputs.border.radius
    },
    input: {
        padding: customTheme.spacing()
    },
    notchedOutline: {
        borderColor: customTheme.inputs.border.color + " !important"
    }
};
var formLabel = {
    root: {
        fontSize: customTheme.typography.body1.fontSize,
        lineHeight: 0
    }
};
var inputLabel = {
    root: {
        fontSize: customTheme.typography.body1.fontSize,
        transform: "none !important",
        "&.Mui-focused": {
            color: "inherit !important"
        }
    },
    formControl: {
        top: customTheme.spacing(-1)
    }
};
var inputAdornment = {
    root: {
        color: customTheme.palette.text.disabled
    }
};

var switchInput = {
    root: {
        width: 42,
        height: 26,
        padding: 0,
        overflow: "visible"
    },
    switchBase: {
        padding: 1,
        "&$checked": {
            transform: "translateX(16px)",
            color: "white !important",
            "& + $track": {
                backgroundColor: customTheme.palette.primary.main + " !important",
                opacity: 1,
                border: "none"
            },
            "&$disabled": {
                "& + $track": {
                    opacity: customTheme.palette.action.disabledOpacity + " !important"
                }
            }
        },
        "&$disabled": {
            "& + $track": {
                opacity: customTheme.palette.action.disabledOpacity + " !important"
            }
        },
        "&$focusVisible $thumb": {
            color: "#52d869 !important",
            border: "6px solid #fff"
        }
    },
    thumb: {
        width: 24,
        height: 24
    },
    track: {
        borderRadius: 26 / 2,
        backgroundColor: customTheme.palette.action.disabled + " !important",
        opacity: 1
    },
    checked: {}
};

var popover = {
    paper: {
        marginTop: customTheme.spacing()
    }
};

var checkbox = {
    colorPrimary: {
        "&:hover": {
            backgroundColor: "transparent !important"
        },
        "&$disabled .MuiBox-root": {
            opacity: customTheme.palette.action.disabledOpacity + " !important"
        }
    }
};

var radio = {
    colorPrimary: {
        "&:hover": {
            backgroundColor: "transparent !important"
        },
        "&$disabled .MuiBox-root": {
            opacity: customTheme.palette.action.disabledOpacity + " !important"
        }
    }
};

var accordion = {
    root: {
        borderColor: customTheme.inputs.border.color,
        boxShadow: customTheme.card.boxShadow,
        "&$expanded": {
            margin: 0
        },
        "&:not(:first-child):not(:last-child)": {
            borderBottom: "none",
            borderTop: "none"
        }
    },
    rounded: {
        overflow: "hidden",
        "&:first-child": {
            borderTopLeftRadius: customTheme.card.borderRadius,
            borderTopRightRadius: customTheme.card.borderRadius
        },
        "&:last-child": {
            borderBottomLeftRadius: customTheme.card.borderRadius,
            borderBottomRightRadius: customTheme.card.borderRadius
        }
    }
};
var accordionSummary = {
    content: {
        textTransform: "uppercase"
    }
};
var accordionDetails = {
    root: {
        backgroundColor: customTheme.palette.background.default
    }
};

var card = {
    root: {
        borderColor: customTheme.inputs.border.color,
        borderRadius: customTheme.card.borderRadius,
        boxShadow: customTheme.card.boxShadow
    }
};
var cardHeader = {
    root: {
        backgroundColor: customTheme.card.header.backgroundColor,
        height: customTheme.card.header.size.medium
    },
    content: {
        color: customTheme.palette.text.primary,
        textTransform: "uppercase",
        "&>$title": {
            fontSize: customTheme.typography.body1.fontSize
        },
        "&>$subheader": {
            fontSize: customTheme.typography.body2.fontSize
        }
    }
};
var cardActions = {
    root: {
        justifyContent: "flex-end"
    }
};

var step = {
    horizontal: {
        backgroundColor: customTheme.card.header.backgroundColor,
        display: "flex",
        justifyContent: "center",
        height: customTheme.card.header.size.big,
        position: "relative",
        width: "-webkit-fill-available",
        borderBottom: "1px solid " + customTheme.inputs.border.color,
        "&:not(:first-child):after": {
            content: "close-quote",
            position: "absolute",
            left: 0,
            bottom: 0,
            width: 0,
            height: 0,
            borderLeft: "16px solid " + customTheme.inputs.border.color,
            borderTop: "36px solid transparent",
            borderBottom: "36px solid transparent"
        },
        "&:not(:last-child):before": {
            content: "close-quote",
            position: "absolute",
            right: -15,
            bottom: 0,
            width: 0,
            height: 0,
            borderLeft: "16px solid " + customTheme.card.header.backgroundColor,
            borderTop: "36px solid transparent",
            borderBottom: "36px solid transparent",
            zIndex: 1
        }
    }
};
var stepConnector = {
    horizontal: {
        display: "none"
    }
};
var stepLabel = {
    labelContainer: {
        "& >span:first-child": {
            display: "flex",
            alignItems: "center"
        }
    },
    label: {
        fontWeight: 600,
        fontSize: customTheme.typography.body1.fontSize,
        "&$active": {
            fontWeight: 600
        },
        "&$completed": {
            fontWeight: 600
        }
    }
};
var stepper = {
    root: {
        padding: 0
    }
};
var stepIcon = {
    root: {
        height: 22,
        width: 22,
        transition: customTheme.transitions.create("all", { duration: customTheme.transitions.duration.short }),
        fontWeight: 600,
        "&$active": {
            color: customTheme.palette.secondary.main
        },
        "&$completed": {
            color: customTheme.palette.secondary.main
        }
    },
    text: {
        fontSize: customTheme.typography.body1.fontSize
    }
};
var mobileStepper = {
    root: {
        height: customTheme.card.header.size.big,
        display: "block",
        padding: 0,
        backgroundColor: customTheme.card.header.backgroundColor
    },
    progress: {
        width: "100%"
    }
};

var dialogTitle = {
    root: {
        backgroundColor: customTheme.palette.background.default
    }
};
var dialogContent = {
    root: {
        marginTop: customTheme.spacing(2)
    }
};
var dialogActions = {
    root: {
        padding: customTheme.spacing(2.5)
    }
};

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

var InterUIRegular = "data:font/woff2;base64,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";

var interUI = {
    fontFamily: "Inter UI",
    fontStyle: "normal",
    fontWeight: "normal",
    src: "\n    local('Inter UI'),\n    url(" + InterUIRegular + ") format('woff2')\n  ",
    unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF"
};


var interUIBold = {
    fontFamily: "Inter UI",
    fontStyle: "normal",
    fontWeight: "bold",
    src: "\n    local('Inter UI'),\n    url(" + InterUIBold + ") format('woff2')\n  ",
    unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF"
};

var cssBaseLine = {
    "@global": {
        "@font-face": [interUI, interUIBold],
        "*": {
            scrollbarColor: "light",
            scrollbarWidth: "thin"
        },
        "*::-webkit-scrollbar": {
            width: 7,
            height: 7
        },
        "*::-webkit-scrollbar-track": {
            backgroundColor: "rgba(93, 101, 115, 0.1)"
        },
        "*::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(93, 101, 115, 0.4)",
            borderRadius: 5
        },
        "*::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "rgba(93, 101, 115, 0.6) !important",
            borderRadius: 5
        }
    }
};

var link = {
    root: {
        color: customTheme.link.color
    }
};

var overrides = {
    MuiButton: button,
    MuiIconButton: iconButton,
    MuiPaper: paper,
    MuiList: list,
    MuiListSubheader: listSubheader,
    MuiMenuItem: menuItem,
    MuiInputBase: inputBase,
    MuiOutlinedInput: outlinedInput,
    MuiFormLabel: formLabel,
    MuiInputLabel: inputLabel,
    MuiInputAdornment: inputAdornment,
    MuiSwitch: switchInput,
    MuiPopover: popover,
    MuiCheckbox: checkbox,
    MuiRadio: radio,
    MuiAccordion: accordion,
    MuiAccordionSummary: accordionSummary,
    MuiAccordionDetails: accordionDetails,
    MuiCard: card,
    MuiCardHeader: cardHeader,
    MuiCardActions: cardActions,
    MuiDialogTitle: dialogTitle,
    MuiDialogActions: dialogActions,
    MuiDialogContent: dialogContent,
    MuiStep: step,
    MuiStepConnector: stepConnector,
    MuiStepLabel: stepLabel,
    MuiStepper: stepper,
    MuiStepIcon: stepIcon,
    MuiMobileStepper: mobileStepper,
    MuiTableCell: tableCell,
    MuiTablePagination: tablePagination,
    MuiTableFooter: tableFooter,
    MuiTableBody: tableBody,
    MuiCssBaseline: cssBaseLine,
    MuiLink: link
};

var finstoreTheme = createMuiTheme(__assign({ props: props, overrides: overrides }, customTheme));

var Gender;
(function (Gender) {
    Gender["MAN"] = "MAN";
    Gender["WOMAN"] = "WOMAN";
})(Gender || (Gender = {}));
var RelativeType;
(function (RelativeType) {
    RelativeType["CONJOINT"] = "CONJOINT";
    RelativeType["USUFRUCTUARY"] = "USUFRUCTUARY";
})(RelativeType || (RelativeType = {}));

var BankAccountStatus;
(function (BankAccountStatus) {
    BankAccountStatus["PENDING"] = "PENDING";
    BankAccountStatus["VALIDATED"] = "VALIDATED";
    BankAccountStatus["REFUSED"] = "REFUSED";
    BankAccountStatus["DEACTIVATED"] = "DEACTIVATED";
})(BankAccountStatus || (BankAccountStatus = {}));

export { ActionMenu, AmountSuggest, AutocompleteInput, BankAccountStatus, Btn, BtnGroup, Datatable, DisplayAmount, DisplayPercent, Empty, ExpandedPanel, FormattedAmount, FormattedBoolean, FormattedDate, FormattedDateTime, FormattedGender, FormattedLegalType, FormattedNumber, FormattedNumbr, Gender, GeosuggestInput, IconBtn, ItemsPicker, MobileStepper, Panel, ParticeepDatePicker, ParticeepDialog, RelativeType, SelectInput, TunnelStep, TunnelStepper, buildLocalConfig, defaultSearchCriteria, finstoreTheme, getColumnNameVisible, getStorageConfigTable, initColumnsVisibilityWithLocalStorage, updateStorageConfigTable };
//# sourceMappingURL=index.es.js.map