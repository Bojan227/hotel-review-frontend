import { HotelDataType } from './types/types';
import { useParams } from 'react-router-dom';
import hotelData from './mockData';
import HotelDetailsCard from './HotelDetailsCard';
import CreateReviewForm from '../reviews/CreateReviewForm';
import ReviewsContainer from '../reviews/ReviewsContainer';
import './feed.css';

export default function HotelDetails() {
  const { hotelId } = useParams();

  return (
    <div className="hotel-details">
      {<HotelDetailsCard {...{ ...hotelData[0] }} />}
      <ReviewsContainer />
      <CreateReviewForm />
    </div>
  );
}
