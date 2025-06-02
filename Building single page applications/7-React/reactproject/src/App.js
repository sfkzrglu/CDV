import './App.css';
import React, { useEffect, useState } from 'react'
import ProductList from './companents/ProductList';
import ProductDetails from './companents/ProductDetails';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then((result) => {
        setProducts(result.data.products)
      }).catch((err) => {
        console.log("Not able to fetch products");
      });
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/"
            element={<ProductList products={products} />} />
          <Route path="details/:id"
            element={<ProductDetails products={products} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
