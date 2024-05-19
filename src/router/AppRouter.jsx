import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import PrivateRouter from "./PrivateRouter";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import NotFound from "../pages/NotFound";
import About from "../pages/About";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dashboard" element={<PrivateRouter />}>
          <Route path="" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path=":title" element={<ProductDetail />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRouter;
