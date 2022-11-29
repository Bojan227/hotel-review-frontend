import HotelCard from './HotelCard';
import { HotelDataType } from './types/types';
import { v4 as uuidv4 } from 'uuid';

interface HotelContainerProps {
  hotelData: HotelDataType[];
}
import './feed.css';

export default function HotelContainer({ hotelData }: HotelContainerProps) {
  return (
    <div className="hotel-container">
      {hotelData.map((data, i) => (
        <HotelCard key={uuidv4()} {...{ ...data }} />
      ))}
    </div>
  );
}
