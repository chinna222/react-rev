import React from "react";
import ReactDOM from "react-dom/client";

// JSX ==Babel==> React.createElement - JS object ==Babel==> HTMLElement(render) (parcel,babel)
const jsx = <h1>Hello JSX</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsx);
