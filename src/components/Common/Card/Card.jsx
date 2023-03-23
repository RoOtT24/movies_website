// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Card.module.css'

export const Card = ({description, title, rating, media_type, img1, img2, id}) => {
const navigate = useNavigate()
const [media,setMedia] = useState()
    const onClick = async (e) => {
      
        const {data} = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=d0cbf774321eda288e9defb5ec796daf&language=en-US`)
        setMedia(data)
        localStorage.setItem('id',id);
        localStorage.setItem('media_type',media_type);
        localStorage.setItem('img1',`https://image.tmdb.org/t/p/w1280/${img1}`);
        localStorage.setItem('img2',`https://image.tmdb.org/t/p/w1280/${img2}`);
        navigate('/mediapage')
    }

  return (
    <div className={styles.card}>
  <Link to="/" onClick={onClick}>
    
        <img src={`https://image.tmdb.org/t/p/w1280/${img1}`} alt={title} className={styles.img1}/>
        <img src={`https://image.tmdb.org/t/p/w1280/${img2}`} alt={title} className={styles.img2}/>
    
    <div className={styles.img2} />
    <div className={styles.title}>{title}</div>
    <div className={styles.text}>{description}</div>
  </Link><Link to="/"><div className={styles.catagory}>{media_type} <i className="fas fa-film" /></div></Link>
  <Link to="/"><div className={styles.views}> {rating}  <i className="fa-solid fa-star"/> </div></Link>
</div>

  )
}
