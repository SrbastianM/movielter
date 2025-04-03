import { useEffect, useState } from "react"
import { fetchMoviesUseCase } from "../domain/usecases/getMovies";
import SearchBar from "./molecules/search-bar/SearchBar";
import Card from "./molecules/card/Card";

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect( () => {
    const timer = setTimeout(() => {
      fetchData();
    }, 500)
    return () => clearTimeout(timer);
  }, [search]);

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
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  if (loading) return <p> Loading...</p>

  return (
    <div>
    <SearchBar value={search} onChange={handleSearchChange}/> 
    {
      loading ? (
        <p> Loading ...</p>
      ) : (
        <ul>
          {movies.map((movie) => (
            <Card title={movie.Title} description={movie.Year} imageSrc={movie.Poster} />
          ))
          }
        </ul>
      )
    }
    </div>
  )
}

export default MovieList;