import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/Login";
import Register from "./screens/Register";
import ForgotPassword from "./screens/ForgotPassword";

import { createTheme } from "@mui/material/styles";
import Review from "./screens/Review";
import ContactUs from "./screens/ContactUs";
import About from "./screens/AboutUs";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} exact></Route>
        <Route path="/login" element={<Login />} exact></Route>
        <Route path="/register" element={<Register />} exact></Route>
        <Route
          path="/reset-password"
          element={<ForgotPassword />}
          exact
        ></Route>

        <Route path="/about" element={<About />} exact></Route>
        <Route path="/contactUs" element={<ContactUs />} exact></Route>
        <Route path="/reviews" element={<Review />} exact></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
