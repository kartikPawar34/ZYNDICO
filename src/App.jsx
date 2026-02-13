import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Highend from "./pages/highend";
import Home from "./pages/home";
import Hoodies from "./pages/hoodies";
import Sneaker from "./pages/sneaker";
import Connect from "./pages/footer";
import Shirt from "./pages/shirts";
import Tshirt from "./pages/tshirts";
import Shoes from "./pages/shoes";
import Navigation from "./pages/navigation";

function App() {
  return (
    <Router>
      <Navigation/> 
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shirts" element={<Shirt />} />
        <Route path="/tshirts" element={<Tshirt />} />
        <Route path="/hoodies" element={<Hoodies />} />
        <Route path="/sneakers" element={<Sneaker />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/highend" element={<Highend />} />
      </Routes>

      <Connect />
    </Router>
  );
}
export default App;