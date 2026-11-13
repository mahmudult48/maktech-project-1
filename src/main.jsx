
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";



import MainLayout from './Layout/MainLayout';

import Home from './pages/homepage/Home';
import Product from './pages/productpage/Product';

import Dashboard from './pages/dashboardpage/Dashboard';
import About from './pages/aboutpage/About';
import ThemeProvider from './context/ThemeContext';
import ProductDetails from './pages/productdetails/ProductDetails';


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,

    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/product",
        Component: Product,
      },
      {
        path: "/product/:id",
        Component: ProductDetails,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/dashboard",
        Component: Dashboard,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
