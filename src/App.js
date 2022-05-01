import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Layout/Header/Header';
import Home from './Pages/Home/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/header' element={<Header />} />
    </Routes>
  );
}

export default App;
