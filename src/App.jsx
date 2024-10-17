import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/home/Homepage";
import Pricing from "./pages/Pricing/Pricing";
import Product from "./pages/Product/Product";
import Login from "./pages/Login/Login";
import AppPage from "./pages/AppPage/AppPage";
import CitiesMenu from "./Components/CitiesMenu/CitiesMenu";
import CityList from "./Components/CitiesList/CityList";
import CountryList from "./Components/CountryList/CountryList";

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
          <Route path="cities" element={<CityList />} />
          <Route path="countries" element={<CountryList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
