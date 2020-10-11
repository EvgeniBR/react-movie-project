import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";
import Vibrant from "node-vibrant";
import "../Styles/SimgleMovie.css";
import Treiler from "./Treiler";
import Similar from "./Similar";

const SingleMovie = (props) => {
  const [mySuperObject, setMySuperObject] = useState();
  const [colors, setColors] = useState();
  const [counter, setCounter] = useState();

  useEffect(() => {
    
  });

  useEffect(() => {
    const searchMovie = async () => {
      const tmdbData = await axios.get(
        `https://api.themoviedb.org/3/movie/${getTmdbID()}?api_key=cb2ac8f2c2a5c42ec3b900e7b6d2e67b&language=en-US`
      );
      const imdbID = tmdbData.data.imdb_id;
      const omdbData = await axios.get(
        `https://www.omdbapi.com/?i=${imdbID}&apikey=aed67fe2`
      );

      if (omdbData.data.Ratings.length > 2 ) {
        const myMovieObject = {
          poster: `${omdbData.data.Poster.slice(0, -7)}1200.jpg`,
          title: omdbData.data.Title,
          runtime: omdbData.data.Runtime,
          genre: omdbData.data.Genre,
          director: omdbData.data.Director,
          actors: omdbData.data.Actors,
          released: omdbData.data.Released,
          plot: omdbData.data.Plot,
          homePage: tmdbData.data.homepage,
          imdbRating: omdbData.data.imdbRating,
          imdb: omdbData.data.Ratings[0].Value,
          rotten: omdbData.data.Ratings[1].Value,
          metacritic: omdbData.data.Ratings[2].Value,
          id: tmdbData.data.id,
        };
        setMySuperObject(myMovieObject);
        
        if (myMovieObject) {
          Vibrant.from(myMovieObject.poster)
            .getPalette()
            .then((palette) => setColors(palette));
        } else {
          
          setCounter(counter + 1);
        }
      } else {
        const myMovieObject = {
          poster: `${omdbData.data.Poster.slice(0, -7)}1200.jpg`,
          title: omdbData.data.Title,
          runtime: omdbData.data.Runtime,
          genre: omdbData.data.Genre,
          director: omdbData.data.Director,
          actors: omdbData.data.Actors,
          released: omdbData.data.Released,
          plot: omdbData.data.Plot,
          homePage: tmdbData.data.homepage,
          imdbRating: omdbData.data.imdbRating,
          imdb: omdbData.data.imdbRating,
          rotten: `Not Rated Yet`,
          metacritic: `Not Rated Yet`,
          id: tmdbData.data.id,
        };
        setMySuperObject(myMovieObject);
        

        if (myMovieObject) {
          Vibrant.from(myMovieObject.poster)
            .getPalette()
            .then((palette) => setColors(palette));
        } else {
          ;
          setCounter(counter + 1);
        }
      }

     
    };
    searchMovie();
    // eslint-disable-next-line
  }, [props.match.params.id]);

  

 

  const getTmdbID = () => {
    const tmdbID = props.match.params.id;
    return tmdbID;
  };

  //   component render to screen

  if (!mySuperObject || !colors) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div>
    <div
      className="singleMovieContainer"
      style={{
        background: `rgb(${colors.DarkMuted._rgb[0]},${colors.DarkMuted._rgb[1]},${colors.DarkMuted._rgb[2]})`,
      }}
    >
      <div className="poster-holder">
        <a
          rel="noopener noreferrer"
          href={mySuperObject.homePage}
          target="_blank"
        >
          <img src={mySuperObject.poster} alt={mySuperObject.homePage}></img>
        </a>
      </div>
      <div className="data-holder">
        <div className="all-data">
          <div
            className="data-title"
            style={{
              color: `rgb(${colors.Vibrant._rgb[0]},${colors.Vibrant._rgb[1]},${colors.Vibrant._rgb[2]})`,
            }}
          >
            {mySuperObject.title}
            <span> ,{mySuperObject.runtime}</span>
          </div>
          <div
            className="data-director"
            style={{
              color: `rgb(${colors.Muted._rgb[0]},${colors.Muted._rgb[1]},${colors.Muted._rgb[2]})`,
            }}
          >
            {mySuperObject.director}
          </div>
          <div
            className="data-genre"
            style={{
              color: `rgb(${colors.Muted._rgb[0]},${colors.Muted._rgb[1]},${colors.Muted._rgb[2]})`,
            }}
          >
            {mySuperObject.genre}
          </div>
          <div
            className="data-actors"
            style={{
              color: `rgb(${colors.Vibrant._rgb[0]},${colors.DarkVibrant._rgb[1]},${colors.DarkVibrant._rgb[2]})`,
            }}
          >
            {mySuperObject.actors}
          </div>
        <hr/>
          <div
            className="data-plot"
            style={{
              color: `rgb(${colors.LightVibrant._rgb[0]},${colors.LightVibrant._rgb[1]},${colors.LightVibrant._rgb[2]})`,
            }}
          >
            {mySuperObject.plot}
            <br/>
            <br/>
            <br/>
            {mySuperObject.released}
          </div>
        </div>
        <div className="rating_trailer">
          <div className="rating ">
            <div className="rating__rotten">
              <img
                alt="rotten"
                src={require("../img/rot.png")}
                className="rating__rotten__logo"
              ></img>
              <div className="rating__rotten__data">
              Rotten Tomatoes Rating: {mySuperObject.rotten}</div>
            </div>
            <div className="rating__metacritic">
              <img
                alt="metacritic"
                src={require("../img/meta.png")}
                className="rating__metacritic__logo"
              ></img>
              <div className="rating__metacritic__data">
              Metacritic Rating:{mySuperObject.metacritic}
              </div>
            </div>
            <div className="rating__imdb">
              <img
                alt="imdb"
                src={require("../img/imdb.png")}
                className="rating__imdb__logo"
              ></img>
              <div className="rating__imdb__data">
              Internet Movie Database Rating: {mySuperObject.imdb}</div>
            </div>
          </div>
          <div className="trailer">
            <Treiler movie={`${mySuperObject.title} official trailer`} />
          </div>
        </div>
      </div>
     
    </div>
    <Similar id={mySuperObject.id} />
    </div>
  );
};

export default SingleMovie;
