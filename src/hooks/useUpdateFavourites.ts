import { useState } from 'react';
import useUserContext from './useUserContext';

export default function useUpdateFavourites() {
  const userContext = useUserContext();
  const [error, setError] = useState('');

  const updateFavourites = async ({ hotelId }: { hotelId: string }) => {
    try {
      const res = await fetch(
        'https://hotel-review-api.onrender.com/user/favourites',
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${document.cookie.split('=')[1]}`,
          },
          body: JSON.stringify({
            hotelId,
          }),
        }
      );
      const { user, hotel } = await res.json();
      userContext.dispatch({ type: 'UPDATE_FAV', payload: hotel });
      localStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      setError('Cannot find any hotel');
    }
  };

  return { updateFavourites };
}
