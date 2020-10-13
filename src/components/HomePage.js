import React from "react";
import TopRated from "./TopRated";
import TrandingToday from "./TrandingToday";
import TrandingThisWeek from "./TrandingThisWeek";

class HomePage extends React.Component {
  render() {
    return (
    <div className="home-body">
    <div>
      <h2 >Top Rated:</h2>
      <TopRated />
    </div>
    <div>
      <h2 style={{color:`white`}}>Trending Today:</h2>
      <TrandingToday />
    </div>
    <div>
      <h2 style={{color:`white`}}>Trending This Week:</h2>
      <TrandingThisWeek />
    </div>
    </div>
    )
  }
}

export default HomePage;
