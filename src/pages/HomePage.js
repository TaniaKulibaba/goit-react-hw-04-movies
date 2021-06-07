import { Component } from "react";
import ApiService from "../services/ApiService";

import Container from "../components/Container";
import MoviesList from "../components/MoviesList";

class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    ApiService
      .fetchTranding()
      .then((movies) => {
        this.setState({ movies });
      })
  }

  render() {
    const { movies } = this.state;

    return (
      <Container>
        <h1>Tranding today</h1>
        <MoviesList movies={movies} />
      </Container>
    );
  }
}

export default HomePage;