import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        {/* <Route path='*' element={<Home />} /> */}
      </Routes>
      {/* <Route
        path='/checkout/:checkoutId'
        element={
          <RequireAuth>
            <Checkout />
          </RequireAuth>
        }
      /> */}
      <Footer />
    </>
  );
}

export default App;
