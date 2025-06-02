import './App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Outlet } from 'react-router-dom';

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
      {/* Provide products to child routes via context */}
      <Outlet context={{ products }} />
    </div>
  );
}

export default App;
