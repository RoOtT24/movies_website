import React from 'react'
import { Card } from '../Common/Card/Card'

export const Home = ({trending}) => {
  return (
    <div className='d-flex justify-content-between flex-wrap'>
   
  <h1>بعرف انها فاضية ، انتي اشتغلي الي عليكيي وانطزي</h1>

 {/* { trending.map( (movie,index)=> 
   <Card key={index} description={movie.overview} media_type={movie.media_type} title={movie.title} rating={movie.vote_average} img1={movie.poster_path} /> 
   )} */}
    </div>
  )
}
