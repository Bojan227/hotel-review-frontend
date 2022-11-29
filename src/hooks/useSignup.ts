import { useState } from 'react';

interface SignupProps {
  email: string;
  password: string;
  displayName: string;
}

export const useSignup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const signup = async ({ email, password, displayName }: SignupProps) => {
    setIsLoading(true);

    const res = await fetch(
      'https://hotel-review-api.onrender.com/user/signup',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          displayName,
        }),
      }
    );
    const { message, error } = await res.json();
    if (res.ok) {
      setMessage(message);
    } else {
      setError(error);
    }
  };

  return {
    signup,
    error,
    message,
    isLoading,
  };
};
