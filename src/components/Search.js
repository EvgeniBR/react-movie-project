import React, { useEffect, useState } from "react";
import axios from "axios";
import {  withRouter } from "react-router-dom";
import '../Styles/Style.css'


const Search = (props) => {
  const [searchResults, setSearchResults] = useState("");
  const [movieTitles, setMovieTitles] = useState([]);

  useEffect(() => {
    const searchMovies = async () => {
      const data = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=cb2ac8f2c2a5c42ec3b900e7b6d2e67b&language=en-US&query=${searchResults}&page=1&include_adult=false`
      );
      console.log(data);
      const sideMovie = data.data.results.slice(0 ,5).map((movie) => {
        return (
          <div className="search-container" key={movie.id}>
            <div className="search-result" onClick={()=>handleClickOnTitle(movie.id)}>
             <span className="poster-span"><img alt={movie.title} className="search-poster" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} /></span> 
             <span className="title-span">{movie.title}</span> 
             <span className="rating-span"> <i className="fas fa-star"></i>{movie.vote_average}</span> 
              </div>
          </div>
        );
      });

      setMovieTitles(sideMovie);
    };

    searchMovies();
    // eslint-disable-next-line
  }, [searchResults ]);

const handleClickOnTitle = (id) =>{
  console.log(props);
  props.history.push(`/SingleMovie/${id}`);
  setSearchResults("")
  setMovieTitles([])
}

  const onInputChange = (event) => {
    setSearchResults(event.target.value);
  };

  return (
    <div>
      <div className="search-div">
        <label htmlFor="search">Search:</label>
        <input 
          className="search-input"
          value={searchResults}
          onChange={(e) => onInputChange(e)}
          type="text"
        />
      </div>
      <div className="search-render-container">
      <div className="search-render-results" style={{position:`absolute`}}>{movieTitles}</div>
      </div>
    </div>
  );
};

export default withRouter(Search);
