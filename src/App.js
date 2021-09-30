import "./App.css";
import { CartPage } from "./Components/Cart/CartPage";
import { Login } from "./Components/Login/Login";
import { Navbar } from "./Components/Navbar/Navbar";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Route path="/login">
        <Login />
      </Route>

      <CartPage />
    </div>
  );
}

export default App;
