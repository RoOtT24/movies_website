import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Register } from './components/Register/Register';
import { Home } from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const getMovies = async ()=> {
    const {data} = await axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=d0cbf774321eda288e9defb5ec796daf')
    console.log(data)
  }
  
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
    <Navbar/>
    <Routes>
     
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/" element={<Home/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
