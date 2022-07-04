import React, { useEffect, useState } from "react";
import Image1 from '../images/3.jpg'
import '../movieApi/movieApi.css'

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

  return movies.map((movie) => {
    return (
      <div className="movie__container">
        <div className="single__movie">
          <div className="movie">
            <img src={Image1} alt="" />
          </div>
        </div>
      </div>
    );
  });
};

export default MovieAPI;
