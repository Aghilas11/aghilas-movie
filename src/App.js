import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserLIst from "./pages/UserLIst";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coup-de-coeur" element={<UserLIst />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
