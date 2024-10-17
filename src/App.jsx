import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/home/Homepage";
import Pricing from "./pages/Pricing/Pricing";
import Product from "./pages/Product/Product";
import Login from "./pages/Login/Login";
import AppPage from "./pages/AppPage/AppPage";
import CitiesMenu from "./Components/CitiesMenu/CitiesMenu";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="product" element={<Product />} />
        <Route path="login" element={<Login />} />
        <Route path="appPage" element={<AppPage />}>
          <Route index element={<CitiesMenu />} />
          <Route path="cities" element={<CitiesMenu />} />
          <Route path="countries" element={<CitiesMenu />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
