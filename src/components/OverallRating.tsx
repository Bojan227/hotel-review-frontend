import { StarRating } from './StarRating';
import { useEffect } from 'react';
import useFetch from '../hooks/useFetch';

export default function OverallRating({ hotelId }: { hotelId: string }) {
  const { data, getData } = useFetch();
  useEffect(() => {
    if (hotelId) {
      getData(`http://localhost:3000/review/rating/${hotelId}`);
    }
  }, []);

  return (
    <div>
      <h2>Overall Rating</h2>
      {data && (
        <div className="rating">
          <StarRating rating={data[0]?.totalRating || 0} />
          <h3>{data[0]?.totalRating}</h3>
        </div>
      )}
    </div>
  );
}
