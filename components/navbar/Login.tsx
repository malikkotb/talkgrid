"use client";
import { signIn } from "next-auth/react";
import { Button } from "../ui/button";
export default async function Login() {
  return (
    <li className="list-none">
      <Button onClick={() => signIn()}>Sign In</Button>
    </li>
  );
}
