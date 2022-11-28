import { useState } from 'react';
interface CreateHotelProps {
  hotelName: string;
  address: string;
  text: string;
  image: File;
}

export default function useCreateHotel() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const createHotel = async ({
    hotelName,
    address,
    text,
    image,
  }: CreateHotelProps) => {
    const reader: any = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = () => {
      uploadWithImage(reader.result);
    };

    const uploadWithImage = async (img: string) => {
      setIsLoading(true);
      try {
        const res = await fetch('http://localhost:3000/hotel/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${document.cookie.split('=')[1]}`,
          },
          body: JSON.stringify({
            text,
            hotelName,
            address,
            image: img,
          }),
        });

        const hotel = await res.json();
        console.log(hotel);
        setMessage('Success');
      } catch (err) {
        setError('Something went wrong');
      } finally {
        setIsLoading(false);
      }
    };
  };
  return { createHotel, isLoading, error, message };
}
