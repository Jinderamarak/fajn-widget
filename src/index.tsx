import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./App";

const container = document.getElementById("app");
const root = createRoot(container!);
root.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);
