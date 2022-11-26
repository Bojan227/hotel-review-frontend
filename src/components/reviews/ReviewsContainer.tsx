import ReviewCard from './ReviewCard';
import reviewData from './reviewData';
import { useParams } from 'react-router-dom';
import './reviews.css';

export default function ReviewsContainer() {
  const { hotelId } = useParams();

  return (
    <div className="reviews-container">
      {reviewData.map((data) => (
        <ReviewCard {...{ ...data }} />
      ))}
    </div>
  );
}
