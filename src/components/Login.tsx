import React, { useState } from 'react';
import InputField from './InputField';
import useLogin from '../hooks/useLogin';
import { PrimaryButton } from './buttons/PrimaryButton';
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error } = useLogin();

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    await login(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="main-form">
      <h1>Login</h1>
      <div>
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

        <div className="buttons">
          <PrimaryButton disabled={!email || !password ? true : false}>
            Login
          </PrimaryButton>
          <Link to="/signup">
            <PrimaryButton disabled={false}>Sign up</PrimaryButton>
          </Link>
        </div>

        {error}
      </div>
    </form>
  );
}
