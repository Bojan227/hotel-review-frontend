import { useEffect, useState } from 'react';
import { HotelDataType } from './feed/types/types';
import InputField from './InputField';
export default function SearchContainer({
  name,
  address,
  setAddress,
  setName,
  setHotels,
  setPage,
}: {
  name: string;
  address: string;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setHotels: React.Dispatch<React.SetStateAction<HotelDataType[]>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <form className="search-container">
      Search By Hotel Name
      <InputField
        type="search"
        value={name}
        onChange={(name) => {
          setName(name);
          setHotels([]);
          setPage(0);
        }}
      />
      Search By Address
      <InputField
        type="search"
        value={address}
        onChange={(address) => {
          setAddress(address);
          setHotels([]);
          setPage(0);
        }}
      />
    </form>
  );
}
