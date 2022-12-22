import { Routes,  Route } from "react-router-dom";

import Home from "./Pages/Home";
import Contact from "./Pages/Contact";

import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      <Footer/>
    </div>
  );
}