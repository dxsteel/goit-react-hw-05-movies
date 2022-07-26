
 import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { BsSearch } from 'react-icons/bs';
import Loader from "components/Loader";
import api from 'services/movieApi';
import { useState, useEffect } from "react";
import { useSearchParams, useLocation, Link } from "react-router-dom";
import MoviesList from 'components/MovieList/MoviesList';


export const Movies = () => {
    const [searchMovies, setSearchMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams({});
    const queryM = searchParams.get('query');
  const location = useLocation();
  
      const handleSubmit = e => {
        e.preventDefault();
        const formInput = e.currentTarget;
        setSearchParams({ query: e.target.elements.query.value.toLowerCase().trim() });
        formInput.reset();
    };

        useEffect(() => {
      if (!queryM) return ;
      {
        const onSearchMovie = async () => {
          setLoading(true);
          try {
            const { searchMovie } = await api.fetchMoviesQuery(queryM);
            setSearchMovies(searchMovie);
          } catch (error) {
            toast.error(`The film you're lookink for can't be found`);
          } finally {
            setLoading(false);
          }
        };
        onSearchMovie();
      }
    }, [queryM]);





    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="query" autoFocus />
          <button type="submit">
          <span>
            <BsSearch />
          </span>
        </button>
        </form>
        <Link to={location?.state?.from ?? '/movie'}></Link>
        {loading && <Loader />}
        {searchMovies && <MoviesList videos={searchMovies}/>}  
        </div>
    )
}

export default Movies;