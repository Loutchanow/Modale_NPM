// src/component/Modale.tsx
import styled2 from "styled-components";

// src/component/Button.tsx
import styled from "styled-components";
import { jsx } from "react/jsx-runtime";
var StyledButton = styled.button`
  padding: 10px 20px;
  background-color: ${({ backgroundcolor }) => backgroundcolor || "#007bff"};
  color: ${({ textcolor }) => textcolor || "white"};
  border: ${({ bordercolor }) => `1px solid ${bordercolor || "transparent"}`};
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;

`;
var Button = ({ label, onClick, backgroundcolor, textcolor, bordercolor }) => {
  return /* @__PURE__ */ jsx(
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
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var ModaleOverlay = styled2.div`
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
var ModaleContent = styled2.div`
  background-color: ${({ backgroundcolor }) => backgroundcolor || "white"};
  border: ${({ bordercolor }) => `1px solid ${bordercolor || "red"}`};
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
  position: relative;
  color: ${({ textcolor }) => textcolor || "white"};
`;
var ModaleHeader = styled2.div`
  margin-bottom: 10px;
  h2 {
    margin: 0;
  }
`;
var ModaleBody = styled2.div`
  margin-bottom: 20px;
`;
var ButtonContainer = styled2.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  button {
    margin-right: 10px;
  } 
`;
var Modale = ({ open, message, title, backgroundcolor, textcolor, bordercolor, actionButtonOne, actionButtonTwo, labelButtonOne, labelButtonTwo }) => {
  if (!open) return null;
  return /* @__PURE__ */ jsx2(ModaleOverlay, { children: /* @__PURE__ */ jsxs(ModaleContent, { backgroundcolor, textcolor, bordercolor, children: [
    /* @__PURE__ */ jsx2(ModaleHeader, { children: /* @__PURE__ */ jsx2("h2", { children: title }) }),
    /* @__PURE__ */ jsx2(ModaleBody, { children: /* @__PURE__ */ jsx2("p", { children: message }) }),
    /* @__PURE__ */ jsxs(ButtonContainer, { children: [
      /* @__PURE__ */ jsx2(Button_default, { onClick: actionButtonOne, label: labelButtonOne, bordercolor, backgroundcolor, textcolor }),
      /* @__PURE__ */ jsx2(Button_default, { onClick: actionButtonTwo, label: labelButtonTwo, bordercolor, backgroundcolor, textcolor })
    ] })
  ] }) });
};
var Modale_default = Modale;
export {
  Modale_default as Modale
};
