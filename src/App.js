import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./container/home/home";
import Dashboard from "./container/dashboard/dashboard";
import List from "./container/list/list";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/list" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
