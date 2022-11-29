import { useState, Dispatch, SetStateAction } from 'react';

interface editHotelDetailsProps {
  hotelName: string;
  address: string;
  text: string;
  hotelId: string | undefined;
}

export default function useEditHotelDetails() {
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const editHotelDetails = async ({
    hotelName,
    address,
    text,
    hotelId,
  }: editHotelDetailsProps) => {
    try {
      const res = await fetch('https://hotel-review-api.onrender.com/hotel/', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${document.cookie.split('=')[1]}`,
        },
        body: JSON.stringify({
          hotelName,
          address,
          text,
          hotelId,
        }),
      });

      const newHotel = await res.json();

      setMessage('Hotel details was successfully updated');
    } catch (error) {
      setError('Cannot update hotel details');
    }
  };

  return { editHotelDetails, error, message };
}
