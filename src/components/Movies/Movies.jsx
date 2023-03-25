import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "../Common/Card/Card";
import { Loader } from "../Loader/Loader";
import Search from "../Common/Search/Search";

export const Movies = () => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [results, setResults] = useState();
  const getMovie = async () => {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?api_key=d0cbf774321eda288e9defb5ec796daf&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
    );
     setMovie(data.results)
     setResults(data.results)
  };

  useEffect(() => {
    getMovie();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Search inputs={movie} setResults={setResults} text='search in movies'/>
        <div className="d-flex justify-content-between flex-wrap">
          {results?.map((movie, index) => (
            <Card
              key={index}
              description={movie.overview}
              media_type='movie'
              title={movie.title}
              rating={movie.vote_average}
              img1={movie.poster_path}
              img2={movie.backdrop_path}
              id={movie.id}
            />
          ))}
        </div>
        </div>
      )}
    </>
  );
};
