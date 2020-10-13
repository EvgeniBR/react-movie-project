import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Carousel from "react-elastic-carousel";

const Similar = (props) => {
  const [movieTitles, setMovieTitles] = useState([]);

  useEffect(() => {
    const searchMovies = async () => {
      const data = await axios.get(
        `https://api.themoviedb.org/3/movie/${props.id}/similar?api_key=cb2ac8f2c2a5c42ec3b900e7b6d2e67b&language=en-US&page=1`
      );

      const sideMovie = data.data.results.map((movie) => {
        return (
          <div className="similar-container" key={movie.id}>
            <div>
              <img
                className="carusel-poster"
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.id}
                onClick={() => handleClickOnTitle(movie.id)}
              />
            </div>
          </div>
        );
      });

      setMovieTitles(sideMovie);
    };

    searchMovies();
    // eslint-disable-next-line
  }, [props]);

  const handleClickOnTitle = (id) => {
    props.history.push(`/SingleMovie/${id}`);
  };

  const title1 = movieTitles[0];
  const title2 = movieTitles[1];
  const title3 = movieTitles[2];
  const title4 = movieTitles[3];
  const title5 = movieTitles[4];
  const title6 = movieTitles[5];
  const title7 = movieTitles[6];
  const title8 = movieTitles[7];
  const title9 = movieTitles[8];
  const title10 = movieTitles[9];
  const title11 = movieTitles[10];
  const title12 = movieTitles[11];
  const title13 = movieTitles[12];
  const title14 = movieTitles[13];
  const title15 = movieTitles[14];
  const title16 = movieTitles[15];
  const title17 = movieTitles[16];
  const title18 = movieTitles[17];
  const title19 = movieTitles[18];
  const title20 = movieTitles[19];

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 600, itemsToShow: 2 },
    { width: 800, itemsToShow: 4 },
    { width: 1100, itemsToShow: 5 },
  ];

  return (
    <div style={{background:'#131313'}}>
      <Carousel breakPoints={breakPoints}>
        <div className="carusel-poster">{title1}</div>
        <div className="carusel-poster">{title2}</div>
        <div className="carusel-poster">{title3}</div>
        <div className="carusel-poster">{title4}</div>
        <div className="carusel-poster">{title5}</div>
        <div className="carusel-poster">{title6}</div>
        <div className="carusel-poster">{title7}</div>
        <div className="carusel-poster">{title8}</div>
        <div className="carusel-poster">{title9}</div>
        <div className="carusel-poster">{title10}</div>
        <div className="carusel-poster">{title11}</div>
        <div className="carusel-poster">{title12}</div>
        <div className="carusel-poster">{title13}</div>
        <div className="carusel-poster">{title14}</div>
        <div className="carusel-poster">{title15}</div>
        <div className="carusel-poster">{title16}</div>
        <div className="carusel-poster">{title17}</div>
        <div className="carusel-poster">{title18}</div>
        <div className="carusel-poster">{title19}</div>
        <div className="carusel-poster">{title20}</div>
      </Carousel>
    </div>
  );
};

export default withRouter(Similar);
