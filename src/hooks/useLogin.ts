import useUserContext from './useUserContext';

import { useState } from 'react';

export default function useLogin() {
  const userContext = useUserContext();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    const res = await fetch(
      'https://hotel-review-api.onrender.com/user/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    const { user, token, error } = await res.json();

    if (res.ok) {
      userContext?.dispatch({ type: 'LOGIN', payload: user });
      localStorage.setItem('user', JSON.stringify(user));
      document.cookie = 'token' + '=' + (token || '') + '; path=/';
      setIsLoading(false);
    } else {
      setError(error);
      setIsLoading(false);
    }
  };

  return { login, error, isLoading };
}
