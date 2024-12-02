import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import HotButton from "./HotButton.jsx";
const hotButtonClickCode = ({ name }) => console.log("HotButton: " + name);

ReactDOM.createRoot(document.getElementById("myapp")).render(
  <React.StrictMode>
    <HotButton text="North"/>
    <HotButton text="South"/>
    <HotButton text="East"/>
    <HotButton text="West"/>
  </React.StrictMode>,
);