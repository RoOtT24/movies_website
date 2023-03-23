import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import findMedia from "../../utils/findMedia";
import { Recommended } from "../Recommended/Recommended";
import { Rating } from "../Rating/Rating";
//import findMedia from '../../utils/findMedia'
import styles from "./MediaPage.module.css";
import findVideos from "../../utils/findVideos";
import { Trailer } from '../Common/Trailer/Trailer';

export const MediaPage = () => {
  const [id, setId] = useState(localStorage.getItem("id")); // use params
  const [media_type, setMedia_type] = useState(
    localStorage.getItem("media_type")
  ); // use params
  const [img1, setImg1] = useState(localStorage.getItem("img1"));
  const [img2, setImg2] = useState(localStorage.getItem("img2"));
  const [media, setMedia] = useState({});
  const [videos, setVideos] = useState({});
  const [trailer, setTrailer] = useState()
  const [hidden,setHidden] = useState(true)
  const findTrailer = (videos)=>{
    return videos.find( video => video.name.toLowerCase().includes('trailer') )
  }
  const onClick = (e)=> {
    console.log("Trailer = ",findTrailer(videos.results))
    const src = `https://www.youtube.com/embed/${findTrailer(videos.results).key}?showinfo=0`
    // console.log(src)
    // `https://www.youtube.com/embed/-TXtyYZIiWc?list=RDGMEM6ijAnFTG9nX1G-kbWBUCJAVM-TXtyYZIiWc`
    setTrailer(src)
    setHidden(!hidden)
  }

    // const onClick = async (e,id)=>{
    //   const {data} = await axios.get(`https://api.themoviedb.org/3/company/${e.target.id}?api_key=d0cbf774321eda288e9defb5ec796daf`)
    //   console.log(e.target.href)
    //   window.location.href=data.homepage?data.homepage:window.location.href
    // }

  useEffect(() => {
    findMedia(id, media_type).then((data) => setMedia(data));
    findVideos(id, media_type).then((data) => setVideos(data));
  }, []);
//  https://www.youtube.com/watch?v=6JnN1DmbqoU
  return (
    <div className={styles.movie_card}>
      <div className={styles.container}>
        <Trailer link={trailer} trailer1={styles.trailer1} trailer2={styles.trailer2} hidden={hidden} setHidden={setHidden} classStyle={styles.trailer1}/>
        <Link onClick={onClick} className={styles.mediaLink}>
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

            <span className={styles.likes}> <Rating /> </span>
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
       <div className="w-75">      
            <div className={styles.column2}>
            <p>{media?.overview}</p>
         
          </div>{" "}
          {/* end column2 */}
          {/* <div className="d-flex w-75 text-center ps-5">
            {media?.production_companies?.map( (company,index)=>
            <Link key={index} className='mx-3' role="button"><img src={`https://image.tmdb.org/t/p/w1280/${company.logo_path}`} alt={company.name} className={styles.company} onClick={onClick} id={company.id}/></Link>
            )}
            </div> */}

            </div>

            {/* end companies */}
        </div>{" "}
        {/* end description */}
      </div>{" "}
      {/* end container */}

      <Recommended/>
    </div>
  );
};
