import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  useOutletContext
} from 'react-router-dom';
import App from './App';
import ProductDetails from './companents/ProductDetails';
import ProductList from './companents/ProductList';

// Wrappers to get products from Outlet context
function ProductListWrapper() {
  const { products } = useOutletContext();
  return <ProductList products={products} />;
}
function ProductDetailsWrapper() {
  const { products } = useOutletContext();
  return <ProductDetails products={products} />;
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // App provides products via context
    children: [
      { path: '', element: <ProductListWrapper /> },
      { path: 'details/:id', element: <ProductDetailsWrapper /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


