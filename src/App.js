import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import Blog from "./Pages/Blog/Blog";
import BlogItem from "./Pages/Blog/BlogItem";
import Home from "./Pages/Home/Home";
import Inventory from "./Pages/Inventory/Inventory";
import InventoryDetails from "./Pages/InventoryDetails/InventoryDetails";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/inventory' element={<Inventory />} />
        <Route path='/inventory/:id' element={<InventoryDetails />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:title' element={<BlogItem />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
