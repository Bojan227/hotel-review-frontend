import { useEffect, useState } from 'react';
import HotelContainer from '../components/feed/HotelContainer';
import useFetch from '../hooks/useFetch';
import SearchContainer from '../components/SearchContainer';

export default function Home() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const { getData, data } = useFetch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(async () => {
      getData(`http://localhost:3000/hotel/?name=${name}&address=${address}`);
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [name, address]);

  return (
    <main>
      <SearchContainer {...{ name, setName, address, setAddress }} />
      {isLoading && <h1>Loading...</h1>}
      {data && <HotelContainer hotelData={data} />}
    </main>
  );
}
