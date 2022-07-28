import { useEffect, useState } from 'react';
import {
  useParams,
  Link,
  useLocation,
  Outlet,
  Navigate,
} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from 'services/movieApi';
import Loader from 'components/Loader';
import styles from './MoviesDetails.module.css';

export const MoviesDetails = () => {
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const { movieId } = useParams();
  const back = location?.state?.from ?? '/';

  useEffect(() => {
    const moviesDetails = async () => {
      setLoading(true);
      try {
        const data = await api.fetchMoviesDetails(movieId);
        setInfo(data);
      } catch (error) {
        setError(error.message);
        toast.error(`Page not found`);
      } finally {
        setLoading(false);
      }
    };
    moviesDetails();
  }, [movieId]);

  return (
    <div>
      {error && <Navigate to="/" />}
      <Link className={styles.button} to={back}>
        <button className={styles.buttonStyles} type="button">
          Go back
        </button>
      </Link>
      {loading && <Loader />}
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
        <ToastContainer />
      </div>
    </div>
  );
};

export default MoviesDetails;
