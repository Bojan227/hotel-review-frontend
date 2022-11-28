import React, { useState } from 'react';
import InputField from './InputField';
import AddButton from './buttons/AddButton';
import useCreateHotel from '../hooks/useCreateHotel';
import { Navigate } from 'react-router-dom';

export default function CreateHotelForm() {
  const [hotelName, setHotelName] = useState('');
  const [address, setAddress] = useState('');
  const [text, setText] = useState('');
  const [files, setFiles] = useState<File[] | null>(null);

  const { createHotel, isLoading, error, message } = useCreateHotel();
  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (files) {
      await createHotel({ hotelName, address, text, image: files[0] });
      setFiles(null);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="hotelName">
        Hotel Name
        <InputField
          type="text"
          value={hotelName}
          onChange={(hotelName) => setHotelName(hotelName)}
        />
      </label>
      <label htmlFor="address">
        Address
        <InputField
          type="text"
          value={address}
          onChange={(address) => setAddress(address)}
        />
      </label>
      <label htmlFor="description">
        Description
        <textarea value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <input
        onChange={(e) => e.target.files && setFiles([...e.target.files])}
        type="file"
        id="actual-btn"
      />

      <label htmlFor="actual-btn">Choose File</label>

      <AddButton
        className="add-hotel-btn"
        disabled={!text || !address || !hotelName || !files ? true : false}
      >
        Add Hotel
      </AddButton>
      {files && <img src={URL.createObjectURL(files[0])} />}
      {message && <Navigate to="/" />}
    </form>
  );
}
