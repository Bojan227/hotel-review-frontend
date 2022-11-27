import ReviewCard from './ReviewCard';
import './reviews.css';
import { ReviewType } from './types/ReviewTypes';

export default function ReviewsContainer({
  reviews,
}: {
  reviews: ReviewType[] | undefined;
}) {
  return (
    <div className="reviews-container">
      {reviews && reviews.map((review) => <ReviewCard {...{ ...review }} />)}
    </div>
  );
}
