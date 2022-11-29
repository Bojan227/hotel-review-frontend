import { useEffect, useState } from 'react';
import HotelContainer from '../components/feed/HotelContainer';
import LoadingSpinner from '../components/LoadingSpinner';
import SearchContainer from '../components/SearchContainer';
import useGetHotels from '../hooks/useGetHotels';

export default function Home() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [page, setPage] = useState(0);
  const { getHotels, hotels, setHotels, numberOfHotels } = useGetHotels();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const timeout = setTimeout(async () => {
      getHotels(
        `http://localhost:3000/hotel/?name=${name}&address=${address}&page=${page}`
      );
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [name, address, page]);
  return (
    <main>
      <SearchContainer
        {...{ name, setName, address, setAddress, setPage, setHotels }}
      />
      {isLoading && <LoadingSpinner />}
      {hotels && <HotelContainer hotelData={hotels} />}
      {isLoading ? (
        <LoadingSpinner />
      ) : numberOfHotels && hotels.length < numberOfHotels ? (
        <button
          className="primary-btn"
          onClick={() => setPage((prevPage) => prevPage + 1)}
        >
          Load more
        </button>
      ) : null}
    </main>
  );
}
