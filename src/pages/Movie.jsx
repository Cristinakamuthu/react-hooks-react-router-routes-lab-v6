import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then((r) => r.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error("Error fetching movie:", error));
  }, [id]);

  if (!movie.title) return <p>imagine you can't see it but i can </p>


  return (
    <section>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>Time: {movie.time} minutes</p>
        <div>
          {movie.genres.map((genre, id) => (
            <span key={id}>{genre} </span>
          ))}
        </div>
      </main>
    </section>
  );
}

export default Movie;
