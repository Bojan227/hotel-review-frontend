import useUserContext from '../hooks/useUserContext';
import HotelCard from './feed/HotelCard';

export default function FavouritesContainer() {
  const userContext = useUserContext();

  return (
    <div className="favourites-container">
      <h1>Favourites</h1>
      {userContext.user &&
        userContext.user.favourites.map((hotel) => (
          <HotelCard {...{ ...hotel }} />
        ))}
    </div>
  );
}
