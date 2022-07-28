import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from 'services/movieApi';
import styles from '../Reviews/Reviews.module.css';

export const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    api.fetchMoviesReviews(movieId).then(setReviews);
  }, [movieId]);
  return reviews && reviews.total_results === 0 ? (
    <p className={styles.reviewsContent}>
      We don't have any reviwers for this movie!
    </p>
  ) : (
    <ul className={styles.reviews}>
      {reviews &&
        reviews.results.map(review => (
          <li key={review.id}>
            <h3 className={styles.reviewsAuthor}>Author: {review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
    </ul>
  );
};

export default Reviews;
