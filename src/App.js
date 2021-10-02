import "./App.css";
import { Switch, Route } from "react-router-dom";
import Cult from "./Components/cult/Cult";
import CultPacks from "./Components/cultPacks/CultPacks";
import PackCheckout from "./Components/packCheckout/PackCheckout";
import { LandingPage } from "./Components/Landing_Page_Sec/LandingPage/LandingPage";
// import Store from "./Components/store/Store";
import { Navbar } from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import { HrxWorkout } from "./Components/HrxWorkout";
import { ClassBooking } from "./Components/ClassBooking";
// import { ProductPage } from "./Components/store/StoreProductPage";
// import { CartPage } from "./Components/Cart/CartPage";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/hrx" exact>
          <Navbar />
          <HrxWorkout />
          <Footer />
        </Route>
        <Route path="/classbooking" exact>
          <Navbar />
          <ClassBooking />
          <Footer />
        </Route>
        <Route path="/cult" exact>
          <Cult />
        </Route>
        <Route path="/cultPacks" exact>
          <CultPacks />
        </Route>
        <Route path="/packcheckout" exact>
          <PackCheckout />
        </Route>
        <Route>Page Not Found</Route>
      </Switch>
    </div>
  );
}

export default App;
