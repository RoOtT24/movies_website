import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card } from '../Common/Card/Card';

export const Movies = () => {
  const [movie,setMovie] = useState([])
  const getmovie = async ()=> {
    const {data} = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=d0cbf774321eda288e9defb5ec796daf&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
    setMovie(data.results)
  }

  useEffect(() => {
   getmovie() 
  }, []);

  return (
    <div className='d-flex justify-content-between flex-wrap'>
 { movie?.map( (movie,index)=> 
   <Card key={index} description={movie.overview} media_type={movie.media_type} title={movie.title} rating={movie.vote_average} img1={movie.poster_path} img2={movie.backdrop_path} id={movie.id} /> 
   )}
    </div>
  )
}
