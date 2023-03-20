// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Card.module.css'

export const Card = ({description, title, rating, media_type, img1, img2}) => {

    const onClick = () => {

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
