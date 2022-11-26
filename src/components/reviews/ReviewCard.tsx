import { ReviewType } from './types/ReviewTypes';
import { StarRating } from '../StarRating';
import { Like } from '../svgs/Like';
import { Dislike } from '../svgs/Dislike';

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
      <div>
        <h1>{createdBy.displayName}</h1>
        <p>{text}</p>
        <StarRating rating={rating} />
      </div>
      <div>
        <Like />
        <h4>10</h4>

        <Dislike />
        <h4>10</h4>
      </div>
    </div>
  );
}
