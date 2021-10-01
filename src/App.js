// import "./App.css";
import { CartPage } from "./Components/Cart/CartPage";
import { Login } from "./Components/Login/Login";
import { Navbar } from "./Components/Navbar/Navbar";
import { HeroSec } from "./Components/Landing_Page_Sec/HeroSec";
import { NavLink, Route, Switch } from "react-router-dom";
import { Footer } from "./Components/Footer/Footer";
import { StaicLanding } from "./Components/Landing_Page_Sec/StaticData";
import { HrxWorkout } from "./Components/HrxWorkout";
import { ClassBooking } from "./Components/ClassBooking";
import PackCheckout from "./Components/packCheckout/PackCheckout";
import Cult from "./Components/cult/Cult";
import SubscriptionCard from "./Components/cult/SubscriptionCard";
import Timer from "./Components/cult/Timer";
import WorkoutGrid from "./Components/cult/WorkoutGrid";
import CultPacks from "./Components/cultPacks/CultPacks";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <HeroSec />
          <StaicLanding />
          <Footer />
        </Route>
        <Route exact path="/hrx">
          <Navbar />
          <HrxWorkout></HrxWorkout>
          <Footer></Footer>
        </Route>
        <Route exact path="/classbooking">
          <Navbar></Navbar>
          <ClassBooking></ClassBooking>
          <Footer></Footer>
        </Route>

        <Route exact path="/cult">
          <Navbar></Navbar>
          <Cult></Cult>
          <SubscriptionCard></SubscriptionCard>
          <Timer></Timer>
          <WorkoutGrid></WorkoutGrid>
          <Footer></Footer>
        </Route>

        <Route exact path="/cultpacks">
          <Navbar></Navbar>
          <CultPacks></CultPacks>
          <Footer></Footer>
        </Route>

        <Route exact path="/packcheckout">
          <Navbar></Navbar>
          <PackCheckout></PackCheckout>
          <Footer></Footer>
        </Route>

        <Route exact path="/cart">
          <Navbar></Navbar>
          <CartPage></CartPage>
          <Footer></Footer>
        </Route>
      </Switch>

      {/* <Route path="/login">
        <Login />
      </Route> */}

      {/* <CartPage /> */}
    </div>
  );
}

export default App;
