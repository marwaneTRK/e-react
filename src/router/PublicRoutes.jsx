import { Route, Routes } from "react-router-dom";
import ProductDetailsPage from "../pages/public/ProductDetailsPage";
import HomePage from "../pages/public/HomePage";

export default function PublicRoutes() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="products/:id/details" element={<ProductDetailsPage />} />
    </Routes>
  );
}
