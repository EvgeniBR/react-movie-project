import React, { useState, useEffect } from "react";
import "../Styles/Popular.css";
import { Link } from "react-router-dom";

const Popular = ({ data ,onNextPageClick, onPrevPageClick, }) => {
  const [posters, setPosters] = useState();

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

    console.log(data);
  }, [data]);
  const nextPageHandle = () => {
    onNextPageClick();
    
  };
  const prevPageHandle = () => {
    onPrevPageClick();
    
  };


  return(
    <div>
      <div className="popular-container">{posters}</div>
      <button onClick={prevPageHandle}>&lt;&lt;</button>
   
      <button onClick={nextPageHandle}>&gt;&gt;</button>
    </div>
  )
}

export default Popular;
