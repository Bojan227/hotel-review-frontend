import { useState } from 'react';
import { ReviewType } from '../components/reviews/types/ReviewTypes';

export default function useGetReviews() {
  const [reviews, setReviews] = useState<ReviewType[] | undefined>();
  const [errorMessage, setErrorMessage] = useState('');
  const getReviews = async (uri: string) => {
    try {
      const res = await fetch(uri);
      const data = await res.json();

      setReviews(data);
    } catch (error) {
      setErrorMessage('Cannot fetch data');
    }
  };
  return { getReviews, errorMessage, reviews, setReviews };
}
