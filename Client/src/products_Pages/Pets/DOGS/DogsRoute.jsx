import React from "react";
import { Routes, Route } from "react-router-dom";
import Beds from "./Beds/Beds";
import Food from "./Food/Food"; 
import Crates from "./Crates/Crates";
import Dnatest from "./DNA_tests/Dnatest";
import Leashes from "./Leashes/Leashes";
import Harnesses from "./Harnesses/Harnesses";
import Nailgrinders from "./Nail_Grinders/Nailgrinders";
const DogsRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/Beds" element={<Beds />} />
        <Route path="/Food" element={<Food/>} /> 
        <Route path="/Crates" element={<Crates/>} /> 
        <Route path="/Dna-test" element={<Dnatest />} />
        <Route path="/Leashes" element={<Leashes />} />
        <Route path="/Harnesses" element={<Harnesses />} />
        <Route path="/Nail-grinders" element={<Nailgrinders />} />
      </Routes>
    </>
  );
};

export default DogsRoute;
