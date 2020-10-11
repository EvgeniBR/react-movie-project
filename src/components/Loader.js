import React from "react";
import  "../Styles/Loader.css";

const Loader = () => {
  return (
      <div className="body-loader">
    <div className="loader">
	<div className="loader__container">
		<div className="loader__film">
			<img className="loader__film-img" src="https://www.dropbox.com/s/o4p5i3nfw92rhfz/film.png?raw=1" alt="" />
			<img className="loader__film-img" src="https://www.dropbox.com/s/o4p5i3nfw92rhfz/film.png?raw=1" alt="" />
		</div>
		<img className="loader__camera" src="https://www.dropbox.com/s/348z6yvtt9hbos2/camera.png?raw=1" alt="" />
	</div>
</div>
</div>
  );
};

export default Loader;
