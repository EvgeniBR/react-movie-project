import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./HomePage";
import axios from "axios";
import Header from "./Header";
import Popular from "./Popular";
import Latest from "./Latest";
import SingleMovie from './SingleMovie'
import '../Styles/Header.css'

const App = () => {
  const [popularResults, setPopularResults] = useState(null);
  const [latestResults, setLatestResults] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const searchTMDB = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=cb2ac8f2c2a5c42ec3b900e7b6d2e67b&language=en-US&page=${currentPage}`
      );
      setPopularResults(data);
    };
    searchTMDB();
  }, [currentPage]);

  useEffect(() => {
    const searchTMDB = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=cb2ac8f2c2a5c42ec3b900e7b6d2e67b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=${getThreeMonthAgo()}`
      );
      setLatestResults(data);
    };

    searchTMDB();
  }, []);
  

  const getThreeMonthAgo = () => {
    let getYear = new Date();
    getYear = getYear.getFullYear();
    let getMonth = new Date();
    getMonth = getMonth.getMonth() - 2;
    if (getMonth < 10) {
      let threeMonthAgo = `${getYear}-0${getMonth}-01`;
      
      return threeMonthAgo;
    } else {
      let threeMonthAgo = `${getYear}-${getMonth}-01`;
      return threeMonthAgo;
    }
  };
  

  const onPrevPageClick = () => {
    if (currentPage === 1) {
      return;
    } else {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  const onNextPageClick = () => {
    if (currentPage === 500) {
      return;
    } else {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
    }
  };
  const onGoToPage = (e) => {
    setCurrentPage(e)
    
  }
  return (
    <div className="body">
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/popular"
          render={(props) => (
            <Popular
              onPrevPageClick={onPrevPageClick}
              onNextPageClick={onNextPageClick}
              onGoToPage={onGoToPage}
              data={popularResults}
            />
          )}
        />
        <Route
          exact
          path="/latest"
          render={(props) => <Latest data={latestResults} />}
        />
        <Route exact path="/SingleMovie/:id" component={SingleMovie} />
      </BrowserRouter>
    </div>
  );
};

export default App;
