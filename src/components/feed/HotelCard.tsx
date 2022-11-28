import { HotelDataType } from './types/types';
import { Link } from 'react-router-dom';
import { ReviewButton } from '../buttons/ReviewButton';
import useUserContext from '../../hooks/useUserContext';

export default function HotelCard({
  _id,
  imageUrl,
  hotelName,
  address,
  text,
  imageId,
}: HotelDataType) {
  const userContext = useUserContext();

  return (
    <div className="hotel-card">
      <img src={imageUrl} />
      <div className="hotel-card-info">
        <h2>{hotelName}</h2>
        <h3>{address}</h3>
        <h4>Overall Rating</h4>
        <p>{text}</p>
        <div>
          <Link to={`/h/${_id}`}>
            <ReviewButton disabled={false} className="review-btn-card">
              Reviews
            </ReviewButton>
          </Link>
          {userContext.user.role === 'admin' && (
            <Link to={`/edit/${_id}`}>
              <button>Edit</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
