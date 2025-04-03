import { searchMovies } from "../../data/repositories/movieRepository";

export const fetchMoviesUseCase = async (query : string) => {
  return await searchMovies(query);
}