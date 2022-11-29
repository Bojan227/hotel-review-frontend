import { useState } from 'react';
import { HotelDataType } from '../components/feed/types/types';

export default function useGetHotels() {
  const [hotels, setHotels] = useState<HotelDataType[]>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [numberOfHotels, setNumOfHotels] = useState();
  const getHotels = async (uri: string) => {
    try {
      const res = await fetch(uri);
      const { hotels, countHotels } = await res.json();

      setNumOfHotels(countHotels[0]?.hotelName);
      setHotels((prevData) => [...prevData, ...hotels]);
    } catch (error) {
      setErrorMessage('Cannot fetch data');
    }
  };
  return { getHotels, errorMessage, hotels, setHotels, numberOfHotels };
}
