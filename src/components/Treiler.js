import React, { useState, useEffect } from "react";
import Youtube_API from "../api/Youtube_API";

const Treiler = ({movie}) => {
  const [video, setVideo] = useState();
 

  useEffect(  () => {

    const getTreiler = async () => {
      const response = await Youtube_API.get("/search", {
        params: {
          q: movie,
        },
      });
    
      setVideo(response);
      if(video){
   
      }
    };
    getTreiler();
    // eslint-disable-next-line
  },[movie]);


if(video){
  return (
    <div className="trailer">
      <iframe
        title="video-trailer"
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${video.data.items[0].id.videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        >

        </iframe>
    </div>
  );
  }else{
      return (
          <div>
              Loading
          </div>
      )
  }
};

export default Treiler;
