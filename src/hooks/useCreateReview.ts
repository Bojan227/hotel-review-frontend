import { useState, Dispatch, SetStateAction } from 'react';

export default function useCreateReview() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const createReview = async (
    text: string,
    hotelId: string,
    rating: number,
    setReviews: Dispatch<SetStateAction<any>>
  ) => {
    setIsLoading(true);
    try {
      const res = await fetch('http://localhost:3000/review/', {
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

      //   setReviews((prev) => [...prev, review]);
    } catch (err) {
      setError('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return { createReview, isLoading, error };
}
