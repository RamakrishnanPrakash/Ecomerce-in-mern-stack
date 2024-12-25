import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import StoreContextProvider from "./context/StoreContext";

createRoot(document.getElementById("root")).render(
  <StoreContextProvider>
    <App></App>
  </StoreContextProvider>
);
