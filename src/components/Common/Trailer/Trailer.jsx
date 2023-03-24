import React, { useEffect, useState } from 'react'
import styles from '../../MediaPage/MediaPage.module.css'
export const Trailer = ({link, hidden}) => {
  const [shown, setShown] = useState(false)
    const onClick = ()=>{
      setShown(false)
    }
    useEffect(() => {
      // hidden?classStyle=trailer1:classStyle=trailer2
      setShown(!hidden)
    }, [hidden]);
  return (
    <>
    <button onClick={onClick} className='position-absolute bg-light' style={shown?{zIndex : 3,right : 40+'%',top : 0+"rem", borderRadius:25+'%', fontSize:3+'rem'}:{display : 'none'}}><i className="fa-solid fa-circle-xmark"></i></button>
    <iframe className={shown?styles.trailer2:styles.trailer1} width={942} height={500} src={link} title="Trailer"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;" allowFullScreen  />
</>
  )
}