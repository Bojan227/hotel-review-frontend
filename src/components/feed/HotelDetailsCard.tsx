import { HotelDataType } from './types/types';
import Favourite from '../svgs/Favourite';

export default function HotelDetailsCard({
  _id,
  imageUrl,
  hotelName,
  address,
  text,
  imageId,
}: HotelDataType) {
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
        <Favourite />
      </div>
    </div>
  );
}
