import './App.css';
import Navbar from "./Components/Navbar"
import Footer from './Components/Footer'

import vent1 from './Images/vent1.png'

function App() {
  return (
    <div className="App">
      <Navbar />
      <img src={vent1} alt="Header" />
      <Footer />
    </div>
  );
}

export default App;
