import api from "../api/api";

export const searchMovies = async (query: string) => {
  if (!query || query.trim() === '') {
    throw new Error('Search cannot be empty');
  }

  try {
    const res = await api.get("", {
      params: {
        s: query.trim(),
      },
    });

    if (res.data.Response === 'False') {
      console.log('API reported: ', res.data.Error);
      return [];
    }

    return res.data.Search || [];
  } catch(error) {
    console.error('Failed to fetch the data: ', error);
    throw new Error('Failed to fetch movies. Please try again later');
  }

}