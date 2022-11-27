import { useState } from 'react';
import { UserType } from '../context/userContext';

export default function useGetUsers() {
  const [users, setUsers] = useState<UserType[]>();
  const [errorMessage, setErrorMessage] = useState('');

  const getUsers = async (uri: string) => {
    const res = await fetch(uri);
    const { users } = await res.json();

    if (res.ok) {
      setUsers(users);
    } else {
      setErrorMessage('Failed to fetch users');
    }
  };

  return { getUsers, users, errorMessage };
}
