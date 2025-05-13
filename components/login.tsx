'use client';

import { signIn } from 'next-auth/react';
import { FaGithub } from 'react-icons/fa';

export const LoginComponent = () => {
  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
      <legend className="fieldset-legend">Login</legend>

      <label className="label">Email</label>
      <input type="email" className="input" placeholder="Email" />

      <label className="label">Password</label>
      <input type="password" className="input" placeholder="Password" />

      <button className="btn btn-neutral mt-4">Login</button>

      <div className="flex flex-col items-center">
        <p className="text-sm">Or continue with</p>
        <button
          className="btn bg- mt-4"
          onClick={() => signIn('github', { callbackUrl: '/auth/home' })}
        >
          <FaGithub className="mr-2" />
          Github
        </button>
      </div>
    </fieldset>
  );
};
