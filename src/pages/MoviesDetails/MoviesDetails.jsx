import { useEffect, useState } from 'react';
import { useParams, Link, useLocation, Outlet } from 'react-router-dom';
import api from 'services/movieApi';
import styles from './MoviesDetails.module.css';

const MoviesDetails = () => {
  const [info, setInfo] = useState(null);
  const location = useLocation();
  const { movieId } = useParams();
  const back = location?.state?.from ?? '/';

  useEffect(() => {
    api.fetchMoviesDetails(movieId).then(data => setInfo(data));
  }, [movieId]);

  return (
    <div>
      <Link className={styles.button} to={back}>
        <button className={styles.buttonStyles} type="button">
          Go back
        </button>
      </Link>
      {info && (
        <div className={styles.card}>
          <img
            width="300px"
            src={'https://image.tmdb.org/t/p/w500' + info.poster_path}
            alt={info.original_title}
          />
          <div className={styles.cardInfo}>
            <h1>
              {info.title} ({info.release_date.slice(0, 4)})
            </h1>
            <p>User score: {info.vote_average * 10}%</p>
            <h2>Overview</h2>
            <p>{info.overview}</p>
            <h2>Genres</h2>
            <ul>
              {info.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <div className={styles.additionalStyle}>
        <h3 className={styles.additional}>Additional information</h3>
        <ul>
          <li>
            <Link
              className={styles.additionalCr}
              to="cast"
              state={{ from: back }}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              className={styles.additionalCr}
              to="reviews"
              state={{ from: back }}
            >
              Reviews
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default MoviesDetails;
