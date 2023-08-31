"use client";
import { signIn } from "next-auth/react";
export default async function Login() {

  return (
    <li className="list-none">
      <button onClick={() => signIn()} className="text-sm bg-black bg-opacity-10 hover:bg-opacity-20 py-2 px-4 rounded-lg disabled:pointer-events-none">
        Sign In
      </button>
    </li>
  );
}
