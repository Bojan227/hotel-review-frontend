import { HotelDataType } from './types/types';
import { Link } from 'react-router-dom';
import { PrimaryButton } from '../buttons/PrimaryButton';
import useUserContext from '../../hooks/useUserContext';
import OverallRating from '../OverallRating';

export default function HotelCard({
  _id,
  imageUrl,
  hotelName,
  address,
  text,
}: HotelDataType) {
  const userContext = useUserContext();

  return (
    <div className="hotel-card">
      <img src={imageUrl} />
      <div className="hotel-card-info">
        <h2>{hotelName}</h2>
        <h3>{address}</h3>
        {_id && <OverallRating hotelId={_id} />}
        <h1>Description</h1>
        <p>{text}</p>
        <div className="buttons">
          <Link to={`/h/${_id}`}>
            <PrimaryButton disabled={false}>Reviews</PrimaryButton>
          </Link>
          {userContext?.user?.role === 'admin' && (
            <Link to={`/edit/${_id}`}>
              <PrimaryButton disabled={false}>Edit</PrimaryButton>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
