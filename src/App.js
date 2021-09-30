import "./App.css";
import { CartPage } from "./Components/Cart/CartPage";
import { Login } from "./Components/Login/Login";
import { Navbar } from "./Components/Navbar/Navbar";
import { HeroSec } from "./Components/Landing_Page_Sec/HeroSec";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSec />

      {/* <Route path="/login">
        <Login />
      </Route> */}

      {/* <CartPage /> */}
    </div>
  );
}

export default App;
