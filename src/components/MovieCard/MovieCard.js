import styles from "./MovieCard.module.scss";

const MovieCard = ({ title, vote_average, overview, genres, poster_path }) => {
  const userScore = vote_average * 10;

  return (
    <div className={styles.movieCard}>
      <div className={styles.movieImageThumb}>
        <img
          className={styles.movieImage}
          src={poster_path}
          alt={poster_path ? `${title} poster` : "Poster not available"}
        />
      </div>
      <div className={styles.movieDescription}>
        <h3>{title}</h3>
        <p>{`User Score: ${userScore}%`}</p>
        <h4>Overview</h4>
        <p>{overview}</p>
        <h5>Genres</h5>
        <ul>
          {genres &&
            genres.map(({ id, name }) => {
              return (
                <li key={id}>
                  {name}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default MovieCard;