import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Cart from "./Pages/Cart";
import NotFound from "./Pages/NotFound";
import { useState } from "react";

function App() {
  const [cartProduct, setCartProduct] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home cartProduct={cartProduct} setCartProduct={setCartProduct} />
          }
        />
        <Route
          path="/profile"
          element={<Profile cartProduct={cartProduct} />}
        />
        <Route path="/cart" element={<Cart cartProduct={cartProduct} />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
