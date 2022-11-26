import React, { useState } from 'react';
import InputField from './InputField';
import { useSignup } from '../hooks/useSignup';
import { SignupButton } from './buttons/SignupButton';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const { signup, error, isLoading, message } = useSignup();

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    await signup({ email, password, displayName });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email
        <InputField
          type="text"
          value={email}
          onChange={(email) => setEmail(email)}
        />
      </label>
      <label htmlFor="password">
        Password
        <InputField
          type="password"
          value={password}
          onChange={(password) => setPassword(password)}
        />
      </label>
      <label htmlFor="displayName">
        Display Name
        <InputField
          type="text"
          value={displayName}
          onChange={(displayName) => setDisplayName(displayName)}
        />
      </label>
      {error && <h1>{error}</h1>}
      <SignupButton
        disabled={!email || !password || !displayName ? true : false}
        className="signup-btn"
      >
        Sign up
      </SignupButton>
    </form>
  );
}
