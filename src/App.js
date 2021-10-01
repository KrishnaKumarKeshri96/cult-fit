import "./App.css";
// import { GoogleLogin } from "react-google-login";
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
      {/* <HrxWorkout></HrxWorkout> */}
    </div>
  );
}

export default App;
