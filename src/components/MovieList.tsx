import { useEffect, useState } from "react"
import { fetchMoviesUseCase } from "../domain/usecases/getMovies";
import SearchBar from "./molecules/search-bar/SearchBar";

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("Batman");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchMoviesUseCase(search);
        setMovies(data);
        console.log(data);
      } catch (error){
        console.error("Error fetching movies: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [search]);

  if (loading) return <p> Loading...</p>
  
  return (
    <div>
    <SearchBar value={search} onChange={(e) => setSearch(e.target.value)}/> 
    {
      loading ? (
        <p> Loading ...</p>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie.imdbID} className="p-2 border-b">
              <img src={movie.Poster} alt={movie.Title} className="w-20 h-auto" />
              {movie.Title} ({movie.Year})
            </li>
          ))}
        </ul>
      )
    }
    </div>
  )
}

export default MovieList;