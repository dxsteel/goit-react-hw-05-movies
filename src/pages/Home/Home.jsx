import Loader from 'components/Loader';
import { useState, useEffect } from 'react';
import api from 'services/movieApi';
import MoviesList from 'components/MovieList/MoviesList';
import styles from '../Home/Home.module.css';

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      try {
        const { results } = await api.fetchTrendingMovies();
        setVideos(results);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, []);

  return (
    <div>
      <h2 className={styles.homePosition}>Trending today</h2>
      {loading && <Loader />}
      <div className={styles.homeItem}>
        {videos && <MoviesList videos={videos} />}
      </div>
    </div>
  );
};

export default Home;
