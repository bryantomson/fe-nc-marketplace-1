import { useState } from "react";
import "./App.css";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Category from "./Category";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<Category />} />
          
      
     
      </Routes>
    </>
  );
}

export default App;
