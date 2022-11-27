import { useState } from 'react';

export default function useFetch() {
  const [data, setData] = useState<Array<[]> | any>();
  const [errorMessage, setErrorMessage] = useState('');
  const getData = async (uri: string) => {
    try {
      const res = await fetch(uri);
      const data = await res.json();

      setData(data);
    } catch (error) {
      setErrorMessage('Cannot fetch data');
    }
  };
  return { getData, errorMessage, data };
}
