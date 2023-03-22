import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

  const findMedia = async (id, media_type) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=d0cbf774321eda288e9defb5ec796daf&language=en-US`
    );console.log(data)
    // console.log("myData===>",data)
    return data;
  };

  useEffect(() => {
    findMedia(id, media_type).then((data) => setMedia(data));
  }, []);

  return (
    <div className={styles.movie_card}>
      <div className={styles.container}>
        <Link to="/" className={styles.mediaLink}>
          <div className={styles.img1Icon}>
            <div className={styles.icon}>
              <i className="fa-light fa-circle-play fa-lg" />
            
            
            <img src='/assets/img/play.png' alt="media" className={styles.img3} />
            <img src={img1} alt="media" className={styles.cover} /></div>
          </div>
        </Link>
        <div className={styles.hero}>
          <div className={styles.coverImage}>
            <img src={img2} alt="cover" />
          </div>
          <div className={styles.details}>
            <div className={styles.title1}>
              {media.original_name}
              {/* <span>PG-13</span> */}
            </div>
            {/* <div className={styles.title2}>The Battle of the Five Armies</div>     */}
            <fieldset className={styles.rating}>
              <input
                type='radio'
                id="star5"
                name="rating"
                defaultValue={5}
              />
             
              <label
                className={styles.half}
                htmlFor="star4half"
                title="Awesome - 5 stars"
              />
              <input
                type='radio'
                id="star4"
                name="rating"
                defaultValue={4}
                defaultChecked
              />
              <label
                className="full"
                htmlFor="star4"
                title="Pretty good - 4 stars"
              />
              <input
                type='radio'
                id="star4"
                name="rating"
                defaultValue={4}
                defaultChecked

              />
              <label
                className={styles.half}
                htmlFor="star4"
                title="Pretty good - 4 stars"
              />
              <input
                type='radio'
                id="star3"
                name="rating"
                defaultValue={3}
              />
              <label className="full" htmlFor="star3" title="good - 3 stars" />
              <input
                type={styles.radio}
                id="star3"
                name="rating"
                defaultValue={3}
              />
              <label
                className={styles.half}
                htmlFor="star3"
                title="good - 3 stars"
              />
              <input
                type={styles.radio}
                id="star2"
                name="rating"
                defaultValue={2}
              />
              <label
                className="full"
                htmlFor="star2"
                title="not bad - 2 stars"
              />
              <input
                type={styles.radio}
                id="star2"
                name="rating"
                defaultValue={2}
              />
              <label
                className={styles.half}
                htmlFor="star2"
                title="not bad -2 stars"
              />
              <input
                type={styles.radio}
                id="star1"
                name="rating"
                defaultValue={1}
              />
              <label
                className="full"
                htmlFor="star1"
                title="poor - 1 star"
              />
              <input
                type={styles.radio}
                id="star1"
                name="rating"
                defaultValue={1}
              />
              <label
                className={styles.half}
                htmlFor="star1"
                title="poor - 1 stars"
              />
            </fieldset>

            {/* <span className={styles.likes}>109 likes</span> */}
          </div>{" "}
          {/* end details */}
        </div>{" "}
        {/* end hero */}
        <div className={styles.description}>
          <div className={styles.column1}>
           {media?.genres?.map( (type,index)=> <span key={index} className={styles.tag}>{type.name}</span> )} 
            
          </div>{" "}
          {/* end column1 */}
          <div className={styles.column2}>
            <p>{media?.overview}</p>


            <div className={styles.avatars}>
        {
        media?.media_type === 'tv'? media.seasons.map( (season , index)=> 
         <Link key={index} className={styles.link} to="/" data-tooltip="Person 1" data-placement="top">  
            <img className={styles.imgMedia} src={`https://image.tmdb.org/t/p/w1280/${season.poster_path}`} alt={season.name}/>
          </Link> ):  <Link className={styles.link} to="/" data-tooltip="Person 1" data-placement="top">
            <img className={styles.imgMedia} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar1.png" alt="avatar1" />
          </Link>}
          <Link className={styles.link} to="/" data-tooltip="Person 1" data-placement="top">
            <img className={styles.imgMedia} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar1.png" alt="avatar1" />
          </Link>
        </div> {/* end avatars */}
        
          </div>{" "}
          {/* end column2 */}
        </div>{" "}
        {/* end description */}
      </div>{" "}
      {/* end container */}
    </div>
  );
};
