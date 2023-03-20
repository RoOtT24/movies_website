import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Card.module.css'

export const Card = () => {
  return (
    <div className={styles.card}>
  <Link to="/">
    <div className={styles.img1} />
    <div className={styles.img2} />
    <div className={styles.title}>VIKINGS series Season 1 || Epsoide 1</div>
    <div className={styles.text}>Now You can watch the first epsoide of the action series Vikings , wish you interesting watch</div>
  </Link><Link to="/"><div className={styles.catagory}>Series <i className="fas fa-film" /></div></Link>
  <Link to="/"><div className={styles.views}>20211  <i className="far fa-eye" /> </div></Link>
</div>

  )
}
