import { useEffect, useState } from 'react';
import { useParams, Link, useLocation, Outlet, Navigate } from 'react-router-dom';
 import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from 'services/movieApi';
  import Loader from 'components/Loader';



export const MoviesDetails = () => {
    const [info, setInfo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const location = useLocation();
    const { movieId } = useParams();
    const back = location?.state?.from ?? "/";

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
      <Link to={back}>
        <button type="button">
          Go back
        </button>
      </Link>
      {loading && <Loader />}
      {info && (
        <div>
          <img
            width="300px"
            src={'https://image.tmdb.org/t/p/w500' + info.poster_path}
            alt={info.original_title}
          />
          <div>
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
      <hr />
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast" state={{ from: back}}>Cast</Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: back}}>Reviews</Link>
          </li>
        </ul>
        <hr />
       <Outlet />
        <ToastContainer />
      </div>
        </div>
    )
}

export default MoviesDetails;