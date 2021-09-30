import "./App.css";
import { CartPage } from "./Components/Cart/CartPage";
import { Login } from "./Components/Login/Login";
import { Navbar } from "./Components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Login />

      <CartPage />
    </div>
  );
}

export default App;
