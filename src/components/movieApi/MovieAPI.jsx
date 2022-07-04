import React, { useEffect, useState } from "react";
import Image1 from '../images/3.jpg'
import '../movieApi/movieApi.css'
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Typography } from "@material-ui/core"

const MovieAPI = () => {
  const [movies, setMovies] = useState([
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg",
      Title: "Italian Spiderman",
      Type: "movie",
      Year: "2007",
      imdbID: "tt2705436",
    },
  ]);
  useEffect(() => {
    getMovieRequest();
  }, []);

  const getMovieRequest = async () => {
    const API_URL = "http://www.omdbapi.com/?s=star wars&apikey=5c1bdcf8";
    const response = await fetch(API_URL);
    const responseJson = await response.json();
    console.log(responseJson);
    setMovies(responseJson.Search);
  };


    return (
      <ImageList sx={{ width:1050}} cols={4}>
        {movies.map((movie) => (
          <ImageListItem key={movie.Poster}>
            <img
              src={movie.Poster}
              alt={movie.Title}
              loading="lazy"
            />
            <Typography variant ="h6">{movie.Type}</Typography>
          </ImageListItem>

        ))}

      </ImageList>
    );
   ;
};

export default MovieAPI;
