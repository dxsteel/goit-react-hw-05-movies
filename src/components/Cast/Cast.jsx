import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import noPhoto from '../../images/006-not-found.png';
import api from 'services/movieApi';
import styles from '../Cast/Cast.module.css';

export const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    api.fetchMoviesCast(movieId).then(data => setCast(data.cast));
  }, [movieId]);

  return (
    <div className={styles.cast}>
      <ul className={styles.castCard}>
        {cast &&
          cast.map(item => (
            <li className={styles.castCardPosition} key={item.id}>
              <img
                className={styles.castCardPositionImage}
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
                    : noPhoto
                }
                alt={item.name}
                width="150"
              />
              <h3>{item.name}</h3>
              <p>Character: {item.character}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Cast;
