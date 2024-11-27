import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ColoredText from "./ColoredText.jsx";

ReactDOM.createRoot(document.getElementById("myapp")).render(
  <React.StrictMode>
    <ColoredText red="27" green="AE" blue="60" text="A shade of Green" />
    <ColoredText red="E7" green="4C" blue="3C" text="A shade of Red" />
    <ColoredText red="34" green="98" blue="DB" text="A shade of Blue" />
    <ColoredText red="F3" green="9C" blue="12" text="A shade of Orange" />
  </React.StrictMode>,
);