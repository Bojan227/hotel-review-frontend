import { StarRating } from './StarRating';
import { useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import { ReviewType } from './reviews/types/ReviewTypes';

export default function OverallRating({
  hotelId,
  reviews,
}: {
  hotelId: string;
  reviews?: ReviewType[] | undefined;
}) {
  const { data, getData } = useFetch();

  useEffect(() => {
    if (hotelId) {
      getData(`http://localhost:3000/review/rating/${hotelId}`);
    }
  }, [reviews?.length]);

  return (
    <div className="overall-rating">
      <h2>Overall Rating</h2>
      {data && (
        <div className="rating">
          <StarRating rating={data[0]?.totalRating || 0} />
          <h3>{data[0]?.totalRating.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
}
