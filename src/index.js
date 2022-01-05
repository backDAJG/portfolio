import { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./assets/stylus/style.styl";
import App from "./App";

render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("App")
);
