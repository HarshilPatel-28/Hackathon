import React from "react";
import Navbar from "./components/Navbar.jsx";
import './Styles/Navbar.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCase from "./components/AddCase.jsx";
import Home from "./components/Home.jsx";
import CaseDetails from "./components/caseDetails.jsx";
import './Styles/AddCase.css'

function App() {
  return (
    <>
<Router>
    <Navbar/>

    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/addcase" element={<AddCase />}/>
    <Route path="/casedetails" element={<CaseDetails />}/>
    </Routes>
 

</Router>

    </>
  );
}

export default App;
