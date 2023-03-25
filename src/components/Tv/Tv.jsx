import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "../Common/Card/Card";
import { Loader } from "../Loader/Loader";
import Search from "../Common/Search/Search";


export const Tv = () => {
  const [loading, setLoading] = useState(true);
  const [tv, setTv] = useState([]);
  const [results, setResults] = useState();
  const getTv = async () => {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/discover/tv?api_key=d0cbf774321eda288e9defb5ec796daf&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
    );
    setTv(data.results);
    setResults(data.results)
  };

  useEffect(() => {
    getTv();
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
        <Search inputs={tv} setResults={setResults} text='search in tv'/>
        <div className="d-flex justify-content-between flex-wrap">
          {results?.map((movie, index) => (
            <Card
              key={index}
              description={movie.overview}
              media_type='tv'
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
