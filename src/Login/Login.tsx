import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  let nav = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
  }

  return (
    <div className="Login flex h-screen w-screen items-center justify-center">
      <form
        className="p-6 max-w-sm max-h-min flex flex-col bg-white rounded-md drop-shadow"
        onSubmit={handleSubmit} >
        <h1 className="text-xl font-bold mb-2.5">Media Map Login</h1>
        <label htmlFor="username">Username</label>
        <input className="border px-4 py-1 mb-2.5" type="text" name="username" id="username" />
        <label htmlFor="password">Password</label>
        <input className="border px-2 py-1" type="password" name="password" id="password" />
        <button 
          className="w-min whitespace-nowrap px-6 py-1 mt-5 border border-green-600
          font-bold text-green-600 rounded-full self-center hover:bg-gradient-to-tr from-green-600 to-green-400 hover:text-white"
          type="submit"
        >
          Log In
        </button>
      </form>
    </div>
  );
}

export default Login;
