import React, { useState, Dispatch, SetStateAction } from 'react';
import { Link, useParams } from 'react-router-dom';
import useCreateReview from '../../hooks/useCreateReview';
import { PrimaryButton } from '../buttons/PrimaryButton';
import { StarRating } from '../StarRating';
import { ReviewType } from './types/ReviewTypes';
import useUserContext from '../../hooks/useUserContext';
import LoadingSpinner from '../LoadingSpinner';

export default function CreateReviewForm({
  setReviews,
}: {
  setReviews: Dispatch<SetStateAction<ReviewType[] | undefined>>;
}) {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const { hotelId } = useParams();
  const { createReview, isLoading } = useCreateReview();
  const userContext = useUserContext();

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    await createReview(text, hotelId, rating, setReviews);
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return userContext.user ? (
    <form onSubmit={handleSubmit} className="review-form">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Tell us your experience"
      />
      <StarRating {...{ rating, setRating, hover, setHover }} />
      <PrimaryButton disabled={rating === 0 || !text ? true : false}>
        Rate
      </PrimaryButton>
    </form>
  ) : (
    <div className="review-form">
      <h1>Want to make your first review</h1>
      <Link to="/signup"> Signup here</Link>
    </div>
  );
}
