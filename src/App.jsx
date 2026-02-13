import { HashRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/home";
import Shirt from "./pages/shirts";
import Tshirt from "./pages/tshirts";
import Hoodies from "./pages/hoodies";
import Sneaker from "./pages/sneaker";
import Shoes from "./pages/shoes";
import Highend from "./pages/highend";
import Navigation from "./pages/navigation";
import Connect from "./pages/footer";

function App() {
  return (
    <Router>
      <Navigation /> 
      
      <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shirts" element={<Shirt />} />
            <Route path="/tshirts" element={<Tshirt />} />
            <Route path="/hoodies" element={<Hoodies />} />
            <Route path="/sneakers" element={<Sneaker />} />
            <Route path="/shoes" element={<Shoes />} />
            <Route path="/highend" element={<Highend />} />
          </Routes>
      </div>

      <Connect />
    </Router>
  );
}

export default App;