import { Component } from "react";
import ApiService from "../../services/ApiService";

class Reviews extends Component {
  state = { reviews: [] };

  componentDidMount() {
    const { match } = this.props;
    const movieId = match.params.movieId;

    ApiService
      .fetchMovieReviews(movieId)
      .then((reviews) => {
        this.setState({ reviews });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { reviews } = this.state;

    if (reviews.length === 0)
      return <p>No reviws</p>;

    return (
      <ul>
        {reviews.length > 0 &&
          reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h3>{`Author: ${author}`}</h3>
                <p>{content}</p>
              </li>
            );
          })}
      </ul>
    );
  }
}

export default Reviews;
