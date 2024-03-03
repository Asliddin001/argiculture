import { Route, Routes } from "react-router-dom";
import { About, Home, Shop, ShopSingle } from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop-single" element={<ShopSingle />} />
      </Routes>
    </>
  );
}

export default App;
