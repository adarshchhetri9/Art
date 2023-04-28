import React from "react";
import { Routes, Route } from "react-router-dom";
import PageIndex from "./pages/PageIndex";
import LoginPage from "./pages/LoginPage";
import Layout from "./Layout";
import RegisterPage from "./pages/RegisterPage";
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:4000'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PageIndex />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
