import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import findMedia from "../../utils/findMedia";
import { Rating } from "../Rating/Rating";
import styles from "./MediaPage.module.css";
import findVideos from "../../utils/findVideos";
import { Trailer } from "../Common/Trailer/Trailer";
import { Card } from "../Common/Card/Card";

export const MediaPage = () => {
  ////////////////////////////////////////
  // variables
  const { id } = useParams(); // use params
  const arr = window.location.href.split("/");
  const media_type = arr[arr.length - 1];
  const [media, setMedia] = useState({});
  const [videos, setVideos] = useState({});
  const [trailer, setTrailer] = useState();
  const [hidden, setHidden] = useState(true);
  const [recommendations, setRecommendations] = useState([]);
  ///////////////////////////////////////////////////////////////////////

  // functions
  const findTrailer = (videos) => {
    return videos.find((video) => video.name.toLowerCase().includes("trailer"));
  };
  const onClick = (e) => {
    const src = `https://www.youtube.com/embed/${
      findTrailer(videos.results).key
    }?showinfo=0`;
    setTrailer(src);
    setHidden(!hidden);
  };


  const getRecommended = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/recommendations?api_key=d0cbf774321eda288e9defb5ec796daf&language=en-US&page=1`
    );
    setRecommendations(data.results);
  };
  useEffect(() => {
    setRecommendations([]);
    findMedia(id, media_type).then((data) => setMedia(data));
    findVideos(id, media_type).then((data) => setVideos(data));
    getRecommended();
  }, [id, media_type]);
  //  https://www.youtube.com/watch?v=6JnN1DmbqoU
  return (
    <div className={styles.movie_card}>
      <div className={styles.container}>
        <Trailer
          link={trailer}
          trailer1={styles.trailer1}
          trailer2={styles.trailer2}
          hidden={hidden}
          setHidden={setHidden}
          classStyle={styles.trailer1}
        />
        <Link onClick={onClick} className={styles.mediaLink}>
          <div className={styles.img1Icon}>
            <div className={styles.icon}>
              <img
                src="/assets/img/play.png"
                alt="media"
                className={styles.img3}
              />
              <img
                src={media?.poster_path?`https://image.tmdb.org/t/p/w1280/${media?.poster_path}`:'/assets/img/movie1.jpg'}
                alt="media"
                className={styles.cover}
              />
            </div>
          </div>
        </Link>
        <div className={styles.hero}>
          <div className={styles.coverImage}>
            <img
              src={media.backdrop_path?`https://image.tmdb.org/t/p/w1280/${media?.backdrop_path}`:'/assets/img/movie2.jpg'}
              alt="cover"
            />
          </div>
          <div className={styles.details}>
            <div className={styles.details1}>
              <div className={styles.title1}>
                {media?.original_title
                  ? media.original_title
                  : media.original_name? media.original_name : 'Movie Name'}
              </div>
              <div className={styles.title2}>
                <div className={styles.title2_text}>{media?.tagline}</div>

                <div className={styles.vote}>
                  <Rating id={media.id} media_type={media_type} />
                </div>
              </div>
            </div> {/* end details 1 */}
           <div className={styles.details2}><span className={styles.voteAvarageText}>
                  {media.vote_average? parseFloat(parseInt(media.vote_average * 100, 10)) / 10 : '? '}%
                <i className={`fa-solid fa-star ${styles.i}`} /></span></div> {/* end details 2 */}
          </div>
          {/* end details */}
        </div>
        {/* end hero */}
        <div className={styles.description}>
          <div className={styles.column1}>
            {media?.genres?.map((gen, index) => (
              <span key={index} className={styles.tag}>
                {gen.name}
              </span>
            ))}
          </div>
          {/* end column1 */}
            <div className={styles.column2}>
              <p>
                {media?.overview? media.overview : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, expedita iste dicta eos atque adipisci laborum quos, dolorum illum soluta accusantium id a consequuntur doloribus velit ea quasi, dolorem assumenda.'}
              </p>
          </div>{/* end column2 */}
        </div>
        {/* end description */}
      </div>
      {/* end container */}
      {recommendations.length ? (
        <>
          {" "}
          <h2 className="w-1 text-center mt-5 bg-danger">Recommendations</h2>
          <div className="d-flex justify-content-between flex-wrap">
            {recommendations?.map((movie, index) => {
              return (
                <Card
                  key={index}
                  media_type={movie.media_type}
                  id={movie.id}
                />
              );
            })}
          </div>
        </>
      ) : (
        ""
      )}

    </div>
  );
};
