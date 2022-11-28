import { useEffect, useState } from 'react';
import InputField from './InputField';
export default function SearchContainer({
  name,
  address,
  setAddress,
  setName,
}: {
  name: string;
  address: string;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <form>
      Search By Hotel Name
      <InputField
        type="search"
        value={name}
        onChange={(name) => setName(name)}
      />
      Search By Address
      <InputField
        type="search"
        value={address}
        onChange={(address) => setAddress(address)}
      />
    </form>
  );
}
