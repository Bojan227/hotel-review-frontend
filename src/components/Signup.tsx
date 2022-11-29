import React, { useState } from 'react';
import InputField from './InputField';
import { useSignup } from '../hooks/useSignup';
import { PrimaryButton } from './buttons/PrimaryButton';
import { Link } from 'react-router-dom';

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
    <form className="main-form" onSubmit={handleSubmit}>
      <div>
        <h1>Signup</h1>
        <label htmlFor="email">Email</label>
        <InputField
          type="text"
          value={email}
          onChange={(email) => setEmail(email)}
        />
        <label htmlFor="password">Password</label>
        <InputField
          type="password"
          value={password}
          onChange={(password) => setPassword(password)}
        />
        <label htmlFor="displayName">Display Name</label>
        <InputField
          type="text"
          value={displayName}
          onChange={(displayName) => setDisplayName(displayName)}
        />
        {error && <h1>{error}</h1>}
        <div className="buttons">
          <PrimaryButton
            disabled={!email || !password || !displayName ? true : false}
          >
            Sign up
          </PrimaryButton>
          <Link to="/login">
            <PrimaryButton disabled={false}>Login</PrimaryButton>
          </Link>
        </div>
      </div>
    </form>
  );
}
