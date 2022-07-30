import { BsSearch } from 'react-icons/bs';
import api from 'services/movieApi';
import { useState, useEffect } from 'react';
import { useSearchParams, useLocation, Link } from 'react-router-dom';
import styles from './Movies.module.css';

const Movies = () => {
  const [searchedMovies, setSearchedMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams({});
  const queryMovie = searchParams.get('query');
  const location = useLocation();

  const handleSubmit = e => {
    e.preventDefault();
    const formInput = e.currentTarget;
    setSearchParams({
      query: e.target.elements.query.value.toLowerCase().trim(),
    });
    formInput.reset();
  };

  useEffect(() => {
    if (!queryMovie) {
      return;
    }
    
    queryMovie && api.fetchMoviesQuery(queryMovie).then(movie => setSearchedMovies(movie));
  }, [queryMovie]);


  return (
    <div>
      <form className={styles.formPosition} onSubmit={handleSubmit}>
        <input
          className={styles.formInput}
          type="text"
          name="query"
          autoFocus
        />
        <button className={styles.buttonFind} type="submit">
          <span>
            <BsSearch />
          </span>
        </button>
      </form>
      <div className={styles.search}>
        <ul>
          {searchedMovies &&
            searchedMovies.results.map(movie => (
              <li key={movie.id}>
                <Link
                  className={styles.searchItem}
                  to={`/movies/${movie.id}`}
                  state={{ from: location }}
                >
                  {movie.title}
                </Link>
              </li>
            ))}
          {searchedMovies && searchedMovies.total_results === 0 && (
            <p className={styles.searchAlert}>
              The film you're looking for can't be found
            </p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Movies;
