import React, { useEffect, useState } from "react";
import "./RowPost.css";
import YouTube from "react-youtube";

import axios from "../../config/config";
import { IMAGE_URL, API_KEY } from "../../constants/constants";
import { Originals } from "../../models/MovieModel";
import { DiscoverModel } from "../../models/DiscoverModels";
import { iframeType } from "../../models/YoutubeModels";

const RowPost: React.FC<DiscoverModel> = (props: DiscoverModel) => {
  const [movie, setMovie] = useState<Originals[]>([]);
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    axios
      .get(props.url)
      .then((res) => {
        console.log(res);
        setMovie(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.url]);

  const options: iframeType = {
    height: '390',
    width: '100%',
    playerVars: {
      
      autoplay: 1
    }
  } as const;

  const handleMovieTrailor = (id: number) => {
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        console.log(res.data);
        if (res.data.results.length > 0) {
          setUrl(res.data.results[0].key);
        }
      });
  };

  return (
    <div className="row">
      <h2 style={{ marginTop: "20px" }}>{props.title}</h2>
      <div className="posters">
        {movie.map((item) => (
          <img
            onClick={() => handleMovieTrailor(item.id)}
            key={item.name}
            className={props.isSmall ? "poster" : "small-poster"}
            src={IMAGE_URL + item?.backdrop_path}
            alt="poster"
          />
        ))}
      </div>
     { url && <YouTube videoId={url} opts={options} /> }
    </div>
  );
};

export default RowPost;
