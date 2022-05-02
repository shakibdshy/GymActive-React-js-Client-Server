import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./Components/Blog/Blog";
import BlogItem from "./Components/Blog/BlogItem";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/inventory' element={<Blog />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:title' element={<BlogItem />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
