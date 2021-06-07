import axios from "axios";

const key = "d9938281c8a3e165d906b466f113d9c3";
const url = "https://api.themoviedb.org/3";

class ApiService {
  fetchTranding() {
    return axios
      .get(`${url}/trending/movie/day?api_key=${key}`)
      .then((response) => response.data.results);
  }

  fetchMovies(movieId) {
    return axios
      .get(`${url}/movie/${movieId}?api_key=${key}`)
      .then((response) => {
        const data = response.data;
        const backdrop_path = data.backdrop_path ? "https://image.tmdb.org/t/p/w500" + data.backdrop_path : data.backdrop_path;
        const poster_path = data.poster_path ? "https://image.tmdb.org/t/p/w500" + data.poster_path : data.poster_path;
        const Data = { ...data, backdrop_path, poster_path };
        return Data;
      });
  }

  fetchMovieCast(movieId) {
    return axios
      .get(`${url}/movie/${movieId}/credits?api_key=${key}`)
      .then((response) => {
        const data = response.data.cast;
        const Data = data.map((cast) => {
          const profile_path = cast.profile_path ? "https://image.tmdb.org/t/p/w500" + cast.profile_path : cast.profile_path;
          return { ...cast, profile_path };
        });

        return Data;
      });
  }

  fetchMovieReviews(movieId) {
    return axios
      .get(`${url}/movie/${movieId}/reviews?api_key=${key}`)
      .then((response) => response.data.results);
  }

  fetchSearchMovies(query) {
    return axios
      .get(`${url}/search/movie?api_key=${key}&query=${query}`)
      .then((response) => response.data.results);
  }
}

export default new ApiService();