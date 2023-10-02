import React from "react";
import Navbar from "./components/Navbar.jsx";
import './Styles/Navbar.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCase from "./components/AddCase.jsx";
import Home from "./components/Home.jsx";
import CaseDetails from "./components/CaseDetails.jsx";
import './Styles/AddCase.css'
import './Styles/Footer.css'
import Footer from "./components/Footer.jsx";

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
 <Footer/>

</Router>

    </>
  );
}

export default App;
