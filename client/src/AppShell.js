import {useContext, useEffect} from 'react'
import { io } from "socket.io-client";
import Interceptor from "./utils/Interceptor";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
/* ------------------------------ Pages Imports ----------------------------- */
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import ProductSingle from "./pages/ProductSingle/ProductSingle";
import Category from "./pages/Category/Category";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Chat from "./pages/Chat/Chat";
import Configuration from './pages/Configuration/Configuration';

export default function AppShell() {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={isAuthenticated() ? <Products /> : <Home />}
          />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/product/:productId" element={<ProductSingle />} />
          <Route
            exact
            path="/products/category/:catId"
            element={<Category />}
          />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route
            exact
            path="/chat"
            element={isAuthenticated() ? <Chat /> : <Home />}
          />
          <Route
            exact
            path="/chat/:emailParam"
            element={isAuthenticated() ? <Chat /> : <Home />}
          />
          <Route exact path="/configuration" element={<Configuration />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}
