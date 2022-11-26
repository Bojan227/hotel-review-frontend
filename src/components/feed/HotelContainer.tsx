import hotelData from './mockData';
import HotelCard from './HotelCard';
import './feed.css';

export default function HotelContainer() {
  return (
    <div className="hotel-container">
      {hotelData.map((data, i) => (
        <HotelCard key={i} {...{ ...data }} />
      ))}
    </div>
  );
}
