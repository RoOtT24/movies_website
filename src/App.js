import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Register } from './components/Register/Register';
import { Home } from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { Login } from './components/Login/Login';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Loader } from './components/Loader/Loader';



function App() {
  const [trending, setTrending] = useState([])
  const [loading, setLoading] = useState(true)

  const getMovies = async ()=> {
    const {data} = await axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=d0cbf774321eda288e9defb5ec796daf')
    setTrending(data.results);
    console.log(data.results[5])
  }

  useEffect(() => {
    getMovies();
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
       <div>
        {
          loading ? <Loader/>
          : <>
          <Navbar/>
          <Routes>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/home" element={<Home trending={trending}/>}></Route>
            <Route path="/" element={<Home trending={trending}/>}></Route>
            <Route path="/login" element={ <Login/> }></Route>
          </Routes></>
        }
      
       </div>
      
   
    
  );
}

export default App;
