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
         
          media_type={movie.media_type}
         
          id={movie.id}
        />
      ))}
    </div>
    </>
  );
};
