import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import { ProductData } from "./data/data";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products products={ProductData} />} />
        <Route path="/products/:productId" element={<ProductDetails products={ProductData} />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
