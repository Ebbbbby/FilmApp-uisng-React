import React, {useEffect} from 'react'
import Navbar from '../navbar/Navbar'
import MovieAPI from '../movieApi/MovieAPI';

//5c1bdcf8

const Mainpage = () => {


  return (
    <section>
      <Navbar />
      <MovieAPI/>
    </section>
  );
}

export default Mainpage