import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Provider } from 'react-redux';

import store from "./redux/store";
import { CartProvider } from './context/CartContext';

// Layouts
import UserLayout from './components/Layout/UserLayout';
import AdminLayout from './components/Admin/AdminLayout';

// User Pages
import Home from "./pages/Home";
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import MyOrdersPage from './pages/MyOrdersPage';
import CollectionPage from './pages/CollectionPage';
import ProductDetails from './components/Products/ProductDetails';
import Checkout from './components/Cart/Checkout';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import OrderDetailsPage from './pages/OrderDetailsPage';
import ClientLogin from './pages/ClientLogin';


// Admin Pages
import AdminHomePage from './pages/Admin/AdminHomePage';
import ProductManagement from './pages/Admin/ProductManagement';
import EditProductPage from './pages/Admin/EditProductPage';
import OrderManagement from './components/Admin/OrderManagement';
import AdminShop from './pages/Admin/AdminShop';
import UserManagement from './pages/Admin/UserManagement';

export const App = () => {
  return (
    <Provider store={store}>
      <CartProvider>
        <BrowserRouter>
          <Toaster position="top-right" />
          <Routes>
            {/* User routes */}
            <Route path="/" element={<UserLayout />}>
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="profile" element={<Profile />} />
              <Route path="myorders" element={<MyOrdersPage />} />
              <Route path="collections/:collection" element={<CollectionPage />} />
              <Route path="product/:id" element={<ProductDetails />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="order-confirmation" element={<OrderConfirmationPage />} />
              <Route path="order/:id" element={<OrderDetailsPage />} />
              <Route path="/register-client" element={<ClientLogin />} />
            </Route>

            {/* Admin routes */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminHomePage />} />
              <Route path="products" element={<ProductManagement />} />
              <Route path="products/:id/edit" element={<EditProductPage />} />
              <Route path="orders" element={<OrderManagement />} />
              <Route path="shop" element={<AdminShop />} />
              <Route path="users" element={<UserManagement />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </Provider>
  );
};

export default App;