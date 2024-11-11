// src/component/Modale.tsx
import { jsxs } from "react/jsx-runtime";
function Modale(props) {
  const { name } = props;
  return /* @__PURE__ */ jsxs("div", { children: [
    "Hello ",
    name
  ] });
}
export {
  Modale
};
