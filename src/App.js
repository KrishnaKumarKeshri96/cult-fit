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
import { LandingPage } from "./Components/Landing_Page_Sec/LandingPage/LandingPage";
import { GoogleLogin } from "react-google-login";
import { AppContext } from "./Contextxts/AppContext";
import { useContext } from "react";

function App() {
  const { handleLogin } = useContext(AppContext);
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <LandingPage></LandingPage>
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

        <Route exact path="/login">
          <Navbar></Navbar>
          <Login></Login>
          <Footer></Footer>
        </Route>

        <Route>
          <Navbar></Navbar>
          <div
            style={{
              marginTop: "200px",
              marginBottom: "300px",
              marginLeft: "5%",
            }}
          >
            <GoogleLogin
              // clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              clientId="755998271801-nnrchkokeh4u5ekiffuuprgec1lmmjca.apps.googleusercontent.com"
              buttonText="Log in with Google"
              onSuccess={handleLogin}
              onFailure={handleLogin}
              cookiePolicy={"single_host_origin"}
            />
            <h1>Oops...! It seems to be 404</h1>
          </div>
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
