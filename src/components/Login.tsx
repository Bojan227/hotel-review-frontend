import React, { useState } from 'react';
import InputField from './InputField';
import useLogin from '../hooks/useLogin';
import { LoginButton } from './buttons/LoginButton';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error } = useLogin();

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    await login(email, password);
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
      <LoginButton
        className="login-btn"
        disabled={!email || !password ? true : false}
      >
        Login
      </LoginButton>
      {error}
    </form>
  );
}
