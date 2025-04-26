import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/actors")
      .then((r) => r.json())
      .then((data) => setActors(data))
      .catch((error) => console.error(error));
  }, []);

  const actorsnames = actors.map((actor) => (
    <article key={actor.id}>
      <h2>{actor.name}</h2>
      <ul>
        {actor.movies.map((movie, id) => (
          <li key={id}>{movie}</li>
        ))}
      </ul>
    </article>
  ));
  return (


    <>
      <header>
        <NavBar/>
        <h1>Actors Page</h1>
       
      </header>
      <main>
       {actorsnames}
      </main>
    </>
  );
};

export default Actors;
