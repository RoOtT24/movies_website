import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Card.module.css'

export const Card = ({description, title, rating, media_type, img1}) => {
  return (
    <div className={styles.card}>
  <Link to="/">
    <div className={styles.img1} >
        <img src={img1} alt={title} />
    </div>
    <div className={styles.img2} />
    <div className={styles.title}>{title}</div>
    <div className={styles.text}>{description}</div>
  </Link><Link to="/"><div className={styles.catagory}>{media_type} <i className="fas fa-film" /></div></Link>
  <Link to="/"><div className={styles.views}> {rating}  <i className="fa-solid fa-star"/> </div></Link>
</div>

  )
}
