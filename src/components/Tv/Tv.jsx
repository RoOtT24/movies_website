import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card } from '../Common/Card/Card';

export const Tv = () => {
  const [tv,setTv] = useState([])
  const getTv = async ()=> {
    const {data} = await axios.get('https://api.themoviedb.org/3/discover/tv?api_key=d0cbf774321eda288e9defb5ec796daf&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
    setTv(data.results)
  }

  useEffect(() => {
   getTv() 
  }, []);

  return (
    <div className='d-flex justify-content-between flex-wrap'>
 { tv?.map( (movie,index)=> 
   <Card key={index} description={movie.overview} media_type={movie.media_type} title={movie.title} rating={movie.vote_average} img1={movie.poster_path} img2={movie.backdrop_path} id={movie.id} /> 
   )}
    </div>
  )
}
