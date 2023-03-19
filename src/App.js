import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Register } from './components/Register/Register';
import { Home } from './components/Home/Home';

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/" element={<Home/>}></Route>
    </Routes>
  );
}

export default App;
