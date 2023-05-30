import React, { useEffect, useState } from 'react';
import './Banner.css';

import axios from '../../config/config';
import { IMAGE_URL } from '../../constants/constants';
import { Movie } from '../../models/MovieModel';
import { DiscoverModel } from "../../models/DiscoverModels";


const Banner:React.FC<DiscoverModel> = (props:DiscoverModel) => {
  const [banner, setBanner] = useState<Movie>();
  function getRandomInt(max: number): number {
   
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - 1 + 1)) + 1;
  }
  
  useEffect(() => {
    const randomNumber: number = getRandomInt(12);
    axios
      .get(props.url)
      .then((res) => {
        console.log(res.data.results[15]);
        setBanner(res.data.results[randomNumber]);
      });
  }, [props.url]);

  return (
    
<div style={{backgroundImage: `url(${IMAGE_URL}${banner?.backdrop_path})`}} className="banner">

      <div className="content">
        
         <h1 className="title">{banner?.original_title || banner?.name} </h1>
        <div className="banner-buttonss">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="description">
         {banner?.overview}
        </h1>
      </div>
      <div className="fade"></div>
    </div>
  );
};

export default Banner;
