import React from "react";
import { useState } from "react";
import { Card } from "../Common/Card/Card";
import Search from "../Common/Search/Search";

export const Home = ({ trending }) => {
  const [results, setResults] = useState(trending);
  return (
  <>
    <Search inputs={trending} setResults={setResults} text='search in trending' />
    <div className="d-flex justify-content-between flex-wrap">
      {results?.map((movie, index) => (
        <Card
          key={index}
          description={movie.overview}
          media_type={movie.media_type}
          title={movie.title}
          rating={movie.vote_average}
          img1={movie.poster_path}
          img2={movie.backdrop_path}
          id={movie.id}
        />
      ))}
    </div>
    </>
  );
};
