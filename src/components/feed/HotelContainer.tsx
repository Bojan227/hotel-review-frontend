import HotelCard from './HotelCard';
import { HotelDataType } from './types/types';

interface HotelContainerProps {
  hotelData: HotelDataType[];
}
import './feed.css';

export default function HotelContainer({ hotelData }: HotelContainerProps) {
  return (
    <div className="hotel-container">
      {hotelData.map((data, i) => (
        <HotelCard key={i} {...{ ...data }} />
      ))}
    </div>
  );
}
