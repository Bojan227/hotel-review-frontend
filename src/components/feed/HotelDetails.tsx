import { HotelDataType } from './types/types';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import useGetReviews from '../../hooks/useGetReviews';
import HotelDetailsCard from './HotelDetailsCard';
import CreateReviewForm from '../reviews/CreateReviewForm';
import ReviewsContainer from '../reviews/ReviewsContainer';
import './feed.css';
import { useEffect } from 'react';

export default function HotelDetails() {
  const { hotelId } = useParams();
  const { data, getData } = useFetch();
  const { reviews, setReviews, getReviews } = useGetReviews();
  useEffect(() => {
    getData(`http://localhost:3000/hotel/${hotelId}`);
    getReviews(`http://localhost:3000/review/${hotelId}`);
  }, []);

  return (
    <div className="hotel-details">
      {data && (
        <HotelDetailsCard
          {...{ ...(data[0] as HotelDataType) }}
          reviews={reviews}
        />
      )}
      {reviews && (
        <ReviewsContainer reviews={reviews} setReviews={setReviews} />
      )}
      {reviews && <CreateReviewForm setReviews={setReviews} />}
    </div>
  );
}
