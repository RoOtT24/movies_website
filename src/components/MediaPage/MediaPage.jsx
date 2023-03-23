import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import findMedia from "../../utils/findMedia";
import { Recommended } from "../Recommended/Recommended";
//import findMedia from '../../utils/findMedia'
import styles from "./MediaPage.module.css";

export const MediaPage = () => {
  const [id, setId] = useState(localStorage.getItem("id")); // use params
  const [media_type, setMedia_type] = useState(
    localStorage.getItem("media_type")
  ); // use params
  const [img1, setImg1] = useState(localStorage.getItem("img1"));
  const [img2, setImg2] = useState(localStorage.getItem("img2"));
  const [media, setMedia] = useState({});

  useEffect(() => {
    findMedia(id, media_type).then((data) => setMedia(data));
  }, []);

  return (
    <div className={styles.movie_card}>
      <div className={styles.container}>
        <Link to="/" className={styles.mediaLink}>
          <div className={styles.img1Icon}>
            <div className={styles.icon}>
              {/* <i className="fa-light fa-circle-play fa-lg" /> */}

              <img
                src="/assets/img/play.png"
                alt="media"
                className={styles.img3}
              />
              <img src={img1} alt="media" className={styles.cover} />
            </div>
          </div>
        </Link>
        <div className={styles.hero}>
          <div className={styles.coverImage}>
            <img src={img2} alt="cover" />
          </div>
          <div className={styles.details}>
            <div className={styles.title1}>
              {media?.original_title
                ? media.original_title
                : media.original_name}
              
            </div>
            <div className={styles.title2}>{media?.tagline}</div>    

            {/* <span className={styles.likes}>109 likes</span> */}
          </div>{" "}
          {/* end details */}
        </div>{" "}
        {/* end hero */}
        <div className={styles.description}>
          <div className={styles.column1}>
            {media?.genres?.map((type, index) => (
              <span key={index} className={styles.tag}>
                {type.name}
              </span>
            ))}
          </div>{" "}
          {/* end column1 */}
          <div className={styles.column2}>
            <p>{media?.overview}</p>
         
          </div>{" "}
          {/* end column2 */}
        </div>{" "}
        {/* end description */}
      </div>{" "}
      {/* end container */}

      <Recommended/>
    </div>
  );
};
