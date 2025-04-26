import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";

function Home() {
  const[movies, setMovies] = useState([])
 
  useEffect(() =>{
          fetch("http://localhost:4000/movies")
          .then(r => r.json())
          .then(data => setMovies(data))
          .catch(error => console.error(error))
      }, [])

const moviecard = movies.map((movie)=>{
    return <MovieCard key={movie.id} id={movie.id} title={movie.title} links={movie.links}/>
  });




  return (
    <>
      <header>
        <NavBar/>
        <h1>Home Page </h1>
      </header>
      <main>
        {moviecard}
      </main>
    </>
  );
};

export default Home;

