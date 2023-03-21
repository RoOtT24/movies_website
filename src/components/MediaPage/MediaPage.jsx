import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import findMedia from '../../utils/findMedia'
import styles from './MediaPage.module.css'

export const MediaPage =() => {
    const [id,setId] = useState(localStorage.getItem('id')) // use params
    const [media_type,setMedia_type] = useState(localStorage.getItem('media_type')) // use params
    const [img1, setImg1] = useState(localStorage.getItem('img1'))
    const [img2, setImg2] = useState(localStorage.getItem('img2'))
    const [media, setMedia] = useState({})
    useEffect(() => {
        // localStorage.removeItem('id')
        // localStorage.removeItem('media_type')
        // localStorage.removeItem('img1')
        // localStorage.removeItem('img2')
        setMedia(findMedia(id,media_type));
    }, []);
    
  return (
    <div className={styles.movie_card}> 
  <div className={styles.container}>
    <Link to="/">
         <img src={img2} alt="media" className={styles.cover}/>
        </Link>
    <div className={styles.hero}><div className={styles.coverImage}>
    <img  src={img1} alt="cover"  /> 
    </div>
      <div className={styles.details}>
        <div className={styles.title1}>{media.original_title}
        {/* <span>PG-13</span> */}
        </div>
        {/* <div className={styles.title2}>The Battle of the Five Armies</div>     */}
        <fieldset className={styles.rating}>
          <input type={styles.radio} id="star5" name="rating" defaultValue={5} /><label className="full" htmlFor="star5" title="Awesome - 5 stars" />
          <input type={styles.radio} id="star4half" name="rating" defaultValue="4 and a half" /><label className="half" htmlFor="star4half" title="Pretty good - 4.5 stars" />
          <input type={styles.radio} id="star4" name="rating" defaultValue={4} defaultChecked /><label className="full" htmlFor="star4" title="Pretty good - 4 stars" />
          <input type={styles.radio} id="star3half" name="rating" defaultValue="3 and a half" /><label className="half" htmlFor="star3half" title="Meh - 3.5 stars" />
          <input type={styles.radio} id="star3" name="rating" defaultValue={3} /><label className="full" htmlFor="star3" title="Meh - 3 stars" />
          <input type={styles.radio} id="star2half" name="rating" defaultValue="2 and a half" /><label className="half" htmlFor="star2half" title="Kinda bad - 2.5 stars" />
          <input type={styles.radio} id="star2" name="rating" defaultValue={2} /><label className="full" htmlFor="star2" title="Kinda bad - 2 stars" />
          <input type={styles.radio} id="star1half" name="rating" defaultValue="1 and a half" /><label className="half" htmlFor="star1half" title="Meh - 1.5 stars" />
          <input type={styles.radio} id="star1" name="rating" defaultValue={1} /><label className="full" htmlFor="star1" title="Sucks big time - 1 star" />
          <input type={styles.radio} id="starhalf" name="rating" defaultValue="half" /><label className="half" htmlFor="starhalf" title="Sucks big time - 0.5 stars" />
        </fieldset>

        <span className={styles.likes}>109 likes</span>
      </div> {/* end details */}
    </div> {/* end hero */}
    <div className={styles.description}>
      <div className={styles.column1}>
        <span className={styles.tag}>action</span>
        <span className={styles.tag}>fantasy</span>
        <span className={styles.tag}>adventure</span>
      </div> {/* end column1 */}
      <div className={styles.column2}>
        <p>{media?.overview}</p>
        {/* <div className={styles.avatars}>
          <Link className={styles.link} to="/" data-tooltip="Person 1" data-placement="top">
            <img className={styles.imgMedia} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar1.png" alt="avatar1" />
          </Link>
          <Link className={styles.link} to="/" data-tooltip="Person 2" data-placement="top">
            <img className={styles.imgMedia} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar2.png" alt="avatar2" />
          </Link>
          <Link className={styles.link} to="/" data-tooltip="Person 3" data-placement="top">
            <img className={styles.imgMedia} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar3.png" alt="avatar3" />
          </Link>
        </div> end avatars */}
      </div> {/* end column2 */}
    </div> {/* end description */}
  </div> {/* end container */}
</div> 

  )
}
