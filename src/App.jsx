import { Route, Routes } from "react-router-dom";
import { About, Home, Shop, ShopSingle } from "./pages";
import { Footer, Navbar } from "./components";

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop-single/:productId" element={<ShopSingle />} />
      </Routes>
      <Footer />
    </>
  );
};
