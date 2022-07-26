import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import noPhoto from '../../images/006-not-found.png'
import api from "services/movieApi";

export const Cast = () => {
    const [cast, setCast] = useState(null);
    const { movieId } = useParams();

   useEffect(() => {
    api.fetchMoviesCast(movieId).then(data => setCast(data.cast));
    
  }, [movieId]);

    return (
    
        <div>
            <ul>
                {cast && cast.map(item => (
                    <li key={item.id} >
                        <img
              
                            src={
                                item.profile_path
                                    ? `https://image.tmdb.org/t/p/w300${item.profile_path}`
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
}

export default Cast;