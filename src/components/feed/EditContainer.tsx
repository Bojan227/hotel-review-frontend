import { useEffect, useState } from 'react';
import EditForm from './EditForm';
import { useParams } from 'react-router-dom';

export default function EditContainer() {
  const [text, setText] = useState('');
  const [hotelName, setHotelName] = useState('');
  const [address, setAddress] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { hotelId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      try {
        const res = await fetch(`http://localhost:3000/hotel/${hotelId}`);
        const data = await res.json();
        const { text, hotelName, address, imageUrl } = data[0];
        setText(text);
        setHotelName(hotelName);
        setAddress(address);
        setImageUrl(imageUrl);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  if (isLoading) {
    return <h1>Loadinng....</h1>;
  }

  return (
    <div className="edit-container">
      {imageUrl && <img src={imageUrl} />}
      <EditForm
        {...{ text, setText, hotelName, setHotelName, address, setAddress }}
      />
    </div>
  );
}
