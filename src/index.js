import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
<<<<<<< HEAD
import { AppContextProvider } from "./Contextxts/AppContext";
=======
>>>>>>> d350fa8 (Added Cart)
import { CartDataProvider } from "../src/Components/Context/CartContext";

ReactDOM.render(
  <React.StrictMode>
<<<<<<< HEAD
    <BrowserRouter>
      <AppContextProvider>
        <CartDataProvider>
          <App />
        </CartDataProvider>
      </AppContextProvider>
    </BrowserRouter>
=======
    <CartDataProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartDataProvider>
>>>>>>> d350fa8 (Added Cart)
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
