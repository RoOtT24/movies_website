import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Register } from './components/Register/Register';
import { Home } from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { Login } from './components/Login/Login';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Loader } from './components/Loader/Loader';
import { MediaPage } from './components/MediaPage/MediaPage';
import { About } from './components/About/About';
import {ProtectedRoutes} from './components/ProtectedRoutes/ProtectedRoutes';
import cookie from "react-cookies";



function App() {
  const [trending, setTrending] = useState([])
  const [loading, setLoading] = useState(true)
  let [token,setToken] = useState(cookie.load('token'));

  const getMovies = async ()=> {
    const {data} = await axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=d0cbf774321eda288e9defb5ec796daf')
    setTrending(data.results);
    
  }

  useEffect(() => {
    getMovies();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
       <div>
        {
          loading ? <Loader/>
          : <>
          <Navbar setToken={setToken}/>
          <Routes>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/login" element={ <Login token={token} setToken={setToken}/> }></Route>
            <Route element={<ProtectedRoutes/>}>
            <Route path="/home" element={<Home trending={trending}/>}></Route>
            <Route path="/mediapage" element={<MediaPage/>}></Route>
            <Route path="/" element={<Home trending={trending}/>}></Route>
           
            <Route path="/about" element={ <About /> }></Route>
            </Route>
          </Routes></>
        }
      
       </div>
      
   
    
  );
}

export default App;
