import React from "react";
import People from "../pages/People";
import Planets from "../pages/Planets";
import All from "../pages/All";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import PlanetDesc from "../pages/PlanetDesc";
import PeopleDesc from "../pages/PeopleDesc";

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<All />} />
          <Route path="people/*" element={<People />} />
          <Route path="people/:id" element={<PeopleDesc />} />
          <Route path="planets/*" element={<Planets />} />
          <Route path="planets/:id" element={<PlanetDesc />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
