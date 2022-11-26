import { ReviewType } from './types/ReviewTypes';

export default function ReviewCard({
  createdBy,
  text,
  rating,
  likes,
  dislikes,
  hotelId,
}: ReviewType) {
  return (
    <div className="review-card">
      <h1>{createdBy.displayName}</h1>
      <h1>{text}</h1>
      <h2>{rating}</h2>
    </div>
  );
}
