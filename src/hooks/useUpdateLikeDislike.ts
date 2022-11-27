import { Dispatch, SetStateAction, useState } from 'react';

interface UpdateProps {
  uri: string;
  reviewId: string;
  setReviews: Dispatch<SetStateAction<any>>;
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

      //   setReviews((prevState) => {
      //     return prevState?.map((state) => {
      //       if (state._id === json.post._id) {
      //         return {
      //           ...json.post,
      //         };
      //       } else {
      //         return state;
      //       }
      //     });
      //   });
    } catch (error) {
      setErrorMessage('Cannot update like/dislike state');
    }
  };

  return { update, errorMessage };
}
