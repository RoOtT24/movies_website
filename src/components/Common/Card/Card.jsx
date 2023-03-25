// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import findMedia from "../../../utils/findMedia";
import styles from "./Card.module.css";

export const Card = ({
  media_type,
  id,
}) => {
  const navigate = useNavigate();
  const [media, setMedia] = useState();



  const onClick = async (e) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=d0cbf774321eda288e9defb5ec796daf&language=en-US`
    );
    setMedia(data);
    // localStorage.setItem("id", id);
    // localStorage.setItem("media_type", media_type);
    navigate(`/mediapage/${id}/${media_type}`);
  }

  useEffect(() => {
    findMedia(
      id,
      media_type
    ).then((data) => setMedia(data));
  }, []);

  return (
    <div className={styles.card}>
      <Link onClick={onClick}>
        <img
          src={`https://image.tmdb.org/t/p/w1280/${media?.poster_path}`}
          alt={media?.title}
          className={styles.img1}
        />
        <img
          src={`https://image.tmdb.org/t/p/w1280/${media?.backdrop_path}`}
          alt={media?.title}
          className={styles.img2}
        />

        <div className={styles.img2} />
        <div className={styles.title}>{media?.title}</div>
        <div className={styles.text}>{media?.overview}</div>
      </Link>
      <Link onClick={onClick}>
        <div className={styles.catagory}>
          {media_type} <i className="fas fa-film" />
        </div>
      </Link>
      <Link onClick={onClick}>
        <div className={styles.views}>
          {" "}
          {media?.vote_average} <i className="fa-solid fa-star" />{" "}
        </div>
      </Link>
    </div>
  );
};
