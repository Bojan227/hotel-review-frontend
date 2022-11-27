import { Dispatch, SetStateAction } from 'react';
import ReviewCard from './ReviewCard';
import './reviews.css';
import { ReviewType } from './types/ReviewTypes';

export default function ReviewsContainer({
  reviews,
  setReviews,
}: {
  reviews: ReviewType[] | undefined;
  setReviews: Dispatch<SetStateAction<ReviewType[] | undefined>>;
}) {
  return (
    <div className="reviews-container">
      {reviews &&
        reviews.map((review) => <ReviewCard {...{ ...review, setReviews }} />)}
    </div>
  );
}
