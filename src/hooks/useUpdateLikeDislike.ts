import { Dispatch, SetStateAction, useState } from 'react';
import { ReviewType } from '../components/reviews/types/ReviewTypes';

interface UpdateProps {
  uri: string;
  reviewId: string;
  setReviews: Dispatch<SetStateAction<ReviewType[] | undefined>>;
}

export default function useUpdateLikeDislike() {
  const [errorMessage, setErrorMessage] = useState('');

  const update = async ({ uri, reviewId, setReviews }: UpdateProps) => {
    try {
      const res = await fetch(uri, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${document.cookie.split('=')[1]}`,
        },
        body: JSON.stringify({
          reviewId,
        }),
      });

      const updatedReview = await res.json();

      setReviews((prevState) => {
        return prevState?.map((state) => {
          if (state._id === updatedReview._id) {
            return {
              ...updatedReview,
            };
          } else {
            return state;
          }
        });
      });
    } catch (error) {
      setErrorMessage('Cannot update like/dislike state');
    }
  };

  return { update, errorMessage };
}
