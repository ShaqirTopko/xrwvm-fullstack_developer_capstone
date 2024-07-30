import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPanel from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<Register />} />
      {/* Mund të shtoni rrugë të tjera këtu për veçori të tjera të aplikacionit tuaj */}
    </Routes>
  );
}

export default App;
