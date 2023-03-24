import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Recommended.module.css";
import { css } from 'glamor'
import axios from "axios";


export const Recommended = ({ recommended }) => { 
  const navigate = useNavigate()
  const w = recommended?.length? 800/recommended.length:0;
  const liStyle = css({
    width:w
  })

 
  return (
    <div className={styles.accordion}>
      <ul>
        {recommended?.map((media, index) => (
          <li {...liStyle} key={index} className={styles.li} onClick={async ()=>{
             const {data} = await axios.get(`https://api.themoviedb.org/3/${media.media_type}/${media.id}?api_key=d0cbf774321eda288e9defb5ec796daf&language=en-US`)
             localStorage.setItem('id',media.id);
             localStorage.setItem('media_type',media.media_type);
             localStorage.setItem('img1',`https://image.tmdb.org/t/p/w1280/${media.poster_path}`);
             localStorage.setItem('img2',`https://image.tmdb.org/t/p/w1280/${media.backdrop_path}`);
             navigate('/mediapage')
          }}>
            <div className={styles.image_title}>
              <Link className={styles.imgTitleLink}  name={media}>
                {media.original_title}
              </Link>
            </div>
            <Link className={styles.Link} >
              <img  media={media} 
                className={styles.recImg}
                src={`https://image.tmdb.org/t/p/w1280/${media.poster_path}`}
                alt={media.title}
                border={0}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
// https://bootsnipp.com/snippets/z8PZx
