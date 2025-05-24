import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'sonner';

import UserLayout from './components/Layout/UserLayout';
import Home from "./pages/Home";
import AdminLayout from './components/Admin/AdminLayout';
import AdminHomePage from './pages/Admin/AdminHomePage';
import AdminProducts from './pages/Admin/AdminProducts';
import AdminShop from './pages/Admin/AdminShop';
import UserManagement from './pages/Admin/UserManagement';
import ProductManagement from './pages/Admin/ProductManagement';
import EditProductPage from './pages/Admin/EditProductPage';
import OrderManagement from './components/Admin/OrderManagement';

export const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        {/* User routes */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
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
  );
};

export default App;
