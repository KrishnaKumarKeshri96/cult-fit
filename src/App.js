import "./App.css";
import { CartPage } from "./Components/Cart/CartPage";
import { Login } from "./Components/Login/Login";
import { Navbar } from "./Components/Navbar/Navbar";
import { HeroSec } from "./Components/Landing_Page_Sec/HeroSec";
import { Route } from "react-router-dom";
import { Footer } from "./Components/Footer/Footer";
import { StaicLanding } from "./Components/Landing_Page_Sec/StaticData";

import { LandingPage } from "./Components/Landing_Page_Sec/LandingPage/LandingPage";

function App() {
  return (
    <div>
      <LandingPage />
    </div>
  );
}

export default App;
