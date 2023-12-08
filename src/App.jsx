import { useState } from "react";
import "./App.css";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Category from "./Category";
import { Link } from "react-router-dom";
import SellItem from "./SellItem";
import SuccessSoldItem from "./SuccessSoldItem";
import Basket from "./Basket";
function App() {
  const [basket, setBasket] = useState([])

  return (
    <>
      <Header basket={basket} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<Category setBasket={setBasket} />} />
        <Route path="/sell-item" element={<SellItem />} />
        <Route path="/sell-item-success" element={<SuccessSoldItem />} />
        <Route
          path="/basket"
          element={<Basket setBasket={setBasket} basket={basket} />}
        />
      </Routes>
      <button className="sell-button">
        <Link to="/sell-item">Sell an Item!</Link>
      </button>
    </>
  );
}

export default App;
