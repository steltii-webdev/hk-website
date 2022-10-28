import './App.css';
import { Routes,  Route } from "react-router-dom";

import Navbar from "./Components/Navbar"
import Header from "./Components/Header"
import Footer from './Components/Footer'

import Home from "./Pages/Home";
import About from "./Pages/About";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
      </Routes>
      <Footer />
    </div>
  )}