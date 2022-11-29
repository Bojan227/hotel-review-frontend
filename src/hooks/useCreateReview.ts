import { useState, Dispatch, SetStateAction } from 'react';
import { ReviewType } from '../components/reviews/types/ReviewTypes';

export default function useCreateReview() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const createReview = async (
    text: string,
    hotelId: string | undefined,
    rating: number,
    setReviews: Dispatch<SetStateAction<ReviewType[] | undefined>>
  ) => {
    setIsLoading(true);
    try {
      const res = await fetch('https://hotel-review-api.onrender.com/review/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${document.cookie.split('=')[1]}`,
        },
        body: JSON.stringify({
          text,
          hotelId,
          rating,
        }),
      });

      const review = await res.json();
      setReviews((prev) => [...prev!, review]);
    } catch (err) {
      setError('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return { createReview, isLoading, error };
}
