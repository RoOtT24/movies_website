import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Register } from './components/Register/Register';
import { Home } from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { Login } from './components/Login/Login';



function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
     
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={ <Login/> }></Route>
    </Routes>
    </div>
  );
}

export default App;
