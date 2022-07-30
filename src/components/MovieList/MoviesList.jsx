import { Link, useLocation } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import styles from './MoviesList.module.css';

const MoviesList = ({ videos }) => {
  const location = useLocation();
  return (
    <ul>
      {videos.map(video => (
        <li key={video.id}>
          <Link
            className={styles.itemText}
            to={`/movies/${video.id}`}
            state={{ from: location }}
          >
            {video.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default MoviesList;
