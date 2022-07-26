import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from 'services/movieApi';


export const Reviews = () => {

    const [reviews, setReviews] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        api.fetchMoviesReviews(movieId).then(setReviews);
    }, [movieId]);
    return reviews && reviews.total === 0 ? (
        <p>We don't have any reviwers for this movie</p>
    ) : (
        <ul>
            {reviews &&
                reviews.results.map(review => (
                    <li key={review.id}>
                        <p >Author: {review.author}</p>
                        <p >{review.content}</p>
                    </li>
                ))}
        </ul>
    );
}

export default Reviews;