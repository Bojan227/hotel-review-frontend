import React, { useState, Dispatch, SetStateAction } from 'react';
import { useParams } from 'react-router-dom';
import useCreateReview from '../../hooks/useCreateReview';
import { ReviewButton } from '../buttons/ReviewButton';
import { StarRating } from '../StarRating';
import { ReviewType } from './types/ReviewTypes';

export default function CreateReviewForm({
  setReviews,
}: {
  setReviews: Dispatch<SetStateAction<ReviewType[] | undefined>>;
}) {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const { hotelId } = useParams();
  const { isLoading, error, createReview } = useCreateReview();

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    await createReview(text, hotelId, rating, setReviews);
    setText(() => '');
    setHover(() => 0);
  }

  console.log(rating);
  return (
    <form onSubmit={handleSubmit} className="review-form">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Tell us your experience"
      />
      <StarRating {...{ rating, setRating, hover, setHover }} />
      <ReviewButton
        className="review-btn"
        disabled={rating === 0 || !text ? true : false}
      >
        Rate
      </ReviewButton>
    </form>
  );
}
