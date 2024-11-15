"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Modale: () => Modale_default
});
module.exports = __toCommonJS(src_exports);

// src/component/Modale.tsx
var import_styled_components2 = __toESM(require("styled-components"), 1);

// src/component/Button.tsx
var import_styled_components = __toESM(require("styled-components"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var StyledButton = import_styled_components.default.button`
  padding: 10px 20px;
  background-color: ${({ backgroundcolor }) => backgroundcolor || "#007bff"};
  color: ${({ textcolor }) => textcolor || "white"};
  border: ${({ bordercolor }) => `1px solid ${bordercolor || "transparent"}`};
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;

`;
var Button = ({ label, onClick, backgroundcolor, textcolor, bordercolor }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    StyledButton,
    {
      label,
      onClick,
      backgroundcolor,
      textcolor,
      bordercolor,
      children: label
    }
  );
};
var Button_default = Button;

// src/component/Modale.tsx
var import_react = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
var ModaleOverlay = import_styled_components2.default.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.8);
  `;
var ModaleContent = import_styled_components2.default.div`
  background-color: ${({ backgroundcolor }) => backgroundcolor || "white"};
  border: ${({ bordercolor }) => `1px solid ${bordercolor || "red"}`};
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
  position: relative;
  color: ${({ textcolor }) => textcolor || "white"};
`;
var ModaleHeader = import_styled_components2.default.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    margin: 0;
  }
`;
var ModaleCross = import_styled_components2.default.div`
cursor: pointer;
padding: 5px;
font-size: 1.5rem;
`;
var ModaleBody = import_styled_components2.default.div`
  margin-bottom: 20px;
`;
var ButtonContainer = import_styled_components2.default.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  button {
    margin-right: 10px;
  } 
  `;
var Modale = ({ open, message, title, backgroundcolor, textcolor, bordercolor, actionButtonOne, actionButtonTwo, labelButtonOne, labelButtonTwo }) => {
  const [close, setClose] = (0, import_react.useState)(false);
  const closeModale = () => {
    setClose(true);
  };
  if (!open || close) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ModaleOverlay, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(ModaleContent, { backgroundcolor, textcolor, bordercolor, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(ModaleHeader, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h2", { children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ModaleCross, { onClick: closeModale, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { children: " \u2715 " }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ModaleBody, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { children: message }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(ButtonContainer, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Button_default, { onClick: actionButtonOne, label: labelButtonOne, bordercolor, backgroundcolor, textcolor }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Button_default, { onClick: actionButtonTwo, label: labelButtonTwo, bordercolor, backgroundcolor, textcolor })
    ] })
  ] }) });
};
var Modale_default = Modale;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Modale
});
