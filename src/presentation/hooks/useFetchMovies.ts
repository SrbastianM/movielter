import { useEffect, useState } from "react";
import { fetchMoviesUseCase } from "../../domain/usecases/getMovies";

interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

interface UseFetchSearchMovieProps {
  initialSearch?: string;
}

export function useFetchSearchMovie({initialSearch = ""} : UseFetchSearchMovieProps = {}) : [Movie[], boolean, string, React.Dispatch<React.SetStateAction<string>>, string | null] {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(initialSearch);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if(!search.trim()) {
      setMovies([]);
      setLoading(false);
    }

    const timer = setTimeout(() => {
      fetchData();
    }, 500)
    
    return () => clearTimeout(timer);
  }, [search]);

  const fetchData = async () => {
    try{
      setLoading(true);
      setError(null);
      const data = await fetchMoviesUseCase(search);
      setMovies(data);
    } catch (error) {
      console.error("Error searching movies: ", error)
      setMovies([]);
    } finally {
      setLoading(false);
    }
  }
  return [
    movies,
    loading,
    search,
    setSearch,
    error
  ]
}