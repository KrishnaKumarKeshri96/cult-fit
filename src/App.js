import "./App.css";
import { Switch, Route } from "react-router-dom";
import Cult from "./Components/cult/Cult";
import CultPacks from "./Components/cultPacks/CultPacks";
import PackCheckout from "./Components/packCheckout/PackCheckout";
import { LandingPage } from "./Components/Landing_Page_Sec/LandingPage/LandingPage";
// import Store from "./Components/store/Store";
// import { ProductPage } from "./Components/store/StoreProductPage";
// import { CartPage } from "./Components/Cart/CartPage";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
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
