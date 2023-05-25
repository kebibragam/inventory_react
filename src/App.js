import React from "react";
import http from "./api/http-common";
// import auth from "./utils/auth";
//react router
import { Route, BrowserRouter, Routes } from "react-router-dom";

import "bootstrap/dist/js/bootstrap.js";
import "./custom.scss";
//pages
// import "bootstrap/dist/css/bootstrap.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Products from "./pages/Products";
import Customers from "./pages/Customers";
import Orders from "./pages/Orders";
import Users from "./pages/Users";
import RegisterUser from "./pages/RegisterUser";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";

import ProtectedRoute from "./pages/ProtectedRoute";
import { useGlobalContext } from "./context/AuthContext";

http.defaults.baseURL =
  process.env.REACT_APP_BASE_URL || "http://localhost:5000/api/v1";

function App() {
  const { user, isLoading } = useGlobalContext();
  if (isLoading) {
    return (
      <div className="position-absolute top-50 start-50 translate-middle">
        <div className="loader"></div>
      </div>
    );
  }
  return (
    <BrowserRouter>
      {user && <Navbar />}

      <Routes>
        {/* public */}
        <Route exact path="/login" element={<Login />} />
        {/* private */}
        <Route
          exact
          path="/register"
          element={
            <ProtectedRoute>
              <RegisterUser />
            </ProtectedRoute>
          }
        />

        <Route
          exact
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/products"
          element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/customers"
          element={
            <ProtectedRoute>
              <Customers />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/orders"
          element={
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/users"
          element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
