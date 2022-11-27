import { HotelDataType } from './types/types';
import { Link } from 'react-router-dom';

export default function HotelCard({
  _id,
  imageUrl,
  hotelName,
  address,
  text,
  imageId,
}: HotelDataType) {
  return (
    <div className="hotel-card">
      <img src={imageUrl} />
      <div className="hotel-card-info">
        <h2>{hotelName}</h2>
        <h3>{address}</h3>
        <h4>Overall Rating</h4>
        <p>{text}</p>
        <Link to={`h/${_id}`}>
          <button>Reviews</button>
        </Link>
      </div>
    </div>
  );
}
