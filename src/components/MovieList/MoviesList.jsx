import { Link, useLocation } from "react-router-dom";
import { PropTypes } from "prop-types";

const MoviesList = ({ videos }) => {
    const location = useLocation();
    return (
        <ul>
            {videos.map(video => (<li key={video.id} >
                    <Link to={`/movies/${video.id}`} state={{ from: location }}>{video.title}</Link>
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
