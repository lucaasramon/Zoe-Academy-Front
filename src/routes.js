import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, SignIn } from "../src/app";
import CssBaseline from "@mui/material/CssBaseline";
import ResponsiveAppBar from "./app/home/header";
import Contact from "./app/contact/contact";

export default function Routers() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <ResponsiveAppBar />
      <Routes>
        <Route exact path="/" element={<SignIn />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
