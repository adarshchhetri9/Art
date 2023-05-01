import React from "react";
import { Routes, Route } from "react-router-dom";
import PageIndex from "./pages/PageIndex";
import LoginPage from "./pages/LoginPage";
import Layout from "./Layout";
import RegisterPage from "./pages/RegisterPage";
import axios from "axios";
import UsercontextProvider from "./components/Usercontext";
import AccountPage from "./pages/AccountPage";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

const App = () => {
  return (
    <>
      <UsercontextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<PageIndex />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/account/:subpage?" element={<AccountPage />} />
          </Route>
        </Routes>
      </UsercontextProvider>
    </>
  );
};

export default App;
