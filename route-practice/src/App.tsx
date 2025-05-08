import { Routes, Route } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductLayout from "./pages/ProductLayout";
import ProductsList from "./pages/ProductsList";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<ProductLayout />}>
          <Route index element={<ProductsList />} />
          <Route path=":id" element={<ProductDetail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/products" element={<h1>products</h1>} /> */}
        {/* <Route path="/products/:id" element={<h1>product</h1>} /> */}
      </Routes>
    </>
  );
}

export default App;
