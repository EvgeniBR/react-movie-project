import React, { useState, useEffect } from "react";

import "../Styles/Popular.css";
import { Link } from "react-router-dom";

const Popular = ({ data, onNextPageClick, onPrevPageClick, onGoToPage }) => {
  const [posters, setPosters] = useState();

  const nextPageHandle = () => {
    onNextPageClick();
    console.log(`hi`);
  };
  const prevPageHandle = () => {
    onPrevPageClick();
    console.log(`hi`);
  };
  //   const goToPage = (e) => {
  //     onGoToPage(e);
  //     console.log(e);
  //   };

  useEffect(() => {
    if (typeof data === "object" && data !== null) {
      
      const popularArray = data.results.map((popular) => {
        return (
          <div className="movie-poster" key={popular.id}>
            <Link to={`./SingleMovie/${popular.id}`}>
              <img
                className="poster"
                src={`https://image.tmdb.org/t/p/original${popular.poster_path}`}
                alt={popular.id}
              />
                 <Link className="movie-info" to={`./SingleMovie/${popular.id}`}>
              <h4>
                {popular.title} <i className="fas fa-star"></i>{popular.vote_average}<i className="fas fa-star"></i>
              </h4>
              <p>{popular.overview}</p>
            </Link>
            </Link>
         
          </div>
        );
      });
      setPosters(popularArray);
    } else {
      console.log(`to soon`);
    }

    
  }, [data]);

  return (
    <div>
      <div className="nav-container">
      <button className="nav-btn" onClick={prevPageHandle}>&lt;&lt;</button>
   
      <button className="nav-btn" onClick={nextPageHandle}>&gt;&gt;</button>
      </div>
      <div className="popular-container">{posters}</div>


<div className="nav-container">
      <button className="nav-btn" onClick={prevPageHandle}>&lt;&lt;</button>
   
      <button className="nav-btn" onClick={nextPageHandle}>&gt;&gt;</button>
      </div>
    </div>
  );
};

export default Popular;
