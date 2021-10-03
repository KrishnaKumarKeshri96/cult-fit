import "./App.css";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
// import { PrivateRoute } from "./Components/PrivateRoute/PrivateRoute";
=======
>>>>>>> d350fa8 (Added Cart)
=======
import Store from "./components/store/Store";
>>>>>>> 016fa68 (First commit)
=======
// import Store from "./components/store/Store";
import Cult from "./components/cult/Cult";
>>>>>>> 9e3320c (Cult-02 page added)

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
        <Route path="/cultstore">
          <Store />
        </Route>
        <Route path="/productpage/:id">
          <ProductPage></ProductPage>
        </Route>
        <Route path="/cart">
          <FinalCartPage></FinalCartPage>
        </Route>
<<<<<<< HEAD
        <Route path="/landing/:id">
          <CartPage></CartPage>
        </Route>
=======

>>>>>>> d350fa8 (Added Cart)
        <Route>Page Not Found</Route>
      </Switch>
=======
import { GoogleLogin } from "react-google-login";
import { useEffect, useState } from "react";
import { HrxWorkout } from "./Components/HrxWorkout";
import { Link, Route, Switch } from "react-router-dom";
import { ClassBooking } from "./Components/ClassBooking";

function App() {
  // const [token, setToken] = useState(localStorage.getItem("token"));

  // const [userData, setUserData] = useState();

  // useEffect(() => {
  //   getData(token);
  // }, []);

  // const getData = async (token) => {
  //   const res = await fetch("http://localhost:2222/users/api/v2/auth/google", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       token,
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const data = await res.json();
  //   setUserData(data);
  // };

  // const handleLogin = async (googleUser) => {
  //   const { tokenId } = googleUser;
  //   // console.log(tokenId);
  //   // console.log(googleUser);
  //   localStorage.setItem("token", { tokenId });

  //   const res = await fetch("http://localhost:2222/users/api/v2/auth/google", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       token: tokenId,
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const data = await res.json();
  //   console.log(data);
  // };

  // const getMe = async () => {
  //   const res = await fetch("http://localhost:2222/users/me");
  //   console.log(res.json());
  // };

  return (
    <div className="App">
<<<<<<< HEAD
<<<<<<< HEAD
      {/* <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Log in with Google"
        onSuccess={handleLogin}
        onFailure={handleLogin}
        cookiePolicy={"single_host_origin"}
      /> */}
      {/* <h1>Hello</h1> */}
      {/* <Switch>
        <Route exact path="">
          <h2>Home</h2>
          <Link to="/workout">workout</Link>
        </Route>
        <Route exact path="/workout">
          <h2>workout</h2>
          <HrxWorkout></HrxWorkout>
        </Route>
        <Route exact path="/workout/classbooking">
          <ClassBooking></ClassBooking>
        </Route>
        <Route>
          <h2>404 Error</h2>
        </Route>

      </Switch> */}

      <ClassBooking></ClassBooking>
>>>>>>> 27f1af8 (1st)
=======
      <Store />
>>>>>>> 016fa68 (First commit)
=======
      <Cult />
>>>>>>> 9e3320c (Cult-02 page added)
    </div>
  );
}

export default App;
