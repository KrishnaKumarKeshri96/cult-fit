import "./App.css";
import { Switch, Route } from "react-router-dom";

import { LandingPage } from "./Components/Landing_Page_Sec/LandingPage/LandingPage";
import Store from "./Components/store/Store";
import { ProductPage } from "./Components/store/StoreProductPage";
import { CartPage } from "./Components/Cart/CartPage";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/cultstore">
          <Store />
        </Route>
        <Route path="/landing/:id">
          <CartPage></CartPage>
        </Route>
        <Route path="/productpage/:id">
          <ProductPage></ProductPage>
        </Route>
        <Route>Page Not Found</Route>
      </Switch>
    </div>
  );
}

export default App;
