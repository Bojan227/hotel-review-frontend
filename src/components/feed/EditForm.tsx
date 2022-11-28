import InputField from '../InputField';
import useEditHotelDetails from '../../hooks/useEditHotelDetails';
import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

interface EditFormProps {
  address: string;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  hotelName: string;
  setHotelName: React.Dispatch<React.SetStateAction<string>>;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

export default function EditForm({
  address,
  setAddress,
  hotelName,
  setHotelName,
  text,
  setText,
}: EditFormProps) {
  const { editHotelDetails, message, error } = useEditHotelDetails();
  const { hotelId } = useParams();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    await editHotelDetails({ hotelName, text, address, hotelId });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="hotelName">
        Hotel Name
        <InputField
          type="hotelName"
          value={hotelName}
          onChange={(hotelName) => setHotelName(hotelName)}
        />
      </label>
      <label htmlFor="address">
        Address
        <InputField
          type="address"
          value={address}
          onChange={(address) => setAddress(address)}
        />
      </label>
      <label htmlFor="text">
        Description
        <InputField
          type="text"
          value={text}
          onChange={(text) => setText(text)}
        />
      </label>
      {error}
      {message && <Navigate to="/" />}
      <button>Submit</button>
    </form>
  );
}
