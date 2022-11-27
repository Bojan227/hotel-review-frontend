import { useState } from 'react';

export default function useGetUsers() {
  const [fetchedUsers, setUsers] = useState();
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

  return { getUsers, fetchedUsers, errorMessage };
}
