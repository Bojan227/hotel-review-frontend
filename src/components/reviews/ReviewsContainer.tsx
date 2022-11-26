import ReviewCard from './ReviewCard';
import reviewData from './reviewData';
export default function ReviewsContainer() {
  return (
    <div className="reviews-container">
      {reviewData.map((data) => (
        <ReviewCard {...{ ...data }} />
      ))}
    </div>
  );
}
