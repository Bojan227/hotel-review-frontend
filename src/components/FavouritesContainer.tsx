import useUserContext from '../hooks/useUserContext';
import HotelCard from './feed/HotelCard';
import { v4 as uuidv4 } from 'uuid';
export default function FavouritesContainer() {
  const userContext = useUserContext();

  return (
    <div className="favourites-container">
      <h1>Favourites</h1>
      {userContext.user &&
        userContext.user.favourites.map((hotel) => (
          <HotelCard key={uuidv4()} {...{ ...hotel }} />
        ))}
    </div>
  );
}
