import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Register } from './components/Register/Register';
import { Home } from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { Login } from './components/Login/Login';
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {
  const [trending, setTrending] = useState([])

  const getMovies = async ()=> {
    const {data} = await axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=d0cbf774321eda288e9defb5ec796daf')
    setTrending(data.results);
    console.log(data.results[5])
  }
  
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
    <Navbar/>
    <Routes>
     
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/home" element={<Home trending={trending}/>}></Route>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={ <Login/> }></Route>
    </Routes>
    </div>
  );
}

export default App;
