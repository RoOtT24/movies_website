import React from 'react'
import { Card } from '../Common/Card/Card'

export const Home = ({trending}) => {
  return (
    <div className='d-flex justify-content-between flex-wrap'>
   

 { trending?.map( (movie,index)=> 
   <Card key={index} description={movie.overview} media_type={movie.media_type} title={movie.title} rating={movie.vote_average} img1={movie.poster_path} img2={movie.backdrop_path} /> 
   )}
    </div>
  )
}
