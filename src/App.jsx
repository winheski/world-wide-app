import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/home/Homepage";
import Pricing from "./pages/Pricing/Pricing";
import Product from "./pages/Product/Product";
import Login from "./pages/Login/Login";
import AppPage from "./pages/AppPage/AppPage";
import CityList from "./Components/CitiesList/CityList";
import CountryList from "./Components/CountryList/CountryList";
import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState([]);
  useEffect(() => {
    try {
      setLoading(true);
      fetch("http://localhost:9000/cities")
        .then((res) => res.json())
        .then((data) => setCities(data));
    } catch (e) {
      console.log(e.message);
    } finally {
      setLoading(false);
    }
  }, []);
  const countries = cities.reduce((acc, city) => {
    if (!acc.map((item) => item.country).includes(city.country)) {
      return [...acc, { country: city.country, emoji: city.emoji }];
    } else {
      return acc;
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="product" element={<Product />} />
        <Route path="login" element={<Login />} />
        <Route path="appPage" element={<AppPage />}>
          <Route
            path="cities"
            element={<CityList cities={cities} isLoading={loading} />}
          />
          <Route
            path="countries"
            element={<CountryList countries={countries} isLoading={loading} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
