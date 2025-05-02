import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate
} from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Customers from "./components/Customers";
import SignUp from "./components/SignUp";
import Orders from "./components/Orders";
import Items from "./components/Items";
import SupplyManagement from "./components/SupplyManagement";
import Navbar from "./components/Navbar";
import UserNavbar from "./components/UserNavbar";
import User from "./components/User";

import "./assets/styles/style.css";
import './App.css';

function AppWrapper() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isUserPage = currentPath === "/user";
  const isSignupPage = currentPath === "/SignUp";

  return (
      <div className="App">
        {/* Conditional navbar rendering */}
        {isUserPage && <UserNavbar />}
        {!isUserPage && !isSignupPage && <Navbar />}

        <Routes>
          {/* Redirect root ("/") to /user */}
          <Route path="/" element={<Navigate to="/user" replace />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/items" element={<Items />} />
          <Route path="/supply-management" element={<SupplyManagement />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </div>
  );
}

function App() {
  return (
      <Router>
        <AppWrapper />
      </Router>
  );
}

export default App;
