import { useState, Dispatch, SetStateAction } from 'react';

interface editHotelDetailsProps {
  hotelName: string;
  address: string;
  text: string;
  hotelId: string;
  setHotelState: Dispatch<SetStateAction<any>>;
}

export default function useEditHotelDetails() {
  const [error, setError] = useState('');
  const editHotelDetails = async ({
    hotelName,
    address,
    text,
    hotelId,
  }: editHotelDetailsProps) => {
    try {
      const res = await fetch('http://localhost:3000/hotel/', {
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

      //   setHotelState((prevState) => {
      //     return prevState?.map((state) => {
      //       if (state._id === json.post._id) {
      //         return {
      //           ...json.post,
      //         };
      //       } else {
      //         return state;
      //       }
      //     });
      //   });
    } catch (error) {
      setError('Cannot update like/dislike state');
    }
  };
}
