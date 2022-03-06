import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  let nav = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Login;
