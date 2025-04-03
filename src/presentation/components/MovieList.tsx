import SearchBar from "./molecules/search-bar/SearchBar";
import Card from "./molecules/card/Card";
import { useFetchSearchMovie } from "../hooks/useFetchMovies";

const MovieList: React.FC = () => {
  const [movies, loading, search, setSearch, error] = useFetchSearchMovie({initialSearch:''});

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  return (
    <div>
    <SearchBar value={search} onChange={handleSearchChange}/> 
    {error && <p className="text-red-500 text-center my-5">{error}</p>}
    {
      loading ? (
        <p> Loading ...</p>
      ) : (
        <>
          {movies.length > 0 ? (
            <ul className="grid grid-cols-2 gap-4">
            {movies.map((movie) => (
              <Card key={movie.imdbID} title={movie.Title} description={movie.Year} imageSrc={movie.Poster} />
            ))
            }
          </ul>
          ) : (
            <p className="text-center my-4">
              {search.trim() ? "No Movies Found. Try Different search." : "Enter a movie title"}
            </p>
        )}
        </>
      ) 
    }
    </div>
  )
}

export default MovieList;