import { Routes, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import Product from "./views/Product";
import Products from "./views/Products";

function App() {
  return (
    <div className="App">
      <h1>Min Webshop</h1>
      <Link to="/">home</Link>
      <Link to="/products">products</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
