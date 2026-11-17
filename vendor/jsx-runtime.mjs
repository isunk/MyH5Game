var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod2) => function __require() {
  try {
    return mod2 || (0, cb[__getOwnPropNames(cb)[0]])((mod2 = { exports: {} }).exports, mod2), mod2.exports;
  } catch (e) {
    throw mod2 = 0, e;
  }
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod2, isNodeMode, target) => (target = mod2 != null ? __create(__getProtoOf(mod2)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod2 || !mod2.__esModule ? __defProp(target, "default", { value: mod2, enumerable: true }) : target,
  mod2
));

// jsx-core.cjs
var require_jsx_core = __commonJS({
  "jsx-core.cjs"(exports, module) {
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __commonJS2 = (cb, mod2) => function __require() {
      try {
        return mod2 || (0, cb[__getOwnPropNames2(cb)[0]])((mod2 = { exports: {} }).exports, mod2), mod2.exports;
      } catch (e) {
        throw mod2 = 0, e;
      }
    };
    var require_react_jsx_runtime_production = __commonJS2({
      "node_modules/react/cjs/react-jsx-runtime.production.js"(exports2) {
        "use strict";
        var REACT_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for("react.transitional.element");
        var REACT_FRAGMENT_TYPE = /* @__PURE__ */ Symbol.for("react.fragment");
        function jsxProd(type, config, maybeKey) {
          var key = null;
          void 0 !== maybeKey && (key = "" + maybeKey);
          void 0 !== config.key && (key = "" + config.key);
          if ("key" in config) {
            maybeKey = {};
            for (var propName in config)
              "key" !== propName && (maybeKey[propName] = config[propName]);
          } else maybeKey = config;
          config = maybeKey.ref;
          return {
            $$typeof: REACT_ELEMENT_TYPE,
            type,
            key,
            ref: void 0 !== config ? config : null,
            props: maybeKey
          };
        }
        exports2.Fragment = REACT_FRAGMENT_TYPE;
        exports2.jsx = jsxProd;
        exports2.jsxs = jsxProd;
      }
    });
    var require_jsx_runtime = __commonJS2({
      "node_modules/react/jsx-runtime.js"(exports2, module2) {
        "use strict";
        if (true) {
          module2.exports = require_react_jsx_runtime_production();
        } else {
          module2.exports = null;
        }
      }
    });
    module.exports = require_jsx_runtime();
  }
});

// jsx-wrapper.mjs
var import_jsx_core = __toESM(require_jsx_core(), 1);
var jsx_wrapper_default = import_jsx_core.default;
var Fragment = import_jsx_core.default.Fragment;
var jsx = import_jsx_core.default.jsx;
var jsxs = import_jsx_core.default.jsxs;
export {
  Fragment,
  jsx_wrapper_default as default,
  jsx,
  jsxs
};
/*! Bundled license information:

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
