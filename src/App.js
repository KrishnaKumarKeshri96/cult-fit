import "./App.css";
import { CartPage } from "./Components/Cart/CartPage";
import { Login } from "./Components/Login/Login";
import { Navbar } from "./Components/Navbar/Navbar";
import { HeroSec } from "./Components/Landing_Page_Sec/HeroSec";
import { Route } from "react-router-dom";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Footer />

      {/* <Route path="/login">
        <Login />
      </Route> */}

      {/* <CartPage /> */}
    </div>
  );
}

export default App;
