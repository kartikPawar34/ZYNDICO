import { HashRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Shirt from "./pages/Shirts";
import Tshirt from "./pages/Tshirts";
import Hoodies from "./pages/Hoodies";
import Sneaker from "./pages/Sneaker";
import Shoes from "./pages/Shoes";
import Highend from "./pages/Highend";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductPage from "./components/productpage.";
import ForgetPass from "./Authentication/froget";
import Registeruser from "./Authentication/register";
import Loginuser from "./Authentication/login";

function App() {
  return (
    <div className="main-content">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shirts" element={<Shirt />} />
        <Route path="/tshirts" element={<Tshirt />} />
        <Route path="/hoodies" element={<Hoodies />} />
        <Route path="/sneakers" element={<Sneaker />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/highend" element={<Highend />} />
        <Route path="/ProductPage" element={<ProductPage />} />
        <Route path="/Login" element={<Loginuser/>}/>
        <Route path="/Register" element={<Registeruser/>}/>
        <Route path="/ForgetPass" element={<ForgetPass/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;