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
import { ProductPage } from "./Components/store/StoreProductPage";
import Store from "./Components/store/Store";
import { CartPage } from "./Components/Cart/CartPage";
import { FinalCartPage } from "./Components/Cart/FinalCartPage";
import Thanks from "./Components/Thanks";
// import { PrivateRoute } from "./Components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/thanks" exact>
          <Thanks />
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
        <Route path="/cultstore">
          <Store />
        </Route>
        <Route path="/productpage/:id">
          <ProductPage></ProductPage>
        </Route>
        <Route path="/cart">
          <FinalCartPage></FinalCartPage>
        </Route>
        <Route path="/landing/:id">
          <CartPage></CartPage>
        </Route>
        <Route>Page Not Found</Route>
      </Switch>
    </div>
  );
}

export default App;
