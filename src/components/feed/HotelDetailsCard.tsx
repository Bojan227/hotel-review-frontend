import { HotelDataType } from './types/types';
import Favourite from '../svgs/Favourite';
import useUpdateFavourites from '../../hooks/useUpdateFavourites';

export default function HotelDetailsCard({
  _id,
  imageUrl,
  hotelName,
  address,
  text,
  imageId,
}: HotelDataType) {
  const { updateFavourites } = useUpdateFavourites();

  return (
    <div className="hotel-details-card">
      <img src={imageUrl} />
      <div className="hotel-details-card-info">
        <div>
          <h2>{hotelName}</h2>
          <p>{address}</p>
        </div>

        <h4>Overall Rating</h4>
        <div>
          <h1>Description</h1>
          <p>{text}</p>
        </div>
        <Favourite
          updateFavourites={() => updateFavourites({ hotelId: _id })}
          hotelId={_id}
        />
      </div>
    </div>
  );
}
