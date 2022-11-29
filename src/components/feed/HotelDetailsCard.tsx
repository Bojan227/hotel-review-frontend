import { HotelDataType } from './types/types';
import Favourite from '../svgs/Favourite';
import useUpdateFavourites from '../../hooks/useUpdateFavourites';
import useUserContext from '../../hooks/useUserContext';
import { Link } from 'react-router-dom';
import OverallRating from '../OverallRating';
import { PrimaryButton } from '../buttons/PrimaryButton';
import { ReviewType } from '../reviews/types/ReviewTypes';

export default function HotelDetailsCard({
  _id,
  imageUrl,
  hotelName,
  address,
  text,
  reviews,
}: HotelDataType & { reviews: ReviewType[] | undefined }) {
  const { updateFavourites } = useUpdateFavourites();
  const userContext = useUserContext();

  return (
    <div className="hotel-details-card">
      <img src={imageUrl} />
      <div className="hotel-details-card-info">
        <div>
          <h1>{hotelName}</h1>
          <p>{address}</p>
        </div>

        <OverallRating hotelId={_id} reviews={reviews} />
        <div className="bottom-section">
          <div>
            <h2>Description</h2>
            <p>{text}</p>
          </div>
          <div>
            {userContext.user ? (
              <Favourite
                updateFavourites={() => updateFavourites({ hotelId: _id })}
                hotelId={_id}
              />
            ) : null}
            {userContext?.user?.role === 'admin' && (
              <Link to={`/edit/${_id}`}>
                <PrimaryButton disabled={false}>Edit</PrimaryButton>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
