import InputField from '../InputField';
import useEditHotelDetails from '../../hooks/useEditHotelDetails';
import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { PrimaryButton } from '../buttons/PrimaryButton';

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
    <form onSubmit={handleSubmit} className="edit-form">
      <label htmlFor="hotelName">Hotel Name</label>
      <InputField
        type="hotelName"
        value={hotelName}
        onChange={(hotelName) => setHotelName(hotelName)}
      />
      <label htmlFor="address">Address</label>
      <InputField
        type="address"
        value={address}
        onChange={(address) => setAddress(address)}
      />
      <label htmlFor="text">Description</label>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />

      {error}
      {message && <Navigate to="/" />}
      <PrimaryButton disabled={false}>Submit</PrimaryButton>
    </form>
  );
}
