import { useState, useEffect } from 'react';
import api from 'services/movieApi';
import MoviesList from 'components/MovieList/MoviesList';
import styles from './Home.module.css';

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    api.fetchTrendingMovies().then(data => setVideos(data.results));
  }, []);

  return (
    <div>
      <h2 className={styles.homePosition}>Trending today</h2>
      <div className={styles.homeItem}>
        {videos && <MoviesList videos={videos} />}
      </div>
    </div>
  );
};

export default Home;
