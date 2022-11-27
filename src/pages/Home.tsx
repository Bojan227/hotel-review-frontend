import { useEffect } from 'react';
import HotelContainer from '../components/feed/HotelContainer';
import useFetch from '../hooks/useFetch';

export default function Home() {
  const { getData, data } = useFetch();

  useEffect(() => {
    getData('http://localhost:3000/hotel');
  }, []);

  return <main>{data && <HotelContainer hotelData={data} />}</main>;
}
