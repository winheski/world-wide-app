import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/home/Homepage";
import Pricing from "./pages/Pricing/Pricing";
import Product from "./pages/Product/Product";
import Login from "./pages/Login/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
